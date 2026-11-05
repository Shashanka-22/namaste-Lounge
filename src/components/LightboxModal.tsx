import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasMultiple: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  hasMultiple,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Touch gesture support for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45 && hasMultiple) {
      onNext(); // swipe left -> next
    } else if (diff < -45 && hasMultiple) {
      onPrev(); // swipe right -> prev
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#101A17]/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#C6A56A]/20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56A] font-semibold">
            {item.subtitle}
          </span>
          <span className="text-xs text-[#FAF7F0]/40">·</span>
          <span className="text-[11px] sm:text-xs text-[#FAF7F0]/60 capitalize">{item.category}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-[#19241F] text-[#FAF7F0] hover:text-[#C6A56A] transition-colors cursor-pointer"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden max-w-6xl mx-auto w-full">
        {hasMultiple && (
          <button
            onClick={onPrev}
            className="absolute left-1 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-[#101A17]/80 hover:bg-[#101A17] text-[#FAF7F0] hover:text-[#C6A56A] transition-all border border-[#C6A56A]/30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        <img
          src={item.src}
          alt={item.title}
          className="max-h-[56vh] sm:max-h-[70vh] max-w-full object-contain rounded-sm shadow-2xl border border-[#C6A56A]/25"
          referrerPolicy="no-referrer"
        />

        {hasMultiple && (
          <button
            onClick={onNext}
            className="absolute right-1 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-[#101A17]/80 hover:bg-[#101A17] text-[#FAF7F0] hover:text-[#C6A56A] transition-all border border-[#C6A56A]/30 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Caption & Description */}
      <div className="max-w-3xl mx-auto w-full text-center pb-2">
        <h3 className="font-serif text-lg sm:text-2xl text-[#FAF7F0] font-medium">
          {item.title}
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#FAF7F0]/75 font-light max-w-xl mx-auto line-clamp-2 sm:line-clamp-none">
          {item.description}
        </p>
      </div>
    </div>
  );
};
