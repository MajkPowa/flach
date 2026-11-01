import React from 'react';
import { PageHeader } from './PageHeader';
import { House, MapPin, Wrench, ArrowRight } from 'lucide-react';

export const HousesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Rodinné domy"
        subtitle="Věnujeme se výstavbě rodinných domů a jejich prodeji včetně pozemku. Proberme možnosti vašeho bydlení."
        imageUrl="https://images.unsplash.com/photo-1600596542815-e32c630bd1ba?q=80&w=1920&auto=format&fit=crop"
      />
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Jak vám můžeme pomoci</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Plánujete výstavbu nebo hledáte rodinný dům? Napište nám své představy
            a lokalitu. Konkrétní možnosti výstavby i aktuální nabídku s vámi probereme osobně.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: House, title: 'Výstavba domů', text: 'Probereme rozsah zamýšlené stavby, podklady a vaše požadavky.' },
            { icon: MapPin, title: 'Dům a pozemek', text: 'Na aktuální možnosti prodeje rodinných domů včetně pozemku se nás zeptejte přímo.' },
            { icon: Wrench, title: 'Technické instalace', text: 'Zajišťujeme také montáže vody, kanalizace, plynu a topení.' },
          ].map((service) => (
            <div key={service.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <service.icon aria-hidden="true" className="w-8 h-8 text-red-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-5xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Začněme vašimi představami</h2>
            <p className="text-slate-300 leading-relaxed">Napište, kde chcete stavět nebo bydlet a jaké podklady už máte. Domluvíme další postup.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 flex-shrink-0 bg-red-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors">
            Poptat rodinný dům <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
