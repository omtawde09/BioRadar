# Layer 1: the forked pipeline

## Where this code came from

The BioRadar planning document said to clone
`github.com/dwheelerau/edna-container2` and delete its `app/` directory, keeping
`workflow/Snakefile`.

**That repository does not contain the pipeline.** It is the Flask GUI wrapper.
The Snakemake workflow lives in a separate Bitbucket repository that the
Dockerfile and `install.sh` clone at build time — at inconsistent tags (`v1.0` in
the Dockerfile, `v1.3` in `install.sh`) — behind a URL carrying a username
(`dpidave@bitbucket.org`) that may or may not permit anonymous access.

So we took it from the published Docker image instead:

```bash
docker create --name extract dwheelerau/edna:v1.4
docker cp extract:/home/docker_conda_template/snakemake-qiime-edna ./bioradar-pipeline
docker rm extract
```

This is strictly better than cloning. We get the exact pipeline that the
published, peer-reviewed image runs, we do not depend on a third party's hosting
staying up during the hackathon, and the 22 MB of trained classifiers come along
with it.

## What came with it

```
Snakefile                     16 rules
config-template.yaml          Jinja template rendered per run
scripts/                      the shell and Python that each rule calls
report/                       Pandoc template for the PDF QC report
env/                          Conda spec (QIIME2 2023.2 + Snakemake)
database/qiime2-qza/
  MIDORI2_..._QIIME-classifier.qza    8.3 MB   12S fish, the default
  QIIME-classifier-mccoll-v0.1.qza   13.9 MB   alternative
```

The classifiers are **gitignored** (22 MB). Recover them with the `docker cp`
above, or copy from a teammate.

`scripts/qiime-create-database.sh` and `scripts/qiime-train-classifier.sh` are
worth reading before Jimeet builds the India-curated classifier — they are a
working reference for exactly that task.

## The real DAG

Fourteen rules run for a normal analysis. The plan's rule names
(`import`, `demux_summarize`, `cutadapt`, `dada2`, `taxonomy`, `barplot`,
`alpha_rarefaction`, `report`, `zip`) do not match the code. The actual chain:

```
create_metadata     read FASTQ filenames -> metadata.csv
create_manifest     metadata.csv -> QIIME2 manifest
import_reads        FASTQ -> paired-end-demux.qza
trim_reads          cutadapt, primer trimming
clean_reads         DADA2 denoising -> ASVs
assign_taxonomy     naive Bayes classification against the .qza classifier
export_data         export QIIME2 artifacts
count_table         merge counts + taxonomy -> asv_count_tax.csv
write_report_md     QC report markdown
rarefaction         alpha rarefaction curves
write_report_pdf    Pandoc -> final-report.pdf
finish              assemble final_results/
normalize_taxonomy  [BioRadar] -> the frozen contract
emit_hash           [BioRadar] -> chain-of-custody genesis record
```

There is **no BLASTn rule** in this version. The plan's "clone BLASTn
verification (v2)" refers to the v2 pipeline on Bitbucket, which we do not have.
Practical consequence: `classification_method` is always `sklearn`, and there is
no independent cross-check on a taxonomic call — which makes Anshika's AI Second
Opinion more valuable, not less.

## Why every run gets its own directory

Every rule writes to fixed relative paths (`qiime2/loci/...`, `final_results/`)
with no wildcards. The upstream Flask app deals with this by deleting the
previous run on every page load.

`pipeline_runner.prepare_run()` copies the pipeline tree (a few hundred KB —
the classifiers stay put and are referenced by path) into `runs/<run-id>/`,
drops the FASTQs in, renders `config.yaml`, and runs Snakemake there. Runs are
independent and their output is permanently retained. This is not optional
polish: the demo needs many samples on one map.

## Running it

```bash
# via the runner (handles workdir, config, progress, hashing)
python -m bioradar.pipeline_runner testing_data/fastq_data --mode docker

# or by hand
docker run --rm \
  -v "$PWD/runs/myrun:/work" \
  -v "$PWD/bioradar-pipeline/database:/db:ro" \
  -v "$PWD:/repo:ro" \
  --entrypoint snakemake dwheelerau/edna:v1.4 \
  --cores 4 --snakefile /work/Snakefile --directory /work all
```

Three mounts, and each one matters: `/work` is the run directory, `/db` is the
shared classifiers, `/repo` makes the `bioradar` package importable from inside
the container (the two BioRadar rules import it).

Measured: **~7 minutes** for 6 samples of the synthetic test data on a laptop.
Most of it is `assign_taxonomy` loading the 1.9 GB classifier model. Real field
data with real read depth will be considerably slower — budget 20–40 minutes and
**do not** plan a live full run in front of judges.

## Configuration

`config.yaml` is rendered per run from `config-template.yaml`. Upstream keys:

| Key | Default | Meaning |
|---|---|---|
| `fprimer` / `rprimer` | teleo 12S | primer sequences for cutadapt |
| `erate`, `overlap` | 0.1, 3 | cutadapt error rate and overlap |
| `trunc-len-f` / `-r` | 0, 0 | DADA2 truncation (0 = off) |
| `max-ee-f` / `-r` | 2, 4 | DADA2 max expected errors |
| `trunc-q` | 2 | quality truncation threshold |
| `chimera-method` | consensus | DADA2 chimera removal |
| `classifier` | MIDORI2 12S | path to the `.qza` classifier |

BioRadar adds `sample_id`, `pipeline_run_id`, `backend_url`,
`bioradar_pkg_path`, `chain_queue_dir`, `classification_method`.

**Swapping in Jimeet's India-curated classifier is a one-line change** — pass
`--classifier /db/qiime2-qza/classifier-india-2026.qza`. Nothing else moves. If
his classifier is late, the pipeline keeps working on the MIDORI2 default and
nobody is blocked.

## Known differences from the committed expected output

`testing_data/final_results.zip` was produced by the **v2** pipeline; this repo
runs **v1.4** from the image. Same species, same ASV hashes, slightly different
read counts (e.g. *Gambusia holbrooki* in sample1: 499 in the zip, 309 in our
run) because of DADA2 parameter differences between versions. Both are valid.
Do not treat the zip as a golden-output regression fixture — tests assert on
schema and species identity, not on exact counts.

## What is actually in the test data

Six synthetic samples, nine ASVs, an Australian community:
*Gambusia holbrooki*, *Carassius* (genus only), *Oncorhynchus* and
*O. clarkii*, *Galaxias*, two Australian turtles, a mallard, and — in sample4
only — three reads of *Homo sapiens*.

Two of these are genuinely useful for an Indian demo without inventing anything:
**Gambusia holbrooki** (eastern mosquitofish — on the IUCN 100-worst list and
established across India) and **Carassius** (goldfish/crucian carp, introduced in
Indian waters). The human reads are a real contamination-QC talking point.
