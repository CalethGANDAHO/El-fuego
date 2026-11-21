import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import TiltCard from './common/TiltCard';
import { useLanguage } from '../context/LanguageContext';

export default function TwoBrands() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{t('twoBrandsEyebrow')}</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-foreground">{t('twoBrandsTitle')}</h2>
        <p className="mt-4 text-muted-foreground text-base">
          {t('twoBrandsDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* El Fuego 3D Tilt Card */}
        <TiltCard maxTilt={8} className="glass rounded-[2rem] border border-primary/25 overflow-hidden">
          <div className="relative h-72 overflow-hidden [transform-style:preserve-3d]">
            <span className="absolute top-5 left-5 z-10 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold text-white shadow-xl [transform:translateZ(30px)]">
              <Flame className="size-4 animate-bounce" /> {t('fuegoBadge')}
            </span>
            <img 
              src="/images/sign_elfuego.jpg" 
              alt="Enseigne El Fuego" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-8 [transform-style:preserve-3d]">
            <h3 className="font-serif text-3xl font-extrabold text-primary mb-3 [transform:translateZ(20px)]">{t('fuegoTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed [transform:translateZ(10px)]">
              {t('fuegoDesc')}
            </p>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-primary [transform:translateZ(15px)]">
              <span>{t('fuegoFooter')}</span>
            </div>
          </div>
        </TiltCard>

        {/* Exoti'K 3D Tilt Card */}
        <TiltCard maxTilt={8} className="glass rounded-[2rem] border border-exotik/30 overflow-hidden">
          <div className="relative h-72 overflow-hidden [transform-style:preserve-3d]">
            <span className="absolute top-5 left-5 z-10 flex items-center gap-1.5 rounded-full bg-exotik px-4 py-1.5 text-xs font-extrabold text-white shadow-xl [transform:translateZ(30px)]">
              <Sparkles className="size-4" /> {t('exotikBadge')}
            </span>
            <img 
              src="/images/sign_exotik.jpg" 
              alt="Comptoir Exoti’K" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-8 [transform-style:preserve-3d]">
            <h3 className="font-serif text-3xl font-extrabold text-exotik mb-3 [transform:translateZ(20px)]">{t('exotikTitle')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed [transform:translateZ(10px)]">
              {t('exotikDesc')}
            </p>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-bold text-exotik [transform:translateZ(15px)]">
              <span>{t('exotikFooter')}</span>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
