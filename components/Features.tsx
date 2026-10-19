import React from 'react';
import { Droplets, Home, Wrench, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const icons: Record<string, React.ReactNode> = {
  bath: <Droplets className="w-10 h-10 text-red-600" />,
  home: <Home className="w-10 h-10 text-red-600" />,
  wrench: <Wrench className="w-10 h-10 text-red-600" />,
};

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300"
            >
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {icons[service.icon]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href={`#${service.id}`} className="inline-flex items-center text-red-700 font-bold hover:gap-2 transition-all">
                Více informací <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
