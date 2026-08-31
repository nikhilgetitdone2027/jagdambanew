import React from 'react';
import { SectionHeading } from './SectionHeading';
import { businessData } from '../data/business';
import {
  PhoneCall,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Send,
  Star,
  Heart,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    businessData.whatsappDefaultMessage
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--theme-canvas-bg)] text-[var(--theme-text-dark)] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="LET'S PLAN YOUR CELEBRATION"
          subtitle="Speak directly with our team to reserve your wedding date, customize your banquet menu, and discuss venue decoration."
        />

        {/* 4 Large Action CTA Buttons Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* CALL NOW */}
          <a
            id="contact-call-btn"
            href={`tel:${businessData.primaryPhone}`}
            className="p-6 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--theme-primary-surface)] border-2 border-[var(--theme-accent)] flex items-center justify-center text-[var(--theme-accent)] mb-4 shadow-md group-hover:scale-110 transition-transform">
              <PhoneCall className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors">
              CALL NOW
            </span>
            <span className="text-xs font-black text-white mt-1">
              +91 91137 80293
            </span>
            <span className="text-[11px] font-bold text-slate-400 mt-0.5">
              +91 96930 70308
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] group-hover:from-[var(--theme-accent)] group-hover:to-[var(--theme-accent-light)] transition-colors">
              Direct Phone Call
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            id="contact-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-emerald-500/40 hover:border-emerald-400 shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-4 shadow-md group-hover:scale-110 transition-transform">
              <MessageSquare className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-black text-emerald-300 group-hover:text-emerald-200 transition-colors">
              WHATSAPP
            </span>
            <span className="text-xs font-black text-emerald-100 mt-1">
              Chat for Menus & Quotes
            </span>
            <span className="text-[11px] font-bold text-emerald-400 mt-0.5">
              Instant Inquiry & Brochure
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider text-white bg-emerald-600 group-hover:bg-emerald-500 transition-colors">
              Start WhatsApp Chat
            </div>
          </a>

          {/* EMAIL */}
          <a
            id="contact-email-btn"
            href={`mailto:${businessData.email}?subject=${encodeURIComponent('Event Catering & Planning Inquiry - Jagadamba Caterer')}`}
            className="p-6 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--theme-primary-surface)] border-2 border-[var(--theme-accent)] flex items-center justify-center text-[var(--theme-accent)] mb-4 shadow-md group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors">
              EMAIL
            </span>
            <span className="text-xs font-black text-white mt-1 break-all max-w-[200px]">
              {businessData.email}
            </span>
            <span className="text-[11px] font-bold text-slate-400 mt-0.5">
              Event Details & Proposals
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] group-hover:from-[var(--theme-accent)] group-hover:to-[var(--theme-accent-light)] transition-colors">
              Send Email
            </div>
          </a>

          {/* GET DIRECTIONS */}
          <a
            id="contact-directions-btn"
            href={businessData.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)] shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[var(--theme-primary-surface)] border-2 border-[var(--theme-accent)] flex items-center justify-center text-[var(--theme-accent)] mb-4 shadow-md group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-black text-[var(--theme-accent-light)] group-hover:text-[var(--theme-accent)] transition-colors">
              GET DIRECTIONS
            </span>
            <span className="text-xs font-black text-white mt-1">
              {businessData.location.area}, {businessData.location.city}
            </span>
            <span className="text-[11px] font-bold text-slate-400 mt-0.5">
              {businessData.location.state}
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] group-hover:from-[var(--theme-accent)] group-hover:to-[var(--theme-accent-light)] flex items-center gap-1 transition-colors">
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Dedicated Google Review & Feedback Banner Card */}
        {businessData.reviewUrl && (
          <div className="mb-14 p-6 sm:p-8 rounded-sm bg-gradient-to-r from-amber-950/60 via-[var(--theme-canvas-surface)] to-amber-950/60 border-2 border-[var(--theme-accent)]/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-full bg-amber-900/40 text-[var(--theme-accent)] border border-[var(--theme-accent)]/50 shadow-sm shrink-0">
                <Star className="w-7 h-7 fill-[var(--theme-accent)] text-[var(--theme-accent)]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--theme-accent)] text-[var(--theme-accent)]" />
                  ))}
                  <span className="text-xs font-black text-[var(--theme-accent)] ml-2 tracking-wide uppercase">
                    5.0 Rated Client Experience
                  </span>
                </div>
                <h4 className="font-cinzel text-lg sm:text-xl font-black text-[var(--theme-accent-light)]">
                  Loved Our Hospitality & Flavors? Give Us a Review!
                </h4>
                <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] font-medium max-w-2xl">
                  Your feedback helps us continuously elevate our royal culinary craftsmanship, service hospitality, and event arrangements across Jharkhand.
                </p>
              </div>
            </div>

            <a
              id="google-review-btn"
              href={businessData.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-xs sm:text-sm font-black uppercase tracking-widest text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] hover:from-[var(--theme-accent)] hover:to-[var(--theme-accent-light)] shadow-xl transition-all active:scale-95 shrink-0 border border-amber-300 cursor-pointer"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Give Your Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Detailed Address & Office Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Card */}
          <div className="lg:col-span-6 rounded-sm bg-[var(--theme-canvas-surface)] p-6 sm:p-8 border-2 border-[var(--theme-accent)]/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--theme-accent)]/20">
                <div className="p-3 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent)] border border-[var(--theme-accent)]/40 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-black tracking-widest text-[var(--theme-accent)] block">
                    Official Head Office
                  </span>
                  <h4 className="font-cinzel text-xl font-black text-[var(--theme-accent-light)]">
                    Jagadamba Caterer & Event Planner
                  </h4>
                </div>
              </div>

              {/* Address Lines */}
              <div className="space-y-3 text-sm text-[var(--theme-text-muted)] font-medium mb-6">
                <div className="flex items-start gap-3">
                  <span className="font-cinzel font-black text-[var(--theme-accent)] shrink-0">Address:</span>
                  <span className="text-white font-medium leading-relaxed">
                    {businessData.location.addressLine1},<br />
                    {businessData.location.area}, {businessData.location.city},<br />
                    {businessData.location.state}
                  </span>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <span className="font-cinzel font-black text-[var(--theme-accent)] shrink-0">Phones:</span>
                  <div className="space-y-1">
                    {businessData.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="block text-white font-bold hover:text-[var(--theme-accent)] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <span className="font-cinzel font-black text-[var(--theme-accent)] shrink-0">Email:</span>
                  <a
                    href={`mailto:${businessData.email}`}
                    className="text-white font-bold hover:text-[var(--theme-accent)] transition-colors"
                  >
                    {businessData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas Tag Strip */}
            <div className="pt-4 border-t border-[var(--theme-accent)]/20">
              <span className="text-xs text-[var(--theme-accent)] block mb-2 font-black uppercase tracking-wider">
                Serving Destinations Across:
              </span>
              <div className="flex flex-wrap gap-2 mb-4">
                {businessData.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-sm text-xs font-black bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] border border-[var(--theme-accent)]/40 shadow-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Official Social Media Handles */}
              <div className="pt-3 border-t border-[var(--theme-accent)]/20">
                <span className="text-xs text-[var(--theme-accent)] block mb-2 font-black uppercase tracking-wider">
                  Connect On Social Media:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={businessData.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black text-white bg-red-600 hover:bg-red-700 transition-colors shadow-xs"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube Channel</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={businessData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black text-white bg-pink-600 hover:bg-pink-700 transition-colors shadow-xs"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={businessData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-black text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>Facebook Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map Representation */}
          <div className="lg:col-span-6 rounded-sm overflow-hidden bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/30 shadow-xl relative flex flex-col">
            <div className="p-4 bg-[var(--theme-primary-surface)] border-b border-[var(--theme-accent)]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--theme-accent)]" />
                <span className="text-xs font-black font-cinzel text-white">
                  Location Map — Chirkunda, Dhanbad
                </span>
              </div>
              <a
                href={businessData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-[var(--theme-accent)] hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Iframe embed with clean fallback */}
            <div className="relative flex-1 min-h-[280px] bg-slate-950">
              <iframe
                title="Jagadamba Caterer Location Map"
                src="https://maps.google.com/maps?q=Sonar%20Dangal,%20Chirkunda,%20Dhanbad,%20Jharkhand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
