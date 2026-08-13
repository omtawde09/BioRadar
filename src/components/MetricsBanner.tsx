import React, { useEffect, useRef, useState } from 'react';
import { Database, Fish, Award, MapPin } from 'lucide-react';

export const MetricsBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animated counter state
  const [seqCount, setSeqCount] = useState(0);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [recallCount, setRecallCount] = useState(0);
  const [baselinesCount, setBaselinesCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1800; // 1.8 seconds
    const start = performance.now();

    const frame = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setSeqCount(Math.floor(ease * 33611));
      setSpeciesCount(Math.floor(ease * 8020));
      setRecallCount(Math.floor(ease * 100));
      setBaselinesCount(Math.floor(ease * 12));

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setSeqCount(33611);
        setSpeciesCount(8020);
        setRecallCount(100);
        setBaselinesCount(12);
      }
    };

    requestAnimationFrame(frame);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#e2e6d8] font-sans"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Row 1: 2 Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl justify-items-center">
          {/* Card 1: COI Sequences */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fef4] border border-[#e2e6d8] hover:border-[#689660] transition-all shadow-eco-sm hover:-translate-y-1 transform">
            <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#689660] flex items-center justify-center mb-3 shadow-sm">
              <Database className="w-6 h-6 text-[#689660]" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-[#bd3b67] tracking-wide font-heading mb-1">
              {seqCount.toLocaleString()}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-1 font-sans">
              CURATED COI SEQUENCES
            </div>
            <p className="text-xs font-medium text-[#5a6258] leading-tight max-w-[240px] font-sans">
              NCBI reference dataset with 43% Indian marine records
            </p>
          </div>

          {/* Card 2: Species Catalogued */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fef4] border border-[#e2e6d8] hover:border-[#689660] transition-all shadow-eco-sm hover:-translate-y-1 transform">
            <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#689660] flex items-center justify-center mb-3 shadow-sm">
              <Fish className="w-6 h-6 text-[#689660]" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-[#bd3b67] tracking-wide font-heading mb-1">
              {speciesCount.toLocaleString()}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-1 font-sans">
              SPECIES CATALOGUED
            </div>
            <p className="text-xs font-medium text-[#5a6258] leading-tight max-w-[240px] font-sans">
              Marine, estuarine and freshwater taxa curated
            </p>
          </div>
        </div>

        {/* Center: Circular Kwala Image Frame */}
        <div className="my-8 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#689660] bg-[#f8fef4] shadow-eco-lg p-1.5 overflow-hidden hover:scale-105 transition-transform">
            <img
              src="/static/assets/kwala.png"
              alt="Native Wildlife Kwala"
              className="w-full h-full object-cover rounded-full"
              onError={(e: any) => {
                e.target.src = '/static/kwala.png';
              }}
            />
          </div>
          <span className="mt-3 text-xs font-bold text-[#689660] bg-[#f8fef4] px-4 py-1 rounded-full border border-[#e2e6d8] uppercase tracking-wider font-sans shadow-sm">
            Native Wildlife Baseline
          </span>
        </div>

        {/* Row 2: 2 Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl justify-items-center">
          {/* Card 3: Benchmark Recall */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fef4] border border-[#e2e6d8] hover:border-[#689660] transition-all shadow-eco-sm hover:-translate-y-1 transform">
            <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#689660] flex items-center justify-center mb-3 shadow-sm">
              <Award className="w-6 h-6 text-[#bd3b67]" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-[#bd3b67] tracking-wide font-heading mb-1">
              {recallCount}%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-1 font-sans">
              BENCHMARK RECALL
            </div>
            <p className="text-xs font-medium text-[#5a6258] leading-tight max-w-[240px] font-sans">
              Zero false positives on in-silico mock community
            </p>
          </div>

          {/* Card 4: Coastal Baselines */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fef4] border border-[#e2e6d8] hover:border-[#689660] transition-all shadow-eco-sm hover:-translate-y-1 transform">
            <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#689660] flex items-center justify-center mb-3 shadow-sm">
              <MapPin className="w-6 h-6 text-[#689660]" />
            </div>
            <div className="text-2xl sm:text-3xl font-normal text-[#bd3b67] tracking-wide font-heading mb-1">
              {baselinesCount}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#020404] mb-1 font-sans">
              COASTAL BASELINES
            </div>
            <p className="text-xs font-medium text-[#5a6258] leading-tight max-w-[240px] font-sans">
              Monitored across 6 premier Indian ecosystems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
