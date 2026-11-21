import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import TiltCard from './common/TiltCard';

export default function TwoBrands() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Deux enseignes, une seule adresse gourmande</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">Une cuisine généreuse qui réunit tout le monde</h2>
        <p className="mt-4 text-muted-foreground text-base">
          Venez partager un poisson braisé croustillant, une pizza cuite avec amour ou un burger gourmet, puis terminez avec une coupe de fruits sculptée ou un cocktail rafraîchissant.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* El Fuego 3D Tilt Card */}
        <TiltCard maxTilt={8} className="glass rounded-[2rem] border border-primary/25 overflow-hidden">
          <div className="relative h-72 overflow-hidden [transform-style:preserve-3d]">
            <span className="absolute top-5 left-5 z-10 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold text-white shadow-xl [transform:translateZ(30px)]">
              <Flame className="size-4 animate-bounce" /> Restaurant & Bar
            </span>
            <img 
              src="/images/sign_elfuego.jpg" 
              alt="Enseigne El Fuego" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-8 [transform-style:preserve-3d]">
            <h3 className="font-serif text-3xl font-extrabold text-primary mb-3 [transform:translateZ(20px)]">El Fuego</h3>
            <p className="text-muted-foreground text-sm leading-relaxed [transform:translateZ(10px)]">
              Grillades braisées, pizzas savoureuses, pâtes italiennes, burgers fondants, spécialités libanaises et africaines. Bar à cocktails tropicaux, bières fraîches et sélection de vins. Retransmission des grands matchs et karaoké.
            </p>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-primary [transform:translateZ(15px)]">
              <span>🔥 Le temple des braises & de la convivialité à Cotonou</span>
            </div>
          </div>
        </TiltCard>

        {/* Exoti'K 3D Tilt Card */}
        <TiltCard maxTilt={8} className="glass rounded-[2rem] border border-exotik/30 overflow-hidden">
          <div className="relative h-72 overflow-hidden [transform-style:preserve-3d]">
            <span className="absolute top-5 left-5 z-10 flex items-center gap-1.5 rounded-full bg-exotik px-4 py-1.5 text-xs font-extrabold text-white shadow-xl [transform:translateZ(30px)]">
              <Sparkles className="size-4" /> Comptoir Fruits Frais
            </span>
            <img 
              src="/images/sign_exotik.jpg" 
              alt="Comptoir Exoti’K" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-8 [transform-style:preserve-3d]">
            <h3 className="font-serif text-3xl font-extrabold text-exotik mb-3 [transform:translateZ(20px)]">Exoti’K</h3>
            <p className="text-muted-foreground text-sm leading-relaxed [transform:translateZ(10px)]">
              Le temple de la fraîcheur : salades de fruits gorgées de soleil, brochettes chocolatées, jus naturels fraîchement pressés, plateaux décorés et pièces montées spectaculaires pour mariages et cérémonies.
            </p>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-exotik [transform:translateZ(15px)]">
              <span>🍉 100% Fruits naturels & fraîcheur tropicale absolue</span>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
