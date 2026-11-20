import React from 'react';
import { reviews } from '../data/reviewsData';
import { Star, MessageSquare } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function ReviewsSection() {
  return (
    <section id="avis" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Témoignages Clients</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">Ce qu'ils disent de nous</h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="font-serif text-3xl font-extrabold text-gold">4,1 / 5</span>
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">(+42 avis Google Maps)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass rounded-3xl p-6 border border-border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-white text-sm">{r.name}</span>
                <div className="flex text-gold">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="size-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                "{r.comment}"
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/50 flex justify-between items-center text-[11px] text-muted-foreground">
              <span>{r.source}</span>
              <span>{r.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={RESTAURANT_CONFIG.contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-semibold text-white hover:border-primary transition-all"
        >
          <MessageSquare className="size-3.5 text-primary" /> Voir tous les avis sur Google Maps &rarr;
        </a>
      </div>
    </section>
  );
}
