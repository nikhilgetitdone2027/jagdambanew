import React from 'react';
import { SectionHeading } from './SectionHeading';
import { businessData } from '../data/business';
import { ChefHat, CheckCircle2, Utensils, Sparkles, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] relative overflow-hidden text-[var(--theme-text-dark)]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Heritage & Expertise"
          title="THREE DECADES OF CULINARY EXCELLENCE"
          subtitle="Crafting authentic tastes and unforgettable celebrations rooted in tradition and passion."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: About Story & Cuisine Details */}
          <div className="lg:col-span-7 space-y-6 text-[var(--theme-text-dark)]">
            <div className="border-l-4 border-[var(--theme-accent)] pl-4 sm:pl-6 py-1">
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent-light)] mb-1">
                Jagadamba Caterer & Event Planner
              </h3>
              <p className="font-serif italic text-base text-[var(--theme-accent)]">
                Serving timeless culinary memories across Jharkhand and adjoining regions.
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-[var(--theme-text-dark)] font-medium">
              With approximately <strong className="text-[var(--theme-accent-light)] font-black">30 years of rich experience</strong> in the food and banqueting business, Jagadamba Caterer has established a steadfast reputation for exquisite flavors, uncompromised ingredient purity, and impeccable hospitality.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-[var(--theme-text-muted)]">
              Every auspicious wedding, reception, and family gathering deserves a tailored menu that delights every guest. Under the guidance of <strong className="text-[var(--theme-accent-light)] font-bold">Damodar Pandey</strong>, our experienced culinary team specializes in designing bespoke menus crafted specifically around each customer's preferences and dietary traditions.
            </p>

            {/* Specialization List */}
            <div className="pt-2 pb-4">
              <h4 className="font-cinzel text-xs sm:text-sm font-black text-[var(--theme-accent-light)] uppercase tracking-widest mb-3 flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-[var(--theme-accent)]" />
                Our Culinary Specialties:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {businessData.cuisines.map((cuisine) => (
                  <div
                    key={cuisine}
                    className="flex items-center gap-2.5 p-3 rounded-sm bg-[var(--theme-canvas-surface)] border border-[var(--theme-accent)]/30 text-xs sm:text-sm font-bold text-[var(--theme-accent-light)] shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                    <span>{cuisine}</span>
                  </div>
                ))}
              </div>
            </div>
           {/* Chef Attribution Note */}
            <div className="p-4 rounded-sm bg-[var(--theme-canvas-surface)] border border-[var(--theme-accent)]/40 shadow-sm flex items-start gap-3.5">
              <div className="p-2 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent)] border border-[var(--theme-accent)]/40 shrink-0 mt-0.5">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-cinzel text-sm font-black text-[var(--theme-accent-light)]">
                  Personalized Menu Customization
                </h5>
                <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] mt-0.5">
                  Led directly by <strong className="text-[var(--theme-accent)] font-bold">Damodar Pandey</strong>, we sit down with families to curate balanced, multi-course menus tailored to your guest profile and auspicious event timelines.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Chef / Founder Image Card & Stat Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Golden Border Framing */}
              <div className="relative rounded-sm overflow-hidden bg-[var(--theme-canvas-surface)] p-1.5 shadow-2xl border-2 border-[var(--theme-accent)]/50">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-slate-950 flex flex-col items-center justify-center text-center p-8 group">
                  <img
                    src="/images/owners/founder.jpg"
                    alt="Damodar Pandey"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Visual Background Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Highlighted Statistic Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] p-4 sm:p-5 rounded-sm border-2 border-[var(--theme-accent)] shadow-2xl flex items-center gap-4">
                <div className="p-3 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent)] border border-[var(--theme-accent)]/40">
                  <Sparkles className="w-7 h-7 text-[var(--theme-accent)]" />
                </div>
                <div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-black text-[var(--theme-accent)]">
                    30+
                  </div>
                  <div className="font-sans text-xs sm:text-sm font-black text-[var(--theme-accent-light)] uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
