import React from 'react';
import { Logo } from '../assets/logo/Logo';
import { businessData } from '../data/business';
import { Phone, Mail, MapPin, Sparkles, ChevronUp, Instagram, Facebook, Youtube, Star, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Family', href: '#owners' },
    { name: 'Our Services', href: '#services' },
    { name: 'Catering Feasts', href: '#catering' },
    { name: 'Lighting & Ambience', href: '#lighting' },
    { name: 'Decoration', href: '#decoration' },
    { name: 'Our Works', href: '#gallery' },
    { name: 'Event Videos', href: '#videos' },
    { name: 'Curated Menu', href: '#menu' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] relative border-t-2 border-[var(--theme-accent)]/30 pt-16 pb-24 sm:pb-16 overflow-hidden">
      {/* Top ornamental line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--theme-accent)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[var(--theme-accent)]/20">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="lg" />
              <div>
                <h3 className="font-cinzel text-xl font-black tracking-wider text-[var(--theme-accent-light)]">
                  JAGADAMBA
                </h3>
                <span className="text-xs font-black tracking-widest uppercase text-slate-300 block">
                  CATERER & EVENT PLANNER
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-[var(--theme-accent)] font-bold">
              &ldquo;{businessData.tagline}&rdquo;
            </p>

            <p className="font-sans text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium leading-relaxed max-w-md">
              With 30+ years of culinary tradition and hospitality, we curate bespoke wedding catering, atmospheric stage lighting, royal floral decoration, and turnkey celebrations across Jharkhand and beyond.
            </p>

            {/* Social & Review Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={businessData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm bg-pink-950/80 border border-pink-500/50 flex items-center justify-center text-pink-300 hover:bg-pink-600 hover:text-white transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm bg-blue-950/80 border border-blue-500/50 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white transition-colors"
                title="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={businessData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-sm bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-300 hover:bg-red-600 hover:text-white transition-colors"
                title="Watch our YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>

              {businessData.reviewUrl && (
                <a
                  href={businessData.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider text-[var(--theme-accent-light)] bg-[var(--theme-primary-surface)] hover:bg-[var(--theme-canvas-bg)] border border-[var(--theme-accent)]/40 transition-colors shadow-xs"
                >
                  <Star className="w-3.5 h-3.5 fill-[var(--theme-accent)] text-[var(--theme-accent)]" />
                  <span>Rate Us on Google</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-sm font-black text-[var(--theme-accent-light)] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)]" />
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--theme-accent-light)] transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-black text-[var(--theme-accent-light)] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)]" />
              Head Office & Inquiries
            </h4>

            <div className="flex items-start gap-3 text-xs text-slate-300 font-medium">
              <MapPin className="w-4 h-4 text-[var(--theme-accent)] shrink-0 mt-0.5" />
              <span>{businessData.location.fullAddress}</span>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-300 font-medium">
              <Phone className="w-4 h-4 text-[var(--theme-accent)] shrink-0 mt-0.5" />
              <div className="space-y-1">
                {businessData.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block text-white font-bold hover:text-[var(--theme-accent)]"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <Mail className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
              <a
                href={`mailto:${businessData.email}`}
                className="text-white font-bold hover:text-[var(--theme-accent)] break-all"
              >
                {businessData.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(businessData.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>
            &copy; {currentYear} Jagadamba Caterer & Event Planner. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-black text-[var(--theme-accent-light)]">
              Damodar Pandey & Family
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] hover:bg-[var(--theme-canvas-bg)] hover:text-white border border-[var(--theme-accent)]/40 transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
              title="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
              <span className="text-[10px] hidden sm:inline font-bold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
