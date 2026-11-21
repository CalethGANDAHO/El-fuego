import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { X, ShieldCheck } from 'lucide-react';
import { formatDateFr } from '../../lib/utils';
import { RESTAURANT_CONFIG } from '../../data/restaurant.config';

export default function DigitalPassModal({ reservation, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (reservation && canvasRef.current) {
      const qrData = JSON.stringify({
        ref: reservation.reference,
        nom: reservation.nom,
        date: reservation.date,
        heure: reservation.heure,
        personnes: reservation.personnes
      });

      QRCode.toCanvas(canvasRef.current, qrData, {
        width: 170,
        margin: 1,
        color: {
          dark: '#140d09',
          light: '#ffffff'
        }
      }, err => {
        if (err) console.error(err);
      });
    }
  }, [reservation]);

  if (!reservation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-[#1a100a] via-[#24160e] to-[#140d09] p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X className="size-5" />
        </button>

        {/* Perforations billet */}
        <div className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-background" />
        <div className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-background" />

        {/* En-tête Billet */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Pass Digital VIP</span>
            <h3 className="font-serif text-xl font-bold">{RESTAURANT_CONFIG.identity.name}</h3>
          </div>
          <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[10px] font-extrabold uppercase text-emerald-400">
            Confirmé
          </span>
        </div>

        {/* Référence */}
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Code de table</span>
          <span className="font-mono text-2xl font-black tracking-widest text-gold bg-black/40 border border-gold/30 px-5 py-2 rounded-xl inline-block">
            {reservation.reference}
          </span>
        </div>

        {/* QR Code */}
        <div className="mx-auto mb-6 flex size-44 items-center justify-center rounded-2xl bg-white p-2.5 shadow-xl">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>

        {/* Détails */}
        <div className="grid grid-cols-2 gap-3 text-xs border-t border-dashed border-white/15 pt-4">
          <div>
            <span className="text-white/50 block">Titulaire</span>
            <strong className="text-white">{reservation.nom}</strong>
          </div>
          <div>
            <span className="text-white/50 block">Date</span>
            <strong className="text-white">{formatDateFr(reservation.date)}</strong>
          </div>
          <div>
            <span className="text-white/50 block">Heure d'arrivée</span>
            <strong className="text-white">{reservation.heure}</strong>
          </div>
          <div>
            <span className="text-white/50 block">Couverts</span>
            <strong className="text-white">{reservation.personnes} pers.</strong>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] text-white/60">
          ⚠️ <em>Table retenue 15 minutes. Faites une capture d'écran pour la présenter à l'accueil.</em>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-primary py-3.5 text-xs font-bold text-white shadow-lg hover:bg-primary-hover"
        >
          Fermer le pass
        </button>
      </div>
    </div>
  );
}
