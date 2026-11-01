import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { PageId } from '../types';

interface Props { activePage: PageId; onOpenConfigurator: () => void; }
const links = [
  { href: '#bathrooms', label: 'Koupelny', page: 'bathrooms' },
  { href: '#home/services', label: 'Naše služby', page: '' },
  { href: '#home/work', label: 'Realizace', page: 'portfolio' },
  { href: '#about', label: 'O nás', page: 'about' },
];
export const Header: React.FC<Props> = ({ activePage, onOpenConfigurator }) => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = () => setOpen(false);
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener('hashchange', close);
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => { window.removeEventListener('hashchange', close); document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="brand-strip"><div className="site-wrap"><span>Koupelny. Stavby. Poctivé řemeslo.</span><span>Litomyšl a okolí <span className="brand-strip-dot" /> Od roku 2006</span></div></div>
      <div className="site-wrap nav-bar">
        <a className="brand" href="#home" aria-label="FLACH – úvodní stránka" onClick={() => setOpen(false)}>FLACH<span>.</span><small>KOUPELNY & STAVBY</small></a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">{links.map(link => <a key={link.href} href={link.href} aria-current={activePage === link.page ? 'page' : undefined}>{link.label}</a>)}</nav>
        <div className="nav-actions">
          <a className="nav-phone" href="tel:+420604178805"><Phone size={17} aria-hidden="true" />604 178 805</a>
          <button className="button button-red nav-cta" onClick={onOpenConfigurator}>Poptat koupelnu <ArrowUpRight size={17} aria-hidden="true" /></button>
          <button ref={toggle} className="menu-toggle" aria-label={open ? 'Zavřít menu' : 'Otevřít menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilní navigace" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Kontakt<ArrowUpRight size={18} aria-hidden="true" /></a>
        <a href="tel:+420604178805"><Phone size={18} aria-hidden="true" />604 178 805</a>
        <button className="button button-red" onClick={() => { toggle.current?.focus(); setOpen(false); onOpenConfigurator(); }}>Poptat koupelnu <ArrowUpRight size={18} aria-hidden="true" /></button>
      </nav>
    </header>
  );
};
