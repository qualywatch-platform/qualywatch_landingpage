import { Apple, Smartphone, Globe, Bell, RefreshCw } from "lucide-react";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const contentByLocale = {
  fr: {
    eyebrow: "Application mobile",
    title: "Vos avis clients dans la poche, partout.",
    intro:
      "Vos managers sont alertés dès qu'un client laisse un avis critique. Ils peuvent intervenir, assigner et répondre directement depuis leur téléphone.",
    features: [
      { icon: Bell, label: "Notifications en temps réel" },
      { icon: RefreshCw, label: "Synchronisé avec le web" },
    ],
    soon: "Bientôt sur",
    alt: "Détail d'un avis client dans l'application mobile QualyWatch",
  },
  en: {
    eyebrow: "Mobile app",
    title: "Your customer feedback in your pocket, everywhere.",
    intro:
      "Your managers are alerted as soon as a customer leaves critical feedback. They can step in, assign and reply straight from their phone.",
    features: [
      { icon: Bell, label: "Real-time notifications" },
      { icon: RefreshCw, label: "Synced with the web app" },
    ],
    soon: "Coming soon to",
    alt: "Customer feedback detail in the QualyWatch mobile app",
  },
};

export function AppStores({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="apps" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-orange">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="flex items-center gap-2.5 text-sm font-semibold text-ink">
              <span className="h-0.5 w-6 bg-ink" aria-hidden />
              {c.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">{c.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/85 lg:text-lg">{c.intro}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: Globe, label: "Web" },
                { icon: Apple, label: "iOS" },
                { icon: Smartphone, label: "Android" },
              ].map((p) => (
                <span key={p.label} className="inline-flex items-center gap-1.5 rounded bg-white/90 px-3 py-1.5 text-sm font-medium text-ink">
                  <p.icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                  {p.label}
                </span>
              ))}
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {c.features.map((f) => (
                <li key={f.label} className="flex items-center gap-2.5 text-[15px] font-medium text-ink">
                  <f.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  {f.label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <div aria-disabled="true" className="inline-flex items-center gap-3 rounded-lg bg-ink px-5 py-3">
                <Apple className="h-6 w-6 text-white" strokeWidth={1.5} aria-hidden />
                <div className="text-left">
                  <div className="text-[11px] text-white/70">{c.soon}</div>
                  <div className="font-display text-[15px] font-semibold leading-tight text-white">App Store</div>
                </div>
              </div>
              <div aria-disabled="true" className="inline-flex items-center gap-3 rounded-lg bg-ink px-5 py-3">
                <svg viewBox="0 0 512 512" className="h-6 w-6 text-white" fill="currentColor" aria-hidden>
                  <path d="M99.617 8.057a50.191 50.191 0 0 0-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0 0 27.31-8.07l266.965-149.736-74.849-74.483z" />
                </svg>
                <div className="text-left">
                  <div className="text-[11px] text-white/70">{c.soon}</div>
                  <div className="font-display text-[15px] font-semibold leading-tight text-white">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center px-8 lg:-mb-24 lg:px-0">
            <IPhoneFrame src="/app-mobile-detail.jpg" alt={c.alt} statusBarBg="#75746F" statusBarText="#FFFFFF" />
          </div>
        </div>
      </div>
    </section>
  );
}
