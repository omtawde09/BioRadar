import React from 'react';
import { Tag, MapPin, ArrowUpRight } from 'lucide-react';

interface IndianEcosystemsSectionProps {
  onNavigateView?: (viewId: string) => void;
}

export const IndianEcosystemsSection: React.FC<IndianEcosystemsSectionProps> = ({ onNavigateView }) => {
  const sites = [
    {
      id: 1,
      name: 'MANDOVI ESTUARY',
      state: 'Goa',
      locationCode: 'GOA',
      type: 'Estuarine Mangrove & Tidal Salinity',
      taxaCount: '1,420+ Taxa',
      invasiveStatus: 'Monitored',
      image: '/static/assets/mandovi.png',
      desc: 'Tidal confluence supporting estuarine shellfish and commercial fisheries.'
    },
    {
      id: 2,
      name: 'VEMBANAD LAKE',
      state: 'Kerala',
      locationCode: 'KL',
      type: 'Ramsar Wetland & Brackish Lagoon',
      taxaCount: '1,890+ Taxa',
      invasiveStatus: 'Water Hyacinth',
      image: '/static/assets/vembanand.png',
      desc: 'Largest brackish lagoon in India; monitored for nutrient enrichment.'
    },
    {
      id: 3,
      name: 'KOLLERU LAKE',
      state: 'Andhra Pradesh',
      locationCode: 'AP',
      type: 'Freshwater Pelagic Wetland',
      taxaCount: '1,120+ Taxa',
      invasiveStatus: 'Aquaculture',
      image: '/static/assets/kolleru.png',
      desc: 'Critical pelican sanctuary surrounded by inland aquaculture ponds.'
    },
    {
      id: 4,
      name: 'GULF OF MANNAR',
      state: 'Tamil Nadu',
      locationCode: 'TN',
      type: 'Marine Biosphere Reserve',
      taxaCount: '2,450+ Taxa',
      invasiveStatus: 'Coral Watch',
      image: '/static/assets/gulf-of-manner.png',
      desc: 'Coral reef archipelago supporting dugongs, turtles, and 117 coral taxa.'
    },
    {
      id: 5,
      name: 'KAVARATTI LAGOON',
      state: 'Lakshadweep',
      locationCode: 'LD',
      type: 'Atoll Lagoon & Seagrass',
      taxaCount: '1,680+ Taxa',
      invasiveStatus: 'Pristine',
      image: '/static/assets/kavaretti.png',
      desc: 'Seagrass and coral atoll habitat monitored as a pristine oceanic baseline.'
    },
    {
      id: 6,
      name: 'SOUTH ANDAMAN',
      state: 'Andaman & Nicobar',
      locationCode: 'AN',
      type: 'Deep Trench & Mangrove Creek',
      taxaCount: '2,110+ Taxa',
      invasiveStatus: 'Ballast Alert',
      image: '/static/assets/south-andaman.png',
      desc: 'International shipping lane junction monitored for ballast water introductions.'
    }
  ];

  const handleViewSite = (siteId: number) => {
    if (onNavigateView) {
      onNavigateView('results');
    } else {
      window.location.hash = '#results';
    }
  };

  return (
    <section id="sites" className="bg-[#fcfcf0] py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e2e6d8] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#689660] block mb-2 font-sans">
            Validated Aquatic Baselines
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal uppercase text-[#020404] tracking-wide font-heading">
            PILOT SURVEY ECOSYSTEMS ACROSS INDIA
          </h2>
          <div className="w-20 h-1.5 bg-[#bd3b67] mx-auto mt-3 rounded-full shadow-sm" />
          <p className="text-sm sm:text-base text-[#5a6258] mt-4 font-sans font-medium">
            Real-world baseline stations benchmarked against National Biodiversity Authority (NBA) conservation priority zones.
          </p>
        </div>

        {/* Full-Bleed Immersive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {sites.map((site) => (
            <div
              key={site.id}
              className="group relative aspect-[9/13] sm:aspect-[9/12] rounded-[32px] overflow-hidden shadow-eco-md hover:shadow-eco-lg transition-all duration-300 flex flex-col justify-between p-6 border-2 border-[#e2e6d8] hover:border-[#689660] hover:-translate-y-1.5 transform"
            >
              {/* Full-Bleed Background Image */}
              <img
                src={site.image}
                alt={site.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020404]/95 via-[#020404]/40 to-black/20" />

              {/* Top Row: Location State Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  {site.state}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-white/90 text-[10px] font-semibold shadow-sm">
                  {site.invasiveStatus}
                </span>
              </div>

              {/* Bottom Floating Content */}
              <div className="relative z-10 space-y-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white font-heading tracking-wide uppercase leading-tight drop-shadow-sm">
                    {site.name}
                  </h3>
                  <p className="text-xs text-white/80 font-medium font-sans mt-1">
                    {site.type}
                  </p>
                </div>

                {/* Metadata Row */}
                <div className="flex items-center space-x-3 text-xs text-white/90 font-semibold pt-1">
                  <div className="flex items-center space-x-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/25 shadow-sm">
                    <Tag className="w-3.5 h-3.5 text-[#689660]" />
                    <span>{site.taxaCount}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/25 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#bd3b67]" />
                    <span>{site.locationCode}</span>
                  </div>
                </div>

                {/* White Pill Action Button with Border & Depth */}
                <button
                  type="button"
                  onClick={() => handleViewSite(site.id)}
                  className="w-full bg-[#ffffff] text-[#020404] hover:bg-[#689660] hover:text-white border-2 border-white hover:border-[#4d7346] py-3.5 px-6 rounded-full text-xs font-bold font-sans uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>View Site Baseline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
