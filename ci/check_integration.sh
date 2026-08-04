#!/usr/bin/env bash
#
# BioRadar integration check.
#
# Run this after every commit. It verifies the boundaries between team members --
# the places where hackathons actually break -- rather than any one component's
# internals.
#
#   ./ci/check_integration.sh          full check
#   ./ci/check_integration.sh --fast   skip anything needing Docker
#
# Exit codes: 0 all good, 1 a contract is broken.

set -uo pipefail

cd "$(dirname "$0")/.." || exit 1

FAST=0
[[ "${1:-}" == "--fast" ]] && FAST=1

# Repo-relative scratch space. Deliberately not /tmp: half the team is on
# Windows, where Python resolves /tmp to C:\tmp while Git Bash means something
# else entirely, and the checks silently read each other's stale output.
WORK=".ci-work"
rm -rf "$WORK"
mkdir -p "$WORK/out"

PYTHON="${PYTHON:-python}"
PASS=0
FAIL=0
SKIP=0

green() { printf '\033[32m%s\033[0m\n' "$1"; }
red()   { printf '\033[31m%s\033[0m\n' "$1"; }
grey()  { printf '\033[90m%s\033[0m\n' "$1"; }

check() {
    local name="$1"; shift
    if "$@" >$WORK/check.log 2>&1; then
        green "  PASS  $name"
        PASS=$((PASS + 1))
    else
        red   "  FAIL  $name"
        sed 's/^/          /' $WORK/check.log | tail -15
        FAIL=$((FAIL + 1))
    fi
}

skip() {
    grey "  SKIP  $1 ($2)"
    SKIP=$((SKIP + 1))
}

echo
echo "BioRadar integration check"
echo "=========================="

# ---------------------------------------------------------------------------
echo
echo "1. Package imports"
check "bioradar package imports"        $PYTHON -c "import bioradar, bioradar.contract, bioradar.normalize, bioradar.chain_client, bioradar.time_machine, bioradar.mockgen, bioradar.pipeline_runner"
check "no third-party deps in contract" $PYTHON -c "
import ast, sys
tree = ast.parse(open('bioradar/normalize.py').read())
allowed = {'argparse','csv','io','re','sys','zipfile','pathlib','typing','bioradar','__future__'}
for node in ast.walk(tree):
    if isinstance(node, ast.Import):
        mods = [a.name.split('.')[0] for a in node.names]
    elif isinstance(node, ast.ImportFrom):
        mods = [(node.module or '').split('.')[0]]
    else:
        continue
    for m in mods:
        if m and m not in allowed:
            sys.exit(f'normalize.py imports {m}; it must stay stdlib-only so the backend can import it')
"

# ---------------------------------------------------------------------------
echo
echo "2. Unit and contract tests"
check "pytest suite" $PYTHON -m pytest tests/ -q

# ---------------------------------------------------------------------------
echo
echo "3. Contract 1: pipeline -> Anshika / Tanay / Parth"
check "normalizer runs on real pipeline output" \
    $PYTHON -m bioradar.normalize testing_data/final_results.zip -o $WORK/out

check "normalized output matches the frozen schema" $PYTHON -c "
import csv, sys
from bioradar.contract import TAXONOMY_COLUMNS, validate_taxonomy_rows
rows = list(csv.DictReader(open('$WORK/out/taxonomy_normalized.csv', newline='', encoding='utf-8')))
if list(rows[0]) != list(TAXONOMY_COLUMNS):
    sys.exit('column drift: taxonomy_normalized.csv no longer matches contract.TAXONOMY_COLUMNS')
validate_taxonomy_rows(rows)
print(f'{len(rows)} detections validated')
"

# ---------------------------------------------------------------------------
echo
echo "4. Contract 2: mock data is interchangeable with real output"
check "mock generator runs" $PYTHON -m bioradar.mockgen -o $WORK/out/mock --rounds 2

check "mock and real share a schema" $PYTHON -c "
import csv, sys
real = list(csv.DictReader(open('$WORK/out/taxonomy_normalized.csv', newline='', encoding='utf-8')))
mock = list(csv.DictReader(open('$WORK/out/mock/taxonomy_normalized.csv', newline='', encoding='utf-8')))
if list(real[0]) != list(mock[0]):
    sys.exit('mock data has drifted from real pipeline output; downstream code will break on the switch')
print('mock and real columns identical')
"

# ---------------------------------------------------------------------------
echo
echo "5. Contract 3: chain of custody"
check "hash -> POST -> verify round trip" $PYTHON -c "
import json, urllib.request
from pathlib import Path
from bioradar.chain_client import ChainClient, build_event
from integration.mock_backend import MockBackend, reset

reset()
artifact = Path('$WORK/out/taxonomy_normalized.csv')
with MockBackend(port=0) as server:
    client = ChainClient(server.url, Path('$WORK/out/queue'))
    for event_type in ('pipeline_complete', 'flagging_complete', 'cbi_computed'):
        result = client.record(build_event('CI-SAMPLE', event_type, {'taxonomy': artifact}))
        assert result['committed'], result
    body = json.loads(urllib.request.urlopen(server.url + '/api/v1/chain/verify/CI-SAMPLE').read())
assert body['chain_intact'], body
assert body['event_count'] == 3, body
print('chain verified across 3 events')
"

check "offline pipeline still succeeds (queue fallback)" $PYTHON -c "
from pathlib import Path
from bioradar.chain_client import ChainClient, build_event
client = ChainClient('http://127.0.0.1:9', Path('$WORK/out/offline_queue'))
result = client.record(build_event('CI-OFFLINE', 'pipeline_complete',
                                   {'taxonomy': Path('$WORK/out/taxonomy_normalized.csv')}))
assert result['committed'] is False
assert Path(result['queued_at']).is_file(), 'record was lost when the backend was down'
print('offline record queued, nothing lost')
"

# ---------------------------------------------------------------------------
echo
echo "6. Contract 4: Time Machine -> Ishwar's Trends view"
check "temporal diff produces a usable shape" $PYTHON -c "
import json, sys
from bioradar.time_machine import compare_files
from bioradar.contract import TIME_MACHINE_FIELDS
diff = compare_files(
    '$WORK/out/mock/by_sample/BR-2026-GOA-MANDOVI-R01.csv',
    '$WORK/out/mock/by_sample/BR-2026-GOA-MANDOVI-R02.csv',
    site_id='GOA-MANDOVI',
)
missing = set(TIME_MACHINE_FIELDS) - set(diff)
if missing:
    sys.exit(f'time machine output missing fields: {sorted(missing)}')
print('diff fields complete; summary =', json.dumps(diff['summary']['turnover']))
"

# ---------------------------------------------------------------------------
echo
echo "7. Pre-flight input checks"
check "preflight passes clean test data" $PYTHON -c "
from pathlib import Path
from bioradar import preflight
from bioradar.pipeline_runner import discover_pairs
result = preflight.run(discover_pairs(Path('testing_data/fastq_data')))
assert result.ok, result.render()
print('bundled test data passes preflight')
"

check "preflight rejects flat quality scores" $PYTHON -c "
import gzip
from pathlib import Path
from bioradar import preflight
tmp = Path('$WORK/flatq'); tmp.mkdir(parents=True, exist_ok=True)
record = chr(10).join(['@r', 'ACGTACGTAC', '+', '??????????']) + chr(10)
for mate in (1, 2):
    with gzip.open(tmp / ('x_S1_L001_R%d_001.fastq.gz' % mate), 'wt') as fh:
        fh.write(record * 100)
result = preflight.run([tmp / 'x_S1_L001_R1_001.fastq.gz'])
assert not result.ok, 'flat-quality data was not rejected'
print('flat-quality data correctly rejected')
"

# ---------------------------------------------------------------------------
echo
echo "8. Container compatibility (Python 3.8)"
# The web app imports the whole package INSIDE the pipeline image, which ships
# Python 3.8. Subscripted builtins outside annotations (`Callable[[dict[...]]]`
# as a runtime assignment) raise TypeError there but are fine on the dev
# machine's 3.10+. This catches that class of regression.
if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1 && [[ $FAST -eq 0 ]]; then
    # env MSYS_NO_PATHCONV=1: Git Bash rewrites the /bioradar paths in the -v
    # and -e arguments into Windows paths, and the import then fails for the
    # wrong reason.
    check "package imports under the container Python" \
        env MSYS_NO_PATHCONV=1 docker run --rm \
        -v "$(pwd):/bioradar" -e PYTHONPATH=/bioradar -w /bioradar \
        --entrypoint python "${BIORADAR_PIPELINE_IMAGE:-dwheelerau/edna:v1.4}" -c "
import bioradar.contract, bioradar.normalize, bioradar.chain_client
import bioradar.time_machine, bioradar.mockgen, bioradar.pipeline_runner
import bioradar.preflight, bioradar.report, bioradar.webapp
print('all modules import on Python 3.8')
"
else
    skip "package imports under the container Python" "needs docker (or --fast given)"
fi

# ---------------------------------------------------------------------------
echo
echo "9. Pipeline definition"
if [[ $FAST -eq 1 ]]; then
    skip "Snakemake DAG dry-run" "--fast"
elif ! command -v docker >/dev/null 2>&1; then
    skip "Snakemake DAG dry-run" "docker not on PATH"
elif ! docker info >/dev/null 2>&1; then
    skip "Snakemake DAG dry-run" "docker daemon not running"
else
    check "pipeline DAG is valid (dry run)" $PYTHON -m bioradar.pipeline_runner \
        testing_data/fastq_data --mode docker --dry-run --run-id "ci-$(date +%s)"
fi

# ---------------------------------------------------------------------------
echo
echo "10. Downstream contracts (activate as components land)"

# These stay skipped until the owning component exists, then start enforcing
# automatically. Nobody has to remember to switch them on.
if $PYTHON -c "import bioradar.flagging" 2>/dev/null; then
    check "pipeline output -> flagging engine" $PYTHON -c "
import csv
from bioradar.flagging import flagging_engine
rows = list(csv.DictReader(open('$WORK/out/taxonomy_normalized.csv', newline='', encoding='utf-8')))
alerts = flagging_engine.run(rows)
assert 'alerts' in alerts and 'summary' in alerts, 'alerts JSON missing required keys'
print(f\"{len(alerts['alerts'])} alerts generated from real pipeline output\")
"
else
    skip "pipeline output -> flagging engine" "bioradar.flagging not implemented yet (Anshika)"
fi

if $PYTHON -c "import bioradar.analytics" 2>/dev/null; then
    check "flagging output -> analytics / CBI" $PYTHON -c "
import json
from bioradar.analytics import cbi
alerts = json.load(open('$WORK/out/mock/alerts.example.json', encoding='utf-8'))
score = cbi.compute(alerts)
assert 0 <= score['cbi'] <= 100, f\"CBI out of range: {score['cbi']}\"
print(f\"CBI = {score['cbi']}\")
"
else
    skip "flagging output -> analytics / CBI" "bioradar.analytics not implemented yet (Tanay)"
fi

# ---------------------------------------------------------------------------
echo
echo "11. Reference data"
check "sites.csv has coordinates for every site" $PYTHON -c "
import csv, sys
rows = list(csv.DictReader(open('data/sites.csv', newline='', encoding='utf-8')))
for row in rows:
    lat, lon = float(row['latitude']), float(row['longitude'])
    if not (6 <= lat <= 38) or not (67 <= lon <= 98):
        sys.exit(f\"{row['site_id']} is outside India's bounding box: {lat},{lon}\")
print(f'{len(rows)} sites, all within India')
"

echo
echo "=========================="
printf 'passed %d, failed %d, skipped %d\n' "$PASS" "$FAIL" "$SKIP"
echo

if [[ $FAIL -gt 0 ]]; then
    red "INTEGRATION BROKEN -- do not merge"
    exit 1
fi
green "integration OK"
exit 0
