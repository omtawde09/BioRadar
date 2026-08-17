import React, { useState } from 'react';
import {
  Home,
  Upload,
  Activity,
  FileText,
  BarChart2,
  Bell,
  Settings,
  Dna,
  Globe,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { useTranslation, Language } from '../i18n/useTranslation';

interface NavbarProps {
  onNavigateView?: (viewId: string) => void;
  activeView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateView, activeView = 'home' }) => {
  const { currentLang, setLanguage, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleLang = (lang: Language) => {
    setLanguage(lang);
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
      className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#09140c]/92 backdrop-blur-xl border-b-2 border-[#1e3320] shadow-[0_4px_30px_rgba(0,0,0,0.6)] font-sans pointer-events-auto py-2 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* ══ Brand Logo & Name ══ */}
          <div
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('#home', 'home')}
          >
            <div className="w-10 h-10 rounded-2xl bg-[#142418] border-2 border-[#82b978] flex items-center justify-center text-[#82b978] shadow-md group-hover:scale-105 group-hover:border-[#a8d89e] transition-all">
              <Dna className="w-5 h-5 text-[#82b978] group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-normal tracking-wide text-white font-heading group-hover:text-[#82b978] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {t('app.title')}
                </span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[#142418] border border-[#82b978] text-[#82b978] font-bold shadow-sm">
                  {t('app.tag')}
                </span>
              </div>
              <p className="text-[10px] text-[#c2d6be] font-medium tracking-wider hidden sm:block">
                {t('app.subtitle')}
              </p>
            </div>
          </div>

          {/* ══ DESKTOP TOP NAVBAR (Laptops & Computers: lg & xl) ══ */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {/* Section Anchors for Quick Scrolling on Home */}
            <div className="flex items-center space-x-1 text-xs font-bold text-white">
              <a
                href="#theory"
                className="nav-link-underline text-white/90 hover:text-[#82b978]"
              >
                <span>{t('nav.theory')}</span>
              </a>
              <a
                href="#pipeline"
                className="nav-link-underline text-white/90 hover:text-[#82b978]"
              >
                <span>{t('nav.pipeline')}</span>
              </a>
              <a
                href="#zones"
                className="nav-link-underline text-white/90 hover:text-[#82b978]"
              >
                <span>{t('nav.capabilities')}</span>
              </a>
              <a
                href="#models"
                className="nav-link-underline text-white/90 hover:text-[#82b978]"
              >
                <span>{t('nav.aimath')}</span>
              </a>
              <a
                href="#sites"
                className="nav-link-underline text-white/90 hover:text-[#82b978]"
              >
                <span>{t('nav.baselines')}</span>
              </a>
            </div>

            {/* Subtle Vertical Divider */}
            <div className="h-6 w-px bg-[#2b422a] mx-1" />

            {/* ══ Platform Pages Capsule (All 7 Pages) with Animated Underline Hover Effect ══ */}
            <div className="flex items-center space-x-1 bg-[#142418] px-2.5 py-1 rounded-full border-2 border-[#2b422a] shadow-inner">
              <button
                type="button"
                onClick={() => handleNavClick('#home', 'home')}
                className={`nav-link-underline text-xs font-bold ${
                  activeView === 'home' ? 'active' : 'text-white'
                }`}
                title="Home & Ecological Overview"
              >
                <Home className="w-3.5 h-3.5 text-[#82b978]" />
                <span>{t('nav.home')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#analyze', 'analyze')}
                className={`nav-link-underline text-xs font-bold ${
                  activeView === 'analyze' ? 'active' : 'text-white'
                }`}
                title="Upload & analyze FASTQ sequencing datasets"
              >
                <Upload className="w-3.5 h-3.5 text-[#82b978]" />
                <span>{t('nav.analyze')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#monitor', 'monitor')}
                className={`nav-link-underline text-xs font-bold ${
                  activeView === 'monitor' ? 'active' : 'text-white'
                }`}
                title="Live workflow execution monitor & logs"
              >
                <Activity className="w-3.5 h-3.5 text-[#82b978]" />
                <span>{t('nav.monitor')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#results', 'results')}
                className={`nav-link-underline text-xs font-bold ${
                  activeView === 'results' ? 'active' : 'text-white'
                }`}
                title="Taxonomic community composition & GIS map"
              >
                <FileText className="w-3.5 h-3.5 text-[#82b978]" />
                <span>{t('nav.results')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#compare', 'compare')}
                className={`nav-link-underline text-xs font-bold ${
                  activeView === 'compare' ? 'active' : 'text-white'
                }`}
                title="Multi-site comparative radar & biodiversity indices"
              >
                <BarChart2 className="w-3.5 h-3.5 text-[#82b978]" />
                <span>{t('nav.compare')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#alerts', 'alerts')}
                className={`nav-link-underline nav-link-underline-rose text-xs font-bold ${
                  activeView === 'alerts' ? 'active' : 'text-white'
                }`}
                title="Invasive species anomaly alerts & biosecurity"
              >
                <Bell className="w-3.5 h-3.5 text-[#e66a93]" />
                <span>{t('nav.alerts')}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#settings', 'settings')}
                className={`nav-link-underline text-xs font-bold ${
                  activeView === 'settings' ? 'active' : 'text-white'
                }`}
                title="System settings & pipeline configurations"
              >
                <Settings className="w-3.5 h-3.5 text-[#82b978]" />
                <span>{t('nav.settings')}</span>
              </button>
            </div>

            {/* ══ Prominent Hindi / English Language Toggle Pill for Laptops & Computers ══ */}
            <div className="inline-flex p-0.5 rounded-full bg-[#142418] border-2 border-[#82b978] shadow-md items-center space-x-0.5 ml-1">
              <Globe className="w-3.5 h-3.5 text-[#82b978] ml-2 mr-0.5" />
              <button
                type="button"
                onClick={() => handleToggleLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#689660] text-white shadow-md scale-105 border border-[#82b978]'
                    : 'text-[#c2d6be] hover:text-white'
                }`}
                aria-pressed={currentLang === 'en'}
                title="Switch interface to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleToggleLang('hi')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'hi'
                    ? 'bg-[#689660] text-white shadow-md scale-105 border border-[#82b978]'
                    : 'text-[#c2d6be] hover:text-white'
                }`}
                aria-pressed={currentLang === 'hi'}
                title="इंटरफ़ेस को हिन्दी में बदलें"
              >
                हिन्दी
              </button>
            </div>
          </nav>

          {/* ══ MOBILE COMPACT HEADER (Only for screens < lg) ══ */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Language toggle for mobile */}
            <div className="inline-flex p-0.5 rounded-full bg-[#142418] border border-[#82b978] shadow-sm items-center">
              <button
                type="button"
                onClick={() => handleToggleLang(currentLang === 'en' ? 'hi' : 'en')}
                className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#689660] text-white shadow-sm flex items-center space-x-1"
                title="Toggle Language"
              >
                <Globe className="w-3 h-3 text-white" />
                <span>{currentLang === 'en' ? 'हिन्दी' : 'EN'}</span>
              </button>
            </div>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#142418] border border-[#2b422a] text-white hover:border-[#82b978] shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#e66a93]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* ══ MOBILE DROPDOWN MENU (Only shown when user taps hamburger) ══ */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#1e3320] bg-[#09140c] px-4 pt-3 pb-5 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto">
          {/* Section Anchors */}
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#1e3320]">
            <a
              href="#theory"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#e2ecd0] p-2.5 rounded-xl bg-[#142418] border border-[#2b422a] flex items-center justify-between"
            >
              <span>{t('nav.theory')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#82b978]" />
            </a>
            <a
              href="#pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#e2ecd0] p-2.5 rounded-xl bg-[#142418] border border-[#2b422a] flex items-center justify-between"
            >
              <span>{t('nav.pipeline')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#82b978]" />
            </a>
            <a
              href="#zones"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#e2ecd0] p-2.5 rounded-xl bg-[#142418] border border-[#2b422a] flex items-center justify-between"
            >
              <span>{t('nav.capabilities')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#82b978]" />
            </a>
            <a
              href="#models"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#e2ecd0] p-2.5 rounded-xl bg-[#142418] border border-[#2b422a] flex items-center justify-between"
            >
              <span>{t('nav.aimath')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#82b978]" />
            </a>
            <a
              href="#sites"
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 text-xs font-bold text-[#e2ecd0] p-2.5 rounded-xl bg-[#142418] border border-[#2b422a] flex items-center justify-between"
            >
              <span>{t('nav.baselines')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#82b978]" />
            </a>
          </div>

          {/* Platform Pages */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#82b978] px-1">
              {t('nav.tools')}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleNavClick('#home', 'home')}
                className="py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Home className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>{t('nav.home')}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#analyze', 'analyze')}
                className="py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Upload className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>{t('nav.analyze')}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#monitor', 'monitor')}
                className="py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Activity className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>{t('nav.monitor')}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#results', 'results')}
                className="py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>{t('nav.results')}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#compare', 'compare')}
                className="py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <BarChart2 className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>{t('nav.compare')}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#alerts', 'alerts')}
                className="py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Bell className="w-3.5 h-3.5 text-[#e66a93]" />
                  <span>{t('nav.alerts')}</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#settings', 'settings')}
                className="col-span-2 py-2 px-3 rounded-xl bg-[#142418] border border-[#2b422a] text-white flex items-center justify-between font-bold text-xs"
              >
                <div className="flex items-center space-x-2">
                  <Settings className="w-3.5 h-3.5 text-[#82b978]" />
                  <span>{t('nav.settings')}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
