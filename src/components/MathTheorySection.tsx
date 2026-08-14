import React, { useState } from 'react';
import { Cpu, Variable, LineChart, Binary, Eye, ShieldAlert, Sparkles } from 'lucide-react';

export const MathTheorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const models = [
    {
      id: 'forecast',
      name: 'Weather Forecast',
      title: 'Species Occurrence Forecasting : Fourier Series & Platt Scaling',
      icon: LineChart,
      color: '#bd3b67',
      formula: 'y(t) = a_0 + \\sum_{k=1}^N [a_k \\sin(2\\pi k t / 365.25) + b_k \\cos(2\\pi k t / 365.25)]',
      probabilityFormula: 'P(Detection_t) = \\frac{1}{1 + e^{-(\\alpha y(t) + \\beta)}}',
      explanation: 'Calculates the 7-day future probability of detecting specific target species at a given site. Historical species abundance is measured in Reads Per Million (RPM). A Fourier series decomposes seasonal hydrological fluctuations, and Platt Scaling calibrates the continuous regression output into an exact probabilistic confidence interval [0, 1].',
      metrics: [
        { label: 'Harmonics', val: 'N = 3 Annual Cycles' },
        { label: 'Scaling', val: 'Maximum Likelihood Sigmoid' },
        { label: 'Horizon', val: '7-Day Rolling Window' }
      ]
    },
    {
      id: 'zeroshot',
      name: 'Zero-Shot Classifier',
      title: 'Alignment-Free Taxonomy : 4-mer Cosine Vector Embeddings',
      icon: Binary,
      color: '#689660',
      formula: 'V \\in \\mathbb{R}^{256}, \\quad \\hat{V} = \\frac{V}{\\|V\\|_2}, \\quad \\text{Similarity} = \\hat{V}_q \\cdot \\hat{V}_r',
      probabilityFormula: 'Thresholds: \\ge 0.95 \\text{ (Species)}, \\ge 0.85 \\text{ (Genus)}, \\ge 0.75 \\text{ (Family)}',
      explanation: 'Classifies novel or unassigned environmental DNA sequences directly from FASTQ reads without retraining large Bayes models. Overlapping 4-base subsequences form a 256-dimensional k-mer frequency vector. The unit-normalized dot product measures structural conservation across biological reference profiles.',
      metrics: [
        { label: 'Vocabulary', val: '4^4 = 256 Dimensions' },
        { label: 'Distance', val: 'Normalized Cosine Dot Product' },
        { label: 'Speed', val: '< 5 ms per read' }
      ]
    },
    {
      id: 'anomaly',
      name: 'Anomaly Detection',
      title: 'Biosecurity Alert : 3-Sigma Z-Score & Isolation Forest',
      icon: ShieldAlert,
      color: '#bd3b67',
      formula: 'Z = \\frac{\\text{RPM}_t - \\mu_{\\text{RPM}}}{\\sigma_{\\text{RPM}}}, \\quad |Z| \\ge 3.0 \\implies \\text{Alert}',
      probabilityFormula: 'x_t = [\\text{RPM}_{1,t}, \\text{RPM}_{2,t}, \\dots, \\text{RPM}_{M,t}] \\in \\text{IsolationForest}',
      explanation: 'Continuous surveillance against sudden invasive species outbreaks or crashes in sensitive keystone species. Univariate Z-scores trigger instant alerts when abundance exceeds 3 standard deviations from baseline, while multivariate Isolation Forests detect subtle shifts across community compositions.',
      metrics: [
        { label: 'Univariate Limit', val: '3.0 Sigma Standard Control' },
        { label: 'Multivariate', val: '100-Tree Isolation Ensemble' },
        { label: 'Response', val: 'Instant SSE Push Notification' }
      ]
    },
    {
      id: 'ndvi',
      name: 'Remote Sensing',
      title: 'Riparian Canopy Correlation : Sentinel-2 NDVI Tracking',
      icon: Eye,
      color: '#689660',
      formula: '\\text{NDVI} = \\frac{B_8 (\\text{NIR}) - B_4 (\\text{Red})}{B_8 (\\text{NIR}) + B_4 (\\text{Red})}',
      probabilityFormula: '\\Delta\\text{NDVI} = \\text{NDVI}_{\\text{before}} - \\text{NDVI}_{\\text{after}} \\ge 0.20 \\implies \\text{Habitat Loss}',
      explanation: 'Correlates aquatic environmental DNA detections with terrestrial habitat changes within a 2 km buffer zone around sampling stations. Using Copernicus Sentinel-2 multispectral imagery, drops in NDVI highlight agricultural clearing or construction runoff affecting water quality.',
      metrics: [
        { label: 'Spatial Buffer', val: '2.0 km Radius around Site' },
        { label: 'Bands', val: 'Band 4 (Red) & Band 8 (NIR)' },
        { label: 'Deforestation', val: 'Delta NDVI >= 0.20' }
      ]
    }
  ];

  const current = models[activeTab];

  return (
    <section id="models" className="relative bg-[#ffffff] bg-bio-neural py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] font-sans overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#689660]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#bd3b67]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8fef4] border-2 border-[#bd3b67] text-xs font-bold uppercase tracking-wider text-[#bd3b67] shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#bd3b67]" />
            <span>Theoretical Foundations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-normal uppercase text-[#020404] tracking-wide font-heading">
            MATHEMATICS & AI MODELS BEHIND BIORADAR
          </h2>
          <div className="w-20 h-1.5 bg-[#689660] mx-auto mt-3 rounded-full shadow-sm" />
          <p className="text-xs sm:text-base text-[#5a6258] mt-4 font-sans font-medium">
            Rigorous mathematical formulations governing temporal biodiversity forecasting, alignment-free taxonomy, and biosecurity anomaly detection.
          </p>
        </div>

        {/* Model Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 font-sans">
          {models.map((m, idx) => {
            const Icon = m.icon;
            const isSel = activeTab === idx;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                  isSel
                    ? 'bg-[#689660] text-white border-[#476d40] shadow-tactile-btn transform -translate-y-0.5'
                    : 'bg-[#f8fef4] text-[#020404] border-[#e2e6d8] hover:border-[#689660] shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{m.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Model Deep Dive Box */}
        <div className="bg-[#f8fef4] rounded-3xl border-2 border-[#689660] p-6 sm:p-10 shadow-tactile-card">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#bd3b67] uppercase tracking-wider block mb-1 font-sans">
                Model Specification {activeTab + 1} of 4
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#020404] font-heading uppercase">
                {current.title}
              </h3>
            </div>

            {/* Formula Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border-2 border-[#e2e6d8] font-mono text-sm text-[#020404] shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#5a6258] mb-2 font-sans">
                  Primary Regression / Mapping Function:
                </div>
                <div className="p-3 bg-[#f8fef4] rounded-xl text-[#bd3b67] font-bold text-xs sm:text-sm overflow-x-auto border border-[#ebd2dc]">
                  {current.formula}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#ffffff] border-2 border-[#e2e6d8] font-mono text-sm text-[#020404] shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#5a6258] mb-2 font-sans">
                  Classification / Decision Threshold:
                </div>
                <div className="p-3 bg-[#f8fef4] rounded-xl text-[#1b5e20] font-bold text-xs sm:text-sm overflow-x-auto border border-[#d6e4d0]">
                  {current.probabilityFormula}
                </div>
              </div>
            </div>

            {/* Description Narrative */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#ffffff] border-2 border-[#e2e6d8] font-sans shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-2 font-sans">
                Mathematical Context & Biological Application:
              </h4>
              <p className="text-xs sm:text-sm text-[#020404] font-medium leading-relaxed font-sans">
                {current.explanation}
              </p>
            </div>

            {/* Parameter Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 font-sans">
              {current.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-4 rounded-2xl bg-[#ffffff] border-2 border-[#e2e6d8] text-center shadow-sm">
                  <div className="text-xs font-bold text-[#5a6258] uppercase tracking-wider mb-1 font-sans">
                    {m.label}
                  </div>
                  <div className="text-sm font-bold text-[#020404] font-sans">
                    {m.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
