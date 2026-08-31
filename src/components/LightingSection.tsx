import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Sparkles, Sun, Moon, Zap, Layers, CheckCircle } from 'lucide-react';

export const LightingSection: React.FC = () => {
  const lightingGrid = [
    {
      title: 'Fairy Light Canopies',
      desc: 'Enchanting golden tunnel and ceiling mesh arrays for dreamlike outdoor and indoor dining spaces.',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
      tag: 'Canopy Arrays',
    },
    {
      title: 'Crystal Chandeliers & Stage Washes',
      desc: 'Hanging crystal chandeliers coupled with warm ambient stage spotlights for the bride and groom.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      tag: 'Grand Stage',
    },
    {
      title: 'Architectural Tree & Lawn Uplighting',
      desc: 'Color-synchronized LED flood and up-wash lights illuminating trees, facades, and perimeter grounds.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      tag: 'Lawn & Facade',
    },
    {
      title: 'Grand Pathway & Entrance Illuminations',
      desc: 'Majestic entryway lighting featuring warm halogen torches, warm fairy arches, and royal floor lanterns.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      tag: 'Royal Entrance',
    },
  ];

  return (
    <section id="lighting" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Ambient Lighting Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[var(--theme-accent)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Atmospheric Illumination"
          title="LIGHTING THAT TRANSFORMS EVERY CELEBRATION"
          subtitle="From golden romantic fairy canopies to grand stage spotlights, we sculpt the mood and emotional brilliance of your event."
        />

        {/* Supporting Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-14 text-[var(--theme-text-muted)] text-sm sm:text-base leading-relaxed font-medium">
          <p>
            Lighting is the soul of an evening wedding or reception. Our technical lighting specialists craft bespoke illumination plans that harmonize with your floral themes, accentuate stage moments, and keep photographs looking naturally luminous.
          </p>
        </div>

        {/* Visual Grid of Lighting Showcase Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lightingGrid.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-sm bg-[var(--theme-canvas-surface)] border border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-sm text-[10px] font-black tracking-widest uppercase bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 shadow-xs">
                  {item.tag}
                </span>

                <span className="absolute bottom-2 right-3 text-[10px] text-[var(--theme-accent)] font-bold">
                  Lighting Showcase
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[var(--theme-canvas-surface)]">
                <div>
                  <h4 className="font-cinzel text-base sm:text-lg font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--theme-accent)]/20 flex items-center justify-between text-xs text-[var(--theme-accent-light)] font-bold">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-[var(--theme-accent)]">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                    Custom Setup
                  </span>
                  <span className="text-[var(--theme-accent)] font-black">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
