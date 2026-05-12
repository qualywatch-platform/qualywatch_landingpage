"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Languages } from "lucide-react";
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
  const badgeLabel = locale === "fr" ? "Soft launch" : "Soft launch";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      {/* DARK pill — translucent black with white text */}
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border border-white/15 py-2 pl-3 pr-2 shadow-card backdrop-blur-xl sm:gap-4 sm:py-2.5 sm:pl-6 sm:pr-2.5"
        style={{ background: "rgba(15, 14, 12, 0.78)" }}
      >
        {/* Logo — QualyWatch smiley + white text */}
        <Link href={getLocalizedPath(locale, "/")} className="group inline-flex min-w-0 items-center gap-2 sm:gap-2.5">
          <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
            <Image
              src="/qualywatch-logo.png"
              alt="QualyWatch"
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </span>
          <span
            className="font-display inline-flex min-w-0 items-center gap-1.5 text-[0.96rem] font-bold tracking-tight sm:gap-2.5 sm:text-[1.35rem]"
            style={{ color: "#FFFFFF" }}
          >
            <span className="truncate whitespace-nowrap">Qualywatch</span>
            <span
              className="hidden shrink-0 items-center whitespace-nowrap rounded-full border border-orange/30 bg-orange/10 px-2 py-0.5 text-[8.5px] font-black uppercase tracking-[0.16em] text-orange sm:inline-flex sm:px-3.5 sm:py-1 sm:text-[11px] sm:tracking-[0.22em]"
            >
              {badgeLabel}
            </span>
          </span>
        </Link>

        {/* Center nav — WHITE text default, ORANGE hover */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={getLocalizedPath(locale, l.href)}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition hover:bg-orange/15 hover:text-orange"
              style={{ color: "#FFFFFF" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA — orange filled, white text */}
        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="https://app.qualywatch.com"
            className="group hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-orange px-5 py-2.5 text-[13px] font-bold btn-lift hover:bg-orange-deep sm:inline-flex"
            style={{ color: "#FFFFFF" }}
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth="2.5" />
          </Link>

          <Link
            href={switchHref}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            className="hidden h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/12 hover:text-white sm:inline-flex"
          >
            <Languages className="h-3.5 w-3.5" strokeWidth="2.4" />
            {switchLabel}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={locale === "fr" ? "Menu" : "Menu"}
            className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/15 lg:hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {mobileOpen ? <X className="h-4 w-4" strokeWidth="2.5" /> : <Menu className="h-4 w-4" strokeWidth="2.5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/15 p-4 shadow-card backdrop-blur-xl lg:hidden"
          style={{ background: "rgba(15, 14, 12, 0.85)" }}
        >
          <div className="mb-3 flex items-center justify-between gap-3 px-1">
            <span
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-orange"
            >
              {badgeLabel}
            </span>
            <Link
              href={switchHref}
              onClick={() => setMobileOpen(false)}
              aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
              className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/12 hover:text-white"
            >
              <Languages className="h-3.5 w-3.5" strokeWidth="2.4" />
              {switchLabel}
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={getLocalizedPath(locale, l.href)}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-3.5 py-3 text-base font-semibold transition hover:bg-orange/15 hover:text-orange"
                style={{ color: "#FFFFFF" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://app.qualywatch.com"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-orange px-4 py-3 text-base font-bold text-white transition hover:bg-orange-deep"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
