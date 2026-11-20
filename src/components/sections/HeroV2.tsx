import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, QrCode, Smile, Star } from "lucide-react";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const contentByLocale = {
  fr: {
    eyebrow: "Pilotage de la qualité de service",
    title: "La qualité de votre établissement,",
    titleAccent: "enfin sous contrôle.",
    intro:
      "Avis, réclamations, demandes et suggestions arrivent au même endroit. Chacun est confié à la bonne personne, traité dans les délais et suivi jusqu'au bout. Vous voyez chaque jour ce qui va, ce qui coince et qui s'en occupe.",
    primary: "Essayer gratuitement",
    secondary: "Demander une démo",
    note: "Gratuit jusqu'à 100 avis par mois. Sans carte bancaire.",
    webAlt: "Liste des avis clients dans l'espace manager de QualyWatch",
    mobileAlt: "Liste des avis clients dans l'application mobile QualyWatch",
    qr: { title: "Scannez, donnez votre avis", text: "Sans application" },
    review: { quote: "« Accueil rapide, chambre impeccable. Merci à Awa ! »", author: "Avis client · il y a 2 min" },
    satisfaction: { title: "Très satisfait", text: "Résolution validée par le client" },
  },
  en: {
    eyebrow: "Service quality management",
    title: "Your business's quality,",
    titleAccent: "finally under control.",
    intro:
      "Reviews, complaints, requests and suggestions land in one place. Each one goes to the right person, is handled on time and tracked to the end. Every day you see what works, what's stuck and who is on it.",
    primary: "Start for free",
    secondary: "Request a demo",
    note: "Free up to 100 reviews per month. No credit card required.",
    webAlt: "Customer feedback list in the QualyWatch manager workspace",
    mobileAlt: "Customer feedback list in the QualyWatch mobile app",
    qr: { title: "Scan, share your feedback", text: "No app needed" },
    review: { quote: "“Quick check-in, spotless room. Thanks to Awa!”", author: "Customer review · 2 min ago" },
    satisfaction: { title: "Very satisfied", text: "Resolution confirmed by the customer" },
  },
};

export function HeroV2({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section className="relative isolate overflow-hidden px-6 pt-24 sm:pt-28 lg:px-16 lg:pt-28">
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
        {/* Floating cards at the far edges, beside the headline: QR code, a review, customer satisfaction */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
          <div className="absolute -left-4 top-10 -rotate-3">
            <div className="tour-float flex w-[200px] items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_18px_40px_-18px_rgba(15,14,12,0.45)]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink">
                <QrCode className="h-8 w-8 text-white" strokeWidth={1.6} />
              </span>
              <span className="flex flex-col text-left">
                <span className="text-[13px] font-semibold leading-tight text-ink">{c.qr.title}</span>
                <span className="mt-0.5 text-[11px] text-text-dim">{c.qr.text}</span>
              </span>
            </div>
          </div>
          <div className="absolute left-2 top-[300px] rotate-2">
            <div className="tour-float tour-float-2 w-[200px] rounded-2xl bg-white p-4 text-left shadow-[0_18px_40px_-18px_rgba(15,14,12,0.45)]">
              <span className="flex gap-0.5 text-orange">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                ))}
              </span>
              <span className="mt-2 block text-[12px] leading-snug text-ink">{c.review.quote}</span>
              <span className="mt-2 block text-[10px] text-text-mute">{c.review.author}</span>
            </div>
          </div>
          <div className="absolute right-0 top-[150px] rotate-3">
            <div className="tour-float tour-float-3 flex w-[200px] items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_18px_40px_-18px_rgba(15,14,12,0.45)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-soft">
                <Smile className="h-6 w-6 text-orange" strokeWidth={2} />
              </span>
              <span className="flex flex-col text-left">
                <span className="flex items-center gap-1 text-[13px] font-semibold leading-tight text-ink">
                  {c.satisfaction.title}
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" strokeWidth={2.2} />
                </span>
                <span className="mt-0.5 text-[11px] leading-snug text-text-dim">{c.satisfaction.text}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-ink px-4 py-1.5 text-[13px] font-medium text-white">
            {c.eyebrow}
          </span>
          <h1 className="font-display mt-5 text-[38px] font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[52px]">
            {c.title}
            <br />
            <span className="text-white">{c.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">{c.intro}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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

        <div className="relative mx-auto mt-10 max-w-6xl">
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
              className="block h-[200px] w-full object-cover object-top sm:h-[300px] lg:h-[320px]"
            />
          </div>
          <div className="absolute bottom-0 right-6 hidden overflow-hidden lg:block">
            <IPhoneFrame src="/app-mobile-avis.jpg" alt={c.mobileAlt} priority size="sm" className="translate-y-36" />
          </div>
        </div>
      </div>
    </section>
  );
}
