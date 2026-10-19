import React from 'react';
import { REFERENCES } from '../constants';
import { Reference } from '../types';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Reference</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-3">Reálné projekty z flach.cz</h3>
            <p className="text-slate-600">
              Převzali jsme odkazy i fotky z oficiální sekce realizací na flach.cz. Kliknutím se dostanete na detailní galerii daného roku přímo na jejich webu.
            </p>
          </div>
          
          <a 
            href="https://www.flach.cz/realizace-koupelen" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-bold text-red-700 border-b-2 border-red-200 pb-1 hover:text-red-800 hover:border-red-600 transition-colors"
          >
            Celá galerie na flach.cz <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REFERENCES.map((reference: Reference) => (
            <a
              key={reference.id}
              href={reference.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] bg-slate-200">
                <img 
                  src={reference.imageUrl} 
                  alt={reference.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-red-600">
                  <span className="inline-flex items-center justify-center rounded-full bg-red-50 text-red-700 px-3 py-1">{reference.year}</span>
                  <span>Reference z flach.cz</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{reference.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reference.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
