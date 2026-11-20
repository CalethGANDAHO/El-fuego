import React from 'react';
import { zones } from '../../data/zonesData';
import { OCCASIONS } from '../../lib/reservationService';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function Step2ZoneOccasion({ booking, updateField, onNext, onPrev }) {
  return (
    <div className="space-y-8 animate-rise">
      {/* Zones */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
          Choisissez votre espace préféré
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map(z => {
            const isSelected = booking.zone_id === z.id;
            return (
              <div
                key={z.id}
                onClick={() => updateField('zone_id', z.id)}
                className={`cursor-pointer overflow-hidden rounded-2xl border transition-all flex flex-col ${
                  isSelected
                    ? 'border-primary ring-2 ring-primary/40 bg-card shadow-lg shadow-primary/20 scale-[1.02]'
                    : 'border-border bg-card/60 hover:border-primary/40'
                }`}
              >
                <div className="h-32 w-full overflow-hidden">
                  <img src={z.image} alt={z.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm mb-1">{z.name}</h4>
                    <p className="text-[11px] text-muted-foreground line-clamp-2">{z.detail}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-border/40 text-[10px] font-semibold text-primary">
                    {isSelected ? "✓ Espace Sélectionné" : "Sélectionner cet espace"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Occasion */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
          <Sparkles className="size-4 text-gold" /> Occasion spéciale
        </label>
        <select
          value={booking.occasion}
          onChange={e => updateField('occasion', e.target.value)}
          className="w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-white focus:border-primary focus:outline-none"
        >
          {OCCASIONS.map(occ => (
            <option key={occ} value={occ}>{occ}</option>
          ))}
        </select>
      </div>

      {/* Précisions / Demandes spéciales */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
          <MessageSquare className="size-4 text-primary" /> Demandes particulières (facultatif)
        </label>
        <textarea
          rows={2}
          value={booking.demandes_speciales}
          onChange={e => updateField('demandes_speciales', e.target.value)}
          placeholder="Ex : Table proche de la télévision, bougie d'anniversaire, chaise haute bébé..."
          className="w-full rounded-2xl border border-border bg-card px-5 py-3 text-sm text-white focus:border-primary focus:outline-none resize-none"
        />
      </div>

      <div className="pt-6 border-t border-border flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="rounded-2xl border border-border px-6 py-4 font-semibold text-sm text-muted-foreground hover:text-white"
        >
          &larr; Retour
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-sm text-white shadow-xl shadow-primary/30 hover:bg-primary-hover transition-all"
        >
          <span>Étape 3 : Coordonnées</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
