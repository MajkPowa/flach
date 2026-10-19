import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [emailPrepared, setEmailPrepared] = useState(false);

  const prepareEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Jméno: ${data.get('name')}`,
      `Telefon: ${data.get('phone') || 'Neuveden'}`,
      `E-mail: ${data.get('email')}`,
      '',
      String(data.get('message') || ''),
    ].join('\n');
    window.location.href = `mailto:uher@flach.cz?subject=${encodeURIComponent('Poptávka z webu FLACH')}&body=${encodeURIComponent(body)}`;
    setEmailPrepared(true);
  };

  return (
    <section id="contact" className="bg-slate-900 text-slate-300">
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Máte dotaz nebo poptávku?</h2>
            <p className="mb-10 text-lg text-slate-400">
              Rádi s vámi probereme váš projekt osobně. Zastavte se u nás v Litomyšli nebo napište.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Zavolejte nám</h4>
                  <p className="text-sm text-slate-400 mb-1">Po–Pá 6:30 – 15:00</p>
                  <a href="tel:+420604178805" className="text-xl font-bold text-white hover:text-red-400 transition-colors">+420 604 178 805</a><br />
                  <a href="tel:+420461540746" className="text-sm text-slate-300 hover:text-red-300 transition-colors">+420 461 540 746</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Napište nám</h4>
                  <a href="mailto:uher@flach.cz" className="text-lg text-white hover:text-red-400 transition-colors">uher@flach.cz</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Adresa</h4>
                  <p className="text-slate-400">
                    Moravská 1278<br />
                    570 01 Litomyšl
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Rychlý kontakt</h3>
            <form className="space-y-4" onSubmit={prepareEmail}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold mb-1 text-slate-700">Jméno</label>
                  <input id="contact-name" name="name" autoComplete="name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="Jan Novák" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold mb-1 text-slate-700">Telefon</label>
                  <input id="contact-phone" name="phone" autoComplete="tel" type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="+420" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-1 text-slate-700">E-mail</label>
                <input id="contact-email" name="email" autoComplete="email" required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="vas@email.cz" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-1 text-slate-700">Zpráva</label>
                <textarea id="contact-message" name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="Mám zájem o rekonstrukci..."></textarea>
              </div>
              <p className="text-sm text-slate-500">Tlačítko připraví zprávu ve vaší e-mailové aplikaci. Odeslání dokončíte v ní; údaje se na tomto webu neukládají.</p>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors">
                Připravit e-mail
              </button>
              {emailPrepared && <p role="status" className="text-sm text-slate-600">Dokončete odeslání v e-mailové aplikaci. Pokud se neotevřela, napište na <a className="underline" href="mailto:uher@flach.cz">uher@flach.cz</a> nebo zavolejte na <a className="underline" href="tel:+420604178805">604 178 805</a>.</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} FLACH s.r.o. Všechna práva vyhrazena.</p>
          <p>IČO: 27485846 · DIČ: CZ27485846</p>
        </div>
      </div>
    </section>
  );
};
