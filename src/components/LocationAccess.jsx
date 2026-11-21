import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';
import { useLanguage } from '../context/LanguageContext';

export default function LocationAccess() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Infos & Horaires */}
        <div className="lg:col-span-5 glass rounded-3xl p-6 sm:p-8 border border-border">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">{t('locEyebrow')}</span>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-foreground">{t('locTitle')}</h2>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="size-5 text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-foreground block font-serif">{t('locAddressTitle')}</strong>
                <span className="text-muted-foreground">{RESTAURANT_CONFIG.identity.address}</span>
                <p className="text-xs text-muted-foreground/80 mt-1">Akpakpa, carrefour Le Bélier (direction plage).</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="size-5 text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-foreground block font-serif">{t('locHoursTitle')}</strong>
                <span className="text-muted-foreground block">Lun – Ven : 9h00 – Minuit</span>
                <span className="text-muted-foreground block">Sam – Dim : 9h00 – 1h00 du matin</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="size-5 text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-foreground block font-serif">{t('locPhoneTitle')}</strong>
                <a href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`} className="text-primary font-bold hover:underline">
                  {RESTAURANT_CONFIG.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESTAURANT_CONFIG.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white shadow-lg hover:bg-primary-hover transition-colors"
            >
              <Navigation className="size-4" /> {t('locGpsBtn')}
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 text-xs font-bold text-white shadow-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="size-4" /> {t('locWaBtn')}
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="lg:col-span-7 glass overflow-hidden rounded-3xl border border-border h-[420px]">
          <iframe
            title="Carte El Fuego Cotonou"
            src="https://www.google.com/maps?q=9F9W%2B728+EL+FUEGO,+Rue+1368,+Cotonou&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
