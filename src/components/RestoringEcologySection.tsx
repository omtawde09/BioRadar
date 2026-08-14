import React from 'react';
import { ArrowRight, Dna, Droplets, Leaf, Microscope, Trees, ShieldCheck, Share2, Activity, Users } from 'lucide-react';
import { PopUp, RiseUp, SlideIn, StaggerContainer, StaggerItem } from './MotionReveal';

export const RestoringEcologySection: React.FC = () => {
  return (
    <section id="theory" className="relative bg-[#09140c] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#1e3320] font-sans overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-[#689660]/18 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-[#bd3b67]/15 blur-3xl pointer-events-none" />

      {/* Wavy Marine Bathymetric Background Style Only (No Grid) */}
      <div className="absolute inset-0 bg-marine-waves opacity-60 pointer-events-none" />

      {/* Additional Smooth Aquatic Wave Contours overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <path d="M0,160 C320,300 420,60 680,200 C940,340 1080,120 1440,240 L1440,600 L0,600 Z" fill="none" stroke="#82b978" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M0,280 C360,420 520,180 820,320 C1120,460 1260,220 1440,360 L1440,600 L0,600 Z" fill="none" stroke="#2a7b88" strokeWidth="1.5" strokeOpacity="0.35" />
          <path d="M0,400 C400,540 600,300 960,440 C1320,580 1380,340 1440,480 L1440,600 L0,600 Z" fill="none" stroke="#bd3b67" strokeWidth="1" strokeOpacity="0.25" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ── TOP HERO ROW: Narrative Left + Orbiting Satellite eDNA Visual on Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Theory & Narrative */}
          <SlideIn direction="left" delay={0.1} className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#82b978] font-sans">
                  FUNDAMENTAL SCIENCE & BIOLOGY
                </span>
                <div className="h-0.5 bg-[#82b978]/40 flex-1 max-w-[140px]" />
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wide font-heading leading-tight text-[#ffffff]">
                RESTORING ECOLOGY & <br />
                <span className="text-[#82b978]">AQUATIC SURVEILLANCE</span>
              </h2>
            </div>

            <p className="text-xs sm:text-base text-[#c2d6be] leading-relaxed font-medium font-sans">
              In the interconnected network of ecology, every aquatic organism leaves microscopic genetic fingerprints through shed cellular tissues, scales, mucus, and metabolic waste. Converging genomic feedback secures biodiversity presence intelligence.
            </p>

            {/* Highlight Callout Box with Leaf Icon & Tactile Border in Obsidian Emerald */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#142418] border-2 border-[#2b422a] flex items-start space-x-4 shadow-tactile-card">
              <div className="w-11 h-11 rounded-2xl bg-[#09140c] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shrink-0 mt-0.5 shadow-sm">
                <Leaf className="w-5 h-5 text-[#82b978]" />
              </div>
              <p className="text-xs sm:text-sm text-[#e2ecd0] leading-relaxed font-sans italic font-medium">
                Microscopic cellular fragments from a simple water sample isolate mitochondrial Cytochrome c Oxidase Subunit I (COI) barcodes. This rigorous detective tracking delivers instant molecular observation, identifying rare native species and early invasive acceleration.
              </p>
            </div>

            {/* Action CTA Button with Tactile 3D Depth */}
            <div className="pt-1">
              <a
                href="#pipeline"
                className="inline-flex items-center space-x-2 bg-[#689660] border-2 border-[#82b978] text-white hover:bg-[#588051] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all font-sans shadow-tactile-btn transform active:translate-y-0.5"
              >
                <span>EXPLORE SCIENTIFIC PIPELINE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SlideIn>

          {/* Right Column: Circular eDNA Image with Continuously Rotating Satellite Orbit */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
            <PopUp delay={0.2} duration={0.7} className="relative flex items-center justify-center w-72 h-72 sm:w-88 sm:h-88">
              {/* Continuously Rotating Dashed Orbit Ring with Satellite Nodes */}
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#82b978]/60 absolute animate-orbit flex items-center justify-center pointer-events-none">
                <div className="absolute -top-5 w-11 h-11 rounded-full bg-[#142418] border-2 border-[#82b978] shadow-md flex items-center justify-center text-[#82b978]">
                  <Microscope className="w-5 h-5 text-[#82b978]" />
                </div>
                <div className="absolute -right-5 w-11 h-11 rounded-full bg-[#142418] border-2 border-[#82b978] shadow-md flex items-center justify-center text-[#82b978]">
                  <Dna className="w-5 h-5 text-[#82b978]" />
                </div>
                <div className="absolute -bottom-5 w-11 h-11 rounded-full bg-[#142418] border-2 border-[#82b978] shadow-md flex items-center justify-center text-[#82b978]">
                  <Leaf className="w-5 h-5 text-[#82b978]" />
                </div>
                <div className="absolute -left-5 w-11 h-11 rounded-full bg-[#142418] border-2 border-[#82b978] shadow-md flex items-center justify-center text-[#82b978]">
                  <Droplets className="w-5 h-5 text-[#82b978]" />
                </div>
              </div>

              {/* Central Fixed Circular Image Frame with Dual Ring */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-[#82b978] bg-[#142418] shadow-eco-halo p-1.5 overflow-hidden z-10 animate-bio-float">
                <img
                  src="/static/assets/circular-image.png"
                  alt="Environmental DNA Double Helix"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e: any) => {
                    e.target.src = '/static/circular-image.png';
                  }}
                />
              </div>
            </PopUp>

            {/* Bottom Label Badge with Border & Shadow */}
            <RiseUp delay={0.3} className="mt-6 z-10">
              <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#142418] border-2 border-[#82b978] text-xs font-bold text-[#82b978] uppercase tracking-wider font-sans shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#82b978] animate-pulse" />
                <span>ENVIRONMENTAL DNA (eDNA)</span>
              </span>
            </RiseUp>
          </div>
        </div>

        {/* ── MIDDLE ROW: 3 Distinct Feature Metric Cards with Stagger ── */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {/* Card 1: 3,500+ Native Taxa */}
          <StaggerItem className="relative rounded-3xl bg-[#142418] border-2 border-[#2b422a] hover:border-[#82b978] p-6 shadow-tactile-card shadow-tactile-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none text-[#82b978]">
              <Trees className="w-full h-full" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#689660] border-2 border-[#82b978] flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Trees className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-normal text-[#ffffff] tracking-wide font-heading mb-1 drop-shadow-sm">
                3,500+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#82b978] mb-2 font-sans">
                NATIVE TAXA DETECTED
              </div>
              <p className="text-xs text-[#a8c4a4] leading-relaxed font-sans font-medium mb-6">
                Diverse species identified across freshwater, marine & terrestrial ecosystems.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2b422a]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#e2ecd0] mb-1.5 font-sans">
                <span>BIODIVERSITY COVERAGE</span>
                <span className="text-[#82b978]">98%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#09140c] border border-[#2b422a] overflow-hidden">
                <div className="h-full rounded-full bg-[#82b978] transition-all duration-1000" style={{ width: '98%' }} />
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: 6 Baselines Cataloged Systems */}
          <StaggerItem className="relative rounded-3xl bg-[#142418] border-2 border-[#2b422a] hover:border-[#2a7b88] p-6 shadow-tactile-card shadow-tactile-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none text-[#2a7b88]">
              <Droplets className="w-full h-full" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2a7b88] border-2 border-[#56b8c8] flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-normal text-[#56b8c8] tracking-wide font-heading mb-1 drop-shadow-sm">
                6 BASELINES
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#88d8e6] mb-2 font-sans">
                CATALOGED SYSTEMS
              </div>
              <p className="text-xs text-[#a8c4a4] leading-relaxed font-sans font-medium mb-6">
                Reference datasets for rivers, lakes, coasts, wetlands, and estuarine habitats.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2b422a]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#e2ecd0] mb-1.5 font-sans">
                <span>HABITAT SYSTEMS COVERED</span>
                <span className="text-[#56b8c8]">92%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#09140c] border border-[#2b422a] overflow-hidden">
                <div className="h-full rounded-full bg-[#2a7b88] transition-all duration-1000" style={{ width: '92%' }} />
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: 1.9X Surveillance Density */}
          <StaggerItem className="relative rounded-3xl bg-[#142418] border-2 border-[#2b422a] hover:border-[#bd3b67] p-6 shadow-tactile-card shadow-tactile-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none text-[#bd3b67]">
              <Activity className="w-full h-full" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#bd3b67] border-2 border-[#e66a93] flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-normal text-[#e66a93] tracking-wide font-heading mb-1 drop-shadow-sm">
                1.9X
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#f59cb8] mb-2 font-sans">
                SURVEILLANCE DENSITY
              </div>
              <p className="text-xs text-[#a8c4a4] leading-relaxed font-sans font-medium mb-6">
                Enhanced detection power for early warnings & invasive species tracking.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2b422a]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#e2ecd0] mb-1.5 font-sans">
                <span>DETECTION EFFICIENCY</span>
                <span className="text-[#e66a93]">89%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#09140c] border border-[#2b422a] overflow-hidden">
                <div className="h-full rounded-full bg-[#bd3b67] transition-all duration-1000" style={{ width: '89%' }} />
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* ── BOTTOM ROW: 5-Pill Value Highlights Ribbon with RiseUp ── */}
        <RiseUp delay={0.15}>
          <div className="rounded-3xl bg-[#142418] border-2 border-[#2b422a] p-5 sm:p-6 shadow-tactile-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#2b422a]">
              {/* Pill 1 */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-2">
                <div className="w-10 h-10 rounded-2xl bg-[#09140c] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shrink-0 shadow-sm">
                  <Leaf className="w-5 h-5 text-[#82b978]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ffffff] font-sans">
                    eDNA-POWERED INSIGHTS
                  </div>
                  <div className="text-[10px] text-[#a8c4a4] leading-tight font-sans font-medium">
                    Uncover hidden biodiversity with molecular precision.
                  </div>
                </div>
              </div>

              {/* Pill 2 */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-10 h-10 rounded-2xl bg-[#09140c] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#82b978]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ffffff] font-sans">
                    EARLY WARNING SYSTEMS
                  </div>
                  <div className="text-[10px] text-[#a8c4a4] leading-tight font-sans font-medium">
                    Detect threats before they impact ecosystems.
                  </div>
                </div>
              </div>

              {/* Pill 3 */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-10 h-10 rounded-2xl bg-[#09140c] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shrink-0 shadow-sm">
                  <Share2 className="w-5 h-5 text-[#82b978]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ffffff] font-sans">
                    DATA-DRIVEN DECISIONS
                  </div>
                  <div className="text-[10px] text-[#a8c4a4] leading-tight font-sans font-medium">
                    Actionable intelligence for conservation.
                  </div>
                </div>
              </div>

              {/* Pill 4 */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-10 h-10 rounded-2xl bg-[#09140c] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shrink-0 shadow-sm">
                  <Activity className="w-5 h-5 text-[#82b978]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ffffff] font-sans">
                    CONTINUOUS MONITORING
                  </div>
                  <div className="text-[10px] text-[#a8c4a4] leading-tight font-sans font-medium">
                    Real-time surveillance for a resilient planet.
                  </div>
                </div>
              </div>

              {/* Pill 5 */}
              <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
                <div className="w-10 h-10 rounded-2xl bg-[#09140c] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shrink-0 shadow-sm">
                  <Users className="w-5 h-5 text-[#82b978]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#ffffff] font-sans">
                    COLLABORATIVE SCIENCE
                  </div>
                  <div className="text-[10px] text-[#a8c4a4] leading-tight font-sans font-medium">
                    Working together for biodiversity restoration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RiseUp>
      </div>
    </section>
  );
};
