import React from 'react';
import { PageHeader } from './PageHeader';
import { Award, Users, ThumbsUp, Calendar } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="O nás" 
        subtitle="Jsme rodinná firma s tradicí od roku 2006. Stavíme rodinné domy a navrhujeme koupelny tak, aby dávaly smysl vašemu životu." 
        imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="prose prose-lg text-slate-600 mb-16">
            <p className="text-xl font-medium text-slate-900 leading-relaxed mb-6">
              Naše společnost vznikla v roce 2006 na základě letitých zkušeností ve stavebnictví. Nabízíme kvalitní a prověřené služby v oblasti návrhu, 3D vizualizace, zaměření a realizace koupelen, výstavby rodinných domů a jejich následného prodeje včetně pozemku.
            </p>
            <p>
              Provádíme montáže a údržbu vodoinstalace, kanalizace, plynu a topení ve všech druzích objektů. Díky vlastnímu týmu odborníků garantujeme kvalitu jednotlivých prací, jejich návaznost i dodržení termínů.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-slate-100 py-12">
            {[
              { icon: Calendar, value: '2006', label: 'Rok založení' },
              { icon: Users, value: '15+', label: 'Členů týmu' },
              { icon: ThumbsUp, value: '500+', label: 'Realizací' },
              { icon: Award, value: '100%', label: 'Záruka kvality' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Náš tým</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Petr Flach', role: 'Majitel, topenář', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
              { name: 'Jana Novotná', role: 'Designérka koupelen', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
              { name: 'Martin Dvořák', role: 'Hlavní stavbyvedoucí', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
            ].map((member, i) => (
              <div key={i} className="group text-center">
                <div className="mb-4 relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-red-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
