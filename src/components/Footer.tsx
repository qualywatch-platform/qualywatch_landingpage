import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Locale, getLocalizedPath } from "@/lib/i18n";

export function Footer({ locale = "fr" }: { locale?: Locale }) {
  const productLinks =
    locale === "fr"
      ? [
          { label: "Fonctionnalités", href: "#fonctionnalites" },
          { label: "Solutions par secteur", href: "#secteurs" },
          { label: "Fidélisation", href: "#armes" },
          { label: "Tarifs", href: "#tarifs" },
          { label: "Sécurité", href: "#securite" },
        ]
      : [
          { label: "Features", href: "#fonctionnalites" },
          { label: "Solutions by industry", href: "#secteurs" },
          { label: "Retention", href: "#armes" },
          { label: "Pricing", href: "#tarifs" },
          { label: "Security", href: "#securite" },
        ];

  const companyLinks =
    locale === "fr"
      ? [
          { label: "Notre histoire", href: "#histoire" },
          { label: "FAQ", href: "#faq" },
          { label: "Documentation API", href: "/docs/api" },
          { label: "Contact", href: "#contact" },
        ]
      : [
          { label: "Our story", href: "#histoire" },
          { label: "FAQ", href: "#faq" },
          { label: "API documentation", href: "/docs/api" },
          { label: "Contact", href: "#contact" },
        ];

  const legalLinks =
    locale === "fr"
      ? [{ label: "Confidentialité", href: "/privacy" }]
      : [{ label: "Privacy", href: "/privacy" }];


  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-20">
        {/* Main grid — Logo + 3 link columns */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link href={getLocalizedPath(locale, "/")} className="inline-flex items-center gap-2.5">
              <Image src="/qualywatch-logo.png" alt="" width={40} height={40} className="h-9 w-9 object-contain" />
              <span className="font-display text-xl font-semibold tracking-tight text-white">QualyWatch</span>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/70">
              {locale === "fr"
                ? "La plateforme qui transforme chaque avis client en action, et chaque client mécontent en client retenu."
                : "The platform that turns every customer review into action, and every unhappy customer into a retained one."}
            </p>

            {/* Contact mini */}
            <div className="mt-6 flex flex-col items-start gap-2.5">
              <Link
                href="mailto:aishaseye074@gmail.com"
                className="group inline-flex items-center gap-2 text-[13px] text-white/75 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-orange" strokeWidth={1.8} />
                aishaseye074@gmail.com
              </Link>
              <Link
                href="tel:+221704072668"
                className="group inline-flex items-center gap-2 text-[13px] text-white/75 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-orange" strokeWidth={1.8} />
                +221 70 407 26 68
              </Link>
              <div className="inline-flex items-center gap-2 text-[13px] text-white/75">
                <MapPin className="h-4 w-4 text-orange" strokeWidth={1.8} />
                Dakar, Sénégal
              </div>
            </div>
          </div>

          {/* Produit links */}
          <div>
            <h4 className="text-sm font-semibold text-orange">{locale === "fr" ? "Produit" : "Product"}</h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={getLocalizedPath(locale, l.href)}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise links */}
          <div>
            <h4 className="text-sm font-semibold text-orange">{locale === "fr" ? "Entreprise" : "Company"}</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={getLocalizedPath(locale, l.href)}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Social */}
            <div>
              <div className="text-sm font-semibold text-orange">{locale === "fr" ? "Suivez-nous" : "Follow us"}</div>
              <div className="mt-4 flex gap-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61589270003634"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/75 transition hover:border-orange hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/qualywatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/75 transition hover:border-orange hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/qualywatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/75 transition hover:border-orange hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/60">
            © {new Date().getFullYear()} QualyWatch, Dakar. {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={getLocalizedPath(locale, l.href)}
                  className="text-[12px] text-white/60 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
