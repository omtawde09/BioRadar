import React, { useState } from 'react';
import { Droplet, FileCode, CheckCircle2, Sliders, Database, Link, Sparkles } from 'lucide-react';
import { PopUp, RiseUp, StaggerContainer, StaggerItem } from './MotionReveal';

export const PipelineFlowchartSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    {
      id: 1,
      name: 'eDNA Capture',
      title: 'Water Sampling & Extracellular Filtration',
      icon: Droplet,
      accent: '#689660',
      badge: 'Step 01 : Field Sampling',
      summary: '1-litre water samples are filtered through 0.22 micron membrane filters to capture trace DNA shed by aquatic organisms.',
      inputs: 'Ambient estuarine, lake or coastal surface water sample',
      processes: [
        'Sterile peristaltic water filtration on site',
        'Lysis of cellular and extracellular debris',
        'Mitochondrial Cytochrome c Oxidase Subunit I (COI) gene target amplification'
      ],
      output: 'High-purity pooled eDNA amplicon libraries',
      details: 'eDNA captures macroscopic biodiversity from microscopic traces. Organisms continuously shed genetic material into the water column. By filtering surface water within 4 hours of collection, fragile environmental sequences are preserved before microbial degradation.'
    },
    {
      id: 2,
      name: 'High-Throughput Sequencing',
      title: 'Illumina Paired-End FASTQ Generation',
      icon: FileCode,
      accent: '#689660',
      badge: 'Step 02 : Metagenomics',
      summary: 'High-throughput sequencers generate paired forward (R1) and reverse (R2) FASTQ reads containing millions of raw base sequences.',
      inputs: 'Amplicon library with forward and reverse primers (e.g. Leray / Folmer primer sets)',
      processes: [
        'Illumina NovaSeq or MiSeq paired-end 2x250bp or 2x300bp sequencing',
        'Phred quality score generation per base position',
        'Sample multiplexing with unique index barcodes'
      ],
      output: 'Raw paired-end FASTQ.gz files and sample manifest',
      details: 'Each FASTQ record includes nucleotide sequences and ASCII-encoded Phred quality scores. BioRadar normalizes multiple sequencing vendor formats including Illumina standard lane nomenclature, NCBI SRA archives, and plain FASTQ archives.'
    },
    {
      id: 3,
      name: 'Automated Pre-Flight',
      title: 'Rapid Marker & Quality Diagnostic Engine',
      icon: CheckCircle2,
      accent: '#bd3b67',
      badge: 'Step 03 : BioRadar Pre-Flight',
      summary: 'BioRadar scans the sequencing reads in approximately 1 second to auto-detect genetic markers, primer matches, and optimal truncation lengths.',
      inputs: 'Uploaded FASTQ folder and optional sample coordinate CSV sheet',
      processes: [
        'Primer detection and orientation verification',
        'Automatic reverse mate swap detection for swapped library orientations',
        'Positional quality curve analysis to determine truncate lengths without manual guessing'
      ],
      output: 'Validated pre-flight diagnostic report and automated pipeline parameters',
      details: 'Traditional bioinformatic pipelines require researchers to manually inspect FastQC curves and set truncation parameters. BioRadar pre-flight prevents failed 40-minute runs by catching bad data, swapped mate files, and truncated reads in under a second.'
    },
    {
      id: 4,
      name: 'DADA2 / vsearch Denoising',
      title: 'Exact Sequence Variant (ASV) Clustering',
      icon: Sliders,
      accent: '#689660',
      badge: 'Step 04 : Quality Modeling',
      summary: 'DADA2 models sequencing errors statistically to resolve true biological sequences down to single-nucleotide differences.',
      inputs: 'Primer-trimmed paired reads from cutadapt',
      processes: [
        'cutadapt primer sequence trimming and untrimmed read filtering',
        'DADA2 machine-learning error rate matrix computation',
        'Automatic routing to vsearch OTU clustering if quality scores are stripped'
      ],
      output: 'Amplicon Sequence Variant (ASV) count table and sequence fasta',
      details: 'ASVs provide single-nucleotide biological resolution. Unlike legacy OTU clustering which clusters sequences at arbitrary 97% similarity thresholds, DADA2 differentiates between closely related sister species and tracks distinct ecological strains.'
    },
    {
      id: 5,
      name: 'Taxonomic Assignment',
      title: 'Naive Bayes India-Curated Reference Matching',
      icon: Database,
      accent: '#bd3b67',
      badge: 'Step 05 : Classification',
      summary: 'Trained Naive Bayes classifier assigns taxonomic lineages against a 33,611 sequence reference database customized for Indian waters.',
      inputs: 'ASV representative sequences and trained QIIME 2 QZA classifier',
      processes: [
        'K-mer based multinomial Naive Bayes taxonomic classification',
        'Confidence score evaluation across 7 standard taxonomic ranks (Kingdom to Species)',
        'Normalization to BioRadar frozen tabular contract'
      ],
      output: 'Taxonomy normalized CSV with species, confidence metrics, and sample distribution',
      details: 'Species names come from our COI reference database built from 33,611 validated sequences representing 8,020 species (43% Indian records). The reference is audited for cross-order collisions to eliminate public repository misannotations.'
    },
    {
      id: 6,
      name: 'Chain-of-Custody',
      title: 'Cryptographic SHA-256 Ledger & Verification',
      icon: Link,
      accent: '#689660',
      badge: 'Step 06 : Provenance Proof',
      summary: 'Every intermediate output is cryptographically hashed with SHA-256 and chained into an append-only verifiable ledger.',
      inputs: 'Raw FASTQ files, intermediate QZA artifacts, and final normalized species tables',
      processes: [
        'Deterministic SHA-256 hashing across all pipeline artifacts',
        'Immutable verification record logging in local ledger and optional ERC-721 token minting',
        'Automated screening against national invasive species watchlists'
      ],
      output: 'Tamper-evident legal proof of biodiversity detection and interactive report',
      details: 'Scientific environmental decisions require auditability. BioRadar ensures byte-identical determinism: re-running the same dataset produces the identical artifact hash, establishing legal and regulatory chain-of-custody.'
    }
  ];

  const current = stages[selectedStage];

  return (
    <section id="pipeline" className="relative bg-[#ffffff] bg-bio-neural py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] font-sans overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#689660]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-[#bd3b67]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading with RiseUp */}
        <RiseUp className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8fef4] border-2 border-[#689660] text-xs font-bold uppercase tracking-wider text-[#1b5e20] shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#689660]" />
            <span>End-to-End Scientific Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal uppercase text-[#020404] tracking-wide font-heading">
            HOW BIORADAR WORKS : THE PIPELINE FLOWCHART
          </h2>
          <div className="w-20 h-1.5 bg-[#bd3b67] mx-auto mt-3 rounded-full shadow-sm" />
          <p className="text-xs sm:text-base text-[#5a6258] mt-4 font-sans font-medium">
            A deterministic, peer-reviewed computational pipeline converting raw environmental water samples into verified biodiversity intelligence.
          </p>
        </RiseUp>

        {/* Interactive Step Selector Bar (Horizontal Flowchart Diagram) with Staggered Cascading */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 sm:mb-10" staggerDelay={0.08}>
          {stages.map((stage, index) => {
            const StageIcon = stage.icon;
            const isSelected = selectedStage === index;
            return (
              <StaggerItem key={stage.id}>
                <button
                  type="button"
                  onClick={() => setSelectedStage(index)}
                  className={`w-full flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl border-2 transition-all relative ${
                    isSelected
                      ? 'bg-[#f8fef4] border-[#689660] shadow-tactile-card transform -translate-y-1'
                      : 'bg-[#ffffff] border-[#e2e6d8] hover:border-[#689660] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-2 shadow-sm transition-transform ${
                      isSelected
                        ? 'bg-[#689660] text-white scale-105'
                        : 'bg-[#f8fef4] text-[#689660] border border-[#e2e6d8]'
                    }`}
                  >
                    <StageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-normal uppercase tracking-wider text-[#bd3b67] font-heading">
                    Step 0{stage.id}
                  </span>
                  <span className="text-xs font-bold text-[#020404] line-clamp-1 mt-0.5 font-sans">
                    {stage.name}
                  </span>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Active Stage Detailed Panel with PopUp Animation */}
        <PopUp delay={0.2} duration={0.65} className="bg-[#f8fef4] rounded-3xl border-2 border-[#689660] p-6 sm:p-10 shadow-tactile-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Stage Summary & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1 rounded-full bg-[#ffffff] border-2 border-[#689660] text-xs font-bold text-[#1b5e20] font-sans shadow-sm">
                  {current.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#bd3b67] font-heading">
                  Stage {current.id} of 6
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-3xl font-normal text-[#020404] font-heading uppercase">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-base text-[#020404] font-medium mt-2 leading-relaxed font-sans">
                  {current.summary}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border-2 border-[#e2e6d8] shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#bd3b67] mb-2.5 font-sans">
                  Computational & Biological Mechanisms:
                </h4>
                <ul className="space-y-2 font-sans">
                  {current.processes.map((proc, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#020404] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#689660] mt-1.5 shrink-0" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-[#5a6258] leading-relaxed font-sans font-medium">
                {current.details}
              </p>
            </div>

            {/* Stage Input / Output Contract Card */}
            <div className="lg:col-span-5 space-y-4 font-sans">
              <div className="p-5 rounded-2xl bg-[#ffffff] border-2 border-[#e2e6d8] shadow-tactile-card">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5a6258] mb-1.5">
                  STAGE INPUT
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#020404]">
                  {current.inputs}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#ffffff] border-2 border-[#689660] shadow-tactile-card">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1b5e20] mb-1.5">
                  STAGE OUTPUT ARTIFACT
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#020404]">
                  {current.output}
                </div>
              </div>

              {/* Navigation buttons between steps with 3D depth */}
              <div className="flex items-center justify-between pt-2 gap-3">
                <button
                  type="button"
                  disabled={selectedStage === 0}
                  onClick={() => setSelectedStage(prev => Math.max(0, prev - 1))}
                  className="flex-1 px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-[#ffffff] border-2 border-[#e2e6d8] disabled:opacity-40 hover:bg-[#f8fef4] shadow-sm transition-all text-center"
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  disabled={selectedStage === stages.length - 1}
                  onClick={() => setSelectedStage(prev => Math.min(stages.length - 1, prev + 1))}
                  className="flex-1 px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-[#689660] text-white border-2 border-[#476d40] disabled:opacity-40 hover:bg-[#588051] shadow-tactile-btn transition-all text-center"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </PopUp>
      </div>
    </section>
  );
};
