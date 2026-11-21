import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'fr',
  setLanguage: () => {},
  t: (key) => key
});

export const TRANSLATIONS = {
  fr: {
    // Navigation
    navMenu: "Menu",
    navOrder: "Commander",
    navReserve: "Réservation VIP",
    navVideos: "Vidéos",
    navGallery: "Galerie",
    navReviews: "Avis",
    navContact: "Infos & Accès",
    navCall: "59 29 02 29",
    navBookTable: "Réserver une table",
    navAdmin: "Espace Administrateur",

    // Hero
    heroGoogleReviews: "4,1 sur Google",
    heroTitlePart1: "Le feu des grillades,",
    heroTitlePart2: "la fraîcheur des fruits.",
    heroSubtitle: "Restaurant, pizzeria, bar à cocktails et comptoir de fruits frais d'exception à Akpakpa, Cotonou. Savourez nos créations sur place, à emporter ou en livraison rapide.",
    heroReserveBtn: "Réserver une table",
    heroOrderBtn: "Commander en ligne",
    heroCallBtn: "Nous appeler",

    // Two Brands
    twoBrandsEyebrow: "Deux enseignes, une seule adresse gourmande",
    twoBrandsTitle: "Une cuisine généreuse qui réunit tout le monde",
    twoBrandsDesc: "Venez partager un poisson braisé croustillant, une pizza cuite avec amour ou un burger gourmet, puis terminez avec une coupe de fruits sculptée ou un cocktail rafraîchissant.",
    fuegoBadge: "Restaurant & Bar",
    fuegoTitle: "El Fuego",
    fuegoDesc: "Grillades braisées, pizzas savoureuses, pâtes italiennes, burgers fondants, spécialités libanaises et africaines. Bar à cocktails tropicaux, bières fraîches et sélection de vins. Retransmission des grands matchs et karaoké.",
    fuegoFooter: "🔥 Le temple des braises & de la convivialité à Cotonou",
    exotikBadge: "Comptoir Fruits Frais",
    exotikTitle: "Exoti’K",
    exotikDesc: "Le temple de la fraîcheur : salades de fruits gorgées de soleil, brochettes chocolatées, jus naturels fraîchement pressés, plateaux décorés et pièces montées spectaculaires pour mariages et cérémonies.",
    exotikFooter: "🍉 100% Fruits naturels & fraîcheur tropicale absolue",

    // Menu
    menuEyebrow: "Nos Spécialités Culinaires",
    menuTitle: "Le Menu en images",
    menuDesc: "Découvrez une sélection de nos grillades croustillantes, créations fraîches et cocktails exotiques.",
    menuDetailsBtn: "Détails & réservation",
    menuModalBookDish: "Réserver une table pour ce plat",

    // Order
    orderEyebrow: "Service Express",
    orderTitle: "Commandez en direct",
    orderDesc: "Composez votre sélection et transmettez instantanément votre bon de commande sur notre WhatsApp officiel.",
    orderSelectDishes: "Sélectionnez vos plats",
    orderYourInfo: "Vos informations",
    orderServiceMode: "Mode de service",
    orderDelivery: "🛵 Livraison à domicile / bureau",
    orderTakeaway: "🛍️ À emporter (Takeaway)",
    orderDineIn: "🍽️ Dégustation sur place",
    orderFullName: "Nom complet *",
    orderWhatsApp: "Numéro WhatsApp *",
    orderAddress: "Adresse précise de livraison",
    orderNotes: "Précisions cuisine (facultatif)",
    orderSubmit: "Envoyer sur WhatsApp",
    orderCallAlt: "Ou commander directement par appel",

    // Reservation
    resEyebrow: "Système de Réservation Simplifié & WhatsApp",
    resStep1Title: "1. Date, Couverts & Heure",
    resStep2Title: "2. Vos Coordonnées & Envoi WhatsApp",
    resManageBtn: "Gérer ma table",
    resDateLabel: "1. Date de votre venue",
    resGuestsLabel: "2. Nombre de convives",
    resTimeLabel: "3. Heure d'arrivée",
    resOccasionLabel: "Occasion spéciale",
    resSpecialRequests: "Demandes particulières (facultatif)",
    resStep1Next: "Continuer vers mes coordonnées",
    resStep2Prev: "← Modifier la date",
    resStep2Submit: "Valider & Envoyer sur WhatsApp 🔥",
    resRecapTitle: "Récapitulatif de votre demande",
    resSubmitting: "Validation en cours...",
    resHelpWhatsApp: "Vous préférez réserver directement par message ?",

    // Location & Horaires
    locEyebrow: "Nous Situer",
    locTitle: "Accès & Horaires",
    locAddressTitle: "Adresse",
    locHoursTitle: "Horaires d'Ouverture",
    locPhoneTitle: "Téléphone & WhatsApp",
    locGpsBtn: "Itinéraire GPS",
    locWaBtn: "WhatsApp Direct",

    // Footer
    footerRights: "Tous droits réservés. Conçu avec amour à Cotonou."
  },

  en: {
    // Navigation
    navMenu: "Menu",
    navOrder: "Order",
    navReserve: "VIP Reservation",
    navVideos: "Videos",
    navGallery: "Gallery",
    navReviews: "Reviews",
    navContact: "Info & Location",
    navCall: "+229 01 59 29 02 29",
    navBookTable: "Book a table",
    navAdmin: "Manager Area",

    // Hero
    heroGoogleReviews: "4.1 on Google",
    heroTitlePart1: "The fire of grilled feasts,",
    heroTitlePart2: "the freshness of tropical fruits.",
    heroSubtitle: "Exceptional wood-fired grill restaurant, pizzeria, cocktail bar and fresh fruit lounge in Akpakpa, Cotonou. Dine in, take out or fast home delivery.",
    heroReserveBtn: "Book a table",
    heroOrderBtn: "Order online",
    heroCallBtn: "Call us",

    // Two Brands
    twoBrandsEyebrow: "Two brands, one delicious destination",
    twoBrandsTitle: "Generous cuisine bringing everyone together",
    twoBrandsDesc: "Come share crispy braised fish, wood-fired pizza or a gourmet burger, and top it off with sculptured exotic fruits or vibrant craft cocktails.",
    fuegoBadge: "Restaurant & Bar",
    fuegoTitle: "El Fuego",
    fuegoDesc: "Braised grills, tasty pizzas, Italian pasta, melting burgers, Lebanese and African specialties. Tropical cocktail bar, chilled beers and selected wines. Sports on big screens and karaoke nights.",
    fuegoFooter: "🔥 The home of embers & warmth in Cotonou",
    exotikBadge: "Fresh Fruit Lounge",
    exotikTitle: "Exoti’K",
    exotikDesc: "The kingdom of freshness: sun-drenched fruit salads, chocolate skewers, fresh squeezed juices, decorated trays and showstopper fruit centerpieces for weddings and celebrations.",
    exotikFooter: "🍉 100% Natural fruits & absolute tropical freshness",

    // Menu
    menuEyebrow: "Our Culinary Specialties",
    menuTitle: "The Menu in pictures",
    menuDesc: "Explore our signature grilled meats, fresh fruit delicacies, and exotic cocktails.",
    menuDetailsBtn: "Details & booking",
    menuModalBookDish: "Book a table for this dish",

    // Order
    orderEyebrow: "Express Service",
    orderTitle: "Order directly",
    orderDesc: "Select your items and send your order summary directly to our official WhatsApp.",
    orderSelectDishes: "Select your dishes",
    orderYourInfo: "Your information",
    orderServiceMode: "Service mode",
    orderDelivery: "🛵 Home / Office Delivery",
    orderTakeaway: "🛍️ Takeaway",
    orderDineIn: "🍽️ Dine in",
    orderFullName: "Full name *",
    orderWhatsApp: "WhatsApp number *",
    orderAddress: "Delivery address",
    orderNotes: "Kitchen instructions (optional)",
    orderSubmit: "Send on WhatsApp",
    orderCallAlt: "Or order directly by phone call",

    // Reservation
    resEyebrow: "Streamlined Booking & WhatsApp",
    resStep1Title: "1. Date, Guests & Time",
    resStep2Title: "2. Your Details & WhatsApp Confirm",
    resManageBtn: "Manage my booking",
    resDateLabel: "1. Reservation date",
    resGuestsLabel: "2. Number of guests",
    resTimeLabel: "3. Arrival time",
    resOccasionLabel: "Special occasion",
    resSpecialRequests: "Special requests (optional)",
    resStep1Next: "Continue to contact details",
    resStep2Prev: "← Change date",
    resStep2Submit: "Confirm & Send to WhatsApp 🔥",
    resRecapTitle: "Summary of your booking",
    resSubmitting: "Processing...",
    resHelpWhatsApp: "Prefer booking directly by message?",

    // Location & Horaires
    locEyebrow: "Find Us",
    locTitle: "Access & Hours",
    locAddressTitle: "Address",
    locHoursTitle: "Opening Hours",
    locPhoneTitle: "Phone & WhatsApp",
    locGpsBtn: "GPS Directions",
    locWaBtn: "Direct WhatsApp",

    // Footer
    footerRights: "All rights reserved. Crafted with love in Cotonou."
  },

  yo: {
    // Navigation (Yorùbá)
    navMenu: "Oúnjẹ",
    navOrder: "Pàṣẹ",
    navReserve: "Ṣètò Tábìlì",
    navVideos: "Àwòrán Fídíò",
    navGallery: "Àwòrán Ilé",
    navReviews: "Ẹ̀rí Oníbàárà",
    navContact: "Ibùdó & Àkókò",
    navCall: "+229 01 59 29 02 29",
    navBookTable: "Gbà tábìlì sílẹ̀",
    navAdmin: "Àkóso Ilé",

    // Hero
    heroGoogleReviews: "4.1 lórí Google",
    heroTitlePart1: "Iná ìsun-ẹran dídùn,",
    heroTitlePart2: "tútù àti dídùn àwọn èso.",
    heroSubtitle: "Ilé oúnjẹ àtàtà fún ẹran yíyan, pizza, ohun mímu àti èso titun ní Akpakpa, Cotonou. Jẹun níbẹ̀ tàbí gba oúnjẹ lọ ilé ní kánkán.",
    heroReserveBtn: "Ṣètò tábìlì rẹ",
    heroOrderBtn: "Pàṣẹ lórí ayélujára",
    heroCallBtn: "Pè wá ní tààrà",

    // Two Brands
    twoBrandsEyebrow: "Ilé méjì nínú ibùdó kan ṣoṣo",
    twoBrandsTitle: "Oúnjẹ aládùn tí ń kó gbogbo ènìyàn jọ",
    twoBrandsDesc: "Wá gbádùn ẹja sísun dídùn, pizza tútù tàbí burger, kí o sì parí rẹ̀ pẹ̀lú àwọn èso dídùn tàbí ohun mímu elétùtù.",
    fuegoBadge: "Ilé Oúnjẹ & Ọtí",
    fuegoTitle: "El Fuego",
    fuegoDesc: "Ẹran yíyan lórí iná, pizza dídùn, spaghetti, burger àti oúnjẹ ilẹ̀ Adúláwọ̀. Àwọn ohun mímu tútù àti orin aládùn.",
    fuegoFooter: "🔥 Ibùdó iná àti ìgbádùn ní Cotonou",
    exotikBadge: "Ibùdó Èso Titun",
    exotikTitle: "Exoti’K",
    exotikDesc: "Èso titun tí ó kún fún oòrùn: àwọn èso oríṣiríṣi, omi èso àdánidá, àti àwọn èso tí a ṣe lọ́ṣọ̀ọ́ fún ayẹyẹ ìgbéyàwó àti ọjọ́ ìbí.",
    exotikFooter: "🍉 100% Èso àdánidá láti ilẹ̀ wa",

    // Menu
    menuEyebrow: "Àwọn Oúnjẹ Pàtàkì Wa",
    menuTitle: "Àwòrán Oúnjẹ",
    menuDesc: "Wo àwọn ẹran yíyan wa, pizza tútù àti àwọn èso aládùn.",
    menuDetailsBtn: "Wo kíkún & ṣètò",
    menuModalBookDish: "Gbà tábìlì fún oúnjẹ yìí",

    // Order
    orderEyebrow: "Iṣẹ́ Kánkán",
    orderTitle: "Pàṣẹ lẹ́sẹ̀kẹsẹ̀",
    orderDesc: "Yan oúnjẹ tí o fẹ́ kí o sì fi ránṣẹ́ tààrà sí WhatsApp wa.",
    orderSelectDishes: "Yan oúnjẹ rẹ",
    orderYourInfo: "Àwọn kúlẹ̀kúlẹ̀ rẹ",
    orderServiceMode: "Bí o ṣe fẹ́ gba oúnjẹ",
    orderDelivery: "🛵 Gbé wá sí ilé / ọ́fíìsì",
    orderTakeaway: "🛍️ Wá gbé lọ (Takeaway)",
    orderDineIn: "🍽️ Jẹun ní ilé oúnjẹ wa",
    orderFullName: "Orúkọ rẹ ní kíkún *",
    orderWhatsApp: "Nọ́mbà WhatsApp rẹ *",
    orderAddress: "Àdírẹ́sì ibi tí a ó gbé e lọ",
    orderNotes: "Àkíyèsí pàtàkì (bí o bá fẹ́)",
    orderSubmit: "Fi ránṣẹ́ sí WhatsApp",
    orderCallAlt: "Tàbí pè wá lórí fóònù",

    // Reservation
    resEyebrow: "Ètò Ìfipamọ́ Tábìlì & WhatsApp",
    resStep1Title: "1. Ọjọ́, Iye Ènìyàn & Àkókò",
    resStep2Title: "2. Orúkọ Rẹ & Ìfiránṣẹ́ WhatsApp",
    resManageBtn: "Ṣàyẹ̀wò tábìlì mi",
    resDateLabel: "1. Ọjọ́ tí o fẹ́ wá",
    resGuestsLabel: "2. Iye ènìyàn",
    resTimeLabel: "3. Àkókò wíwá",
    resOccasionLabel: "Irú ayẹyẹ wo",
    resSpecialRequests: "Àwọn ìbéèrè pàtàkì (bí o bá fẹ́)",
    resStep1Next: "Tẹ̀síwájú sí orúkọ mi",
    resStep2Prev: "← Yí ọjọ́ padà",
    resStep2Submit: "Fọwọ́sí & Fi ránṣẹ́ sí WhatsApp 🔥",
    resRecapTitle: "Àkópọ̀ ìbéèrè rẹ",
    resSubmitting: "Ó ń lọ lọ́wọ́...",
    resHelpWhatsApp: "Ṣé o fẹ́ fi ránṣẹ́ tààrà lórí WhatsApp?",

    // Location & Horaires
    locEyebrow: "Ibùdó Wa",
    locTitle: "Àdírẹ́sì & Àkókò",
    locAddressTitle: "Àdírẹ́sì",
    locHoursTitle: "Àkókò Ṣíṣí Ilé",
    locPhoneTitle: "Fóònù & WhatsApp",
    locGpsBtn: "Ọ̀nà GPS",
    locWaBtn: "WhatsApp Tààrà",

    // Footer
    footerRights: "Gbogbo ẹ̀tọ́ wà ní ìpamọ́. A ṣe é pẹ̀lú ìfẹ́ ní Cotonou."
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('fuego_lang');
      return saved && TRANSLATIONS[saved] ? saved : 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fuego_lang', language);
    } catch {}
  }, [language]);

  const t = (key) => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.fr;
    return dict[key] || TRANSLATIONS.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
