import React, { useState, useEffect } from 'react';
import { getAllReservations, cancelReservation } from '../../lib/reservationService';
import { exportReservationsToExcel } from '../../lib/exportExcel';
import { Download, RefreshCw, MessageSquare } from 'lucide-react';
import { formatDateFr } from '../../lib/utils';
import { zones } from '../../data/zonesData';

export default function AdminDashboardView() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getAllReservations();
      setReservations(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalGuests = reservations.reduce((acc, r) => acc + (r.personnes || 0), 0);

  return (
    <div className="space-y-6">
      {/* Statistiques Rapides */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-border bg-card p-4">
          <span className="text-xs text-muted-foreground block">Total Réservations</span>
          <strong className="text-2xl font-serif text-white">{reservations.length}</strong>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <span className="text-xs text-muted-foreground block">Couverts Prévus</span>
          <strong className="text-2xl font-serif text-primary">{totalGuests}</strong>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <span className="text-xs text-muted-foreground block">Terrasse</span>
          <strong className="text-2xl font-serif text-gold">
            {reservations.filter(r => r.zone_id === 'terrasse').length}
          </strong>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <span className="text-xs text-muted-foreground block">Salle Intérieure</span>
          <strong className="text-2xl font-serif text-exotik">
            {reservations.filter(r => r.zone_id === 'salle').length}
          </strong>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={loadData}
          className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-semibold text-white hover:border-primary"
        >
          <RefreshCw className={`size-3.5 ${loading ? 'animate-spin' : ''}`} /> Actualiser
        </button>

        <button
          onClick={() => exportReservationsToExcel(reservations)}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-primary-hover"
        >
          <Download className="size-4" /> Exporter en Excel (.xlsx)
        </button>
      </div>

      {/* Tableau des réservations */}
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border bg-secondary/50 text-muted-foreground uppercase font-bold tracking-wider">
            <tr>
              <th className="p-3">Réf</th>
              <th className="p-3">Client</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Date</th>
              <th className="p-3">Heure</th>
              <th className="p-3">Couverts</th>
              <th className="p-3">Zone</th>
              <th className="p-3">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 text-white">
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-8 text-center text-muted-foreground">
                  Aucune réservation enregistrée.
                </td>
              </tr>
            ) : (
              reservations.map(r => (
                <tr key={r.reference} className="hover:bg-secondary/30">
                  <td className="p-3 font-mono font-bold text-primary">{r.reference}</td>
                  <td className="p-3 font-semibold">{r.nom}</td>
                  <td className="p-3">{r.telephone}</td>
                  <td className="p-3">{r.date}</td>
                  <td className="p-3 font-bold">{r.heure}</td>
                  <td className="p-3">{r.personnes} pers.</td>
                  <td className="p-3">{r.zone_id}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      r.statut === 'ANNULE' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {r.statut || 'CONFIRME'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
