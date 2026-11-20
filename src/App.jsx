import React, { useState } from 'react';
import { VibeProvider } from './context/VibeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TwoBrands from './components/TwoBrands';
import Menu from './components/Menu';
import OrderSection from './components/OrderSection';
import ReservationSection from './components/Reservation/ReservationSection';
import VideosSection from './components/VideosSection';
import AtmosphereGallery from './components/AtmosphereGallery';
import ReviewsSection from './components/ReviewsSection';
import Features from './components/Features';
import LocationAccess from './components/LocationAccess';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminModal from './components/AdminDashboard/AdminModal';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedDish, setPreselectedDish] = useState(null);

  const handleSelectDishForReservation = (dish) => {
    setPreselectedDish(dish);
    const el = document.getElementById('reserve');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <VibeProvider>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        {/* Navigation */}
        <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

        <main>
          {/* 1. Hero plein écran avec photo nette */}
          <Hero />

          {/* 2. Présentation des 2 enseignes (El Fuego & Exoti'K) */}
          <TwoBrands />

          {/* 3. Menu avec filtres et modale d'ingrédients */}
          <Menu onSelectDishForReservation={handleSelectDishForReservation} />

          {/* 4. Bon de commande en direct WhatsApp */}
          <OrderSection />

          {/* 5. Module de réservation 3 étapes avec Pass VIP QR Code */}
          <ReservationSection preselectedDish={preselectedDish} />

          {/* 6. Vidéos en direct des cuisines */}
          <VideosSection />

          {/* 7. Galerie photos de l'ambiance */}
          <AtmosphereGallery />

          {/* 8. Avis vérifiés Google Maps */}
          <ReviewsSection />

          {/* 9. Atouts & Caractéristiques */}
          <Features />

          {/* 10. Horaires & Carte interactive Google Maps */}
          <LocationAccess />
        </main>

        {/* Pied de page */}
        <Footer />

        {/* Barre fixe mobile */}
        <MobileBottomNav />

        {/* Bouton WhatsApp flottant */}
        <FloatingWhatsApp />

        {/* Modale d'administration restaurateur */}
        <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      </div>
    </VibeProvider>
  );
}
