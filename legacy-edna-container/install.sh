#!/bin/bash
#echo "clone the GUI repo used by docker"
#git clone https://github.com/dwheelerau/edna-container2.git

echo "changing the port number to $1"
#cd edna-container2
sed -i "s/5000/$1/" app.py
grep "port" app.py
chmod +x app.py

# fix up paths in desktop app file
sed -i "s|/home/wheeled/projects/202308mduncan/edna-container|$PWD|" eDNA-pipeline
sed -i "s|wheeled|$USER|" eDNA-pipeline

# fix desktop shortcut paths in two places ie g
sed -i "s|/home/wheeled/projects/202308mduncan/edna-container|$PWD|g" eDNA2.desktop
cp eDNA2.desktop ~/Desktop/

echo "clone the main run scripts and env file"
# specific tag
git clone --depth=1 --branch 'v1.3' https://dpidave@bitbucket.org/dpi_data_analytics/snakemake-qiime-edna2.git

echo "install the conda env"
cd snakemake-qiime-edna2

# fix the name issue in version 1 and rescript issues
#sed -i 's|/home/wheeled/miniconda3/envs/snakemake-qiime2|eDNA-app2|' env/qiime2-2023.5-snakemake-py38-linux-conda.yml
sed -i "s|wheeled|$USER|g" config-template.yaml

mamba env create -f env/qiime2-2023.5-snakemake-py38-linux-conda.yml

echo "The new mamba env is called eDNA-app2"
echo "activate the env with"
echo "mamba activate eDNA-app2"

#echo "then install rescript with:"
#echo "mamba install -c conda-forge -c bioconda -c qiime2 \\"
#echo "    -c https://packages.qiime2.org/qiime2/2023.5/passed/ \\"
#echo "    -c defaults xmltodict 'q2-types-genomics>2023.2' ncbi-datasets-pylib"
