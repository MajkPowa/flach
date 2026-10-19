import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { Portfolio } from './components/Portfolio';
import { ContactFooter } from './components/ContactFooter';
import { AiConfigurator } from './components/AiConfigurator';
import { PageId } from './types';
import { NAV_LINKS } from './constants';

// Pages
import { BathroomsPage } from './components/BathroomsPage';
import { HousesPage } from './components/HousesPage';
import { InstallationsPage } from './components/InstallationsPage';
import { AboutPage } from './components/AboutPage';
import { BlogPage } from './components/BlogPage';

const pageFromHash = (): PageId => {
  const id = window.location.hash.slice(1);
  return NAV_LINKS.find((link) => link.id === id)?.id ?? 'home';
};

function App() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageId>(pageFromHash);

  useEffect(() => {
    const syncPage = () => {
      setActivePage(pageFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  const navigate = (page: PageId) => {
    window.location.hash = page;
    setActivePage(page);
  };

  // Simple render router
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onOpenConfigurator={() => setIsConfiguratorOpen(true)} />
            <Features />
            <Timeline />
            <Portfolio />
          </>
        );
      case 'bathrooms':
        return <BathroomsPage onOpenConfigurator={() => setIsConfiguratorOpen(true)} />;
      case 'houses':
        return <HousesPage />;
      case 'installations':
        return <InstallationsPage />;
      case 'portfolio':
        return (
          <div className="pt-20">
            <Portfolio />
          </div>
        );
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        // Contact is usually a section, we can just render the footer or a dedicated contact page (here reusing footer is fine as it has a form)
        return (
            <div className="pt-20">
               <ContactFooter />
            </div>
        ); 
      default:
        return null;
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-200 selection:text-red-900 min-h-screen flex flex-col">
      
      <Header 
        activePage={activePage} 
        setActivePage={navigate}
        onOpenConfigurator={() => setIsConfiguratorOpen(true)} 
      />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Render footer everywhere except if 'contact' page is active and it's already rendering the form as main content, 
          but actually our ContactFooter is big enough to serve as the page content for contact. 
          For other pages, we want it at the bottom. */}
      {activePage !== 'contact' && <ContactFooter />}

      {/* Overlays */}
      <AiConfigurator 
        isOpen={isConfiguratorOpen} 
        onClose={() => setIsConfiguratorOpen(false)} 
      />
      
    </div>
  );
}

export default App;
