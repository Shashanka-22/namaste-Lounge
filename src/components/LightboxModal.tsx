import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#171714]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#C8A96B]/20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold">
            {item.subtitle}
          </span>
          <span className="text-xs text-[#F5F0E6]/40">·</span>
          <span className="text-xs text-[#F5F0E6]/60 capitalize">{item.category}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-[#2A2A25] text-[#F5F0E6] hover:text-[#C8A96B] transition-colors cursor-pointer"
          aria-label="Close photo preview"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-6xl mx-auto w-full">
        {hasMultiple && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#171714]/70 hover:bg-[#171714] text-[#F5F0E6] hover:text-[#C8A96B] transition-all border border-[#C8A96B]/30 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={item.src}
          alt={item.title}
          className="max-h-[72vh] max-w-full object-contain rounded shadow-2xl border border-[#C8A96B]/20"
          referrerPolicy="no-referrer"
        />

        {hasMultiple && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#171714]/70 hover:bg-[#171714] text-[#F5F0E6] hover:text-[#C8A96B] transition-all border border-[#C8A96B]/30 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption & Description */}
      <div className="max-w-3xl mx-auto w-full text-center pb-2">
        <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E6] font-medium">
          {item.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#F5F0E6]/75 font-light max-w-xl mx-auto">
          {item.description}
        </p>
      </div>
    </div>
  );
};
