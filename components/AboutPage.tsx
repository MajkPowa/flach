import React from 'react';
import { PageHeader } from './PageHeader';
import { Ruler, House, Wrench, ArrowRight, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="FLACH. Koupelny a stavby."
        subtitle="Od roku 2006 se věnujeme koupelnám, výstavbě domů a technickým instalacím. Najdete nás v Litomyšli."
        imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
      />
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Od představy ke konkrétnímu řešení</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Společnost FLACH vznikla v roce 2006 na základě zkušeností ve stavebnictví.
            Navrhujeme, zaměřujeme a realizujeme koupelny. Věnujeme se také výstavbě
            rodinných domů a jejich prodeji včetně pozemku.
          </p>
          <p className="text-slate-600 leading-relaxed mb-12">
            Součástí našich služeb jsou montáže a údržba vody, kanalizace, plynu a topení.
            U koupelen společně procházíme dispoziční návrh i 3D vizualizaci, aby řešení
            odpovídalo vašim představám, rozpočtu a možnostem prostoru.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Ruler, title: 'Koupelny', text: 'Zaměření, návrh, 3D vizualizace a realizace.', href: '#bathrooms' },
              { icon: House, title: 'Rodinné domy', text: 'Výstavba a prodej rodinných domů včetně pozemku.', href: '#houses' },
              { icon: Wrench, title: 'Instalace', text: 'Montáže a údržba vody, kanalizace, plynu a topení.', href: '#installations' },
            ].map((service) => (
              <a key={service.title} href={service.href} className="block bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-red-300 transition-colors">
                <service.icon aria-hidden="true" className="w-7 h-7 text-red-600 mb-5" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.text}</p>
                <span className="inline-flex items-center gap-2 text-red-700 font-semibold mt-5">Zjistit více <ArrowRight aria-hidden="true" className="w-4 h-4" /></span>
              </a>
            ))}
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white">
            <MapPin aria-hidden="true" className="w-7 h-7 text-red-400 mb-5" />
            <h2 className="text-2xl font-bold mb-4">Proberme váš projekt</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Zastavte se na adrese Moravská 1278, Litomyšl, nebo nám nejprve napište.
              Jsme k dispozici od pondělí do pátku, 6:30–15:00.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
              Kontaktovat FLACH <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
