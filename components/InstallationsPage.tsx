import React from 'react';
import { PageHeader } from './PageHeader';
import { Droplets, Flame, ThermometerSun, Wrench, Phone } from 'lucide-react';

export const InstallationsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Instalace a servis TZB" 
        subtitle="Voda, topení, plyn. Profesionální montáže a servis technologií pro váš domov." 
        imageUrl="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Droplets className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Voda a kanalizace</h3>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span> Domovní rozvody vody a odpadů</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span> Montáž sanitární keramiky</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span> Úpravny vody a filtrace</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span> Přípojky k inženýrským sítím</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Flame className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Topení a plyn</h3>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Kondenzační plynové kotle</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Podlahové vytápění</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Revize plynových zařízení</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span> Výměny radiátorů</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ThermometerSun className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tepelná čerpadla</h3>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span> Montáž tepelných čerpadel</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span> Solární systémy pro ohřev vody</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span> Rekuperace vzduchu</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span> Dotace Nová zelená úsporám</li>
            </ul>
          </div>

        </div>

        {/* Servis Banner */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Wrench className="w-4 h-4" /> Servis 24/7
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Havarijní servis pro naše klienty</h2>
            <p className="text-slate-400 max-w-xl">
              Prasklá voda? Kotel netopí? Pro naše stálé zákazníky držíme pohotovostní službu. Volejte kdykoliv.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a href="tel:+420604178805" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
              <Phone className="w-6 h-6 text-red-600" />
              <div className="text-left">
                <span className="block text-xs text-slate-500 uppercase">Havarijní linka</span>
                <span className="text-xl">604 178 805</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
