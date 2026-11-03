import { Infinity, Workflow, Users, Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Pourquoi QualyWatch",
    title: "Pas un énième formulaire. Un outil de pilotage.",
    intro: "Quatre choix de conception qui font la différence dès la première semaine.",
    items: [
      {
        icon: Infinity,
        title: "Continu, pas ponctuel",
        desc: "Fini les enquêtes trimestrielles qui arrivent trop tard. QualyWatch recueille les avis en permanence.",
      },
      {
        icon: Workflow,
        title: "Orienté action",
        desc: "Chaque avis négatif devient une tâche avec un responsable et un délai. Pas de chiffre sans plan d'amélioration.",
      },
      {
        icon: Users,
        title: "Pensé pour le terrain",
        desc: "Conçu pour les managers de proximité et leurs équipes, pas seulement pour la direction.",
      },
      {
        icon: Globe2,
        title: "Adapté à votre marché",
        desc: "En français et en anglais, sur le web et sur mobile, avec des prix et un paiement en francs CFA.",
      },
    ],
  },
  en: {
    eyebrow: "Why QualyWatch",
    title: "Not yet another form. A management tool.",
    intro: "Four design choices that make a difference from the first week.",
    items: [
      {
        icon: Infinity,
        title: "Continuous, not periodic",
        desc: "No more quarterly surveys that arrive too late. QualyWatch collects feedback all the time.",
      },
      {
        icon: Workflow,
        title: "Action-oriented",
        desc: "Every negative review becomes a task with an owner and a deadline. No metric without an improvement plan.",
      },
      {
        icon: Users,
        title: "Built for the field",
        desc: "Designed for front-line managers and their teams, not just for the boardroom.",
      },
      {
        icon: Globe2,
        title: "Made for your market",
        desc: "In French and English, on web and mobile, with prices and payment in CFA francs.",
      },
    ],
  },
};

export function Differentiators({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="pourquoi" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <div className="mt-14 grid border-l border-t border-card-border sm:grid-cols-2 lg:mt-20">
          {c.items.map((it) => (
            <div key={it.title} className="flex gap-6 border-b border-r border-card-border p-8 lg:p-10">
              <IconTile icon={it.icon} />
              <div>
                <h3 className="font-display text-lg font-semibold text-text">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-dim">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
