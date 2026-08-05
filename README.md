# BioRadar

**Biodiversity intelligence for Indian waters, from environmental DNA.**

Smart India Hackathon 2026 · Problem Statement **SIH25042** (Ministry of Earth Sciences)
K.C. College of Engineering, Thane

Maintainer: **Om Tawde** ([@omtawde09](https://github.com/omtawde09))

---

## What this is

Scoop a litre of water out of an estuary and it carries DNA from everything
living in it — shed skin, scales, mucus, waste. Sequence that DNA and you can
list the species present without catching, seeing, or disturbing a single one.
That is environmental DNA, and it is the cheapest biodiversity survey method
that exists.

The problem is what comes back from the sequencer: millions of short text
strings. Turning those into *"an invasive tilapia is establishing in Vembanad
Lake, and here is the evidence"* takes a bioinformatics pipeline, a curated
reference database, and somewhere to put the answer that a forest officer can
actually read.

**BioRadar is that path, end to end.** You give it sequencing files. It gives you
a species list, a map, and a tamper-evident record of how it got there.

### What it does

| | |
|---|---|
| **Reads your data and configures itself** | Detects the genetic marker, primers, read length and quality encoding from the reads. You do not type truncation lengths. |
| **Refuses to waste your time** | Pre-flight catches unusable data in about a second, instead of failing 40 minutes into a run. |
| **Recovers awkward datasets** | Data DADA2 cannot denoise is routed to vsearch OTU clustering rather than rejected. |
| **Names species against an India-curated reference** | 33,611 COI sequences covering 8,020 species, 43% from Indian records. |
| **Maps what it finds** | Sites on an interactive map, sized and popped up with species counts and diversity. |
| **Proves the result was not altered** | SHA-256 of every artifact, chained per sample. The pipeline is deterministic: two independent runs produce byte-identical output. |

### Validation

Measured against an *in silico* mock community with known ground truth:

> **100% recall, zero false positives** — 80 of 80 planted species-in-sample
> detections recovered, at exact read counts.

That validation also caught a **mislabelled record in the public NCBI reference
data** — two sequences one base apart, assigned to species in different
taxonomic *orders*. Details in [docs/DEMO_DATASET.md](docs/DEMO_DATASET.md).

---

## Contents

1. [Before you start](#1-before-you-start)
2. [Installing Docker](#2-installing-docker)
3. [Getting BioRadar](#3-getting-bioradar)
4. [Starting the application](#4-starting-the-application)
5. [Testing it with the sample data](#5-testing-it-with-the-sample-data)
6. [Analysing your own data](#6-analysing-your-own-data)
7. [Troubleshooting](#7-troubleshooting)
8. [How it works](#8-how-it-works)
9. [For developers](#9-for-developers)
10. [Licence and attribution](#10-licence-and-attribution)

---

## 1. Before you start

### What you need

| Requirement | Why | How to check |
|---|---|---|
| **Docker Desktop** | The whole pipeline runs inside a container | `docker --version` |
| **~40 GB free disk** | The scientific image alone is 11.7 GB | — |
| **8 GB RAM minimum, 16 GB comfortable** | DADA2 denoising needs 3–4 GB on its own | — |
| **Git** | To download the project | `git --version` |
| **Python 3.10+** *(optional)* | Only for the command-line tools; the app itself does not need it on your machine | `python --version` |

### Time budget for a first install

| Step | Time |
|---|---|
| Install Docker Desktop | 5–10 min |
| Download the pipeline image (11.7 GB) | 15–60 min, depending on your connection |
| Clone the repository (35 MB) | under a minute |
| First analysis run | ~3 min |

**The image download is the long pole.** Start it before you need it — see
[§2](#2-installing-docker).

---

## 2. Installing Docker

Docker packages an entire operating system, plus every scientific tool BioRadar
needs, into one downloadable unit. Without it you would be installing QIIME 2,
DADA2, cutadapt, vsearch, R and a Python scientific stack by hand, and matching
their versions. That is the problem Docker removes.

### Windows

1. Download **Docker Desktop for Windows** from
   [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/).
2. Run the installer. Leave **"Use WSL 2 instead of Hyper-V"** ticked — this is
   the default and the faster option.
3. Restart when it asks. Docker Desktop starts automatically and shows a whale
   icon in the system tray. Wait until it says **"Engine running"**.
4. If it asks you to install a WSL 2 kernel update, accept, then restart Docker
   Desktop.

### macOS

1. Download Docker Desktop, choosing the build matching your chip — **Apple
   silicon** (M1/M2/M3/M4) or **Intel**.
2. Drag Docker to Applications, open it, and grant the permissions it requests.

### Linux

Install Docker Engine plus the Compose plugin using the official instructions
for your distribution: [docs.docker.com/engine/install](https://docs.docker.com/engine/install/).
Then add yourself to the `docker` group so you do not need `sudo`:

```bash
sudo usermod -aG docker $USER
```

Log out and back in for that to take effect.

### Give Docker enough memory

This step is skipped often and causes a confusing failure later: DADA2 is killed
mid-run with no clear error.

Open **Docker Desktop → Settings → Resources** and set:

- **Memory: 6 GB or more** (8 GB if you have 16 GB total)
- **CPUs: 4 or more**

Apply and restart.

> On Linux, Docker uses the host's resources directly and there is nothing to
> configure.

### Verify Docker works

```bash
docker run --rm hello-world
```

You should see *"Hello from Docker!"*. If you do, you are ready.

### Download the pipeline image

This is the 11.7 GB download. Start it now and let it run in the background:

```bash
docker pull ghcr.io/omtawde09/bioradar-pipeline:v1.0
```

> **What is this image?** It contains the peer-reviewed eDNA analysis pipeline
> BioRadar builds on — QIIME 2, DADA2, cutadapt and vsearch, pre-installed and
> version-matched. BioRadar adds its own layer on top. Full attribution is in
> [NOTICE](NOTICE).

Check it arrived:

```bash
docker images ghcr.io/omtawde09/bioradar-pipeline
```

If the pull fails because the package is private or the registry is unreachable,
build the image yourself instead — same result, one command, no registry account
needed:

```bash
docker build -f docker/Dockerfile.pipeline -t ghcr.io/omtawde09/bioradar-pipeline:v1.0 .
```

---

## 3. Getting BioRadar

```bash
git clone https://github.com/omtawde09/BioRadar.git
cd BioRadar
```

About 35 MB, including the India-curated reference database.

### One thing the repository does not include

The trained **classifier** — the model that turns a DNA sequence into a species
name — is roughly 30 MB and is not stored in git. Extract it from the Docker
image you already downloaded:

```bash
./scripts/setup.sh
```

That script also creates a `.env` file with a generated secret, starts the
database, and runs a quick self-check. It is safe to run more than once.

**On Windows**, run it from **Git Bash** (installed with Git), not PowerShell or
Command Prompt.

If you would rather do it by hand:

```bash
docker create --name tmp ghcr.io/omtawde09/bioradar-pipeline:v1.0
docker cp tmp:/opt/bioradar/classifiers/. \
          bioradar-pipeline/database/qiime2-qza/
docker rm tmp
```

---

## 4. Starting the application

### The one command

```bash
docker compose up app
```

The first run builds a small image on top of the pipeline image — seconds, not
minutes, because it only changes the startup command.

When you see this, it is ready:

```
bioradar-app  | BioRadar control panel
bioradar-app  |   http://localhost:8080
bioradar-app  |   datasets: 1
```

Open **<http://localhost:8080>** in any browser.

To run it in the background instead, add `-d`. To stop it: `docker compose down`.

### Without a terminal, from Docker Desktop

If you prefer clicking:

1. Build the image once (this step does need a terminal):
   `docker build -f Dockerfile.app -t bioradar/app:latest .`
2. **Images** tab → `bioradar/app` → **▶ Run**
3. Expand **Optional settings** and fill in:

   | Field | Value |
   |---|---|
   | Container name | `bioradar-app` |
   | Ports → Host port | `8080` |
   | Volumes → Host path | the folder you cloned into |
   | Volumes → Container path | `/bioradar` |

4. **Run**, then open <http://localhost:8080>.

The volume mount is not optional — it is how the container sees the code and
writes results back to your machine.

Afterwards, use the **Containers** tab: ■ to stop, ▶ to start. Docker remembers
the settings.

---

## 5. Testing it with the sample data

BioRadar ships with a demonstration dataset so you can confirm the whole system
works before touching your own data.

### What the sample data is

**12 samples — 6 real Indian coastal sites, sampled twice each**, 12 MB total.

| Site | What is happening there |
|---|---|
| Mandovi Estuary, Goa | *Gambusia holbrooki* (mosquitofish) establishing |
| Vembanad Lake, Kerala | *Oreochromis mossambicus* (tilapia) establishing |
| Kolleru Lake, Andhra Pradesh | *Pterygoplichthys pardalis* (sucker catfish) establishing |
| Kavaratti Lagoon, Lakshadweep | Olive ridley turtle present |
| Gulf of Mannar, Tamil Nadu | Olive ridley + green turtle |
| South Andaman | Clean reference site, no invasives |

Invasive species grow **1.9× between the two rounds** at every invaded site, so
temporal comparison has something real to detect.

> **This data is simulated, and labelled as such.** Every read is generated from
> a *real* COI reference sequence, so when the pipeline reports *Gambusia
> holbrooki* it is a genuine classification of a genuine *Gambusia holbrooki*
> sequence. What is invented is which species occur where. Full explanation:
> [docs/DEMO_DATASET.md](docs/DEMO_DATASET.md). Do not present it as field data.

### Running it

1. Open <http://localhost:8080>.
2. The **Analyze** tab lists *"Indian coastal survey (SIMULATED demonstration
   data)"* with a green **READY** badge.
3. Click **Analyze**.
4. Switch to the **Results** tab and watch the progress bar move through the
   pipeline stages.

**Roughly 3 minutes.** The stages you will see:

```
Reading sample sheet → Building QIIME2 manifest → Importing paired-end reads
→ Trimming primers (cutadapt) → Denoising into ASVs (DADA2)
→ Assigning taxonomy (naive Bayes) → Exporting artifacts
→ Building ASV count table → Normalizing to BioRadar contract
→ Recording chain-of-custody hash
```

### What you should see

| Metric | Expected |
|---|---|
| Named species | **12** |
| Phyla | 2 |
| Samples | 12 |
| Detections | 80 |
| Unnamed `sp.` records | 0 |

Below the numbers: an interactive **map** with a pin at each of the six sites
(click one for its species list), a **phylum composition** bar chart, and the
full **species table** with read counts and confidence scores.

If you see that, every part of the system is working — Docker, the pipeline, the
classifier, the reference database, the reporting and the map.

### Proving the result is trustworthy

The demo dataset ships with `truth.json`, recording exactly which species were
planted in each sample. Compare it against what the pipeline found:

```bash
python - <<'EOF'
import csv, json, collections, glob
truth = {s["sample_id"]: {x["name"] for x in s["species"]}
         for s in json.load(open("data/demo_survey/truth.json"))}
path = sorted(glob.glob("runs/demo-survey*/final_results/taxonomy_normalized.csv"))[-1]
found = collections.defaultdict(set)
for r in csv.DictReader(open(path, newline="", encoding="utf-8")):
    if r["species"]:
        found[r["sample_id"]].add(r["species"])
tp = sum(len(v & found.get(k, set())) for k, v in truth.items())
fn = sum(len(v - found.get(k, set())) for k, v in truth.items())
fp = sum(len(found.get(k, set()) - v) for k, v in truth.items())
print(f"recall {100*tp/(tp+fn):.1f}%   found {tp}, missed {fn}, false positives {fp}")
EOF
```

Expected: `recall 100.0%   found 80, missed 0, false positives 0`

---

## 6. Analysing your own data

### What BioRadar needs

**Paired-end FASTQ files** — two per sample, R1 and R2:

```
MySample01_S1_L001_R1_001.fastq.gz
MySample01_S1_L001_R2_001.fastq.gz
```

Other layouts (`SRR123_1.fastq.gz`, `MySample_R1.fastq.gz`) are recognised and
renamed automatically. Sample names must not contain underscores — the pipeline
splits on the first one.

### Adding coordinates for the map

FASTQ files contain sequences, not locations. To put your sites on the map,
include a `samples.csv` next to your reads:

```csv
sample_id,site_id,latitude,longitude,collected_at
MySample01,MANDOVI,15.4989,73.8278,2026-01-15
MySample02,VEMBANAD,9.6000,76.4000,2026-01-15
```

`sample_id` must match the FASTQ filename prefix. Column names are flexible —
`lat`/`lon`, `decimalLatitude`, and similar all work.

### Uploading

1. **Analyze** tab → **Select folder** (or drag the folder onto the page).
   Selecting the parent folder picks up both the reads and the sample sheet.
2. The file list shows each file tagged `R1`, `R2` or `SHEET`, and warns if any
   sample is missing its mate.
3. Give the dataset a name, then click **Upload & analyze**.
4. BioRadar reads your data and configures itself — marker, primers, read
   length, truncation, denoiser. The card shows what it detected.
5. Click **Analyze**.

**Expect 3–40 minutes** depending on how many samples you have and how deeply
they were sequenced.

### If something is wrong with the data

Pre-flight catches it before the run starts and explains it in the card. The
three most common problems:

| Problem | What BioRadar does |
|---|---|
| Quality scores stripped by the submitter | Routes the dataset to vsearch OTU clustering, which does not use quality |
| R1/R2 the wrong way round | Detects it and swaps them on import |
| Truncation longer than the reads | Refuses to start, and says by how much |

---

## 7. Troubleshooting

**Docker Desktop will not start (Windows)**
Enable virtualisation in your BIOS/UEFI, and enable the *Virtual Machine
Platform* and *Windows Subsystem for Linux* Windows features.

**`docker: command not found`**
Docker Desktop is not running, or its CLI is not on your PATH. Start Docker
Desktop and wait for "Engine running".

**Port 8080 already in use**
Use another port:

```bash
APP_PORT=8081 docker compose up app
```

Then open <http://localhost:8081>.

**The page loads but shows no datasets**
The volume mount is missing or points at the wrong folder. The container must
see the repository at `/bioradar`.

**A run fails at "Denoising into ASVs (DADA2)"**
Almost always memory. Raise Docker's memory limit to 6–8 GB and try again.

**`CERTIFICATE_VERIFY_FAILED` when downloading data**
Antivirus or a corporate proxy is intercepting HTTPS. Fix it properly rather
than disabling verification:

```bash
pip install truststore                    # for the Python tools
git config --global http.sslBackend schannel   # for git, on Windows
```

**Everything comes back `Unassigned`**
The pipeline worked; your reference database does not cover those organisms.
That is a real result — report the unassigned fraction rather than hiding it.

**Results disappeared after restarting**
By design. Results are held in memory for the session so the app always opens
clean. The files themselves remain under `runs/`.

More detail: [docs/RUNNING.md](docs/RUNNING.md) and [docs/TESTING.md](docs/TESTING.md).

---

## 8. How it works

```
FASTQ reads
    ↓  pre-flight — quality, primers, orientation, truncation
    ↓  cutadapt — remove primer sequences
    ↓  DADA2 or vsearch — reads → amplicon sequence variants
    ↓  naive Bayes — variants → species, against the India-curated reference
    ↓  normalizer — QIIME2 output → BioRadar's frozen contract
    ↓  SHA-256 → chain-of-custody ledger
species report + map
```

### The reference database

Species names come from a COI reference assembled from NCBI:

- **33,611 sequences**, **8,020 species**
- **43% from Indian records**, with the India/global split recorded per phylum
- Audited for cross-order collisions — sequences that cannot belong to the
  species they claim

Rebuild it with `python -m bioradar.build_reference` (~15 minutes, resumable).

### Layout

```
bioradar/                 the integration layer
  contract.py             frozen schemas everything else codes against
  preflight.py            input checks that run before a pipeline run
  pipeline_runner.py      run the pipeline from Python, isolated per run
  normalize.py            raw QIIME2 output → contract CSVs
  chain_client.py         hash artifacts, commit to the custody ledger
  build_reference.py      assemble the India-curated COI reference
  train_classifier.py     train a classifier inside the container
  mock_community.py       generate the labelled demo dataset
  report.py               normalized output → readable report
  webapp.py               the control panel served on :8080

bioradar-pipeline/        Layer 1 bioinformatics (see NOTICE)
data/                     reference database, site metadata, demo dataset
docs/                     running, testing, contracts, pipeline, demo dataset
tests/  ci/               76 tests, 15 integration checks
```

---

## 9. For developers

```bash
python -m pytest tests/ -q          # 76 tests, ~8 s, no Docker needed
./ci/check_integration.sh           # 15 checks, ~2 min
./ci/check_integration.sh --fast    # skip the Docker checks
```

Need realistic data without running anything?

```bash
python -m bioradar.mockgen -o mock/ --rounds 3
```

Read [docs/CONTRACTS.md](docs/CONTRACTS.md) before writing code against BioRadar
output. Three things bite people who skip it:

- `taxon_id` can be empty — not every reference carries an NCBI taxid.
- `species` is empty for genus-level calls; filter on `rank == 'species'`.
- `rank == 'unassigned'` rows are real detections with real read counts, and
  often the most interesting ones. Do not silently drop them.

Never parse the raw `Taxon` lineage string yourself — use the normalizer.

| Document | Covers |
|---|---|
| [docs/RUNNING.md](docs/RUNNING.md) | Every way to run the system |
| [docs/TESTING.md](docs/TESTING.md) | Verifying each layer |
| [docs/CONTRACTS.md](docs/CONTRACTS.md) | Data formats between components |
| [docs/PIPELINE.md](docs/PIPELINE.md) | The bioinformatics itself |
| [docs/DEMO_DATASET.md](docs/DEMO_DATASET.md) | What the sample data is and is not |
| [README_TEAM.md](README_TEAM.md) | Team onboarding: install, run, test, and contribute |
| [docs/DESIGN.md](docs/DESIGN.md) | The design system — tokens, components, accessibility |
| [docs/GAP_ANALYSIS.md](docs/GAP_ANALYSIS.md) | What was built, what was substituted, what was not |

---

## 10. Licence and attribution

Licensed under **Apache-2.0** — see [LICENSE](LICENSE).

BioRadar's Layer 1 bioinformatics is derived from the **eDNA-Container App** by
Wheeler, Brancalion, Kumar and Lintermans (NSW Department of Primary
Industries), published in *Applied Sciences* 2024, 14(6), 2641,
[doi:10.3390/app14062641](https://doi.org/10.3390/app14062641).

Full attribution and a complete list of every change: [NOTICE](NOTICE).

We forked rather than rebuilt, deliberately. Reimplementing a validated,
peer-reviewed taxonomic assignment pipeline would have consumed the largest
block of our time while producing no differentiation. That time went into the
translation layer instead — the part no existing tool provides.

QIIME 2 is BSD 3-Clause licensed ([QIIME-license](QIIME-license)). Species
assignments use the MIDORI2 reference database and NCBI sequence data.
