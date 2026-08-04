"""BioRadar control panel -- one container, one page, every dataset.

The CLI is fine for development but wrong for a demo: seven commands, each with
primers and truncation lengths that differ per dataset, is not something you want
to type in front of judges. This serves a single page that lists every known
dataset with its pre-flight status, runs one on a click, streams progress, and
shows the resulting species report.

It runs *inside* the pipeline image, so `snakemake` is already on PATH and the
pipeline executes as a local subprocess -- no Docker-in-Docker, no socket
mounting, no privileged container.

Deliberately stdlib-only. The pipeline image ships a QIIME2 conda environment;
adding FastAPI to it would mean rebuilding an 11.7 GB image, and a control panel
is not worth that.

    docker compose up app        ->  http://localhost:8080

Not to be confused with Ishwar's WebGIS dashboard: this is an operations console
for running the pipeline, not the biodiversity map.
"""

from __future__ import annotations

import json
import mimetypes
import threading
import traceback
import uuid
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

REPO_ROOT = Path(__file__).resolve().parent.parent
STATIC_DIR = Path(__file__).resolve().parent / "webapp_static"
DATASETS_FILE = REPO_ROOT / "data" / "datasets.json"

# run_id -> state
_RUNS: dict[str, dict[str, Any]] = {}
_LOCK = threading.Lock()


# --------------------------------------------------------------------------
# Datasets
# --------------------------------------------------------------------------


def load_datasets() -> list[dict[str, Any]]:
    if not DATASETS_FILE.is_file():
        return []
    payload = json.loads(DATASETS_FILE.read_text(encoding="utf-8"))
    return payload.get("datasets", [])


# Pre-flight decompresses and scans thousands of reads from every FASTQ, which
# costs tens of seconds on a multi-sample dataset. The dataset list is polled
# every few seconds, so without a cache the server spends all its time redoing
# identical work and everything else -- uploads included -- crawls behind it.
_DESCRIBE_CACHE: "dict[str, tuple[tuple, dict[str, Any]]]" = {}
_DESCRIBE_LOCK = threading.Lock()


def _fingerprint(fastq_dir: Path) -> tuple:
    """Cheap signature of a directory: changes iff the files change."""
    if not fastq_dir.is_dir():
        return ()
    entries = []
    for path in sorted(fastq_dir.glob("*.fastq.gz")):
        try:
            stat = path.stat()
        except OSError:
            continue
        entries.append((path.name, stat.st_size, int(stat.st_mtime)))
    return tuple(entries)


def describe_dataset(entry: dict[str, Any], *, refresh: bool = False) -> dict[str, Any]:
    """Add live state: is the data present, does it pass pre-flight.

    Cached against the fingerprint of the FASTQ directory. Re-running pre-flight
    on unchanged files produces the same answer every time.
    """
    cache_key = entry["id"]
    signature = (_fingerprint(REPO_ROOT / entry["fastq_dir"]), entry.get("denoiser"))
    if not refresh:
        with _DESCRIBE_LOCK:
            cached = _DESCRIBE_CACHE.get(cache_key)
        if cached and cached[0] == signature:
            return cached[1]

    described = _describe_dataset_uncached(entry)
    with _DESCRIBE_LOCK:
        _DESCRIBE_CACHE[cache_key] = (signature, described)
    return described


def _describe_dataset_uncached(entry: dict[str, Any]) -> dict[str, Any]:
    described = dict(entry)
    fastq_dir = REPO_ROOT / entry["fastq_dir"]
    described["present"] = fastq_dir.is_dir() and any(fastq_dir.glob("*.fastq.gz"))

    if not described["present"]:
        described["status"] = "missing"
        described["status_detail"] = "Not downloaded yet"
        described["findings"] = []
        return described

    described["sample_count"] = len(list(fastq_dir.glob("*_R1_001.fastq.gz")))

    if entry.get("known_issue"):
        described["status"] = "blocked"
        described["status_detail"] = entry["known_issue"]

    try:
        from bioradar import preflight
        from bioradar.pipeline_runner import discover_pairs

        pairs = discover_pairs(fastq_dir)
        result = preflight.run(
            pairs,
            forward_primer=entry.get("fprimer"),
            reverse_primer=entry.get("rprimer"),
            trunc_len_f=entry.get("trunc_len_f") or None,
            trunc_len_r=entry.get("trunc_len_r") or None,
            amplicon_length=entry.get("amplicon_length"),
        )
        findings = list(result.findings)
        blocking = result.errors

        # A dataset routed to vsearch is *expected* to fail the quality check --
        # that is why it was routed there. Reporting it as blocked would be
        # telling the user about a problem the app has already solved.
        if entry.get("denoiser") == "vsearch":
            blocking = [f for f in blocking if f.check != "quality"]
            findings = [
                f if f.check != "quality"
                else preflight.Finding(
                    "info",
                    "quality",
                    f.message,
                    "Handled: this dataset runs through vsearch OTU clustering, "
                    "which does not use quality scores.",
                )
                for f in findings
            ]

        described["findings"] = [
            {"level": f.level, "check": f.check, "message": f.message, "hint": f.hint}
            for f in findings
        ]
        if blocking:
            described["status"] = "blocked"
            described.setdefault("status_detail", blocking[0].message)
        elif "status" not in described:
            described["status"] = "ready"
            described["status_detail"] = (
                f"{described['sample_count']} sample(s), pre-flight clean"
            )
    except Exception as exc:  # noqa: BLE001
        described["findings"] = []
        described["status"] = "error"
        described["status_detail"] = f"{type(exc).__name__}: {exc}"

    classifier = entry.get("classifier")
    if classifier:
        path = REPO_ROOT / "bioradar-pipeline" / "database" / "qiime2-qza" / classifier
        described["classifier_present"] = path.is_file()
        if not path.is_file() and described.get("status") == "ready":
            described["status"] = "blocked"
            described["status_detail"] = f"Classifier {classifier} not built yet"
    else:
        described["classifier_present"] = False
    return described


def _invalidate_describe(dataset_id: str) -> None:
    with _DESCRIBE_LOCK:
        _DESCRIBE_CACHE.pop(dataset_id, None)


def _remove_registry_entry(dataset_id: str) -> bool:
    """Drop a dataset from data/datasets.json, preserving the rest of the file."""
    if not DATASETS_FILE.is_file():
        return False
    try:
        payload = json.loads(DATASETS_FILE.read_text(encoding="utf-8"))
    except ValueError:
        return False

    datasets = payload.get("datasets", [])
    remaining = [d for d in datasets if d.get("id") != dataset_id]
    if len(remaining) == len(datasets):
        return False

    payload["datasets"] = remaining
    DATASETS_FILE.write_text(
        json.dumps(payload, indent=2) + "\n", encoding="utf-8"
    )
    return True


# --------------------------------------------------------------------------
# Runs
# --------------------------------------------------------------------------


def _run_pipeline(run_id: str, entry: dict[str, Any]) -> None:
    """Execute one pipeline run in a worker thread."""
    from bioradar.pipeline_runner import PipelineRunner, discover_pairs

    def record(**fields: Any) -> None:
        with _LOCK:
            _RUNS[run_id].update(fields)

    def on_progress(event: dict[str, Any]) -> None:
        with _LOCK:
            state = _RUNS[run_id]
            state["events"].append(event)
            if event.get("percent") is not None:
                state["percent"] = event["percent"]
            if event.get("label"):
                state["stage"] = event["label"]

    try:
        fastq_dir = REPO_ROOT / entry["fastq_dir"]
        runner = PipelineRunner(mode="local", runs_dir=REPO_ROOT / "runs")

        classifier = entry.get("classifier")
        params: dict[str, Any] = {}
        if classifier:
            params["classifier"] = str(
                REPO_ROOT / "bioradar-pipeline" / "database" / "qiime2-qza" / classifier
            )
        for key, field in (
            ("fprimer", "fprimer"),
            ("rprimer", "rprimer"),
            ("tlf", "trunc_len_f"),
            ("tlr", "trunc_len_r"),
            ("denoiser", "denoiser"),
        ):
            if entry.get(field) is not None:
                params[key] = entry[field]

        result = runner.run(
            discover_pairs(fastq_dir),
            run_id=run_id,
            sample_id=entry["id"].upper(),
            params=params,
            progress=on_progress,
            commit_chain=False,
            # vsearch exists precisely to run data that fails the quality check,
            # so re-blocking on it here would defeat the point.
            skip_preflight=entry.get("denoiser") == "vsearch",
        )
        record(
            status="completed",
            percent=100,
            stage="Done",
            results_dir=str(result.results_dir),
            artifact_hash=result.artifact_hash,
            finished_at=datetime.now(timezone.utc).isoformat(timespec="seconds"),
        )
        _build_report(run_id, entry, Path(result.results_dir))
    except Exception as exc:  # noqa: BLE001
        record(
            status="failed",
            error=f"{type(exc).__name__}: {exc}",
            traceback=traceback.format_exc()[-4000:],
            finished_at=datetime.now(timezone.utc).isoformat(timespec="seconds"),
        )


def _build_report(run_id: str, entry: dict[str, Any], results_dir: Path) -> None:
    """Generate the biodiversity report and cache its summary for the UI."""
    try:
        from bioradar.report import analyse, load_csv, render_markdown

        taxonomy = results_dir / "taxonomy_normalized.csv"
        if not taxonomy.is_file():
            return
        detections = load_csv(taxonomy)
        samples = None
        if entry.get("samples_csv"):
            candidate = REPO_ROOT / entry["samples_csv"]
            if candidate.is_file():
                samples = load_csv(candidate)

        result = analyse(detections, samples)
        markdown = render_markdown(
            result,
            entry["name"],
            {"Dataset": entry.get("source", ""), "Marker": entry.get("marker", "")},
        )
        report_path = REPO_ROOT / "reports" / f"{run_id}.md"
        report_path.parent.mkdir(parents=True, exist_ok=True)
        report_path.write_text(markdown, encoding="utf-8")

        species = [s for s in result["species"] if s["rank"] == "species"]
        named = [s for s in species if not s.get("placeholder")]
        with _LOCK:
            _RUNS[run_id]["report"] = {
                "path": str(report_path),
                "markdown": markdown,
                "named_species": len(named),
                "placeholders": len(species) - len(named),
                "phyla": len(result["phyla"]),
                "phyla_breakdown": [
                    {"name": name, "reads": reads}
                    for name, reads in result["phyla"][:10]
                ],
                "samples": len(result["samples"]),
                "detections": result["detections"],
                "top_species": [
                    {
                        "name": s["name"],
                        "phylum": s["phylum"],
                        "reads": s["reads"],
                        "confidence": round(s["max_confidence"], 3),
                        "placeholder": bool(s.get("placeholder")),
                    }
                    for s in species[:25]
                ],
            }
    except Exception as exc:  # noqa: BLE001
        with _LOCK:
            _RUNS[run_id]["report_error"] = f"{type(exc).__name__}: {exc}"


def recover_runs() -> int:
    """Deliberately does nothing: results are session-only.

    An earlier version rebuilt the run list from `runs/` on startup so a
    container restart did not look like data loss. That is the wrong default for
    a demo machine -- the app should open clean, showing only what the person in
    front of it just analysed, not whatever was left over from testing.

    The pipeline still writes its outputs to `runs/<id>/` on disk, because
    Snakemake needs a working directory and the artifacts are what the
    chain-of-custody hashes cover. The app simply does not resurrect them.
    """
    return 0


def _unused_recover_runs() -> int:
    runs_dir = REPO_ROOT / "runs"
    if not runs_dir.is_dir():
        return 0

    known = {d["id"]: d for d in all_datasets()}
    recovered = 0
    for taxonomy in sorted(runs_dir.glob("*/final_results/taxonomy_normalized.csv")):
        run_id = taxonomy.parent.parent.name
        if run_id.startswith("_"):
            continue
        with _LOCK:
            if run_id in _RUNS:
                continue

        dataset_id = next((k for k in known if run_id.startswith(k)), None)
        entry = known.get(dataset_id or "", {})
        state: dict[str, Any] = {
            "run_id": run_id,
            "dataset_id": dataset_id or "unknown",
            "dataset_name": entry.get("name", run_id),
            "status": "completed",
            "percent": 100,
            "stage": "Done (recovered from disk)",
            "events": [],
            "started_at": datetime.fromtimestamp(
                taxonomy.stat().st_mtime, tz=timezone.utc
            ).isoformat(timespec="seconds"),
            "results_dir": str(taxonomy.parent),
        }
        with _LOCK:
            _RUNS[run_id] = state
        # Build the report even for runs that predate the dataset registry --
        # it only needs the taxonomy CSV, and a recovered run showing no species
        # looks like a failure rather than a naming mismatch.
        _build_report(run_id, entry or {"name": run_id}, taxonomy.parent)
        recovered += 1
    return recovered


def start_run(dataset_id: str) -> dict[str, Any]:
    entry = next((d for d in all_datasets() if d["id"] == dataset_id), None)
    if entry is None:
        raise KeyError(f"unknown dataset {dataset_id!r}")

    with _LOCK:
        active = [r for r in _RUNS.values() if r["status"] == "running"]
        if active:
            raise RuntimeError(
                f"a run is already in progress ({active[0]['run_id']}). "
                "The pipeline uses all available cores; wait for it to finish."
            )

    run_id = f"{dataset_id}-{datetime.now(timezone.utc):%Y%m%dT%H%M%S}-{uuid.uuid4().hex[:6]}"
    state = {
        "run_id": run_id,
        "dataset_id": dataset_id,
        "dataset_name": entry["name"],
        "status": "running",
        "percent": 0,
        "stage": "Starting",
        "events": [],
        "started_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
    }
    with _LOCK:
        _RUNS[run_id] = state

    threading.Thread(target=_run_pipeline, args=(run_id, entry), daemon=True).start()
    return state


def run_summary(state: dict[str, Any]) -> dict[str, Any]:
    """Everything the UI needs, without the full event log."""
    summary = {k: v for k, v in state.items() if k not in {"events", "report"}}
    summary["event_count"] = len(state.get("events", []))
    if "report" in state:
        report = dict(state["report"])
        report.pop("markdown", None)
        summary["report"] = report
    return summary


# --------------------------------------------------------------------------
# Uploads
# --------------------------------------------------------------------------

UPLOAD_ROOT = REPO_ROOT / "data" / "uploads"

# The pipeline derives sample ids from the filename, so uploads must land in the
# Illumina convention. Accept the common shapes and normalise.
_FASTQ_SUFFIXES = (".fastq.gz", ".fq.gz", ".fastq", ".fq")


def normalise_upload_name(filename: str) -> "tuple[str, int] | None":
    """Map an uploaded filename to (sample_id, mate) or None if unusable.

    Handles the three layouts people actually have: Illumina
    (`X_S1_L001_R1_001.fastq.gz`), archive (`SRR123_1.fastq.gz`) and plain
    (`X_R1.fastq.gz`). Sample ids must not contain underscores -- the pipeline
    splits on the first one -- so everything before the mate marker is joined
    with hyphens.
    """
    name = Path(filename).name
    lowered = name.lower()
    if not lowered.endswith(_FASTQ_SUFFIXES):
        return None
    for suffix in _FASTQ_SUFFIXES:
        if lowered.endswith(suffix):
            stem = name[: -len(suffix)]
            break

    mate = None
    for marker, value in (("_R1", 1), ("_R2", 2), ("_1", 1), ("_2", 2)):
        index = stem.upper().rfind(marker if marker.startswith("_R") else marker)
        if index > 0:
            tail = stem[index + len(marker):]
            # Illumina puts _001 after the mate marker; anything else means this
            # was a coincidental match inside the sample name.
            if tail == "" or tail.startswith("_001") or tail.lstrip("_").isdigit():
                mate = value
                stem = stem[:index]
                break
    if mate is None:
        return None

    # Strip Illumina's lane block (`_S1_L001`) so `X_S1_L001_R1_001.fastq.gz`
    # yields sample `X`, matching what the pipeline itself derives.
    import re as _re

    stem = _re.sub(r"_S\d+(_L\d+)?$", "", stem)

    sample = stem.replace("_", "-").strip("-")
    return (sample or "SAMPLE", mate)


# Column names that mean "this CSV carries coordinates". Accepting several
# spellings because people export metadata from all sorts of places.
_LAT_COLUMNS = {"latitude", "lat", "decimallatitude", "decimal_latitude"}
_LON_COLUMNS = {"longitude", "lon", "lng", "decimallongitude", "decimal_longitude"}


def find_metadata_csv(directory: Path) -> "Path | None":
    """Find an uploaded CSV that has a sample id plus latitude/longitude.

    The coordinates a map needs are never inside a FASTQ -- they live in a sample
    sheet next to it. Uploading the folder should therefore pick that sheet up,
    not discard it because it is not a sequence file.
    """
    import csv as _csv

    for path in sorted(directory.glob("*.csv")) + sorted(directory.glob("*.tsv")):
        delimiter = "	" if path.suffix == ".tsv" else ","
        try:
            with path.open(newline="", encoding="utf-8", errors="replace") as handle:
                header = next(_csv.reader(handle, delimiter=delimiter), [])
        except OSError:
            continue
        lowered = {h.strip().lower().replace(" ", "_") for h in header}
        has_id = bool(lowered & {"sample_id", "sample-id", "sampleid", "id", "sample"})
        if has_id and (lowered & _LAT_COLUMNS) and (lowered & _LON_COLUMNS):
            return path
    return None


def normalise_metadata(path: Path) -> "list[dict[str, str]]":
    """Read a sample sheet into the column names the rest of the app expects."""
    import csv as _csv

    delimiter = "	" if path.suffix == ".tsv" else ","
    rows: list[dict[str, str]] = []
    with path.open(newline="", encoding="utf-8", errors="replace") as handle:
        for raw in _csv.DictReader(handle, delimiter=delimiter):
            mapped: dict[str, str] = {}
            for key, value in raw.items():
                if key is None:
                    continue
                canonical = key.strip().lower().replace(" ", "_").replace("-", "_")
                if canonical in {"sample_id", "sampleid", "id", "sample"}:
                    mapped["sample_id"] = (value or "").strip()
                elif canonical in _LAT_COLUMNS:
                    mapped["latitude"] = (value or "").strip()
                elif canonical in _LON_COLUMNS:
                    mapped["longitude"] = (value or "").strip()
                else:
                    mapped[canonical] = (value or "").strip()
            if mapped.get("sample_id"):
                rows.append(mapped)
    return rows


def upload_dir(batch: str) -> Path:
    safe = "".join(c for c in batch if c.isalnum() or c in "-_")
    if not safe:
        raise ValueError("invalid batch id")
    return UPLOAD_ROOT / safe


def register_upload(batch: str, config: "dict[str, Any]") -> dict[str, Any]:
    """Turn a finished upload into a dataset entry the rest of the app understands.

    Anything the user did not specify is inferred from the reads themselves --
    the primers are literally at the start of them, the read length is
    measurable, and whether DADA2 can work is decided by the quality encoding.
    Asking a field officer for a truncation length would be absurd.
    """
    from bioradar import preflight
    from bioradar.pipeline_runner import discover_pairs

    directory = upload_dir(batch)
    detected: dict[str, Any] = {}
    denoiser = config.get("denoiser")

    try:
        pairs = discover_pairs(directory)
        if config.get("autodetect", True):
            detected = preflight.detect_marker(pairs) or {}
            if detected.get("swap_mates"):
                _swap_mates(directory)
                # Re-detect so the stored settings describe the files as they
                # now are, not as they arrived.
                detected = preflight.detect_marker(discover_pairs(directory)) or detected
                detected["swapped_on_import"] = True
        if not denoiser:
            denoiser = preflight.recommend_denoiser(pairs)
    except Exception as exc:  # noqa: BLE001
        detected = {"detection_error": f"{type(exc).__name__}: {exc}"}
        denoiser = denoiser or "dada2"

    def pick(key: str, fallback: Any = None) -> Any:
        value = config.get(key)
        if value not in (None, "", 0):
            return value
        return detected.get(key, fallback)

    metadata = find_metadata_csv(directory)
    entry = {
        "id": f"upload-{batch}",
        "name": config.get("name") or f"Uploaded dataset {batch}",
        "region": config.get("region") or "Uploaded from your computer",
        "fastq_dir": str(directory.relative_to(REPO_ROOT)).replace("\\", "/"),
        "marker": pick("marker", "unknown"),
        "classifier": pick("classifier"),
        "fprimer": pick("fprimer"),
        "rprimer": pick("rprimer"),
        "trunc_len_f": pick("trunc_len_f"),
        "trunc_len_r": pick("trunc_len_r"),
        "amplicon_length": pick("amplicon_length"),
        "denoiser": denoiser,
        "source": "uploaded",
        "uploaded": True,
        "detected": detected,
    }
    if metadata is not None:
        entry["samples_csv"] = str(metadata.relative_to(REPO_ROOT)).replace("\\", "/")
        entry["metadata_file"] = metadata.name
    if entry.get("classifier") is None:
        entry["known_issue"] = (
            f"No classifier available for {entry['marker']}. Build one with "
            "`python -m bioradar.train_classifier`."
        )
    (directory / "_dataset.json").write_text(json.dumps(entry, indent=2), encoding="utf-8")
    return entry


def _swap_mates(directory: Path) -> None:
    """Exchange R1 and R2 filenames.

    Some libraries are sequenced with the reverse primer on R1. cutadapt runs
    with --discard-untrimmed, so leaving them that way throws away most of the
    data; renaming is the whole fix.
    """
    for r1 in sorted(directory.glob("*_R1_001.fastq.gz")):
        r2 = r1.parent / r1.name.replace("_R1_", "_R2_")
        if not r2.is_file():
            continue
        temporary = r1.with_suffix(".swap")
        r1.rename(temporary)
        r2.rename(r1)
        temporary.rename(r2)


def uploaded_datasets() -> "list[dict[str, Any]]":
    if not UPLOAD_ROOT.is_dir():
        return []
    entries = []
    for meta in sorted(UPLOAD_ROOT.glob("*/_dataset.json")):
        try:
            entries.append(json.loads(meta.read_text(encoding="utf-8")))
        except ValueError:
            continue
    return entries


# --------------------------------------------------------------------------
# Map data
# --------------------------------------------------------------------------


def map_points(run_id: str) -> "list[dict[str, Any]]":
    """Per-site coordinates plus what was found there, for the map."""
    with _LOCK:
        state = _RUNS.get(run_id)
    if not state or not state.get("results_dir"):
        return []

    taxonomy = Path(state["results_dir"]) / "taxonomy_normalized.csv"
    if not taxonomy.is_file():
        return []

    entry = next(
        (d for d in all_datasets() if d["id"] == state.get("dataset_id")), {}
    )
    samples_csv = entry.get("samples_csv")
    if not samples_csv or not (REPO_ROOT / samples_csv).is_file():
        return []

    from bioradar.report import analyse, load_csv

    meta = normalise_metadata(REPO_ROOT / samples_csv)
    result = analyse(load_csv(taxonomy), meta)
    by_sample = {s["sample_id"]: s for s in result["samples"]}

    points = []
    for row in meta:
        summary = by_sample.get(row["sample_id"])
        if not summary:
            continue
        try:
            latitude = float(row.get("latitude") or "")
            longitude = float(row.get("longitude") or "")
        except ValueError:
            continue

        taxa = [
            {"name": s["name"], "reads": s["reads"], "phylum": s["phylum"]}
            for s in result["species"]
            if row["sample_id"] in s["samples"]
        ][:6]
        points.append(
            {
                "sample_id": row["sample_id"],
                "site_id": summary["site_id"],
                "latitude": latitude,
                "longitude": longitude,
                "collected_at": row.get("collected_at", ""),
                "total_reads": summary["total_reads"],
                "species_count": summary["species_count"],
                "shannon": summary["shannon"],
                "top_taxa": taxa,
            }
        )
    return points


def all_datasets() -> "list[dict[str, Any]]":
    return load_datasets() + uploaded_datasets()


# --------------------------------------------------------------------------
# HTTP
# --------------------------------------------------------------------------


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "BioRadar"

    def _send(self, status: int, body: bytes, content_type: str) -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _json(self, status: int, payload: Any) -> None:
        self._send(status, json.dumps(payload).encode("utf-8"), "application/json")

    def do_GET(self) -> None:  # noqa: N802
        path = urlparse(self.path).path

        if path in {"/", "/index.html"}:
            return self._serve_static("index.html")
        if path.startswith("/static/"):
            return self._serve_static(path[len("/static/") :])

        if path == "/api/datasets":
            return self._json(200, {"datasets": [describe_dataset(d) for d in all_datasets()]})

        if path == "/api/runs":
            with _LOCK:
                runs = [run_summary(r) for r in _RUNS.values()]
            runs.sort(key=lambda r: r["started_at"], reverse=True)
            return self._json(200, {"runs": runs})

        if path.startswith("/api/runs/"):
            parts = path[len("/api/runs/") :].split("/")
            run_id = parts[0]
            with _LOCK:
                state = _RUNS.get(run_id)
            if state is None:
                return self._json(404, {"error": "unknown run"})
            if len(parts) > 1 and parts[1] == "report":
                report = state.get("report")
                if not report:
                    return self._json(404, {"error": "no report yet"})
                return self._send(
                    200, report["markdown"].encode("utf-8"), "text/plain; charset=utf-8"
                )
            if len(parts) > 1 and parts[1] == "map":
                return self._json(200, {"points": map_points(run_id)})
            if len(parts) > 1 and parts[1] == "log":
                with _LOCK:
                    events = list(state.get("events", []))
                return self._json(200, {"events": events})
            return self._json(200, run_summary(state))

        if path == "/api/health":
            return self._json(200, {"status": "healthy"})

        self._json(404, {"error": "not found", "path": path})

    def do_DELETE(self) -> None:  # noqa: N802
        import shutil

        path = urlparse(self.path).path

        if path in {"/api/runs", "/api/runs/"}:
            with _LOCK:
                active = [r for r in _RUNS.values() if r["status"] == "running"]
                if active:
                    return self._json(
                        409,
                        {"error": "a run is in progress; wait for it to finish"},
                    )
                cleared = len(_RUNS)
                _RUNS.clear()
            return self._json(200, {"cleared": cleared})

        if not path.startswith("/api/datasets/"):
            return self._json(404, {"error": "not found"})

        dataset_id = path[len("/api/datasets/"):]
        entry = next((d for d in all_datasets() if d["id"] == dataset_id), None)
        if entry is None:
            return self._json(404, {"error": "unknown dataset"})

        _invalidate_describe(dataset_id)

        if entry.get("uploaded"):
            # An upload lives entirely under data/uploads, so removing the card
            # and removing the data are the same action.
            directory = REPO_ROOT / entry["fastq_dir"]
            # Confined to the upload root so a crafted entry cannot walk out of
            # it and delete the repo.
            if UPLOAD_ROOT.resolve() not in directory.resolve().parents:
                return self._json(
                    400, {"error": "refusing to delete outside the uploads directory"}
                )
            shutil.rmtree(directory, ignore_errors=True)
            return self._json(
                200, {"removed": dataset_id, "files_deleted": True}
            )

        # A registry dataset points at data/ that the user may have generated or
        # downloaded deliberately. Take it off the list by dropping the registry
        # entry, and leave the files alone -- silently deleting someone's data
        # because they wanted a tidier list would be the wrong trade.
        removed = _remove_registry_entry(dataset_id)
        if not removed:
            return self._json(404, {"error": "dataset is not in the registry"})
        return self._json(
            200,
            {
                "removed": dataset_id,
                "files_deleted": False,
                "note": f"Removed from the list. The FASTQ files are still in "
                        f"{entry['fastq_dir']}.",
            },
        )

    def do_POST(self) -> None:  # noqa: N802
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/api/upload":
            return self._handle_upload(parsed.query)
        if path == "/api/upload/finalize":
            return self._handle_finalize()

        if path != "/api/runs":
            return self._json(404, {"error": "not found"})

        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"
        try:
            body = json.loads(raw.decode("utf-8"))
            state = start_run(body["dataset_id"])
        except KeyError as exc:
            return self._json(400, {"error": str(exc)})
        except RuntimeError as exc:
            return self._json(409, {"error": str(exc)})
        except Exception as exc:  # noqa: BLE001
            return self._json(500, {"error": f"{type(exc).__name__}: {exc}"})
        return self._json(201, run_summary(state))

    def _handle_upload(self, query: str) -> None:
        """Receive one FASTQ as a raw body.

        Raw bytes with the filename in the query string, rather than multipart:
        the stdlib multipart parser (`cgi`) was removed in Python 3.13, and
        hand-rolling one for gigabyte uploads is a bug farm. The browser posts
        each File object directly, which also streams.
        """
        from urllib.parse import parse_qs

        params = parse_qs(query)
        batch = (params.get("batch") or [""])[0]
        filename = (params.get("filename") or [""])[0]
        if not batch or not filename:
            return self._json(400, {"error": "batch and filename are required"})

        try:
            directory = upload_dir(batch)
        except ValueError as exc:
            return self._json(400, {"error": str(exc)})
        directory.mkdir(parents=True, exist_ok=True)

        # A sample sheet is stored under its own name: it is metadata, not a
        # sequence file, and the map needs it.
        if filename.lower().endswith((".csv", ".tsv")):
            target = directory / Path(filename).name
            sample, mate = None, None
        else:
            normalised = normalise_upload_name(filename)
            if normalised is None:
                return self._json(
                    400,
                    {
                        "error": f"{filename}: not a recognisable paired FASTQ name. "
                        "Expected something like SAMPLE_R1_001.fastq.gz"
                    },
                )
            sample, mate = normalised
            target = directory / f"{sample}_S1_L001_R{mate}_001.fastq.gz"
        length = int(self.headers.get("Content-Length", 0))
        remaining = length
        with target.open("wb") as handle:
            while remaining > 0:
                chunk = self.rfile.read(min(1 << 20, remaining))
                if not chunk:
                    break
                handle.write(chunk)
                remaining -= len(chunk)

        return self._json(
            201,
            {
                "stored": target.name,
                "sample_id": sample,
                "mate": mate,
                "bytes": target.stat().st_size,
            },
        )

    def _handle_finalize(self) -> None:
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"
        try:
            body = json.loads(raw.decode("utf-8"))
            batch = body.pop("batch")
        except (ValueError, KeyError) as exc:
            return self._json(400, {"error": f"bad request: {exc}"})

        try:
            directory = upload_dir(batch)
        except ValueError as exc:
            return self._json(400, {"error": str(exc)})
        if not directory.is_dir():
            return self._json(404, {"error": "no such upload batch"})

        r1 = sorted(directory.glob("*_R1_001.fastq.gz"))
        unpaired = [
            p.name for p in r1
            if not (p.parent / p.name.replace("_R1_", "_R2_")).is_file()
        ]
        if unpaired:
            return self._json(
                400,
                {"error": f"unpaired read files (no R2): {', '.join(unpaired)}"},
            )
        if not r1:
            return self._json(400, {"error": "no FASTQ files were uploaded"})

        entry = register_upload(batch, body)
        return self._json(201, describe_dataset(entry))

    def _serve_static(self, relative: str) -> None:
        # Defend against path traversal before touching the filesystem.
        target = (STATIC_DIR / relative).resolve()
        if not str(target).startswith(str(STATIC_DIR.resolve())) or not target.is_file():
            return self._json(404, {"error": "not found"})
        content_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        if content_type.startswith("text/") or content_type == "application/javascript":
            content_type += "; charset=utf-8"
        self._send(200, target.read_bytes(), content_type)

    def log_message(self, fmt: str, *args: Any) -> None:
        if getattr(self.server, "verbose", False):
            super().log_message(fmt, *args)


def serve(host: str = "0.0.0.0", port: int = 8080, verbose: bool = False) -> None:
    server = ThreadingHTTPServer((host, port), Handler)
    server.verbose = verbose  # type: ignore[attr-defined]
    shown = "localhost" if host in {"0.0.0.0", ""} else host
    recovered = recover_runs()
    print("BioRadar control panel")
    print(f"  http://{shown}:{port}")
    print(f"  datasets: {len(load_datasets())}")
    if recovered:
        print(f"  recovered {recovered} completed run(s) from disk")
    print("  Ctrl-C to stop")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nstopping")
    finally:
        server.server_close()


def main(argv: list[str] | None = None) -> int:
    import argparse

    parser = argparse.ArgumentParser(prog="bioradar.webapp")
    parser.add_argument("--host", default="0.0.0.0")
    parser.add_argument("--port", type=int, default=8080)
    parser.add_argument("--verbose", action="store_true")
    args = parser.parse_args(argv)
    serve(args.host, args.port, args.verbose)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
