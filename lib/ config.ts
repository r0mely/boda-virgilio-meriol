// ─────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DE LA BODA
// Edita este archivo para cambiar textos, fechas y enlaces
// sin tocar el resto del código.
// ─────────────────────────────────────────────────────────

export const wedding = {
  groom: "Virgilio",
  bride: "Meriol",
  coupleHashtag: "#VirgilioyMeriol2026",

  // Fecha y hora del evento (formato ISO). Ajusta la hora real de la ceremonia.
  date: "2026-09-19T18:00:00",
  dateLabel: "19 de Septiembre, 2026",
  dayOfWeekLabel: "Sábado",

  // Textos de la portada / sobre
  envelopeSeal: "V & M",
  invitationTitle: "Nos Casamos",

  // Historia (línea de tiempo). Agrega/edita los hitos que quieras.
  story: [
    {
      year: "2019",
      title: "Un encuentro inesperado",
      text: "Dos caminos que no debían cruzarse se encontraron por casualidad, y desde ese momento nada volvió a ser igual.",
    },
    {
      year: "2021",
      title: "La promesa",
      text: "Entre risas y complicidad, decidimos construir juntos una vida hecha de pequeños momentos extraordinarios.",
    },
    {
      year: "2025",
      title: "El sí definitivo",
      text: "Bajo un cielo de atardecer, la pregunta esperada encontró la respuesta que ambos ya sabíamos.",
    },
    {
      year: "2026",
      title: "El gran día",
      text: "Hoy, rodeados de quienes más amamos, unimos nuestras vidas para siempre.",
    },
  ],

  // Ubicación — ceremonia y recepción
  ceremony: {
    name: "Parroquia Nuestra Señora del Carmen",
    address: "Calle Real 123, Ciudad Jardín",
    time: "18:00 hrs",
  },
  reception: {
    name: "Hacienda Los Almendros",
    address: "Km 5 Vía a Los Robles, Ciudad Jardín",
    time: "20:00 hrs",
  },

  // Dirección principal usada para Google Maps y el código QR
  mapAddress: "Hacienda Los Almendros, Km 5 Vía a Los Robles, Ciudad Jardín",
  mapEmbedQuery: "Hacienda Los Almendros",
  mapsShareUrl:
    "https://www.google.com/maps/search/?api=1&query=Hacienda+Los+Almendros",

  // Galería — reemplaza con tus propias fotos en /public/images
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ],

  // Música de fondo — coloca tu archivo en /public/music
  music: {
    src: "/music/wedding-song.mp3",
    title: "Nuestra canción",
  },

  // Vestimenta / dress code
  dressCode: "Formal Elegante — Paleta champán, dorado y tonos tierra",

  // Google Sheets / Apps Script — URL del Web App que recibe el RSVP
  // Ver README.md para instrucciones de configuración
  rsvpEndpoint: process.env.NEXT_PUBLIC_RSVP_ENDPOINT || "",
};

export type Wedding = typeof wedding;
