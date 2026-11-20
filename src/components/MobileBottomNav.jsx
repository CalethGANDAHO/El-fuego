import React from 'react';
import { UtensilsCrossed, CalendarCheck, ShoppingBag, Phone } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-2 flex items-center justify-around text-[10px] font-semibold text-muted-foreground">
      <a href="#menu" className="flex flex-col items-center gap-1 hover:text-primary">
        <UtensilsCrossed className="size-4" />
        <span>Menu</span>
      </a>
      <a href="#commander" className="flex flex-col items-center gap-1 hover:text-primary">
        <ShoppingBag className="size-4" />
        <span>Commander</span>
      </a>
      <a href="#reserve" className="flex flex-col items-center gap-1 text-primary font-bold">
        <CalendarCheck className="size-5" />
        <span>Réserver</span>
      </a>
      <a href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`} className="flex flex-col items-center gap-1 hover:text-primary">
        <Phone className="size-4" />
        <span>Appeler</span>
      </a>
    </div>
  );
}
