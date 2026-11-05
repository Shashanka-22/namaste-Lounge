export type MenuCategoryType =
  | 'all'
  | 'continental'
  | 'seafood'
  | 'fish-fry'
  | 'prawns'
  | 'chicken-mutton'
  | 'sukha'
  | 'cocktails';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: 'continental' | 'seafood' | 'sukha' | 'cocktails';
  tags: MenuCategoryType[];
  subCategory?: string;
  dietary?: 'veg' | 'non-veg' | 'seafood';
  isPlatter?: boolean;
  ingredients?: string[];
  signature?: boolean;
  image?: string;
}

export interface MenuCategoryMeta {
  id: MenuCategoryType;
  label: string;
  subtitle: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  {
    id: 'all',
    label: 'Full Menu',
    subtitle: 'The Complete Culinary Collection',
    description: 'Explore our complete repertoire of authentic Goan seafood, coastal roasts, classic European continental fare, and handcrafted cocktails.'
  },
  {
    id: 'seafood',
    label: 'Seafood',
    subtitle: 'Fresh Catch from the Arabian Sea',
    description: 'Fresh local Kingfish, Mackerel, Calamari, and Jumbo Prawns cooked to order with signature coastal spice blends.'
  },
  {
    id: 'fish-fry',
    label: 'Fish Fry',
    subtitle: 'Tawa, Rawa & Butter Garlic',
    description: 'Iconic coastal fish fry preparations with semolina crust, iron griddle seared recheado masala, and garlic butter.'
  },
  {
    id: 'prawns',
    label: 'Prawns',
    subtitle: 'Sweet Ocean Prawns',
    description: 'Succulent coastal prawns prepared crispy rawa-fried, sizzling tawa recheado, and butter garlic.'
  },
  {
    id: 'chicken-mutton',
    label: 'Chicken & Mutton',
    subtitle: 'Tender Meats & Steaks',
    description: 'Herb-marinated chicken, slow-cooked mutton chops in cracked pepper sauce, creamy Alfredo, and dry-roast roasts.'
  },
  {
    id: 'sukha',
    label: 'Sukha',
    subtitle: 'Traditional Coastal Dry Roasts',
    description: 'Slow-roasted coastal delicacies tossed in roasted coconut flakes, crushed peppercorns, curry leaves, and fragrant whole spices.'
  },
  {
    id: 'continental',
    label: 'Continental',
    subtitle: 'Classic European & Comfort Dining',
    description: 'Slow-cooked steaks, creamy gratins, skewers, and rich pastas crafted with farm-fresh herbs and delicate butter sauces.'
  },
  {
    id: 'cocktails',
    label: 'Cocktails',
    subtitle: 'The Lounge Collection • All ₹380',
    description: 'Expertly shaken, stirred, and poured using fresh tropical juices, botanical infusions, and premium spirits for the ultimate Palolem twilight.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // CONTINENTAL
  {
    id: 'c-1',
    name: 'Baked Vegetable',
    price: 360,
    category: 'continental',
    tags: ['continental'],
    dietary: 'veg',
    description: 'Seasonal garden vegetables baked in a rich creamy cheese sauce until bubbling and golden.'
  },
  {
    id: 'c-2',
    name: 'Cauliflower Mornay',
    price: 350,
    category: 'continental',
    tags: ['continental'],
    dietary: 'veg',
    description: 'Steamed cauliflower florets smothered with velvety cream, fresh parsley, and melted cheese.'
  },
  {
    id: 'c-3',
    name: 'Mushroom Florentine',
    price: 390,
    category: 'continental',
    tags: ['continental'],
    dietary: 'veg',
    description: 'Sautéed forest mushrooms prepared with house cheese sauce and tender wilted spinach leaves.'
  },
  {
    id: 'c-4',
    name: 'Paneer Shashlik with Butter Rice',
    price: 420,
    category: 'continental',
    tags: ['continental'],
    dietary: 'veg',
    description: 'Char-grilled cottage cheese skewers with crunchy capsicum, sweet onion, and charred tomato on fragrant butter rice.',
    signature: true
  },
  {
    id: 'c-5',
    name: 'Mutton Chops in Pepper Sauce',
    price: 580,
    category: 'continental',
    tags: ['continental', 'chicken-mutton'],
    dietary: 'non-veg',
    description: 'Tender marinated mutton chops seared and simmered in cracked black pepper sauce, served with potato and butter rice.'
  },
  {
    id: 'c-6',
    name: 'Grilled Fish in Lemon Butter Sauce',
    price: 590,
    category: 'continental',
    tags: ['continental', 'seafood'],
    dietary: 'seafood',
    description: 'Fresh Kingfish fillet grilled to perfection, drizzled with zesty lemon butter sauce, served with vegetables, fries and grilled tomato.',
    signature: true
  },
  {
    id: 'c-7',
    name: 'Prawns in BBQ Sauce',
    price: 590,
    category: 'continental',
    tags: ['continental', 'seafood', 'prawns'],
    dietary: 'seafood',
    description: 'Succulent coastal prawns tossed in smoky sweet BBQ glaze, served alongside warm butter rice and golden fries.'
  },
  {
    id: 'c-8',
    name: 'Grilled Chicken',
    price: 550,
    category: 'continental',
    tags: ['continental', 'chicken-mutton'],
    dietary: 'non-veg',
    description: 'Juicy herb-marinated chicken breast seared on the grill, served with aromatic butter rice, crispy fries, and sautéed vegetables.'
  },
  {
    id: 'c-9',
    name: 'King Prawns Butter Garlic',
    price: 650,
    category: 'continental',
    tags: ['continental', 'seafood', 'prawns'],
    dietary: 'seafood',
    description: 'Jumbo king prawns gently pan-tossed in garlic-infused clarified butter, served with fluffy butter rice and fries.',
    signature: true
  },
  {
    id: 'c-10',
    name: 'Chicken Alaking with Butter Rice',
    price: 490,
    category: 'continental',
    tags: ['continental', 'chicken-mutton'],
    dietary: 'non-veg',
    description: 'Tender chicken slices simmered in a velvety cream sauce with bell peppers and mushrooms, ladled over butter rice.'
  },
  {
    id: 'c-11',
    name: 'Chicken Alfredo',
    price: 490,
    category: 'continental',
    tags: ['continental', 'chicken-mutton'],
    dietary: 'non-veg',
    description: 'Al dente pasta tossed in rich white cream sauce, aged parmesan cheese, fresh chopped parsley, and seared chicken breast.'
  },

  // SEAFOOD SPECIALITIES - KOLIWADA
  {
    id: 'sf-1',
    name: 'Fish Koliwada',
    price: 480,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Koliwada',
    dietary: 'seafood',
    description: 'Crisp Mumbai-fisherman style spiced batter-fried fish bites served with spicy mint dip and lemon wedges.'
  },
  {
    id: 'sf-2',
    name: 'Prawns Koliwada',
    price: 390,
    category: 'seafood',
    tags: ['seafood', 'prawns'],
    subCategory: 'Koliwada',
    dietary: 'seafood',
    description: 'Juicy ocean prawns coated in authentic carom & red chilli koliwada batter and fried golden crisp.'
  },

  // KINGFISH FRY
  {
    id: 'sf-3',
    name: 'Kingfish Tawa Fry',
    price: 460,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Kingfish Fry',
    dietary: 'seafood',
    description: 'Fresh local kingfish steak slathered in house Goan recheado and masala paste, pan-seared on an iron griddle.'
  },
  {
    id: 'sf-4',
    name: 'Kingfish Rawa Fry',
    price: 510,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Kingfish Fry',
    dietary: 'seafood',
    description: 'Fresh kingfish steak coated with spiced semolina (rawa) and shallow fried till super crisp on the outside and moist within.',
    signature: true
  },
  {
    id: 'sf-5',
    name: 'Kingfish Butter Garlic Fry',
    price: 560,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Kingfish Fry',
    dietary: 'seafood',
    description: 'Pan-seared kingfish steak gently simmered in golden butter with minced roasted garlic and fresh coriander.'
  },
  {
    id: 'sf-6',
    name: 'Kingfish Seafood Platter',
    price: 1520,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Kingfish Fry',
    dietary: 'seafood',
    isPlatter: true,
    signature: true,
    description: 'The ultimate royal feast: A grand tasting platter featuring a combined trio of Kingfish Tawa Fry, Rawa Fry, and Butter Garlic Fry with sides.'
  },

  // MACKEREL FISH FRY
  {
    id: 'sf-7',
    name: 'Mackerel Tawa Fry',
    price: 300,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Mackerel Fish Fry',
    dietary: 'seafood',
    description: 'Whole fresh Goan mackerel marinated with coastal spices and pan-seared crisp on the tawa.'
  },
  {
    id: 'sf-8',
    name: 'Mackerel Rawa Fry',
    price: 325,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Mackerel Fish Fry',
    dietary: 'seafood',
    description: 'Classic Goan mackerel dredged in seasoned semolina crust for a signature crunchy bite.'
  },
  {
    id: 'sf-9',
    name: 'Mackerel Butter Garlic Fry',
    price: 360,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Mackerel Fish Fry',
    dietary: 'seafood',
    description: 'Tender mackerel seared with rich creamy butter, crushed aromatic garlic, and fresh cracked pepper.'
  },
  {
    id: 'sf-10',
    name: 'Mackerel Seafood Platter',
    price: 960,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Mackerel Fish Fry',
    dietary: 'seafood',
    isPlatter: true,
    description: 'Generous sharing feast featuring a combined preparation of Mackerel Tawa Fry, Rawa Fry, and Butter Garlic Fry.'
  },

  // SUKHA
  {
    id: 'sk-1',
    name: 'Chicken Sukha',
    price: 320,
    category: 'sukha',
    tags: ['sukha', 'chicken-mutton'],
    dietary: 'non-veg',
    description: 'Tender morsels of chicken pan-roasted with freshly grated coconut, black pepper, and stone-ground spices.'
  },
  {
    id: 'sk-2',
    name: 'Mutton Sukha',
    price: 450,
    category: 'sukha',
    tags: ['sukha', 'chicken-mutton'],
    dietary: 'non-veg',
    description: 'Succulent mutton slow-cooked with caramelized shallots, coconut slivers, and rich coastal spice masala.',
    signature: true
  },
  {
    id: 'sk-3',
    name: 'Crab Sukha',
    price: 460,
    category: 'sukha',
    tags: ['sukha', 'seafood'],
    dietary: 'seafood',
    description: 'Fresh local sea crab tossed in a fiery dry coconut masala infused with fragrant curry leaves and roasted coriander.',
    signature: true
  },

  // CALAMARI FISH FRY
  {
    id: 'sf-11',
    name: 'Calamari Tawa Fry',
    price: 400,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Calamari Fish Fry',
    dietary: 'seafood',
    description: 'Tender squid rings marinated in tangy tamarind and Goan spices, seared fast on a sizzling iron skillet.'
  },
  {
    id: 'sf-12',
    name: 'Calamari Rawa Fry',
    price: 430,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Calamari Fish Fry',
    dietary: 'seafood',
    description: 'Squid rings coated in crunchy golden semolina crust, perfectly crispy on the outside and tender inside.'
  },
  {
    id: 'sf-13',
    name: 'Calamari Butter Garlic Fry',
    price: 460,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Calamari Fish Fry',
    dietary: 'seafood',
    description: 'Succulent calamari sautéed in warm melted butter with toasted garlic slivers and parsley.'
  },
  {
    id: 'sf-14',
    name: 'Calamari Seafood Platter',
    price: 1250,
    category: 'seafood',
    tags: ['seafood', 'fish-fry'],
    subCategory: 'Calamari Fish Fry',
    dietary: 'seafood',
    isPlatter: true,
    signature: true,
    description: 'Indulgent calamari sampler featuring a combined preparation of Calamari Tawa Fry, Rawa Fry, and Butter Garlic Fry.'
  },

  // PRAWNS FRY
  {
    id: 'sf-15',
    name: 'Prawns Tawa Fry',
    price: 400,
    category: 'seafood',
    tags: ['seafood', 'prawns', 'fish-fry'],
    subCategory: 'Prawns Fry',
    dietary: 'seafood',
    description: 'Sweet coastal prawns tossed with fiery homemade Goan red masala on a hot smoking tawa.'
  },
  {
    id: 'sf-16',
    name: 'Prawns Rawa Fry',
    price: 425,
    category: 'seafood',
    tags: ['seafood', 'prawns', 'fish-fry'],
    subCategory: 'Prawns Fry',
    dietary: 'seafood',
    description: 'Crispy rawa-crusted prawns fried until golden brown, an iconic Goan coastal snack.',
    signature: true
  },
  {
    id: 'sf-17',
    name: 'Prawns Butter Garlic Fry',
    price: 460,
    category: 'seafood',
    tags: ['seafood', 'prawns'],
    subCategory: 'Prawns Fry',
    dietary: 'seafood',
    description: 'Plump prawns sautéed in abundant fragrant butter with finely minced garlic and fresh herbs.'
  },
  {
    id: 'sf-18',
    name: 'Prawns Seafood Platter',
    price: 1260,
    category: 'seafood',
    tags: ['seafood', 'prawns', 'fish-fry'],
    subCategory: 'Prawns Fry',
    dietary: 'seafood',
    isPlatter: true,
    signature: true,
    description: 'The chef’s crowning prawn showcase: A combined trio of Prawns Tawa Fry, Rawa Fry, and Butter Garlic Fry.'
  },

  // COCKTAILS (All ₹380)
  {
    id: 'ck-1',
    name: 'Mojito',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['White Rum', 'Fresh Garden Mint', 'Muddled Lime Wedges', 'Organic Cane Sugar', 'Chilled Sparkling Soda'],
    description: 'The quintessential beachside refresher. Crisp, citrusy, and brimming with freshly bruised mint leaves.',
    signature: true
  },
  {
    id: 'ck-2',
    name: 'Negroni',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['London Dry Gin', 'Campari Bitter', 'Sweet Red Vermouth', 'Flamed Orange Peel'],
    description: 'Timeless Italian cocktail with a sophisticated balance of herbal bitterness, citrus zest, and botanical sweetness.'
  },
  {
    id: 'ck-3',
    name: 'Whiskey Sour',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Bourbon Whiskey', 'Fresh Lemon Juice', 'Simple Cane Syrup', 'Angostura Bitters', 'Silky Aquafaba Foam'],
    description: 'Velvety smooth whiskey shaken to silky perfection with bright tart citrus and warm oak undertones.',
    signature: true
  },
  {
    id: 'ck-4',
    name: "Bee's Knees",
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Botanical Gin', 'Raw Wild Honey Syrup', 'Freshly Squeezed Lemon Juice', 'Expressed Lemon Twist'],
    description: 'Prohibition-era elegance combining floral botanical gin with warm golden honey and crisp citrus.'
  },
  {
    id: 'ck-5',
    name: 'Lemon Drop',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Grain Vodka', 'Triple Sec Liqueur', 'Fresh Meyer Lemon Juice', 'Simple Syrup', 'Sugar-Crusted Rim'],
    description: 'A vibrant sweet-and-sour aperitif poured in a chilled glass with a delicate sugared rim.'
  },
  {
    id: 'ck-6',
    name: 'Vodka Tonic',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Distilled Vodka', 'Artisanal Tonic Water', 'Fresh Lime Wheel', 'Juniper Botanical Mist'],
    description: 'Clean, effervescent, and supremely crisp over handcrafted crystal ice cubes.'
  },
  {
    id: 'ck-7',
    name: 'Cosmopolitan',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Citrus Infused Vodka', 'Cointreau Orange Liqueur', 'Tart Cranberry Juice', 'Fresh Lime Cordial'],
    description: 'Sophisticated blushing cocktail with ruby fruit sweetness and vibrant citrus aromatics.'
  },
  {
    id: 'ck-8',
    name: 'Pina Colada',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Caribbean White Rum', 'Luscious Coconut Cream', 'Fresh Pineapple Juice', 'Pineapple Wedge & Maraschino'],
    description: 'Creamy tropical bliss blending sweet coconut, ripe sun-drenched pineapple, and mellow rum.',
    signature: true
  },
  {
    id: 'ck-9',
    name: 'Screw Driver',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Triple-Filtered Vodka', 'Freshly Squeezed Orange Juice', 'Orange Wheel Garnish'],
    description: 'Pure, refreshing simplicity featuring high-purity spirit blended with sun-ripened citrus juice.'
  },
  {
    id: 'ck-10',
    name: 'Blue Lagoon',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['Craft Vodka', 'Vibrant Blue Curaçao', 'Fresh Lime Cordial', 'Chilled Sparkling Lemonade'],
    description: 'An electric sapphire showstopper evocative of Palolem’s azure sea, sweet-tart and effervescent.',
    signature: true
  },
  {
    id: 'ck-11',
    name: 'Orange Blossom',
    price: 380,
    category: 'cocktails',
    tags: ['cocktails'],
    ingredients: ['London Dry Gin', 'Sweet Red Vermouth', 'Fresh Squeezed Orange Juice', 'Orange Blossom Essence'],
    description: 'Delicate floral notes woven with aromatic gin botanicals and luscious freshly squeezed orange.'
  }
];
