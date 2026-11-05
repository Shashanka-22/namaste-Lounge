import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { MenuSection } from './components/MenuSection';
import { SignatureSection } from './components/SignatureSection';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [prefilledDish, setPrefilledDish] = useState<string | undefined>(undefined);

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDishForReservation = (dishName: string) => {
    setPrefilledDish(dishName);
    scrollToReservation();
  };

  return (
    <div className="min-h-screen bg-[#171714] text-[#F5F0E6] flex flex-col font-sans selection:bg-[#C8A96B] selection:text-[#171714]">
      {/* Top Fixed Header */}
      <Navbar onReserveClick={scrollToReservation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onReserveClick={scrollToReservation} />

        {/* 2. The Experience: The Ambience, The Flavours, The Evenings */}
        <Experience
          onExploreMenu={scrollToMenu}
          onReserveClick={scrollToReservation}
        />

        {/* 3. The Signature Digital Menu */}
        <MenuSection onSelectForReservation={handleSelectDishForReservation} />

        {/* 4. Full-Width Signature Visual Experience */}
        <SignatureSection onReserveClick={scrollToReservation} />

        {/* 5. Editorial Photo Journal Gallery with Lightbox */}
        <Gallery />

        {/* 6. About Namaste Lounge */}
        <About />

        {/* 7. Google Reviews & Social Proof */}
        <Reviews />

        {/* 8. Table Reservation Experience & WhatsApp Confirmation */}
        <Reservation
          prefilledDish={prefilledDish}
          onClearPrefilledDish={() => setPrefilledDish(undefined)}
        />

        {/* 9. Location, Directions & Operating Hours */}
        <Location />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
