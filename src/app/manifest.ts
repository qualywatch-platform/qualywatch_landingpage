import type { MetadataRoute } from "next";

/**
 * Web App Manifest pour Qualywatch.
 * Améliore le signal "PWA-ready" perçu par Google + permet l'installation
 * sur écran d'accueil mobile (utile en Afrique : 90% mobile).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qualywatch — Pilotez l'expérience client",
    short_name: "Qualywatch",
    description:
      "Logiciel de feedback et satisfaction client pour PME du Sénégal et d'Afrique de l'Ouest. QR code, WhatsApp, alertes temps réel.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FA700D",
    lang: "fr-SN",
    dir: "ltr",
    categories: ["business", "productivity", "utilities"],
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
