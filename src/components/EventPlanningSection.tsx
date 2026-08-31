import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ClipboardList, Palette, Wrench, PartyPopper, ArrowRight, CheckCircle2 } from 'lucide-react';

export const EventPlanningSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'PLAN',
      subtitle: 'Menu & Event Roadmap',
      desc: 'In-depth consultation to understand your guest count, traditional preferences, cuisine choices with Damodar Pandey, and event timelines.',
      icon: <ClipboardList className="w-6 h-6 text-[var(--theme-accent-dark)]" />,
    },
    {
      step: '02',
      title: 'DESIGN',
      subtitle: 'Themes & Lighting Layouts',
      desc: 'Crafting the visual layout of your venue — from floral stage themes and entrance arches to fairy-light canopy positions and buffet counter flows.',
      icon: <Palette className="w-6 h-6 text-[var(--theme-accent-dark)]" />,
    },
    {
      step: '03',
      title: 'SETUP',
      subtitle: 'On-Ground Execution',
      desc: 'Precise on-site preparation by our chefs, lighting engineers, and decorators hours before guests arrive to ensure pristine presentation.',
      icon: <Wrench className="w-6 h-6 text-[var(--theme-accent-dark)]" />,
    },
    {
      step: '04',
      title: 'CELEBRATE',
      subtitle: 'Flawless Hospitality',
      desc: 'Live food counters, warm hospitality, and smooth dining service allow you and your family to enjoy every moment with total peace of mind.',
      icon: <PartyPopper className="w-6 h-6 text-[var(--theme-accent-dark)]" />,
    },
  ];

  return (
    <section id="event-planning" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Process"
          title="HOW WE CREATE YOUR CELEBRATION"
          subtitle="A structured, meticulous journey ensuring your special occasion is effortless, royal, and memorable."
        />

        {/* Timeline Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-sm bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-cinzel text-3xl font-black text-[var(--theme-accent)]/30 group-hover:text-[var(--theme-accent)] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[var(--theme-accent)] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-cinzel text-xl font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>

              {/* Progress Indicator Arrow for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[var(--theme-canvas-surface)] text-[var(--theme-accent)] p-1.5 rounded-full border border-[var(--theme-accent)]/40 shadow-lg">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/40 text-center shadow-xl">
          <h4 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)] mb-2">
            Complete Turnkey Event Coordination
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium max-w-2xl mx-auto leading-relaxed">
            From intimacy of 100 guests to royal wedding gatherings of 5,000+, Jagadamba Caterer & Event Planner brings unity, punctual delivery, and refined elegance to every detail.
          </p>
        </div>
      </div>
    </section>
  );
};
