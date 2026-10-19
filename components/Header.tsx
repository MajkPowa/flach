import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { PageId } from '../types';

interface Props {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenConfigurator: () => void;
}

export const Header: React.FC<Props> = ({ activePage, setActivePage, onOpenConfigurator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer group">
          <div
            className={`text-2xl font-black tracking-tighter transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'
            }`}
          >
            FLACH<span className="text-red-600 group-hover:text-red-500 transition-colors">.</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-bold uppercase tracking-wide transition-all ${
                activePage === link.id
                  ? 'text-red-600'
                  : isScrolled
                    ? 'text-slate-700 hover:text-red-600'
                    : 'text-white/90 hover:text-white hover:scale-105 drop-shadow-sm'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+420604178805"
            className={`flex items-center gap-2 font-bold text-sm transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-red-200 drop-shadow-md'
            }`}
          >
            <Phone className="w-4 h-4" /> 604 178 805
          </a>
          <button
            onClick={onOpenConfigurator}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg ${
              isScrolled
                ? 'bg-slate-900 text-white hover:bg-red-600'
                : 'bg-red-600 text-white hover:bg-red-700 shadow-red-900/20'
            }`}
          >
            Chci návrh koupelny
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-bold text-left py-3 border-b border-slate-50 ${
                activePage === link.id ? 'text-red-600' : 'text-slate-800'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+420604178805" className="flex items-center gap-2 font-bold text-slate-700 py-2">
              <Phone className="w-5 h-5 text-red-600" /> 604 178 805
            </a>
            <button
              onClick={() => {
                onOpenConfigurator();
                setMobileMenuOpen(false);
              }}
              className="bg-red-600 text-white w-full py-4 rounded-xl font-bold text-center shadow-lg shadow-red-600/20"
            >
              Chci návrh koupelny
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
