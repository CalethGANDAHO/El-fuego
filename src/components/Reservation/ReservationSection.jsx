import React, { useState } from 'react';
import Step1DateTime from './Step1DateTime';
import Step2ContactConfirm from './Step2ContactConfirm';
import ReservationSuccessModal from './ReservationSuccessModal';
import DigitalPassModal from './DigitalPassModal';
import ManageReservationModal from './ManageReservationModal';
import { createReservation, generateWhatsAppConfirmationLink, generateWhatsAppFallbackLink } from '../../lib/reservationService';
import { useLanguage } from '../../context/LanguageContext';
import { Search } from 'lucide-react';

export default function ReservationSection({ preselectedDish }) {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState(null);
  const [showPassModal, setShowPassModal] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const { t } = useLanguage();

  const todayStr = new Date().toISOString().split('T')[0];
  const [booking, setBooking] = useState({
    date: todayStr,
    heure: '20:30',
    personnes: 2,
    occasion: 'Dîner standard / Entre amis',
    demandes_speciales: preselectedDish ? `Précommande : ${preselectedDish.name}` : '',
    nom: '',
    telephone: '',
    email: '',
    website_honeypot: ''
  });

  const updateField = (field, value) => {
    setBooking(prev => ({ ...prev, [field]: value }));
  };

  const handleFinalSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await createReservation(booking);
      setConfirmedReservation(res);

      // Redirection immédiate WhatsApp
      const whatsappUrl = generateWhatsAppConfirmationLink(res);
      window.open(whatsappUrl, '_blank');

      // Réinitialisation
      setBooking({
        date: todayStr,
        heure: '20:30',
        personnes: 2,
        occasion: 'Dîner standard / Entre amis',
        demandes_speciales: '',
        nom: '',
        telephone: '',
        email: '',
        website_honeypot: ''
      });
      setStep(0);
    } catch (err) {
      setError(err.message || "Une erreur est survenue lors de la réservation.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappFallbackUrl = generateWhatsAppFallbackLink();

  return (
    <section id="reserve" className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <div className="glass overflow-hidden rounded-[2.5rem] p-6 sm:p-12 border border-primary/20 bg-background/90 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" /> {t('resEyebrow')}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-serif font-extrabold text-foreground">
              {step === 0 && t('resStep1Title')}
              {step === 1 && t('resStep2Title')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowManageModal(true)}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-primary transition-all"
            >
              <Search className="size-3.5 text-primary" />
              <span>{t('resManageBtn')}</span>
            </button>
          </div>
        </div>

        {/* Steps */}
        {step === 0 && (
          <Step1DateTime
            booking={booking}
            updateField={updateField}
            onNext={() => setStep(1)}
          />
        )}

        {step === 1 && (
          <Step2ContactConfirm
            booking={booking}
            updateField={updateField}
            onSubmit={handleFinalSubmit}
            onPrev={() => setStep(0)}
            submitting={submitting}
            error={error}
          />
        )}

        {/* Fallback WhatsApp */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          <span>{t('resHelpWhatsApp')} </span>
          <a href={whatsappFallbackUrl} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
            WhatsApp El Fuego &rarr;
          </a>
        </div>
      </div>

      {/* Modales Confirmation & Pass */}
      <ReservationSuccessModal
        reservation={confirmedReservation}
        onClose={() => setConfirmedReservation(null)}
        onOpenPass={() => setShowPassModal(true)}
      />

      <DigitalPassModal
        reservation={confirmedReservation}
        onClose={() => setShowPassModal(false)}
      />

      <ManageReservationModal
        isOpen={showManageModal}
        onClose={() => setShowManageModal(false)}
      />
    </section>
  );
}
