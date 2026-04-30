"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#fonctionnalites", label: "Produit" },
  { href: "#secteurs", label: "Solutions" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#histoire", label: "Entreprise" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function NavbarV2() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      {/* DARK pill — translucent black with white text */}
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/15 py-2 pl-4 pr-2 shadow-card backdrop-blur-xl sm:py-2.5 sm:pl-6 sm:pr-2.5"
        style={{ background: "rgba(15, 14, 12, 0.78)" }}
      >
        {/* Logo — QualyWatch smiley + white text */}
        <Link href="/v2" className="group inline-flex items-center gap-2.5">
          <span className="relative inline-flex h-10 w-10 items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/qualywatch-logo.png"
              alt="QualyWatch"
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </span>
          <span
            className="font-display inline-flex flex-wrap items-center gap-2.5 text-xl font-bold tracking-tight sm:text-[1.35rem]"
            style={{ color: "#FFFFFF" }}
          >
            Qualywatch
            <span
              className="inline-flex items-center rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-orange sm:px-3.5 sm:text-[11px]"
            >
              Soft launch
            </span>
          </span>
        </Link>

        {/* Center nav — WHITE text default, ORANGE hover */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition hover:bg-orange/15 hover:text-orange"
              style={{ color: "#FFFFFF" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA — orange filled, white text */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-orange px-3 py-1.5 text-[12px] font-bold btn-lift hover:bg-orange-deep sm:px-5 sm:py-2.5 sm:text-[13px]"
            style={{ color: "#FFFFFF" }}
          >
            <span className="sm:hidden">Essayer</span>
            <span className="hidden sm:inline">Essayer gratuitement</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth="2.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
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
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-3.5 py-3 text-base font-semibold transition hover:bg-orange/15 hover:text-orange"
                style={{ color: "#FFFFFF" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
