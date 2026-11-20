import React, { useState } from 'react';
import { X, Search, AlertCircle, CheckCircle, Ban } from 'lucide-react';
import { getReservationByReference, cancelReservation } from '../../lib/reservationService';
import { formatDateFr } from '../../lib/utils';
import { zones } from '../../data/zonesData';

export default function ManageReservationModal({ isOpen, onClose }) {
  const [refInput, setRefInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [reservation, setReservation] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!refInput.trim()) return;
    setLoading(true);
    setNotFound(false);
    setReservation(null);
    setCancelled(false);

    try {
      const res = await getReservationByReference(refInput);
      if (res) {
        setReservation(res);
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!reservation) return;
    if (!confirm("Voulez-vous vraiment annuler cette réservation ?")) return;

    setLoading(true);
    try {
      await cancelReservation(reservation.reference);
      setCancelled(true);
      setReservation(prev => ({ ...prev, statut: 'ANNULE' }));
    } catch (e) {
      alert("Erreur lors de l'annulation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-white"
        >
          <X className="size-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white mb-2">Gérer ma réservation</h3>
        <p className="text-xs text-muted-foreground mb-6">
          Saisissez votre référence (ex : FUEGO-2026-XXXX) pour consulter ou annuler sans frais.
        </p>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            required
            placeholder="FUEGO-2026-..."
            value={refInput}
            onChange={e => setRefInput(e.target.value.toUpperCase())}
            className="flex-1 rounded-2xl border border-border bg-background px-4 py-3 text-sm font-mono text-white focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-primary px-5 font-bold text-sm text-white hover:bg-primary-hover"
          >
            <Search className="size-4" />
          </button>
        </form>

        {notFound && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
            <AlertCircle className="size-4 shrink-0" />
            <span>Aucune réservation trouvée pour cette référence.</span>
          </div>
        )}

        {reservation && (
          <div className="rounded-2xl border border-border bg-background/60 p-5 space-y-3 text-xs">
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span className="font-mono font-bold text-gold">{reservation.reference}</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] ${
                reservation.statut === 'ANNULE' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                {reservation.statut || 'CONFIRME'}
              </span>
            </div>

            <div>Client : <strong className="text-white">{reservation.nom}</strong></div>
            <div>Date : <strong className="text-white">{formatDateFr(reservation.date)}</strong> à <strong>{reservation.heure}</strong></div>
            <div>Couverts : <strong className="text-white">{reservation.personnes} pers.</strong></div>

            {reservation.statut !== 'ANNULE' && (
              <div className="pt-3 border-t border-border/50">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-red-500/40 bg-red-500/10 py-2.5 text-xs font-bold text-red-400 hover:bg-red-500/20"
                >
                  <Ban className="size-3.5" /> Annuler cette réservation
                </button>
              </div>
            )}

            {cancelled && (
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-center font-semibold">
                Réservation annulée avec succès.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
