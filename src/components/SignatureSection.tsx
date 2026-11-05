import React from 'react';
import { Sparkles, GlassWater } from 'lucide-react';

interface SignatureSectionProps {
  onReserveClick: () => void;
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ onReserveClick }) => {
  return (
    <section className="relative py-28 md:py-40 bg-[#171714] overflow-hidden">
      {/* Background Layer with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_ab3f505e.png"
          alt="Signature cocktails and fries at Namaste Lounge evening table"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-[#171714]/60 to-[#171714]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Ornamental Emblem */}
        <div className="w-12 h-12 rounded-full border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] mb-6 backdrop-blur-sm bg-[#171714]/50">
          <Sparkles className="w-5 h-5" />
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96B] font-semibold mb-4">
          Culinary Philosophy & Passion
        </p>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F0E6] font-normal tracking-tight leading-[1.1] text-balance">
          Good Taste Is An <span className="italic font-light text-[#C8A96B]">Experience.</span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-[#F5F0E6]/85 max-w-2xl font-light leading-relaxed">
          From freshly caught Arabian Sea fish seared over seasoned iron tawas to thoughtfully shaken botanical cocktails, every single detail is designed to make your time at Namaste Lounge special.
        </p>

        {/* Supporting Quote Block */}
        <div className="mt-10 py-6 px-8 max-w-xl mx-auto rounded border-y border-[#C8A96B]/25 bg-[#171714]/60 backdrop-blur-md">
          <p className="font-serif italic text-lg sm:text-xl text-[#C8A96B]">
            "We believe that a relaxed mind tastes better food, hears sweeter music, and holds deeper conversations."
          </p>
          <span className="block mt-2 text-xs uppercase tracking-widest text-[#F5F0E6]/60 font-sans">
            — The Namaste Lounge Family
          </span>
        </div>

        <div className="mt-10">
          <button
            onClick={onReserveClick}
            className="px-9 py-4 bg-[#C8A96B] hover:bg-[#D8BD83] text-[#171714] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-2xl hover:shadow-[#C8A96B]/30 active:scale-95 cursor-pointer"
          >
            Reserve Your Evening
          </button>
        </div>
      </div>
    </section>
  );
};
