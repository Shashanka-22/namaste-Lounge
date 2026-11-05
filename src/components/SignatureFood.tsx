import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ArrowRight, Star } from 'lucide-react';

interface SignatureFoodProps {
  onSelectForReservation: (dishName: string) => void;
  onExploreFullMenu: () => void;
}

export const SignatureFood: React.FC<SignatureFoodProps> = ({
  onSelectForReservation,
  onExploreFullMenu,
}) => {
  const highlights = [
    {
      name: 'Artisanal Wood-Fired Pizza',
      category: 'Stone-Baked Specialties',
      price: 'Chef Recommended',
      image: '/assets/aistudio/image_642dc875.png',
      description: 'Thin-crust artisanal pizza baked with mozzarella, sun-ripened tomatoes, and fresh garden herbs, paired with chilled tropical cocktails.',
      tags: ['Fresh Baked', 'Wood Oven', 'Lounge Favorite']
    },
    {
      name: 'King Prawns Butter Garlic',
      category: 'Continental Seafood',
      price: '₹650',
      image: '/assets/restaurant/photo_8.jpg',
      description: 'Jumbo succulent Arabian sea king prawns gently tossed in golden clarified butter with toasted garlic slivers, butter rice, and crispy fries.',
      tags: ['Chef Signature', 'Fresh Catch', 'Arabian Sea']
    },
    {
      name: 'Toasted Gourmet Club Sandwich',
      category: 'All-Day Dining',
      price: 'Artisanal Preparation',
      image: '/assets/aistudio/image_77b998f1.png',
      description: 'Triple-decker toasted sandwich with fresh crisp greens, melted cheese, and seasoned crisps, served alongside seasonal fruit smoothies.',
      tags: ['Comfort Dining', 'All-Day', 'Crisp Sides']
    }
  ];

  return (
    <section id="signature-food" className="py-16 sm:py-24 md:py-32 bg-[#F5F0E6] text-[#101A17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#76533B] font-semibold mb-3">
              <Utensils className="w-3.5 h-3.5 text-[#C6A56A]" />
              <span>Artisanal Kitchen Craft</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101A17] font-normal leading-[1.1]">
              Signature Flavours of the Lounge
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#101A17]/75 font-light leading-relaxed">
              Every dish is prepared to order using local spices, fresh morning boat landings, and time-honoured culinary techniques that honour Goan and continental traditions.
            </p>
          </div>

          <button
            onClick={onExploreFullMenu}
            className="w-full sm:w-auto px-6 py-3.5 min-h-[46px] border-2 border-[#101A17] hover:bg-[#101A17] hover:text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all duration-200 cursor-pointer self-start md:self-auto shrink-0 shadow-sm flex items-center justify-center text-center"
          >
            View Complete Menu
          </button>
        </div>

        {/* 3-Column Editorial Dish Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((dish, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-sm border border-[#101A17]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Food Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#101A17]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#101A17] bg-[#F5F0E6]/95 backdrop-blur-sm px-2.5 py-1 rounded-sm font-semibold">
                      {dish.category}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                    <span className="text-xs sm:text-sm font-serif font-semibold text-[#F5F0E6] bg-[#101A17]/85 backdrop-blur-sm px-3 py-1 rounded-sm border border-[#C6A56A]/40 tabular-nums">
                      {dish.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#101A17] font-medium leading-snug group-hover:text-[#76533B] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#101A17]/75 font-light leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {dish.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] uppercase tracking-wider text-[#76533B] bg-[#F5F0E6] px-2 py-0.5 rounded-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectForReservation(dish.name)}
                  className="w-full py-3.5 min-h-[46px] bg-[#101A17] hover:bg-[#19241F] text-[#FAF7F0] hover:text-[#C6A56A] text-xs uppercase tracking-[0.16em] font-bold rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Reserve Table For This Dish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Editorial Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-sm bg-[#19241F] text-[#FAF7F0] border border-[#C6A56A]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C6A56A]/15 border border-[#C6A56A]/30 flex items-center justify-center text-[#C6A56A] shrink-0 mt-1 sm:mt-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#FAF7F0]">
                Looking for Continental & European Specialties?
              </h4>
              <p className="text-xs sm:text-sm text-[#B9B5A9] font-light mt-1">
                From tender Mutton Chops in Pepper Sauce (₹580) to Paneer Shashlik (₹420) and Chicken Alfredo (₹490).
              </p>
            </div>
          </div>

          <button
            onClick={onExploreFullMenu}
            className="w-full md:w-auto px-6 py-3 min-h-[44px] bg-[#C6A56A] hover:bg-[#DFCA9B] text-[#101A17] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow text-center"
          >
            Explore Continental
          </button>
        </div>
      </div>
    </section>
  );
};
