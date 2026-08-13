import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onExplorePipeline?: () => void;
  onLaunchDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplorePipeline, onLaunchDemo }) => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] bg-cover bg-center bg-no-repeat font-sans"
      style={{
        backgroundImage: "url('/static/assets/landing-image.png')",
        backgroundColor: "#fcfcf0"
      }}
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Top Badges with Borders and Tactile Depth */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8fef4] border-2 border-[#689660] text-xs font-bold uppercase tracking-wider text-[#689660] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#689660]" />
            <span>Smart India Hackathon 2026</span>
          </span>
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#d2dcc8] text-xs font-bold text-[#5a6258] shadow-sm">
            <span>Problem Statement SIH25042</span>
          </span>
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border-2 border-[#ebd2dc] text-xs font-bold text-[#bd3b67] shadow-sm">
            <span>Ministry of Earth Sciences</span>
          </span>
        </div>

        {/* Main Engaging Headings in Bungee font */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-[#020404] font-heading uppercase leading-tight max-w-4xl mx-auto drop-shadow-sm">
          BIODIVERSITY INTELLIGENCE FOR INDIAN WATERS
        </h1>

        <div className="w-24 h-1.5 bg-[#bd3b67] mx-auto mt-5 mb-5 rounded-full shadow-sm" />

        <h2 className="text-lg sm:text-2xl font-normal text-[#bd3b67] mb-6 font-heading tracking-wide uppercase max-w-3xl mx-auto">
          DECODING AQUATIC ECOSYSTEMS FROM ENVIRONMENTAL DNA
        </h2>

        {/* Body lede in Poppins */}
        <p className="text-sm sm:text-base lg:text-lg text-[#020404] leading-relaxed max-w-3xl mx-auto mb-10 font-medium font-sans">
          From a single litre of estuarine or coastal water, BioRadar reconstructs complete biological communities, detects invasive threats, and cryptographically proves scientific findings without catching, seeing, or disturbing a single organism.
        </p>

        {/* Action Buttons with Borders and Tactile Depth */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pipeline"
            onClick={onExplorePipeline}
            className="inline-flex items-center space-x-2 bg-[#689660] text-white border-2 border-[#476d40] px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#588051] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 font-sans"
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
            className="inline-flex items-center space-x-2 bg-[#bd3b67] text-white border-2 border-[#8f2549] px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#a63057] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 font-sans"
          >
            <span>Launch Analysis Pipeline</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
