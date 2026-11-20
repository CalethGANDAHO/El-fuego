import React, { useState } from 'react';
import { menuCategories, menuDishes } from '../data/menuData';
import MenuModal from './MenuModal';

export default function Menu({ onSelectDishForReservation }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDish, setSelectedDish] = useState(null);

  const filtered = menuDishes.filter(
    dish => activeCategory === "all" || dish.category === activeCategory
  );

  return (
    <section id="menu" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Nos Spécialités Culinaires</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">Le Menu en images</h2>
        <p className="mt-3 text-muted-foreground text-base">
          Découvrez une sélection de nos grillades croustillantes, créations fraîches et cocktails exotiques.
        </p>

        {/* Catégories / Onglets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grille des Plats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(dish => (
          <div
            key={dish.id}
            onClick={() => setSelectedDish(dish)}
            className="glass group cursor-pointer overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all lift flex flex-col"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden bg-secondary">
              <img
                src={dish.image}
                alt={dish.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                {dish.price}
              </span>
              {dish.badge && (
                <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-white shadow">
                  {dish.badge}
                </span>
              )}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                  {dish.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-medium text-primary">
                <span>Voir détails & ingrédients</span>
                <span>&rarr;</span>
              </div>
            </div>
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
