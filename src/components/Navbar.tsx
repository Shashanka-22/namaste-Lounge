import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Signature Food', href: '#signature-food' },
    { name: 'Seafood', href: '#seafood' },
    { name: 'Cocktails', href: '#cocktails' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Story', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-luxury py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#101A17]/90 via-[#101A17]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex flex-col text-left group whitespace-nowrap shrink-0 focus-visible:outline-none"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.18em] text-[#FAF7F0] group-hover:text-[#C6A56A] transition-colors uppercase font-medium">
              Namaste Lounge
            </span>
            <span className="text-[10px] tracking-[0.32em] text-[#C6A56A] uppercase font-sans font-semibold -mt-0.5">
              Palolem · The Goan Escape
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] font-medium text-[#FAF7F0]/85"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#C6A56A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A56A] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone & Reservation Action */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+917820975889"
              className="hidden sm:inline-flex items-center gap-2 text-xs text-[#FAF7F0]/80 hover:text-[#C6A56A] transition-colors tracking-wider"
              title="Call Namaste Lounge"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A56A]" />
              <span className="tabular-nums">+91 78209 75889</span>
            </a>

            <button
              onClick={onReserveClick}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#101A17] bg-[#C6A56A] hover:bg-[#DFCA9B] rounded transition-all duration-200 whitespace-nowrap shrink-0 shadow-lg hover:shadow-[#C6A56A]/20 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#FAF7F0] hover:text-[#C6A56A] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-[#101A17]/98 backdrop-blur-2xl flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-[#C6A56A]/20">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] text-[#FAF7F0] uppercase font-medium">
                Namaste Lounge
              </span>
              <p className="text-[10px] tracking-[0.3em] text-[#C6A56A] uppercase font-semibold">
                The Goan Escape · Palolem
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#FAF7F0] hover:text-[#C6A56A] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 py-6 text-center overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#FAF7F0] hover:text-[#C6A56A] transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#C6A56A]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#101A17] bg-[#C6A56A] rounded hover:bg-[#DFCA9B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Your Table</span>
            </button>
            <div className="text-center text-xs text-[#FAF7F0]/60">
              <p>Dr Pundlik Gaitonde Road, Palolem, Canacona, Goa</p>
              <a href="tel:+917820975889" className="text-[#C6A56A] mt-1 inline-block font-mono tabular-nums">
                +91 78209 75889
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
