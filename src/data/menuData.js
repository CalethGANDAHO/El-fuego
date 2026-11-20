export const menuCategories = [
  { id: "all", label: "Tout le menu" },
  { id: "grill", label: "🔥 Grillades" },
  { id: "salade", label: "🥗 Salades" },
  { id: "fruits", label: "🍉 Fruits & Jus" },
  { id: "bar", label: "🍹 Cocktails" }
];

export const menuDishes = [
  {
    id: "fish",
    category: "grill",
    name: "Poisson braisé croustillant",
    description: "Servi avec riz, concombre et sauces pimentées maison.",
    image: "/images/fish.jpg",
    price: "4 500 FCFA",
    ingredients: ["Poisson frais de mer", "Marinade locale", "Riz blanc", "Sauce piment El Fuego"],
    badge: "Signature"
  },
  {
    id: "fish_veg",
    category: "grill",
    name: "Poisson & Légumes sautés",
    description: "Poisson grillé, haricots verts, courgette, carotte et riz parfumé.",
    image: "/images/fish_veg.jpg",
    price: "5 000 FCFA",
    ingredients: ["Filet de poisson", "Légumes du marché", "Huile d'olive", "Riz basmati"]
  },
  {
    id: "chicken",
    category: "grill",
    name: "Demi-poulet rôti braisé",
    description: "Demi-poulet rôti doré, frites maison, salade croquante et deux sauces.",
    image: "/images/chicken.jpg",
    price: "4 000 FCFA",
    ingredients: ["Volaille fraîche", "Épices secrètes", "Frites", "Sauce barbecue"]
  },
  {
    id: "wings",
    category: "grill",
    name: "Ailes de poulet épicées",
    description: "Ailes en sauce relevée caramélisée, frites et dips onctueux.",
    image: "/images/wings.jpg",
    price: "3 500 FCFA",
    ingredients: ["Ailes marinées", "Glaçage miel-piment", "Sauce blanche"]
  },
  {
    id: "salad_salmon",
    category: "salade",
    name: "Salade au saumon fumé",
    description: "Saumon fumé noble, tomate fraîche, maïs doux et concombre sculpté.",
    image: "/images/salad_salmon.jpg",
    price: "4 500 FCFA",
    ingredients: ["Saumon fumé", "Laitue romaine", "Tomates cerises", "Vinaigrette citronnée"]
  },
  {
    id: "salad_green",
    category: "salade",
    name: "Salade fraîcheur méditerranéenne",
    description: "Laitue croquante, olives noires, concombre frais et oignon rouge mariné.",
    image: "/images/salad_green.jpg",
    price: "3 000 FCFA",
    ingredients: ["Laitue bio", "Olives Kalamata", "Concombre", "Feta crémeuse"]
  },
  {
    id: "fruit_skewers",
    category: "fruits",
    name: "Brochettes de fruits nappées",
    description: "Fruits frais découpés et fraises généreusement enrobées de chocolat.",
    image: "/images/fruit_skewers.jpg",
    price: "2 500 FCFA",
    ingredients: ["Ananas", "Pastèque", "Fraise", "Chocolat noir fondu"]
  },
  {
    id: "fruit_stack",
    category: "fruits",
    name: "Gâteau sculpté de fruits frais",
    description: "Pastèque, ananas sucré et pomme verte sculptés et dressés en étages.",
    image: "/images/fruit_stack.jpg",
    price: "5 000 FCFA",
    ingredients: ["Pastèque du Bénin", "Ananas pain de sucre", "Pommes vertes", "Menthe fraîche"]
  },
  {
    id: "fruit_bowl",
    category: "fruits",
    name: "Salade de fruits Exoti’K",
    description: "Fruits de saison cueillis à maturité et menthe, prête à déguster.",
    image: "/images/fruit_bowl.jpg",
    price: "2 000 FCFA",
    ingredients: ["Mangue", "Papaye", "Orange", "Sirop léger de maracuja"]
  },
  {
    id: "fruit_tower",
    category: "fruits",
    name: "Pièce montée de fruits VIP",
    description: "Splendide pièce d'exception pour anniversaires, mariages et réceptions.",
    image: "/images/fruit_tower.jpg",
    price: "Sur devis",
    ingredients: ["Assortiment complet de fruits exotiques", "Mise en scène artistique"]
  },
  {
    id: "cocktail_rainbow",
    category: "bar",
    name: "Cocktail Signature Arc-en-Ciel",
    description: "Un dégradé hypnotique de couleurs fruitées, servi givré.",
    image: "/images/cocktail_rainbow.jpg",
    price: "3 000 FCFA",
    ingredients: ["Rhum blanc", "Curaçao bleu", "Grenadine", "Jus d'orange pressé"]
  },
  {
    id: "cocktail_blue",
    category: "bar",
    name: "Blue Lagoon Exotique",
    description: "Servi très frais avec quartier de citron vert et feuilles de menthe.",
    image: "/images/cocktail_blue.jpg",
    price: "3 000 FCFA",
    ingredients: ["Vodka", "Blue Curaçao", "Limonade fraîche", "Citron vert"]
  },
  {
    id: "cocktail_purple",
    category: "bar",
    name: "Purple Velvet El Fuego",
    description: "Fraise des bois, citron vert, liqueur violette et glace pilée.",
    image: "/images/cocktail_purple.jpg",
    price: "3 500 FCFA",
    ingredients: ["Gin premium", "Coulis de fruits rouges", "Tonic artisanal"]
  }
];
