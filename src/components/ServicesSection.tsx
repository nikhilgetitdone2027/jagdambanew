import React from 'react';
import { SectionHeading } from './SectionHeading';
import { servicesData } from '../data/services';
import { Utensils, Sparkles, Flower2, CalendarHeart, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Utensils':
        return <Utensils className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Flower2':
        return <Flower2 className="w-6 h-6" />;
      case 'CalendarHeart':
        return <CalendarHeart className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--theme-accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--theme-accent)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="What We Do"
          title="OUR SIGNATURE SERVICES"
          subtitle="Comprehensive royal banqueting, atmospheric lighting, bespoke venue decoration, and turnkey celebration management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5"
            >
              {/* Card Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={`${service.title} by Jagadamba`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Service Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 shadow-xs">
                  {service.tag}
                </div>

                {/* Service Number */}
                <div className="absolute top-3 right-3 font-cinzel text-xs font-black text-[var(--theme-accent)] bg-black/80 border border-[var(--theme-accent)]/40 px-2 py-0.5 rounded-sm">
                  0{index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[var(--theme-canvas-surface)]">
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[var(--theme-primary-surface)] border-2 border-[var(--theme-accent)] flex items-center justify-center text-[var(--theme-accent)] shadow-xl -mt-10 relative z-10 mb-4 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6 pt-3 border-t border-[var(--theme-accent)]/20">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[var(--theme-text-dark)] font-bold">
                        <Check className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section Jump Button */}
                <button
                  onClick={() => handleScrollTo(service.id)}
                  className="w-full py-2.5 px-3 rounded-sm text-xs font-black uppercase tracking-widest text-[var(--theme-accent-light)] bg-[var(--theme-primary-surface)] hover:bg-[var(--theme-primary-card)] border border-[var(--theme-accent)]/40 hover:border-[var(--theme-accent)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
