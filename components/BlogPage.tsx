import React from 'react';
import { PageHeader } from './PageHeader';
import { BLOG_POSTS } from '../constants';
import { Calendar, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Poradna & Blog" 
        subtitle="Rady, tipy a inspirace ze světa koupelen, staveb a vytápění." 
        imageUrl="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" /> Redakce FLACH
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
