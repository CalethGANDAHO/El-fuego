import React from 'react';
import { CalendarCheck, ShoppingBag, PhoneCall, Star } from 'lucide-react';
import { useVibe } from '../context/VibeContext';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function Hero() {
  const { isOpen, statusText } = useVibe();

  return (
    <section id="top" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Photo d'arrière-plan 100% claire, lumineuse, nette et sans aucun voile gris ou flou */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/facade_jeep.jpg"
          alt="Façade El Fuego et terrasse extérieure à Cotonou"
          className="h-full w-full object-cover object-[center_42%]"
        />
        {/* Fondu discret uniquement à la toute fin de l'image pour la transition avec la suite */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        {/* Badge Statut en Direct */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/50 px-5 py-2 backdrop-blur-md shadow-2xl text-xs sm:text-sm font-semibold text-white mb-6 animate-rise">
          <span className={`size-2.5 rounded-full ${isOpen ? 'bg-emerald-400 shadow-[0_0_12px_#34d399]' : 'bg-red-500'}`} />
          <span>{statusText}</span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-1 text-gold font-bold">
            <Star className="size-3.5 fill-gold text-gold" /> 4,1 sur Google
          </span>
        </div>

        {/* Titre Principal avec ombres nettes haute lisibilité */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white animate-rise [text-shadow:_0_3px_12px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.9)]">
          Le feu des grillades,<br />
          <span className="text-primary [text-shadow:_0_3px_12px_rgba(0,0,0,0.95)]">la fraîcheur des fruits.</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-xl text-white font-medium animate-rise [text-shadow:_0_2px_10px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,0.9)]">
          Restaurant, pizzeria, bar à cocktails et comptoir de fruits frais d'exception à Akpakpa, Cotonou. Savourez nos créations sur place, à emporter ou en livraison rapide.
        </p>

        {/* Boutons d'Action */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-rise">
          <a
            href="#reserve"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-black/50 hover:bg-primary-hover hover:scale-105 transition-all"
          >
            <CalendarCheck className="size-5" />
            <span>Réserver une table</span>
          </a>
          <a
            href="#commander"
            className="flex items-center gap-2 rounded-full border border-white/60 bg-black/40 px-8 py-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white hover:text-background transition-all shadow-xl"
          >
            <ShoppingBag className="size-5" />
            <span>Commander en ligne</span>
          </a>
          <a
            href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
            className="flex items-center gap-2 rounded-full border border-white/40 bg-black/40 px-6 py-4 text-sm font-semibold text-white hover:border-primary backdrop-blur-md transition-all shadow-xl"
          >
            <PhoneCall className="size-4 text-primary" />
            <span>Nous appeler</span>
          </a>
        </div>
      </div>
    </section>
  );
}
