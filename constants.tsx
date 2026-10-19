import { Project, Service, BlogPost, PageId, Reference } from './types';

export const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Domů' },
  { id: 'bathrooms', label: 'Koupelny' },
  { id: 'houses', label: 'Rodinné domy' },
  { id: 'installations', label: 'Instalace' },
  { id: 'portfolio', label: 'Reference' },
  { id: 'about', label: 'O nás' },
  { id: 'blog', label: 'Poradna' },
  { id: 'contact', label: 'Kontakt' },
];

export const SERVICES: Service[] = [
  {
    id: 'bathrooms',
    title: 'Koupelny na klíč',
    description: 'Návrh, 3D vizualizace, zaměření a kompletní realizace moderních koupelen.',
    icon: 'bath',
  },
  {
    id: 'houses',
    title: 'Rodinné domy',
    description: 'Výstavba a prodej rodinných domů včetně zajištění pozemku a projektu.',
    icon: 'home',
  },
  {
    id: 'installations',
    title: 'Instalace a servis',
    description: 'Montáže a údržba vody, kanalizace, plynu a topení ve všech typech objektů.',
    icon: 'wrench',
  },
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: 'Moderní koupelna Litomyšl',
    description: 'Betonový dekor a černá sanita, 8 m².',
    imageUrl: 'https://images.unsplash.com/photo-1620626012053-93f26f232882?q=80&w=800&auto=format&fit=crop',
    category: 'koupelna',
  },
  {
    id: 2,
    title: 'Rodinný dům Osík',
    description: 'Hrubá stavba a kompletní instalace TZB.',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop',
    category: 'dum',
  },
  {
    id: 3,
    title: 'Wellness koupelna',
    description: 'Volně stojící vana a velkoformátová dlažba.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    category: 'koupelna',
  },
  {
    id: 4,
    title: 'Rekonstrukce bytového jádra',
    description: 'Kompletní proměna panelákové koupelny.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    category: 'koupelna',
  },
  {
    id: 5,
    title: 'Kotelna pro bytový dům',
    description: 'Instalace kaskády kondenzačních kotlů.',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=800&auto=format&fit=crop',
    category: 'instalace',
  },
  {
    id: 6,
    title: 'Dřevostavba na klíč',
    description: 'Realizace nízkoenergetického domu.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    category: 'dum',
  },
];

export const REFERENCES: Reference[] = [
  {
    id: 16,
    year: '2016',
    title: 'Koupelny - galerie 2016',
    description: 'Výběr fotografií koupelen z webu flach.cz (rok 2016).',
    imageUrl: 'https://www.flach.cz/_media/thumbnails/references/gre8wspxt1_420x130_8.jpg',
    link: 'https://www.flach.cz/reference/detail/16-vice',
  },
  {
    id: 6,
    year: '2015',
    title: 'Koupelny - galerie 2015 A',
    description: 'Reference koupelen z roku 2015 dostupná na flach.cz.',
    imageUrl: 'https://www.flach.cz/_media/thumbnails/references/s3z5ifjrdn_420x130_8.jpg',
    link: 'https://www.flach.cz/reference/detail/6-vice',
  },
  {
    id: 7,
    year: '2015',
    title: 'Koupelny - galerie 2015 B',
    description: 'Další fotogalerie realizovaných koupelen (2015).',
    imageUrl: 'https://www.flach.cz/_media/thumbnails/references/u0li9wii8u_420x130_8.jpg',
    link: 'https://www.flach.cz/reference/detail/7-vice',
  },
  {
    id: 13,
    year: '2015',
    title: 'Koupelny - galerie 2015 C',
    description: 'Ukázky koupelen z roku 2015 tak, jak jsou na flach.cz.',
    imageUrl: 'https://www.flach.cz/_media/thumbnails/references/wx25hmmo3v_420x130_8.jpg',
    link: 'https://www.flach.cz/reference/detail/13-vice',
  },
  {
    id: 14,
    year: '2014',
    title: 'Koupelny - galerie 2014 A',
    description: 'Reference koupelen z roku 2014 podle webu flach.cz.',
    imageUrl: 'https://www.flach.cz/_media/thumbnails/references/wdu2naday8_420x130_8.jpg',
    link: 'https://www.flach.cz/reference/detail/14-vice',
  },
  {
    id: 15,
    year: '2014',
    title: 'Koupelny - galerie 2014 B',
    description: 'Druhá série referencí z roku 2014 z webu flach.cz.',
    imageUrl: 'https://www.flach.cz/_media/thumbnails/references/fkseaiodl4_420x130_8.jpg',
    link: 'https://www.flach.cz/reference/detail/15-vice',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Jak připravit byt na rekonstrukci koupelny',
    excerpt: 'Praktické tipy, jak se připravit na bourání, prach a odpojení vody, abyste přežili rekonstrukci v klidu.',
    date: '15. 10. 2023',
    imageUrl: 'https://images.unsplash.com/photo-1533633354728-6d1dd2e67770?q=80&w=800&auto=format&fit=crop',
    category: 'Rady a tipy',
  },
  {
    id: 2,
    title: 'Velkoformátová dlažba: Ano nebo ne?',
    excerpt: 'Jaké jsou výhody a nevýhody velkých formátů v malých koupelnách? Bouráme mýty o prostoru.',
    date: '2. 11. 2023',
    imageUrl: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    category: 'Materiály',
  },
  {
    id: 3,
    title: 'Vytápění rodinného domu v roce 2024',
    excerpt: 'Srovnání tepelných čerpadel a plynových kondenzačních kotlů z hlediska návratnosti.',
    date: '10. 1. 2024',
    imageUrl: 'https://images.unsplash.com/photo-1517646133568-15c67e81997d?q=80&w=800&auto=format&fit=crop',
    category: 'Topení',
  },
  {
    id: 4,
    title: 'Sprchový kout nebo vana? Praktické tipy pro malé koupelny',
    excerpt: 'Co zvážit při výběru sprchy či vany, aby se malá koupelna nestala stísněnou, ale stále pohodlnou.',
    date: '5. 3. 2024',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop',
    category: 'Dispozice',
  },
  {
    id: 5,
    title: 'Jak se vyznat v bateriích: nástěnná vs. podomítková',
    excerpt: 'Výhody a nevýhody nástěnných a podomítkových baterií, včetně tipů na údržbu a servis.',
    date: '18. 4. 2024',
    imageUrl: 'https://images.unsplash.com/photo-1584622006800-69b0d3d4f03d?q=80&w=800&auto=format&fit=crop',
    category: 'Materiály',
  },
  {
    id: 6,
    title: 'Podlahové topení v koupelně: co vědět před montáží',
    excerpt: 'Jak správně navrhnout a připravit podklad, jaké typy topení zvolit a na co si dát pozor u dlažby.',
    date: '12. 6. 2024',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
    category: 'Topení',
  },
];
