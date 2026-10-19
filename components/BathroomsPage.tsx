import React from 'react';
import { PageHeader } from './PageHeader';
import { Portfolio } from './Portfolio';
import { Timeline } from './Timeline';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  onOpenConfigurator: () => void;
}

export const BathroomsPage: React.FC<Props> = ({ onOpenConfigurator }) => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Koupelny na klíč" 
        subtitle="Od grafického návrhu až po poslední detail. Vytváříme moderní koupelny s důrazem na funkčnost a design." 
        imageUrl="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Proč koupelnu od FLACH?</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Navrhneme řešení, které odpovídá vašim představám, rozpočtu i možnostem prostoru. Veškeré 3D vizualizace a návrhy koupelen konzultujeme, aby výsledek seděl do posledního detailu.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '3D vizualizace zdarma k realizaci',
                  'Zaměření koupelny a dispoziční návrhy',
                  'Vlastní tým zkušených řemeslníků',
                  'Montáže vody, kanalizace, plynu a topení',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onOpenConfigurator}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-600/20 flex items-center gap-2 transition-all"
              >
                Spustit konfigurátor koupelny <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-red-100 rounded-3xl transform rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Detail koupelny" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      <Portfolio />
      
    </div>
  );
};
