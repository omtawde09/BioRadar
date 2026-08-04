# Legacy: the upstream eDNA-Container App GUI

Everything in this directory is **upstream work, not part of the BioRadar build**.
It is kept rather than deleted so the original authors' contribution stays
visible and attributable, as Apache-2.0 requires and as academic honesty
demands.

| File | What it was |
|---|---|
| `app.py` | the five-route Flask GUI |
| `templates/`, `static/` | Jinja2 templates and the eDNA logo |
| `Dockerfile` | built the GUI image on top of `continuumio/miniconda3` |
| `install.sh`, `eDNA-pipeline`, `eDNA2.desktop` | Linux desktop launcher |
| `images/`, `manual.pdf`, `README.upstream.md` | upstream documentation |

## Why it is not used

BioRadar replaces this layer entirely, for reasons that are architectural rather
than cosmetic:

- **No persistence.** `app.py`'s index route calls `cleanup()` on every page
  load, deleting the previous run. There is no database and no run history.
- **No concurrency.** Every Snakemake rule writes to fixed relative paths, so two
  analyses in one directory corrupt each other. BioRadar's
  `pipeline_runner.py` gives each run its own working directory.
- **No progress feedback.** The "running" page shows nothing until the pipeline
  finishes or dies.
- **Hardcoded secret.** `app.secret_key = "secret_key"`.
- **No map.** The spatial view is BioRadar's entire point.

## What was reused

The Snakemake pipeline itself — the part with the actual scientific value — is
forked and running in [`../bioradar-pipeline/`](../bioradar-pipeline/). See
[`../NOTICE`](../NOTICE) for attribution and the full list of changes.

`templates/config.html` is still worth reading: it documents the pipeline's
runtime parameters and the default teleo 12S primer sequences, which BioRadar
carries forward as defaults in `pipeline_runner.py`.

## Running it, if you want to see the original

```bash
cd legacy-edna-container
docker run -p 5000:5000 dwheelerau/edna:v1.4
```
