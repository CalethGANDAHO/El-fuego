import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, MessageCircle, QrCode, X } from 'lucide-react';
import { generateWhatsAppConfirmationLink } from '../../lib/reservationService';

export default function ReservationSuccessModal({ reservation, onClose, onOpenPass }) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  if (!reservation) return null;

  const whatsappUrl = generateWhatsAppConfirmationLink(reservation);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 text-center text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-white"
        >
          <X className="size-5" />
        </button>

        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
          <CheckCircle2 className="size-12" />
        </div>

        <h3 className="font-serif text-3xl font-extrabold text-white">Table Confirmée !</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Votre réservation a été enregistrée avec succès. Voici votre numéro de table :
        </p>

        <div className="my-6">
          <span className="font-mono text-2xl font-black text-primary bg-background border border-dashed border-primary/40 px-6 py-2.5 rounded-2xl inline-block">
            {reservation.reference}
          </span>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25d366] py-4 text-sm font-bold text-white shadow-xl hover:opacity-95"
          >
            <MessageCircle className="size-5" />
            <span>Envoyer la confirmation sur WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenPass();
            }}
            className="flex items-center justify-center gap-2 w-full rounded-2xl bg-secondary border border-border py-4 text-sm font-bold text-white hover:border-primary"
          >
            <QrCode className="size-5 text-primary" />
            <span>Afficher mon Pass VIP avec QR Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}
