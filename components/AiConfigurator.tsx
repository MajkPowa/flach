import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Mail, Pencil, X } from 'lucide-react';
import { ConfiguratorData } from '../types';
import './Inquiry.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS = ['Váš prostor', 'Vaše představa', 'Rozpočet', 'Kontakt'];
const STYLES = ['Moderní', 'Přírodní', 'Nadčasový', 'Zatím nevím'];
const FEATURES = ['Sprchový kout', 'Vana', 'Dvojumyvadlo', 'WC', 'Bidet', 'Pračka', 'Podlahové topení'];
const BUDGETS = ['Do 150 tis. Kč', '150–250 tis. Kč', '250–400 tis. Kč', 'Nad 400 tis. Kč', 'Rád se nejdřív poradím'];

export const AiConfigurator: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [contactError, setContactError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [emailPrepared, setEmailPrepared] = useState(false);
  const [formData, setFormData] = useState<ConfiguratorData>({
    type: 'Kompletní rekonstrukce', dimensions: '', style: 'Zatím nevím',
    budget: 'Rád se nejdřív poradím', features: [], contact: '',
  });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stepTitleRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    stepTitleRef.current?.focus({ preventScroll: true });
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      stepTitleRef.current?.focus({ preventScroll: true });
      dialogRef.current?.querySelector('.inquiry-content')?.scrollTo({ top: 0 });
    }
  }, [step, showSummary, isOpen]);

  const summaryRows = [
    ['Realizace', formData.type],
    ['Rozměry', formData.dimensions.trim() || 'Upřesníme při konzultaci'],
    ['Styl', formData.style],
    ['Vybavení', formData.features.join(', ') || 'Upřesníme při konzultaci'],
    ['Rozpočet', formData.budget], ['Kontakt', formData.contact.trim()],
  ];
  const emailBody = `Dobrý den, mám zájem o konzultaci koupelny.\n\n${summaryRows.map(([label, value]) => `${label}: ${value}`).join('\n')}`;
  const emailHref = `mailto:uher@flach.cz?subject=${encodeURIComponent('Nezávazná poptávka koupelny')}&body=${encodeURIComponent(emailBody)}`;

  const submitStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < STEPS.length - 1) { setStep((current) => current + 1); return; }
    const contact = formData.contact.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const phoneDigits = contact.replace(/\D/g, '');
    const validPhone = /^[+\d\s()-]+$/.test(contact) && phoneDigits.length >= 9 && phoneDigits.length <= 15;
    if (!validEmail && !validPhone) {
      setContactError('Zadejte prosím platný e-mail nebo telefonní číslo.');
      contactRef.current?.focus();
      return;
    }
    setContactError(''); setShowSummary(true); setCopyStatus(''); setEmailPrepared(false);
  };

  const trapFocus = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;
    const candidates = dialogRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]',
    );
    const controls: HTMLElement[] = [];
    candidates.forEach((element) => { if (element.getClientRects().length > 0) controls.push(element); });
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === stepTitleRef.current)) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
  };

  const copyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopyStatus('Poptávka je zkopírovaná. Vložte ji do e-mailu na uher@flach.cz.');
    } catch {
      setCopyStatus('Kopírování není dostupné. Souhrn můžete označit a zkopírovat ručně.');
    }
  };

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} className="inquiry-dialog" aria-labelledby="inquiry-title"
      onCancel={(event) => { event.preventDefault(); closeRef.current(); }} onKeyDown={trapFocus}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeRef.current();
      }}>
      <div className="inquiry-shell">
        <header className="inquiry-header">
          <div><p className="inquiry-eyebrow">FLACH / NEZÁVAZNÁ POPTÁVKA</p><h2 id="inquiry-title">Pojďme naplánovat vaši koupelnu.</h2></div>
          <button type="button" className="inquiry-close" onClick={onClose} aria-label="Zavřít poptávku"><X aria-hidden="true" /></button>
        </header>
        <div className="inquiry-content">
          {showSummary ? (
            <section aria-labelledby="inquiry-step-title">
              <div className="inquiry-summary-heading"><span className="inquiry-check"><Check aria-hidden="true" /></span><div><h3 id="inquiry-step-title" ref={stepTitleRef} tabIndex={-1}>Vše připraveno ke kontrole.</h3><p>Ještě zbývá odeslat e-mail.</p></div></div>
              <dl className="inquiry-summary">{summaryRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              <p className="inquiry-note">Tlačítko otevře vaši poštovní aplikaci. Zprávu v ní zkontrolujte a odešlete. Poptávka zatím nebyla odeslána.</p>
              <a href={emailHref} className="inquiry-button inquiry-button-primary inquiry-button-wide" onClick={() => setEmailPrepared(true)}>Otevřít poptávku v e-mailu <Mail aria-hidden="true" /></a>
              <div className="inquiry-summary-actions">
                <button type="button" className="inquiry-button inquiry-button-quiet" onClick={() => { setShowSummary(false); setStep(0); }}><Pencil aria-hidden="true" /> Upravit údaje</button>
                <button type="button" className="inquiry-button inquiry-button-quiet" onClick={copyInquiry}><Copy aria-hidden="true" /> Zkopírovat text</button>
              </div>
              {copyStatus && <p className="inquiry-status" role="status">{copyStatus}</p>}
              {emailPrepared && <p className="inquiry-status" role="status">Pokud se poštovní aplikace neotevřela, zkopírujte souhrn a pošlete ho na <a href="mailto:uher@flach.cz">uher@flach.cz</a>.</p>}
            </section>
          ) : (
            <>
              <ol className="inquiry-steps" aria-label="Kroky poptávky">{STEPS.map((label, index) => <li key={label} aria-current={step === index ? 'step' : undefined} className={index <= step ? 'is-reached' : ''}><span aria-hidden="true">{index < step ? <Check /> : index + 1}</span><span>{label}</span></li>)}</ol>
              <form onSubmit={submitStep} className="inquiry-form">
                <div className="inquiry-step-content">
                  <p className="inquiry-step-count">Krok {step + 1} ze {STEPS.length}</p>
                  <h3 id="inquiry-step-title" ref={stepTitleRef} tabIndex={-1}>{['S čím vám můžeme pomoci?', 'Jaká koupelna je vám blízká?', 'Jaký máte rozpočet?', 'Kde se vám můžeme ozvat?'][step]}</h3>
                  <p className="inquiry-intro">{['Stačí základní představa. Podrobnosti probereme společně.', 'Vyberte, co už víte. S ostatním vám rádi poradíme.', 'Pomůže nám to navrhnout vhodné řešení. Nejde o cenovou nabídku.', 'Zadejte e-mail nebo telefon. Potom uvidíte přehled k odeslání.'][step]}</p>
                  {step === 0 && <div className="inquiry-fields">
                    <div className="field-group"><label htmlFor="inquiry-type">Typ realizace</label><select id="inquiry-type" value={formData.type} onChange={(event) => setFormData({ ...formData, type: event.target.value })}><option>Kompletní rekonstrukce</option><option>Nová koupelna (novostavba)</option><option>Částečná renovace</option></select></div>
                    <div className="field-group"><label htmlFor="inquiry-dimensions">Přibližná velikost <span>nepovinné</span></label><input id="inquiry-dimensions" type="text" maxLength={80} placeholder="Např. 6 m² nebo 2 × 3 m" value={formData.dimensions} onChange={(event) => setFormData({ ...formData, dimensions: event.target.value })} /></div>
                  </div>}
                  {step === 1 && <div className="inquiry-fields">
                    <fieldset className="inquiry-fieldset"><legend>Preferovaný styl</legend><div className="inquiry-choices inquiry-choices-two">{STYLES.map((style) => <label className="inquiry-choice" key={style}><input type="radio" name="inquiry-style" value={style} checked={formData.style === style} onChange={() => setFormData({ ...formData, style })} /><span>{style}</span></label>)}</div></fieldset>
                    <fieldset className="inquiry-fieldset"><legend>Co by v koupelně nemělo chybět? <span>nepovinné</span></legend><div className="inquiry-chips">{FEATURES.map((feature) => <label key={feature} className="inquiry-chip"><input type="checkbox" checked={formData.features.includes(feature)} onChange={() => setFormData((current) => ({ ...current, features: current.features.includes(feature) ? current.features.filter((item) => item !== feature) : [...current.features, feature] }))} /><span>{feature}</span></label>)}</div></fieldset>
                  </div>}
                  {step === 2 && <fieldset className="inquiry-fieldset"><legend className="inquiry-visually-hidden">Orientační rozpočet</legend><div className="inquiry-choices">{BUDGETS.map((budget) => <label className="inquiry-choice" key={budget}><input type="radio" name="inquiry-budget" value={budget} checked={formData.budget === budget} onChange={() => setFormData({ ...formData, budget })} /><span>{budget}</span></label>)}</div></fieldset>}
                  {step === 3 && <div className="field-group"><label htmlFor="inquiry-contact">E-mail nebo telefon <span>povinné</span></label><input ref={contactRef} id="inquiry-contact" type="text" maxLength={254} required autoComplete="email" placeholder="vas@email.cz nebo +420 123 456 789" value={formData.contact} aria-invalid={!!contactError} aria-describedby={contactError ? 'inquiry-contact-error' : 'inquiry-contact-hint'} onChange={(event) => { setFormData({ ...formData, contact: event.target.value }); setContactError(''); }} />{contactError ? <p id="inquiry-contact-error" className="field-error" role="alert">{contactError}</p> : <p id="inquiry-contact-hint" className="field-hint">Údaje zůstávají v prohlížeči do otevření e-mailové aplikace.</p>}</div>}
                </div>
                <div className="inquiry-form-footer">
                  {step > 0 ? <button type="button" className="inquiry-button inquiry-button-quiet" onClick={() => setStep((current) => current - 1)}><ArrowLeft aria-hidden="true" /> Zpět</button> : <span className="inquiry-footer-hint">Bez závazků.</span>}
                  <button type="submit" className="inquiry-button inquiry-button-primary">{step === 3 ? 'Zkontrolovat poptávku' : 'Pokračovat'} <ArrowRight aria-hidden="true" /></button>
                </div>
              </form>
            </>
          )}
          <div className="inquiry-help">Raději osobně? <a href="tel:+420604178805">Zavolejte 604 178 805</a></div>
        </div>
      </div>
    </dialog>
  );
};
