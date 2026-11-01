import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
const questions = [
  { q: 'Co si připravit před první konzultací?', a: 'Stačí přibližné rozměry prostoru, několik fotografií současného stavu a vaše představa. Pokud máte půdorys nebo inspiraci, přiložte je k e-mailu. Detaily společně upřesníme.' },
  { q: 'Nemám ještě jasno ve stylu ani rozpočtu. Nevadí to?', a: 'Nevadí. V poptávce můžete uvést, že si chcete nechat poradit. Při konzultaci probereme možnosti prostoru, vhodné vybavení a rozsah realizace.' },
  { q: 'Zajistíte také vodu, topení a další instalace?', a: 'Ano, provádíme montáž a údržbu rozvodů vody, kanalizace, plynu a topení. Konkrétní rozsah prací domluvíme podle vašeho projektu.' },
  { q: 'Kolik rekonstrukce stojí a jak dlouho trvá?', a: 'Cena i termín závisí na rozměrech, stavu rozvodů, zvolených materiálech a rozsahu prací. Konkrétní nabídku připravíme po upřesnění zadání a zaměření.' },
];
export const Faq: React.FC = () => <section className="faq-section section-space site-wrap" aria-labelledby="faq-title"><div><p className="eyebrow">NEŽ SE DO TOHO PUSTÍME</p><h2 id="faq-title">Dobré otázky.<br />Jasné odpovědi.</h2><p>Každá koupelna je trochu jiná.<br />Na tu vaši se rádi podíváme společně.</p><a className="text-link" href="#contact">Mám jiný dotaz <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="faq-list">{questions.map(item => <details key={item.q}><summary>{item.q}<Plus size={20} aria-hidden="true" /></summary><p>{item.a}</p></details>)}</div></section>;
