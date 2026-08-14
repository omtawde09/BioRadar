import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Activity, Map, MessageSquare, AlertTriangle, Satellite, Coins, Sparkles } from 'lucide-react';

interface MultitudeZonesSectionProps {
  onNavigateView?: (viewId: string) => void;
}

export const MultitudeZonesSection: React.FC<MultitudeZonesSectionProps> = ({ onNavigateView }) => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const zones = [
    {
      id: 1,
      title: 'AUTOMATED FASTQ PRE-FLIGHT',
      category: 'Diagnostic Zone',
      badge: 'Zero-Configuration Pipeline',
      image: '/static/assets/diagnostic-zone.png',
      viewId: 'analyze',
      icon: Activity,
      desc: 'Automatic marker discovery, primer verification, reverse mate swap detection, and quality curve assessment in 1 second before long compute starts.'
    },
    {
      id: 2,
      title: 'SPATIAL BIODIVERSITY RADAR',
      category: 'Geospatial Zone',
      badge: 'Interactive GIS & Clustering',
      image: '/static/assets/geospatial-zone.png',
      viewId: 'compare',
      icon: Map,
      desc: 'Interactive GIS mapping across coastal sites with taxonomic tree composition, Shannon diversity metrics, and multi-site comparative radar overlays.'
    },
    {
      id: 3,
      title: 'MULTI-AGENT CONSERVATION DEBATE',
      category: 'Governance Zone',
      badge: 'AI Policy Orchestration',
      image: '/static/assets/governance-zone.png',
      viewId: 'results',
      icon: MessageSquare,
      desc: 'Simulated round-table deliberation between Forest Officers, Fishermen Representatives, NGOs, and Regulators to draft balanced zoning policies.'
    },
    {
      id: 4,
      title: 'INVASIVE SPECIES ANOMALY SENTINEL',
      category: 'Biosecurity Zone',
      badge: 'Real-time Early Warning',
      image: '/static/assets/biosecurity-zone.png',
      viewId: 'alerts',
      icon: AlertTriangle,
      desc: 'Statistical 3-sigma biological control limits and Isolation Forest anomaly models to catch sudden bio-invasions before ecological collapse.'
    },
    {
      id: 5,
      title: 'SENTINEL-2 CANOPY CHANGE TRACKING',
      category: 'Remote Sensing Zone',
      badge: 'Space-to-Sequence Correlation',
      image: '/static/assets/remote-zone.png',
      viewId: 'results',
      icon: Satellite,
      desc: 'Copernicus Sentinel-2 surface reflectance integration calculating NDVI deltas within a 2 km riparian buffer around sampling stations.'
    },
    {
      id: 6,
      title: 'BLOCKCHAIN PROOF & NFT STEWARDSHIP',
      category: 'Provenance Zone',
      badge: 'Immutable Verification',
      image: '/static/assets/provenance-zone.png',
      viewId: 'settings',
      icon: Coins,
      desc: 'Tamper-proof cryptographic hashes of all FASTQ reads and QZA artifacts, with ERC-721 conservation sponsorship tokens featuring generative DNA art.'
    }
  ];

  const scrollToCard = (index: number) => {
    const targetIdx = Math.max(0, Math.min(zones.length - 1, index));
    setActiveMobileIndex(targetIdx);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.88;
      scrollContainerRef.current.scrollTo({
        left: targetIdx * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleActionClick = (viewId: string) => {
    if (onNavigateView) {
      onNavigateView(viewId);
    } else {
      window.location.hash = `#${viewId}`;
    }
  };

  return (
    <section id="zones" className="relative bg-[#fcfcf0] bg-bio-neural py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] font-sans overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full bg-[#689660]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[#bd3b67]/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Green Accent Line */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#689660] text-xs font-bold uppercase tracking-wider text-[#1b5e20] shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#689660]" />
              <span>Operational Platform Features</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-normal uppercase text-[#020404] tracking-wide font-heading">
              6 CAPABILITIES : MULTITUDE OF EXPERIENCES
            </h2>
            <div className="w-28 h-1.5 bg-[#689660] mt-3 rounded-full shadow-sm" />
            <p className="text-xs sm:text-sm text-[#5a6258] mt-2 max-w-xl font-sans font-medium">
              Explore the interconnected operational modules powering BioRadar across genomic analysis, GIS mapping, AI policy, and provenance proof.
            </p>
          </div>

          {/* Slider Controls: Mobile / Tablet Only */}
          <div className="flex lg:hidden items-center space-x-3 mt-6 sm:mt-0">
            <button
              type="button"
              onClick={() => scrollToCard(activeMobileIndex - 1)}
              disabled={activeMobileIndex === 0}
              className="w-10 h-10 rounded-full bg-[#ffffff] border-2 border-[#d2dcc8] hover:border-[#689660] disabled:opacity-40 flex items-center justify-center text-[#020404] shadow-md transition-all"
              aria-label="Previous capability"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#5a6258] font-heading">
              0{activeMobileIndex + 1} / 0{zones.length}
            </span>
            <button
              type="button"
              onClick={() => scrollToCard(activeMobileIndex + 1)}
              disabled={activeMobileIndex === zones.length - 1}
              className="w-10 h-10 rounded-full bg-[#689660] border-2 border-[#4d7346] text-white hover:bg-[#588051] disabled:opacity-40 flex items-center justify-center shadow-md transition-all"
              aria-label="Next capability"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Grid with Dark Forest Obsidian (#141e15) for High Visual Impact */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 font-sans"
        >
          {zones.map((zone) => {
            return (
              <div
                key={zone.id}
                className="min-w-[85vw] sm:min-w-[320px] lg:min-w-0 snap-center rounded-3xl bg-[#141e15] border-2 border-[#2b422a] hover:border-[#689660] p-5 transition-all shadow-tactile-card shadow-tactile-card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner with Rounded Corners */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#09100a] mb-4 border border-[#2b422a] shadow-inner">
                    <img
                      src={zone.image}
                      alt={zone.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-3 py-1 rounded-full bg-[#689660] border border-[#4d7346] text-[10px] font-bold text-white shadow-md uppercase tracking-wider">
                        {zone.category}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge & Title */}
                  <div className="px-1 mb-2">
                    <span className="text-[11px] font-bold text-[#82b978] uppercase tracking-wider block mb-1">
                      {zone.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-normal text-[#ffffff] font-heading tracking-wide mb-2 uppercase drop-shadow-sm">
                      {zone.title}
                    </h3>
                  </div>

                  {/* Full Description in Soft Mint-Grey */}
                  <p className="px-1 text-xs sm:text-sm text-[#c2d6be] leading-relaxed mb-6 font-sans font-medium">
                    {zone.desc}
                  </p>
                </div>

                {/* Bottom Action Button (White Pill Button with Border & 3D Depth) */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleActionClick(zone.viewId)}
                    className="w-full bg-[#ffffff] text-[#020404] hover:bg-[#689660] hover:text-white border-2 border-[#e2e6d8] hover:border-[#4d7346] py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all text-center shadow-tactile-btn flex items-center justify-center space-x-2 transform active:translate-y-0.5"
                  >
                    <span>Launch Capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
