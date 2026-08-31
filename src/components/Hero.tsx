import React from 'react';
import { businessData } from '../data/business';
import { Sparkles, UtensilsCrossed, ArrowRight, PhoneCall, Award, Star } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onViewMenu: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewMenu, onContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-500 bg-[var(--theme-canvas-bg)]"
    >
      {/* Subtle Background Pattern & Dark Radial Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[var(--theme-accent)]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Subtle Golden Mandala Corner Watermark Accents */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 opacity-15 pointer-events-none rounded-full border-2 flex items-center justify-center"
        style={{ borderColor: 'var(--theme-accent)' }}
      >
        <div
          className="w-72 h-72 rounded-full border-2 rotate-45"
          style={{ borderColor: 'var(--theme-accent)' }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--theme-text-dark)]">
        {/* Badges / Ratings */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border shadow-sm bg-[var(--theme-canvas-surface)]"
            style={{
              borderColor: 'var(--theme-accent)',
            }}
          >
            <Award className="w-4 h-4 text-[var(--theme-accent)]" />
            <span className="font-sans text-xs sm:text-sm font-black tracking-widest text-[var(--theme-accent-light)] uppercase">
              30+ Years of Royal Banqueting & Event Excellence
            </span>
          </div>

          {businessData.reviewUrl && (
            <a
              href={businessData.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border text-xs font-black uppercase tracking-wider shadow-sm transition-transform active:scale-95 cursor-pointer bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border-amber-500/50"
              title="Read & Leave Google Reviews"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Google Reviews</span>
              <span className="underline text-[10px] text-amber-300 ml-1">Rate Us</span>
            </a>
          )}
        </div>

        {/* Main Heading */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--theme-accent-light)] leading-[1.15] drop-shadow-md mb-3">
          JAGADAMBA CATERER
          <span
            className="block mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--theme-accent)]"
          >
            & EVENT PLANNER
          </span>
        </h1>

        {/* Indian Ornamental Gold Divider */}
        <div className="flex items-center justify-center gap-3 my-5 sm:my-6">
          <div
            className="w-16 sm:w-28 h-[2px]"
            style={{
              background: `linear-gradient(to right, transparent, var(--theme-accent), transparent)`,
            }}
          />
          <div
            className="w-2.5 h-2.5 rotate-45 shadow-xs"
            style={{ backgroundColor: 'var(--theme-accent)' }}
          />
          <div
            className="w-16 sm:w-28 h-[2px]"
            style={{
              background: `linear-gradient(to right, transparent, var(--theme-accent), transparent)`,
            }}
          />
        </div>

        {/* Supporting Tagline */}
        <p
          className="font-serif italic text-lg sm:text-xl md:text-2xl font-black tracking-wide mb-4 text-[var(--theme-accent)]"
        >
          &ldquo;{businessData.tagline}&rdquo;
        </p>

        {/* Supporting Descriptive Paragraph */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[var(--theme-text-muted)] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
          Creating bespoke culinary journeys, breathtaking stage lighting, royal floral decorations, and seamless event management for weddings, receptions, and monumental celebrations across Dhanbad and beyond.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8">
          <button
            id="hero-explore-services-btn"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-sans text-xs sm:text-sm font-black uppercase tracking-widest shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-[var(--theme-accent-dark)] via-[var(--theme-accent)] to-[var(--theme-accent-dark)] hover:brightness-110 text-black"
          >
            <Sparkles className="w-4 h-4 text-black" />
            Explore Our Services
          </button>

          <button
            id="hero-view-menu-btn"
            onClick={onViewMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm font-sans text-xs sm:text-sm font-black uppercase tracking-widest border-2 shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer bg-[var(--theme-canvas-surface)] hover:bg-[var(--theme-primary-card)] text-[var(--theme-accent-light)]"
            style={{
              borderColor: 'var(--theme-accent)',
            }}
          >
            <UtensilsCrossed className="w-4 h-4 text-[var(--theme-accent)]" />
            View Our Menu
          </button>
        </div>

        {/* Smaller Secondary CTA */}
        <div>
          <button
            id="hero-contact-cta"
            onClick={onContact}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-wider uppercase underline underline-offset-4 transition-colors cursor-pointer text-[var(--theme-accent)] hover:text-[var(--theme-accent-light)]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            Have an upcoming celebration? Contact Us for Custom Bookings
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Highlights Strip at bottom of Hero */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 pt-8 border-t text-left"
          style={{ borderColor: 'var(--theme-accent)' }}
        >
          <div
            className="p-4 rounded-sm border shadow-md bg-[var(--theme-canvas-surface)]"
            style={{
              borderColor: 'rgba(245, 189, 71, 0.3)',
            }}
          >
            <span className="block font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent)]">
              30+ Years
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[var(--theme-text-muted)]">
              Culinary Mastery
            </span>
          </div>
          <div
            className="p-4 rounded-sm border shadow-md bg-[var(--theme-canvas-surface)]"
            style={{
              borderColor: 'rgba(245, 189, 71, 0.3)',
            }}
          >
            <span className="block font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent)]">
              Multi-Cuisine
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[var(--theme-text-muted)]">
              Veg & Non-Veg Banquets
            </span>
          </div>
          <div
            className="p-4 rounded-sm border shadow-md bg-[var(--theme-canvas-surface)]"
            style={{
              borderColor: 'rgba(245, 189, 71, 0.3)',
            }}
          >
            <span className="block font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent)]">
              Grand Decor
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[var(--theme-text-muted)]">
              Stage & Entrance Lighting
            </span>
          </div>
          <div
            className="p-4 rounded-sm border shadow-md bg-[var(--theme-canvas-surface)]"
            style={{
              borderColor: 'rgba(245, 189, 71, 0.3)',
            }}
          >
            <span className="block font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent)]">
              Bespoke Menus
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[var(--theme-text-muted)]">
              Curated by Chef Pandey
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
