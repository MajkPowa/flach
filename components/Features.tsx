import React from 'react';
import { ArrowUpRight, Bath, House, Wrench } from 'lucide-react';
const services = [
  { id: 'bathrooms', number: '01', icon: Bath, title: 'Koupelny na klíč', text: 'Dispozice, 3D návrh, výběr vybavení i kompletní realizace. Jednotlivé kroky spolu dávají smysl.', tag: 'OD NÁVRHU PO POSLEDNÍ OBKLAD' },
  { id: 'houses', number: '02', icon: House, title: 'Rodinné domy', text: 'Výstavba a prodej rodinných domů. Probereme vaše plány, pozemek i rozsah prací.', tag: 'MÍSTO PRO VÁŠ ŽIVOT' },
  { id: 'installations', number: '03', icon: Wrench, title: 'Instalace a servis', text: 'Voda, kanalizace, plyn a topení. Montáž a údržba technologií, na kterých domov stojí.', tag: 'TECHNIKA, KTERÁ FUNGUJE' },
];
export const Features: React.FC = () => <section id="services" className="services-section site-wrap section-space" aria-labelledby="services-title"><div className="section-heading"><div><p className="eyebrow">CO PRO VÁS UDĚLÁME</p><h2 id="services-title">Od koupelny<br />po celý domov.</h2></div><p>Design i řemeslo pod jednou střechou.<br />Vyberte si, s čím vám pomůžeme.</p></div><div className="service-grid">{services.map(service => <a className="service-card" key={service.id} href={`#${service.id}`}><div className="service-top"><service.icon size={31} strokeWidth={1.5} aria-hidden="true" /><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-bottom"><span>{service.tag}</span><ArrowUpRight size={22} aria-hidden="true" /></div></a>)}</div></section>;
