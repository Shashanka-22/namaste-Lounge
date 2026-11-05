import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Journal' },
    { id: 'ambience', label: 'Ambience & Decor' },
    { id: 'cuisine', label: 'Food & Dining' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'live-music', label: 'Live Music' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#171714] text-[#F5F0E6] relative border-t border-[#C8A96B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Photo Journal</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F0E6] font-normal leading-[1.1]">
              Moments at Namaste Lounge
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F5F0E6]/70 font-light">
              Actual photography captured inside our Palolem sanctuary—illuminated coconut groves, artisanal fare, live acoustic strings, and handcrafted spirits.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#1D1D19] rounded-lg border border-[#C8A96B]/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs rounded uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#C8A96B] text-[#171714] font-semibold'
                    : 'text-[#F5F0E6]/60 hover:text-[#F5F0E6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-lg cursor-pointer border border-[#C8A96B]/20 bg-[#1D1D19] transition-all duration-500 hover:border-[#C8A96B]/60 hover:shadow-2xl hover:shadow-[#C8A96B]/10 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`w-full overflow-hidden ${isLarge ? 'h-[360px] sm:h-[460px]' : 'h-[360px]'}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Permanent gradient scrim for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-[#171714]/40 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C8A96B] bg-[#171714]/70 px-2.5 py-1 rounded backdrop-blur-sm border border-[#C8A96B]/20">
                      {item.subtitle}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#171714]/70 backdrop-blur-sm border border-[#C8A96B]/30 flex items-center justify-center text-[#F5F0E6] group-hover:text-[#C8A96B] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E6] group-hover:text-[#C8A96B] transition-colors font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#F5F0E6]/80 font-light line-clamp-2 max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          hasMultiple={filteredItems.length > 1}
        />
      )}
    </section>
  );
};
