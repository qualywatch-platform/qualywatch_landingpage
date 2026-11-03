import { Inbox, Search, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "La méthode",
    title: "Trois piliers pour reprendre le contrôle.",
    intro:
      "QualyWatch relie le ressenti de vos clients au fonctionnement de vos équipes, en continu, autour d'une seule donnée : la satisfaction.",
    pillars: [
      {
        icon: Inbox,
        badge: "Collecter",
        title: "Recevez les avis sur tous vos canaux.",
        desc: "QR codes, WhatsApp, e-mail, formulaire web : tout arrive dans un seul flux, classé par service.",
      },
      {
        icon: Search,
        badge: "Analyser",
        title: "Comprenez ce qui compte.",
        desc: "L'analyse automatique détecte le sentiment, le sujet et l'urgence. Une synthèse claire chaque semaine.",
      },
      {
        icon: Zap,
        badge: "Agir",
        title: "Traitez vite, jusqu'au bout.",
        desc: "Réponse en un clic, escalade automatique, reconnaissance des équipes. Le client est recontacté avant de partir.",
      },
    ],
  },
  en: {
    eyebrow: "The method",
    title: "Three pillars to take back control.",
    intro:
      "QualyWatch continuously connects how your customers feel to how your teams operate, around a single metric: satisfaction.",
    pillars: [
      {
        icon: Inbox,
        badge: "Collect",
        title: "Receive feedback on every channel.",
        desc: "QR codes, WhatsApp, email, web form: everything lands in a single stream, sorted by department.",
      },
      {
        icon: Search,
        badge: "Analyze",
        title: "Understand what matters.",
        desc: "Automatic analysis detects sentiment, topic and urgency. A clear summary every week.",
      },
      {
        icon: Zap,
        badge: "Act",
        title: "Resolve fast, all the way.",
        desc: "One-click replies, automatic escalation, team recognition. The customer is contacted before they leave.",
      },
    ],
  },
};

export function Pillars({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="solution" className="border-y border-card-border bg-mist px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-3">
          {c.pillars.map((p, i) => (
            <div key={p.badge} className="flex flex-col gap-4 rounded-lg border border-card-border bg-bg p-8 lg:p-10">
              <div className="flex items-center justify-between">
                <IconTile icon={p.icon} />
                <span className="text-sm font-medium tabular-nums text-orange-deep">0{i + 1}</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-orange-deep">{p.badge}</p>
              <h3 className="font-display text-xl font-semibold leading-snug text-text">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
