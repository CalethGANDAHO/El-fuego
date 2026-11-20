export const RESTAURANT_CONFIG = {
  identity: {
    name: "El Fuego & Exoti’K",
    type: "Restaurant · Pizzeria · Bar & Fruits Frais",
    tagline: "Le feu des grillades, la fraîcheur des fruits",
    city: "Cotonou",
    country: "Bénin",
    address: "Rue 1368, Akpakpa, carrefour Le Bélier, Cotonou, Bénin",
    currency: "FCFA",
    logoText: "El Fuego & Exoti’K",
    prefixReference: "FUEGO"
  },
  contact: {
    phoneFormatted: "+229 01 59 29 02 29",
    whatsappNumber: "2290159290229",
    instagram: "@Elfuego_Exotik",
    googleMapsPlusCode: "9F9W+728 Cotonou, Bénin",
    mapsUrl: "https://maps.app.goo.gl/ANuupoKiUikMDqpY6"
  },
  policy: {
    holdTableMinutes: 15,
    standardDurationMinutes: 120,
    maxGuestsOnline: 25,
    alertLargeGroupThreshold: 8,
    maxActiveBookingsPerPhone: 3,
  },
  slots: [
    { id: '12:00', label: '12:00 (Midi)', maxCapacity: 40 },
    { id: '13:00', label: '13:00 (Midi)', maxCapacity: 45 },
    { id: '14:00', label: '14:00 (Midi)', maxCapacity: 35 },
    { id: '18:30', label: '18:30 (Soirée)', maxCapacity: 35 },
    { id: '19:30', label: '19:30 (Soirée)', maxCapacity: 50 },
    { id: '20:30', label: '20:30 (Soirée)', maxCapacity: 55 },
    { id: '21:30', label: '21:30 (Soirée)', maxCapacity: 55 },
    { id: '22:30', label: '22:30 (Soirée)', maxCapacity: 45 },
    { id: '23:30', label: '23:30 (Fin de soirée)', maxCapacity: 30 }
  ],
  occasions: [
    "Dîner standard / Entre amis",
    "Déjeuner d'affaires",
    "Anniversaire / Célébration",
    "Soirée Karaoké & Musique",
    "Dîner romantique en amoureux",
    "Match sur grand écran",
    "Événement familial / Réunion de groupe"
  ],
  admin: {
    defaultPassword: "fuego2026"
  }
};
