import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

export const PageHeader: React.FC<Props> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
