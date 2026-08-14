import React from 'react';
import { Dna, Shield, ArrowUpRight, Upload, Activity, FileText, BarChart2, Bell, Settings } from 'lucide-react';
import { PopUp, RiseUp, SlideIn } from './MotionReveal';

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
      id="bioradar-footer"
      className="relative w-full border-t-2 border-[#1e3320] py-10 sm:py-12 px-4 sm:px-6 lg:px-10 font-sans overflow-hidden bg-cover bg-bottom bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/static/assets/footer-img.png')"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row: Left Side (Brand & Theory) | Right Side (Platform Tools & Governance) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
          {/* ══ LEFT SIDE: Brand, Mission & Theory Links (Col span 6) ══ */}
          <SlideIn direction="left" delay={0.1} className="lg:col-span-6 space-y-5">
            {/* Brand Logo & Mission */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-2xl bg-[#142418]/95 border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shadow-lg backdrop-blur-sm">
                  <Dna className="w-6 h-6 text-[#82b978]" />
                </div>
                <div>
                  <span className="text-2xl font-normal text-[#ffffff] font-heading tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    BioRadar
                  </span>
                  <span className="ml-2 text-xs px-2.5 py-0.5 rounded-full bg-[#142418]/90 border-2 border-[#82b978] text-[#82b978] font-bold shadow-sm backdrop-blur-sm">
                    eDNA
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#e2ecd0] leading-relaxed font-medium max-w-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                Open-source eDNA biodiversity intelligence and aquatic surveillance platform for Indian marine, estuarine, and freshwater ecosystems.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#142418]/90 border-2 border-[#82b978] text-[11px] font-bold text-[#82b978] shadow-md backdrop-blur-sm">
                  <Shield className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>SIH 2026 &bull; MoES SIH25042</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#142418]/90 border-2 border-[#2b422a] text-[11px] font-bold text-[#ffffff] shadow-md backdrop-blur-sm">
                  <span>Darwin Core (DwC) & MIxS</span>
                </span>
              </div>
            </div>

            {/* Theory & Science Horizontal Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffffff] mb-2 font-heading border-b-2 border-[#82b978] pb-1 inline-block drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                Theory & Science
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-bold pt-1">
                <a href="#theory" className="text-[#ffffff] hover:text-[#82b978] transition-colors flex items-center space-x-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <span className="w-2 h-2 rounded-full bg-[#82b978]" />
                  <span>Fundamental Biology</span>
                </a>
                <a href="#pipeline" className="text-[#ffffff] hover:text-[#82b978] transition-colors flex items-center space-x-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <span className="w-2 h-2 rounded-full bg-[#82b978]" />
                  <span>DADA2 / vsearch</span>
                </a>
                <a href="#zones" className="text-[#ffffff] hover:text-[#82b978] transition-colors flex items-center space-x-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <span className="w-2 h-2 rounded-full bg-[#82b978]" />
                  <span>6 Capabilities</span>
                </a>
                <a href="#models" className="text-[#ffffff] hover:text-[#82b978] transition-colors flex items-center space-x-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <span className="w-2 h-2 rounded-full bg-[#82b978]" />
                  <span>Fourier & Platt AI</span>
                </a>
                <a href="#sites" className="text-[#ffffff] hover:text-[#82b978] transition-colors flex items-center space-x-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <span className="w-2 h-2 rounded-full bg-[#82b978]" />
                  <span>Coastal Baselines</span>
                </a>
              </div>
            </div>
          </SlideIn>

          {/* ══ RIGHT SIDE: Platform Tools on the Right Side (Col span 6) ══ */}
          <SlideIn direction="right" delay={0.15} className="lg:col-span-6 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffffff] mb-3 font-heading border-b-2 border-[#82b978] pb-1 inline-block drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                Platform Tools
              </h4>
              
              {/* 6 Platform Tools Grid on the Right with High-Contrast Dark Translucent Glass Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleNav('analyze')}
                  className="py-2.5 px-3 rounded-xl bg-[#142418]/90 hover:bg-[#689660] text-[#ffffff] border-2 border-[#2b422a] hover:border-[#82b978] transition-all shadow-md backdrop-blur-sm flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <Upload className="w-3.5 h-3.5 text-[#82b978] group-hover:text-white" />
                    <span className="text-xs font-bold">Analyze</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a8c4a4] group-hover:text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('monitor')}
                  className="py-2.5 px-3 rounded-xl bg-[#142418]/90 hover:bg-[#689660] text-[#ffffff] border-2 border-[#2b422a] hover:border-[#82b978] transition-all shadow-md backdrop-blur-sm flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <Activity className="w-3.5 h-3.5 text-[#82b978] group-hover:text-white" />
                    <span className="text-xs font-bold">Monitor</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a8c4a4] group-hover:text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('results')}
                  className="py-2.5 px-3 rounded-xl bg-[#142418]/90 hover:bg-[#689660] text-[#ffffff] border-2 border-[#2b422a] hover:border-[#82b978] transition-all shadow-md backdrop-blur-sm flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-[#82b978] group-hover:text-white" />
                    <span className="text-xs font-bold">Results</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a8c4a4] group-hover:text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('compare')}
                  className="py-2.5 px-3 rounded-xl bg-[#142418]/90 hover:bg-[#689660] text-[#ffffff] border-2 border-[#2b422a] hover:border-[#82b978] transition-all shadow-md backdrop-blur-sm flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <BarChart2 className="w-3.5 h-3.5 text-[#82b978] group-hover:text-white" />
                    <span className="text-xs font-bold">Compare</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a8c4a4] group-hover:text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('alerts')}
                  className="py-2.5 px-3 rounded-xl bg-[#142418]/90 hover:bg-[#bd3b67] text-[#ffffff] border-2 border-[#2b422a] hover:border-[#bd3b67] transition-all shadow-md backdrop-blur-sm flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <Bell className="w-3.5 h-3.5 text-[#e66a93] group-hover:text-white" />
                    <span className="text-xs font-bold">Alerts</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a8c4a4] group-hover:text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('settings')}
                  className="py-2.5 px-3 rounded-xl bg-[#142418]/90 hover:bg-[#689660] text-[#ffffff] border-2 border-[#2b422a] hover:border-[#82b978] transition-all shadow-md backdrop-blur-sm flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2">
                    <Settings className="w-3.5 h-3.5 text-[#82b978] group-hover:text-white" />
                    <span className="text-xs font-bold">Settings</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a8c4a4] group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Governance Callout in Dark Frosted Glass */}
            <div className="p-3 rounded-xl bg-[#142418]/90 border-2 border-[#2b422a] flex items-center justify-between shadow-md backdrop-blur-sm">
              <div className="text-[11px] text-[#ffffff] font-medium">
                <span className="font-bold text-[#82b978]">Cryptographic Provenance:</span> SHA-256 Chained Hash Ledger
              </div>
              <span className="w-2 h-2 rounded-full bg-[#82b978] animate-pulse" />
            </div>
          </SlideIn>
        </div>

        {/* ── CLEAN BOTTOM COMPLIANCE BAR IN HIGH-CONTRAST WHITE ── */}
        <RiseUp delay={0.2} className="pt-4 border-t-2 border-white/25 flex flex-col sm:flex-row items-center justify-between text-xs text-[#ffffff] font-bold gap-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          <div>
            &copy; 2026 BioRadar. eDNA Biodiversity Intelligence for Indian Waters.
          </div>
          <div className="flex items-center space-x-4 text-xs font-bold text-[#ffffff]">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#82b978]" />
              <span>GIGW Compliant</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#82b978]" />
              <span>WCAG 2.1 AA Accessible</span>
            </span>
          </div>
        </RiseUp>
      </div>
    </footer>
  );
};
