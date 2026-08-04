# BioRadar

**Biodiversity intelligence for Indian waters, from environmental DNA.**

Smart India Hackathon 2026 · Problem Statement SIH25042 (Ministry of Earth Sciences)
K.C. College of Engineering, Thane

Maintainer: **Om Tawde** ([@omtawde09](https://github.com/omtawde09)) ·
Repository: [omtawde09/BioRadar](https://github.com/omtawde09/BioRadar)

BioRadar takes raw eDNA sequencing reads and turns them into something a forest
officer can act on: a map with a red pin, an invasive-species alert with a
confidence score, and a tamper-evident record of how that conclusion was reached.

Layer 1 — the bioinformatics — is **forked from a peer-reviewed pipeline**
rather than rebuilt. See [NOTICE](NOTICE). Everything above it is BioRadar's.

---

## Status

| Layer | Owner | State |
|---|---|---|
| **1. Pipeline (forked eDNA)** | Om | **Working.** Runs end-to-end in Docker, 15/15 rules |
| **1b. Integration layer** | Om | **Working.** Normalizer, runner, chain client, Time Machine |
| 2. Reference data (India-curated) | Jimeet | **COI reference built** (33,611 seqs / 8,020 species, 43% Indian). Needs curation + invasive list |
| 3. Flagging engine | Anshika | Not started |
| 4. Analytics / CBI | Tanay | Not started |
| 5. WebGIS dashboard | Ishwar | Not started |
| 6. Backend / chain ledger | Parth | Not started ([test double](integration/mock_backend.py) available) |

**Everyone can start now.** Mock data that is byte-compatible with real pipeline
output is one command away — nobody needs Docker or the 11.7 GB image to build
their component.

---

## Quick start

### Just run it (one command)

```bash
docker compose up app
```

Open **http://localhost:8080** — every dataset with its pre-flight status, a Run
button, live progress, and the species report. Full guide:
[docs/RUNNING.md](docs/RUNNING.md).

### I just want data to build against (30 seconds, no Docker)

```bash
python -m bioradar.mockgen -o mock/ --rounds 3
```

You get 18 Indian sites × 3 sampling rounds: `samples.csv` with coordinates,
`taxonomy_normalized.csv`, `sample_summary.csv`, an `alerts.example.json`, and
per-sample files for temporal comparison. Read
[docs/CONTRACTS.md](docs/CONTRACTS.md) before writing code against it.

### I want to see real pipeline output without running anything

```bash
python -m bioradar.normalize testing_data/final_results.zip -o out/
```

That zip is genuine output from the upstream pipeline, committed to the repo.

### I want to run the pipeline for real

Needs Docker and the `dwheelerau/edna:v1.4` image (11.7 GB).

```bash
python -m bioradar.pipeline_runner testing_data/fastq_data --mode docker --sample-id BR-2026-GOA-001
```

Roughly 7 minutes on the test dataset. Output lands in
`runs/<run-id>/final_results/`. Add `--dry-run` to validate the DAG without
executing it.

### I want the stack up

```bash
docker compose up -d db                # PostGIS, works today
docker compose --profile full up       # everything, once backend/ and dashboard/ exist
```

---

## Repository layout

```
bioradar/                   Om's integration package (stdlib-only, importable anywhere)
  contract.py               THE FROZEN SCHEMAS -- read this first
  normalize.py              raw QIIME2 output -> contract CSVs
  pipeline_runner.py        run the pipeline from Python, one isolated run at a time
  chain_client.py           hash artifacts, commit to the custody ledger
  time_machine.py           diff two sampling rounds at one site
  mockgen.py                realistic mock data for the whole team
  fetch_data.py             download public datasets, laid out for the pipeline
  build_reference.py        assemble an India-curated COI reference from NCBI
  train_classifier.py       train a classifier inside the container (version-safe)
  report.py                 normalized output -> readable biodiversity report
  webapp.py                 the control panel served at :8080
  preflight.py              input checks that run before a pipeline run
  mock_community.py         simulate a labelled demo dataset from real references

bioradar-pipeline/          Layer 1, forked from the eDNA-Container App
  Snakefile                 upstream DAG + BioRadar's two rules
  rules/bioradar.smk        normalize_taxonomy, emit_hash
  scripts/ report/ env/     upstream, unmodified
  database/qiime2-qza/      MIDORI2 12S classifier (gitignored, see docs/PIPELINE.md)

data/                       sites.csv, species_pool.csv, downloaded datasets,
                            reference_coi_india/ (India-curated COI reference)
docs/RUNNING.md             HOW TO RUN EVERYTHING -- start here
docs/TESTING.md             how to verify each layer
docs/CONTRACTS.md           the integration contracts, with the traps spelled out
integration/mock_backend.py test double for the chain endpoints
ci/check_integration.sh     run this after every commit
tests/                      76 tests, including against real pipeline output
legacy-edna-container/      upstream Flask GUI, kept for attribution, not used
```

---

## Before you write code

**Read [docs/CONTRACTS.md](docs/CONTRACTS.md).** Most hackathon integration
failures are two people assuming slightly different formats, not any single
component being hard.

Three things that will bite you if you skip it:

- `taxon_id` **can be empty** — some references carry no NCBI taxid.
- `species` **is empty for genus-level calls** — a third of real ASVs stop at
  genus. Filter on `rank == 'species'`.
- `rank == 'unassigned'` rows are **real detections with real read counts**, and
  often the most scientifically interesting. Don't drop them.

Do not parse the raw `Taxon` lineage string yourself. Use the normalizer.

---

## Checks

```bash
./ci/check_integration.sh          # 14 checks, ~2 min (needs Docker for one)
./ci/check_integration.sh --fast   # skip Docker
python -m pytest tests/ -q         # 76 tests, ~9 s
```

CI verifies the *boundaries between people*: that the normalizer still matches
the frozen schema, that mock data has not drifted from real output, that the
hash → POST → verify round trip works, and that the pipeline still succeeds when
the backend is down.

---

## The marker decision

**COI (Leray mlCOIintF / jgHCO2198) is the primary marker**, as the original
plan specified. It is the only marker with usable Indian data that resolves to
species, and an India-curated COI classifier is built and working
(`bioradar-pipeline/database/qiime2-qza/classifier-coi-india-2026.qza`).

**12S fish** remains supported and is what the bundled test data uses, via the
MIDORI2 classifier shipped in the Docker image. Keep it for the invasive-fish
demo narrative — there is no public Indian 12S eDNA dataset, so those reads must
come from elsewhere.

Both markers, plus 18S V9, are selectable with `train_classifier --marker`.

Note on datasets: two Indian datasets (PRJNA1296846 Lakshadweep, PRJNA1040471
Goa foraminifera) were submitted with quality scores stripped and **cannot be
denoised by DADA2**. `bioradar.preflight` detects this in about a second.

---

## License and attribution

This repository is licensed under **Apache-2.0** ([LICENSE](LICENSE)) — the
license the forked pipeline carries, which BioRadar's own additions adopt as
well. That keeps a single, unambiguous license across the tree.

If you would rather release BioRadar's own code under AGPL-3.0 (the original
plan's preference, to prevent fork-and-close appropriation), Apache-2.0 is
one-way compatible with AGPLv3 — but you must then replace `LICENSE` with the
AGPLv3 text, keep the Apache-2.0 text as `LICENSE-Apache-2.0` for
`bioradar-pipeline/`, and say so here. Do not leave the two disagreeing.

Layer 1 is derived from the eDNA-Container App by Wheeler, Brancalion, Kumar and
Lintermans (NSW DPI), published in *Applied Sciences* 2024, 14(6), 2641,
[doi:10.3390/app14062641](https://doi.org/10.3390/app14062641). Full attribution
and a complete list of changes: [NOTICE](NOTICE).

We forked rather than rebuilt on purpose. Reimplementing a validated,
peer-reviewed taxonomic assignment pipeline would have consumed the largest block
of our time producing zero differentiation. The time went into the translation
layer instead — which is the part no existing tool provides.
