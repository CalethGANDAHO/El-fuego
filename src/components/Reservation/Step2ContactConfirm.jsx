import React from 'react';
import { formatDateFr } from '../../lib/utils';
import { User, Phone, Mail, Send, Calendar, Clock, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Step2ContactConfirm({ booking, updateField, onSubmit, onPrev, submitting, error }) {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!booking.nom.trim()) {
      alert("Veuillez renseigner votre nom complet.");
      return;
    }
    if (!booking.telephone.trim()) {
      alert("Veuillez renseigner votre numéro de téléphone.");
      return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-rise">
      {/* Honeypot invisible */}
      <input
        type="text"
        name="website_honeypot"
        value={booking.website_honeypot || ''}
        onChange={e => updateField('website_honeypot', e.target.value)}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Récapitulatif Visuel clair */}
      <div className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
          {t('resRecapTitle')}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="flex items-start gap-2.5">
            <Calendar className="size-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-muted-foreground block">Date</span>
              <strong className="text-foreground">{formatDateFr(booking.date)}</strong>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="size-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-muted-foreground block">Heure</span>
              <strong className="text-foreground">{booking.heure}</strong>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Users className="size-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-muted-foreground block">Couverts</span>
              <strong className="text-foreground">{booking.personnes}</strong>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Sparkles className="size-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-muted-foreground block">Occasion</span>
              <strong className="text-foreground">{booking.occasion}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire Coordonnées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
            <User className="size-4 text-primary" /> {t('orderFullName')}
          </label>
          <input
            type="text"
            required
            placeholder="Ex : Boris KOUADIO"
            value={booking.nom}
            onChange={e => updateField('nom', e.target.value)}
            className="w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
            <Phone className="size-4 text-primary" /> {t('orderWhatsApp')}
          </label>
          <div className="flex gap-2">
            <span className="flex items-center rounded-2xl border border-border bg-secondary px-4 text-sm font-bold text-foreground">
              +229
            </span>
            <input
              type="tel"
              required
              placeholder="Ex : 01 59 29 02 29"
              value={booking.telephone}
              onChange={e => updateField('telephone', e.target.value)}
              className="flex-1 rounded-2xl border border-border bg-card px-5 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
            <Mail className="size-4 text-primary" /> Adresse e-mail (facultative)
          </label>
          <input
            type="email"
            placeholder="Pour recevoir un double de confirmation par e-mail"
            value={booking.email}
            onChange={e => updateField('email', e.target.value)}
            className="w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm text-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
          {error}
        </div>
      )}

      <div className="pt-6 border-t border-border flex justify-between items-center">
        <button
          type="button"
          onClick={onPrev}
          disabled={submitting}
          className="rounded-2xl border border-border px-6 py-4 font-semibold text-sm text-muted-foreground hover:text-foreground"
        >
          {t('resStep2Prev')}
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 font-bold text-sm text-white shadow-xl shadow-primary/30 hover:bg-primary-hover transition-all disabled:opacity-50"
        >
          <Send className="size-4" />
          <span>{submitting ? t('resSubmitting') : t('resStep2Submit')}</span>
        </button>
      </div>
    </form>
  );
}
