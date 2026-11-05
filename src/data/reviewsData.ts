export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  highlight: string;
  text: string;
  source: 'Google Verified Review';
  tag: string;
}

export const REVIEWS_SUMMARY = {
  rating: 4.7,
  totalReviews: 788,
  googleMapsUrl: 'https://maps.google.com/?q=Namaste+Lounge+Palolem+Goa'
};

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rohan Deshmukh',
    rating: 5,
    timeAgo: '2 weeks ago',
    highlight: 'Fresh Seafood & Unbeatable Ambience',
    text: 'Namaste Lounge is easily one of the best finds in Palolem. The Kingfish Rawa Fry was extraordinarily fresh and crispy, and the King Prawns Butter Garlic melted in our mouths. Sitting beneath the fairy-lit palms with great music made our evening so memorable.',
    source: 'Google Verified Review',
    tag: 'Seafood Lovers'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    rating: 5,
    timeAgo: '1 month ago',
    highlight: 'Magical Live Music & Welcoming Hospitality',
    text: 'We came for a quick cocktail and ended up staying for 4 hours! The live acoustic performance was soulful, cocktails are crafted with genuine care (try the Mojito and Whiskey Sour), and the staff makes you feel like long-lost family.',
    source: 'Google Verified Review',
    tag: 'Live Music & Nightlife'
  },
  {
    id: 'rev-3',
    author: 'Aditya & Priya Nair',
    rating: 5,
    timeAgo: '3 weeks ago',
    highlight: 'Authentic Goan Flavours with European Charm',
    text: 'A rare place that excels at both coastal Goan seafood and continental food. The Crab Sukha has that authentic coastal spice kick, while the pizza and pasta satisfied our kids completely. Very relaxed, clean, and warm hospitality.',
    source: 'Google Verified Review',
    tag: 'Family Dining'
  },
  {
    id: 'rev-4',
    author: 'Marcus Weber',
    rating: 5,
    timeAgo: '2 months ago',
    highlight: 'The Quintessential Goa Experience',
    text: 'Everything you want Goa to be: lush green palms, gentle evening breeze, chilled drinks, and exceptionally tasty food. The Calamari Seafood Platter is a must-try. Genuine value for money and outstanding service.',
    source: 'Google Verified Review',
    tag: 'Travelers & Foodies'
  },
  {
    id: 'rev-5',
    author: 'Siddharth Chawla',
    rating: 5,
    timeAgo: '1 month ago',
    highlight: 'Outstanding Cocktails at ₹380',
    text: 'Unbelievable cocktail collection for ₹380 each in Palolem. No cutting corners on spirits or fresh garnishes. The Blue Lagoon and Negroni were spot on. Will definitely return whenever I am back in South Goa.',
    source: 'Google Verified Review',
    tag: 'Cocktail Aficionados'
  }
];
