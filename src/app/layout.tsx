import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, DM_Sans, JetBrains_Mono, Permanent_Marker } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://qualywatch.com"),
  title: {
    default: "Qualywatch — Pilotez l'expérience client en temps réel",
    template: "%s · Qualywatch",
  },
  description:
    "Transformez le ressenti de vos clients en données claires et en actions concrètes. Un système de pilotage continu de la qualité perçue.",
  openGraph: {
    type: "website",
    siteName: "Qualywatch",
    locale: "fr_FR",
  },
};

const noFlashScript = `(function(){try{document.documentElement.setAttribute('data-theme','light');localStorage.setItem('qw-theme','light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

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
        {children}
      </body>
    </html>
  );
}
