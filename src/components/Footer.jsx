import React from 'react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';
import InstagramIcon from './icons/InstagramIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black/60 py-12 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-2xl p-3 shadow-md max-w-[220px]">
            <img src="/images/logos.png" alt="Logos El Fuego et Exoti'K" className="h-10 w-auto object-contain mx-auto" />
          </div>
        </div>

        <p className="font-semibold text-white text-sm mb-2">
          {RESTAURANT_CONFIG.identity.name} — Cotonou, Bénin
        </p>
        <p className="mb-4">
          {RESTAURANT_CONFIG.identity.type} · {RESTAURANT_CONFIG.identity.tagline}
        </p>

        <div className="flex items-center justify-center gap-4 my-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary text-white hover:text-primary transition-colors"
          >
            <InstagramIcon className="size-4" />
          </a>
        </div>

        <p className="text-[11px] text-muted-foreground/60">
          &copy; {new Date().getFullYear()} El Fuego & Exoti’K. Tous droits réservés. Conçu avec amour à Cotonou.
        </p>
      </div>
    </footer>
  );
}
