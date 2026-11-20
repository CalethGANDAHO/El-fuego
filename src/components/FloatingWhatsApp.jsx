import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export default function FloatingWhatsApp() {
  const defaultMsg = encodeURIComponent("Bonjour El Fuego & Exoti'K, j'aimerais avoir des informations.");
  const url = `https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}?text=${defaultMsg}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-2xl hover:scale-105 transition-transform"
      title="Discuter sur WhatsApp"
    >
      <MessageCircle className="size-5 fill-white text-[#25d366]" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
