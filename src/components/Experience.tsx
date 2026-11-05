import React from 'react';
import { Waves, Utensils, Music2, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onExploreMenu: () => void;
  onReserveClick: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onExploreMenu, onReserveClick }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-[#19241F] text-[#FAF7F0] relative overflow-hidden border-t border-[#C6A56A]/15">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#101A17] rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#C6A56A]" />
            <span>The Three Pillars</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-[1.12] text-balance">
            Not Just a Place to Eat. <br />
            <span className="italic font-light text-[#C6A56A]">A Place to Feel.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#B9B5A9] font-light leading-relaxed">
            We believe dining in Goa should engage every sense—the aroma of coastal spices, the warmth of lantern light, and the gentle rhythm of acoustic melodies under the night sky.
          </p>
        </div>

        {/* 01: THE AMBIENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-28 md:mb-36">
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded-sm border border-[#C6A56A]/25 bg-[#101A17] shadow-2xl">
              <img
                src="/assets/restaurant/photo_2.jpg"
                alt="Open-air lounge interior at Namaste Lounge Palolem Goa"
                className="w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Detail: Handcrafted Emblem - hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-40 sm:w-48 h-40 sm:h-48 rounded-sm border-2 border-[#C6A56A]/35 overflow-hidden shadow-2xl bg-[#101A17]">
              <img
                src="/assets/restaurant/photo_11.jpg"
                alt="Namaste teakwood emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <span className="font-serif text-4xl sm:text-5xl text-[#C6A56A]/35 font-light italic block mb-2">
              01
            </span>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C6A56A] font-semibold mb-2.5">
              <Waves className="w-3.5 h-3.5" />
              <span>The Ambience</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] mb-4 sm:mb-5 leading-snug">
              Tropical Sanctuary & Soulful Aesthetics
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#B9B5A9] leading-relaxed font-light mb-5 sm:mb-6">
              A serene open-air haven wrapped in natural Goan coconut palms, golden fairy lights, woven cane chairs, and vibrant cushioned nooks. Handcrafted wooden sculptures, a sacred brass Buddha, and the whisper of sea breeze create an effortless sanctuary to kick off your sandals and stay awhile.
            </p>
            <div className="pt-4 border-t border-[#C6A56A]/15 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-[#FAF7F0]/70 font-sans tracking-wide">
              <span>Open-Air Coconut Grove</span>
              <span>·</span>
              <span>Lush Garden Seating</span>
              <span>·</span>
              <span>Warm Ambient Glow</span>
            </div>
          </div>
        </div>

        {/* 02: THE FLAVOURS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-28 md:mb-36">
          <div className="lg:col-span-5 lg:order-1 order-2 lg:pr-4">
            <span className="font-serif text-4xl sm:text-5xl text-[#C6A56A]/35 font-light italic block mb-2">
              02
            </span>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C6A56A] font-semibold mb-2.5">
              <Utensils className="w-3.5 h-3.5" />
              <span>The Flavours</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] mb-4 sm:mb-5 leading-snug">
              Coastal Heritage Meets Global Dining
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#B9B5A9] leading-relaxed font-light mb-5 sm:mb-6">
              From fresh morning catch straight off the Palolem boats—Kingfish, Jumbo Prawns, and Calamari fried crisp in golden semolina or tossed in recheado spices—to stone-baked pizzas, slow-simmered Sukha, and classic European continental favourites. Every recipe is prepared fresh to order.
            </p>
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C6A56A] hover:text-[#DFCA9B] font-semibold transition-colors group cursor-pointer py-2 min-h-[44px]"
            >
              <span>Explore Chef’s Specialities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:col-span-7 lg:order-2 order-1 relative group">
            <div className="relative overflow-hidden rounded-sm border border-[#C6A56A]/25 bg-[#101A17] shadow-2xl">
              <img
                src="/assets/restaurant/photo_8.jpg"
                alt="Authentic Goan seafood feast at Namaste Lounge with grilled fish, rawa prawns, and curry"
                className="w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-50" />
            </div>

            {/* Overlapping Pizza Plate - hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-44 sm:w-52 h-36 sm:h-44 rounded-sm border border-[#C6A56A]/35 overflow-hidden shadow-2xl bg-[#101A17]">
              <img
                src="/assets/aistudio/image_642dc875.png"
                alt="Wood-fired pizza and cocktails"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 03: THE EVENINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded-sm border border-[#C6A56A]/25 bg-[#101A17] shadow-2xl">
              <img
                src="/assets/restaurant/photo_20.jpg"
                alt="Live acoustic musical performance at Namaste Lounge in Palolem Goa"
                className="w-full h-[260px] sm:h-[400px] md:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Cocktails floating tag */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs p-3 sm:p-4 rounded-sm bg-[#101A17]/95 backdrop-blur-md border border-[#C6A56A]/35 shadow-2xl">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/image_ab3f505e.png"
                  alt="Cocktails at Namaste Lounge"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm object-cover border border-[#C6A56A]/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-semibold text-[#FAF7F0]">The Lounge Collection</p>
                  <p className="text-[11px] text-[#C6A56A] font-mono tabular-nums">11 Signature Cocktails • ₹380</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <span className="font-serif text-4xl sm:text-5xl text-[#C6A56A]/35 font-light italic block mb-2">
              03
            </span>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C6A56A] font-semibold mb-2.5">
              <Music2 className="w-3.5 h-3.5" />
              <span>The Evenings</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] mb-4 sm:mb-5 leading-snug">
              Cocktails, Soulful Notes & Unforgettable Nights
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#B9B5A9] leading-relaxed font-light mb-5 sm:mb-6">
              When dusk settles over Canacona, Namaste Lounge awakens. Talented local and traveling musicians bring warm acoustic strings and timeless anthems to our stage. Savor a chilled Negroni or tropical Blue Lagoon while conversing into the starry coastal night.
            </p>
            <button
              onClick={onReserveClick}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] bg-[#C6A56A] hover:bg-[#DFCA9B] text-[#101A17] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all duration-200 cursor-pointer shadow-md text-center"
            >
              Reserve An Evening Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
