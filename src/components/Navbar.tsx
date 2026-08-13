import React, { useState, useEffect } from 'react';
import { Settings, Menu, X, ArrowUpRight, Dna, Upload, Activity, FileText, BarChart2, Bell } from 'lucide-react';

interface NavbarProps {
  onNavigateView?: (viewId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).BioRadarI18n) {
      setCurrentLang((window as any).BioRadarI18n.language() || 'en');
    }

    const handleLangChange = (e: any) => {
      if (e.detail) setCurrentLang(e.detail);
    };

    const handleScroll = () => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollY > 15);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('bioradar:language', handleLangChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('bioradar:language', handleLangChange);
    };
  }, []);

  const handleToggleLang = (lang: string) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined' && (window as any).BioRadarI18n) {
      (window as any).BioRadarI18n.setLanguage(lang);
    }
  };

  const handleNavClick = (hash: string, viewId?: string) => {
    setMobileMenuOpen(false);
    if (viewId && onNavigateView) {
      onNavigateView(viewId);
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <header
      id="bioradar-navbar"
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#fcfcf0] border-b-2 border-[#d2dcc8] shadow-eco-md'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? '#fcfcf0' : 'transparent',
        borderBottomColor: isScrolled ? '#d2dcc8' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('#home', 'home')}
          >
            <div className="w-11 h-11 rounded-full bg-[#ffffff] border-2 border-[#689660] flex items-center justify-center text-[#689660] shadow-md group-hover:scale-105 transition-transform">
              <Dna className="w-6 h-6 text-[#689660]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-normal tracking-wide text-[#020404] font-heading group-hover:text-[#bd3b67] transition-colors">
                  BioRadar
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f8fef4] border-2 border-[#689660] text-[#689660] font-bold shadow-sm">
                  eDNA
                </span>
              </div>
              <p className="text-[11px] text-[#5a6258] font-semibold tracking-wide">
                {currentLang === 'hi' ? 'भारतीय जलक्षेत्र हेतु जैवविविधता इंटेलिजेंस' : 'Biodiversity Intelligence for Indian Waters'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-4">
            {/* Section Anchors */}
            <div className="flex items-center space-x-3 text-xs font-bold text-[#020404]">
              <a
                href="#theory"
                className="hover:text-[#bd3b67] transition-colors px-2 py-1 rounded-lg hover:bg-white/50"
              >
                {currentLang === 'hi' ? 'सिद्धांत' : 'Theory'}
              </a>
              <a
                href="#pipeline"
                className="hover:text-[#bd3b67] transition-colors px-2 py-1 rounded-lg hover:bg-white/50"
              >
                {currentLang === 'hi' ? 'पाइपलाइन' : 'Pipeline'}
              </a>
              <a
                href="#zones"
                className="hover:text-[#bd3b67] transition-colors px-2 py-1 rounded-lg hover:bg-white/50"
              >
                {currentLang === 'hi' ? 'क्षमताएँ' : 'Capabilities'}
              </a>
              <a
                href="#models"
                className="hover:text-[#bd3b67] transition-colors px-2 py-1 rounded-lg hover:bg-white/50"
              >
                {currentLang === 'hi' ? 'AI व गणित' : 'AI & Math'}
              </a>
              <a
                href="#sites"
                className="hover:text-[#bd3b67] transition-colors px-2 py-1 rounded-lg hover:bg-white/50"
              >
                {currentLang === 'hi' ? 'बेसलाइन' : 'Baselines'}
              </a>
            </div>

            {/* Language Toggle Button (Hindi / English) */}
            <div className="inline-flex p-1 rounded-full bg-[#ffffff] border-2 border-[#d2dcc8] shadow-sm">
              <button
                type="button"
                onClick={() => handleToggleLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#689660] text-white shadow-sm'
                    : 'text-[#5a6258] hover:text-[#020404]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleToggleLang('hi')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'hi'
                    ? 'bg-[#689660] text-white shadow-sm'
                    : 'text-[#5a6258] hover:text-[#020404]'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-[#d2dcc8]" />

            {/* Direct Dashboard Pages Navigation with Borders and Tactile Depth */}
            <div className="flex items-center space-x-1.5 bg-[#ffffff] p-1.5 rounded-full border-2 border-[#d2dcc8] shadow-md">
              <button
                type="button"
                onClick={() => handleNavClick('#analyze', 'analyze')}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-[#020404] hover:bg-[#689660] hover:text-white border border-transparent hover:border-[#4d7346] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-none hover:shadow-md flex items-center space-x-1"
                title="Upload & analyze sequencing datasets"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'विश्लेषण' : 'Analyze'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#monitor', 'monitor')}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-[#020404] hover:bg-[#689660] hover:text-white border border-transparent hover:border-[#4d7346] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-none hover:shadow-md flex items-center space-x-1"
                title="Live workflow monitor & logs"
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'निगरानी' : 'Monitor'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#results', 'results')}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-[#020404] hover:bg-[#689660] hover:text-white border border-transparent hover:border-[#4d7346] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-none hover:shadow-md flex items-center space-x-1"
                title="Species inventory, composition & GIS map"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'परिणाम' : 'Results'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#compare', 'compare')}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-[#020404] hover:bg-[#689660] hover:text-white border border-transparent hover:border-[#4d7346] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-none hover:shadow-md flex items-center space-x-1"
                title="Multi-site comparative radar chart"
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'तुलना' : 'Compare'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#alerts', 'alerts')}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-[#020404] hover:bg-[#bd3b67] hover:text-white border border-transparent hover:border-[#96284d] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-none hover:shadow-md flex items-center space-x-1"
                title="Invasive species alerts & field checks"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{currentLang === 'hi' ? 'चेतावनी' : 'Alerts'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#settings', 'settings')}
                className="p-1.5 rounded-full text-[#020404] hover:bg-[#689660] hover:text-white border border-transparent hover:border-[#4d7346] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                title="Settings & system health"
              >
                <Settings className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Launch Pipeline CTA with Border & Depth */}
            <button
              type="button"
              onClick={() => handleNavClick('#analyze', 'analyze')}
              className="inline-flex items-center space-x-1.5 bg-[#bd3b67] text-white border-2 border-[#8f2549] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#a63057] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <span>{currentLang === 'hi' ? 'डेमो चलाएँ' : 'Launch Demo'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile & Medium Header Controls */}
          <div className="flex xl:hidden items-center space-x-2">
            {/* Quick Analyze Button */}
            <button
              type="button"
              onClick={() => handleNavClick('#analyze', 'analyze')}
              className="bg-[#bd3b67] text-white border-2 border-[#8f2549] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center space-x-1"
            >
              <span>Analyze</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Language Toggle for mobile */}
            <div className="inline-flex p-0.5 rounded-full bg-[#ffffff] border-2 border-[#d2dcc8]">
              <button
                type="button"
                onClick={() => handleToggleLang(currentLang === 'en' ? 'hi' : 'en')}
                className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#689660] text-white"
              >
                {currentLang === 'en' ? 'हिन्दी' : 'EN'}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#f8fef4] shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t-2 border-[#d2dcc8] bg-[#fcfcf0] px-4 pt-4 pb-6 space-y-4 shadow-eco-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b-2 border-[#d2dcc8]/60">
            <a
              href="#theory"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs sm:text-sm font-bold text-[#020404] p-2.5 rounded-xl bg-white border border-[#d2dcc8] hover:bg-[#f8fef4]"
            >
              {currentLang === 'hi' ? 'सिद्धांत व जीवविज्ञान' : 'Theory & Biology'}
            </a>
            <a
              href="#pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs sm:text-sm font-bold text-[#020404] p-2.5 rounded-xl bg-white border border-[#d2dcc8] hover:bg-[#f8fef4]"
            >
              {currentLang === 'hi' ? 'वैज्ञानिक पाइपलाइन' : 'Scientific Pipeline'}
            </a>
            <a
              href="#zones"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs sm:text-sm font-bold text-[#020404] p-2.5 rounded-xl bg-white border border-[#d2dcc8] hover:bg-[#f8fef4]"
            >
              {currentLang === 'hi' ? 'क्षमताएँ' : 'Capabilities'}
            </a>
            <a
              href="#models"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs sm:text-sm font-bold text-[#020404] p-2.5 rounded-xl bg-white border border-[#d2dcc8] hover:bg-[#f8fef4]"
            >
              {currentLang === 'hi' ? 'AI व गणित' : 'AI & Mathematics'}
            </a>
            <a
              href="#sites"
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 text-xs sm:text-sm font-bold text-[#020404] p-2.5 rounded-xl bg-white border border-[#d2dcc8] hover:bg-[#f8fef4]"
            >
              {currentLang === 'hi' ? 'पारिस्थितिक बेसलाइन' : 'Ecosystem Baselines'}
            </a>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#5a6258] px-1">
              {currentLang === 'hi' ? 'डैशबोर्ड पृष्ठ' : 'Dashboard Pages (All Tools)'}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleNavClick('#analyze', 'analyze')}
                className="text-center py-2.5 px-2 text-xs font-bold rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#689660] hover:text-white transition-all shadow-sm"
              >
                Analyze
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#monitor', 'monitor')}
                className="text-center py-2.5 px-2 text-xs font-bold rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#689660] hover:text-white transition-all shadow-sm"
              >
                Monitor
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#results', 'results')}
                className="text-center py-2.5 px-2 text-xs font-bold rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#689660] hover:text-white transition-all shadow-sm"
              >
                Results
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#compare', 'compare')}
                className="text-center py-2.5 px-2 text-xs font-bold rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#689660] hover:text-white transition-all shadow-sm"
              >
                Compare
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#alerts', 'alerts')}
                className="text-center py-2.5 px-2 text-xs font-bold rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#bd3b67] hover:text-white transition-all shadow-sm"
              >
                Alerts
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#settings', 'settings')}
                className="text-center py-2.5 px-2 text-xs font-bold rounded-xl bg-white border-2 border-[#d2dcc8] text-[#020404] hover:bg-[#689660] hover:text-white transition-all shadow-sm"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
