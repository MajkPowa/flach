import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import './Inquiry.css';

export const ContactFooter: React.FC = () => {
  const [emailPrepared, setEmailPrepared] = useState(false);
  const prepareEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [`Jméno: ${String(data.get('name') || '').trim()}`, `Telefon: ${String(data.get('phone') || '').trim() || 'Neuveden'}`, `E-mail: ${String(data.get('email') || '').trim()}`, '', String(data.get('message') || '').trim()].join('\n');
    window.location.href = `mailto:uher@flach.cz?subject=${encodeURIComponent('Poptávka z webu FLACH')}&body=${encodeURIComponent(body)}`;
    setEmailPrepared(true);
  };
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="contact-eyebrow"><span aria-hidden="true" /> POJĎME TO PROBRAT</p>
          <h2 id="contact-title">Váš projekt začíná rozhovorem.</h2>
          <p className="contact-intro">Nová koupelna, stavba nebo instalace. Řekněte nám, co plánujete, a společně najdeme další krok.</p>
          <div className="contact-details">
            <div className="contact-detail"><Phone aria-hidden="true" /><div><span>Zavolejte nám</span><a className="contact-phone" href="tel:+420604178805">604 178 805 <ArrowUpRight aria-hidden="true" /></a><p>Po–Pá 6:30–15:00</p></div></div>
            <div className="contact-detail"><Mail aria-hidden="true" /><div><span>Napište nám</span><a href="mailto:uher@flach.cz">uher@flach.cz <ArrowUpRight aria-hidden="true" /></a></div></div>
            <div className="contact-detail"><MapPin aria-hidden="true" /><div><span>Zastavte se v Litomyšli</span><address>Moravská 1278<br />570 01 Litomyšl</address></div></div>
          </div>
        </div>
        <div className="contact-form-card">
          <p className="contact-form-eyebrow">NEZÁVAZNÝ PRVNÍ KROK</p>
          <h3>Co máte v plánu?</h3>
          <p className="contact-form-intro">Napište nám pár vět. Připravíme z nich e-mail.</p>
          <form className="contact-form" onSubmit={prepareEmail}>
            <div className="contact-form-row">
              <div className="field-group"><label htmlFor="contact-name">Vaše jméno</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} type="text" placeholder="Jan Novák" /></div>
              <div className="field-group"><label htmlFor="contact-phone">Telefon <span>nepovinné</span></label><input id="contact-phone" name="phone" autoComplete="tel" maxLength={30} type="tel" placeholder="+420" /></div>
            </div>
            <div className="field-group"><label htmlFor="contact-email">E-mail</label><input id="contact-email" name="email" autoComplete="email" required maxLength={254} type="email" placeholder="vas@email.cz" /></div>
            <div className="field-group"><label htmlFor="contact-message">Váš záměr</label><textarea id="contact-message" name="message" required maxLength={1600} rows={4} placeholder="Plánujeme rekonstrukci koupelny v Litomyšli…" /></div>
            <button type="submit" className="contact-submit">Připravit e-mail <ArrowUpRight aria-hidden="true" /></button>
            <p className="contact-privacy">Odeslání dokončíte ve své poštovní aplikaci. Tento web vaše údaje neukládá.</p>
            {emailPrepared && <p role="status" className="contact-form-status">Zpráva zatím nebyla odeslána. Dokončete odeslání v poštovní aplikaci. Pokud se neotevřela, napište na <a href="mailto:uher@flach.cz">uher@flach.cz</a> nebo zavolejte <a href="tel:+420604178805">604 178 805</a>.</p>}
          </form>
        </div>
      </div>
      <footer className="contact-footer">
        <a className="contact-brand" href="#home" aria-label="FLACH – zpět na úvod">FLACH<span>.</span></a>
        <p>© {new Date().getFullYear()} FLACH s.r.o.</p>
        <p>IČO 27485846 <span aria-hidden="true">/</span> DIČ CZ27485846</p>
      </footer>
    </section>
  );
};
