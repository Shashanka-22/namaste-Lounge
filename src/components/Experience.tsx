import React from 'react';
import { Sparkles, Utensils, Music, Waves, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onExploreMenu: () => void;
  onReserveClick: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onExploreMenu, onReserveClick }) => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#171714] text-[#F5F0E6] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#243A30]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold mb-4">
            <span className="w-6 h-[1px] bg-[#C8A96B]" />
            <span>The Namaste Lounge Concept</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F0E6] font-normal leading-[1.15] text-balance">
            Not Just a Place to Eat. <br />
            <span className="italic font-light text-[#C8A96B]">A Place to Feel.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#F5F0E6]/70 font-light leading-relaxed">
            Step off the sun-kissed sands of Palolem and into a secluded open-air oasis. We blend the laid-back warmth of coastal South Goa with culinary precision and intimate evening vibes.
          </p>
        </div>

        {/* Experience 01: The Ambience (Asymmetric Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 md:mb-36">
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded border border-[#C8A96B]/20 bg-[#1D1D19]">
              <img
                src="/assets/aistudio/image_9e31e09d.png"
                alt="Open-air lounge interior at Namaste Lounge with illuminated coconut trees and plush seating"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Detail Vignette */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded border-2 border-[#C8A96B]/30 overflow-hidden shadow-2xl bg-[#1D1D19]">
              <img
                src="/assets/aistudio/image_5914e6c0.png"
                alt="Iconic wooden Namaste emblem carved on coconut trunk"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <span className="font-serif text-4xl md:text-5xl text-[#C8A96B]/40 font-light italic block mb-2">
              01
            </span>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-semibold mb-3">
              <Waves className="w-3.5 h-3.5" />
              <span>The Ambience</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F0E6] mb-5 leading-snug">
              Tropical Sanctuary & Soulful Aesthetics
            </h3>
            <p className="text-[#F5F0E6]/75 leading-relaxed font-light mb-6">
              A serene open-air haven wrapped in natural Goan coconut palms, golden fairy lights, woven cane chairs, and vibrant cushioned nooks. Handcrafted wooden sculptures, a sacred brass Buddha, and the whisper of sea breeze create an effortless sanctuary to kick off your sandals and stay awhile.
            </p>
            <div className="pt-4 border-t border-[#C8A96B]/15 flex items-center gap-6 text-xs text-[#F5F0E6]/60 font-sans tracking-wide">
              <span>Open-Air Coconut Grove</span>
              <span>·</span>
              <span>Lush Garden Seating</span>
              <span>·</span>
              <span>Warm Ambient Glow</span>
            </div>
          </div>
        </div>

        {/* Experience 02: The Flavours (Reversed Asymmetric Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 md:mb-36">
          <div className="lg:col-span-5 lg:order-1 order-2 lg:pr-6">
            <span className="font-serif text-4xl md:text-5xl text-[#C8A96B]/40 font-light italic block mb-2">
              02
            </span>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-semibold mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>The Flavours</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F0E6] mb-5 leading-snug">
              Coastal Heritage Meets Global Dining
            </h3>
            <p className="text-[#F5F0E6]/75 leading-relaxed font-light mb-6">
              From fresh morning catch straight off the Palolem boats—Kingfish, Jumbo Prawns, and Calamari fried crisp in golden semolina or tossed in recheado spices—to stone-baked pizzas, slow-simmered Sukha, and classic European continental favourites. Every recipe is prepared fresh to order.
            </p>
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C8A96B] hover:text-[#D8BD83] font-semibold transition-colors group cursor-pointer"
            >
              <span>Explore Chef’s Specialities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:col-span-7 lg:order-2 order-1 relative group">
            <div className="relative overflow-hidden rounded border border-[#C8A96B]/20 bg-[#1D1D19]">
              <img
                src="/assets/aistudio/image_642dc875.png"
                alt="Artisanal dining at Namaste Lounge with pizza and tropical cocktails"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-transparent to-transparent opacity-50" />
            </div>

            {/* Overlapping Food Showcase */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-52 h-44 rounded border border-[#C8A96B]/30 overflow-hidden shadow-2xl bg-[#1D1D19]">
              <img
                src="/assets/aistudio/image_77b998f1.png"
                alt="Club sandwiches and fresh fruit juices at Namaste Lounge"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Experience 03: The Evenings (Heroic Wide Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded border border-[#C8A96B]/20 bg-[#1D1D19]">
              <img
                src="/assets/aistudio/image_7820af9a.png"
                alt="Live acoustic musical performance at Namaste Lounge Palolem"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-transparent to-transparent opacity-60" />
            </div>

            {/* Cocktails Floating Tag */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs p-4 rounded bg-[#171714]/90 backdrop-blur-md border border-[#C8A96B]/30 shadow-xl">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/image_ab3f505e.png"
                  alt="Cocktail pair"
                  className="w-12 h-12 rounded object-cover border border-[#C8A96B]/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-semibold text-[#F5F0E6]">The Lounge Collection</p>
                  <p className="text-[11px] text-[#C8A96B] font-mono tabular-nums">11 Signature Cocktails • ₹380</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <span className="font-serif text-4xl md:text-5xl text-[#C8A96B]/40 font-light italic block mb-2">
              03
            </span>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-semibold mb-3">
              <Music className="w-3.5 h-3.5" />
              <span>The Evenings</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F0E6] mb-5 leading-snug">
              Cocktails, Soulful Notes & Unforgettable Nights
            </h3>
            <p className="text-[#F5F0E6]/75 leading-relaxed font-light mb-6">
              When dusk settles over Canacona, Namaste Lounge awakens. Talented local and traveling musicians bring warm acoustic strings and timeless anthems to our stage. Savor a chilled Negroni or tropical Blue Lagoon while conversing into the starry coastal night.
            </p>
            <button
              onClick={onReserveClick}
              className="px-6 py-3 bg-[#C8A96B] hover:bg-[#D8BD83] text-[#171714] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer shadow-md"
            >
              Reserve An Evening Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
