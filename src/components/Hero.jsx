import React from 'react';
import { CalendarCheck, ShoppingBag, PhoneCall, Star, Sparkles } from 'lucide-react';
import { useVibe } from '../context/VibeContext';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function Hero() {
  const { isOpen, statusText } = useVibe();

  // Particules d'étincelles légères et fluides (60 FPS GPU)
  const embers = [
    { left: '15%', size: '6px', duration: '7s', delay: '0s', drift: '30px' },
    { left: '28%', size: '4px', duration: '9s', delay: '2s', drift: '-20px' },
    { left: '45%', size: '5px', duration: '8s', delay: '1.5s', drift: '40px' },
    { left: '62%', size: '7px', duration: '10s', delay: '3s', drift: '-35px' },
    { left: '78%', size: '4px', duration: '7.5s', delay: '0.8s', drift: '25px' },
    { left: '88%', size: '6px', duration: '9.5s', delay: '2.5s', drift: '-15px' },
  ];

  return (
    <section id="top" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden preserve-3d">
      {/* Photo d'arrière-plan 100% nette et lumineuse */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/facade_jeep.jpg"
          alt="Façade El Fuego et terrasse extérieure à Cotonou"
          className="h-full w-full object-cover object-[center_42%]"
        />
        {/* Dégradé doux uniquement tout en bas pour la transition fluide */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      {/* Étincelles lumineuses 3D flottantes */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        {embers.map((emb, idx) => (
          <span
            key={idx}
            className="ember-particle"
            style={{
              left: emb.left,
              bottom: '0',
              width: emb.size,
              height: emb.size,
              '--ember-duration': emb.duration,
              '--ember-delay': emb.delay,
              '--ember-drift': emb.drift,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        {/* Badge Statut en Direct avec flottement 3D */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/55 px-5 py-2 backdrop-blur-md shadow-2xl text-xs sm:text-sm font-semibold text-white mb-6 animate-float-3d">
          <span className={`size-2.5 rounded-full ${isOpen ? 'bg-emerald-400 shadow-[0_0_12px_#34d399]' : 'bg-red-500'}`} />
          <span>{statusText}</span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-1 text-gold font-bold">
            <Star className="size-3.5 fill-gold text-gold" /> 4,1 sur Google
          </span>
        </div>

        {/* Titre Principal avec ombres 3D percutantes */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white animate-rise [text-shadow:_0_4px_16px_rgba(0,0,0,0.95),_0_2px_4px_rgba(0,0,0,0.9)]">
          Le feu des grillades,<br />
          <span className="text-primary [text-shadow:_0_4px_20px_rgba(232,72,12,0.6)]">la fraîcheur des fruits.</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-xl text-white font-medium animate-rise [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]">
          Restaurant, pizzeria, bar à cocktails et comptoir de fruits frais d'exception à Akpakpa, Cotonou. Savourez nos créations sur place, à emporter ou en livraison rapide.
        </p>

        {/* Boutons d'Action 3D interactifs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-rise">
          <a
            href="#reserve"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-primary/40 hover:bg-primary-hover hover:-translate-y-1 hover:shadow-primary/60 transition-all duration-300"
          >
            <CalendarCheck className="size-5 group-hover:scale-110 transition-transform" />
            <span>Réserver une table</span>
          </a>
          <a
            href="#commander"
            className="group flex items-center gap-2 rounded-full border border-white/60 bg-black/45 px-8 py-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            <ShoppingBag className="size-5 group-hover:scale-110 transition-transform" />
            <span>Commander en ligne</span>
          </a>
          <a
            href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
            className="flex items-center gap-2 rounded-full border border-white/40 bg-black/45 px-6 py-4 text-sm font-semibold text-white hover:border-primary hover:-translate-y-1 backdrop-blur-md transition-all duration-300 shadow-xl"
          >
            <PhoneCall className="size-4 text-primary" />
            <span>Nous appeler</span>
          </a>
        </div>
      </div>
    </section>
  );
}
