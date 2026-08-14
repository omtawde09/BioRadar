import React from 'react';
import { ArrowUpRight, Sparkles, Waves, ShieldCheck } from 'lucide-react';
import { PopUp, RiseUp, StaggerContainer, StaggerItem } from './MotionReveal';

interface HeroSectionProps {
  onExplorePipeline?: () => void;
  onLaunchDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplorePipeline, onLaunchDemo }) => {
  return (
    <section
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] bg-cover bg-center bg-no-repeat font-sans overflow-hidden"
      style={{
        backgroundImage: "url('/static/assets/landing-image.png')",
        backgroundColor: "#fcfcf0"
      }}
    >
      {/* Decorative Synaptic & Marine Background Grid */}
      <div className="absolute inset-0 bg-bio-neural opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-marine-waves opacity-30 pointer-events-none" />

      {/* Floating Animated Ambient Bio-Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[#689660]/12 blur-3xl pointer-events-none animate-bio-float" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-[#bd3b67]/10 blur-3xl pointer-events-none animate-bio-float" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Top Badges with Staggered Pop-In */}
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8" staggerDelay={0.08}>
          <StaggerItem>
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8fef4] border-2 border-[#689660] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1b5e20] shadow-sm hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[#689660] animate-pulse" />
              <span>Smart India Hackathon 2026</span>
            </span>
          </StaggerItem>
          <StaggerItem>
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#d2dcc8] text-[11px] sm:text-xs font-bold text-[#020404] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#689660]" />
              <span>Problem Statement SIH25042</span>
            </span>
          </StaggerItem>
          <StaggerItem>
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#ebd2dc] text-[11px] sm:text-xs font-bold text-[#bd3b67] shadow-sm">
              <Waves className="w-3.5 h-3.5 text-[#bd3b67]" />
              <span>Ministry of Earth Sciences</span>
            </span>
          </StaggerItem>
        </StaggerContainer>

        {/* Main Engaging Headings in Bungee font with Spring Pop-Up */}
        <PopUp delay={0.15} duration={0.7} className="w-full">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-[#020404] font-heading uppercase leading-tight max-w-4xl mx-auto drop-shadow-sm">
            BIODIVERSITY INTELLIGENCE FOR INDIAN WATERS
          </h1>
        </PopUp>

        <RiseUp delay={0.25} duration={0.6}>
          <div className="w-24 h-1.5 bg-[#bd3b67] mx-auto mt-4 sm:mt-5 mb-4 sm:mb-5 rounded-full shadow-sm" />
        </RiseUp>

        <RiseUp delay={0.3} duration={0.65} className="w-full">
          <h2 className="text-base sm:text-2xl font-normal text-[#bd3b67] mb-6 font-heading tracking-wide uppercase max-w-3xl mx-auto">
            DECODING AQUATIC ECOSYSTEMS FROM ENVIRONMENTAL DNA
          </h2>
        </RiseUp>

        {/* Body lede in Poppins with Smooth Rise */}
        <RiseUp delay={0.4} duration={0.7} className="w-full">
          <p className="text-xs sm:text-base lg:text-lg text-[#020404] leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-semibold font-sans">
            From a single litre of estuarine or coastal water, BioRadar reconstructs complete biological communities, detects invasive threats, and cryptographically proves scientific findings without catching, seeing, or disturbing a single organism.
          </p>
        </RiseUp>

        {/* Action Buttons with Spring Pop-Up */}
        <PopUp delay={0.5} duration={0.65} className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="#pipeline"
              onClick={onExplorePipeline}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#689660] text-white border-2 border-[#476d40] px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#588051] transition-all shadow-tactile-btn transform active:translate-y-0.5 font-sans"
            >
              <span>Explore Scientific Workflow</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                if (onLaunchDemo) onLaunchDemo();
                else window.location.hash = '#analyze';
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#bd3b67] text-white border-2 border-[#8f2549] px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#a63057] transition-all shadow-tactile-btn transform active:translate-y-0.5 font-sans"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Analysis Pipeline</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </PopUp>
      </div>
    </section>
  );
};
