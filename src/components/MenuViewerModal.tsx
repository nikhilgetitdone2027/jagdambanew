import React from 'react';
import { MenuData } from '../types';
import { vegMenuData, nonVegMenuData } from '../data/menu';
import { businessData } from '../data/business';
import { Logo } from '../assets/logo/Logo';
import { X, Sparkles, ChefHat, Leaf, Drumstick } from 'lucide-react';

interface MenuViewerModalProps {
  isOpen: boolean;
  menuType: 'veg' | 'non-veg';
  onClose: () => void;
  onSwitchType: (type: 'veg' | 'non-veg') => void;
}

export const MenuViewerModal: React.FC<MenuViewerModalProps> = ({
  isOpen,
  menuType,
  onClose,
  onSwitchType,
}) => {
  if (!isOpen) return null;

  const currentMenu: MenuData = menuType === 'veg' ? vegMenuData : nonVegMenuData;
  const isVeg = menuType === 'veg';

  return (
    <div
      id="menu-viewer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 lg:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-[var(--theme-canvas-bg)] rounded-sm shadow-2xl border-2 border-[var(--theme-accent)]/60 my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header Bar */}
        <div className="bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] px-6 py-4 flex items-center justify-between border-b-2 border-[var(--theme-accent)]/40 shrink-0 shadow-lg">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-black text-[var(--theme-accent-light)] leading-tight">
                {currentMenu.title}
              </h3>
              <p className="text-[11px] font-bold text-slate-300 hidden sm:block">
                Jagadamba Caterer & Event Planner • Official Banquet Menu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Menu Type Switcher in Modal */}
            <div className="flex bg-[var(--theme-primary-surface)] p-1 rounded-sm border border-[var(--theme-accent)]/30 mr-2">
              <button
                onClick={() => onSwitchType('veg')}
                className={`px-3 py-1 rounded-sm text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isVeg
                    ? 'bg-emerald-700 text-white shadow-sm border border-emerald-500'
                    : 'text-slate-300 hover:text-white font-bold'
                }`}
              >
                <Leaf className="w-3 h-3 text-emerald-300" />
                Veg Menu
              </button>
              <button
                onClick={() => onSwitchType('non-veg')}
                className={`px-3 py-1 rounded-sm text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  !isVeg
                    ? 'bg-rose-900 text-white shadow-sm border border-rose-600'
                    : 'text-slate-300 hover:text-white font-bold'
                }`}
              >
                <Drumstick className="w-3 h-3 text-rose-300" />
                Non-Veg Menu
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-sm bg-[var(--theme-primary-surface)] hover:bg-slate-800 text-slate-200 hover:text-red-400 border border-[var(--theme-accent)]/30 transition-colors cursor-pointer"
              aria-label="Close Menu Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Menu Sheet Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[var(--theme-canvas-bg)]">
          {/* Royal Menu Header */}
          <div className="text-center pb-6 border-b border-[var(--theme-accent)]/20">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-[var(--theme-primary-surface)] text-[var(--theme-accent-light)] text-xs font-black uppercase tracking-widest mb-2 border border-[var(--theme-accent)]/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
              Customized Catering Services by Chef Haribansh Pandey
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-black text-[var(--theme-accent-light)] tracking-tight">
              {currentMenu.title}
            </h2>
            <p className="font-serif italic text-sm sm:text-base font-medium text-slate-300 mt-1 max-w-xl mx-auto">
              {currentMenu.subtitle}
            </p>
            <p className="text-xs font-medium text-[var(--theme-text-muted)] mt-2">
              All dishes can be customized and curated to create your dream wedding or celebration menu.
            </p>
          </div>

          {/* Categorized Menu Dish List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentMenu.categories.map((category) => (
              <div
                key={category.id}
                className="bg-[var(--theme-canvas-surface)] p-5 rounded-sm border-2 border-[var(--theme-accent)]/30 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--theme-accent)]/20 mb-3">
                    <h4 className="font-cinzel text-base font-black text-[var(--theme-accent-light)] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rotate-45 bg-[var(--theme-accent)]" />
                      {category.name}
                    </h4>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[var(--theme-accent-light)] bg-[var(--theme-primary-surface)] px-2.5 py-0.5 rounded-sm border border-[var(--theme-accent)]/30">
                      {category.items.length} Items
                    </span>
                  </div>

                  {category.description && (
                    <p className="text-xs font-medium text-slate-400 italic mb-3">
                      {category.description}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.id} className="text-xs sm:text-sm text-slate-300 border-b border-[var(--theme-accent)]/10 pb-2 last:border-0 last:pb-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-black text-white text-sm">
                            {item.name}
                          </span>
                          {item.hindiName && (
                            <span className="text-xs text-[var(--theme-accent)] font-black shrink-0 font-sans bg-[var(--theme-primary-surface)] px-2 py-0.5 rounded-sm border border-[var(--theme-accent)]/30">
                              {item.hindiName}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs font-medium text-[var(--theme-text-muted)] mt-1 leading-normal">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Official Terms & Conditions */}
          <div className="mt-8 p-6 rounded-sm bg-[var(--theme-canvas-surface)] border-2 border-[var(--theme-accent)]/40 shadow-xl text-left">
            <h4 className="font-cinzel text-base sm:text-lg font-black text-[var(--theme-accent-light)] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rotate-45 bg-[var(--theme-accent)]" />
              Terms & Conditions (From Official Menu)
            </h4>
            <ul className="text-xs sm:text-sm font-medium text-slate-300 space-y-2 list-disc list-inside">
              <li>20% will be charged if the function is less than 50 persons.</li>
              <li>Tentative booking is not confirmed unless advance is paid.</li>
              {isVeg ? (
                <>
                  <li><strong>Jain Preparations:</strong> Please notify us in advance regarding ingredients not required and total count of Jain guests.</li>
                  <li>Booking will be confirmed against <strong className="text-[var(--theme-accent-light)]">50% advance payment</strong> and rest of the bills to be settled at the end of the party.</li>
                  <li>In the event of cancellation, advance amount will be refunded after deduction of service charges (10%).</li>
                </>
              ) : (
                <>
                  <li>Booking will be confirmed against <strong className="text-[var(--theme-accent-light)]">60% advance payment</strong> and rest of the bills to be settled at the end of the party.</li>
                  <li>In the event of cancellation, advance amount will be refunded after deduction of service charges (20%).</li>
                </>
              )}
              <li>Plate count will determine the final number of persons.</li>
              <li>Damages to catering properties if any will be charged.</li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[var(--theme-accent)]/20 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-400">
              <div>
                <strong className="text-[var(--theme-accent-light)] font-black">Contact Person:</strong> Chef Haribansh Kumar Pandey (S/O Shri Damodar Pandey)
              </div>
              <div>
                Sonar Dangal, Opposite of Durga Mandir, Chirkunda, Dhanbad (JH)
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-6 p-6 rounded-sm bg-[var(--theme-canvas-surface)] text-[var(--theme-text-dark)] text-center border-2 border-[var(--theme-accent)]/40 shadow-xl">
            <h4 className="font-cinzel text-lg font-black text-[var(--theme-accent-light)] mb-1">
              Ready to Customize Your Event Menu?
            </h4>
            <p className="text-xs sm:text-sm font-medium text-[var(--theme-text-muted)] max-w-lg mx-auto mb-4">
              Contact Chef Haribansh Pandey and the Jagadamba team at {businessData.phones.join(' or ')} to finalize your dishes and live counter requirements.
            </p>
            <a
              href={`https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(businessData.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs sm:text-sm font-black uppercase tracking-widest text-black bg-gradient-to-r from-[var(--theme-accent-dark)] to-[var(--theme-accent)] hover:from-[var(--theme-accent)] hover:to-[var(--theme-accent-light)] shadow-xl transition-all"
            >
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
