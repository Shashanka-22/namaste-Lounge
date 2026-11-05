import React, { useState, useMemo } from 'react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuItem,
  MenuCategoryMeta
} from '../data/menuData';
import {
  Utensils,
  Wine,
  Fish,
  Sparkles,
  Search,
  ChevronDown,
  ChevronUp,
  Flame,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface MenuSectionProps {
  onSelectForReservation: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectForReservation }) => {
  const [activeCategory, setActiveCategory] = useState<'seafood' | 'continental' | 'sukha' | 'cocktails'>('seafood');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCocktail, setExpandedCocktail] = useState<string | null>(null);

  const currentCategoryMeta = useMemo(() => {
    return MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];
  }, [activeCategory]);

  // Extract unique subcategories for Seafood
  const seafoodSubcategories = useMemo(() => {
    const subs = new Set<string>();
    MENU_ITEMS.filter((i) => i.category === 'seafood').forEach((i) => {
      if (i.subCategory) subs.add(i.subCategory);
    });
    return Array.from(subs);
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (item.category !== activeCategory) return false;

      // Subcategory filter (only applicable for seafood)
      if (
        activeCategory === 'seafood' &&
        selectedSubCategory !== 'all' &&
        item.subCategory !== selectedSubCategory
      ) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description?.toLowerCase().includes(q);
        const matchIng = item.ingredients?.some((ing) => ing.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchIng) return false;
      }

      return true;
    });
  }, [activeCategory, selectedSubCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#171714] text-[#F5F0E6] relative border-t border-[#C8A96B]/15">
      {/* Decorative backdrop */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Digital Culinary Journal</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F0E6] font-normal leading-[1.1] text-balance">
            The Signature Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/75 font-light">
            Crafted with locally sourced Goan ingredients, freshly caught Arabian Sea fish, and authentic coastal spices.
          </p>
        </div>

        {/* Category Tabs: Functional Segmented Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 max-w-2xl mx-auto rounded-lg bg-[#22221E] border border-[#C8A96B]/20 mb-10">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSubCategory('all');
                }}
                className={`flex-1 min-w-[120px] sm:min-w-0 py-2.5 px-4 rounded text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C8A96B] text-[#171714] shadow-md'
                    : 'text-[#F5F0E6]/70 hover:text-[#F5F0E6] hover:bg-[#2A2A25]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sub-Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Subcategories (if seafood) */}
          {activeCategory === 'seafood' ? (
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs text-[#C8A96B] uppercase tracking-wider font-semibold mr-1">
                Fish:
              </span>
              <button
                onClick={() => setSelectedSubCategory('all')}
                className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#C8A96B]/20 text-[#C8A96B] border border-[#C8A96B]/40 font-semibold'
                    : 'text-[#F5F0E6]/60 hover:text-[#F5F0E6]'
                }`}
              >
                All Seafood
              </button>
              {seafoodSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                    selectedSubCategory === sub
                      ? 'bg-[#C8A96B]/20 text-[#C8A96B] border border-[#C8A96B]/40 font-semibold'
                      : 'text-[#F5F0E6]/60 hover:text-[#F5F0E6]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-xs text-[#F5F0E6]/60 tracking-wider">
              <span>{currentCategoryMeta.subtitle}</span>
            </div>
          )}

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#C8A96B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-9 pr-4 py-2 bg-[#1D1D19] border border-[#C8A96B]/20 rounded text-xs text-[#F5F0E6] placeholder:text-[#F5F0E6]/40 focus:outline-none focus:border-[#C8A96B] transition-colors"
            />
          </div>
        </div>

        {/* Platter Notice Card (Special attention to seafood platters) */}
        {activeCategory === 'seafood' && (
          <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-lg border border-[#C8A96B]/30 bg-[#243A30]/40 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] shrink-0">
                <Fish className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F0E6]">
                  Signature Seafood Platters
                </h4>
                <p className="text-xs text-[#F5F0E6]/80 mt-0.5">
                  Every platter is a combined feast featuring <strong className="text-[#C8A96B]">Tawa Fry</strong>,{' '}
                  <strong className="text-[#C8A96B]">Rawa Fry</strong>, and{' '}
                  <strong className="text-[#C8A96B]">Butter Garlic Fry</strong> prepared with the day's catch.
                </p>
              </div>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#C8A96B] bg-[#171714]/80 px-3 py-1 rounded border border-[#C8A96B]/30 whitespace-nowrap">
              Chef’s Grand Tasting
            </span>
          </div>
        )}

        {/* Cocktails Header Notice */}
        {activeCategory === 'cocktails' && (
          <div className="max-w-4xl mx-auto mb-10 p-5 rounded-lg border border-[#C8A96B]/30 bg-gradient-to-r from-[#1D1D19] via-[#2D2418]/60 to-[#1D1D19] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C8A96B]/20 flex items-center justify-center text-[#C8A96B] shrink-0">
                <Wine className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#F5F0E6]">The Lounge Collection</p>
                <p className="text-xs text-[#F5F0E6]/70">
                  Every signature cocktail is handcrafted to order and priced at a uniform{' '}
                  <strong className="text-[#C8A96B] font-mono tabular-nums">₹380</strong>.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C8A96B] bg-[#171714] px-3.5 py-1.5 rounded border border-[#C8A96B]/30 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click any cocktail to view botanical recipes</span>
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="max-w-4xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#1D1D19] rounded-lg border border-[#C8A96B]/15">
              <p className="text-sm text-[#F5F0E6]/60">No menu items match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubCategory('all');
                }}
                className="mt-4 text-xs text-[#C8A96B] underline uppercase tracking-wider cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => {
                const isCocktail = item.category === 'cocktails';
                const isExpanded = expandedCocktail === item.id;

                return (
                  <div
                    key={item.id}
                    className={`p-5 rounded-lg transition-all duration-300 border ${
                      item.isPlatter
                        ? 'border-[#C8A96B]/50 bg-gradient-to-r from-[#1D1D19] via-[#27231A] to-[#1D1D19] shadow-lg'
                        : isCocktail
                        ? 'border-[#C8A96B]/20 bg-[#1A1A16] hover:border-[#C8A96B]/40'
                        : 'border-[#2D2D27] bg-[#1D1D19]/80 hover:border-[#C8A96B]/30'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          {/* Dietary Tag */}
                          {item.dietary === 'veg' && (
                            <span className="w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-0.5" title="Vegetarian">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            </span>
                          )}
                          {item.dietary === 'seafood' && (
                            <span title="Seafood">
                              <Fish className="w-3.5 h-3.5 text-[#C8A96B]" />
                            </span>
                          )}
                          {item.dietary === 'non-veg' && (
                            <span className="w-3.5 h-3.5 border border-rose-500 flex items-center justify-center p-0.5" title="Non-Vegetarian">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            </span>
                          )}

                          <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E6] font-medium tracking-wide">
                            {item.name}
                          </h3>

                          {item.signature && (
                            <span className="text-[10px] uppercase tracking-wider text-[#C8A96B] bg-[#C8A96B]/10 px-2 py-0.5 rounded border border-[#C8A96B]/30">
                              Lounge Signature
                            </span>
                          )}
                          {item.isPlatter && (
                            <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30 font-semibold">
                              Grand Tasting Platter
                            </span>
                          )}
                        </div>

                        {item.description && (
                          <p className="mt-2 text-xs sm:text-sm text-[#F5F0E6]/75 font-light leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {/* Ingredients preview for Cocktails */}
                        {isCocktail && item.ingredients && (
                          <div className="mt-3">
                            <button
                              onClick={() => setExpandedCocktail(isExpanded ? null : item.id)}
                              className="text-xs text-[#C8A96B] hover:text-[#D8BD83] flex items-center gap-1 cursor-pointer font-medium"
                            >
                              <span>{isExpanded ? 'Hide Recipe Details' : 'View Botanical Ingredients'}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>

                            {isExpanded && (
                              <div className="mt-3 pt-3 border-t border-[#C8A96B]/20 flex flex-wrap gap-2 animate-fadeIn">
                                {item.ingredients.map((ing, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs text-[#F5F0E6]/80 bg-[#171714] px-2.5 py-1 rounded border border-[#C8A96B]/20"
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
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 mt-3 sm:mt-0 shrink-0">
                        <span className="font-serif text-xl sm:text-2xl text-[#C8A96B] font-semibold tabular-nums">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => onSelectForReservation(item.name)}
                          className="text-[11px] uppercase tracking-wider text-[#F5F0E6]/60 hover:text-[#C8A96B] flex items-center gap-1 transition-colors cursor-pointer py-1"
                          title={`Book a table with ${item.name}`}
                        >
                          <CalendarCheck className="w-3.5 h-3.5 text-[#C8A96B]" />
                          <span>Reserve Dish</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Regulatory & Menu Notice */}
        <div className="mt-16 text-center text-xs text-[#F5F0E6]/50 max-w-xl mx-auto space-y-2">
          <p>All prices are listed in Indian Rupees (₹) as on the restaurant menu.</p>
          <p>Alcoholic beverages served only to guests 21 years and above. Please drink responsibly.</p>
        </div>
      </div>
    </section>
  );
};
