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
    <section className="relative isolate overflow-hidden px-6 pt-28 sm:pt-32 lg:px-16 lg:pt-36">
      {/* Background: orange with a light square grid and warm light spots */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.22) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.22) 2px, transparent 2px), radial-gradient(circle at 30% 20%, rgba(255,180,100,0.35), transparent 60%), radial-gradient(circle at 70% 80%, rgba(200,84,15,0.30), transparent 60%), #FA700D",
          backgroundSize: "90px 90px, 90px 90px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 opacity-80 blur-3xl"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,250,235,0.9), rgba(255,225,180,0.35) 35%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-ink px-4 py-1.5 text-[13px] font-medium text-white">
            {c.eyebrow}
          </span>
          <h1 className="font-display mt-5 text-[38px] font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[60px]">
            {c.title}
            <br />
            <span className="text-white">{c.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{c.intro}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://app.qualywatch.com/auth/register"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-black"
            >
              {c.primary}
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-cream"
            >
              {c.secondary}
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-ink/75">{c.note}</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl lg:mt-14">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-white/60 bg-white shadow-[0_-20px_60px_-30px_rgba(15,14,12,0.45)] lg:mx-24">
            <div className="flex h-9 items-center gap-1.5 border-b border-card-border bg-[#F6F7F9] px-4" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4D7DC]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4D7DC]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4D7DC]" />
              <span className="ml-4 hidden h-5 max-w-sm flex-1 rounded bg-white px-3 text-[11px] leading-5 text-text-mute sm:block">app.qualywatch.com</span>
            </div>
            <Image
              src="/app-web-feedbacks.jpg"
              alt={c.webAlt}
              width={2880}
              height={1800}
              priority
              sizes="(min-width: 1280px) 960px, 100vw"
              className="block h-[240px] w-full object-cover object-top sm:h-[380px] lg:h-[420px]"
            />
          </div>
          <div className="absolute bottom-0 right-6 hidden overflow-hidden lg:block">
            <IPhoneFrame src="/app-mobile-avis.jpg" alt={c.mobileAlt} priority size="sm" className="translate-y-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
