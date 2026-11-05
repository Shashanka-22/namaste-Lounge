import React from 'react';
import { Heart, Compass, Music2, Users, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#171714] text-[#F5F0E6] relative border-t border-[#C8A96B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#C8A96B]/25 bg-[#1D1D19] shadow-2xl">
              <img
                src="/assets/aistudio/image_b57bd092.png"
                alt="Tropical entrance of Namaste Lounge in Palolem, Goa"
                className="w-full h-[480px] sm:h-[560px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 max-w-xs p-6 rounded-lg bg-[#22221E] border border-[#C8A96B]/40 shadow-2xl backdrop-blur-md">
              <p className="font-serif text-2xl text-[#C8A96B] font-medium italic">
                "Atithi Devo Bhava"
              </p>
              <p className="mt-2 text-xs text-[#F5F0E6]/80 font-light leading-relaxed">
                The guest is sacred. Here in Palolem, we welcome every traveler and local family as our honored guest.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Philosophy & Roots</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F0E6] font-normal leading-[1.15] text-balance">
              Rooted in Hospitality. <br />
              <span className="italic font-light text-[#C8A96B]">Made for Beautiful Moments.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#F5F0E6]/75 font-light leading-relaxed">
              <p>
                Tucked into the lush green embrace of Dr Pundlik Gaitonde Road in Palolem, <strong>Namaste Lounge</strong> was founded with a singular, timeless vision: to offer a sanctuary where the authentic soul of Goa could be celebrated through extraordinary food, genuine human warmth, and unhurried evenings.
              </p>
              <p>
                Whether you arrive straight from watching the Palolem sunset, gather with family for a multi-course seafood banquet, or linger over cold Negronis while listening to live acoustic guitar, our lounge is designed for you to slow down, breathe, and unwind.
              </p>
            </div>

            {/* Highlight Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 border-t border-[#C8A96B]/15">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F0E6]">Authentic Coastal Seafood</h3>
                  <p className="text-xs text-[#F5F0E6]/60 mt-0.5">Local Kingfish, Mackerel & Prawns prepared to your taste.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F0E6]">Family & Group Friendly</h3>
                  <p className="text-xs text-[#F5F0E6]/60 mt-0.5">Comfortable cushioned seating for couples, friends & large families.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <Music2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F0E6]">Live Acoustic Evenings</h3>
                  <p className="text-xs text-[#F5F0E6]/60 mt-0.5">Soulful musicians and great conversations beneath fairy lights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F0E6]">Handcrafted Spirits & Dining</h3>
                  <p className="text-xs text-[#F5F0E6]/60 mt-0.5">Freshly squeezed fruit mixers, artisanal pizzas & continental fare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
