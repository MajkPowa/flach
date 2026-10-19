import React from 'react';
import { PageHeader } from './PageHeader';
import { MapPin, Maximize2, Home } from 'lucide-react';
import { PORTFOLIO } from '../constants';

export const HousesPage: React.FC = () => {
  const houseProjects = PORTFOLIO.filter((p) => p.category === 'dum');

  return (
    <div className="bg-white">
      <PageHeader 
        title="Rodinné domy" 
        subtitle="Stavíme domy pro život. Od hrubé stavby až po dům na klíč v Litomyšli a okolí." 
        imageUrl="https://images.unsplash.com/photo-1600596542815-e32c630bd1ba?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Aktuální projekty a realizace</h2>
          <p className="text-slate-600 text-lg">
            Hledáte nové bydlení? Podívejte se na naše aktuální developerské projekty nebo si prohlédněte domy, které jsme postavili pro naše klienty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houseProjects.map((project) => (
            <div key={project.id} className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Na klíč
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-500 mb-4">{project.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-slate-600 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-4 h-4 text-red-500" /> 120 m²
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4 text-red-500" /> 5+kk
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-red-500" /> Litomyšl
                  </div>
                </div>

                <button className="w-full mt-6 bg-white border-2 border-slate-900 text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                  Zobrazit detail
                </button>
              </div>
            </div>
          ))}
          
          {/* Promo Card */}
          <div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-center text-white text-center">
            <Home className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Máte vlastní pozemek?</h3>
            <p className="text-slate-300 mb-8">
              Navrhneme a postavíme dům přesně podle vašich představ na vašem pozemku.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold transition-colors">
              Poptat výstavbu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
