import React from 'react';
import { X, CalendarCheck, Check } from 'lucide-react';

export default function MenuModal({ dish, onClose, onSelectForReservation }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80"
        >
          <X className="size-5" />
        </button>

        <div className="relative h-64 w-full">
          <img src={dish.image} alt={dish.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <span className="absolute bottom-4 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-md">
            {dish.price}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold text-white">{dish.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{dish.description}</p>

          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ingrédients & Préparation</h4>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-white">
              {dish.ingredients && dish.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-primary" /> {ing}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => {
                onSelectForReservation(dish);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-lg hover:bg-primary-hover transition-colors"
            >
              <CalendarCheck className="size-4" /> Réserver avec ce plat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
