import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBanner } from './components/MetricsBanner';
import { RestoringEcologySection } from './components/RestoringEcologySection';
import { PipelineFlowchartSection } from './components/PipelineFlowchartSection';
import { MultitudeZonesSection } from './components/MultitudeZonesSection';
import { MathTheorySection } from './components/MathTheorySection';
import { IndianEcosystemsSection } from './components/IndianEcosystemsSection';
import { Footer } from './components/Footer';

interface HomePageProps {
  onNavigateView?: (viewId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateView }) => {
  const handleLaunchDemo = () => {
    if (onNavigateView) {
      onNavigateView('analyze');
    } else {
      window.location.hash = '#analyze';
    }
  };

  const handleExplorePipeline = () => {
    const el = document.getElementById('pipeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fcfcf0] text-[#020404] font-sans antialiased selection:bg-[#689660] selection:text-white">
      {/* Top Modern Eco Navbar */}
      <Navbar onNavigateView={onNavigateView} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Landing Section */}
        <HeroSection
          onLaunchDemo={handleLaunchDemo}
          onExplorePipeline={handleExplorePipeline}
        />

        {/* 2. Key Metrics 3-Column Showcase (2 Cards Left, Large Kwala Center, 2 Cards Right) */}
        <MetricsBanner />

        {/* 3. Restoring Ecology & eDNA Biological Principles */}
        <RestoringEcologySection />

        {/* 4. Interactive Scientific Pipeline Flowchart & Diagram */}
        <PipelineFlowchartSection />

        {/* 5. 6 Operational Capabilities Carousel & Modules */}
        <MultitudeZonesSection onNavigateView={onNavigateView} />

        {/* 6. Deep-Dive Mathematical & AI Formulations */}
        <MathTheorySection />

        {/* 7. Validated Indian Aquatic Ecosystem Baselines */}
        <IndianEcosystemsSection onNavigateView={onNavigateView} />
      </main>

      {/* Modern Eco Footer with Visible Panoramic Landscape */}
      <Footer onNavigateView={onNavigateView} />
    </div>
  );
};
