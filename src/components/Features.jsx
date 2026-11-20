import React from 'react';
import { ShieldCheck, Wind, Tv, Car, Music, Users } from 'lucide-react';

const FEATURES = [
  { icon: Car, title: "Parking Gratuit Sécurisé", desc: "Emplacement spacieux et gardiennage sur place." },
  { icon: Wind, title: "Salle Climatisée & Terrasse", desc: "Au choix : brise du soir en terrasse ou fraîcheur intérieure." },
  { icon: Tv, title: "Écran Géant Matchs", desc: "Diffusion de tous les grands matchs de football en direct." },
  { icon: Music, title: "Soirées Karaoké & DJ", desc: "Mardi karaoké et ambiance musicale le week-end." },
  { icon: Users, title: "Événements & Familles", desc: "Accueil chaleureux adapté aux repas en groupe et anniversaires." },
  { icon: ShieldCheck, title: "Hygiène & Qualité", desc: "Produits frais rigoureusement sélectionnés au quotidien." }
];

export default function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 border-y border-border/60">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {FEATURES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-3 shadow-md">
                <Icon className="size-6" />
              </div>
              <h3 className="font-serif text-sm font-bold text-white mb-1">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
