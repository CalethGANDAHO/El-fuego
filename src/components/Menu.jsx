import React, { useState } from 'react';
import { menuCategories, menuDishes } from '../data/menuData';
import MenuModal from './MenuModal';
import TiltCard from './common/TiltCard';
import { useLanguage } from '../context/LanguageContext';

export default function Menu({ onSelectDishForReservation }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDish, setSelectedDish] = useState(null);
  const { t } = useLanguage();

  const filtered = menuDishes.filter(
    dish => activeCategory === "all" || dish.category === activeCategory
  );

  return (
    <section id="menu" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{t('menuEyebrow')}</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-foreground">{t('menuTitle')}</h2>
        <p className="mt-3 text-muted-foreground text-base">
          {t('menuDesc')}
        </p>

        {/* Catégories / Onglets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-xl shadow-primary/40 scale-105'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grille des Plats avec Effet 3D Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(dish => (
          <div key={dish.id} onClick={() => setSelectedDish(dish)}>
            <TiltCard
              maxTilt={10}
              className="glass group cursor-pointer overflow-hidden rounded-2xl border border-border/80 hover:border-primary/60 transition-colors h-full flex flex-col"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-secondary [transform-style:preserve-3d]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-black/75 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-lg [transform:translateZ(25px)]">
                  {dish.price}
                </span>
                {dish.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold uppercase text-white shadow-lg [transform:translateZ(30px)]">
                    {dish.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between [transform-style:preserve-3d]">
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors [transform:translateZ(15px)]">
                    {dish.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 [transform:translateZ(10px)]">
                    {dish.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary [transform:translateZ(15px)]">
                  <span>{t('menuDetailsBtn')}</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>

      {/* Modale d'ingrédients */}
      <MenuModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onSelectForReservation={onSelectDishForReservation}
      />
    </section>
  );
}
