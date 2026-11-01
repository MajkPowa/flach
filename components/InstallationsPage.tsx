import React from 'react';
import { PageHeader } from './PageHeader';
import { Droplets, Flame, Wrench, Phone, ArrowRight } from 'lucide-react';

export const InstallationsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Instalace a údržba"
        subtitle="Montáže a údržba vody, kanalizace, plynu a topení v různých typech objektů."
        imageUrl="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop"
      />
      <section className="py-20 container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">S čím se na nás obrátit</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Droplets, title: 'Voda a kanalizace', text: 'Montáže a údržba vodoinstalace a kanalizace. Rozsah prací domluvíme podle stavu objektu a vašich požadavků.' },
            { icon: Flame, title: 'Topení a plyn', text: 'Montáže a údržba rozvodů plynu a topení. Probereme konkrétní zadání pro novostavbu i stávající objekt.' },
            { icon: Wrench, title: 'Údržba instalací', text: 'Popište nám, jaké instalace potřebujete řešit. Domluvíme rozsah prací a další postup.' },
          ].map((service) => (
            <div key={service.title} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <service.icon aria-hidden="true" className="w-8 h-8 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-red-400 mb-4">Pondělí–pátek, 6:30–15:00</p>
            <h2 className="text-3xl font-bold text-white mb-4">Potřebujete domluvit instalaci nebo údržbu?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Zavolejte nám nebo pošlete zprávu s popisem požadovaných prací a místem realizace.</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold underline underline-offset-4 hover:text-red-300 transition-colors">
              Napsat poptávku <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
          <a href="tel:+420604178805" className="inline-flex items-center justify-center gap-3 flex-shrink-0 bg-white text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
            <Phone aria-hidden="true" className="w-5 h-5 text-red-600" />
            <span>604 178 805</span>
          </a>
        </div>
      </section>
    </div>
  );
};
