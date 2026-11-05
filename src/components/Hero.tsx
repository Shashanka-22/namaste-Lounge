import React from 'react';
import { ArrowDown, Sparkles, Star, Wine, Music, Compass } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#171714]">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_642dc875.png"
          alt="Namaste Lounge evening ambience in Palolem, Goa with artisanal pizza, cocktails and fairy-lit coconut trees"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          style={{ animationDuration: '14s' }}
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients & Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-[#171714]/70 to-[#171714]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#171714_85%)] opacity-80" />
      </div>

      {/* Decorative Subtle Ambient Ornaments */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C8A96B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#243A30]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-12 md:pt-16 text-center flex-1 flex flex-col justify-center items-center">
        {/* Subtle Location Label */}
        <div className="inline-flex items-center gap-3 text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-[#C8A96B] mb-6">
          <span className="w-8 h-[1px] bg-[#C8A96B]/50" />
          <span>Palolem · Goa · India</span>
          <span className="w-8 h-[1px] bg-[#C8A96B]/50" />
        </div>

        {/* Editorial Main Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F0E6] font-normal leading-[1.08] max-w-4xl text-balance">
          Some Places <br />
          <span className="italic font-light text-[#C8A96B]">Just Feel Like</span> <br />
          An Escape.
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#F5F0E6]/85 max-w-2xl font-light leading-relaxed">
          Discover exceptional flavours, refreshing handcrafted cocktails, and unforgettable moments at{' '}
          <strong className="text-[#F5F0E6] font-medium">Namaste Lounge</strong>. Where the warmth of Goan hospitality meets the art of unwinding.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-[#C8A96B] hover:bg-[#D8BD83] text-[#171714] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:shadow-[#C8A96B]/25 active:scale-95 text-center cursor-pointer"
          >
            Explore Our Menu
          </a>
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 border border-[#C8A96B]/70 hover:border-[#C8A96B] text-[#F5F0E6] hover:text-[#C8A96B] bg-[#171714]/40 hover:bg-[#171714]/70 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 text-center cursor-pointer"
          >
            Find Your Table
          </button>
        </div>

        {/* Sub-tagline quote */}
        <p className="mt-8 text-xs tracking-widest uppercase text-[#F5F0E6]/50 font-serif italic">
          "Where Every Evening Becomes a Story"
        </p>
      </div>

      {/* Proof Strip / Adjacency Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 px-6 rounded-lg glass-card border border-[#C8A96B]/15 bg-[#171714]/85">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0">
              <Star className="w-5 h-5 fill-[#C8A96B]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F5F0E6] tabular-nums">4.7 / 5.0 Rating</p>
              <p className="text-xs text-[#F5F0E6]/60">788 Google Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F5F0E6]">Fresh Arabian Catch</p>
              <p className="text-xs text-[#F5F0E6]/60">Kingfish, Prawns & Calamari</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F5F0E6] tabular-nums">Cocktails at ₹380</p>
              <p className="text-xs text-[#F5F0E6]/60">Handcrafted Spirits & Juices</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F5F0E6]">Live Acoustic Music</p>
              <p className="text-xs text-[#F5F0E6]/60">Soulful Evening Sessions</p>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#experience"
            aria-label="Scroll to experience"
            className="flex flex-col items-center gap-2 text-[#C8A96B]/70 hover:text-[#C8A96B] transition-colors group cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to Discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
