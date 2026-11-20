import React, { useState } from 'react';
import { Phone, Lock, Menu as MenuIcon, X, CalendarCheck } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function Navbar({ onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="text-3xl animate-flame-pulse">🔥</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              El Fuego <span className="text-exotik font-sans font-extrabold text-xl">& Exoti’K</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold">Cotonou · Akpakpa</span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#commander" className="hover:text-primary transition-colors">Commander</a>
          <a href="#reserve" className="hover:text-primary transition-colors">Réservation VIP</a>
          <a href="#videos" className="hover:text-primary transition-colors">Vidéos</a>
          <a href="#galerie" className="hover:text-primary transition-colors">Galerie</a>
          <a href="#avis" className="hover:text-primary transition-colors">Avis</a>
          <a href="#contact" className="hover:text-primary transition-colors">Infos & Accès</a>
        </nav>

        {/* Actions Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={onOpenAdmin}
            className="p-2 text-muted-foreground hover:text-white transition-colors"
            title="Espace Restaurateur"
          >
            <Lock className="size-4" />
          </button>
          <a
            href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-white hover:border-primary transition-colors"
          >
            <Phone className="size-3.5 text-primary" />
            <span>59 29 02 29</span>
          </a>
          <a
            href="#reserve"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all"
          >
            <CalendarCheck className="size-3.5" />
            <span>Réserver une table</span>
          </a>
        </div>

        {/* Burger Button Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {/* Menu Déroulant Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 text-base font-medium">
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50">Menu en images</a>
          <a href="#commander" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50">Commander en ligne</a>
          <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-primary font-bold">Réserver une table</a>
          <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50">Nos Vidéos</a>
          <a href="#galerie" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50">Galerie Ambiance</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2">Accès & Horaires</a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-semibold text-white"
            >
              <Phone className="size-4 text-primary" />
              <span>Appeler le restaurant</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-2"
            >
              <Lock className="size-3" /> Espace Administrateur
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
