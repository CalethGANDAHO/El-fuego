import React from 'react';
import { CalendarCheck, ShoppingBag, PhoneCall, Star } from 'lucide-react';
import { useVibe } from '../context/VibeContext';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function Hero() {
  const { isOpen, statusText } = useVibe();

  return (
    <section id="top" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Nette Sans Flou */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/facade_jeep.jpg"
          alt="Façade El Fuego et terrasse extérieure à Cotonou"
          className="h-full w-full object-cover object-[center_42%]"
        />
        {/* Voile d'ambiance léger pour lisibilité sans gâcher la photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        {/* Badge Statut en Direct */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-5 py-2 backdrop-blur-md shadow-xl text-xs sm:text-sm font-medium text-white mb-6 animate-rise">
          <span className={`size-2.5 rounded-full ${isOpen ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-red-500'}`} />
          <span>{statusText}</span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-1 text-gold font-bold">
            <Star className="size-3.5 fill-gold text-gold" /> 4,1 sur Google
          </span>
        </div>

        {/* Titre Principal */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg animate-rise">
          Le feu des grillades,<br />
          <span className="text-primary">la fraîcheur des fruits.</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-xl text-white/90 drop-shadow animate-rise">
          Restaurant, pizzeria, bar à cocktails et comptoir de fruits frais d'exception à Akpakpa, Cotonou. Savourez nos créations sur place, à emporter ou en livraison rapide.
        </p>

        {/* Boutons d'Action */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-rise">
          <a
            href="#reserve"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/40 hover:bg-primary-hover hover:scale-105 transition-all"
          >
            <CalendarCheck className="size-5" />
            <span>Réserver une table</span>
          </a>
          <a
            href="#commander"
            className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white hover:text-background transition-all"
          >
            <ShoppingBag className="size-5" />
            <span>Commander en ligne</span>
          </a>
          <a
            href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
            className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-4 text-sm font-semibold text-white hover:border-primary transition-all"
          >
            <PhoneCall className="size-4 text-primary" />
            <span>Nous appeler</span>
          </a>
        </div>
      </div>
    </section>
  );
}
