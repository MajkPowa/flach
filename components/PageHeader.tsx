import React from 'react';
import { ArrowLeft } from 'lucide-react';
interface Props { title: string; subtitle?: string; imageUrl: string; }
export const PageHeader: React.FC<Props> = ({ title,subtitle,imageUrl }) => <section className="detail-hero"><div className="site-wrap"><div><a href="#home" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> Zpět na úvod</a><p className="eyebrow">FLACH · LITOMYŠL A OKOLÍ</p><h1>{title}</h1>{subtitle && <p className="detail-description">{subtitle}</p>}</div><figure><img src={imageUrl} alt="" /><figcaption>Vizuální inspirace</figcaption></figure></div></section>;
