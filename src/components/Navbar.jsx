import React, { useState } from 'react';
import { Phone, Lock, Menu as MenuIcon, X, CalendarCheck, Sun, Moon, Globe } from 'lucide-react';
import { useVibe } from '../context/VibeContext';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function Navbar({ onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { vibe, toggleVibe } = useVibe();
  const { language, setLanguage, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'yo', label: 'Yorùbá', flag: '🇧🇯' }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="text-3xl animate-flame-pulse">🔥</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              El Fuego <span className="text-exotik font-sans font-extrabold text-xl">& Exoti’K</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold">Cotonou · Akpakpa</span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">{t('navMenu')}</a>
          <a href="#commander" className="hover:text-primary transition-colors">{t('navOrder')}</a>
          <a href="#reserve" className="hover:text-primary transition-colors">{t('navReserve')}</a>
          <a href="#videos" className="hover:text-primary transition-colors">{t('navVideos')}</a>
          <a href="#galerie" className="hover:text-primary transition-colors">{t('navGallery')}</a>
          <a href="#avis" className="hover:text-primary transition-colors">{t('navReviews')}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t('navContact')}</a>
        </nav>

        {/* Actions Desktop */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Bouton Mode Nuit / Mode Jour */}
          <button
            onClick={toggleVibe}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all shadow-sm"
            title={vibe === 'night' ? 'Activer le mode Jour' : 'Activer le mode Nuit'}
          >
            {vibe === 'night' ? <Sun className="size-4 text-gold animate-spin-slow" /> : <Moon className="size-4 text-primary" />}
          </button>

          {/* Bouton Multilingue (FR / EN / YO) */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground hover:border-primary transition-colors shadow-sm"
            >
              <span>{currentLang.flag}</span>
              <span className="uppercase">{currentLang.code}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-2xl z-50 animate-fade-in">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                      language === l.code ? 'bg-primary text-white' : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Accès Admin discret */}
          <button 
            onClick={onOpenAdmin}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title={t('navAdmin')}
          >
            <Lock className="size-4" />
          </button>

          <a
            href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
            className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-semibold text-foreground hover:border-primary transition-colors"
          >
            <Phone className="size-3.5 text-primary" />
            <span>59 29 02 29</span>
          </a>

          <a
            href="#reserve"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all"
          >
            <CalendarCheck className="size-3.5" />
            <span>{t('navBookTable')}</span>
          </a>
        </div>

        {/* Actions Rapides Mobile & Burger */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mode Jour / Nuit Mobile */}
          <button
            onClick={toggleVibe}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground"
            title="Thème"
          >
            {vibe === 'night' ? <Sun className="size-4 text-gold" /> : <Moon className="size-4 text-primary" />}
          </button>

          {/* Langue Mobile */}
          <button
            onClick={() => {
              const next = language === 'fr' ? 'en' : language === 'en' ? 'yo' : 'fr';
              setLanguage(next);
            }}
            className="flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1.5 text-xs font-bold text-foreground"
            title="Changer de langue"
          >
            <span>{currentLang.flag}</span>
            <span className="uppercase text-[10px]">{currentLang.code}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 text-base font-medium animate-fade-in">
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-foreground">{t('navMenu')}</a>
          <a href="#commander" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-foreground">{t('navOrder')}</a>
          <a href="#reserve" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-primary font-bold">{t('navReserve')}</a>
          <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-foreground">{t('navVideos')}</a>
          <a href="#galerie" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-foreground">{t('navGallery')}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-foreground">{t('navContact')}</a>
          
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="size-4 text-primary" />
              <span>{t('heroCallBtn')}</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-2"
            >
              <Lock className="size-3" /> {t('navAdmin')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
