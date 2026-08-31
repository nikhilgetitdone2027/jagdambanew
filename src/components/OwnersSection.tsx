import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ownersData } from '../data/owners';
import { ChefHat, User, Users, GraduationCap, Award, Briefcase, X } from 'lucide-react';

export const OwnersSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter or detect Haribansh specifically
  const isHaribansh = (name: string) =>
    name.toLowerCase().includes('haribansh');

  return (
    <section id="owners" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Legacy"
          title="THE PEOPLE BEHIND JAGADAMBA"
          subtitle="A dedicated family-run catering and event planning enterprise with a legacy of authentic hospitality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Founder */}
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
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent-light)] tracking-wide">
                    {founder.name}
                    {isHaribansh(founder.name) && (
                      <span className="text-xs sm:text-sm font-medium text-[var(--theme-accent)] block mt-0.5 sm:inline sm:ml-2">
                        (Gold Medalist at CAI, Hyd.)
                      </span>
                    )}
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

              {/* Founder Contact & Conditional Link if Haribansh is Founder */}
              <div className="space-y-3 pt-4 border-t border-[var(--theme-accent)]/30">
                <div className="bg-[var(--theme-primary-surface)] p-3.5 rounded-sm text-center">
                  <span className="text-[10px] uppercase font-black tracking-widest text-[var(--theme-accent)] block mb-1">
                    DIRECT CONTACT
                  </span>
                  <p className="text-xs font-bold text-[var(--theme-accent-light)]">
                    {founder.contactNote}
                  </p>
                </div>

                {isHaribansh(founder.name) && (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-sm bg-[var(--theme-accent)]/10 hover:bg-[var(--theme-accent)] hover:text-black text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    View Credentials & Background
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Cards 2 & 3: Sons / Partners */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {ownersData.filter((o) => !o.isFounder).map((owner, index) => (
              <div
                key={owner.id}
                className="rounded-sm bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] p-6 sm:p-7 border-2 border-[var(--theme-accent)]/40 hover:border-[var(--theme-accent)] shadow-xl flex flex-col justify-between relative transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 text-[10px] font-black uppercase tracking-wider">
                    {index === 0 ? 'Son & Master Chef (Operations)' : 'Son & Director (Decor & Lighting)'}
                  </span>
                  <Users className="w-4 h-4 text-[var(--theme-accent)]" />
                </div>

                <div>
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
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <h3 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)]">
                      {owner.name}
                      {isHaribansh(owner.name) && (
                        <span className="text-xs font-medium text-[var(--theme-accent)] block mt-0.5">
                          (Gold Medalist at CAI, Hyd.)
                        </span>
                      )}
                    </h3>
                    <div className="text-xs uppercase font-black tracking-wider text-[var(--theme-accent)] mt-0.5">
                      {owner.role}
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed text-center mb-5">
                    {owner.bio}
                  </p>
                </div>

                {/* Card Footer: Haribansh button target */}
                <div className="space-y-2.5 pt-3 border-t border-[var(--theme-accent)]/30">
                  <div className="bg-[var(--theme-primary-surface)] p-3 rounded-sm text-center">
                    <span className="text-[10px] uppercase font-black tracking-wider text-[var(--theme-accent)] block mb-0.5">
                      DIRECT CONTACT
                    </span>
                    <p className="text-xs font-bold text-[var(--theme-accent-light)]">
                      {owner.contactNote}
                    </p>
                  </div>

                  {isHaribansh(owner.name) && (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-sm bg-[var(--theme-accent)]/15 hover:bg-[var(--theme-accent)] hover:text-black text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      View Credentials & Background
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Haribansh Credentials Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)] p-6 sm:p-8 text-[var(--theme-text-dark)] shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-sm text-[var(--theme-accent)] hover:text-white hover:bg-[var(--theme-accent)]/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-[var(--theme-accent)]/30 pb-4 mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-[var(--theme-accent)]">
                Culinary Portfolio & Profile
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-[var(--theme-accent-light)] mt-0.5">
                Haribansh Kumar Pandey <span className="text-sm font-medium text-[var(--theme-accent)]">(Gold Medalist at CAI, Hyd.)</span>
              </h3>
              <p className="text-xs text-[var(--theme-text-muted)] mt-1">
                Culinary Arts Specialist • Hyderabad & Kolkata Industrial Track Record
              </p>
            </div>

            {/* Section 1: Education */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-[var(--theme-accent)]" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--theme-accent-light)]">
                  Educational Qualifications
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-[var(--theme-text-muted)]">
                <li className="p-2.5 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/20">
                  <span className="font-bold text-[var(--theme-accent-light)] block">
                    2016 – 2019: Bachelor’s in Catering Technology & Culinary Arts
                  </span>
                  Culinary Academy of India, Hyderabad
                </li>
                <li className="p-2.5 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/20">
                  <span className="font-bold text-[var(--theme-accent-light)] block">
                    2013 – 2016: B.A. Economics (Hons.)
                  </span>
                  Vinoba Bhave University, Hazaribagh, Jharkhand
                </li>
                <li className="p-2.5 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/20">
                  <span className="font-bold text-[var(--theme-accent-light)] block">
                    2011 – 2013: Higher Secondary Education
                  </span>
                  Sahdeo High School, Gaya, Bihar
                </li>
              </ul>
            </div>

            {/* Section 2: Industrial Exposure */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-[var(--theme-accent)]" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--theme-accent-light)]">
                  Industrial Exposure & Training
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[var(--theme-text-muted)] list-disc list-inside">
                <li>
                  <strong className="text-[var(--theme-accent-light)]">The Oberoi Grand, Kolkata (2017–2018):</strong> 16 Weeks Industrial Training across Indian Cuisine, Garde Manger, Bakery, and Banquet operations.
                </li>
                <li>
                  <strong className="text-[var(--theme-accent-light)]">Luxury Outdoor Caterings (2016–2018):</strong> Taj Krishna, Taj Falaknuma, and Park Hyatt / SV Caterers, Hyderabad.
                </li>
              </ul>
            </div>

            {/* Section 3: Accolades */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[var(--theme-accent)]" />
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--theme-accent-light)]">
                  Key Achievements
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-[var(--theme-text-muted)] list-disc list-inside">
                <li>
                  <strong className="text-[var(--theme-accent-light)]">Silver Medal:</strong> 25th Annual National Level Culinary Competition (Taj Group of Hotels & CHRIST Bengaluru, 2019).
                </li>
                <li>
                  <strong className="text-[var(--theme-accent-light)]">Guinness World Record (2018):</strong> Display of bread varieties at Culinary Academy of India.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};