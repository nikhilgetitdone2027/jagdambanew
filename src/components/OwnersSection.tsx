import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ownersData } from '../data/owners';
import { ChefHat, User, Sparkles, Phone, Mail, Award, Users } from 'lucide-react';

export const OwnersSection: React.FC = () => {
  return (
    <section id="owners" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Legacy"
          title="THE PEOPLE BEHIND JAGADAMBA"
          subtitle="A dedicated family-run catering and event planning enterprise with a legacy of authentic hospitality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Founder (More Prominent - 4 columns on desktop) */}
          {ownersData.filter((o) => o.isFounder).map((founder) => (
            <div
              key={founder.id}
              className="lg:col-span-4 rounded-sm bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] p-6 sm:p-8 border-2 border-[var(--theme-accent)] shadow-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Founder Crown Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-sm bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] text-black text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                <ChefHat className="w-3.5 h-3.5 text-black" />
                FOUNDER
              </div>

              <div>
                {/* Photo or Placeholder */}
                <div className="relative aspect-square max-w-[200px] mx-auto rounded-full overflow-hidden bg-slate-950 border-4 border-[var(--theme-accent)] shadow-2xl mb-6 flex flex-col items-center justify-center p-2 text-center group-hover:border-[var(--theme-accent-light)] transition-colors">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const placeholder = parent.querySelector('.owner-placeholder-content');
                          if (placeholder) placeholder.classList.remove('hidden');
                        }
                      }}
                    />
                  ) : null}
                  <div className={`owner-placeholder-content flex flex-col items-center justify-center ${founder.image ? 'hidden' : ''}`}>
                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] mb-2">
                      <ChefHat className="w-8 h-8" />
                    </div>
                    <span className="text-[11px] font-black text-[var(--theme-accent-light)] leading-tight">
                      [PHOTO PLACEHOLDER]
                    </span>
                    <span className="text-[9px] text-[var(--theme-text-muted)] mt-0.5">
                      /images/owners/founder.jpg
                    </span>
                  </div>
                </div>

                {/* Founder Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent-light)] tracking-wide">
                    {founder.name}
                  </h3>
                  <div className="text-xs uppercase font-black tracking-widest text-[var(--theme-accent)] mt-1">
                    {founder.role}
                  </div>
                  <div className="inline-block mt-2 px-3 py-1 rounded-sm bg-[var(--theme-primary-surface)] text-xs text-[var(--theme-accent-light)] font-black uppercase tracking-wider border border-[var(--theme-accent)]/40">
                    {founder.experience}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed text-center mb-6">
                  {founder.bio}
                </p>
              </div>

              {/* Contact Information */}
              <div className="pt-4 border-t border-[var(--theme-accent)]/30 bg-[var(--theme-primary-surface)] p-3.5 rounded-sm text-center">
                <span className="text-[10px] uppercase font-black tracking-widest text-[var(--theme-accent)] block mb-1">
                  DIRECT CONTACT
                </span>
                <p className="text-xs font-bold text-[var(--theme-accent-light)]">
                  {founder.contactNote}
                </p>
              </div>
            </div>
          ))}

          {/* Cards 2 & 3: Sons / Partners (8 columns total, 4 cols each) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {ownersData.filter((o) => !o.isFounder).map((owner, index) => (
              <div
                key={owner.id}
                className="rounded-sm bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] p-6 sm:p-7 border-2 border-[var(--theme-accent)]/40 hover:border-[var(--theme-accent)] shadow-xl flex flex-col justify-between relative transition-all duration-300 group"
              >
                {/* Role Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 text-[10px] font-black uppercase tracking-wider">
                    {index === 0 ? 'Son & Master Chef (Operations)' : 'Son & Director (Decor & Lighting)'}
                  </span>
                  <Users className="w-4 h-4 text-[var(--theme-accent)]" />
                </div>

                <div>
                  {/* Photo or Placeholder */}
                  <div className="relative aspect-square max-w-[160px] mx-auto rounded-full overflow-hidden bg-slate-950 border-3 border-[var(--theme-accent)]/60 shadow-xl mb-5 flex flex-col items-center justify-center p-2 text-center group-hover:border-[var(--theme-accent)] transition-colors">
                    {owner.image ? (
                      <img
                        src={owner.image}
                        alt={owner.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const placeholder = parent.querySelector('.son-placeholder-content');
                            if (placeholder) placeholder.classList.remove('hidden');
                          }
                        }}
                      />
                    ) : null}
                    <div className={`son-placeholder-content flex flex-col items-center justify-center ${owner.image ? 'hidden' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] mb-1.5">
                        <User className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black text-[var(--theme-accent-light)]">
                        [PHOTO PLACEHOLDER]
                      </span>
                      <span className="text-[9px] text-[var(--theme-text-muted)]">
                        {owner.image || `/images/owners/son-${index + 1}.jpg`}
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-3">
                    <h3 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)]">
                      {owner.name}
                    </h3>
                    <div className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] mt-0.5">
                      {owner.role}
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed text-center mb-5">
                    {owner.bio}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="pt-3 border-t border-[var(--theme-accent)]/30 bg-[var(--theme-primary-surface)] p-3 rounded-sm text-center">
                  <span className="text-[10px] uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-0.5">
                    DIRECT CONTACT
                  </span>
                  <p className="text-xs font-bold text-[var(--theme-accent-light)]">
                    {owner.contactNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
