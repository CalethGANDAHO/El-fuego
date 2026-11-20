import React from 'react';
import { Film } from 'lucide-react';

export default function VideosSection() {
  return (
    <section id="videos" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">En direct des cuisines</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">El Fuego en action</h2>
        <p className="mt-3 text-muted-foreground text-base">
          Admirez la préparation artisanale de nos burgers gourmets et de nos pizzas façonnées à la main.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass overflow-hidden rounded-3xl border border-border group">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/videos/video1_poster.jpeg"
            className="w-full aspect-[9/16] max-h-[480px] object-cover bg-black"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
          <div className="p-5">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <Film className="size-4 text-primary" /> Burgers Fondants & Viande Saisie
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Viande fraîche assaisonnée, pain moelleux doré et cuisson au grill.
            </p>
          </div>
        </div>

        <div className="glass overflow-hidden rounded-3xl border border-border group">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/videos/video2_poster.jpeg"
            className="w-full aspect-[9/16] max-h-[480px] object-cover bg-black"
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <div className="p-5">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <Film className="size-4 text-primary" /> Pizzas Façonnées à la Main
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Pâte levée avec patience, sauce tomate maison et cuisson au feu vif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
