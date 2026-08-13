import React from 'react';
import { ArrowRight, Dna, Droplets, Leaf, Microscope, Trees, ShieldCheck, Share2, Activity, Users } from 'lucide-react';

export const RestoringEcologySection: React.FC = () => {
  return (
    <section id="theory" className="bg-[#fcfcf0] py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ── TOP HERO ROW: Narrative Left + Orbiting Satellite eDNA Visual on Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Theory & Narrative (No extra unwanted space) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#689660] font-sans">
                  FUNDAMENTAL SCIENCE & BIOLOGY
                </span>
                <div className="h-0.5 bg-[#689660]/40 flex-1 max-w-[140px]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wide font-heading leading-tight text-[#020404]">
                RESTORING ECOLOGY & <br />
                <span className="text-[#689660]">AQUATIC SURVEILLANCE</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#020404] leading-relaxed font-normal font-sans">
              In the interconnected network of ecology, every aquatic organism leaves microscopic genetic fingerprints through shed cellular tissues, scales, mucus, and metabolic waste. Converging genomic feedback secures biodiversity presence intelligence.
            </p>

            {/* Highlight Callout Box with Leaf Icon */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f4faef] border-2 border-[#d2e2cd] flex items-start space-x-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#689660]/20 border-2 border-[#689660] flex items-center justify-center text-[#689660] shrink-0 mt-0.5 shadow-sm">
                <Leaf className="w-5 h-5 text-[#689660]" />
              </div>
              <p className="text-xs sm:text-sm text-[#253023] leading-relaxed font-sans italic font-medium">
                Microscopic cellular fragments from a simple water sample isolate mitochondrial Cytochrome c Oxidase Subunit I (COI) barcodes. This rigorous detective tracking delivers instant molecular observation, identifying rare native species and early invasive acceleration.
              </p>
            </div>

            {/* Action CTA Button with Border Color & Depth */}
            <div className="pt-1">
              <a
                href="#pipeline"
                className="inline-flex items-center space-x-2 bg-[#ffffff] border-2 border-[#020404] text-[#020404] hover:bg-[#689660] hover:border-[#4d7346] hover:text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all font-sans shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE MORE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular eDNA Image with Continuously Rotating Satellite Orbit */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
            <div className="relative flex items-center justify-center w-72 h-72 sm:w-88 sm:h-88">
              {/* Continuously Rotating Dashed Orbit Ring with Satellite Nodes */}
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#689660]/60 absolute animate-orbit flex items-center justify-center pointer-events-none">
                {/* Top Node (12 o'clock): Microscope */}
                <div className="absolute -top-5 w-11 h-11 rounded-full bg-[#ffffff] border-2 border-[#689660] shadow-md flex items-center justify-center text-[#689660]">
                  <Microscope className="w-5 h-5 text-[#689660]" />
                </div>

                {/* Right Node (3 o'clock): DNA */}
                <div className="absolute -right-5 w-11 h-11 rounded-full bg-[#ffffff] border-2 border-[#689660] shadow-md flex items-center justify-center text-[#689660]">
                  <Dna className="w-5 h-5 text-[#689660]" />
                </div>

                {/* Bottom Node (6 o'clock): Leaf */}
                <div className="absolute -bottom-5 w-11 h-11 rounded-full bg-[#ffffff] border-2 border-[#689660] shadow-md flex items-center justify-center text-[#689660]">
                  <Leaf className="w-5 h-5 text-[#689660]" />
                </div>

                {/* Left Node (9 o'clock): Droplet */}
                <div className="absolute -left-5 w-11 h-11 rounded-full bg-[#ffffff] border-2 border-[#689660] shadow-md flex items-center justify-center text-[#689660]">
                  <Droplets className="w-5 h-5 text-[#689660]" />
                </div>
              </div>

              {/* Central Fixed Circular Image Frame with Dual Ring */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-[#689660] bg-[#ffffff] shadow-eco-lg p-1.5 overflow-hidden z-10">
                <img
                  src="/static/assets/circular-image.png"
                  alt="Environmental DNA Double Helix"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e: any) => {
                    e.target.src = '/static/circular-image.png';
                  }}
                />
              </div>
            </div>

            {/* Bottom Label Badge with Border & Shadow */}
            <div className="mt-6 z-10">
              <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#689660] text-xs font-bold text-[#689660] uppercase tracking-wider font-sans shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#689660]" />
                <span>ENVIRONMENTAL DNA (eDNA)</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── MIDDLE ROW: 3 Distinct Feature Metric Cards with Progress Bars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 3,500+ Native Taxa (Green Theme) */}
          <div className="relative rounded-[28px] bg-[#ffffff] border-2 border-[#d6e4d0] p-6 shadow-eco-sm hover:shadow-eco-md transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transform">
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none text-[#689660]">
              <Trees className="w-full h-full" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#689660] border-2 border-[#4d7346] flex items-center justify-center text-white mb-4 shadow-md">
                <Trees className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-normal text-[#020404] tracking-wide font-heading mb-1">
                3,500+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-2 font-sans">
                NATIVE TAXA DETECTED
              </div>
              <p className="text-xs text-[#5a6258] leading-relaxed font-sans mb-6">
                Diverse species identified across freshwater, marine & terrestrial ecosystems.
              </p>
            </div>

            {/* Progress Metric Bar */}
            <div className="pt-4 border-t border-[#e8efe5]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#020404] mb-1.5 font-sans">
                <span>BIODIVERSITY COVERAGE</span>
                <span className="text-[#689660]">98%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#f0f5ee] border border-[#d6e4d0] overflow-hidden">
                <div className="h-full rounded-full bg-[#689660] transition-all duration-1000" style={{ width: '98%' }} />
              </div>
            </div>
          </div>

          {/* Card 2: 6 Baselines Cataloged Systems (Teal Ocean Theme) */}
          <div className="relative rounded-[28px] bg-[#ffffff] border-2 border-[#cfdfde] p-6 shadow-eco-sm hover:shadow-eco-md transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transform">
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none text-[#2a7b88]">
              <Droplets className="w-full h-full" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2a7b88] border-2 border-[#1e5a64] flex items-center justify-center text-white mb-4 shadow-md">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-normal text-[#2a7b88] tracking-wide font-heading mb-1">
                6 BASELINES
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-2 font-sans">
                CATALOGED SYSTEMS
              </div>
              <p className="text-xs text-[#5a6258] leading-relaxed font-sans mb-6">
                Reference datasets for rivers, lakes, coasts, wetlands, and estuarine habitats.
              </p>
            </div>

            {/* Progress Metric Bar */}
            <div className="pt-4 border-t border-[#e5efee]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#020404] mb-1.5 font-sans">
                <span>HABITAT SYSTEMS COVERED</span>
                <span className="text-[#2a7b88]">92%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#ebf4f4] border border-[#cfdfde] overflow-hidden">
                <div className="h-full rounded-full bg-[#2a7b88] transition-all duration-1000" style={{ width: '92%' }} />
              </div>
            </div>
          </div>

          {/* Card 3: 1.9X Surveillance Density (Berry Pink Theme) */}
          <div className="relative rounded-[28px] bg-[#ffffff] border-2 border-[#ebd2dc] p-6 shadow-eco-sm hover:shadow-eco-md transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transform">
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 pointer-events-none text-[#bd3b67]">
              <Activity className="w-full h-full" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#bd3b67] border-2 border-[#96284d] flex items-center justify-center text-white mb-4 shadow-md">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-normal text-[#bd3b67] tracking-wide font-heading mb-1">
                1.9X
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-2 font-sans">
                SURVEILLANCE DENSITY
              </div>
              <p className="text-xs text-[#5a6258] leading-relaxed font-sans mb-6">
                Enhanced detection power for early warnings & invasive species tracking.
              </p>
            </div>

            {/* Progress Metric Bar */}
            <div className="pt-4 border-t border-[#f4e6ec]">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#020404] mb-1.5 font-sans">
                <span>DETECTION EFFICIENCY</span>
                <span className="text-[#bd3b67]">89%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#faedf3] border border-[#ebd2dc] overflow-hidden">
                <div className="h-full rounded-full bg-[#bd3b67] transition-all duration-1000" style={{ width: '89%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW: 5-Pill Value Highlights Ribbon ── */}
        <div className="rounded-[28px] bg-[#ffffff] border-2 border-[#d2e2cd] p-5 sm:p-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#d2e2cd]/70">
            {/* Pill 1 */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-2">
              <div className="w-10 h-10 rounded-full bg-[#f8fef4] border-2 border-[#689660] flex items-center justify-center text-[#689660] shrink-0 shadow-sm">
                <Leaf className="w-5 h-5 text-[#689660]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#020404] font-sans">
                  eDNA-POWERED INSIGHTS
                </div>
                <div className="text-[10px] text-[#5a6258] leading-tight font-sans">
                  Uncover hidden biodiversity with molecular precision.
                </div>
              </div>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-full bg-[#f8fef4] border-2 border-[#689660] flex items-center justify-center text-[#689660] shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#689660]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#020404] font-sans">
                  EARLY WARNING SYSTEMS
                </div>
                <div className="text-[10px] text-[#5a6258] leading-tight font-sans">
                  Detect threats before they impact ecosystems.
                </div>
              </div>
            </div>

            {/* Pill 3 */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-full bg-[#f8fef4] border-2 border-[#689660] flex items-center justify-center text-[#689660] shrink-0 shadow-sm">
                <Share2 className="w-5 h-5 text-[#689660]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#020404] font-sans">
                  DATA-DRIVEN DECISIONS
                </div>
                <div className="text-[10px] text-[#5a6258] leading-tight font-sans">
                  Actionable intelligence for conservation.
                </div>
              </div>
            </div>

            {/* Pill 4 */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-full bg-[#f8fef4] border-2 border-[#689660] flex items-center justify-center text-[#689660] shrink-0 shadow-sm">
                <Activity className="w-5 h-5 text-[#689660]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#020404] font-sans">
                  CONTINUOUS MONITORING
                </div>
                <div className="text-[10px] text-[#5a6258] leading-tight font-sans">
                  Real-time surveillance for a resilient planet.
                </div>
              </div>
            </div>

            {/* Pill 5 */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-full bg-[#f8fef4] border-2 border-[#689660] flex items-center justify-center text-[#689660] shrink-0 shadow-sm">
                <Users className="w-5 h-5 text-[#689660]" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#020404] font-sans">
                  COLLABORATIVE SCIENCE
                </div>
                <div className="text-[10px] text-[#5a6258] leading-tight font-sans">
                  Working together for biodiversity restoration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
