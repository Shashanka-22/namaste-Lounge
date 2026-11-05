import React from 'react';
import { ArrowDown, Star, Compass, Wine, Music2 } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden bg-[#101A17]">
      {/* High-Resolution Real Ambience Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/restaurant/photo_2.jpg"
          alt="Namaste Lounge open-air sanctuary with illuminated palms and plush seating in Palolem Goa"
          className="w-full h-full object-cover object-[center_30%] sm:object-center scale-105 filter brightness-[0.62] contrast-[1.08] transition-transform duration-[12000ms] ease-out"
          style={{ transform: 'scale(1.08)' }}
          referrerPolicy="no-referrer"
        />
        {/* Subtle Dark Overlays for Optimal Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-[#101A17]/70 to-[#101A17]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#101A17_85%)] opacity-85" />
      </div>

      {/* Decorative Subtle Ambient Ornaments */}
      <div className="absolute top-1/4 right-8 w-72 sm:w-96 h-72 sm:h-96 bg-[#C6A56A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-8 w-64 sm:w-80 h-64 sm:h-80 bg-[#19241F]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-14 text-center flex-1 flex flex-col justify-center items-center">
        {/* Minimal Uppercase Label */}
        <div className="inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.24em] sm:tracking-[0.32em] uppercase text-[#C6A56A] mb-4 sm:mb-6">
          <span className="w-5 sm:w-8 h-[1px] bg-[#C6A56A]/60" />
          <span>Palolem · Goa · The Goan Escape</span>
          <span className="w-5 sm:w-8 h-[1px] bg-[#C6A56A]/60" />
        </div>

        {/* Editorial Serif Headline with Fluid Clamp */}
        <h1
          className="font-serif tracking-tight text-[#FAF7F0] font-normal leading-[1.12] sm:leading-[1.08] max-w-4xl text-balance"
          style={{ fontSize: 'clamp(2.2rem, 5.5vw + 0.8rem, 5.25rem)' }}
        >
          Escape the Ordinary. <br />
          <span className="italic font-light text-[#C6A56A]">Stay for the Experience.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-[#FAF7F0]/85 max-w-2xl font-light leading-relaxed px-1 sm:px-0">
          Discover exceptional flavours, beautiful surroundings, and unforgettable evenings at{' '}
          <strong className="text-[#FAF7F0] font-medium">Namaste Lounge</strong>. Where the relaxed spirit of South Goa meets artisanal dining and cocktails under the palms.
        </p>

        {/* Primary and Secondary Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C6A56A] hover:bg-[#DFCA9B] text-[#101A17] text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold transition-all duration-300 shadow-xl hover:shadow-[#C6A56A]/25 active:scale-95 text-center cursor-pointer rounded-sm min-h-[48px] flex items-center justify-center"
          >
            Explore The Menu
          </button>
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-[#C6A56A]/75 hover:border-[#C6A56A] text-[#FAF7F0] hover:text-[#C6A56A] bg-[#101A17]/60 hover:bg-[#101A17]/85 backdrop-blur-md text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-300 text-center cursor-pointer rounded-sm min-h-[48px] flex items-center justify-center"
          >
            Reserve Your Table
          </button>
        </div>

        {/* Brand Tagline */}
        <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs tracking-widest uppercase text-[#FAF7F0]/50 font-serif italic">
          "Where Flavours Meet Beautiful Moments"
        </p>
      </div>

      {/* Trust & Highlights Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-lg bg-[#19241F]/90 border border-[#C6A56A]/20 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2.5 sm:gap-3 p-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#C6A56A]/15 flex items-center justify-center text-[#C6A56A] shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C6A56A]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-[#FAF7F0] tabular-nums truncate">4.7 / 5.0 Rating</p>
              <p className="text-[10px] sm:text-xs text-[#FAF7F0]/60 truncate">788 Google Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#C6A56A]/15 flex items-center justify-center text-[#C6A56A] shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-[#FAF7F0] truncate">Fresh Arabian Catch</p>
              <p className="text-[10px] sm:text-xs text-[#FAF7F0]/60 truncate">Kingfish, Mackerel & Prawns</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#C6A56A]/15 flex items-center justify-center text-[#C6A56A] shrink-0">
              <Wine className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-[#FAF7F0] tabular-nums truncate">Cocktails at ₹380</p>
              <p className="text-[10px] sm:text-xs text-[#FAF7F0]/60 truncate">11 Handcrafted Classics</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#C6A56A]/15 flex items-center justify-center text-[#C6A56A] shrink-0">
              <Music2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-[#FAF7F0] truncate">Live Acoustic Sessions</p>
              <p className="text-[10px] sm:text-xs text-[#FAF7F0]/60 truncate">Evening Music & Camaraderie</p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <a
            href="#introduction"
            aria-label="Scroll to introduction"
            className="flex flex-col items-center gap-1 text-[#C6A56A]/75 hover:text-[#C6A56A] transition-colors group cursor-pointer"
          >
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to Explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
