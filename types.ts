export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'koupelna' | 'dum' | 'instalace';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ConfiguratorData {
  type: string;
  dimensions: string;
  style: string;
  budget: string;
  features: string[];
  contact: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Reference {
  id: number;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export type PageId = 'home' | 'bathrooms' | 'houses' | 'installations' | 'portfolio' | 'about' | 'blog' | 'contact';
