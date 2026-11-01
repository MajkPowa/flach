import React from 'react';
import { ArrowUpRight, MessageSquare, Ruler, Hammer, KeyRound } from 'lucide-react';
const steps = [
  { icon: MessageSquare, title: 'Nejdřív si promluvíme', text: 'Řeknete nám, co plánujete. Probereme prostor, představy i možnosti rozpočtu.' },
  { icon: Ruler, title: 'Navrhneme řešení', text: 'Zaměříme prostor, připravíme návrh a cenovou nabídku. Detaily odsouhlasíme společně.' },
  { icon: Hammer, title: 'Pustíme se do práce', text: 'Od rozvodů přes obklady až po vybavení. Postupujeme podle domluveného rozsahu.' },
  { icon: KeyRound, title: 'Předáme vám výsledek', text: 'Hotovou koupelnu společně projdeme a vysvětlíme, jak se o nové vybavení starat.' },
];
export const Timeline: React.FC = () => <section id="process" className="process-section section-space" aria-labelledby="process-title"><div className="site-wrap"><div className="section-heading"><div><p className="eyebrow">JASNÝ POSTUP. OD ZAČÁTKU.</p><h2 id="process-title">Vy máte představu.<br />My víme, co dál.</h2></div><a className="text-link" href="#contact">Pojďme se domluvit <ArrowUpRight size={18} aria-hidden="true" /></a></div><ol className="process-grid">{steps.map((step,i) => <li key={step.title}><div className="process-top"><span>0{i+1}</span><step.icon size={25} strokeWidth={1.5} aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>;
