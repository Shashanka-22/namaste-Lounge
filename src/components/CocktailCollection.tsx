import React, { useState } from 'react';
import { Wine, Sparkles, ChevronDown, ChevronUp, GlassWater, Clock, Check } from 'lucide-react';

interface CocktailCollectionProps {
  onReserveClick: () => void;
}

export const CocktailCollection: React.FC<CocktailCollectionProps> = ({ onReserveClick }) => {
  const [expandedId, setExpandedId] = useState<string | null>('ck-1');

  const cocktails = [
    {
      id: 'ck-1',
      name: 'Mojito',
      price: 380,
      profile: 'Crisp, Citrus & Garden Mint',
      ingredients: ['White Rum', 'Fresh Garden Mint', 'Muddled Lime Wedges', 'Organic Cane Sugar', 'Chilled Sparkling Soda'],
      description: 'The quintessential beachside refresher. Crisp, citrusy, and brimming with freshly bruised mint leaves.',
      signature: true
    },
    {
      id: 'ck-2',
      name: 'Negroni',
      price: 380,
      profile: 'Herbal, Bittersweet & Aromatic',
      ingredients: ['London Dry Gin', 'Campari Bitter', 'Sweet Red Vermouth', 'Flamed Orange Peel'],
      description: 'Timeless Italian cocktail with a sophisticated balance of herbal bitterness, citrus zest, and botanical sweetness.'
    },
    {
      id: 'ck-3',
      name: 'Whiskey Sour',
      price: 380,
      profile: 'Velvety, Tart & Silky Foam',
      ingredients: ['Bourbon Whiskey', 'Fresh Lemon Juice', 'Simple Cane Syrup', 'Angostura Bitters', 'Silky Aquafaba Foam'],
      description: 'Velvety smooth whiskey shaken to silky perfection with bright tart citrus and warm oak undertones.',
      signature: true
    },
    {
      id: 'ck-4',
      name: "Bee's Knees",
      price: 380,
      profile: 'Floral Botanical & Wild Honey',
      ingredients: ['Botanical Gin', 'Raw Wild Honey Syrup', 'Freshly Squeezed Lemon Juice', 'Expressed Lemon Twist'],
      description: 'Prohibition-era elegance combining floral botanical gin with warm golden honey and crisp citrus.'
    },
    {
      id: 'ck-5',
      name: 'Lemon Drop',
      price: 380,
      profile: 'Vibrant Sweet-and-Sour Aperitif',
      ingredients: ['Grain Vodka', 'Triple Sec Liqueur', 'Fresh Meyer Lemon Juice', 'Simple Syrup', 'Sugar-Crusted Rim'],
      description: 'A vibrant sweet-and-sour aperitif poured in a chilled glass with a delicate sugared rim.'
    },
    {
      id: 'ck-6',
      name: 'Vodka Tonic',
      price: 380,
      profile: 'Clean, Effervescent & Botanical',
      ingredients: ['Distilled Vodka', 'Artisanal Tonic Water', 'Fresh Lime Wheel', 'Juniper Botanical Mist'],
      description: 'Clean, effervescent, and supremely crisp over handcrafted crystal ice cubes.'
    },
    {
      id: 'ck-7',
      name: 'Cosmopolitan',
      price: 380,
      profile: 'Blushing Ruby Fruit & Citrus',
      ingredients: ['Citrus Infused Vodka', 'Cointreau Orange Liqueur', 'Tart Cranberry Juice', 'Fresh Lime Cordial'],
      description: 'Sophisticated blushing cocktail with ruby fruit sweetness and vibrant citrus aromatics.'
    },
    {
      id: 'ck-8',
      name: 'Pina Colada',
      price: 380,
      profile: 'Creamy Coconut & Ripe Pineapple',
      ingredients: ['Caribbean White Rum', 'Luscious Coconut Cream', 'Fresh Pineapple Juice', 'Pineapple Wedge & Maraschino'],
      description: 'Creamy tropical bliss blending sweet coconut, ripe sun-drenched pineapple, and mellow rum.',
      signature: true
    },
    {
      id: 'ck-9',
      name: 'Screw Driver',
      price: 380,
      profile: 'Sun-Ripened Valencia Orange',
      ingredients: ['Triple-Filtered Vodka', 'Freshly Squeezed Orange Juice', 'Orange Wheel Garnish'],
      description: 'Pure, refreshing simplicity featuring high-purity spirit blended with sun-ripened citrus juice.'
    },
    {
      id: 'ck-10',
      name: 'Blue Lagoon',
      price: 380,
      profile: 'Electric Sapphire & Fresh Lime',
      ingredients: ['Craft Vodka', 'Vibrant Blue Curaçao', 'Fresh Lime Cordial', 'Chilled Sparkling Lemonade'],
      description: 'An electric sapphire showstopper evocative of Palolem’s azure sea, sweet-tart and effervescent.',
      signature: true
    },
    {
      id: 'ck-11',
      name: 'Orange Blossom',
      price: 380,
      profile: 'Delicate Floral & Sweet Vermouth',
      ingredients: ['London Dry Gin', 'Sweet Red Vermouth', 'Fresh Squeezed Orange Juice', 'Orange Blossom Essence'],
      description: 'Delicate floral notes woven with aromatic gin botanicals and luscious freshly squeezed orange.'
    }
  ];

  return (
    <section id="cocktails" className="py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative overflow-hidden border-t border-[#C6A56A]/15">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_ab3f505e.png"
          alt="Artisanal cocktails at Namaste Lounge"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-[#101A17]/80 to-[#101A17]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,165,106,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-3">
            <Wine className="w-3.5 h-3.5" />
            <span>The Lounge Collection</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF7F0] font-normal leading-[1.1]">
            Artisanal Cocktails
          </h2>
          <p className="mt-4 text-base text-[#B9B5A9] font-light leading-relaxed">
            Every cocktail is handcrafted by our mixologists using fresh fruit reductions, premium spirits, and fragrant botanicals.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-sm bg-[#19241F]/80 border border-[#C6A56A]/30 text-xs text-[#C6A56A] font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Signature Cocktails Uniformly Priced at ₹380</span>
          </div>
        </div>

        {/* 2-Column Responsive Layout of Cocktails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {cocktails.map((drink) => {
            const isExpanded = expandedId === drink.id;

            return (
              <div
                key={drink.id}
                className={`p-6 rounded-sm transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-[#19241F] border-[#C6A56A]/60 shadow-xl'
                    : 'bg-[#19241F]/60 border-[#C6A56A]/20 hover:border-[#C6A56A]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-serif text-2xl text-[#FAF7F0] font-medium">
                        {drink.name}
                      </h3>
                      {drink.signature && (
                        <span className="text-[10px] uppercase tracking-wider text-[#C6A56A] bg-[#C6A56A]/10 px-2 py-0.5 rounded-sm border border-[#C6A56A]/30">
                          Signature
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#C6A56A] tracking-wide mt-1">
                      {drink.profile}
                    </p>
                  </div>

                  <span className="font-serif text-2xl text-[#C6A56A] font-semibold tabular-nums shrink-0">
                    ₹{drink.price}
                  </span>
                </div>

                <p className="mt-3 text-xs text-[#B9B5A9] font-light leading-relaxed">
                  {drink.description}
                </p>

                {/* Recipe toggle button */}
                <div className="mt-4 pt-3 border-t border-[#C6A56A]/15">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : drink.id)}
                    className="text-xs text-[#C6A56A] hover:text-[#DFCA9B] flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Botanical Recipe' : 'View Botanical Ingredients'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 flex flex-wrap gap-1.5 animate-fadeIn">
                      {drink.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-[#FAF7F0]/80 bg-[#101A17] px-2.5 py-1 rounded-sm border border-[#C6A56A]/20"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reserve Night Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onReserveClick}
            className="px-8 py-4 bg-[#C6A56A] hover:bg-[#DFCA9B] text-[#101A17] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all duration-200 cursor-pointer shadow-xl hover:shadow-[#C6A56A]/25"
          >
            Reserve An Evening with Cocktails
          </button>
        </div>
      </div>
    </section>
  );
};
