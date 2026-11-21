import { supabase, isSupabaseConfigured } from './supabase';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

export const SLOTS = RESTAURANT_CONFIG.slots;
export const OCCASIONS = RESTAURANT_CONFIG.occasions;

const LOCAL_STORAGE_KEY = 'elfuego_reservations_data';

function getLocalReservations() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalReservations(data) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Erreur sauvegarde locale:", e);
  }
}

export function generateReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const year = new Date().getFullYear();
  return `FUEGO-${year}-${rand}`;
}

export function validateBeninPhone(phone) {
  if (!phone) return { valid: false, error: "Le numéro de téléphone est requis." };
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  const regex = /^(?:\+229|00229)?(01|4[0-9]|5[0-9]|6[0-9]|9[0-9])\d{6}$/;
  if (!regex.test(cleaned)) {
    return {
      valid: false,
      error: "Veuillez entrer un numéro béninois valide (ex: +229 01 59 29 02 29 ou 59290229)."
    };
  }
  let normalized = cleaned;
  if (normalized.startsWith('+229')) {
    normalized = normalized.substring(4);
  } else if (normalized.startsWith('00229')) {
    normalized = normalized.substring(5);
  }
  return {
    valid: true,
    formatted: `+229 ${normalized.substring(0, 2)} ${normalized.substring(2, 4)} ${normalized.substring(4, 6)} ${normalized.substring(6)}`
  };
}

export async function createReservation(bookingData) {
  if (bookingData.website_honeypot) {
    throw new Error("Erreur de validation.");
  }

  const phoneValidation = validateBeninPhone(bookingData.telephone);
  if (!phoneValidation.valid) {
    throw new Error(phoneValidation.error);
  }

  const reference = generateReference();
  const newReservation = {
    ...bookingData,
    telephone: phoneValidation.formatted,
    reference,
    statut: 'CONFIRME',
    created_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .insert([newReservation])
        .select()
        .single();
      if (!error && data) return data;
    } catch (e) {
      console.warn("Supabase indisponible, sauvegarde locale.");
    }
  }

  const list = getLocalReservations();
  list.unshift(newReservation);
  saveLocalReservations(list);
  return newReservation;
}

export async function getReservationByReference(reference) {
  if (!reference) return null;
  const cleanRef = reference.trim().toUpperCase();

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .eq('reference', cleanRef)
        .single();
      if (!error && data) return data;
    } catch (e) {}
  }

  const list = getLocalReservations();
  return list.find(r => r.reference.toUpperCase() === cleanRef) || null;
}

export async function cancelReservation(reference) {
  if (!reference) return false;
  const cleanRef = reference.trim().toUpperCase();

  if (isSupabaseConfigured) {
    try {
      await supabase
        .from('reservations')
        .update({ statut: 'ANNULE' })
        .eq('reference', cleanRef);
    } catch (e) {}
  }

  const list = getLocalReservations();
  const updated = list.map(r => r.reference.toUpperCase() === cleanRef ? { ...r, statut: 'ANNULE' } : r);
  saveLocalReservations(updated);
  return true;
}

export async function getAllReservations() {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('date', { ascending: false });
      if (!error && data) return data;
    } catch (e) {}
  }
  return getLocalReservations();
}

export function generateWhatsAppConfirmationLink(reservation) {
  const phone = RESTAURANT_CONFIG.contact.whatsappNumber;

  const msg = `🔥 *EL FUEGO & EXOTI’K — DEMANDE DE RÉSERVATION*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📋 *RÉFÉRENCE :* \`${reservation.reference}\`\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `📅 *Date :* ${reservation.date}\n` +
    `🕐 *Heure d'arrivée :* ${reservation.heure}\n` +
    `👥 *Nombre de personnes :* ${reservation.personnes} couvert(s)\n` +
    `🎉 *Occasion :* ${reservation.occasion}\n\n` +
    `👤 *Nom complet :* ${reservation.nom}\n` +
    `📞 *Téléphone :* ${reservation.telephone}\n` +
    (reservation.demandes_speciales ? `📝 *Précisions :* ${reservation.demandes_speciales}\n` : '') +
    `\n━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `⏰ *Table retenue 15 minutes.*\n` +
    `📍 Rue 1368, Akpakpa, carrefour Le Bélier, Cotonou\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Merci de me confirmer la prise en compte de ma table !`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

export function generateWhatsAppFallbackLink() {
  const phone = RESTAURANT_CONFIG.contact.whatsappNumber;
  const msg = "Bonjour El Fuego & Exoti'K, j'aimerais réserver une table.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
