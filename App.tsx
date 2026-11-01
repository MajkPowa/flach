import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { Portfolio } from './components/Portfolio';
import { Faq } from './components/Faq';
import { ContactFooter } from './components/ContactFooter';
import { AiConfigurator } from './components/AiConfigurator';
import { PageId } from './types';
import { NAV_LINKS } from './constants';
import { BathroomsPage } from './components/BathroomsPage';
import { HousesPage } from './components/HousesPage';
import { InstallationsPage } from './components/InstallationsPage';
import { AboutPage } from './components/AboutPage';
import { BlogPage } from './components/BlogPage';
const readRoute = () => {
  const [id,section] = window.location.hash.slice(1).split('/');
  return { page: NAV_LINKS.find(link => link.id === id)?.id ?? 'home' as PageId, section: section || '', key: window.location.hash };
};
export default function App() {
  const [isConfiguratorOpen,setIsConfiguratorOpen] = useState(false);
  const [route,setRoute] = useState(readRoute);
  const previousPage = useRef(route.page);
  useEffect(() => { const sync = () => setRoute(readRoute()); window.addEventListener('hashchange',sync); return () => window.removeEventListener('hashchange',sync); },[]);
  useEffect(() => {
    const titles: Record<PageId,string> = { home:'Koupelny na klíč v Litomyšli',bathrooms:'Koupelny na klíč',houses:'Rodinné domy',installations:'Voda, plyn a topení',portfolio:'Realizace koupelen',about:'O nás',blog:'Poradna',contact:'Kontakt' };
    document.title = `${titles[route.page]} | FLACH`;
    const frame = requestAnimationFrame(() => {
      const section = route.section ? document.getElementById(route.section) : null;
      if (section) {
        section.tabIndex = -1;
        section.focus({preventScroll:true});
        section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      } else {
        window.scrollTo({top:0,behavior:'instant'});
        if (previousPage.current !== route.page || route.key) document.getElementById('main-content')?.focus({preventScroll:true});
      }
      previousPage.current = route.page;
    });
    return () => cancelAnimationFrame(frame);
  },[route]);
  const openInquiry = () => setIsConfiguratorOpen(true);
  const repeatRoute = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = event.target instanceof Element ? event.target.closest('a') : null;
    const href = anchor?.getAttribute('href');
    if (href && href.startsWith('#') && href === window.location.hash && NAV_LINKS.some(link => link.id === href.slice(1).split('/')[0])) {
      event.preventDefault();
      setRoute(readRoute());
    }
  };
  const content = () => {
    switch(route.page) {
      case 'home': return <><Hero onOpenConfigurator={openInquiry} /><Features /><Portfolio /><Timeline /><Faq /></>;
      case 'bathrooms': return <BathroomsPage onOpenConfigurator={openInquiry} />;
      case 'houses': return <HousesPage />;
      case 'installations': return <InstallationsPage />;
      case 'portfolio': return <Portfolio />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactFooter />;
    }
  };
  return <div className="site-app" onClick={repeatRoute}><a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Přejít k obsahu</a><Header activePage={route.page} onOpenConfigurator={openInquiry} /><main id="main-content" tabIndex={-1}>{content()}</main>{route.page !== 'contact' && <ContactFooter />}<AiConfigurator isOpen={isConfiguratorOpen} onClose={() => setIsConfiguratorOpen(false)} /></div>;
}
