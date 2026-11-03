"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Locale, getLocalizedPath, swapLocaleInPath } from "@/lib/i18n";

const linkLabels = {
  fr: [
    { href: "#fonctionnalites", label: "Produit" },
    { href: "#secteurs", label: "Solutions" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#histoire", label: "Entreprise" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
  en: [
    { href: "#fonctionnalites", label: "Product" },
    { href: "#secteurs", label: "Solutions" },
    { href: "#tarifs", label: "Pricing" },
    { href: "#histoire", label: "Company" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
} satisfies Record<Locale, Array<{ href: string; label: string }>>;

export function NavbarV2({ locale = "fr" }: { locale?: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const links = linkLabels[locale];
  const switchLabel = locale === "fr" ? "EN" : "FR";
  const switchHref = swapLocaleInPath(pathname, locale === "fr" ? "en" : "fr");
  const ctaLabel = locale === "fr" ? "Essayer gratuitement" : "Start for free";
  const loginLabel = locale === "fr" ? "Connexion" : "Log in";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-16">
        <Link href={getLocalizedPath(locale, "/")} className="inline-flex shrink-0 items-center gap-2.5">
          <Image src="/qualywatch-logo.png" alt="" width={64} height={64} className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-semibold tracking-tight text-text">QualyWatch</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={getLocalizedPath(locale, l.href)}
              className="text-sm font-medium text-text-dim transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={switchHref}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            className="hidden h-9 items-center px-2 text-xs font-semibold text-text-dim transition-colors hover:text-text sm:inline-flex"
          >
            {switchLabel}
          </Link>
          <Link
            href="https://app.qualywatch.com/auth/login"
            className="hidden h-9 items-center px-2 text-sm font-medium text-text transition-colors hover:text-orange-deep sm:inline-flex"
          >
            {loginLabel}
          </Link>
          <Link
            href="https://app.qualywatch.com/auth/register"
            className="hidden h-10 items-center rounded-md bg-orange-deep px-4 text-sm font-semibold text-white transition-colors hover:bg-[#A9460C] sm:inline-flex"
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-card-border text-text lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-card-border bg-bg px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={getLocalizedPath(locale, l.href)}
                onClick={() => setMobileOpen(false)}
                className="border-b border-card-border py-3.5 text-base font-medium text-text"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="https://app.qualywatch.com/auth/register"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-md bg-orange-deep text-base font-semibold text-white"
            >
              {ctaLabel}
            </Link>
            <div className="flex items-center justify-between">
              <Link href="https://app.qualywatch.com/auth/login" className="py-2 text-sm font-medium text-text">
                {loginLabel}
              </Link>
              <Link href={switchHref} onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-text-dim">
                {switchLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
