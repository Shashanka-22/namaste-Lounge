import React, { useState, useEffect } from 'react';
import { REVIEWS_LIST, REVIEWS_SUMMARY } from '../data/reviewsData';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_LIST.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS_LIST[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_LIST.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_LIST.length) % REVIEWS_LIST.length);
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#171714] text-[#F5F0E6] relative border-t border-[#C8A96B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Rating Header Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 mb-16 border-b border-[#C8A96B]/20 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl md:text-6xl text-[#C8A96B] font-bold tabular-nums">
                4.7
              </span>
              <div>
                <div className="flex items-center gap-1 text-[#C8A96B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C8A96B]" />
                  ))}
                </div>
                <p className="text-xs uppercase tracking-widest text-[#F5F0E6]/60 mt-1 font-semibold">
                  Google Verified Rating
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm text-[#F5F0E6]/80 font-light">
              Based on <strong className="text-[#F5F0E6] font-semibold tabular-nums">788 Google Reviews</strong> from travelers and locals.
            </p>
          </div>

          {/* Genuine Review Themes */}
          <div className="flex flex-wrap items-center gap-2 max-w-lg">
            {['Fresh Arabian Seafood', 'Soulful Live Music', 'Great Ambience', 'Friendly Warm Staff', 'Artisanal Cocktails'].map((theme) => (
              <span
                key={theme}
                className="text-xs px-3 py-1 bg-[#1D1D19] border border-[#C8A96B]/20 text-[#F5F0E6]/80 rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>

          {/* External Action */}
          <a
            href={REVIEWS_SUMMARY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#171714] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 md:p-16 rounded-xl bg-gradient-to-b from-[#22221E] to-[#1D1D19] border border-[#C8A96B]/30 shadow-2xl">
            <Quote className="w-12 h-12 text-[#C8A96B]/20 absolute top-8 right-8 pointer-events-none" />

            <div className="flex items-center gap-1 text-[#C8A96B] mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C8A96B]" />
              ))}
              <span className="ml-3 text-xs text-[#C8A96B] uppercase tracking-wider font-semibold">
                {current.highlight}
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F5F0E6] font-light leading-relaxed italic">
              "{current.text}"
            </p>

            <div className="mt-8 pt-6 border-t border-[#C8A96B]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C8A96B]/20 text-[#C8A96B] flex items-center justify-center font-serif text-lg font-semibold">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F0E6]">{current.author}</h4>
                  <div className="flex items-center gap-2 text-xs text-[#F5F0E6]/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{current.source}</span>
                    <span>·</span>
                    <span>{current.timeAgo}</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#F5F0E6] hover:text-[#C8A96B] transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#F5F0E6]/60 tabular-nums">
                  0{currentIndex + 1} / 0{REVIEWS_LIST.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#F5F0E6] hover:text-[#C8A96B] transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
