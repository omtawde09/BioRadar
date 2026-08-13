import React from 'react';
import { Dna, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateView?: (viewId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateView }) => {
  const handleNav = (viewId: string) => {
    if (onNavigateView) {
      onNavigateView(viewId);
    } else {
      window.location.hash = `#${viewId}`;
    }
  };

  return (
    <footer
      className="relative w-full bg-[#ffffff] bg-cover bg-center bg-no-repeat border-t-2 border-[#e2e6d8] py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden"
      style={{
        backgroundImage: "url('/static/assets/footer-img.png')"
      }}
    >
      {/* Very subtle tint to guarantee crisp text legibility without obscuring the background art */}
      <div className="absolute inset-0 bg-[#ffffff]/60 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Seamless Unified 4-Column Layout (No separate boxy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand & Mission (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full bg-[#f8fef4] border-2 border-[#689660] flex items-center justify-center text-[#689660] shadow-md">
                <Dna className="w-6 h-6 text-[#689660]" />
              </div>
              <div>
                <span className="text-2xl font-normal text-[#020404] font-heading tracking-wide">
                  BioRadar
                </span>
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#f8fef4] border border-[#689660] text-[#689660] font-bold">
                  eDNA
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#253023] leading-relaxed font-medium max-w-sm">
              Open-source eDNA biodiversity intelligence and aquatic surveillance platform for Indian marine, estuarine, and freshwater ecosystems.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ffffff]/90 border-2 border-[#689660] text-xs font-bold text-[#689660] shadow-sm">
                <Shield className="w-4 h-4 text-[#689660]" />
                <span>Smart India Hackathon 2026</span>
              </span>
            </div>
          </div>

          {/* Theory Navigation (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#020404] mb-4 font-sans border-b border-[#689660]/30 pb-2 inline-block">
              Theory & Science
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#253023]">
              <li>
                <a href="#theory" className="hover:text-[#bd3b67] transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#689660] group-hover:bg-[#bd3b67] transition-colors" />
                  <span>Fundamental Biology</span>
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[#bd3b67] transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#689660] group-hover:bg-[#bd3b67] transition-colors" />
                  <span>DADA2 / vsearch Workflow</span>
                </a>
              </li>
              <li>
                <a href="#zones" className="hover:text-[#bd3b67] transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#689660] group-hover:bg-[#bd3b67] transition-colors" />
                  <span>6 Operational Capabilities</span>
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-[#bd3b67] transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#689660] group-hover:bg-[#bd3b67] transition-colors" />
                  <span>Fourier & Platt Forecasting</span>
                </a>
              </li>
              <li>
                <a href="#sites" className="hover:text-[#bd3b67] transition-colors flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#689660] group-hover:bg-[#bd3b67] transition-colors" />
                  <span>Indian Coastal Baselines</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Dashboard Tools Navigation (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#020404] mb-4 font-sans border-b border-[#689660]/30 pb-2 inline-block">
              Platform Tools
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <button
                type="button"
                onClick={() => handleNav('analyze')}
                className="py-2 px-3 text-left rounded-lg bg-[#ffffff]/90 hover:bg-[#689660] text-[#020404] hover:text-white border border-[#d2dcc8] hover:border-[#4d7346] transition-all shadow-sm flex items-center justify-between group"
              >
                <span>Analyze</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#689660] group-hover:text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleNav('monitor')}
                className="py-2 px-3 text-left rounded-lg bg-[#ffffff]/90 hover:bg-[#689660] text-[#020404] hover:text-white border border-[#d2dcc8] hover:border-[#4d7346] transition-all shadow-sm flex items-center justify-between group"
              >
                <span>Monitor</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#689660] group-hover:text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleNav('results')}
                className="py-2 px-3 text-left rounded-lg bg-[#ffffff]/90 hover:bg-[#689660] text-[#020404] hover:text-white border border-[#d2dcc8] hover:border-[#4d7346] transition-all shadow-sm flex items-center justify-between group"
              >
                <span>Results</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#689660] group-hover:text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleNav('compare')}
                className="py-2 px-3 text-left rounded-lg bg-[#ffffff]/90 hover:bg-[#689660] text-[#020404] hover:text-white border border-[#d2dcc8] hover:border-[#4d7346] transition-all shadow-sm flex items-center justify-between group"
              >
                <span>Compare</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#689660] group-hover:text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleNav('alerts')}
                className="py-2 px-3 text-left rounded-lg bg-[#ffffff]/90 hover:bg-[#bd3b67] text-[#020404] hover:text-white border border-[#d2dcc8] hover:border-[#8f2549] transition-all shadow-sm flex items-center justify-between group"
              >
                <span>Alerts</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#bd3b67] group-hover:text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleNav('settings')}
                className="py-2 px-3 text-left rounded-lg bg-[#ffffff]/90 hover:bg-[#689660] text-[#020404] hover:text-white border border-[#d2dcc8] hover:border-[#4d7346] transition-all shadow-sm flex items-center justify-between group"
              >
                <span>Settings</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#689660] group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Governance & Attribution (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#020404] mb-4 font-sans border-b border-[#689660]/30 pb-2 inline-block">
              Governance
            </h4>
            <p className="text-xs text-[#253023] leading-relaxed font-medium">
              Ministry of Earth Sciences (MoES) &bull; SIH25042.
            </p>
            <p className="text-[11px] text-[#5a6258] leading-relaxed font-medium">
              Darwin Core (DwC) & MIxS genomics compliant standards.
            </p>
          </div>
        </div>

        {/* Clean Bottom Divider & Compliance Line */}
        <div className="pt-8 border-t-2 border-[#d2dcc8]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3a4438] font-semibold">
          <div>
            &copy; 2026 BioRadar. eDNA Biodiversity Intelligence for Indian Waters.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4 text-xs font-bold text-[#020404]">
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#689660]" />
              <span>GIGW Compliant</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#689660]" />
              <span>WCAG 2.1 AA Accessible</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
