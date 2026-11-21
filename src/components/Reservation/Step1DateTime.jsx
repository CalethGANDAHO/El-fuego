import React from 'react';
import { SLOTS, OCCASIONS } from '../../lib/reservationService';
import { Users, Calendar, Clock, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';

export default function Step1DateTime({ booking, updateField, onNext }) {
  const guestOptions = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15];

  const handleNext = () => {
    if (!booking.date) {
      alert("Veuillez sélectionner une date.");
      return;
    }
    if (!booking.heure) {
      alert("Veuillez choisir un créneau horaire.");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-8 animate-rise">
      {/* Date */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
          <Calendar className="size-4 text-primary" /> 1. Date de votre venue
        </label>
        <input
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={booking.date}
          onChange={e => updateField('date', e.target.value)}
          className="w-full sm:w-auto min-w-[240px] rounded-2xl border border-border bg-card px-5 py-3.5 text-base font-semibold text-white focus:border-primary focus:outline-none shadow-md"
        />
      </div>

      {/* Nombre de Couverts */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
          <Users className="size-4 text-primary" /> 2. Nombre de convives ({booking.personnes} personne{booking.personnes > 1 ? 's' : ''})
        </label>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {guestOptions.map(num => (
            <button
              key={num}
              type="button"
              onClick={() => updateField('personnes', num)}
              className={`rounded-2xl py-3 font-bold text-sm transition-all ${
                booking.personnes === num
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/50'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
        {booking.personnes >= 8 && (
          <div className="mt-3 flex items-center gap-2 text-xs text-gold">
            <AlertCircle className="size-4 shrink-0" />
            <span>Grand groupe : un acompte peut être demandé pour bloquer l'espace.</span>
          </div>
        )}
      </div>

      {/* Créneaux Horaires */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
          <Clock className="size-4 text-primary" /> 3. Heure d'arrivée
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
          {SLOTS.map(slot => (
            <button
              key={slot.id}
              type="button"
              onClick={() => updateField('heure', slot.id)}
              className={`rounded-2xl py-3 text-xs sm:text-sm font-bold transition-all ${
                booking.heure === slot.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/50'
              }`}
            >
              {slot.label}
            </button>
          ))}
        </div>
      </div>

      {/* Occasion & Précisions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
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

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
            <MessageSquare className="size-4 text-primary" /> Demandes particulières (facultatif)
          </label>
          <input
            type="text"
            value={booking.demandes_speciales}
            onChange={e => updateField('demandes_speciales', e.target.value)}
            placeholder="Ex : Table calme, anniversaire, chaise bébé..."
            className="w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm text-white focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-border flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-sm text-white shadow-xl shadow-primary/30 hover:bg-primary-hover transition-all"
        >
          <span>Continuer vers mes coordonnées</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
