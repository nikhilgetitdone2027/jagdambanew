import React from 'react';
import { businessData } from '../data/business';
import { Phone, MessageSquare, UtensilsCrossed } from 'lucide-react';

interface MobileContactBarProps {
  onOpenMenu: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenMenu }) => {
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    businessData.whatsappDefaultMessage
  )}`;

  const handleMenuClick = () => {
    const element = document.querySelector('#menu');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    onOpenMenu();
  };

  return (
    <div
      id="mobile-sticky-contact-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-300 px-3 py-2.5 shadow-2xl safe-bottom"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          id="mobile-bar-call-btn"
          href={`tel:${businessData.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-white text-slate-900 border-2 border-slate-300 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[var(--theme-primary)] mb-0.5" />
          <span className="font-cinzel text-[11px] font-black tracking-wider text-slate-900">
            CALL
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          id="mobile-bar-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-emerald-600 text-white border-2 border-emerald-700 active:scale-95 transition-transform shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="font-cinzel text-[11px] font-black tracking-wider text-white">
            WHATSAPP
          </span>
        </a>

        {/* MENU */}
        <button
          id="mobile-bar-menu-btn"
          type="button"
          onClick={handleMenuClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-sm bg-[var(--theme-primary)] text-white active:scale-95 transition-transform shadow-sm cursor-pointer border-2 border-[var(--theme-primary-dark)]"
        >
          <UtensilsCrossed className="w-4 h-4 text-white mb-0.5" />
          <span className="font-cinzel text-[11px] font-black tracking-wider text-white">
            MENU
          </span>
        </button>
      </div>
    </div>
  );
};
