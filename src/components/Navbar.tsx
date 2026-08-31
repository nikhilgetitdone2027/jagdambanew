import React, { useState, useEffect } from 'react';
import { Logo } from '../assets/logo/Logo';
import { businessData } from '../data/business';
import { Menu, X, Phone, Sparkles, Star } from 'lucide-react';

interface NavbarProps {
  onOpenMenuModal?: (type: 'veg' | 'non-veg') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Family', href: '#owners' },
    { name: 'Services', href: '#services' },
    { name: 'Catering', href: '#catering' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Videos', href: '#videos' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--theme-canvas-bg)]/95 backdrop-blur-md py-2.5 shadow-2xl border-b border-[var(--theme-accent)]/40'
          : 'bg-[var(--theme-canvas-bg)]/90 backdrop-blur-sm border-b border-[var(--theme-accent)]/30 py-3.5 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <Logo size={isScrolled ? 'sm' : 'md'} className="transition-all duration-300" />
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg lg:text-xl font-black tracking-widest text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors leading-none">
              JAGADAMBA
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[var(--theme-accent)] leading-none mt-1">
              CATERER & EVENT PLANNER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Luminous Dark Theme Letters */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-sans text-xs font-black tracking-widest uppercase text-[var(--theme-text-dark)] hover:text-[var(--theme-accent-light)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--theme-accent)] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Action Links */}
        <div className="hidden sm:flex items-center gap-2.5">
          {businessData.reviewUrl && (
            <a
              href={businessData.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black tracking-wider text-amber-300 bg-amber-950/40 border border-amber-500/50 hover:bg-amber-900/50 transition-colors shadow-xs"
              title="Leave a Google Review"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="hidden md:inline">Review Us</span>
            </a>
          )}

          <a
            href={`tel:${businessData.primaryPhone}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black tracking-wider text-[var(--theme-text-dark)] bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/40 hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent-light)] transition-colors shadow-xs"
            title="Call Jagadamba Caterer"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <span className="hidden 2xl:inline font-bold">+91 91137 80293</span>
            <span className="2xl:hidden">Call</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center justify-center px-4.5 py-1.5 rounded-sm text-xs font-black tracking-widest uppercase text-black bg-gradient-to-r from-[var(--theme-accent-dark)] via-[var(--theme-accent)] to-[var(--theme-accent-dark)] hover:brightness-110 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="sm:hidden px-3 py-1.5 rounded-sm text-xs font-black tracking-wider uppercase text-black bg-[var(--theme-accent)]"
          >
            Inquire
          </a>
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-sm text-[var(--theme-text-dark)] bg-[var(--theme-primary-surface)] hover:bg-[var(--theme-primary-card)] border border-[var(--theme-accent)]/40 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[var(--theme-accent)]" /> : <Menu className="w-5 h-5 text-[var(--theme-accent)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[var(--theme-canvas-surface)] border-b-2 border-[var(--theme-accent)]/40 px-6 py-6 space-y-4 shadow-2xl transition-all"
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-b border-[var(--theme-accent)]/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 rounded-sm text-xs font-black uppercase tracking-wider text-[var(--theme-text-dark)] hover:bg-[var(--theme-primary-card)] hover:text-[var(--theme-accent-light)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            {businessData.reviewUrl && (
              <a
                href={businessData.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-950/40 border border-amber-500/50 shadow-xs"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                Leave a Google Review
              </a>
            )}

            <a
              href={`tel:${businessData.primaryPhone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm text-xs font-black uppercase tracking-wider text-[var(--theme-text-dark)] bg-[var(--theme-primary-surface)] border border-[var(--theme-accent)]/40"
            >
              <Phone className="w-4 h-4 text-[var(--theme-accent)]" />
              Call +91 91137 80293
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm text-xs font-black tracking-widest uppercase text-black bg-gradient-to-r from-[var(--theme-accent-dark)] via-[var(--theme-accent)] to-[var(--theme-accent-dark)] hover:brightness-110"
            >
              <Sparkles className="w-4 h-4 text-black" />
              Contact Us for Bookings
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
