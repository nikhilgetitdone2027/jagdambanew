import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Flower2, Sparkles, Heart, Crown, LayoutGrid } from 'lucide-react';

export const DecorationSection: React.FC = () => {
  const decorElements = [
    {
      title: 'Starlit Live Buffet',
      subtitle: 'Outdoor Culinary Experience',
      desc: 'A sweeping outdoor live-counter setup with warm string lights, cascading greenery, soft fabric drapes, and chefs serving guests fresh from the kitchen.',
      image: '/images/decoration/outdoor-live-buffet.jpg',
    },
    {
      title: 'Lantern-Lit Banquet',
      subtitle: 'Ambient Buffet Styling',
      desc: 'A graceful buffet pavilion dressed in flowing white fabric, glowing pendant lanterns, and violet uplighting for an elegant evening reception.',
      image: '/images/decoration/lantern-lit-buffet.jpg',
    },
    {
      title: 'Regal Carved Buffet Counter',
      subtitle: 'Heritage-Inspired Presentation',
      desc: 'An illuminated gold-and-black buffet façade with intricate patterned panels, decorative lamps, and a statement chef centerpiece for a royal welcome.',
      image: '/images/decoration/royal-buffet-counter.jpg',
    },
    {
      title: 'Festive Mithai & Dessert Counter',
      subtitle: 'Traditional Celebration Display',
      desc: 'A vibrant sweets counter framed by rich red drapery, fresh florals, colourful display shelves, and festive lighting for special celebrations.',
      image: '/images/decoration/festive-sweets-counter.jpg',
    },
  ];

  return (
    <section id="decoration" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Bespoke Venue Styling"
          title="ROYAL DECORATION & AMBIENCE"
          subtitle="Transforming banquet halls, lawns, and wedding venues into regal settings of timeless Indian splendor."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {decorElements.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] overflow-hidden shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Large Image Showcase Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-sm text-xs font-black uppercase tracking-widest bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 shadow-sm">
                    {item.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 text-[11px] font-bold text-[var(--theme-accent)] bg-black/80 border border-[var(--theme-accent)]/30 px-2 py-0.5 rounded-sm">
                  Decoration Showcase
                </div>
              </div>

              {/* Description Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--theme-accent)]/20 flex items-center justify-between text-xs text-[var(--theme-accent-light)] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[var(--theme-accent)]">
                    <Flower2 className="w-4 h-4 text-[var(--theme-accent)]" />
                    Fresh Florals & Custom Themes
                  </span>
                  <span className="font-cinzel font-black text-[var(--theme-accent)]">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
