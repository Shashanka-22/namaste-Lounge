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
    title: 'The Open-Air Lounge & Cushioned Retreat',
    subtitle: 'Tropical Ambience',
    category: 'ambience',
    src: '/assets/restaurant/photo_2.jpg',
    aspect: 'portrait',
    description: 'Plush wicker couches, colorful Goan cushions, and fairy-lit natural coconut palms creating an intimate, welcoming sanctuary.',
    featured: true
  },
  {
    id: 'g-2',
    title: 'Authentic Goan Seafood Feast',
    subtitle: 'Signature Catch',
    category: 'cuisine',
    src: '/assets/restaurant/photo_8.jpg',
    aspect: 'portrait',
    description: 'Fresh local whole grilled fish on banana leaf paired with crisp prawn rawa fry, authentic Goan curry, kismoor, and steamed rice.',
    featured: true
  },
  {
    id: 'g-3',
    title: 'Wood-Fired Pizza & Evening Cocktails',
    subtitle: 'Artisanal Dining',
    category: 'cuisine',
    src: '/assets/aistudio/image_642dc875.png',
    aspect: 'portrait',
    description: 'Fresh artisanal stone-baked pizza topped with fresh herbs and mozzarella, paired with house Piña Colada and chilled Margarita under fairy canopy.',
    featured: true
  },
  {
    id: 'g-4',
    title: 'Live Acoustic Evenings & Soulful Melodies',
    subtitle: 'Music & Energy',
    category: 'live-music',
    src: '/assets/restaurant/photo_20.jpg',
    aspect: 'portrait',
    description: 'Soul-stirring live guitar and vocals that turn every evening into a story. Great music, laughter, and friends in the heart of Palolem.',
    featured: true
  },
  {
    id: 'g-5',
    title: 'The "Namaste" Palm Art & Sacred Decor',
    subtitle: 'Artistic Identity',
    category: 'ambience',
    src: '/assets/restaurant/photo_11.jpg',
    aspect: 'square',
    description: 'Handcrafted wooden "namaste" emblem adorned with peacock plumes and traditional golden deity art, set upon an illuminated palm trunk.',
    featured: false
  },
  {
    id: 'g-6',
    title: 'Sundowner Cocktails & Crisp Bites',
    subtitle: 'Lounge Collection',
    category: 'cocktails',
    src: '/assets/aistudio/image_ab3f505e.png',
    aspect: 'portrait',
    description: 'Vibrant handcrafted Blue Lagoon and garden-fresh Mint Mojito served ice-cold alongside seasoned golden fries.',
    featured: false
  },
  {
    id: 'g-7',
    title: 'Twilight Ambience & Candlelit Tables',
    subtitle: 'Evening Dining',
    category: 'ambience',
    src: '/assets/restaurant/photo_6.jpg',
    aspect: 'landscape',
    description: 'Warm ambient glow, sheltered coconut grove dining room, and guests unwinding over dinner and conversation.',
    featured: false
  },
  {
    id: 'g-8',
    title: 'Lush Garden Entrance & White Picket Charm',
    subtitle: 'Arrival in Palolem',
    category: 'ambience',
    src: '/assets/restaurant/photo_1.jpg',
    aspect: 'landscape',
    description: 'Quaint white-fenced entrance nestled beneath lush Goan coconut palms along Dr Pundlik Gaitonde Road.',
    featured: false
  },
  {
    id: 'g-9',
    title: 'Evening Glow from the Street',
    subtitle: 'Nightlife Landmark',
    category: 'ambience',
    src: '/assets/restaurant/photo_18.jpg',
    aspect: 'portrait',
    description: 'The illuminated street view of Namaste Lounge welcoming travelers and locals beneath the Palolem night sky.',
    featured: false
  },
  {
    id: 'g-10',
    title: 'Live Band & Gathering Sessions',
    subtitle: 'Nightlife & Memories',
    category: 'live-music',
    src: '/assets/aistudio/image_7820af9a.png',
    aspect: 'landscape',
    description: 'Acoustic musicians and singing guests filling the lounge with infectious energy and warm camaraderie.',
    featured: false
  },
  {
    id: 'g-11',
    title: 'Gourmet Club Sandwiches & Smoothies',
    subtitle: 'All-Day Bites',
    category: 'cuisine',
    src: '/assets/aistudio/image_77b998f1.png',
    aspect: 'portrait',
    description: 'Crispy toasted club sandwich served with crunchy spiced chips and freshly blended tropical fruit smoothies.',
    featured: false
  }
];
