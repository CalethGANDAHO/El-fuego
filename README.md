# 🔥 El Fuego & Exoti’K — Restaurant, Bar & Fruits Frais (Cotonou, Bénin)

Site web officiel et système de réservation haut de gamme pour **El Fuego & Exoti’K**, situé à Cotonou (Bénin).

Reconstruit avec une architecture moderne, fluide, ultra-rapide (optimisé mobile-first 3G/4G pour le Bénin), respectant scrupuleusement l'identité visuelle de l'établissement (ambiance chaleureuse feu & fraîcheur, grillades au feu de bois, bar à cocktails, coupes de fruits exotiques) et enrichi d'un système de réservation complet connecté à Supabase, WhatsApp et un **Pass Numérique VIP avec QR Code**.

---

## ✨ Fonctionnalités Principales

### 📱 Expérience Client (Mobile-First)
- **Architecture Moderne :** Vite + React 18 + Tailwind CSS, code entièrement découpé en composants réutilisables dans `src/`.
- **Hero Image Nette & Contrôlée :** Vue dégagée sur la façade et la terrasse du restaurant, mise en valeur sans flou excessif.
- **Menu & Gastronomie :** Grillades locales au feu de bois, pizzas artisanales, spécialités libanaises et africaines, salades de fruits frais d'Exoti'K avec modale détaillée des ingrédients et prix en FCFA.
- **Bon de Commande en Direct :** Panier interactif permettant de composer sa commande en ligne et de la transmettre sur WhatsApp en 1 clic.
- **Avis Google Maps Vérifiés :** Intégration de la note (4,1/5 sur 42 avis) et des témoignages réels.
- **Horaires en direct :** Calcul dynamique en temps réel de l'état d'ouverture (UTC+1, heure locale de Cotonou).
- **SEO Local & Réseaux Sociaux :** Balises Open Graph, Schema.org `Restaurant` géolocalisé à Cotonou.

### 🎫 Pass Numérique VIP (Ticket de Table avec QR Code)
- **Ticket Digital Haute Définition :** Présentation sous forme de pass d'embarquement VIP aux couleurs du restaurant (perforations de billet, badge *TABLE CONFIRMÉE*).
- **QR Code Unique :** Généré dynamiquement pour chaque réservation, prêt à être scanné par le maître d'hôtel avec un smartphone pour valider l'entrée sans attente.
- **Gestion Client :** Bouton « Gérer ma table » permettant au client de retrouver sa réservation avec son numéro (`FUEGO-2026-XXXX`) pour consulter ou annuler sans frais.

### 🛎️ Système de Réservation Haut de Gamme
1. **Parcours en 3 étapes :**
   - **Étape 1 :** Date, nombre de couverts (sélection rapide de 1 à 15), créneau horaire avec calcul de disponibilité en temps réel.
   - **Étape 2 :** Choix de l'espace (*Terrasse plein air*, *Salle intérieure climatisée*, *Espace Bar & Karaoké*, *Comptoir Exoti'K*), occasion (anniversaire, karaoké, etc.) et demandes particulières.
   - **Étape 3 :** Coordonnées (nom, téléphone béninois indicatif +229 validé, e-mail facultatif), récapitulatif et politique de retenue (15 min).
2. **Confirmation Immédiate :** Référence unique générée (`FUEGO-2026-XXXX`) avec confettis et bouton direct d'envoi de confirmation pré-remplie sur WhatsApp avec puces typographiques universelles.
3. **Anti-Spam :** Protection Honeypot invisible pour les robots.

### 📊 Tableau de Bord Restaurateur (Protégé par Mot de Passe)
- Accès discret via l'icône cadenas dans la barre de navigation.
- Mot de passe de sécurité (par défaut : `fuego2026`, personnalisable dans `.env`).
- Statistiques en direct : couverts prévus, réservations par zone.
- **Export Excel (`.xlsx`) :** Téléchargement instantané de la liste des réservations pour le service en salle.

---

## 📦 Kit Universel Réutilisable pour d'autres Restaurants

Vous souhaitez installer ce système sur le site web d'un **autre restaurant** ou bar sans devoir tout recoder ?

Un dossier complet et prêt à l'emploi est inclus dans ce projet :  
📁 **`restaurant-booking-kit/`**  
📄 Fichier centralisé : **`src/data/restaurant.config.js`**

---

## 🚀 Démarrage & Commandes

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement (port 3000)
npm run dev

# Compilation pour la production (génère le dossier dist/)
npm run build
```

---

&copy; 2026 El Fuego & Exoti’K — Cotonou, Bénin.
