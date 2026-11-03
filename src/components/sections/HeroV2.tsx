import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const contentByLocale = {
  fr: {
    eyebrow: "Gestion des avis et réclamations clients",
    title: "Ne laissez plus vos clients",
    titleAccent: "partir en silence.",
    intro:
      "Vos clients donnent leur avis en scannant un QR code. QualyWatch l'attribue au bon service, suit son traitement et demande au client de confirmer que le problème est réglé.",
    primary: "Essayer gratuitement",
    secondary: "Demander une démo",
    note: "Gratuit jusqu'à 100 avis par mois. Sans carte bancaire.",
    webAlt: "Liste des avis clients dans l'espace manager de QualyWatch",
    mobileAlt: "Liste des avis clients dans l'application mobile QualyWatch",
  },
  en: {
    eyebrow: "Customer feedback and complaint management",
    title: "Stop letting your customers",
    titleAccent: "leave in silence.",
    intro:
      "Customers share feedback by scanning a QR code. QualyWatch routes it to the right department, tracks its resolution and asks the customer to confirm the issue is solved.",
    primary: "Start for free",
    secondary: "Request a demo",
    note: "Free up to 100 reviews per month. No credit card required.",
    webAlt: "Customer feedback list in the QualyWatch manager workspace",
    mobileAlt: "Customer feedback list in the QualyWatch mobile app",
  },
};

export function HeroV2({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section className="relative border-b border-card-border bg-cream px-6 pt-32 lg:px-16 lg:pt-40">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2.5 text-sm font-semibold text-orange-deep"><span className="h-0.5 w-6 bg-orange" aria-hidden />{c.eyebrow}</p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
            {c.title} <span className="text-orange-deep">{c.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">{c.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="https://app.qualywatch.com/auth/register"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-orange-deep px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#A9460C]"
            >
              {c.primary}
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-[#C9CED6] px-6 text-[15px] font-semibold text-text transition-colors hover:border-text"
            >
              {c.secondary}
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-mute">{c.note}</p>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-card-border bg-bg lg:mr-40">
            <div className="flex h-9 items-center gap-1.5 border-b border-card-border px-4" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4D7DC]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4D7DC]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4D7DC]" />
            </div>
            <Image
              src="/app-web-feedbacks.jpg"
              alt={c.webAlt}
              width={2880}
              height={1800}
              priority
              sizes="(min-width: 1280px) 1000px, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 hidden lg:block">
            <IPhoneFrame src="/app-mobile-avis.jpg" alt={c.mobileAlt} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
