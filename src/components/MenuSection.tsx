import React, { useState, useMemo } from 'react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuItem,
  MenuCategoryType
} from '../data/menuData';
import {
  Utensils,
  Search,
  Fish,
  Wine,
  Sparkles,
  CalendarCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface MenuSectionProps {
  onSelectForReservation: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectForReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCocktail, setExpandedCocktail] = useState<string | null>(null);

  const activeCategoryMeta = useMemo(() => {
    return MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all') {
        if (!item.tags.includes(activeCategory)) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description?.toLowerCase().includes(q);
        const matchIng = item.ingredients?.some((ing) => ing.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchIng) return false;
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 md:py-32 bg-[#19241F] text-[#FAF7F0] relative border-t border-[#C6A56A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Digital Culinary Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-[1.1]">
            The Complete Menu
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#B9B5A9] font-light leading-relaxed">
            Authentic coastal Goan recipes, slow-roasted dry masalas, classic European continental steaks, and handcrafted cocktails.
          </p>
        </div>

        {/* Category Tabs: Horizontally scrollable on mobile */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center sm:justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 max-w-4xl mx-auto rounded-sm bg-[#101A17] border border-[#C6A56A]/20 mb-6 sm:mb-8">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-sm text-xs uppercase tracking-[0.12em] font-semibold transition-all duration-200 cursor-pointer text-center whitespace-nowrap min-h-[42px] flex items-center justify-center ${
                  isActive
                    ? 'bg-[#C6A56A] text-[#101A17] shadow-md font-bold'
                    : 'text-[#FAF7F0]/70 hover:text-[#FAF7F0] hover:bg-[#19241F]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Subtitle Strip */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="text-xs text-[#B9B5A9] tracking-wide flex items-center justify-between sm:justify-start">
            <span>{activeCategoryMeta.subtitle}</span>
            <span className="mx-2 hidden sm:inline">·</span>
            <span className="text-[#C6A56A] font-mono tabular-nums">{filteredItems.length} items</span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#C6A56A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, fish, ingredients..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-xs sm:text-sm text-[#FAF7F0] placeholder:text-[#FAF7F0]/40 focus:outline-none focus:border-[#C6A56A] transition-colors"
            />
          </div>
        </div>

        {/* Platter Notice Card (when viewing seafood / fish fry / prawns) */}
        {(activeCategory === 'seafood' || activeCategory === 'fish-fry' || activeCategory === 'prawns') && (
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-sm border border-[#C6A56A]/30 bg-[#101A17]/80 backdrop-blur-sm flex items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <Fish className="w-5 h-5 text-[#C6A56A] shrink-0" />
              <p className="text-xs text-[#FAF7F0]/85">
                <strong>Seafood Platters:</strong> A grand tasting feast combining <strong className="text-[#C6A56A]">Tawa Fry</strong>, <strong className="text-[#C6A56A]">Rawa Fry</strong>, and <strong className="text-[#C6A56A]">Butter Garlic Fry</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Menu Items List */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#101A17] rounded-sm border border-[#C6A56A]/20 px-4">
              <p className="text-sm text-[#B9B5A9]">No dishes match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs text-[#C6A56A] underline uppercase tracking-wider cursor-pointer"
              >
                Reset Menu Filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isCocktail = item.category === 'cocktails';
              const isExpanded = expandedCocktail === item.id;

              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-5 rounded-sm transition-all duration-300 border ${
                    item.isPlatter
                      ? 'border-[#C6A56A]/60 bg-gradient-to-r from-[#101A17] via-[#1D251F] to-[#101A17] shadow-lg'
                      : 'border-[#C6A56A]/15 bg-[#101A17]/70 hover:border-[#C6A56A]/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Dietary Marker */}
                        {item.dietary === 'veg' && (
                          <span className="w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-0.5" title="Vegetarian">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </span>
                        )}
                        {item.dietary === 'seafood' && (
                          <span title="Seafood">
                            <Fish className="w-3.5 h-3.5 text-[#C6A56A]" />
                          </span>
                        )}
                        {item.dietary === 'non-veg' && (
                          <span className="w-3.5 h-3.5 border border-rose-500 flex items-center justify-center p-0.5" title="Non-Vegetarian">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          </span>
                        )}

                        <h3 className="font-serif text-lg sm:text-2xl text-[#FAF7F0] font-medium tracking-wide">
                          {item.name}
                        </h3>

                        {item.signature && (
                          <span className="text-[10px] uppercase tracking-wider text-[#C6A56A] bg-[#C6A56A]/10 px-2 py-0.5 rounded-sm border border-[#C6A56A]/30">
                            Signature
                          </span>
                        )}
                        {item.isPlatter && (
                          <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-sm border border-emerald-500/30 font-semibold">
                            Grand Tasting Platter
                          </span>
                        )}
                      </div>

                      {item.description && (
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#B9B5A9] font-light leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Ingredients Drawer for Cocktails */}
                      {isCocktail && item.ingredients && (
                        <div className="mt-2.5 sm:mt-3">
                          <button
                            onClick={() => setExpandedCocktail(isExpanded ? null : item.id)}
                            className="text-xs text-[#C6A56A] hover:text-[#DFCA9B] flex items-center gap-1.5 cursor-pointer font-medium min-h-[44px]"
                          >
                            <span>{isExpanded ? 'Hide Botanical Recipe' : 'View Botanical Ingredients'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          {isExpanded && (
                            <div className="mt-2 pt-2 border-t border-[#C6A56A]/20 flex flex-wrap gap-1.5 animate-fadeIn">
                              {item.ingredients.map((ing, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] text-[#FAF7F0]/80 bg-[#19241F] px-2.5 py-1 rounded-sm border border-[#C6A56A]/20"
                                >
                                  {ing}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Price & Action */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2.5 pt-2 sm:pt-0 border-t border-[#C6A56A]/10 sm:border-0 shrink-0">
                      <span className="font-serif text-xl sm:text-2xl text-[#C6A56A] font-semibold tabular-nums">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => onSelectForReservation(item.name)}
                        className="text-[11px] uppercase tracking-wider text-[#FAF7F0]/70 hover:text-[#C6A56A] flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-2.5 sm:p-0 rounded-sm bg-[#19241F]/60 sm:bg-transparent min-h-[36px]"
                        title={`Reserve table with ${item.name}`}
                      >
                        <CalendarCheck className="w-3.5 h-3.5 text-[#C6A56A]" />
                        <span>Reserve Dish</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Regulatory note */}
        <div className="mt-14 text-center text-xs text-[#B9B5A9]/70 max-w-xl mx-auto space-y-1">
          <p>All prices are in Indian Rupees (₹) exactly as presented on the restaurant menu.</p>
          <p>Fresh catch is subject to daily boat landings in Canacona, South Goa.</p>
        </div>
      </div>
    </section>
  );
};
