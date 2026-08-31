import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    },
    [isOpen, currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar with Title and Close */}
      <div
        className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none"
      >
        <div className="bg-[var(--theme-primary-surface)]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--theme-accent)]/40 pointer-events-auto flex items-center gap-2">
          <span className="text-xs font-bold text-[var(--theme-accent-light)] uppercase tracking-wider">
            {currentItem.categoryLabel}
          </span>
          <span className="text-xs text-[var(--theme-canvas-bg)]/60">•</span>
          <span className="text-xs text-[var(--theme-canvas-bg)] font-medium">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          id="lightbox-close-btn"
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-[var(--theme-primary-card)]/90 text-[var(--theme-canvas-bg)] hover:text-[var(--theme-accent-light)] hover:bg-[var(--theme-primary-hover)] border border-[var(--theme-accent)]/40 transition-colors pointer-events-auto cursor-pointer shadow-lg"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Navigation Controls */}
      {items.length > 1 && (
        <>
          <button
            id="lightbox-prev-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + items.length) % items.length);
            }}
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-[var(--theme-primary-surface)]/80 text-[var(--theme-canvas-bg)] hover:text-[var(--theme-accent-light)] hover:bg-[var(--theme-primary-card)] border border-[var(--theme-accent)]/40 transition-colors cursor-pointer shadow-xl"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="lightbox-next-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % items.length);
            }}
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-[var(--theme-primary-surface)]/80 text-[var(--theme-canvas-bg)] hover:text-[var(--theme-accent-light)] hover:bg-[var(--theme-primary-card)] border border-[var(--theme-accent)]/40 transition-colors cursor-pointer shadow-xl"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Central Image and Caption Card */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden border-2 border-[var(--theme-accent)]/50 shadow-2xl bg-[var(--theme-primary-dark)]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption Card Below Image */}
        <div className="mt-4 p-4 rounded-xl bg-[var(--theme-primary-surface)]/90 border border-[var(--theme-accent)]/40 text-center max-w-2xl backdrop-blur-md">
          <h4 className="font-cinzel text-base sm:text-lg font-bold text-[var(--theme-canvas-bg)]">
            {currentItem.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] mt-1 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
