import React from 'react';
import { Heart, Compass, Music2, Users, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative border-t border-[#C6A56A]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#C6A56A]/30 bg-[#19241F] shadow-2xl">
              <img
                src="/assets/restaurant/photo_18.jpg"
                alt="Evening glow of Namaste Lounge along Dr Pundlik Gaitonde Road in Palolem Goa"
                className="w-full h-[280px] sm:h-[420px] md:h-[540px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Atithi Devo Bhava Badge - safely constrained on mobile */}
            <div className="relative sm:absolute sm:-bottom-8 sm:right-6 mt-4 sm:mt-0 max-w-full sm:max-w-xs p-4 sm:p-6 rounded-sm bg-[#19241F] border border-[#C6A56A]/40 shadow-2xl backdrop-blur-md">
              <p className="font-serif text-xl sm:text-2xl text-[#C6A56A] font-medium italic">
                "Atithi Devo Bhava"
              </p>
              <p className="mt-1.5 sm:mt-2 text-xs text-[#FAF7F0]/80 font-light leading-relaxed">
                The guest is sacred. Here in Palolem, we welcome every traveler and local family as our honored guest.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-3 sm:mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Roots & Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-[1.12] text-balance">
              Rooted in Hospitality. <br />
              <span className="italic font-light text-[#C6A56A]">Made for Beautiful Moments.</span>
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#B9B5A9] font-light leading-relaxed">
              <p>
                Tucked into the lush green embrace of Dr Pundlik Gaitonde Road in Mohanbagh, Palolem, <strong>Namaste Lounge</strong> was founded with a singular, timeless vision: to offer a sanctuary where the authentic soul of Goa could be celebrated through extraordinary food, genuine human warmth, and unhurried evenings.
              </p>
              <p>
                Whether you arrive straight from watching the Palolem sunset, gather with family for a multi-course seafood banquet, or linger over cold Negronis while listening to live acoustic guitar, our lounge is designed for you to slow down, breathe, and unwind.
              </p>
            </div>

            {/* Highlight Pillars */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-6 sm:pt-8 border-t border-[#C6A56A]/15">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C6A56A]/10 flex items-center justify-center text-[#C6A56A] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#FAF7F0]">Authentic Coastal Seafood</h3>
                  <p className="text-[11px] sm:text-xs text-[#B9B5A9] mt-0.5">Local Kingfish, Mackerel & Prawns prepared to your taste.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C6A56A]/10 flex items-center justify-center text-[#C6A56A] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#FAF7F0]">Family & Group Friendly</h3>
                  <p className="text-[11px] sm:text-xs text-[#B9B5A9] mt-0.5">Comfortable cushioned seating for couples, friends & large families.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C6A56A]/10 flex items-center justify-center text-[#C6A56A] shrink-0 mt-0.5">
                  <Music2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#FAF7F0]">Live Acoustic Evenings</h3>
                  <p className="text-[11px] sm:text-xs text-[#B9B5A9] mt-0.5">Soulful musicians and great conversations beneath fairy lights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C6A56A]/10 flex items-center justify-center text-[#C6A56A] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#FAF7F0]">Handcrafted Spirits & Dining</h3>
                  <p className="text-[11px] sm:text-xs text-[#B9B5A9] mt-0.5">Freshly squeezed fruit mixers, artisanal pizzas & continental fare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
