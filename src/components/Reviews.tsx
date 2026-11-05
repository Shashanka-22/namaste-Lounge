import React, { useState, useEffect } from 'react';
import { REVIEWS_LIST, REVIEWS_SUMMARY } from '../data/reviewsData';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_LIST.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS_LIST[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_LIST.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_LIST.length) % REVIEWS_LIST.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 md:py-32 bg-[#19241F] text-[#FAF7F0] relative border-t border-[#C6A56A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header Strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 sm:pb-12 mb-10 sm:mb-16 border-b border-[#C6A56A]/20 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#C6A56A] font-bold tabular-nums">
                4.7
              </span>
              <div>
                <div className="flex items-center gap-1 text-[#C6A56A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C6A56A]" />
                  ))}
                </div>
                <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#FAF7F0]/60 mt-1 font-semibold">
                  Google Verified Rating
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#B9B5A9] font-light">
              Based on <strong className="text-[#FAF7F0] font-semibold tabular-nums">788 Google Reviews</strong> from travelers and locals.
            </p>
          </div>

          {/* Genuine Review Themes */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-lg">
            {['Fresh Arabian Seafood', 'Soulful Live Music', 'Great Ambience', 'Friendly Warm Staff', 'Artisanal Cocktails'].map((theme) => (
              <span
                key={theme}
                className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 bg-[#101A17] border border-[#C6A56A]/20 text-[#FAF7F0]/80 rounded-full"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] border border-[#C6A56A] text-[#C6A56A] hover:bg-[#C6A56A] hover:text-[#101A17] text-xs uppercase tracking-[0.18em] font-bold rounded-sm transition-all duration-200 cursor-pointer shrink-0 text-center"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonial Slider with Swipe support */}
        <div className="max-w-4xl mx-auto">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative p-5 sm:p-10 md:p-16 rounded-sm bg-[#101A17] border border-[#C6A56A]/30 shadow-2xl"
          >
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#C6A56A]/15 absolute top-5 right-5 sm:top-8 sm:right-8 pointer-events-none" />

            <div className="flex items-center gap-1 text-[#C6A56A] mb-4 sm:mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C6A56A]" />
              ))}
              <span className="ml-2.5 sm:ml-3 text-[11px] sm:text-xs text-[#C6A56A] uppercase tracking-wider font-semibold">
                {current.highlight}
              </span>
            </div>

            <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#FAF7F0] font-light leading-relaxed italic">
              "{current.text}"
            </p>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#C6A56A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C6A56A]/20 text-[#C6A56A] flex items-center justify-center font-serif text-base sm:text-lg font-semibold shrink-0">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#FAF7F0]">{current.author}</h4>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#FAF7F0]/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{current.source}</span>
                    <span>·</span>
                    <span>{current.timeAgo}</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t border-[#C6A56A]/10 sm:border-0">
                <button
                  onClick={handlePrev}
                  className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-[#C6A56A]/30 hover:border-[#C6A56A] text-[#FAF7F0] hover:text-[#C6A56A] transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#FAF7F0]/60 tabular-nums">
                  0{currentIndex + 1} / 0{REVIEWS_LIST.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-[#C6A56A]/30 hover:border-[#C6A56A] text-[#FAF7F0] hover:text-[#C6A56A] transition-colors cursor-pointer"
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
