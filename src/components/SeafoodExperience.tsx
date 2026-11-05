import React from 'react';
import { Fish, Waves, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SeafoodExperienceProps {
  onSelectForReservation: (dishName: string) => void;
  onExploreSeafoodMenu: () => void;
}

export const SeafoodExperience: React.FC<SeafoodExperienceProps> = ({
  onSelectForReservation,
  onExploreSeafoodMenu,
}) => {
  const seafoodSpecials = [
    {
      title: 'Kingfish (Viswon)',
      subtitle: 'The Royal Catch of Goa',
      tawa: '₹460',
      rawa: '₹510',
      butterGarlic: '₹560',
      platter: '₹1,520',
      description: 'Thick, succulent Kingfish steaks pan-seared with house recheado masala or coated in golden semolina crunch.'
    },
    {
      title: 'Fresh Goan Mackerel (Bangda)',
      subtitle: 'Intense Coastal Flavours',
      tawa: '₹300',
      rawa: '₹325',
      butterGarlic: '₹360',
      platter: '₹960',
      description: 'Whole fresh mackerel marinated in aromatic coastal spices, shallow-fried to perfection.'
    },
    {
      title: 'Ocean Calamari (Squid)',
      subtitle: 'Tender & Crispy Rings',
      tawa: '₹400',
      rawa: '₹430',
      butterGarlic: '₹460',
      platter: '₹1,250',
      description: 'Locally landed squid rings prepared in tangy Goan spices, crunchy golden rawa, or aromatic butter garlic.'
    },
    {
      title: 'Coastal Jumbo Prawns',
      subtitle: 'Sweet Arabian Sea Prawns',
      tawa: '₹400',
      rawa: '₹425',
      butterGarlic: '₹460',
      platter: '₹1,260',
      description: 'Juicy, plump ocean prawns fried crisp or tossed in sizzling recheado masala on an iron tawa.'
    }
  ];

  return (
    <section id="seafood" className="py-16 sm:py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative overflow-hidden border-t border-[#C6A56A]/15">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#19241F] rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-3">
            <Fish className="w-3.5 h-3.5" />
            <span>The Pride of South Goa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-[1.1]">
            Fresh Catch from the Arabian Sea
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#B9B5A9] font-light leading-relaxed">
            Every morning, local fishermen bring in the freshest Kingfish, Mackerel, Calamari, and Prawns. We honour these coastal treasures with time-tested Goan preparations.
          </p>
        </div>

        {/* Feature Split: Real Photography & Platter Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-sm overflow-hidden border border-[#C6A56A]/30 shadow-2xl bg-[#19241F]">
              <img
                src="/assets/restaurant/photo_8.jpg"
                alt="Authentic seafood feast with grilled fish, rawa prawns, and Goan curry at Namaste Lounge"
                className="w-full h-[260px] sm:h-[380px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-transparent to-transparent opacity-50" />
            </div>

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-sm bg-[#101A17]/95 backdrop-blur-md border border-[#C6A56A]/30">
              <p className="text-xs font-semibold text-[#FAF7F0]">Authentic Boat-to-Table Preparation</p>
              <p className="text-[11px] text-[#C6A56A] mt-0.5">Whole tawa grill · Crispy semolina rawa crust · Butter garlic glaze</p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-4 space-y-6">
            <div className="p-5 sm:p-8 rounded-sm bg-[#19241F] border border-[#C6A56A]/30 shadow-xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#C6A56A] font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Grand Tasting Experience</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] mb-3 sm:mb-4">
                Signature Seafood Platters
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B5A9] font-light leading-relaxed mb-5 sm:mb-6">
                Cannot decide on a single style? Our celebrated Seafood Platters feature a luxurious trio of all three preparations—<strong className="text-[#FAF7F0]">Tawa Fry</strong>, <strong className="text-[#FAF7F0]">Rawa Fry</strong>, and <strong className="text-[#FAF7F0]">Butter Garlic Fry</strong>—served on a single bountiful platter with house sides.
              </p>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#FAF7F0]/85 font-mono">
                <div className="p-2 sm:p-2.5 rounded bg-[#101A17] border border-[#C6A56A]/20">
                  <span className="text-[#B9B5A9] block text-[10px] uppercase font-sans">Kingfish Platter</span>
                  <span className="text-[#C6A56A] text-xs sm:text-sm font-semibold tabular-nums">₹1,520</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded bg-[#101A17] border border-[#C6A56A]/20">
                  <span className="text-[#B9B5A9] block text-[10px] uppercase font-sans">Prawns Platter</span>
                  <span className="text-[#C6A56A] text-xs sm:text-sm font-semibold tabular-nums">₹1,260</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded bg-[#101A17] border border-[#C6A56A]/20">
                  <span className="text-[#B9B5A9] block text-[10px] uppercase font-sans">Calamari Platter</span>
                  <span className="text-[#C6A56A] text-xs sm:text-sm font-semibold tabular-nums">₹1,250</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded bg-[#101A17] border border-[#C6A56A]/20">
                  <span className="text-[#B9B5A9] block text-[10px] uppercase font-sans">Mackerel Platter</span>
                  <span className="text-[#C6A56A] text-xs sm:text-sm font-semibold tabular-nums">₹960</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#C6A56A]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={() => onSelectForReservation('Kingfish Seafood Platter')}
                  className="px-6 py-3 min-h-[44px] bg-[#C6A56A] hover:bg-[#DFCA9B] text-[#101A17] text-xs uppercase tracking-[0.16em] font-bold rounded-sm transition-colors cursor-pointer text-center flex items-center justify-center"
                >
                  Reserve Seafood Feast
                </button>
                <button
                  onClick={onExploreSeafoodMenu}
                  className="text-xs uppercase tracking-wider text-[#C6A56A] hover:underline cursor-pointer text-center py-2"
                >
                  Explore All Dishes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards: The 4 Seafood Varieties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {seafoodSpecials.map((fish, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-sm bg-[#19241F] border border-[#C6A56A]/20 hover:border-[#C6A56A]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C6A56A] font-semibold block">
                  {fish.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F0] mt-1 mb-2.5 sm:mb-3">
                  {fish.title}
                </h3>
                <p className="text-xs text-[#B9B5A9] font-light leading-relaxed mb-4 sm:mb-5">
                  {fish.description}
                </p>

                {/* Preparation Pricing Table */}
                <div className="space-y-2 py-3 border-y border-[#C6A56A]/15 text-xs text-[#FAF7F0]/80">
                  <div className="flex justify-between">
                    <span>Tawa Fry</span>
                    <span className="font-mono text-[#C6A56A] tabular-nums">{fish.tawa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rawa Fry (Crispy)</span>
                    <span className="font-mono text-[#C6A56A] tabular-nums">{fish.rawa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Butter Garlic</span>
                    <span className="font-mono text-[#C6A56A] tabular-nums">{fish.butterGarlic}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-[#FAF7F0]">
                    <span>Grand Platter</span>
                    <span className="font-mono text-[#C6A56A] tabular-nums">{fish.platter}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectForReservation(`${fish.title} Fry`)}
                className="mt-5 w-full py-3 min-h-[44px] bg-[#101A17] hover:bg-[#C6A56A] text-[#FAF7F0] hover:text-[#101A17] text-[11px] uppercase tracking-wider font-semibold rounded-sm transition-colors cursor-pointer text-center flex items-center justify-center"
              >
                Reserve This Catch
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
