import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const productLinks = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Solutions par secteur", href: "#secteurs" },
  { label: "Vos armes", href: "#armes" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Sécurité & RGPD", href: "#securite" },
];

const companyLinks = [
  { label: "Notre histoire", href: "#histoire" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "API Documentation", href: "/docs/api" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/legal" },
  { label: "Confidentialité", href: "/privacy" },
  { label: "CGU", href: "/terms" },
  { label: "DPA", href: "/dpa" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0F0E0C", color: "#FFFFFF" }}
    >
      {/* Decorative orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-20">
        {/* Top — CTA banner */}
        <div className="mb-14 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Prêt à donner une voix <span className="italic text-orange">à vos clients</span> ?
            </h3>
            <p className="mt-3 max-w-xl text-sm text-white/65 lg:text-base">
              Démarrez gratuitement en 2 minutes. Pas de carte bancaire, aucun engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-orange btn-lift hover:bg-orange-deep"
            >
              Essayer gratuitement
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth="2.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-orange hover:text-orange"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Main grid — Logo + 3 link columns */}
        <div className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/qualywatch-logo.png"
                alt="QualyWatch"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">Qualywatch</span>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/60">
              L&apos;infrastructure qui transforme chaque feedback client en décision opérationnelle —
              et chaque client mécontent en client retenu.
            </p>

            {/* Contact mini */}
            <div className="mt-6 space-y-2">
              <Link
                href="mailto:aishaseye074@gmail.com"
                className="group inline-flex items-center gap-2 text-[13px] text-white/70 transition hover:text-orange"
              >
                <Mail className="h-4 w-4 text-orange" strokeWidth="2" />
                aishaseye074@gmail.com
              </Link>
              <br />
              <Link
                href="tel:+221704072668"
                className="group inline-flex items-center gap-2 text-[13px] text-white/70 transition hover:text-orange"
              >
                <Phone className="h-4 w-4 text-orange" strokeWidth="2" />
                +221 70 407 26 68
              </Link>
              <div className="inline-flex items-center gap-2 text-[13px] text-white/70">
                <MapPin className="h-4 w-4 text-orange" strokeWidth="2" />
                Dakar, Sénégal
              </div>
            </div>
          </div>

          {/* Produit links */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange">Produit</h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-orange"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise links */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange">Entreprise</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-orange"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange">Newsletter</h4>
            <p className="mt-4 text-[13px] leading-relaxed text-white/60">
              Une fois par mois. Insights, retours d&apos;expérience, nouveautés produit. Pas de spam.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Votre email pro"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] text-white placeholder-white/40 outline-none transition focus:border-orange"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-orange px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-orange-deep"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth="2.5" />
              </button>
            </form>

            {/* Social */}
            <div className="mt-6">
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">Suivez-nous</div>
              <div className="mt-3 flex gap-2">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-orange hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-orange hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter / X"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-orange hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:border-orange hover:bg-orange hover:text-white"
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
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/50">
            © {new Date().getFullYear()} Qualywatch. Conçu à Dakar avec <span className="text-orange">●</span>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[12px] text-white/50 transition hover:text-orange"
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
