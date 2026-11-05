import React from 'react';
import { Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1210] text-[#FAF7F0] pt-20 pb-12 border-t border-[#C6A56A]/20 relative">
      {/* Subtle Gold Ornamental Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 px-6 bg-[#0B1210]">
        <span className="w-12 h-[1px] bg-[#C6A56A]/40" />
        <span className="text-xs tracking-[0.3em] uppercase text-[#C6A56A] font-serif font-semibold">
          Namaste
        </span>
        <span className="w-12 h-[1px] bg-[#C6A56A]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#19241F]">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <span className="font-serif text-3xl md:text-4xl tracking-widest text-[#FAF7F0] uppercase font-medium block">
              Namaste Lounge
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C6A56A] font-semibold mt-1">
              The Goan Escape · Palolem
            </p>
            <p className="mt-4 font-serif text-xl italic text-[#C6A56A] font-light">
              "Where Flavours Meet Beautiful Moments."
            </p>
            <p className="mt-4 text-xs sm:text-sm text-[#B9B5A9] font-light leading-relaxed max-w-sm">
              An open-air luxury cocktail lounge and coastal dining destination celebrating authentic Goan flavors, live acoustic evenings, and relaxed hospitality under the coconut palms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A56A] font-semibold mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#FAF7F0]/80">
              <li>
                <a href="#" className="hover:text-[#C6A56A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C6A56A] transition-colors">The Experience</a>
              </li>
              <li>
                <a href="#signature-food" className="hover:text-[#C6A56A] transition-colors">Signature Food</a>
              </li>
              <li>
                <a href="#seafood" className="hover:text-[#C6A56A] transition-colors">Seafood Experience</a>
              </li>
              <li>
                <a href="#cocktails" className="hover:text-[#C6A56A] transition-colors">Cocktail Collection</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C6A56A] transition-colors">Digital Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A56A] transition-colors">Photo Journal</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C6A56A] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#C6A56A] transition-colors">Table Reservation</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A56A] font-semibold mb-5">
              Contact & Hospitality
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-[#B9B5A9]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A56A] shrink-0 mt-0.5" />
                <span>
                  Dr Pundlik Gaitonde Road, Mohanbagh, Palolem, Canacona, Goa 403702, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A56A] shrink-0" />
                <a href="tel:+917820975889" className="hover:text-[#C6A56A] transition-colors font-mono tabular-nums text-[#FAF7F0]">
                  +91 78209 75889
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-[#FAF7F0]/60 uppercase tracking-wider">
                  Open Daily: 11:30 AM – 11:30 PM
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Namaste+Lounge+Palolem+Goa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-sm bg-[#19241F] border border-[#C6A56A]/25 hover:border-[#C6A56A] text-[#C6A56A] text-xs transition-colors"
                >
                  Google Business Profile
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-sm bg-[#19241F] border border-[#C6A56A]/25 hover:border-[#C6A56A] text-[#FAF7F0] hover:text-[#C6A56A] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F0]/50">
          <p>
            © {new Date().getFullYear()} Namaste Lounge, Palolem, Goa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="italic font-serif text-[#C6A56A]/75">
              "Where Flavours Meet Beautiful Moments."
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#C6A56A]/30 hover:border-[#C6A56A] text-[#FAF7F0] hover:text-[#C6A56A] transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
