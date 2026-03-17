import { getLocalizedHref } from "@/lib/routes";
import type { HomePageData, Locale } from "@/lib/site-types";

const placeholderImage = {
  src: "https://placehold.co/1200x800/f5f0e8/c4b8a8?text=Timoty",
  alt: "Timoty Drinks & Kitchen",
};
const placeholderGallery = [
  { ...placeholderImage, caption: "Sala" },
  { ...placeholderImage, caption: "Piatti" },
  { ...placeholderImage, caption: "Atmosfera" },
];

export const siteCopy = {
  brand: {
    name: "Timoty Drinks & Kitchen",
    logo: {
      src: "/assets/logo.svg",
      alt: "Timoty Drinks & Kitchen",
    },
  },
  contact: {
    address: "Via Torino 46, 00184 Roma",
    phonePrimary: "+39 06 9686 0080",
    phoneHref: "tel:+390696860080",
    email: "info@timotyristorante.it",
    hours: "Lun–Ven 7:00–16:00",
    mapHref: "https://maps.google.com/?q=Via+Torino+46,+00184+Roma",
    instagram: "https://www.instagram.com/timotyristorante/",
    facebook: "",
  },
  navigation: {
    it: {
      menu: "Menu",
      eventi: "Eventi e gruppi",
      contacts: "Contatti",
      privacy: "Privacy",
    },
  } as Record<Locale, Record<string, string>>,
  ui: {
    it: {
      navigationTitle: "Navigazione",
      contactTitle: "Contatti",
      book: "Prenota",
      open: "Apri",
      footerLine: "Cucina genuina nel cuore di Roma.",
      copyright: "© Timoty Drinks & Kitchen",
      bookingEyebrow: "Prenota",
      phoneLabel: "Telefono",
      hoursLabel: "Orari",
      mobileMenu: "Menu",
      closeMenu: "Chiudi",
    },
  } as Record<Locale, Record<string, string>>,
  forms: {
    it: {
      name: "Nome",
      email: "Email",
      phone: "Telefono",
      guests: "Numero di ospiti",
      date: "Data",
      time: "Orario preferito",
      specialRequests: "Richieste particolari",
      subject: "Oggetto",
      message: "Messaggio",
      submitReservation: "Invia richiesta",
      submitContact: "Invia messaggio",
      loading: "Invio in corso...",
      success: "Richiesta inviata. Ti contatteremo al più presto.",
      error: "Errore nell'invio. Riprova o contattaci per telefono.",
      note: "Conferme last minute: telefona o scrivici.",
      reservationTitle: "Prenota",
      contactTitle: "Contatti",
    },
  } as Record<Locale, Record<string, string>>,
};

export const homePages: Record<Locale, HomePageData> = {
  it: {
    title: "Timoty Drinks & Kitchen — Ristorante Roma, Via Torino 46",
    description:
      "Cucina genuina, healthy, veg e gluten free a Roma centro. Ingredienti km 0, brunch, pranzo e cena. Prenota il tuo tavolo.",
    hero: {
      eyebrow: "Via Torino 46 · Repubblica · Roma",
      title: "Timoty. Cucina genuina nel cuore di Roma.",
      intro:
        "Veg, vegetariano, gluten free e ingredienti a km zero. Brunch, pranzo e cena in Via Torino.",
      image: placeholderImage,
      badges: ["Veg & gluten free", "Km 0", "Roma centro"],
      actions: [
        { label: "Prenota ora", href: "#booking", variant: "primary" },
        { label: "Scopri il menu", href: getLocalizedHref("it", "menu"), variant: "secondary" },
      ],
    },
    identity: {
      eyebrow: "Timoty",
      title: "Cucina sana e territorio laziale.",
      paragraphs: [
        "A Timoty portiamo in tavola piatti bilanciati e genuini, con un'attenzione forte a vegetariano, vegano e senza glutine. Ingredienti biologici e a km zero, con le eccellenze del Lazio nel centro di Roma.",
      ],
      bullets: [
        "Veg, vegetariano, gluten free in tutto il menu",
        "Ingredienti km 0 e biologici",
        "Via Torino 46, tra Repubblica e Teatro dell'Opera",
      ],
    },
    proposal: {
      eyebrow: "La cucina",
      title: "Per tutti i palati, con radici nel territorio.",
      cards: [
        {
          title: "Per tutti i palati",
          body: "Proposte veg, vegetariane e gluten free integrate in tutta la carta, non in margine.",
          href: getLocalizedHref("it", "menu"),
        },
        {
          title: "Territorio e km 0",
          body: "Ingredienti locali ed eccellenze laziali, con attenzione a stagionalità e filiera corta.",
          href: getLocalizedHref("it", "menu"),
        },
        {
          title: "Brunch, pranzo e cena",
          body: "Dalla colazione alla cena: momenti diversi per incontrare il nostro modo di cucinare.",
          href: getLocalizedHref("it", "menu"),
        },
      ],
    },
    gallery: {
      eyebrow: "L'atmosfera",
      title: "Il locale dove vorresti essere.",
      images: placeholderGallery,
    },
    reservation: {
      title: "Prenota il tuo tavolo",
      intro:
        "Scegli data e ora qui sotto o contattaci per telefono o email. Per conferme last minute il telefono è il canale più veloce.",
      note: "Stesso giorno o urgenze? Chiamaci o scrivici.",
      mode: "reservation",
      requestType: "booking",
    },
    events: {
      eyebrow: "Eventi e gruppi",
      title: "Pranzi di lavoro, cene private e eventi.",
      body: "Organizziamo eventi su misura in sede: meeting, compleanni, cene aziendali. Richiedi informazioni e disponibilità.",
      cta: { label: "Richiedi informazioni", href: "#booking", variant: "primary" },
    },
    location: {
      eyebrow: "Dove siamo",
      title: "Via Torino 46, tra Repubblica e Teatro dell'Opera.",
      body: "In centro a Roma, comodo per chi soggiorna in zona, per turisti e per chi lavora in centro. Metro e bus a pochi passi.",
      address: "Via Torino 46, 00184 Roma",
      mapHref: "https://maps.google.com/?q=Via+Torino+46,+00184+Roma",
      linkLabel: "Apri in Google Maps",
    },
  },
};
