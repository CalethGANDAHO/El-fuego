import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

export default function TwoBrands() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Deux enseignes, une seule adresse gourmande</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">Une cuisine généreuse qui réunit tout le monde</h2>
        <p className="mt-4 text-muted-foreground text-base">
          Venez partager un poisson braisé croustillant, une pizza cuite avec amour ou un burger gourmet, puis terminez avec une coupe de fruits sculptée ou un cocktail rafraîchissant.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* El Fuego */}
        <div className="glass group overflow-hidden rounded-3xl border border-primary/20 hover:border-primary transition-all flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <span className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-md">
              <Flame className="size-3.5" /> Restaurant & Bar
            </span>
            <img 
              src="/images/sign_elfuego.jpg" 
              alt="Enseigne El Fuego" 
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">El Fuego</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Grillades braisées, pizzas savoureuses, pâtes italiennes, burgers fondants, spécialités libanaises et africaines. Bar à cocktails tropicaux, bières fraîches et sélection de vins. Retransmission des grands matchs et karaoké.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-primary">
              <span>🔥 Le temple des braises & de la convivialité</span>
            </div>
          </div>
        </div>

        {/* Exoti'K */}
        <div className="glass group overflow-hidden rounded-3xl border border-exotik/30 hover:border-exotik transition-all flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <span className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-exotik px-3 py-1 text-xs font-bold text-white shadow-md">
              <Sparkles className="size-3.5" /> Comptoir Fruits Frais
            </span>
            <img 
              src="/images/sign_exotik.jpg" 
              alt="Comptoir Exoti’K" 
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-exotik mb-3">Exoti’K</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Le temple de la fraîcheur : salades de fruits gorgées de soleil, brochettes chocolatées, jus naturels fraîchement pressés, plateaux décorés et pièces montées spectaculaires pour mariages et cérémonies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-exotik">
              <span>🍉 100% Fruits naturels & fraîcheur absolue</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
