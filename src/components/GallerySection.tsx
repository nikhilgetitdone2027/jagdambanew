import React, { useState, useMemo } from 'react';
import { SectionHeading } from './SectionHeading';
import { galleryItems } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Eye, Sparkles, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'catering', label: 'CATERING' },
    { id: 'decoration', label: 'DECORATION' },
    { id: 'lighting', label: 'LIGHTING' },
    { id: 'events', label: 'EVENTS' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (itemIndex: number) => {
    setCurrentImageIndex(itemIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Visual Portfolio"
          title="OUR PREVIOUS WORKS"
          subtitle="Celebrations we've helped bring to life."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-black tracking-widest uppercase transition-all duration-200 cursor-pointer border-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] text-black border-[var(--theme-accent)] shadow-xl scale-105'
                  : 'bg-[var(--theme-canvas-surface)] text-[var(--theme-accent-light)] hover:text-white hover:border-[var(--theme-accent)] border-[var(--theme-accent)]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-sm overflow-hidden bg-slate-950 border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[300px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 shadow-sm">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Quick View Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-sm bg-[var(--theme-canvas-surface)] text-[var(--theme-accent)] border border-[var(--theme-accent)]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-5 transform transition-transform duration-300">
                <h4 className="font-cinzel text-base sm:text-lg font-black text-white group-hover:text-[var(--theme-accent-light)] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-slate-300 font-medium mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[var(--theme-accent)] font-black uppercase tracking-wider">
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentImageIndex(newIdx)}
      />
    </section>
  );
};
