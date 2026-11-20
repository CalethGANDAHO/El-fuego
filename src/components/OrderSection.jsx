import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Send, PhoneCall } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurant.config';

const ORDER_ITEMS = [
  { category: "Grillades", items: ["Poisson braisé", "Poisson & légumes sautés", "Demi-poulet rôti", "Ailes de poulet épicées"] },
  { category: "Salades", items: ["Salade au saumon fumé", "Salade fraîcheur méditerranéenne", "Salade César", "Salade avocat crevettes"] },
  { category: "Pizzas Artisanales", items: ["Pizza El Fuego", "Margherita classique", "Quatre fromages", "Quatre saisons", "Reine", "Fruits de mer"] },
  { category: "Fruits & Desserts", items: ["Brochettes de fruits nappées", "Salade de fruits Exoti’K", "Gâteau sculpté de fruits", "Assiette dégustation"] },
  { category: "Cocktails & Boissons", items: ["Cocktail Arc-en-Ciel", "Blue Lagoon Exotique", "Purple Velvet", "Bière fraîche", "Jus naturel pressé"] }
];

export default function OrderSection() {
  const [quantities, setQuantities] = useState({});
  const [mode, setMode] = useState("Livraison");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [notes, setNotes] = useState("");

  const updateQuantity = (item, delta) => {
    setQuantities(prev => {
      const cur = prev[item] || 0;
      const next = Math.max(0, cur + delta);
      return { ...prev, [item]: next };
    });
  };

  const selectedItems = Object.keys(quantities).filter(k => quantities[k] > 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      alert("Veuillez sélectionner au moins un article.");
      return;
    }
    if (!nom || !telephone) {
      alert("Veuillez renseigner votre nom et numéro WhatsApp.");
      return;
    }

    let message = `🛒 *COMMANDE EN LIGNE — EL FUEGO & EXOTI’K*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🛵 *Mode :* ${mode}\n\n` +
      `📋 *Articles choisis :*\n` +
      selectedItems.map(k => `• ${quantities[k]}x ${k}`).join('\n') +
      `\n\n👤 *Nom :* ${nom}\n` +
      `📞 *Contact :* +229 ${telephone}\n` +
      (mode === "Livraison" && adresse ? `📍 *Adresse de livraison :* ${adresse}\n` : '') +
      (notes ? `📝 *Précisions :* ${notes}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Merci de me confirmer le montant et le délai estimé !`;

    const url = `https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="commander" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Service Express</span>
        <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-white">Commandez en direct</h2>
        <p className="mt-3 text-muted-foreground text-base">
          Composez votre sélection et transmettez instantanément votre bon de commande sur notre WhatsApp officiel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Liste des Articles */}
        <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-border">
          <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShoppingBag className="size-5 text-primary" /> Sélectionnez vos plats
          </h3>

          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
            {ORDER_ITEMS.map((grp, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3">{grp.category}</h4>
                <div className="space-y-2">
                  {grp.items.map(item => (
                    <div key={item} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/60">
                      <span className="text-sm text-white font-medium">{item}</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, -1)}
                          className="size-7 rounded-full bg-secondary border border-border flex items-center justify-center text-white hover:border-primary"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-primary">
                          {quantities[item] || 0}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item, 1)}
                          className="size-7 rounded-full bg-secondary border border-border flex items-center justify-center text-white hover:border-primary"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire Coordonnées */}
        <div className="lg:col-span-5 glass rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Vos informations</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                  Mode de service
                </label>
                <select
                  value={mode}
                  onChange={e => setMode(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                >
                  <option value="Livraison">🛵 Livraison à domicile / bureau</option>
                  <option value="À emporter">🛍️ À emporter (Takeaway)</option>
                  <option value="Sur place">🍽️ Dégustation sur place</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Boris KOUADIO"
                  value={nom}
                  onChange={e => setNom(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                  Numéro WhatsApp *
                </label>
                <div className="flex gap-2">
                  <span className="flex items-center rounded-xl border border-border bg-secondary px-3 text-sm font-bold text-white">
                    +229
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Ex : 59 29 02 29"
                    value={telephone}
                    onChange={e => setTelephone(e.target.value)}
                    className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {mode === "Livraison" && (
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Adresse précise de livraison
                  </label>
                  <input
                    type="text"
                    placeholder="Quartier, point de repère..."
                    value={adresse}
                    onChange={e => setAdresse(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                  Précisions cuisine (facultatif)
                </label>
                <input
                  type="text"
                  placeholder="Ex : Piment séparé, sans oignon..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                />
              </div>

              {/* Résumé Panier */}
              <div className="rounded-xl border border-dashed border-border bg-background/40 p-4 text-xs text-muted-foreground">
                {selectedItems.length === 0 ? (
                  <span>Aucun article sélectionné pour l'instant.</span>
                ) : (
                  <div>
                    <strong className="text-primary block mb-1">Votre sélection ({selectedItems.length}) :</strong>
                    <span>{selectedItems.map(k => `${quantities[k]}x ${k}`).join(', ')}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary-hover transition-all"
              >
                <Send className="size-4" /> Envoyer sur WhatsApp
              </button>
            </form>
          </div>

          <div className="mt-4 pt-4 border-t border-border text-center">
            <a
              href={`tel:${RESTAURANT_CONFIG.contact.phoneFormatted}`}
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-white"
            >
              <PhoneCall className="size-3.5 text-primary" /> Ou commander directement par appel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
