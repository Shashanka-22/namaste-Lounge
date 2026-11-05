import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed, Calendar } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex flex-col text-left group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-widest text-[#F5F0E6] group-hover:text-[#C8A96B] transition-colors uppercase font-medium">
              Namaste Lounge
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#C8A96B] uppercase font-sans -mt-1 font-semibold">
              Palolem · Goa
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.16em] font-medium text-[#F5F0E6]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#C8A96B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96B] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+917820975889"
              className="hidden sm:inline-flex items-center gap-2 text-xs text-[#F5F0E6]/70 hover:text-[#C8A96B] transition-colors tracking-wider"
              title="Call Namaste Lounge"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span className="tabular-nums">+91 78209 75889</span>
            </a>

            <button
              onClick={onReserveClick}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#171714] bg-[#C8A96B] hover:bg-[#D8BD83] rounded transition-all duration-200 whitespace-nowrap shrink-0 shadow-lg hover:shadow-[#C8A96B]/20 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F0E6] hover:text-[#C8A96B] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#171714]/98 backdrop-blur-xl flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-[#C8A96B]/20">
            <div>
              <span className="font-serif text-2xl tracking-widest text-[#F5F0E6] uppercase font-medium">
                Namaste Lounge
              </span>
              <p className="text-[10px] tracking-[0.25em] text-[#C8A96B] uppercase font-semibold">
                Palolem · Goa
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F5F0E6] hover:text-[#C8A96B] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#F5F0E6] hover:text-[#C8A96B] transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#C8A96B]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#171714] bg-[#C8A96B] rounded hover:bg-[#D8BD83] transition-colors flex items-center justify-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Reserve Your Table</span>
            </button>
            <div className="text-center text-xs text-[#F5F0E6]/60">
              <p>Dr Pundlik Gaitonde Road, Palolem, Goa</p>
              <a href="tel:+917820975889" className="text-[#C8A96B] mt-1 inline-block tabular-nums">
                +91 78209 75889
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
