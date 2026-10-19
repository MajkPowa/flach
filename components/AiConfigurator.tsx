import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { ConfiguratorData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = ['Základní info', 'Styl a vybavení', 'Rozpočet', 'Kontakt'];

export const AiConfigurator: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<ConfiguratorData>({
    type: 'Kompletní rekonstrukce',
    dimensions: '',
    style: 'Moderní',
    budget: 'Standard (150 - 250 tis. Kč)',
    features: [],
    contact: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    setResult([
      `Typ realizace: ${formData.type}`,
      `Rozměry: ${formData.dimensions || 'Upřesníme při konzultaci'}`,
      `Styl: ${formData.style}`,
      `Vybavení: ${formData.features.join(', ') || 'Upřesníme při konzultaci'}`,
      `Orientační rozpočet: ${formData.budget}`,
      `Kontakt: ${formData.contact}`,
    ].join('\n'));
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="configurator-title" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-red-400" />
            <h2 id="configurator-title" className="text-xl font-bold">Poptávka koupelny</h2>
          </div>
          <button onClick={onClose} aria-label="Zavřít poptávku" className="hover:bg-slate-800 p-2 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {result ? (
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Přehled vaší poptávky</h3>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                 <p className="whitespace-pre-line">{result}</p>
              </div>
              <p className="mt-4 text-sm text-slate-600">Poptávku dokončíte odesláním e-mailu ve své poštovní aplikaci. Zatím nebyla odeslána. Návrh a přesnou kalkulaci s vámi připravíme osobně. Můžete také zavolat na <a href="tel:+420604178805" className="underline">604 178 805</a>.</p>
              <div className="mt-8 flex gap-4 flex-col sm:flex-row">
                 <button onClick={onClose} className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                   Zavřít
                 </button>
                 <a href={`mailto:uher@flach.cz?subject=${encodeURIComponent('Nezávazná poptávka koupelny')}&body=${encodeURIComponent(`Dobrý den, mám zájem o konzultaci koupelny.\n\n${result}`)}`} className="flex-1 text-center bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                   Otevřít poptávku v e-mailu
                 </a>
              </div>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2 text-sm font-medium text-slate-500">
                  {STEPS.map((s, i) => (
                    <span key={i} className={i <= step ? 'text-red-600' : ''}>{s}</span>
                  ))}
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 transition-all duration-300"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Steps */}
              <div className="min-h-[300px]">
                {step === 0 && (
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-slate-700 font-semibold mb-2 block">O jakou realizaci jde?</span>
                      <select 
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                        value={formData.type}
                        onChange={e => setFormData({...formData, type: e.target.value})}
                      >
                        <option>Kompletní rekonstrukce</option>
                        <option>Nová koupelna (novostavba)</option>
                        <option>Částečná renovace</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-slate-700 font-semibold mb-2 block">Jaké jsou přibližné rozměry? (m²)</span>
                      <input 
                        type="text"
                        placeholder="Např. 6 m², 2x3 m..."
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                        value={formData.dimensions}
                        onChange={e => setFormData({...formData, dimensions: e.target.value})}
                      />
                    </label>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                     <label className="block">
                      <span className="text-slate-700 font-semibold mb-2 block">Preferovaný styl</span>
                      <div className="grid grid-cols-2 gap-3">
                        {['Moderní', 'Skandinávský', 'Industriální', 'Rustikální'].map(style => (
                          <button
                            key={style}
                            onClick={() => setFormData({...formData, style})}
                            className={`p-3 rounded-lg border text-left transition-all ${formData.style === style ? 'border-red-500 bg-red-50 text-red-800 ring-1 ring-red-500' : 'border-slate-200 hover:border-slate-300'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </label>
                    <div>
                      <span className="text-slate-700 font-semibold mb-2 block">Co v koupelně nesmí chybět?</span>
                      <div className="flex flex-wrap gap-2">
                        {['Sprchový kout', 'Vana', 'Dvojumyvadlo', 'WC', 'Bidet', 'Pračka', 'Podlahové topení'].map(feat => (
                          <button
                            key={feat}
                            onClick={() => toggleFeature(feat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${formData.features.includes(feat) ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                          >
                            {feat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                     <label className="block">
                      <span className="text-slate-700 font-semibold mb-2 block">Orientační rozpočet</span>
                      <div className="space-y-2">
                        {[
                          'Ekonomický (do 150 tis. Kč)',
                          'Standard (150 - 250 tis. Kč)',
                          'Premium (250 - 400 tis. Kč)',
                          'Luxusní (nad 400 tis. Kč)'
                        ].map(budget => (
                          <div 
                            key={budget}
                            onClick={() => setFormData({...formData, budget})}
                            className={`p-4 rounded-lg border cursor-pointer flex items-center justify-between ${formData.budget === budget ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}
                          >
                            <span>{budget}</span>
                            {formData.budget === budget && <Check className="w-5 h-5 text-red-600" />}
                          </div>
                        ))}
                      </div>
                    </label>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <p className="text-slate-600 mb-4">
                      Uveďte kontakt pro domluvení návrhu a zaměření. V dalším kroku zkontrolujete údaje a otevřete poptávku ve své e-mailové aplikaci.
                    </p>
                    <label className="block">
                      <span className="text-slate-700 font-semibold mb-2 block">Váš Email / Telefon</span>
                      <input 
                        type="text"
                        placeholder="jan.novak@email.cz"
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                        value={formData.contact}
                        onChange={e => setFormData({...formData, contact: e.target.value})}
                      />
                    </label>
                  </div>
                )}
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-between mt-8 pt-4 border-t border-slate-100">
                {step > 0 ? (
                   <button onClick={handleBack} className="flex items-center text-slate-600 hover:text-slate-900 font-medium px-4 py-2">
                     <ArrowLeft className="w-4 h-4 mr-2" /> Zpět
                   </button>
                ) : <div />}
                
                <button 
                  onClick={handleNext} 
                  disabled={step === 3 && !formData.contact.trim()}
                  className="flex items-center bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-red-600/20 transition-all"
                >
                  {step === 3 ? 'Zkontrolovat poptávku' : 'Pokračovat'}
                  {step !== 3 && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
