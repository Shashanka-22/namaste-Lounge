import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ambience', label: 'Ambience & Lounge' },
    { id: 'cuisine', label: 'Seafood & Cuisine' },
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
    <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative border-t border-[#C6A56A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Photo Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] font-normal leading-[1.1]">
              Visuals from Palolem
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#B9B5A9] font-light">
              High-resolution photography captured inside Namaste Lounge—illuminated coconut palms, fresh coastal feasts, live acoustic sessions, and sunset spirits.
            </p>
          </div>

          {/* Filter Tabs: Horizontally scrollable on mobile */}
          <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-1.5 p-1 bg-[#19241F] rounded-sm border border-[#C6A56A]/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3 sm:px-3.5 py-1.5 min-h-[38px] text-xs rounded-sm uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#C6A56A] text-[#101A17] font-bold'
                    : 'text-[#FAF7F0]/65 hover:text-[#FAF7F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isLarge = index === 0 || index === 3 || index === 6;

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-sm cursor-pointer border border-[#C6A56A]/20 bg-[#19241F] transition-all duration-500 hover:border-[#C6A56A]/60 hover:shadow-2xl ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`w-full overflow-hidden ${isLarge ? 'h-[280px] sm:h-[400px] md:h-[460px]' : 'h-[280px] sm:h-[360px]'}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A17] via-[#101A17]/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C6A56A] bg-[#101A17]/80 px-2.5 py-1 rounded-sm backdrop-blur-sm border border-[#C6A56A]/25">
                      {item.subtitle}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#101A17]/80 backdrop-blur-sm border border-[#C6A56A]/30 flex items-center justify-center text-[#FAF7F0] group-hover:text-[#C6A56A] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#FAF7F0] group-hover:text-[#C6A56A] transition-colors font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#FAF7F0]/85 font-light line-clamp-2 max-w-lg">
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
