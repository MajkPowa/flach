import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroVideo from '../Video/hf_20260121_010249_131d7240-661a-4397-8657-14e2b6132def.mp4';

interface Props {
  onOpenConfigurator: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenConfigurator }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/50 rounded-full text-red-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            Litomyšl a okolí
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Realizujeme moderní koupelny.<br />
            Stavíme a prodáváme rodinné domy.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
            Naše společnost vznikla v roce 2006 na základě letitých zkušeností ve stavebnictví. Navrhneme, vizualizujeme, zaměříme a kompletně zrealizujeme koupelnu. Montujeme vodu, kanalizaci, plyn a topení ve všech druzích objektů.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenConfigurator}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
            >
              Nezávazný návrh koupelny
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center"
            >
              Podívat se na reference
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};
