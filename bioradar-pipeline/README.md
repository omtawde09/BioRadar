# The eDNA-container app  
This is an eDNA pipeline based on ![QIIME2](https://qiime2.org/) with a Docker image
containing a flask based GUI. The Docker image includes all of the
software libraries required. The repo for the Docker based front end can be found
[here](https://github.com/dwheelerau/edna-contained) on github, please navigate
to that page if you wish to use the GUI front end.  

The pipeline can also be run directly on any Linux computer with conda to install the 
software requirements. 

See the `env/qiime2...yaml` file for a full list
of software requirements.  

**The advantages of the pipeline are:**    
- simple to setup and run with a single config file to control the workflow  
- adaptable to any primer combination or taxonomic database  
- snakemake is used to confirm successful completion of each stage of the pipeline  
- species summary tables with counts are created, including the ASV sequence for manual confirmation of the taxonomic classification  
- rarefaction and taxonomic barplots are generated that can be viewed using the QIIME viewer (drag and drop)  
- A PDF report is generated containing QC plots and important information about the ASV generation so that QC parameters can be optimised  

## The config file  
The `config.yaml` file needs to be edited to include variables specific to your experiment. This includes primer sequences, cleaning parameters and the location of 
custom database files. 

The docker image includes a Flask based GUI for modifying this file.
If you are running the pipeline as a stand alone application you
need to edit this file with the format (YAML format):

```
key: "value"
```
Quote ("") are required around settings made up of strings (ABCD etc), while numbers 
(1,2,3 etc) should be entered without quotes. See the [QIIME2](https://qiime2.org/) 
documentation for specific settings on
trimming and cleaning reads. Note that for variable length barcodes the 
`trunc-len-f` and `trunc-len-r` should be set to 0 to avoid trimming bias (
this is the default setting).  

## 1. Setup when running as a stand alone program pipeline   
First clone this repo with:
```
git clone https://dpidave@bitbucket.org/dpi_data_analytics/snakemake-qiime-edna.git
```
Then conda (or mamba) to clone the python environment.  

```
# conda
conda env create --file env/qiime2-2023.2-snakemake-py38-linux-conda.yml

# to activate
conda activate snakemake-qiime2
```

To setup the directory structure from the 
base directory run:  

```
# run the setup rule
snakemake --cores 1 setup
```

## 2. Copy the fastq.gz paired-end reads into the fastq_data directory    
The pipeline automatically extracts sample names from the fastq file names
based on
splitting by an underscore "_", such that `sample1_xxxx.fastq.gz` will be labelled
`sample1`. For this reason you may need to modify the file names if you are
using underscores in your sample names.  

## 3. The taxonomic database  
A trained ![MIDORI](https://onlinelibrary.wiley.com/doi/full/10.1002/edn3.303) 
classifier based on the fish telo primers "ACACCGCCCGTCAYYCT" and
"CTTCCGGTAYACTTACCRTG" is provided in the repo. This file (
`MIDORI2_UNIQ_NUC_GB253_srRNA_QIIME-classifier.qza`) needs to be located in the
`database/qiime2-qza/` directory. Check that this path is also in
the `config.yaml`.  

If another QIIME2 compatible database is required, the `qza` file needs to be copied 
to `./database/qiime2-qza/` and the file path listed in the `config.yaml` file.

A second database `QIIME-classifier-mccoll-v0.1.qza` is also based on midori, but
includes several kangaroo species, with the primers
12S vertebrate F modified (V5F mod) TAGRACAGGCTCTCTAG
12S vertebrate R modified (V5R mod) GATTAGATACCYCACTATGC

From McColl-Gausden, E. F., A. R. Weeks, R. A. Coleman, K. L. Robinson, S. Song, T. 
A. Raadik, and R. Tingley. 2020. Multispecies models reveal that eDNA metabarcoding 
is more sensitive than backpack electrofishing for conducting fish surveys in freshwater
streams. Molecular Ecology.   

For advanced users, a snakemake workflow is included in the Snakefile. Add
the file paths to the taxonomic database and sequence files to the `config.yml`
file and build the database using.  

```
snakemake --cores all build_database
```

Note this step will take some time and may required >100GB of memory depending
on the size of the database. 

## 4. Run the full snakemake pipeline
Your directory structure should look like this:  
```
├── config.yaml
├── database
│   └── qiime2-qza
│       └── MIDORI2_UNIQ_NUC_GB253_srRNA_QIIME-classifier.qza 
├── env
│   └── qiime2-2023.2-snakemake-py38-linux-conda.yml
├── fastq_data
│   ├── 01-BWL-D-MR8_S1_L001_R1_001.fastq.gz
│   ├── 01-BWL-D-MR8_S1_L001_R2_001.fastq.gz
│   ├── ........_R1_001.fastq.gz
│   ├── ........_R2_001.fastq.gz
│   └── copy_fastq_files_here
├── logs
├── manifest
├── README.md
├── scripts
│   ├── boxplot.ipynb
│   ├── box-plots.py
│   ├── build-manifest_alt.py
│   ├── create_outputs.py
│   ├── create_outputs.R
│   ........
│   ├── qiime-trim.sh
│   └── summarise-qiime2.sh
└── Snakefile
```
To run the pipeline and generate a report using all available CPUs do:  
```
snakemake --cores all all
```

## Key outputs
A report will be created called `final-report.pdf`.  

Various `qzv` files are created, these can be visualised at: `https://view.qiime2.org/` using
drag and drop.  

Other key outputs:
- The final taxa count table is in `qiime2/loci/asvs/asv_count_tax.tsv`.  
- QC plots and read count statistics: `qiime2/loci/paired-end-demux.qzv` 

## Database sources  
A taxonomic database in QIIME format is required. The repo comes with a MIDORI
database for verterbrate sRNA sequences (based on the telo fish primers). Other
options include:  
- SILVA 16S [sequences](https://data.qiime2.org/2020.8/common/silva-138-99-seqs.qza) and [taxonomy](https://data.qiime2.org/2020.8/common/silva-138-99-tax.qza)

## ToDo  
- ~~generalise the scripts using config file~~
- ~~build database rule finish~~
- ~~update this documentation~~
- ~~automate reporting rule~~
- ~~fix database paths~~ 
- ~~docker~~
- tidy up documentation
