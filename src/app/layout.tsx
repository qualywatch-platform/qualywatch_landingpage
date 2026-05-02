import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, DM_Sans, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marker",
  display: "swap",
});

const SITE_URL = "https://www.qualywatch.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Qualywatch — Pilotez l'expérience client en temps réel",
    template: "%s · Qualywatch",
  },
  description:
    "Transformez le ressenti de vos clients en données claires et en actions concrètes. Un système de pilotage continu de la qualité perçue.",
  applicationName: "Qualywatch",
  authors: [{ name: "Qualywatch" }],
  keywords: [
    "feedback client",
    "satisfaction client",
    "NPS",
    "CSAT",
    "QR code feedback",
    "WhatsApp Business avis",
    "expérience client SaaS",
    "Qualywatch",
    "pilotage qualité",
    "Sénégal",
    "Afrique de l'Ouest",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: { url: "/apple-icon.png?v=2", type: "image/png", sizes: "180x180" },
  },
  openGraph: {
    type: "website",
    siteName: "Qualywatch",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Qualywatch — Pilotez l'expérience client en temps réel",
    description:
      "L'infrastructure qui transforme chaque feedback client en décision opérationnelle — et chaque client mécontent en client retenu.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Qualywatch — Pilotez l'expérience client en temps réel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualywatch — Pilotez l'expérience client en temps réel",
    description:
      "Captez chaque signal client. Réagissez en temps réel. Retenez vos clients.",
    site: "@qualywatch",
    creator: "@qualywatch",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const noFlashScript = `(function(){try{document.documentElement.setAttribute('data-theme','light');localStorage.setItem('qw-theme','light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Qualywatch",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: [
        "https://www.facebook.com/profile.php?id=61589270003634",
        "https://x.com/qualywatch",
        "https://www.instagram.com/qualywatch",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "aishaseye074@gmail.com",
        telephone: "+221 70 407 26 68",
        contactType: "customer support",
        areaServed: ["SN", "FR", "CI", "MA", "ML", "BJ", "TG", "GN"],
        availableLanguage: ["French", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}#software`,
      name: "Qualywatch",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url: SITE_URL,
      description:
        "Plateforme SaaS de pilotage de la satisfaction client : collecte multi-canal (QR, WhatsApp, email), alertes temps réel, IA d'analyse, SLA, gamification.",
      offers: [
        { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
        { "@type": "Offer", name: "Pro", price: "69", priceCurrency: "USD" },
        { "@type": "Offer", name: "Business", price: "139", priceCurrency: "USD" },
        { "@type": "Offer", name: "Enterprise", price: "190", priceCurrency: "USD" },
      ],
      provider: { "@id": `${SITE_URL}#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${mono.variable} ${marker.variable} h-full`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="min-h-full text-text antialiased" style={{ background: "#FFFFFF" }} suppressHydrationWarning>
        <Script id="qw-theme-init" strategy="beforeInteractive">
          {noFlashScript}
        </Script>
        <Script
          id="qw-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
