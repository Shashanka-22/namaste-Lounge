import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Experience } from './components/Experience';
import { SignatureFood } from './components/SignatureFood';
import { SeafoodExperience } from './components/SeafoodExperience';
import { CocktailCollection } from './components/CocktailCollection';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [prefilledDish, setPrefilledDish] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDishForReservation = (dishName: string) => {
    setPrefilledDish(dishName);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-[#101A17] text-[#FAF7F0] flex flex-col font-sans selection:bg-[#C6A56A] selection:text-[#101A17]">
      {/* 1. Luxury Fixed Navigation */}
      <Navbar onReserveClick={() => scrollToSection('reservation')} />

      <main className="flex-1">
        {/* 2. Hero: "Escape the Ordinary. Stay for the Experience." */}
        <Hero
          onReserveClick={() => scrollToSection('reservation')}
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* 3. Section A: Introduction — "An Escape Worth Experiencing" */}
        <Introduction
          onReserveClick={() => scrollToSection('reservation')}
          onExploreExperience={() => scrollToSection('experience')}
        />

        {/* 4. Section B: The Experience — 01 Ambience, 02 Flavours, 03 Evenings */}
        <Experience
          onExploreMenu={() => scrollToSection('menu')}
          onReserveClick={() => scrollToSection('reservation')}
        />

        {/* 5. Section C: Signature Food — Warm Ivory Editorial Feature */}
        <SignatureFood
          onSelectForReservation={handleSelectDishForReservation}
          onExploreFullMenu={() => scrollToSection('menu')}
        />

        {/* 6. Section D: Seafood Experience — Dedicated Kingfish, Mackerel, Calamari, Prawns */}
        <SeafoodExperience
          onSelectForReservation={handleSelectDishForReservation}
          onExploreSeafoodMenu={() => scrollToSection('menu')}
        />

        {/* 7. Section E: Cocktail Collection — Dark Background & Champagne Gold (All ₹380) */}
        <CocktailCollection
          onReserveClick={() => scrollToSection('reservation')}
        />

        {/* 8. Digital Interactive Menu — With 7 Requested Categories & Search */}
        <MenuSection
          onSelectForReservation={handleSelectDishForReservation}
        />

        {/* 9. Section F: Our Gallery — Asymmetric Masonry with Authentic Photos & Lightbox */}
        <Gallery />

        {/* 10. Our Story — Rooted in Hospitality */}
        <About />

        {/* 11. Section G: Customer Reviews — Verified 4.7 Google Rating & 788 Reviews */}
        <Reviews />

        {/* 12. Section I: Table Reservation Experience & WhatsApp Confirmation */}
        <Reservation
          prefilledDish={prefilledDish}
          onClearPrefilledDish={() => setPrefilledDish(undefined)}
        />

        {/* 13. Section H: Location, Google Map, Directions & Hours */}
        <Location />
      </main>

      {/* 14. Luxury Dark Footer */}
      <Footer />

      {/* 15. Instant WhatsApp Concierge Button */}
      <FloatingWhatsApp />
    </div>
  );
}
