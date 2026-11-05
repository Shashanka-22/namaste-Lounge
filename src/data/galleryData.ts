export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ambience' | 'cuisine' | 'cocktails' | 'live-music';
  src: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
  featured?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The "Namaste" Palm Art & Sacred Decor',
    subtitle: 'Artistic Identity',
    category: 'ambience',
    src: '/assets/aistudio/image_5914e6c0.png',
    aspect: 'portrait',
    description: 'Our iconic handcrafted wooden "namaste" emblem adorned with peacock plumes and traditional brass art, set upon an illuminated palm trunk.',
    featured: true
  },
  {
    id: 'g-2',
    title: 'Wood-Fired Pizza & Evening Cocktails',
    subtitle: 'Culinary Delights',
    category: 'cuisine',
    src: '/assets/aistudio/image_642dc875.png',
    aspect: 'portrait',
    description: 'Fresh artisanal stone-baked pizza topped with fresh herbs and mozzarella, paired with our house Piña Colada and chilled Margarita under fairy lights.',
    featured: true
  },
  {
    id: 'g-3',
    title: 'Sundowner Cocktails & Crisp Bites',
    subtitle: 'Lounge Collection',
    category: 'cocktails',
    src: '/assets/aistudio/image_ab3f505e.png',
    aspect: 'portrait',
    description: 'Vibrant handcrafted Blue Lagoon and garden-fresh Mint Mojito served ice-cold alongside seasoned golden fries.',
    featured: true
  },
  {
    id: 'g-4',
    title: 'Live Acoustic Evenings & Soulful Melodies',
    subtitle: 'Nightlife & Energy',
    category: 'live-music',
    src: '/assets/aistudio/image_7820af9a.png',
    aspect: 'landscape',
    description: 'Soul-stirring live guitar and vocals that turn every evening into a story. Great music, laughter, and friends in the heart of Palolem.',
    featured: true
  },
  {
    id: 'g-5',
    title: 'The Open-Air Lounge & Cushioned Retreat',
    subtitle: 'Relaxed Atmosphere',
    category: 'ambience',
    src: '/assets/aistudio/image_9e31e09d.png',
    aspect: 'portrait',
    description: 'Plush wicker couches, vibrant Goan cushions, and fairy-lit natural coconut trees creating an intimate, welcoming sanctuary.',
    featured: false
  },
  {
    id: 'g-6',
    title: 'Tropical Garden Entrance & White Picket Charm',
    subtitle: 'Arrival in Palolem',
    category: 'ambience',
    src: '/assets/aistudio/image_b57bd092.png',
    aspect: 'landscape',
    description: 'Our quaint white-fenced entrance nestled beneath lush Goan coconut palms along Dr Pundlik Gaitonde Road.',
    featured: false
  },
  {
    id: 'g-7',
    title: 'Gourmet Club Sandwiches & Fresh Tropical Blends',
    subtitle: 'All-Day Dining',
    category: 'cuisine',
    src: '/assets/aistudio/image_77b998f1.png',
    aspect: 'portrait',
    description: 'Crispy toasted club sandwich served with crunchy spiced chips and freshly blended tropical fruit smoothies.',
    featured: false
  }
];
