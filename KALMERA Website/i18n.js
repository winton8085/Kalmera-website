/* ============================================================
   KALMERA — translations
   English is the source of truth and lives in index.html, so it
   needs no entry here. Every other language overrides the text.
   Product names (KALMERA, KARBON, KLOUD, Mass, Base, Drift) are
   never translated.
   ============================================================ */

/* Numbers, weights, sizes and prices are the same in every language,
   so they live here once instead of in each translation. */
var GARMENT_DATA = {
  hoodie:     { weight: "500 g/m² · 14.7 oz", fabric: "fleece", fit: "oversized", mark: "centreChest", sizes: "S–2XL", price: "£50" },
  tee:        { weight: "400 g/m² · 11.8 oz", fabric: "cotton", fit: "boxy",      mark: "leftChest",   sizes: "S–2XL", price: "£30" },
  sweatpants: { weight: "420 g/m² · 12.4 oz", fabric: "heavy",  fit: "straight",  mark: "vertLeg",     sizes: "S–XL",  price: "£40" }
};

var PRODUCT_MAP = {
  "karbon-hoodie":     { line: "KARBON", garment: "hoodie",     colour: "black" },
  "karbon-tee":        { line: "KARBON", garment: "tee",        colour: "black" },
  "karbon-sweatpants": { line: "KARBON", garment: "sweatpants", colour: "black" },
  "kloud-hoodie":      { line: "KLOUD",  garment: "hoodie",     colour: "white" },
  "kloud-tee":         { line: "KLOUD",  garment: "tee",        colour: "white" },
  "kloud-sweatpants":  { line: "KLOUD",  garment: "sweatpants", colour: "white" }
};

var LANGS = {};

/* ---------------------------------------------------------- FRANÇAIS */
LANGS.fr = {
  ui: {
    navReleases: "Sorties", navTimeline: "Chronologie", navFaq: "FAQ", navContact: "Contact",
    basket: "Panier", ambientOff: "Ambiance désactivée", ambientOn: "Ambiance activée",
    heroTop: "Créer une nouvelle ère de l'essentiel", heroEst: "ANGLETERRE · Depuis 2025",
    heroRole: "Deux pièces, conçues avec une attention obsessionnelle. Rien de gaspillé, tout est intentionnel.",
    scroll: "DÉFILER",
    secReleases: "Sorties", secTimeline: "La chronologie", secFaq: "Questions",
    cntYears: "2025 — 2027", cntGoodToKnow: "Bon à savoir",
    drop01: "Drop 01", drop01meta: "02 Lignes · Disponible maintenant",
    drop02: "Drop 02", drop02meta: "Prévu 2027",
    dropEmpty: "En atelier — rien sur la table pour l'instant. Inscrivez-vous pour être informé en premier.",
    karbonMeta: "L'Ancre · Noir", kloudMeta: "Le Contrepoint · Blanc",
    aboutHtml: "KALMERA est un studio d'essentiels en Angleterre, qui crée les <span class=\"accent\">pièces les moins nombreuses, les meilleures</span> — tissu travaillé, coupe obsessionnelle, rien de gaspillé. Faites pour être portées des années, pas des saisons.",
    aboutJury: "( fondé en 2025 · bienvenue dans une nouvelle ère ✺ )",
    tl: [
      { d: "T4 2025", h: "Fondation de KALMERA Apparel", p: "Une table, une seule idée — créer les meilleurs essentiels, les moins nombreux, et rien d'autre." },
      { d: "T1 2026", h: "Développement du tissu", p: "Échantillonnage d'une molleton lourd 500 g/m² jusqu'à ce que KARBON et KLOUD tiennent leur forme et leur toucher." },
      { d: "T2 2026", h: "Identité & studio", p: "L'identité KALMERA prend forme — la marque, la typographie, la philosophie du rien gaspillé." },
      { d: "Maintenant", h: "Drop 01 — ouvert", p: "KARBON & KLOUD sont là, chacun en sweat à capuche, t-shirt et pantalon. Fabriqués à la commande, expédiés dans le monde entier. Pas de réassort." },
      { d: "2027", h: "Drop 02 — à l'horizon", p: "Le prochain chapitre, encore à venir. La liste l'apprend en premier." }
    ],
    faq: [
      { q: "Combien de temps prendra ma commande ?", a: "Chaque pièce est <strong>fabriquée à la commande</strong> — imprimée à la main après votre achat, pour ne rien gaspiller. La production prend quelques jours, puis l'expédition. <strong>La livraison standard est gratuite et prend environ 30 jours dans le monde entier ; l'Express (~10 jours) est disponible au paiement.</strong> Vous recevrez un numéro de suivi dès l'expédition." },
      { q: "Pourquoi la fabrication à la commande ?", a: "Parce que c'est la philosophie KALMERA — <strong>les pièces les moins nombreuses, les meilleures, rien de gaspillé.</strong> Fabriquer chaque pièce uniquement à la commande signifie aucune surproduction, aucun déchet, aucun stock mort. Le compromis est une courte attente ; l'avantage est une pièce faite pour vous." },
      { q: "Quelle taille choisir ?", a: "Les pièces sont coupées <strong>oversize / carrées</strong> par choix. Pour un vrai look oversize, prenez votre taille habituelle ; pour une coupe plus ajustée, prenez une taille en dessous. Un guide des tailles complet figure sur chaque produit." },
      { q: "Livrez-vous dans le monde entier ?", a: "<strong>Oui — dans le monde entier.</strong> La livraison standard est gratuite partout. Les délais varient légèrement selon le pays ; vous verrez l'estimation et un numéro de suivi après commande." },
      { q: "Retours & échanges", a: "Comme chaque pièce est <strong>fabriquée à la commande</strong>, nous ne pouvons pas accepter les retours pour changement d'avis. Mais si votre article arrive <strong>défectueux, endommagé, ou n'est pas le bon article/taille</strong>, écrivez-nous sous 7 jours à <strong>kalmera.team@gmail.com</strong> avec une photo et nous réglerons cela. Consultez le guide des tailles avant de commander." },
      { q: "Comment vous contacter ?", a: "Écrivez à <strong>kalmera.team@gmail.com</strong> pour tout — commandes, tailles, ou simplement pour dire bonjour. Nous lisons chaque message." }
    ],
    contactLead: "Habillons la nouvelle ère", joinList: "rejoindre la liste", watchYt: "regarder sur youtube ↗",
    footerMid: "©—2026 · Bienvenue dans une nouvelle ère", footerRight: "Conçu en Angleterre ✺",
    close: "Fermer", productImage: "Image du produit", sizeGuide: "Guide des tailles",
    deliveryNote: "Fabriqué à la commande · Livraison standard gratuite (~30 jours) ou Express (~10 jours) au paiement.",
    addToBasket: "ajouter au panier →", availNow: "Disponible maintenant · fabriqué à la commande",
    yourBasket: "Votre panier", basketEmpty: "Votre panier est vide.",
    delivery: "Livraison", standard: "Standard", express: "Express",
    stdTime: "Fabriqué à la commande · ~30 jours", expTime: "Fabriqué à la commande · ~10 jours",
    free: "Gratuit", freeStandard: "Gratuit · Standard",
    subtotal: "Sous-total", shipping: "Livraison", total: "Total", pay: "Payer", remove: "Retirer",
    cardSlot: "Votre nom, adresse et carte sont saisis en toute sécurité à l'étape suivante, gérée par Stripe. KALMERA ne voit jamais vos données bancaires.",
    coNote: "Fabriqué à la commande — imprimé à la main après votre commande, puis expédié dans le monde entier. Prévoyez du temps pour la production avant le drop.",
    coSecure: "🔒 Paiements sécurisés par Stripe · KALMERA ne voit jamais vos données bancaires",
    payLoading: "Redirection vers le paiement sécurisé…",
    payError: "Désolé — un problème est survenu au démarrage du paiement. Réessayez, ou écrivez à kalmera.team@gmail.com."
  },
  sp: { colour: "Couleur", weight: "Poids", fabric: "Tissu", fit: "Coupe", mark: "Marque", sizes: "Tailles", made: "Fabrication", price: "Prix", availability: "Disponibilité" },
  v: {
    black: "Noir", white: "Blanc",
    fleece: "Molleton lourd", cotton: "Coton lourd", heavy: "Poids lourd",
    oversized: "Oversize", boxy: "Oversize carré", straight: "Jambe droite",
    centreChest: "Centre poitrine", leftChest: "Poitrine gauche", vertLeg: "Vertical, bas de jambe",
    toOrder: "À la commande · expédié dans le monde entier", freeShip: "livraison gratuite", availableNow: "Disponible maintenant"
  },
  g: {
    hoodie: {
      name: "Sweat à capuche", gal: ["Devant", "Dos", "Détail", "Capuche"],
      desc: ["L'ancre du drop. Construit sur un molleton lourd de 500 g/m² — dense, structuré et substantiel en main. Fait pour garder sa forme et se porter des années, pas des saisons.",
             "Coupe oversize, intérieur brossé moelleux, extérieur épuré et réfléchi. La marque KALMERA est centrée sur la poitrine, imprimée à la commande. Fabriqué au moment de votre commande, expédié dans le monde entier — rien de gaspillé."]
    },
    tee: {
      name: "T-shirt", gal: ["Devant", "Dos", "Détail", "Col"],
      desc: ["La pièce du quotidien. Un t-shirt carré et oversize à un véritable 400 g/m² — lourd pour un t-shirt, avec une vraie structure et un beau tombé.",
             "Une petite marque KALMERA sur la poitrine gauche, imprimée à la commande. Expédié dans le monde entier. Conçu pour bien tomber et durer."]
    },
    sweatpants: {
      name: "Pantalon de survêtement", gal: ["Devant", "Dos", "Détail", "Ceinture"],
      desc: ["L'assortiment du sweat. Pantalon lourd 420 g/m² à coupe droite — un peu plus léger que le sweat, par choix, pour bouger.",
             "La marque KALMERA descend verticalement le long du bas de jambe, imprimée à la commande. Expédié dans le monde entier. L'ensemble complet, de la tête aux pieds."]
    }
  },
  sg: {
    hoodie: { cols: ["Taille", "Poitrine (cm)", "Longueur (cm)", "Manche (cm)"], note: "Coupe oversize. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RW0035." },
    tee: { cols: ["Taille", "Poitrine (cm)", "Longueur (cm)"], note: "Coupe oversize carrée. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RT0080." },
    sweatpants: { cols: ["Taille", "Tour de taille (cm)", "Entrejambe (cm)", "Longueur (cm)"], note: "Coupe jambe droite. Mesures du vêtement à plat. Valeurs provisoires — à confirmer avec Tapstitch RK0009." }
  }
};

/* ---------------------------------------------------------- DEUTSCH */
LANGS.de = {
  ui: {
    navReleases: "Releases", navTimeline: "Zeitleiste", navFaq: "FAQ", navContact: "Kontakt",
    basket: "Warenkorb", ambientOff: "Ambient aus", ambientOn: "Ambient an",
    heroTop: "Eine neue Ära der Essentials", heroEst: "ENGLAND · seit 2025",
    heroRole: "Zwei Teile, mit besessener Sorgfalt entwickelt. Nichts verschwendet, alles bewusst.",
    scroll: "SCROLLEN",
    secReleases: "Releases", secTimeline: "Die Zeitleiste", secFaq: "Fragen",
    cntYears: "2025 — 2027", cntGoodToKnow: "Gut zu wissen",
    drop01: "Drop 01", drop01meta: "02 Linien · Jetzt verfügbar",
    drop02: "Drop 02", drop02meta: "Kommt 2027",
    dropEmpty: "Im Studio — noch nichts auf dem Tisch. Trag dich ein, um es zuerst zu erfahren.",
    karbonMeta: "Der Anker · Schwarz", kloudMeta: "Der Gegenpol · Weiß",
    aboutHtml: "KALMERA ist ein Essentials-Studio in England und baut die <span class=\"accent\">wenigsten, besten</span> Teile — entwickelter Stoff, besessene Passform, nichts verschwendet. Gemacht, um jahrelang getragen zu werden, nicht saisonweise.",
    aboutJury: "( gegründet 2025 · willkommen in einer neuen Ära ✺ )",
    tl: [
      { d: "Q4 2025", h: "KALMERA Apparel gegründet", p: "Ein Tisch, eine einzige Idee — die wenigsten, besten Essentials bauen und sonst nichts." },
      { d: "Q1 2026", h: "Stoffentwicklung", p: "Musterung von schwerem 500 g/m² Fleece, bis KARBON und KLOUD Form und Griff halten." },
      { d: "Q2 2026", h: "Identität & Studio", p: "Die KALMERA-Identität nimmt Form an — das Zeichen, die Schrift, die Philosophie des Nichts-Verschwendens." },
      { d: "Jetzt", h: "Drop 01 — offen", p: "KARBON & KLOUD sind da, jeweils als Hoodie, Tee und Jogginghose. Auf Bestellung gefertigt, weltweit verschickt. Kein Restock." },
      { d: "2027", h: "Drop 02 — am Horizont", p: "Das nächste Kapitel, noch offen. Die Liste erfährt es zuerst." }
    ],
    faq: [
      { q: "Wie lange dauert meine Bestellung?", a: "Jedes Teil wird <strong>auf Bestellung gefertigt</strong> — nach deinem Kauf von Hand bedruckt, damit nichts verschwendet wird. Die Produktion dauert einige Tage, dann der Versand. <strong>Der Standardversand ist kostenlos und dauert weltweit etwa 30 Tage; Express (~10 Tage) ist an der Kasse verfügbar.</strong> Du erhältst eine Sendungsnummer, sobald verschickt wurde." },
      { q: "Warum auf Bestellung gefertigt?", a: "Weil es der KALMERA-Weg ist — <strong>die wenigsten, besten Teile, nichts verschwendet.</strong> Jedes Teil erst bei Bestellung zu fertigen bedeutet keine Überproduktion, keine Deponie, keine Restbestände. Der Kompromiss ist eine kurze Wartezeit; der Gewinn ist ein Teil, das für dich gemacht wurde." },
      { q: "Welche Größe soll ich wählen?", a: "Die Teile sind bewusst <strong>oversized / kastig</strong> geschnitten. Für einen echten Oversized-Look nimm deine normale Größe; für eine engere Passform eine Nummer kleiner. Eine vollständige Größentabelle findest du bei jedem Produkt." },
      { q: "Versendet ihr weltweit?", a: "<strong>Ja — weltweit.</strong> Der Standardversand ist überall kostenlos. Die Lieferzeiten variieren je nach Land leicht; nach der Bestellung siehst du die Schätzung und eine Sendungsnummer." },
      { q: "Rückgabe & Umtausch", a: "Da jedes Teil <strong>auf Bestellung gefertigt</strong> wird, können wir keine allgemeine Rückgabe bei Sinneswandel annehmen. Kommt dein Artikel jedoch <strong>defekt, beschädigt oder als falscher Artikel/falsche Größe</strong> an, schreib uns innerhalb von 7 Tagen an <strong>kalmera.team@gmail.com</strong> mit einem Foto und wir bringen es in Ordnung." },
      { q: "Wie erreiche ich euch?", a: "Schreib an <strong>kalmera.team@gmail.com</strong> für alles — Bestellungen, Größen oder einfach nur Hallo. Wir lesen jede Nachricht." }
    ],
    contactLead: "Kleiden wir die neue Ära", joinList: "in die liste eintragen", watchYt: "auf youtube ansehen ↗",
    footerMid: "©—2026 · Willkommen in einer neuen Ära", footerRight: "Entworfen in England ✺",
    close: "Schließen", productImage: "Produktbild", sizeGuide: "Größentabelle",
    deliveryNote: "Auf Bestellung gefertigt · Kostenloser Standardversand (~30 Tage) oder Express (~10 Tage) an der Kasse.",
    addToBasket: "in den warenkorb →", availNow: "Jetzt verfügbar · auf Bestellung gefertigt",
    yourBasket: "Dein Warenkorb", basketEmpty: "Dein Warenkorb ist leer.",
    delivery: "Versand", standard: "Standard", express: "Express",
    stdTime: "Auf Bestellung · ~30 Tage", expTime: "Auf Bestellung · ~10 Tage",
    free: "Gratis", freeStandard: "Gratis · Standard",
    subtotal: "Zwischensumme", shipping: "Versand", total: "Gesamt", pay: "Bezahlen", remove: "Entfernen",
    cardSlot: "Name, Adresse und Karte werden im nächsten Schritt sicher von Stripe erfasst. KALMERA sieht deine Kartendaten nie.",
    coNote: "Auf Bestellung gefertigt — nach deiner Bestellung von Hand bedruckt und weltweit verschickt. Plane Zeit für die Produktion ein.",
    coSecure: "🔒 Zahlungen abgesichert durch Stripe · KALMERA sieht deine Kartendaten nie",
    payLoading: "Weiterleitung zur sicheren Kasse…",
    payError: "Entschuldigung — beim Start der Kasse ist etwas schiefgelaufen. Bitte versuche es erneut oder schreibe an kalmera.team@gmail.com."
  },
  sp: { colour: "Farbe", weight: "Gewicht", fabric: "Stoff", fit: "Passform", mark: "Zeichen", sizes: "Größen", made: "Fertigung", price: "Preis", availability: "Verfügbarkeit" },
  v: {
    black: "Schwarz", white: "Weiß",
    fleece: "Schweres Fleece", cotton: "Schwere Baumwolle", heavy: "Schwer",
    oversized: "Oversized", boxy: "Kastig oversized", straight: "Gerades Bein",
    centreChest: "Brustmitte", leftChest: "Linke Brust", vertLeg: "Vertikal, unteres Bein",
    toOrder: "Auf Bestellung · weltweiter Versand", freeShip: "kostenloser Versand", availableNow: "Jetzt verfügbar"
  },
  g: {
    hoodie: {
      name: "Hoodie", gal: ["Vorne", "Hinten", "Detail", "Kapuze"],
      desc: ["Der Anker des Drops. Gebaut auf schwerem 500 g/m² Fleece — dicht, strukturiert und spürbar substanziell. Gemacht, um seine Form zu halten und jahrelang getragen zu werden.",
             "Oversized-Passform, weich angerautes Innenfutter, klares durchdachtes Äußeres. Das KALMERA-Zeichen sitzt mittig auf der Brust, auf Bestellung gedruckt. Weltweiter Versand — nichts verschwendet."]
    },
    tee: {
      name: "Tee", gal: ["Vorne", "Hinten", "Detail", "Kragen"],
      desc: ["Die Alltagshälfte. Ein kastiges, oversized T-Shirt mit echten 400 g/m² — schwer für ein Tee, mit echter Struktur und sauberem Fall.",
             "Ein kleines KALMERA-Zeichen auf der linken Brust, auf Bestellung gedruckt. Weltweiter Versand. Gebaut, um zu sitzen und zu halten."]
    },
    sweatpants: {
      name: "Jogginghose", gal: ["Vorne", "Hinten", "Detail", "Bund"],
      desc: ["Das Gegenstück zum Hoodie. Schwere 420 g/m² Jogginghose mit geradem Bein — bewusst etwas leichter als der Hoodie, damit sie mitgeht.",
             "Das KALMERA-Zeichen läuft senkrecht am unteren Bein herunter, auf Bestellung gedruckt. Weltweiter Versand. Das komplette Set, von Kopf bis Fuß."]
    }
  },
  sg: {
    hoodie: { cols: ["Größe", "Brust (cm)", "Länge (cm)", "Ärmel (cm)"], note: "Oversized-Passform. Maße des flach liegenden Kleidungsstücks. Vorläufige Werte — mit Tapstitch RW0035 abgleichen." },
    tee: { cols: ["Größe", "Brust (cm)", "Länge (cm)"], note: "Kastige Oversized-Passform. Maße flach liegend. Vorläufige Werte — mit Tapstitch RT0080 abgleichen." },
    sweatpants: { cols: ["Größe", "Taille (cm)", "Schrittlänge (cm)", "Länge (cm)"], note: "Gerades Bein. Maße flach liegend. Vorläufige Werte — mit Tapstitch RK0009 abgleichen." }
  }
};
/* ---------------------------------------------------------- ESPAÑOL */
LANGS.es = {
  ui: {
    navReleases: "Lanzamientos", navTimeline: "Cronología", navFaq: "FAQ", navContact: "Contacto",
    basket: "Cesta", ambientOff: "Ambiente apagado", ambientOn: "Ambiente activado",
    heroTop: "Creando una nueva era de básicos", heroEst: "INGLATERRA · desde 2025",
    heroRole: "Dos piezas, diseñadas con atención obsesiva. Nada desperdiciado, todo intencionado.",
    scroll: "DESLIZA",
    secReleases: "Lanzamientos", secTimeline: "La cronología", secFaq: "Preguntas",
    cntYears: "2025 — 2027", cntGoodToKnow: "Bueno saber",
    drop01: "Drop 01", drop01meta: "02 Líneas · Disponible ahora",
    drop02: "Drop 02", drop02meta: "Llega en 2027",
    dropEmpty: "En el estudio — nada sobre la mesa todavía. Únete a la lista para enterarte primero.",
    karbonMeta: "El Ancla · Negro", kloudMeta: "El Contrapunto · Blanco",
    aboutHtml: "KALMERA es un estudio de básicos en Inglaterra que crea las <span class=\"accent\">menos piezas, las mejores</span> — tejido diseñado, corte obsesivo, nada desperdiciado. Hechas para llevarse años, no temporadas.",
    aboutJury: "( fundado en 2025 · bienvenido a una nueva era ✺ )",
    tl: [
      { d: "T4 2025", h: "Se funda KALMERA Apparel", p: "Una mesa, una sola idea — crear los mejores básicos, los menos posibles, y nada más." },
      { d: "T1 2026", h: "Desarrollo del tejido", p: "Muestreo de forro polar pesado de 500 g/m² hasta que KARBON y KLOUD mantienen su forma y su tacto." },
      { d: "T2 2026", h: "Identidad y estudio", p: "La identidad KALMERA toma forma — la marca, la tipografía, la filosofía de no desperdiciar nada." },
      { d: "Ahora", h: "Drop 01 — abierto", p: "KARBON y KLOUD ya están aquí, cada uno en sudadera, camiseta y pantalón. Fabricados bajo pedido, enviados a todo el mundo. Sin reposición." },
      { d: "2027", h: "Drop 02 — en el horizonte", p: "El siguiente capítulo, aún por llegar. La lista se entera primero." }
    ],
    faq: [
      { q: "¿Cuánto tardará mi pedido?", a: "Cada pieza se <strong>fabrica bajo pedido</strong> — impresa a mano tras tu compra, para no desperdiciar nada. La producción tarda unos días, luego el envío. <strong>El envío estándar es gratuito y tarda unos 30 días en todo el mundo; el Exprés (~10 días) está disponible en el pago.</strong> Recibirás un número de seguimiento al enviarse." },
      { q: "¿Por qué se fabrica bajo pedido?", a: "Porque es la forma KALMERA — <strong>las menos piezas, las mejores, nada desperdiciado.</strong> Fabricar cada pieza solo cuando se pide significa sin sobreproducción, sin vertedero, sin stock muerto. El precio es una breve espera; la ventaja es una pieza hecha para ti." },
      { q: "¿Qué talla debo elegir?", a: "Las piezas tienen un corte <strong>oversize / recto</strong> por diseño. Para un look oversize real, elige tu talla habitual; si prefieres algo más ajustado, baja una talla. Hay una guía de tallas completa en cada producto." },
      { q: "¿Enviáis a todo el mundo?", a: "<strong>Sí — a todo el mundo.</strong> El envío estándar es gratuito en todas partes. Los plazos varían algo según el país; verás la estimación y un número de seguimiento tras el pedido." },
      { q: "Devoluciones y cambios", a: "Como cada pieza se <strong>fabrica bajo pedido</strong>, no aceptamos devoluciones por cambio de opinión. Pero si tu artículo llega <strong>defectuoso, dañado o es el artículo/talla equivocado</strong>, escríbenos en 7 días a <strong>kalmera.team@gmail.com</strong> con una foto y lo resolveremos." },
      { q: "¿Cómo puedo contactaros?", a: "Escribe a <strong>kalmera.team@gmail.com</strong> para lo que sea — pedidos, tallas o simplemente para saludar. Leemos todos los mensajes." }
    ],
    contactLead: "Vistamos la nueva era", joinList: "únete a la lista", watchYt: "ver en youtube ↗",
    footerMid: "©—2026 · Bienvenido a una nueva era", footerRight: "Diseñado en Inglaterra ✺",
    close: "Cerrar", productImage: "Imagen del producto", sizeGuide: "Guía de tallas",
    deliveryNote: "Fabricado bajo pedido · Envío estándar gratuito (~30 días) o Exprés (~10 días) al pagar.",
    addToBasket: "añadir a la cesta →", availNow: "Disponible ahora · fabricado bajo pedido",
    yourBasket: "Tu cesta", basketEmpty: "Tu cesta está vacía.",
    delivery: "Envío", standard: "Estándar", express: "Exprés",
    stdTime: "Bajo pedido · ~30 días", expTime: "Bajo pedido · ~10 días",
    free: "Gratis", freeStandard: "Gratis · Estándar",
    subtotal: "Subtotal", shipping: "Envío", total: "Total", pay: "Pagar", remove: "Quitar",
    cardSlot: "Tu nombre, dirección y tarjeta se introducen de forma segura en el siguiente paso, gestionado por Stripe. KALMERA nunca ve los datos de tu tarjeta.",
    coNote: "Fabricado bajo pedido — impreso a mano tras tu pedido y enviado a todo el mundo. Deja tiempo para la producción.",
    coSecure: "🔒 Pagos protegidos por Stripe · KALMERA nunca ve los datos de tu tarjeta",
    payLoading: "Llevándote al pago seguro…",
    payError: "Lo sentimos — algo salió mal al iniciar el pago. Inténtalo de nuevo o escribe a kalmera.team@gmail.com."
  },
  sp: { colour: "Color", weight: "Peso", fabric: "Tejido", fit: "Corte", mark: "Marca", sizes: "Tallas", made: "Fabricación", price: "Precio", availability: "Disponibilidad" },
  v: {
    black: "Negro", white: "Blanco",
    fleece: "Forro polar pesado", cotton: "Algodón pesado", heavy: "Peso pesado",
    oversized: "Oversize", boxy: "Oversize recto", straight: "Pierna recta",
    centreChest: "Centro del pecho", leftChest: "Pecho izquierdo", vertLeg: "Vertical, pierna baja",
    toOrder: "Bajo pedido · envío mundial", freeShip: "envío gratuito", availableNow: "Disponible ahora"
  },
  g: {
    hoodie: {
      name: "Sudadera con capucha", gal: ["Frente", "Espalda", "Detalle", "Capucha"],
      desc: ["El ancla del drop. Construida sobre un forro polar pesado de 500 g/m² — denso, estructurado y sustancial al tacto. Hecha para mantener su forma y durar años, no temporadas.",
             "Corte oversize, interior cepillado suave, exterior limpio y pensado. La marca KALMERA va centrada en el pecho, impresa bajo pedido. Envío mundial — nada desperdiciado."]
    },
    tee: {
      name: "Camiseta", gal: ["Frente", "Espalda", "Detalle", "Cuello"],
      desc: ["La mitad de diario. Una camiseta recta y oversize de auténticos 400 g/m² — pesada para ser camiseta, con estructura real y buena caída.",
             "Una pequeña marca KALMERA en el pecho izquierdo, impresa bajo pedido. Envío mundial. Hecha para sentar bien y durar."]
    },
    sweatpants: {
      name: "Pantalón de chándal", gal: ["Frente", "Espalda", "Detalle", "Cintura"],
      desc: ["El complemento de la sudadera. Pantalón pesado de 420 g/m² con corte de pierna recta — algo más ligero que la sudadera, por diseño, para moverse.",
             "La marca KALMERA baja en vertical por la pierna, impresa bajo pedido. Envío mundial. El conjunto completo, de arriba abajo."]
    }
  },
  sg: {
    hoodie: { cols: ["Talla", "Pecho (cm)", "Largo (cm)", "Manga (cm)"], note: "Corte oversize. Medidas de la prenda en plano. Valores provisionales — confirmar con Tapstitch RW0035." },
    tee: { cols: ["Talla", "Pecho (cm)", "Largo (cm)"], note: "Corte oversize recto. Medidas en plano. Valores provisionales — confirmar con Tapstitch RT0080." },
    sweatpants: { cols: ["Talla", "Cintura (cm)", "Entrepierna (cm)", "Largo (cm)"], note: "Corte de pierna recta. Medidas en plano. Valores provisionales — confirmar con Tapstitch RK0009." }
  }
};

/* ---------------------------------------------------------- ITALIANO */
LANGS.it = {
  ui: {
    navReleases: "Uscite", navTimeline: "Cronologia", navFaq: "FAQ", navContact: "Contatti",
    basket: "Carrello", ambientOff: "Ambient spento", ambientOn: "Ambient attivo",
    heroTop: "Creare una nuova era di essenziali", heroEst: "INGHILTERRA · dal 2025",
    heroRole: "Due capi, progettati con attenzione ossessiva. Niente sprecato, tutto intenzionale.",
    scroll: "SCORRI",
    secReleases: "Uscite", secTimeline: "La cronologia", secFaq: "Domande",
    cntYears: "2025 — 2027", cntGoodToKnow: "Da sapere",
    drop01: "Drop 01", drop01meta: "02 Linee · Disponibile ora",
    drop02: "Drop 02", drop02meta: "In arrivo nel 2027",
    dropEmpty: "In studio — ancora niente sul tavolo. Iscriviti alla lista per saperlo per primo.",
    karbonMeta: "L'Ancora · Nero", kloudMeta: "Il Contrappunto · Bianco",
    aboutHtml: "KALMERA è uno studio di essenziali in Inghilterra che crea i <span class=\"accent\">meno capi, i migliori</span> — tessuto progettato, vestibilità ossessiva, niente sprecato. Fatti per essere indossati per anni, non per stagioni.",
    aboutJury: "( fondato nel 2025 · benvenuto in una nuova era ✺ )",
    tl: [
      { d: "T4 2025", h: "Nasce KALMERA Apparel", p: "Un tavolo, una sola idea — creare i migliori essenziali, il minor numero possibile, e nient'altro." },
      { d: "T1 2026", h: "Sviluppo del tessuto", p: "Campionatura di felpa pesante da 500 g/m² finché KARBON e KLOUD non tengono forma e mano." },
      { d: "T2 2026", h: "Identità e studio", p: "L'identità KALMERA prende forma — il marchio, il carattere, la filosofia del non sprecare nulla." },
      { d: "Ora", h: "Drop 01 — aperto", p: "KARBON e KLOUD sono qui, ognuno in felpa, t-shirt e pantalone. Realizzati su ordinazione, spediti in tutto il mondo. Nessun riassortimento." },
      { d: "2027", h: "Drop 02 — all'orizzonte", p: "Il prossimo capitolo, ancora da venire. La lista lo saprà per prima." }
    ],
    faq: [
      { q: "Quanto tempo richiede il mio ordine?", a: "Ogni capo è <strong>realizzato su ordinazione</strong> — stampato a mano dopo l'acquisto, così nulla va sprecato. La produzione richiede qualche giorno, poi la spedizione. <strong>La spedizione standard è gratuita e richiede circa 30 giorni in tutto il mondo; l'Express (~10 giorni) è disponibile al pagamento.</strong> Riceverai un codice di tracciamento alla spedizione." },
      { q: "Perché su ordinazione?", a: "Perché è il modo KALMERA — <strong>i meno capi, i migliori, niente sprecato.</strong> Produrre ogni capo solo quando viene ordinato significa nessuna sovrapproduzione, nessuna discarica, nessuna rimanenza. Il compromesso è una breve attesa; il vantaggio è un capo fatto per te." },
      { q: "Quale taglia scegliere?", a: "I capi hanno un taglio <strong>oversize / squadrato</strong> per scelta. Per un vero effetto oversize prendi la tua taglia abituale; se preferisci più aderente, scendi di una taglia. Una guida taglie completa è su ogni prodotto." },
      { q: "Spedite in tutto il mondo?", a: "<strong>Sì — in tutto il mondo.</strong> La spedizione standard è gratuita ovunque. I tempi variano leggermente per paese; vedrai la stima e un codice di tracciamento dopo l'ordine." },
      { q: "Resi e cambi", a: "Poiché ogni capo è <strong>realizzato su ordinazione</strong>, non accettiamo resi per ripensamento. Ma se il capo arriva <strong>difettoso, danneggiato o è l'articolo/taglia sbagliato</strong>, scrivici entro 7 giorni a <strong>kalmera.team@gmail.com</strong> con una foto e sistemeremo tutto." },
      { q: "Come posso contattarvi?", a: "Scrivi a <strong>kalmera.team@gmail.com</strong> per qualsiasi cosa — ordini, taglie o solo per un saluto. Leggiamo ogni messaggio." }
    ],
    contactLead: "Vestiamo la nuova era", joinList: "iscriviti alla lista", watchYt: "guarda su youtube ↗",
    footerMid: "©—2026 · Benvenuto in una nuova era", footerRight: "Progettato in Inghilterra ✺",
    close: "Chiudi", productImage: "Immagine prodotto", sizeGuide: "Guida taglie",
    deliveryNote: "Realizzato su ordinazione · Spedizione standard gratuita (~30 giorni) o Express (~10 giorni) al pagamento.",
    addToBasket: "aggiungi al carrello →", availNow: "Disponibile ora · realizzato su ordinazione",
    yourBasket: "Il tuo carrello", basketEmpty: "Il tuo carrello è vuoto.",
    delivery: "Spedizione", standard: "Standard", express: "Express",
    stdTime: "Su ordinazione · ~30 giorni", expTime: "Su ordinazione · ~10 giorni",
    free: "Gratis", freeStandard: "Gratis · Standard",
    subtotal: "Subtotale", shipping: "Spedizione", total: "Totale", pay: "Paga", remove: "Rimuovi",
    cardSlot: "Nome, indirizzo e carta vengono inseriti in modo sicuro nel passaggio successivo, gestito da Stripe. KALMERA non vede mai i dati della tua carta.",
    coNote: "Realizzato su ordinazione — stampato a mano dopo l'ordine e spedito in tutto il mondo. Considera il tempo di produzione.",
    coSecure: "🔒 Pagamenti protetti da Stripe · KALMERA non vede mai i dati della tua carta",
    payLoading: "Ti portiamo al pagamento sicuro…",
    payError: "Spiacenti — qualcosa è andato storto all'avvio del pagamento. Riprova o scrivi a kalmera.team@gmail.com."
  },
  sp: { colour: "Colore", weight: "Peso", fabric: "Tessuto", fit: "Vestibilità", mark: "Marchio", sizes: "Taglie", made: "Produzione", price: "Prezzo", availability: "Disponibilità" },
  v: {
    black: "Nero", white: "Bianco",
    fleece: "Felpa pesante", cotton: "Cotone pesante", heavy: "Peso elevato",
    oversized: "Oversize", boxy: "Oversize squadrato", straight: "Gamba dritta",
    centreChest: "Centro petto", leftChest: "Petto sinistro", vertLeg: "Verticale, gamba bassa",
    toOrder: "Su ordinazione · spedizione mondiale", freeShip: "spedizione gratuita", availableNow: "Disponibile ora"
  },
  g: {
    hoodie: {
      name: "Felpa con cappuccio", gal: ["Fronte", "Retro", "Dettaglio", "Cappuccio"],
      desc: ["L'ancora del drop. Costruita su una felpa pesante da 500 g/m² — densa, strutturata e sostanziosa al tatto. Fatta per mantenere la forma e durare anni, non stagioni.",
             "Vestibilità oversize, interno spazzolato morbido, esterno pulito e curato. Il marchio KALMERA è centrato sul petto, stampato su ordinazione. Spedizione mondiale — niente sprecato."]
    },
    tee: {
      name: "T-shirt", gal: ["Fronte", "Retro", "Dettaglio", "Collo"],
      desc: ["La metà quotidiana. Una t-shirt squadrata e oversize da veri 400 g/m² — pesante per una t-shirt, con struttura reale e una bella caduta.",
             "Un piccolo marchio KALMERA sul petto sinistro, stampato su ordinazione. Spedizione mondiale. Fatta per cadere bene e durare."]
    },
    sweatpants: {
      name: "Pantaloni della tuta", gal: ["Fronte", "Retro", "Dettaglio", "Vita"],
      desc: ["L'abbinamento alla felpa. Pantaloni pesanti da 420 g/m² con taglio a gamba dritta — un po' più leggeri della felpa, per scelta, così si muovono.",
             "Il marchio KALMERA scende in verticale lungo la gamba, stampato su ordinazione. Spedizione mondiale. Il completo, dalla testa ai piedi."]
    }
  },
  sg: {
    hoodie: { cols: ["Taglia", "Petto (cm)", "Lunghezza (cm)", "Manica (cm)"], note: "Vestibilità oversize. Misure del capo steso. Valori provvisori — da confermare con Tapstitch RW0035." },
    tee: { cols: ["Taglia", "Petto (cm)", "Lunghezza (cm)"], note: "Vestibilità oversize squadrata. Misure del capo steso. Valori provvisori — da confermare con Tapstitch RT0080." },
    sweatpants: { cols: ["Taglia", "Vita (cm)", "Cavallo (cm)", "Lunghezza (cm)"], note: "Taglio a gamba dritta. Misure del capo steso. Valori provvisori — da confermare con Tapstitch RK0009." }
  }
};

/* ---------------------------------------------------------- PORTUGUÊS */
LANGS.pt = {
  ui: {
    navReleases: "Lançamentos", navTimeline: "Cronologia", navFaq: "FAQ", navContact: "Contacto",
    basket: "Cesto", ambientOff: "Ambiente desligado", ambientOn: "Ambiente ligado",
    heroTop: "A criar uma nova era de essenciais", heroEst: "INGLATERRA · desde 2025",
    heroRole: "Duas peças, criadas com atenção obsessiva. Nada desperdiçado, tudo intencional.",
    scroll: "DESLIZAR",
    secReleases: "Lançamentos", secTimeline: "A cronologia", secFaq: "Perguntas",
    cntYears: "2025 — 2027", cntGoodToKnow: "Bom saber",
    drop01: "Drop 01", drop01meta: "02 Linhas · Disponível agora",
    drop02: "Drop 02", drop02meta: "Chega em 2027",
    dropEmpty: "No estúdio — ainda nada em cima da mesa. Junta-te à lista para saberes primeiro.",
    karbonMeta: "A Âncora · Preto", kloudMeta: "O Contraponto · Branco",
    aboutHtml: "A KALMERA é um estúdio de essenciais em Inglaterra que cria as <span class=\"accent\">menos peças, as melhores</span> — tecido projetado, corte obsessivo, nada desperdiçado. Feitas para durar anos, não estações.",
    aboutJury: "( fundado em 2025 · bem-vindo a uma nova era ✺ )",
    tl: [
      { d: "T4 2025", h: "KALMERA Apparel é fundada", p: "Uma mesa, uma única ideia — criar os melhores essenciais, o menor número possível, e nada mais." },
      { d: "T1 2026", h: "Desenvolvimento do tecido", p: "Amostragem de lã polar pesada de 500 g/m² até KARBON e KLOUD manterem a forma e o toque." },
      { d: "T2 2026", h: "Identidade e estúdio", p: "A identidade KALMERA ganha forma — a marca, a tipografia, a filosofia de não desperdiçar nada." },
      { d: "Agora", h: "Drop 01 — aberto", p: "KARBON e KLOUD já chegaram, cada um em hoodie, t-shirt e calças. Feitos por encomenda, enviados para todo o mundo. Sem reposição." },
      { d: "2027", h: "Drop 02 — no horizonte", p: "O próximo capítulo, ainda por vir. A lista sabe primeiro." }
    ],
    faq: [
      { q: "Quanto tempo demora a minha encomenda?", a: "Cada peça é <strong>feita por encomenda</strong> — impressa à mão após a compra, para nada ser desperdiçado. A produção demora alguns dias, depois o envio. <strong>O envio padrão é gratuito e demora cerca de 30 dias em todo o mundo; o Expresso (~10 dias) está disponível no pagamento.</strong> Receberás um código de rastreio assim que for enviado." },
      { q: "Porquê feito por encomenda?", a: "Porque é a forma KALMERA — <strong>as menos peças, as melhores, nada desperdiçado.</strong> Produzir cada peça apenas quando é encomendada significa sem excesso de produção, sem aterro, sem stock parado. O custo é uma curta espera; a vantagem é uma peça feita para ti." },
      { q: "Que tamanho devo escolher?", a: "As peças têm corte <strong>oversize / direito</strong> por opção. Para um verdadeiro efeito oversize escolhe o teu tamanho habitual; se preferires mais justo, desce um tamanho. Há um guia de tamanhos completo em cada produto." },
      { q: "Enviam para todo o mundo?", a: "<strong>Sim — para todo o mundo.</strong> O envio padrão é gratuito em qualquer lado. Os prazos variam um pouco por país; verás a estimativa e um código de rastreio após a encomenda." },
      { q: "Devoluções e trocas", a: "Como cada peça é <strong>feita por encomenda</strong>, não aceitamos devoluções por mudança de ideias. Mas se o artigo chegar <strong>com defeito, danificado ou for o artigo/tamanho errado</strong>, escreve-nos em 7 dias para <strong>kalmera.team@gmail.com</strong> com uma foto e resolvemos." },
      { q: "Como vos contacto?", a: "Escreve para <strong>kalmera.team@gmail.com</strong> para o que precisares — encomendas, tamanhos ou só para dizer olá. Lemos todas as mensagens." }
    ],
    contactLead: "Vamos vestir a nova era", joinList: "juntar-me à lista", watchYt: "ver no youtube ↗",
    footerMid: "©—2026 · Bem-vindo a uma nova era", footerRight: "Desenhado em Inglaterra ✺",
    close: "Fechar", productImage: "Imagem do produto", sizeGuide: "Guia de tamanhos",
    deliveryNote: "Feito por encomenda · Envio padrão gratuito (~30 dias) ou Expresso (~10 dias) no pagamento.",
    addToBasket: "adicionar ao cesto →", availNow: "Disponível agora · feito por encomenda",
    yourBasket: "O teu cesto", basketEmpty: "O teu cesto está vazio.",
    delivery: "Envio", standard: "Padrão", express: "Expresso",
    stdTime: "Por encomenda · ~30 dias", expTime: "Por encomenda · ~10 dias",
    free: "Grátis", freeStandard: "Grátis · Padrão",
    subtotal: "Subtotal", shipping: "Envio", total: "Total", pay: "Pagar", remove: "Remover",
    cardSlot: "O teu nome, morada e cartão são introduzidos em segurança no passo seguinte, tratado pela Stripe. A KALMERA nunca vê os dados do teu cartão.",
    coNote: "Feito por encomenda — impresso à mão após a tua encomenda e enviado para todo o mundo. Conta com o tempo de produção.",
    coSecure: "🔒 Pagamentos protegidos pela Stripe · A KALMERA nunca vê os dados do teu cartão",
    payLoading: "A levar-te para o pagamento seguro…",
    payError: "Lamentamos — algo correu mal ao iniciar o pagamento. Tenta de novo ou escreve para kalmera.team@gmail.com."
  },
  sp: { colour: "Cor", weight: "Peso", fabric: "Tecido", fit: "Corte", mark: "Marca", sizes: "Tamanhos", made: "Produção", price: "Preço", availability: "Disponibilidade" },
  v: {
    black: "Preto", white: "Branco",
    fleece: "Lã polar pesada", cotton: "Algodão pesado", heavy: "Peso pesado",
    oversized: "Oversize", boxy: "Oversize direito", straight: "Perna direita",
    centreChest: "Centro do peito", leftChest: "Peito esquerdo", vertLeg: "Vertical, perna baixa",
    toOrder: "Por encomenda · envio mundial", freeShip: "envio gratuito", availableNow: "Disponível agora"
  },
  g: {
    hoodie: {
      name: "Hoodie", gal: ["Frente", "Costas", "Detalhe", "Capuz"],
      desc: ["A âncora do drop. Construída sobre lã polar pesada de 500 g/m² — densa, estruturada e substancial na mão. Feita para manter a forma e durar anos, não estações.",
             "Corte oversize, interior escovado macio, exterior limpo e pensado. A marca KALMERA fica centrada no peito, impressa por encomenda. Envio mundial — nada desperdiçado."]
    },
    tee: {
      name: "T-shirt", gal: ["Frente", "Costas", "Detalhe", "Gola"],
      desc: ["A metade do dia a dia. Uma t-shirt direita e oversize com verdadeiros 400 g/m² — pesada para uma t-shirt, com estrutura real e bom caimento.",
             "Uma pequena marca KALMERA no peito esquerdo, impressa por encomenda. Envio mundial. Feita para assentar bem e durar."]
    },
    sweatpants: {
      name: "Calças de treino", gal: ["Frente", "Costas", "Detalhe", "Cintura"],
      desc: ["O par para a hoodie. Calças pesadas de 420 g/m² com corte de perna direita — um pouco mais leves que a hoodie, por opção, para acompanhar o movimento.",
             "A marca KALMERA desce na vertical pela perna, impressa por encomenda. Envio mundial. O conjunto completo, da cabeça aos pés."]
    }
  },
  sg: {
    hoodie: { cols: ["Tamanho", "Peito (cm)", "Comprimento (cm)", "Manga (cm)"], note: "Corte oversize. Medidas da peça esticada. Valores provisórios — confirmar com Tapstitch RW0035." },
    tee: { cols: ["Tamanho", "Peito (cm)", "Comprimento (cm)"], note: "Corte oversize direito. Medidas da peça esticada. Valores provisórios — confirmar com Tapstitch RT0080." },
    sweatpants: { cols: ["Tamanho", "Cintura (cm)", "Entrepernas (cm)", "Comprimento (cm)"], note: "Corte de perna direita. Medidas da peça esticada. Valores provisórios — confirmar com Tapstitch RK0009." }
  }
};
/* ---------------------------------------------------------- 日本語 */
LANGS.ja = {
  ui: {
    navReleases: "リリース", navTimeline: "タイムライン", navFaq: "よくある質問", navContact: "お問い合わせ",
    basket: "カート", ambientOff: "アンビエント オフ", ambientOn: "アンビエント オン",
    heroTop: "エッセンシャルの新時代をつくる", heroEst: "イングランド · 2025年創業",
    heroRole: "二着の服を、執拗なまでのこだわりで。無駄はなく、すべてに意図がある。",
    scroll: "スクロール",
    secReleases: "リリース", secTimeline: "タイムライン", secFaq: "よくある質問",
    cntYears: "2025 — 2027", cntGoodToKnow: "知っておきたいこと",
    drop01: "ドロップ 01", drop01meta: "02 ライン · 販売中",
    drop02: "ドロップ 02", drop02meta: "2027年予定",
    dropEmpty: "制作中 — まだ何も出ていません。リストに登録すると最初にお知らせします。",
    karbonMeta: "アンカー · ブラック", kloudMeta: "カウンターポイント · ホワイト",
    aboutHtml: "KALMERA はイングランドのエッセンシャル・スタジオ。<span class=\"accent\">最少で最高の</span>一着だけをつくります — 設計された生地、執拗なフィット、無駄のなさ。シーズンではなく、何年も着るために。",
    aboutJury: "( 2025年創業 · 新しい時代へようこそ ✺ )",
    tl: [
      { d: "2025年 第4四半期", h: "KALMERA Apparel 創業", p: "一つの机と、一つの考え — 最少で最高のエッセンシャルだけをつくる。" },
      { d: "2026年 第1四半期", h: "生地の開発", p: "KARBON と KLOUD が形と風合いを保つまで、500 g/m² のヘビーウェイト・フリースを試作。" },
      { d: "2026年 第2四半期", h: "アイデンティティとスタジオ", p: "KALMERA のアイデンティティが形になる — マーク、書体、そして無駄をつくらない哲学。" },
      { d: "販売中", h: "ドロップ 01 — 公開", p: "KARBON と KLOUD が登場。それぞれフーディー、Tシャツ、スウェットパンツ。受注生産で世界中へ発送します。再入荷はありません。" },
      { d: "2027年", h: "ドロップ 02 — 地平線の先", p: "次の章はこれから。リストの方が最初に知ります。" }
    ],
    faq: [
      { q: "注文からどのくらいかかりますか？", a: "すべての商品は<strong>受注生産</strong>です — ご購入後に一枚ずつ手作業でプリントするため、無駄が出ません。製作に数日、その後発送となります。<strong>通常配送は無料で、世界中どこでも約30日。速達（約10日）はお会計時に選べます。</strong>発送時に追跡番号をお送りします。" },
      { q: "なぜ受注生産なのですか？", a: "それが KALMERA のやり方だからです — <strong>最少で最高の一着、無駄はゼロ。</strong>注文を受けてから作ることで、過剰生産も廃棄も在庫過多もありません。少し待つ代わりに、あなたのための一着が届きます。" },
      { q: "サイズはどう選べばいいですか？", a: "デザイン上、<strong>オーバーサイズ／ボクシー</strong>な作りです。しっかりオーバーサイズに着たい方は普段のサイズを、すっきり着たい方はワンサイズ下をお選びください。各商品に詳しいサイズガイドがあります。" },
      { q: "海外にも発送していますか？", a: "<strong>はい — 世界中に発送します。</strong>通常配送はどこでも無料です。お届け日数は国により多少異なります。ご注文後に目安と追跡番号をご確認いただけます。" },
      { q: "返品・交換について", a: "すべて<strong>受注生産</strong>のため、お客様都合による返品はお受けできません。ただし<strong>不良品、破損、商品やサイズの誤り</strong>があった場合は、7日以内に写真を添えて <strong>kalmera.team@gmail.com</strong> までご連絡ください。必ず対応いたします。" },
      { q: "問い合わせ方法は？", a: "ご注文、サイズのご相談、ご挨拶まで、何でも <strong>kalmera.team@gmail.com</strong> へどうぞ。すべてのメッセージに目を通しています。" }
    ],
    contactLead: "新しい時代を着る", joinList: "リストに登録する", watchYt: "youtube で見る ↗",
    footerMid: "©—2026 · 新しい時代へようこそ", footerRight: "イングランドでデザイン ✺",
    close: "閉じる", productImage: "商品画像", sizeGuide: "サイズガイド",
    deliveryNote: "受注生産 · 通常配送無料（約30日）または速達（約10日）をお会計時に選択。",
    addToBasket: "カートに追加 →", availNow: "販売中 · 受注生産",
    yourBasket: "カート", basketEmpty: "カートは空です。",
    delivery: "配送", standard: "通常", express: "速達",
    stdTime: "受注生産 · 約30日", expTime: "受注生産 · 約10日",
    free: "無料", freeStandard: "無料 · 通常配送",
    subtotal: "小計", shipping: "配送", total: "合計", pay: "支払う", remove: "削除",
    cardSlot: "お名前・ご住所・カード情報は次のステップで Stripe が安全に取得します。KALMERA がカード情報を見ることはありません。",
    coNote: "受注生産 — ご注文後に手作業でプリントし、世界中へ発送します。製作期間を見込んでご注文ください。",
    coSecure: "🔒 決済は Stripe が保護 · KALMERA がカード情報を見ることはありません",
    payLoading: "安全な決済ページへ移動しています…",
    payError: "申し訳ありません — 決済の開始で問題が発生しました。もう一度お試しいただくか、kalmera.team@gmail.com までご連絡ください。"
  },
  sp: { colour: "カラー", weight: "重量", fabric: "生地", fit: "フィット", mark: "マーク", sizes: "サイズ", made: "生産", price: "価格", availability: "在庫状況" },
  v: {
    black: "ブラック", white: "ホワイト",
    fleece: "ヘビーウェイト・フリース", cotton: "ヘビーウェイト・コットン", heavy: "ヘビーウェイト",
    oversized: "オーバーサイズ", boxy: "ボクシー・オーバーサイズ", straight: "ストレートレッグ",
    centreChest: "胸中央", leftChest: "左胸", vertLeg: "裾に縦方向",
    toOrder: "受注生産 · 世界中へ発送", freeShip: "送料無料", availableNow: "販売中"
  },
  g: {
    hoodie: {
      name: "フーディー", gal: ["フロント", "バック", "ディテール", "フード"],
      desc: ["ドロップの軸。500 g/m² のヘビーウェイト・フリースを使用 — 密度があり、構築的で、手に取ると確かな重み。シーズンではなく何年も着られるよう、形が崩れないように作られています。",
             "オーバーサイズのシルエット、起毛した柔らかな裏地、そぎ落とされた表側。KALMERA のマークは胸の中央に、受注後にプリント。世界中へ発送します — 無駄はありません。"]
    },
    tee: {
      name: "Tシャツ", gal: ["フロント", "バック", "ディテール", "襟"],
      desc: ["日常のための一枚。ボクシーでオーバーサイズ、正真正銘 400 g/m² — Tシャツとしては重量級で、しっかりとした構築感ときれいなドレープ。",
             "左胸に小さな KALMERA のマークを受注後にプリント。世界中へ発送。きれいに落ち、長く着られるように作られています。"]
    },
    sweatpants: {
      name: "スウェットパンツ", gal: ["フロント", "バック", "ディテール", "ウエスト"],
      desc: ["フーディーと合わせる一本。420 g/m² のヘビーウェイト、ストレートレッグ — 動きやすさのため、フーディーより少しだけ軽く設計。",
             "KALMERA のマークは裾に縦方向、受注後にプリント。世界中へ発送。頭から足元まで揃うセットアップです。"]
    }
  },
  sg: {
    hoodie: { cols: ["サイズ", "身幅 (cm)", "着丈 (cm)", "袖丈 (cm)"], note: "オーバーサイズ。平置きでの実寸です。暫定値 — Tapstitch RW0035 で要確認。" },
    tee: { cols: ["サイズ", "身幅 (cm)", "着丈 (cm)"], note: "ボクシー・オーバーサイズ。平置きでの実寸です。暫定値 — Tapstitch RT0080 で要確認。" },
    sweatpants: { cols: ["サイズ", "ウエスト (cm)", "股下 (cm)", "総丈 (cm)"], note: "ストレートレッグ。平置きでの実寸です。暫定値 — Tapstitch RK0009 で要確認。" }
  }
};

/* ---------------------------------------------------------- 한국어 */
LANGS.ko = {
  ui: {
    navReleases: "릴리스", navTimeline: "타임라인", navFaq: "자주 묻는 질문", navContact: "문의",
    basket: "장바구니", ambientOff: "앰비언트 꺼짐", ambientOn: "앰비언트 켜짐",
    heroTop: "에센셜의 새로운 시대를 만듭니다", heroEst: "잉글랜드 · 2025년 설립",
    heroRole: "단 두 벌, 집요한 주의로 설계했습니다. 낭비는 없고, 모든 것이 의도적입니다.",
    scroll: "스크롤",
    secReleases: "릴리스", secTimeline: "타임라인", secFaq: "질문",
    cntYears: "2025 — 2027", cntGoodToKnow: "알아두면 좋은 것",
    drop01: "드롭 01", drop01meta: "02 라인 · 지금 구매 가능",
    drop02: "드롭 02", drop02meta: "2027년 예정",
    dropEmpty: "작업 중 — 아직 공개된 것이 없습니다. 리스트에 등록하면 가장 먼저 알려드립니다.",
    karbonMeta: "앵커 · 블랙", kloudMeta: "카운터포인트 · 화이트",
    aboutHtml: "KALMERA는 잉글랜드의 에센셜 스튜디오로, <span class=\"accent\">가장 적고 가장 좋은</span> 옷만 만듭니다 — 설계된 원단, 집요한 핏, 낭비 없는 제작. 한 시즌이 아니라 몇 년을 입기 위해.",
    aboutJury: "( 2025년 설립 · 새로운 시대에 오신 것을 환영합니다 ✺ )",
    tl: [
      { d: "2025년 4분기", h: "KALMERA Apparel 설립", p: "책상 하나, 생각 하나 — 가장 적고 가장 좋은 에센셜만 만든다." },
      { d: "2026년 1분기", h: "원단 개발", p: "KARBON과 KLOUD가 형태와 감촉을 유지할 때까지 500 g/m² 헤비웨이트 플리스를 샘플링." },
      { d: "2026년 2분기", h: "아이덴티티 & 스튜디오", p: "KALMERA의 아이덴티티가 형태를 갖춥니다 — 마크, 서체, 그리고 낭비하지 않는 철학." },
      { d: "판매 중", h: "드롭 01 — 오픈", p: "KARBON과 KLOUD가 나왔습니다. 각각 후디, 티셔츠, 스웨트팬츠. 주문 제작으로 전 세계 배송합니다. 재입고는 없습니다." },
      { d: "2027년", h: "드롭 02 — 다음 지평", p: "다음 챕터는 아직 앞에 있습니다. 리스트가 가장 먼저 듣습니다." }
    ],
    faq: [
      { q: "주문하면 얼마나 걸리나요?", a: "모든 제품은 <strong>주문 제작</strong>입니다 — 구매 후 한 장씩 손으로 프린트하여 낭비가 없습니다. 제작에 며칠, 이후 배송이 진행됩니다. <strong>기본 배송은 무료이며 전 세계 약 30일이 걸립니다. 특급(약 10일)은 결제 시 선택할 수 있습니다.</strong> 발송되면 추적 번호를 보내드립니다." },
      { q: "왜 주문 제작인가요?", a: "그것이 KALMERA의 방식이기 때문입니다 — <strong>가장 적고 가장 좋은 옷, 낭비는 없이.</strong> 주문이 들어온 뒤에만 만들면 과잉 생산도, 폐기도, 재고도 없습니다. 짧은 기다림을 대신해 당신을 위해 만든 한 벌을 받게 됩니다." },
      { q: "어떤 사이즈를 골라야 하나요?", a: "디자인상 <strong>오버사이즈 / 박시</strong>하게 재단되었습니다. 확실한 오버사이즈 핏을 원하면 평소 사이즈를, 조금 더 붙는 핏을 원하면 한 사이즈 작게 선택하세요. 각 제품에 상세 사이즈 가이드가 있습니다." },
      { q: "해외 배송도 하나요?", a: "<strong>네 — 전 세계로 배송합니다.</strong> 기본 배송은 어디든 무료입니다. 배송 기간은 국가에 따라 조금씩 다르며, 주문 후 예상 기간과 추적 번호를 확인하실 수 있습니다." },
      { q: "반품 및 교환", a: "모든 제품이 <strong>주문 제작</strong>이므로 단순 변심에 의한 반품은 어렵습니다. 다만 <strong>불량, 파손, 잘못된 제품이나 사이즈</strong>가 도착한 경우 7일 이내에 사진과 함께 <strong>kalmera.team@gmail.com</strong>으로 연락 주시면 바로 해결해 드립니다." },
      { q: "어떻게 연락하나요?", a: "주문, 사이즈 문의, 혹은 그냥 인사까지 무엇이든 <strong>kalmera.team@gmail.com</strong>으로 보내주세요. 모든 메시지를 읽고 있습니다." }
    ],
    contactLead: "새로운 시대를 입다", joinList: "리스트에 등록하기", watchYt: "youtube에서 보기 ↗",
    footerMid: "©—2026 · 새로운 시대에 오신 것을 환영합니다", footerRight: "잉글랜드에서 디자인 ✺",
    close: "닫기", productImage: "제품 이미지", sizeGuide: "사이즈 가이드",
    deliveryNote: "주문 제작 · 기본 배송 무료(약 30일) 또는 특급(약 10일)을 결제 시 선택.",
    addToBasket: "장바구니에 담기 →", availNow: "지금 구매 가능 · 주문 제작",
    yourBasket: "장바구니", basketEmpty: "장바구니가 비어 있습니다.",
    delivery: "배송", standard: "기본", express: "특급",
    stdTime: "주문 제작 · 약 30일", expTime: "주문 제작 · 약 10일",
    free: "무료", freeStandard: "무료 · 기본 배송",
    subtotal: "소계", shipping: "배송", total: "합계", pay: "결제", remove: "삭제",
    cardSlot: "이름, 주소, 카드 정보는 다음 단계에서 Stripe가 안전하게 처리합니다. KALMERA는 카드 정보를 절대 보지 않습니다.",
    coNote: "주문 제작 — 주문 후 손으로 프린트하여 전 세계로 배송합니다. 제작 기간을 감안해 주세요.",
    coSecure: "🔒 결제는 Stripe가 보호 · KALMERA는 카드 정보를 보지 않습니다",
    payLoading: "안전한 결제 페이지로 이동 중…",
    payError: "죄송합니다 — 결제를 시작하는 중 문제가 발생했습니다. 다시 시도하시거나 kalmera.team@gmail.com으로 연락해 주세요."
  },
  sp: { colour: "색상", weight: "중량", fabric: "원단", fit: "핏", mark: "마크", sizes: "사이즈", made: "제작", price: "가격", availability: "판매 상태" },
  v: {
    black: "블랙", white: "화이트",
    fleece: "헤비웨이트 플리스", cotton: "헤비웨이트 코튼", heavy: "헤비웨이트",
    oversized: "오버사이즈", boxy: "박시 오버사이즈", straight: "스트레이트 레그",
    centreChest: "가슴 중앙", leftChest: "왼쪽 가슴", vertLeg: "밑단 세로 방향",
    toOrder: "주문 제작 · 전 세계 배송", freeShip: "무료 배송", availableNow: "지금 구매 가능"
  },
  g: {
    hoodie: {
      name: "후디", gal: ["앞면", "뒷면", "디테일", "후드"],
      desc: ["드롭의 중심. 500 g/m² 헤비웨이트 플리스로 제작 — 밀도 있고 구조적이며 손에 잡히는 무게감이 있습니다. 한 시즌이 아니라 몇 년을 입도록 형태가 유지되게 만들었습니다.",
             "오버사이즈 핏, 부드럽게 기모 처리된 안감, 군더더기 없는 겉면. KALMERA 마크는 가슴 중앙에 주문 후 프린트됩니다. 전 세계 배송 — 낭비는 없습니다."]
    },
    tee: {
      name: "티셔츠", gal: ["앞면", "뒷면", "디테일", "넥라인"],
      desc: ["일상을 위한 한 장. 박시한 오버사이즈 실루엣에 진짜 400 g/m² — 티셔츠로는 묵직하며, 확실한 구조감과 깔끔한 드레이프를 냅니다.",
             "왼쪽 가슴에 작은 KALMERA 마크를 주문 후 프린트합니다. 전 세계 배송. 잘 떨어지고 오래 가도록 만들었습니다."]
    },
    sweatpants: {
      name: "스웨트팬츠", gal: ["앞면", "뒷면", "디테일", "허리"],
      desc: ["후디와 짝을 이루는 한 벌. 420 g/m² 헤비웨이트 스트레이트 레그 — 움직임을 위해 후디보다 살짝 가볍게 설계했습니다.",
             "KALMERA 마크가 밑단을 따라 세로로 들어가며, 주문 후 프린트됩니다. 전 세계 배송. 머리부터 발끝까지 완성되는 셋업입니다."]
    }
  },
  sg: {
    hoodie: { cols: ["사이즈", "가슴단면 (cm)", "총장 (cm)", "소매 (cm)"], note: "오버사이즈 핏. 평면 실측 기준입니다. 임시 수치 — Tapstitch RW0035로 확인 필요." },
    tee: { cols: ["사이즈", "가슴단면 (cm)", "총장 (cm)"], note: "박시 오버사이즈 핏. 평면 실측 기준입니다. 임시 수치 — Tapstitch RT0080으로 확인 필요." },
    sweatpants: { cols: ["사이즈", "허리 (cm)", "인심 (cm)", "총장 (cm)"], note: "스트레이트 레그. 평면 실측 기준입니다. 임시 수치 — Tapstitch RK0009로 확인 필요." }
  }
};

/* ---------------------------------------------------------- العربية */
LANGS.ar = {
  ui: {
    navReleases: "الإصدارات", navTimeline: "الجدول الزمني", navFaq: "الأسئلة الشائعة", navContact: "تواصل معنا",
    basket: "السلة", ambientOff: "الصوت المحيط مغلق", ambientOn: "الصوت المحيط مفعّل",
    heroTop: "نصنع عصراً جديداً للقطع الأساسية", heroEst: "إنجلترا · تأسست 2025",
    heroRole: "قطعتان، صُمّمتا بعناية لا تهدأ. لا شيء يُهدر، وكل تفصيل مقصود.",
    scroll: "مرّر",
    secReleases: "الإصدارات", secTimeline: "الجدول الزمني", secFaq: "أسئلة",
    cntYears: "2025 — 2027", cntGoodToKnow: "معلومات مفيدة",
    drop01: "الإصدار 01", drop01meta: "خطّان · متوفّر الآن",
    drop02: "الإصدار 02", drop02meta: "قادم في 2027",
    dropEmpty: "قيد العمل — لا شيء جاهز بعد. انضم إلى القائمة لتكون أول من يعرف.",
    karbonMeta: "المرساة · أسود", kloudMeta: "النقيض · أبيض",
    aboutHtml: "‏KALMERA استوديو للقطع الأساسية في إنجلترا، يصنع <span class=\"accent\">أقل القطع وأفضلها</span> — قماش مدروس، قَصّة دقيقة، ولا شيء يُهدر. مصنوعة لتُلبس سنوات، لا مواسم.",
    aboutJury: "( تأسست 2025 · أهلاً بك في عصر جديد ✺ )",
    tl: [
      { d: "الربع الرابع 2025", h: "تأسيس KALMERA Apparel", p: "طاولة واحدة وفكرة واحدة — أن نصنع أقل القطع الأساسية وأفضلها، ولا شيء غير ذلك." },
      { d: "الربع الأول 2026", h: "تطوير القماش", p: "تجريب قماش الفليس الثقيل 500 غم/م² حتى يحافظ KARBON و KLOUD على شكلهما وملمسهما." },
      { d: "الربع الثاني 2026", h: "الهوية والاستوديو", p: "تتشكّل هوية KALMERA — العلامة، والخط، وفلسفة ألّا يُهدر شيء." },
      { d: "متوفّر الآن", h: "الإصدار 01 — مفتوح", p: "‏KARBON و KLOUD متوفّران الآن، كلٌ منهما بهودي وتي شيرت وبنطال. يُصنعان عند الطلب ويُشحنان حول العالم. لا إعادة تصنيع." },
      { d: "2027", h: "الإصدار 02 — في الأفق", p: "الفصل التالي، لم يأتِ بعد. القائمة تعرف أولاً." }
    ],
    faq: [
      { q: "كم تستغرق طلبيتي؟", a: "كل قطعة <strong>تُصنع عند الطلب</strong> — تُطبع يدوياً بعد شرائك، حتى لا يُهدر شيء. يستغرق التصنيع بضعة أيام، ثم الشحن. <strong>الشحن العادي مجاني ويستغرق نحو 30 يوماً حول العالم، والشحن السريع (نحو 10 أيام) متاح عند الدفع.</strong> سيصلك رقم تتبّع فور الشحن." },
      { q: "لماذا التصنيع عند الطلب؟", a: "لأن هذه طريقة KALMERA — <strong>أقل القطع وأفضلها، ولا شيء يُهدر.</strong> صناعة القطعة عند طلبها فقط تعني بلا إنتاج زائد، ولا نفايات، ولا مخزون راكد. المقابل انتظار قصير، والمكسب قطعة صُنعت من أجلك." },
      { q: "أي مقاس أختار؟", a: "القطع مقصوصة <strong>واسعة / مربّعة</strong> بحكم التصميم. إن أردت مظهراً واسعاً حقيقياً فاختر مقاسك المعتاد، وإن فضّلت قَصّة أقرب للجسم فانزل مقاساً. يوجد دليل مقاسات كامل مع كل منتج." },
      { q: "هل تشحنون إلى جميع الدول؟", a: "<strong>نعم — إلى جميع أنحاء العالم.</strong> الشحن العادي مجاني في كل مكان. تختلف المدة قليلاً حسب الدولة، وسترى التقدير ورقم التتبّع بعد الطلب." },
      { q: "الإرجاع والاستبدال", a: "بما أن كل قطعة <strong>تُصنع عند الطلب</strong>، لا يمكننا قبول الإرجاع لتغيير الرأي. لكن إن وصلك المنتج <strong>معيباً أو تالفاً أو بمقاس أو صنف خاطئ</strong>، راسلنا خلال 7 أيام على <strong>kalmera.team@gmail.com</strong> مع صورة وسنصلح الأمر." },
      { q: "كيف أتواصل معكم؟", a: "راسلنا على <strong>kalmera.team@gmail.com</strong> لأي شيء — الطلبات أو المقاسات أو حتى مجرد التحية. نقرأ كل رسالة." }
    ],
    contactLead: "لنُلبِس العصر الجديد", joinList: "انضم إلى القائمة", watchYt: "شاهد على يوتيوب ↗",
    footerMid: "©—2026 · أهلاً بك في عصر جديد", footerRight: "صُمّم في إنجلترا ✺",
    close: "إغلاق", productImage: "صورة المنتج", sizeGuide: "دليل المقاسات",
    deliveryNote: "يُصنع عند الطلب · شحن عادي مجاني (نحو 30 يوماً) أو سريع (نحو 10 أيام) عند الدفع.",
    addToBasket: "أضف إلى السلة →", availNow: "متوفّر الآن · يُصنع عند الطلب",
    yourBasket: "سلتك", basketEmpty: "سلتك فارغة.",
    delivery: "الشحن", standard: "عادي", express: "سريع",
    stdTime: "يُصنع عند الطلب · نحو 30 يوماً", expTime: "يُصنع عند الطلب · نحو 10 أيام",
    free: "مجاني", freeStandard: "مجاني · عادي",
    subtotal: "المجموع الفرعي", shipping: "الشحن", total: "الإجمالي", pay: "ادفع", remove: "إزالة",
    cardSlot: "يتم إدخال اسمك وعنوانك وبطاقتك بأمان في الخطوة التالية عبر Stripe. لا ترى KALMERA بيانات بطاقتك أبداً.",
    coNote: "يُصنع عند الطلب — يُطبع يدوياً بعد طلبك ثم يُشحن حول العالم. يُرجى احتساب وقت التصنيع.",
    coSecure: "🔒 المدفوعات محمية عبر Stripe · لا ترى KALMERA بيانات بطاقتك",
    payLoading: "جارٍ نقلك إلى صفحة الدفع الآمنة…",
    payError: "نعتذر — حدث خطأ عند بدء الدفع. حاول مرة أخرى أو راسلنا على kalmera.team@gmail.com."
  },
  sp: { colour: "اللون", weight: "الوزن", fabric: "القماش", fit: "القَصّة", mark: "العلامة", sizes: "المقاسات", made: "التصنيع", price: "السعر", availability: "التوفّر" },
  v: {
    black: "أسود", white: "أبيض",
    fleece: "فليس ثقيل", cotton: "قطن ثقيل", heavy: "وزن ثقيل",
    oversized: "واسع", boxy: "واسع مربّع", straight: "ساق مستقيمة",
    centreChest: "وسط الصدر", leftChest: "الصدر الأيسر", vertLeg: "عمودي، أسفل الساق",
    toOrder: "عند الطلب · شحن عالمي", freeShip: "شحن مجاني", availableNow: "متوفّر الآن"
  },
  g: {
    hoodie: {
      name: "هودي", gal: ["الأمام", "الخلف", "تفصيل", "القلنسوة"],
      desc: ["مرساة الإصدار. مصنوع من فليس ثقيل بوزن 500 غم/م² — كثيف ومتماسك وله ثقل محسوس في اليد. صُمّم ليحافظ على شكله ويُلبس سنوات لا مواسم.",
             "قَصّة واسعة، وبطانة داخلية ناعمة، وسطح خارجي نظيف مدروس. علامة KALMERA في وسط الصدر، تُطبع عند الطلب. يُشحن حول العالم — ولا شيء يُهدر."]
    },
    tee: {
      name: "تي شيرت", gal: ["الأمام", "الخلف", "تفصيل", "الياقة"],
      desc: ["قطعة اليوم العادي. تي شيرت مربّع وواسع بوزن 400 غم/م² حقيقية — ثقيل بمقاييس التي شيرت، بتماسك واضح وانسدال أنيق.",
             "علامة KALMERA صغيرة على الصدر الأيسر، تُطبع عند الطلب. يُشحن حول العالم. صُنع ليقع بشكل صحيح ويدوم."]
    },
    sweatpants: {
      name: "بنطال رياضي", gal: ["الأمام", "الخلف", "تفصيل", "الخصر"],
      desc: ["رفيق الهودي. بنطال ثقيل بوزن 420 غم/م² بقَصّة ساق مستقيمة — أخفّ قليلاً من الهودي بشكل مقصود، ليمنحك حرية الحركة.",
             "تنزل علامة KALMERA عمودياً على أسفل الساق، وتُطبع عند الطلب. يُشحن حول العالم. الطقم كاملاً، من الرأس حتى القدم."]
    }
  },
  sg: {
    hoodie: { cols: ["المقاس", "الصدر (سم)", "الطول (سم)", "الكم (سم)"], note: "قَصّة واسعة. القياسات للقطعة مفرودة. قيم مبدئية — تُراجع مع Tapstitch RW0035." },
    tee: { cols: ["المقاس", "الصدر (سم)", "الطول (سم)"], note: "قَصّة واسعة مربّعة. القياسات للقطعة مفرودة. قيم مبدئية — تُراجع مع Tapstitch RT0080." },
    sweatpants: { cols: ["المقاس", "الخصر (سم)", "طول الساق الداخلي (سم)", "الطول (سم)"], note: "قَصّة ساق مستقيمة. القياسات للقطعة مفرودة. قيم مبدئية — تُراجع مع Tapstitch RK0009." }
  }
};
/* ---------------------------------------------------------- 简体中文 */
LANGS.zh = {
  ui: {
    navReleases: "系列", navTimeline: "时间线", navFaq: "常见问题", navContact: "联系我们",
    basket: "购物袋", ambientOff: "环境音已关", ambientOn: "环境音已开",
    heroTop: "开创基本款的新纪元", heroEst: "英格兰 · 成立于 2025",
    heroRole: "两条产品线，以近乎偏执的用心打造。没有浪费，一切都出于本意。",
    scroll: "向下滚动",
    secReleases: "系列", secTimeline: "时间线", secFaq: "常见问题",
    cntYears: "2025 — 2027", cntGoodToKnow: "值得了解",
    drop01: "Drop 01", drop01meta: "02 产品线 · 现已发售",
    drop02: "Drop 02", drop02meta: "2027 年推出",
    dropEmpty: "仍在工作室中 — 目前还没有可展示的内容。加入名单，第一时间得知。",
    karbonMeta: "锚点 · 黑色", kloudMeta: "对位 · 白色",
    aboutHtml: "KALMERA 是一间位于英格兰的基本款工作室，只做<span class=\"accent\">最少、也最好</span>的单品 — 精心开发的面料、近乎偏执的版型，没有一点浪费。为穿上数年而生，而非一季。",
    aboutJury: "( 成立于 2025 · 欢迎来到新纪元 ✺ )",
    tl: [
      { d: "2025 第四季", h: "KALMERA Apparel 成立", p: "一张桌子，一个想法 — 只做最少、最好的基本款，别无其他。" },
      { d: "2026 第一季", h: "面料开发", p: "反复打样 500 g/m² 重磅抓绒，直到 KARBON 与 KLOUD 的版型与手感都令人满意。" },
      { d: "2026 第二季", h: "品牌形象与工作室", p: "KALMERA 的品牌形象逐渐成形 — 标志、字体，以及不浪费的理念。" },
      { d: "现在", h: "Drop 01 — 已开售", p: "KARBON 与 KLOUD 已经上线，各有连帽衫、T 恤与运动裤。接单后制作，全球发货。售完即止，不再补货。" },
      { d: "2027", h: "Drop 02 — 即将到来", p: "下一章尚未揭晓。名单上的人会最先知道。" }
    ],
    faq: [
      { q: "我的订单需要多久？", a: "每件单品都是<strong>接单后制作</strong> — 下单后才手工印制，因此不会有任何浪费。制作需要几天，之后发货。<strong>标准配送免费，全球约 30 天送达；结账时可选择快递（约 10 天）。</strong>发货后会提供物流单号。" },
      { q: "为什么是接单后制作？", a: "因为这就是 KALMERA 的方式 — <strong>最少、最好的单品，没有浪费。</strong>只有在收到订单后才制作，意味着没有过量生产、没有废弃、没有库存积压。代价是稍作等待，换来的是一件专为你制作的单品。" },
      { q: "我该选什么尺码？", a: "所有单品都刻意采用<strong>宽松 / 方正</strong>版型。想要真正的宽松效果，请选平时的尺码；喜欢贴身一些，可以选小一码。每件商品都附有完整尺码表。" },
      { q: "你们发货到全球吗？", a: "<strong>是的 — 全球发货。</strong>标准配送在任何地区都免费。各国送达时间略有不同，下单后会显示预计时间与物流单号。" },
      { q: "退换货", a: "由于每件单品都是<strong>接单后制作</strong>，我们无法接受无理由退货。但如果收到的商品<strong>有瑕疵、损坏，或是商品/尺码错误</strong>，请在 7 天内附上照片发送至 <strong>kalmera.team@gmail.com</strong>，我们会为你处理。" },
      { q: "如何联系你们？", a: "订单、尺码，或只是想打个招呼，都欢迎发送邮件至 <strong>kalmera.team@gmail.com</strong>。我们会阅读每一封来信。" }
    ],
    contactLead: "让我们为新纪元着装", joinList: "加入名单", watchYt: "在 youtube 观看 ↗",
    footerMid: "©—2026 · 欢迎来到新纪元", footerRight: "英格兰设计 ✺",
    close: "关闭", productImage: "商品图片", sizeGuide: "尺码表",
    deliveryNote: "接单后制作 · 标准配送免费（约 30 天），结账时可选快递（约 10 天）。",
    addToBasket: "加入购物袋 →", availNow: "现已发售 · 接单后制作",
    yourBasket: "你的购物袋", basketEmpty: "购物袋是空的。",
    delivery: "配送", standard: "标准", express: "快递",
    stdTime: "接单后制作 · 约 30 天", expTime: "接单后制作 · 约 10 天",
    free: "免费", freeStandard: "免费 · 标准配送",
    subtotal: "小计", shipping: "配送", total: "合计", pay: "支付", remove: "移除",
    cardSlot: "你的姓名、地址与银行卡信息将在下一步由 Stripe 安全收集。KALMERA 永远不会看到你的卡片信息。",
    coNote: "接单后制作 — 下单后手工印制，随后发往全球。请预留制作时间。",
    coSecure: "🔒 支付由 Stripe 保护 · KALMERA 永远不会看到你的卡片信息",
    payLoading: "正在前往安全支付页面…",
    payError: "抱歉 — 启动支付时出现问题。请重试，或发送邮件至 kalmera.team@gmail.com。"
  },
  sp: { colour: "颜色", weight: "克重", fabric: "面料", fit: "版型", mark: "标志", sizes: "尺码", made: "生产方式", price: "价格", availability: "供应状态" },
  v: {
    black: "黑色", white: "白色",
    fleece: "重磅抓绒", cotton: "重磅棉", heavy: "重磅",
    oversized: "宽松", boxy: "方正宽松", straight: "直筒",
    centreChest: "胸前中央", leftChest: "左胸", vertLeg: "裤腿下方竖向",
    toOrder: "接单后制作 · 全球发货", freeShip: "免运费", availableNow: "现已发售"
  },
  g: {
    hoodie: {
      name: "连帽衫", gal: ["正面", "背面", "细节", "帽子"],
      desc: ["整个系列的核心。采用 500 g/m² 重磅抓绒 — 密实、有结构感，上手就能感受到分量。为常年穿着而非一季而设计，不易变形。",
             "宽松版型，内里柔软磨毛，外观简洁克制。KALMERA 标志位于胸前中央，接单后印制。全球发货 — 没有一点浪费。"]
    },
    tee: {
      name: "T 恤", gal: ["正面", "背面", "细节", "领口"],
      desc: ["日常穿着的一件。方正宽松版型，实打实的 400 g/m² — 对 T 恤而言相当重磅，结构扎实，垂坠利落。",
             "左胸有一枚小小的 KALMERA 标志，接单后印制。全球发货。为版型合身、经久耐穿而做。"]
    },
    sweatpants: {
      name: "运动裤", gal: ["正面", "背面", "细节", "腰部"],
      desc: ["与连帽衫成套的一条。420 g/m² 重磅直筒版型 — 刻意比连帽衫略轻，方便活动。",
             "KALMERA 标志沿裤腿下方竖向排列，接单后印制。全球发货。从头到脚的一整套。"]
    }
  },
  sg: {
    hoodie: { cols: ["尺码", "胸围 (cm)", "衣长 (cm)", "袖长 (cm)"], note: "宽松版型。平铺测量数据。暂定数值 — 以 Tapstitch RW0035 为准。" },
    tee: { cols: ["尺码", "胸围 (cm)", "衣长 (cm)"], note: "方正宽松版型。平铺测量数据。暂定数值 — 以 Tapstitch RT0080 为准。" },
    sweatpants: { cols: ["尺码", "腰围 (cm)", "内长 (cm)", "裤长 (cm)"], note: "直筒版型。平铺测量数据。暂定数值 — 以 Tapstitch RK0009 为准。" }
  }
};

/* ---------------------------------------------------------- TÜRKÇE */
LANGS.tr = {
  ui: {
    navReleases: "Koleksiyonlar", navTimeline: "Zaman Çizelgesi", navFaq: "SSS", navContact: "İletişim",
    basket: "Sepet", ambientOff: "Ortam sesi kapalı", ambientOn: "Ortam sesi açık",
    heroTop: "Temel parçalarda yeni bir dönem", heroEst: "İNGİLTERE · 2025'ten beri",
    heroRole: "İki parça, takıntılı bir özenle tasarlandı. Hiçbir şey israf edilmiyor, her şey bilinçli.",
    scroll: "KAYDIR",
    secReleases: "Koleksiyonlar", secTimeline: "Zaman Çizelgesi", secFaq: "Sorular",
    cntYears: "2025 — 2027", cntGoodToKnow: "Bilmekte fayda var",
    drop01: "Drop 01", drop01meta: "02 Seri · Şimdi satışta",
    drop02: "Drop 02", drop02meta: "2027'de geliyor",
    dropEmpty: "Atölyede — henüz masada bir şey yok. İlk duyanlardan olmak için listeye katıl.",
    karbonMeta: "Çıpa · Siyah", kloudMeta: "Karşıt Ses · Beyaz",
    aboutHtml: "KALMERA, İngiltere'de bir temel parça atölyesi. <span class=\"accent\">En az sayıda, en iyi</span> parçayı üretiyor — özenle geliştirilmiş kumaş, takıntılı bir kalıp, sıfır israf. Bir sezon değil, yıllarca giyilmek için yapıldı.",
    aboutJury: "( 2025'te kuruldu · yeni bir döneme hoş geldin ✺ )",
    tl: [
      { d: "2025 4. Çeyrek", h: "KALMERA Apparel kuruldu", p: "Bir masa, tek bir fikir — en az sayıda, en iyi temel parçayı üretmek ve başka hiçbir şey." },
      { d: "2026 1. Çeyrek", h: "Kumaş geliştirme", p: "KARBON ve KLOUD formunu ve dokusunu koruyana dek 500 g/m² ağır polar numuneleri." },
      { d: "2026 2. Çeyrek", h: "Kimlik ve atölye", p: "KALMERA kimliği şekilleniyor — işaret, tipografi ve hiçbir şeyi israf etmeme felsefesi." },
      { d: "Şimdi", h: "Drop 01 — açık", p: "KARBON ve KLOUD burada; her biri kapüşonlu, tişört ve eşofman altı olarak. Sipariş üzerine üretilir, dünyaya gönderilir. Yeniden stok yok." },
      { d: "2027", h: "Drop 02 — ufukta", p: "Bir sonraki bölüm henüz gelmedi. Listedekiler ilk duyanlar olacak." }
    ],
    faq: [
      { q: "Siparişim ne kadar sürer?", a: "Her parça <strong>sipariş üzerine üretilir</strong> — satın aldıktan sonra elle basılır, böylece hiçbir şey israf olmaz. Üretim birkaç gün sürer, ardından kargo. <strong>Standart teslimat ücretsizdir ve dünya genelinde yaklaşık 30 gün sürer; Ekspres (~10 gün) ödeme adımında seçilebilir.</strong> Kargolandığında takip numarası gönderilir." },
      { q: "Neden sipariş üzerine üretim?", a: "Çünkü KALMERA'nın yolu bu — <strong>en az sayıda, en iyi parça, sıfır israf.</strong> Her parçayı yalnızca sipariş edildiğinde üretmek; fazla üretim, atık ve ölü stok olmaması demek. Karşılığında kısa bir bekleme, kazancınız ise sizin için üretilmiş bir parça." },
      { q: "Hangi bedeni seçmeliyim?", a: "Parçalar bilinçli olarak <strong>oversize / kutu</strong> kesim. Gerçek bir oversize görünüm istiyorsan normal bedenini al; daha oturan bir kalıp istersen bir beden küçük seç. Her üründe ayrıntılı beden tablosu var." },
      { q: "Dünya geneline gönderim var mı?", a: "<strong>Evet — dünyanın her yerine.</strong> Standart kargo her yerde ücretsiz. Teslim süreleri ülkeye göre biraz değişir; sipariş sonrası tahmini süreyi ve takip numarasını görürsün." },
      { q: "İade ve değişim", a: "Her parça <strong>sipariş üzerine üretildiği</strong> için fikir değişikliğine dayalı iadeleri kabul edemiyoruz. Ancak ürün <strong>kusurlu, hasarlı ya da yanlış ürün/beden</strong> geldiyse, 7 gün içinde bir fotoğrafla <strong>kalmera.team@gmail.com</strong> adresine yaz, hemen çözelim." },
      { q: "Size nasıl ulaşabilirim?", a: "Siparişler, bedenler ya da sadece merhaba demek için <strong>kalmera.team@gmail.com</strong> adresine yaz. Her mesajı okuyoruz." }
    ],
    contactLead: "Yeni dönemi giydirelim", joinList: "listeye katıl", watchYt: "youtube'da izle ↗",
    footerMid: "©—2026 · Yeni bir döneme hoş geldin", footerRight: "İngiltere'de tasarlandı ✺",
    close: "Kapat", productImage: "Ürün görseli", sizeGuide: "Beden tablosu",
    deliveryNote: "Sipariş üzerine üretim · Ücretsiz standart kargo (~30 gün) veya ödeme adımında Ekspres (~10 gün).",
    addToBasket: "sepete ekle →", availNow: "Şimdi satışta · sipariş üzerine üretim",
    yourBasket: "Sepetin", basketEmpty: "Sepetin boş.",
    delivery: "Teslimat", standard: "Standart", express: "Ekspres",
    stdTime: "Sipariş üzerine · ~30 gün", expTime: "Sipariş üzerine · ~10 gün",
    free: "Ücretsiz", freeStandard: "Ücretsiz · Standart",
    subtotal: "Ara toplam", shipping: "Kargo", total: "Toplam", pay: "Öde", remove: "Kaldır",
    cardSlot: "Adın, adresin ve kart bilgilerin bir sonraki adımda Stripe tarafından güvenle alınır. KALMERA kart bilgilerini asla görmez.",
    coNote: "Sipariş üzerine üretim — siparişinden sonra elle basılır ve dünyaya gönderilir. Üretim için biraz süre tanı.",
    coSecure: "🔒 Ödemeler Stripe ile korunur · KALMERA kart bilgilerini asla görmez",
    payLoading: "Güvenli ödemeye yönlendiriliyorsun…",
    payError: "Üzgünüz — ödeme başlatılırken bir sorun oluştu. Tekrar dene ya da kalmera.team@gmail.com adresine yaz."
  },
  sp: { colour: "Renk", weight: "Gramaj", fabric: "Kumaş", fit: "Kalıp", mark: "İşaret", sizes: "Bedenler", made: "Üretim", price: "Fiyat", availability: "Durum" },
  v: {
    black: "Siyah", white: "Beyaz",
    fleece: "Ağır polar", cotton: "Ağır pamuk", heavy: "Ağır gramaj",
    oversized: "Oversize", boxy: "Kutu oversize", straight: "Düz paça",
    centreChest: "Göğüs ortası", leftChest: "Sol göğüs", vertLeg: "Dikey, paça altı",
    toOrder: "Sipariş üzerine · dünyaya kargo", freeShip: "ücretsiz kargo", availableNow: "Şimdi satışta"
  },
  g: {
    hoodie: {
      name: "Kapüşonlu", gal: ["Ön", "Arka", "Detay", "Kapüşon"],
      desc: ["Koleksiyonun çıpası. 500 g/m² ağır polar üzerine kuruldu — yoğun, yapılı ve elde hissedilir bir ağırlıkta. Bir sezon değil, yıllarca formunu koruyacak şekilde yapıldı.",
             "Oversize kalıp, içi yumuşak şardonlu, dışı sade ve düşünülmüş. KALMERA işareti göğüs ortasında, sipariş üzerine basılır. Dünyaya gönderilir — sıfır israf."]
    },
    tee: {
      name: "Tişört", gal: ["Ön", "Arka", "Detay", "Yaka"],
      desc: ["Günlük giyilen parça. Kutu kesim, oversize ve gerçek anlamda 400 g/m² — bir tişört için ağır, sağlam bir yapı ve temiz bir dökümü var.",
             "Sol göğüste küçük bir KALMERA işareti, sipariş üzerine basılır. Dünyaya gönderilir. Doğru oturması ve uzun ömürlü olması için yapıldı."]
    },
    sweatpants: {
      name: "Eşofman altı", gal: ["Ön", "Arka", "Detay", "Bel"],
      desc: ["Kapüşonlunun tamamlayıcısı. 420 g/m² ağır gramaj, düz paça kesim — rahat hareket için kapüşonludan bilinçli olarak biraz daha hafif.",
             "KALMERA işareti paçanın alt kısmında dikey olarak yer alır, sipariş üzerine basılır. Dünyaya gönderilir. Baştan ayağa tam takım."]
    }
  },
  sg: {
    hoodie: { cols: ["Beden", "Göğüs (cm)", "Boy (cm)", "Kol (cm)"], note: "Oversize kalıp. Ölçüler ürün düz serildiğinde alınmıştır. Geçici değerler — Tapstitch RW0035 ile doğrulanacak." },
    tee: { cols: ["Beden", "Göğüs (cm)", "Boy (cm)"], note: "Kutu oversize kalıp. Düz serili ölçüler. Geçici değerler — Tapstitch RT0080 ile doğrulanacak." },
    sweatpants: { cols: ["Beden", "Bel (cm)", "İç boy (cm)", "Toplam boy (cm)"], note: "Düz paça kalıp. Düz serili ölçüler. Geçici değerler — Tapstitch RK0009 ile doğrulanacak." }
  }
};

/* ---------------------------------------------------------- فارسی */
LANGS.fa = {
  ui: {
    navReleases: "کالکشن‌ها", navTimeline: "خط زمانی", navFaq: "پرسش‌های پرتکرار", navContact: "تماس",
    basket: "سبد خرید", ambientOff: "صدای محیط خاموش", ambientOn: "صدای محیط روشن",
    heroTop: "ساختن دورانی تازه برای لباس‌های پایه", heroEst: "انگلستان · از ۲۰۲۵",
    heroRole: "دو قطعه، با وسواسی تمام‌نشدنی طراحی شده. هیچ چیز هدر نمی‌رود و هر جزئی حساب‌شده است.",
    scroll: "اسکرول",
    secReleases: "کالکشن‌ها", secTimeline: "خط زمانی", secFaq: "پرسش‌ها",
    cntYears: "۲۰۲۵ — ۲۰۲۷", cntGoodToKnow: "خوب است بدانید",
    drop01: "Drop 01", drop01meta: "۰۲ خط · اکنون موجود",
    drop02: "Drop 02", drop02meta: "به‌زودی در ۲۰۲۷",
    dropEmpty: "در استودیو — هنوز چیزی روی میز نیست. به فهرست بپیوندید تا اولین نفر باخبر شوید.",
    karbonMeta: "لنگر · مشکی", kloudMeta: "نقطه‌ی مقابل · سفید",
    aboutHtml: "‏KALMERA یک استودیوی لباس‌های پایه در انگلستان است که <span class=\"accent\">کمترین و بهترین</span> قطعه‌ها را می‌سازد — پارچه‌ی مهندسی‌شده، فُرمی وسواسی و بدون ذره‌ای هدررفت. ساخته شده تا سال‌ها پوشیده شود، نه یک فصل.",
    aboutJury: "( تأسیس ۲۰۲۵ · به دورانی تازه خوش آمدید ✺ )",
    tl: [
      { d: "فصل چهارم ۲۰۲۵", h: "تأسیس KALMERA Apparel", p: "یک میز و یک ایده — ساختن کمترین و بهترین لباس‌های پایه، و هیچ چیز دیگر." },
      { d: "فصل اول ۲۰۲۶", h: "توسعه‌ی پارچه", p: "نمونه‌سازی پارچه‌ی فلیس سنگین ۵۰۰ گرم بر مترمربع تا زمانی که KARBON و KLOUD فرم و لمس درست را پیدا کنند." },
      { d: "فصل دوم ۲۰۲۶", h: "هویت و استودیو", p: "هویت KALMERA شکل می‌گیرد — نشان، تایپوگرافی و فلسفه‌ی هدر ندادن هیچ چیز." },
      { d: "هم‌اکنون", h: "‏Drop 01 — باز است", p: "‏KARBON و KLOUD اینجا هستند؛ هرکدام با هودی، تی‌شرت و شلوار. ساخت پس از سفارش، ارسال به سراسر جهان. بدون تولید مجدد." },
      { d: "۲۰۲۷", h: "‏Drop 02 — در افق", p: "فصل بعد هنوز نیامده است. فهرست زودتر از همه باخبر می‌شود." }
    ],
    faq: [
      { q: "سفارش من چقدر طول می‌کشد؟", a: "هر قطعه <strong>پس از سفارش ساخته می‌شود</strong> — بعد از خرید شما با دست چاپ می‌شود تا چیزی هدر نرود. تولید چند روز طول می‌کشد و سپس ارسال. <strong>ارسال عادی رایگان است و در سراسر جهان حدود ۳۰ روز زمان می‌برد؛ ارسال سریع (حدود ۱۰ روز) هنگام پرداخت قابل انتخاب است.</strong> پس از ارسال، کد رهگیری دریافت می‌کنید." },
      { q: "چرا ساخت پس از سفارش؟", a: "چون راه KALMERA همین است — <strong>کمترین و بهترین قطعه‌ها، بدون هدررفت.</strong> ساختن هر قطعه فقط پس از سفارش یعنی بدون تولید مازاد، بدون دورریز و بدون انبار راکد. بهایش کمی انتظار است و سودش قطعه‌ای که برای شما ساخته شده." },
      { q: "چه سایزی انتخاب کنم؟", a: "قطعه‌ها عمداً <strong>گشاد / باکسی</strong> برش خورده‌اند. اگر فرم واقعاً گشاد می‌خواهید سایز همیشگی خود را بگیرید؛ اگر فرم جمع‌تری می‌پسندید یک سایز پایین‌تر بردارید. راهنمای کامل سایز روی هر محصول موجود است." },
      { q: "آیا به همه‌جای دنیا ارسال دارید؟", a: "<strong>بله — به سراسر جهان.</strong> ارسال عادی همه‌جا رایگان است. مدت زمان تحویل بسته به کشور کمی متفاوت است؛ پس از ثبت سفارش، زمان تخمینی و کد رهگیری را می‌بینید." },
      { q: "بازگشت و تعویض", a: "از آنجا که هر قطعه <strong>پس از سفارش ساخته می‌شود</strong>، امکان بازگرداندن به دلیل تغییر نظر وجود ندارد. اما اگر کالا <strong>معیوب، آسیب‌دیده یا اشتباه از نظر مدل یا سایز</strong> به دستتان رسید، ظرف ۷ روز همراه با عکس به <strong>kalmera.team@gmail.com</strong> پیام دهید تا جبران کنیم." },
      { q: "چطور با شما تماس بگیرم؟", a: "برای هر چیزی — سفارش، سایز یا حتی فقط یک سلام — به <strong>kalmera.team@gmail.com</strong> ایمیل بزنید. همه‌ی پیام‌ها را می‌خوانیم." }
    ],
    contactLead: "بیایید دوران تازه را بپوشانیم", joinList: "پیوستن به فهرست", watchYt: "تماشا در یوتیوب ↗",
    footerMid: "©—۲۰۲۶ · به دورانی تازه خوش آمدید", footerRight: "طراحی‌شده در انگلستان ✺",
    close: "بستن", productImage: "تصویر محصول", sizeGuide: "راهنمای سایز",
    deliveryNote: "ساخت پس از سفارش · ارسال عادی رایگان (حدود ۳۰ روز) یا سریع (حدود ۱۰ روز) هنگام پرداخت.",
    addToBasket: "افزودن به سبد →", availNow: "اکنون موجود · ساخت پس از سفارش",
    yourBasket: "سبد خرید شما", basketEmpty: "سبد خرید شما خالی است.",
    delivery: "ارسال", standard: "عادی", express: "سریع",
    stdTime: "ساخت پس از سفارش · حدود ۳۰ روز", expTime: "ساخت پس از سفارش · حدود ۱۰ روز",
    free: "رایگان", freeStandard: "رایگان · عادی",
    subtotal: "جمع جزء", shipping: "ارسال", total: "جمع کل", pay: "پرداخت", remove: "حذف",
    cardSlot: "نام، نشانی و اطلاعات کارت شما در مرحله‌ی بعد به‌صورت امن توسط Stripe دریافت می‌شود. KALMERA هرگز اطلاعات کارت شما را نمی‌بیند.",
    coNote: "ساخت پس از سفارش — پس از ثبت سفارش با دست چاپ و به سراسر جهان ارسال می‌شود. برای تولید کمی زمان در نظر بگیرید.",
    coSecure: "🔒 پرداخت‌ها توسط Stripe محافظت می‌شوند · KALMERA اطلاعات کارت شما را نمی‌بیند",
    payLoading: "در حال انتقال به صفحه‌ی پرداخت امن…",
    payError: "متأسفیم — هنگام شروع پرداخت مشکلی پیش آمد. دوباره تلاش کنید یا به kalmera.team@gmail.com ایمیل بزنید."
  },
  sp: { colour: "رنگ", weight: "وزن", fabric: "پارچه", fit: "فرم", mark: "نشان", sizes: "سایزها", made: "شیوه‌ی ساخت", price: "قیمت", availability: "وضعیت موجودی" },
  v: {
    black: "مشکی", white: "سفید",
    fleece: "فلیس سنگین", cotton: "پنبه‌ی سنگین", heavy: "وزن سنگین",
    oversized: "گشاد", boxy: "گشاد باکسی", straight: "پاچه صاف",
    centreChest: "وسط سینه", leftChest: "سینه‌ی چپ", vertLeg: "عمودی، پایین پاچه",
    toOrder: "پس از سفارش · ارسال جهانی", freeShip: "ارسال رایگان", availableNow: "اکنون موجود"
  },
  g: {
    hoodie: {
      name: "هودی", gal: ["جلو", "پشت", "جزئیات", "کلاه"],
      desc: ["لنگر این کالکشن. ساخته‌شده از فلیس سنگین ۵۰۰ گرم بر مترمربع — متراکم، فرم‌دار و با وزنی که در دست حس می‌شود. طراحی شده تا فرمش را حفظ کند و سال‌ها پوشیده شود، نه یک فصل.",
             "فرم گشاد، آستر داخلی نرم و پرزدار، ظاهری تمیز و سنجیده. نشان KALMERA در وسط سینه و پس از سفارش چاپ می‌شود. ارسال به سراسر جهان — بدون ذره‌ای هدررفت."]
    },
    tee: {
      name: "تی‌شرت", gal: ["جلو", "پشت", "جزئیات", "یقه"],
      desc: ["قطعه‌ی هر روز. تی‌شرتی باکسی و گشاد با وزن واقعی ۴۰۰ گرم بر مترمربع — برای یک تی‌شرت سنگین است، با ساختاری محکم و افتی تمیز.",
             "نشان کوچک KALMERA روی سینه‌ی چپ، چاپ‌شده پس از سفارش. ارسال به سراسر جهان. ساخته شده تا درست بنشیند و دوام بیاورد."]
    },
    sweatpants: {
      name: "شلوار ورزشی", gal: ["جلو", "پشت", "جزئیات", "کمر"],
      desc: ["همراه هودی. شلواری سنگین با وزن ۴۲۰ گرم بر مترمربع و برش پاچه‌صاف — عمداً کمی سبک‌تر از هودی تا راحت حرکت کنید.",
             "نشان KALMERA به‌صورت عمودی روی پایین پاچه قرار می‌گیرد و پس از سفارش چاپ می‌شود. ارسال به سراسر جهان. ست کامل، از سر تا پا."]
    }
  },
  sg: {
    hoodie: { cols: ["سایز", "دور سینه (سانتی‌متر)", "قد (سانتی‌متر)", "آستین (سانتی‌متر)"], note: "فرم گشاد. اندازه‌ها روی لباس صاف‌شده گرفته شده است. مقادیر موقت — با Tapstitch RW0035 بررسی شود." },
    tee: { cols: ["سایز", "دور سینه (سانتی‌متر)", "قد (سانتی‌متر)"], note: "فرم گشاد باکسی. اندازه‌ها روی لباس صاف‌شده. مقادیر موقت — با Tapstitch RT0080 بررسی شود." },
    sweatpants: { cols: ["سایز", "دور کمر (سانتی‌متر)", "فاق تا پایین (سانتی‌متر)", "قد (سانتی‌متر)"], note: "برش پاچه‌صاف. اندازه‌ها روی لباس صاف‌شده. مقادیر موقت — با Tapstitch RK0009 بررسی شود." }
  }
};

/* ============================================================
   ENGINE — applies the chosen language to the page
   ============================================================ */
(function () {
  var STORE_KEY = "kalmera-lang";
  var lang = null;
  try { lang = localStorage.getItem(STORE_KEY); } catch (e) { lang = null; }
  if (!lang || !LANGS[lang]) lang = "en";

  var L = LANGS[lang];

  /* Expose the strings the main script asks for via TT(). */
  if (L) {
    window.KALMERA_STRINGS = L.ui;

    /* Build the translated product copy the product panel reads. */
    var pt = {};
    Object.keys(PRODUCT_MAP).forEach(function (key) {
      var m = PRODUCT_MAP[key];
      var gd = GARMENT_DATA[m.garment];
      var g = L.g[m.garment];
      pt[key] = {
        sub: g.name + " · " + m.line + " " + L.v[m.colour] + " · Drop 01",
        desc: g.desc,
        gallery: g.gal,
        specs: [
          [L.sp.colour, L.v[m.colour]],
          [L.sp.weight, gd.weight],
          [L.sp.fabric, L.v[gd.fabric]],
          [L.sp.fit, L.v[gd.fit]],
          [L.sp.mark, L.v[gd.mark]],
          [L.sp.sizes, gd.sizes],
          [L.sp.made, L.v.toOrder],
          [L.sp.price, gd.price + " · " + L.v.freeShip],
          [L.sp.availability, L.v.availableNow]
        ]
      };
    });
    window.KALMERA_PRODUCT_TEXT = pt;
    window.KALMERA_SIZE_TEXT = L.sg;
  }

  function setText(sel, val) {
    if (val == null) return;
    var el = document.querySelector(sel);
    if (el) el.textContent = val;
  }
  function setHtml(sel, val) {
    if (val == null) return;
    var el = document.querySelector(sel);
    if (el) el.innerHTML = val;
  }

  function apply() {
    /* language picker reflects the current choice and reloads on change,
       so every animation rebuilds cleanly in the new language */
    var sel = document.getElementById("langSel");
    if (sel) {
      sel.value = lang;
      sel.addEventListener("change", function () {
        try { localStorage.setItem(STORE_KEY, sel.value); } catch (e) {}
        location.reload();
      });
    }

    // Arabic and Farsi both read right-to-left
    if (lang === "ar" || lang === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", lang);
    } else {
      document.documentElement.setAttribute("lang", lang);
    }

    if (!L) return;
    var u = L.ui;

    setText('.n-links a[href="#recognitions"]', u.navReleases);
    setText('.n-links a[href="#timeline"]', u.navTimeline);
    setText('.n-links a[href="#faq"]', u.navFaq);
    setText('.n-links a[href="#contact"]', u.navContact);
    setText('#cartBtn span:nth-of-type(2)', u.basket);
    setText('.sound-btn .lbl-off', u.ambientOff);
    setText('.sound-btn .lbl-on', u.ambientOn);

    setText('.hero .top span:nth-child(1)', u.heroTop);
    setText('.hero .top span:nth-child(2)', u.heroEst);
    setText('.hero .foot .role', u.heroRole);
    setText('.hero .foot .scrolldn .mono', u.scroll);

    setText('#recognitions .shead h2', u.secReleases);
    setText('#timeline .shead h2', u.secTimeline);
    setText('#timeline .shead .cnt', u.cntYears);
    setText('#faq .shead h2', u.secFaq);
    setText('#faq .shead .cnt', u.cntGoodToKnow);

    var folders = document.querySelectorAll(".releases > .folder");
    if (folders[0]) {
      setTextIn(folders[0], ".fname", u.drop01);
      setTextIn(folders[0], ".fmeta", u.drop01meta);
      var subs = folders[0].querySelectorAll(".subfolder");
      if (subs[0]) setTextIn(subs[0], ".sfmeta", u.karbonMeta);
      if (subs[1]) setTextIn(subs[1], ".sfmeta", u.kloudMeta);
    }
    if (folders[1]) {
      setTextIn(folders[1], ".fname", u.drop02);
      setTextIn(folders[1], ".fmeta", u.drop02meta);
      setTextIn(folders[1], ".rel-empty", u.dropEmpty);
    }

    setHtml('.about [data-words]', u.aboutHtml);
    setText('.about .jury', u.aboutJury);

    var rows = document.querySelectorAll(".timeline .trow");
    (u.tl || []).forEach(function (t, i) {
      if (!rows[i]) return;
      setTextIn(rows[i], ".tdate", t.d);
      setTextIn(rows[i], "h4", t.h);
      setTextIn(rows[i], "p", t.p);
    });

    var faqs = document.querySelectorAll("[data-faq]");
    (u.faq || []).forEach(function (f, i) {
      if (!faqs[i]) return;
      setTextIn(faqs[i], ".fq-txt", f.q);
      setHtmlIn(faqs[i], ".fa-inner", f.a);
    });

    setText('.contact .lead', u.contactLead);
    setText('[data-email]', u.joinList);
    setText('[data-yt]', u.watchYt);

    var fspans = document.querySelectorAll("footer span");
    if (fspans[1]) fspans[1].textContent = u.footerMid;
    if (fspans[2]) fspans[2].textContent = u.footerRight;

    setText('.po-close .mono', u.close);
    setText('.po-hero .ph-tag', u.productImage);
    setText('#poSizeGuide summary', u.sizeGuide);
    setText('#poDelivery', u.deliveryNote);
    setText('#poAvail', u.availNow);
    setText('[data-cta]', u.addToBasket);

    setText('.co-h', u.yourBasket);
    setText('#coEmpty', u.basketEmpty);
    setText('.co-form .co-field label', u.delivery);
    var opts = document.querySelectorAll("#coShip .ship-opt");
    if (opts[0]) {
      setTextIn(opts[0], ".s-name", u.standard);
      setTextIn(opts[0], ".s-time", u.stdTime);
      setTextIn(opts[0], ".s-price", u.free);
    }
    if (opts[1]) {
      setTextIn(opts[1], ".s-name", u.express);
      setTextIn(opts[1], ".s-time", u.expTime);
    }
    setHtml('.co-card-slot', '<span class="lock">🔒</span> ' + u.cardSlot);
    var trs = document.querySelectorAll("#coTotals .tr");
    if (trs[0]) setTextIn(trs[0], "span:first-child", u.subtotal);
    if (trs[1]) setTextIn(trs[1], "span:first-child", u.shipping);
    if (trs[2]) setTextIn(trs[2], "span:first-child", u.total);
    setText('#coShipLine', u.freeStandard);
    setText('#coPay', u.pay + " —");
    setText('.co-note', u.coNote);
    setText('.co-secure', u.coSecure);
  }

  function setTextIn(root, sel, val) {
    if (val == null) return;
    var el = root.querySelector(sel);
    if (el) el.textContent = val;
  }
  function setHtmlIn(root, sel, val) {
    if (val == null) return;
    var el = root.querySelector(sel);
    if (el) el.innerHTML = val;
  }

  /* Runs before the main script's own DOMContentLoaded handler,
     so text is translated before it gets split for animation. */
  document.addEventListener("DOMContentLoaded", apply);
})();
