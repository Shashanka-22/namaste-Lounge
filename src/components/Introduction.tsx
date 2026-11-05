import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';

interface IntroductionProps {
  onReserveClick: () => void;
  onExploreExperience: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  onExploreExperience,
}) => {
  return (
    <section id="introduction" className="py-16 sm:py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#19241F] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Layered Photography */}
          <div className="lg:col-span-7 relative group">
            {/* Main Entrance Image */}
            <div className="relative overflow-hidden rounded-sm border border-[#C6A56A]/25 bg-[#19241F] shadow-2xl">
              <img
                src="/assets/restaurant/photo_1.jpg"
                alt="Tropical entrance of Namaste Lounge along Dr Pundlik Gaitonde Road in Palolem Goa"
                className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Detail Card: Handcrafted Teakwood Namaste Emblem */}
            <div className="hidden sm:block absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 w-36 h-36 md:w-52 md:h-52 rounded-sm border-2 border-[#C6A56A]/35 overflow-hidden shadow-2xl bg-[#19241F]">
              <img
                src="/assets/restaurant/photo_11.jpg"
                alt="Iconic teakwood Namaste carving with peacock feather on palm trunk"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Location Tag */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-sm bg-[#101A17]/90 backdrop-blur-md border border-[#C6A56A]/30 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C6A56A] font-semibold">
              Dr Pundlik Gaitonde Rd · Mohanbagh
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-5 lg:pl-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#C6A56A] font-semibold mb-3 sm:mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>The Goan Escape</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-[1.14] text-balance">
              An Escape Worth <br />
              <span className="italic font-light text-[#C6A56A]">Experiencing.</span>
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-[#B9B5A9] font-light leading-relaxed">
              <p>
                Tucked away in the tranquil palm groves of Palolem, South Goa, <strong>Namaste Lounge</strong> is designed as a sanctuary from the bustle of the beach. 
              </p>
              <p>
                Here, open-air breezes drift through lush foliage while iron tawas sizzle with the morning’s freshest Arabian catch. From hand-rolled stone-baked pizzas to chilled craft cocktails and soulful acoustic chords, every hour spent here is an invitation to unwind deeply.
              </p>
            </div>

            {/* Highlights List */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#C6A56A]/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 text-xs uppercase tracking-wider text-[#FAF7F0]/85 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A] shrink-0" />
                <span>Open-Air Coconut Grove</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A] shrink-0" />
                <span>Daily Fresh Seafood</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A] shrink-0" />
                <span>Soulful Live Acoustics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A] shrink-0" />
                <span>11 Cocktails at ₹380</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 sm:mt-8 flex items-center gap-4">
              <button
                onClick={onExploreExperience}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#C6A56A] hover:text-[#DFCA9B] font-semibold transition-colors group cursor-pointer min-h-[44px]"
              >
                <span>Discover The Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
