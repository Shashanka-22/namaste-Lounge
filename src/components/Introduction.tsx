import React from 'react';
import { Sparkles, Compass, Heart, ArrowRight } from 'lucide-react';

interface IntroductionProps {
  onReserveClick: () => void;
  onExploreExperience: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  onReserveClick,
  onExploreExperience,
}) => {
  return (
    <section id="introduction" className="py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#19241F] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Layered Photography */}
          <div className="lg:col-span-7 relative group">
            {/* Main Entrance Image */}
            <div className="relative overflow-hidden rounded-sm border border-[#C6A56A]/25 bg-[#19241F] shadow-2xl">
              <img
                src="/assets/restaurant/photo_1.jpg"
                alt="Tropical entrance of Namaste Lounge along Dr Pundlik Gaitonde Road in Palolem Goa"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Detail Card: Handcrafted Teakwood Namaste Emblem */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-52 rounded-sm border-2 border-[#C6A56A]/35 overflow-hidden shadow-2xl bg-[#19241F]">
              <img
                src="/assets/restaurant/photo_11.jpg"
                alt="Iconic teakwood Namaste carving with peacock feather on palm trunk"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Location Tag */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-sm bg-[#101A17]/85 backdrop-blur-md border border-[#C6A56A]/30 text-[11px] uppercase tracking-widest text-[#C6A56A] font-semibold">
              Dr Pundlik Gaitonde Rd · Mohanbagh
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>The Goan Escape</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF7F0] font-normal leading-[1.12] text-balance">
              An Escape Worth <br />
              <span className="italic font-light text-[#C6A56A]">Experiencing.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#B9B5A9] font-light leading-relaxed">
              <p>
                Tucked away in the tranquil palm groves of Palolem, South Goa, <strong>Namaste Lounge</strong> is designed as a sanctuary from the bustle of the beach. 
              </p>
              <p>
                Here, open-air breezes drift through lush foliage while iron tawas sizzle with the morning’s freshest Arabian catch. From hand-rolled stone-baked pizzas to chilled craft cocktails and soulful acoustic chords, every hour spent here is an invitation to unwind deeply.
              </p>
            </div>

            {/* Highlights List */}
            <div className="mt-8 pt-6 border-t border-[#C6A56A]/15 grid grid-cols-2 gap-4 text-xs uppercase tracking-wider text-[#FAF7F0]/85 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A]" />
                <span>Open-Air Coconut Grove</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A]" />
                <span>Daily Fresh Seafood</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A]" />
                <span>Soulful Live Acoustics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56A]" />
                <span>11 Cocktails at ₹380</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onExploreExperience}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C6A56A] hover:text-[#DFCA9B] font-semibold transition-colors group cursor-pointer"
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
