import React from 'react';
import { Ruler, FileCheck, Hammer, Sparkles } from 'lucide-react';

const STEPS = [
  { icon: Ruler, title: 'Zaměření', text: 'Přijedeme, zaměříme prostor a probereme vaše představy.' },
  { icon: FileCheck, title: 'Návrh & Rozpočet', text: 'Připravíme 3D vizualizaci a detailní cenovou nabídku.' },
  { icon: Hammer, title: 'Realizace', text: 'Bourání, instalace vody/elektro, obklady, kompletace.' },
  { icon: Sparkles, title: 'Předání', text: 'Úklid, předání hotového díla a záruční servis.' },
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Jak probíhá spolupráce?</h2>
          <p className="text-slate-600 text-lg">
            Zakládáme si na přehlednosti a dodržování termínů. S námi víte přesně, v jaké fázi se vaše koupelna nachází.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          {STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 z-10">
                <step.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
