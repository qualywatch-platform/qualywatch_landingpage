import { Inbox, Hourglass, Gauge } from "lucide-react";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Le problème",
    title: "L'expérience client est votre angle mort le plus coûteux.",
    intro:
      "Chaque jour, vos clients vous disent ce qui ne va pas. La plupart de ces retours n'arrivent jamais à la bonne personne.",
    items: [
      {
        icon: Inbox,
        title: "Des retours éparpillés",
        text: "Cahier papier, WhatsApp personnel, e-mails, appels : chaque avis arrive par un canal différent et finit oublié.",
        points: ["Aucun historique centralisé", "Personne n'est responsable du suivi"],
      },
      {
        icon: Hourglass,
        title: "Des mesures sans action",
        text: "Une enquête par trimestre donne un chiffre, mais rien ne relie ce chiffre à une action concrète sur le terrain.",
        points: ["Problèmes découverts trop tard", "Aucun délai de traitement suivi"],
      },
      {
        icon: Gauge,
        title: "Une qualité impossible à piloter",
        text: "« Les clients sont contents. » Sans données structurées, la satisfaction reste une impression, pas un indicateur.",
        points: ["Pas de score par service", "Pas de comparaison dans le temps"],
      },
    ],
  },
  en: {
    eyebrow: "The problem",
    title: "Customer experience is your costliest blind spot.",
    intro:
      "Every day, your customers tell you what is wrong. Most of that feedback never reaches the right person.",
    items: [
      {
        icon: Inbox,
        title: "Scattered feedback",
        text: "Paper notebooks, personal WhatsApp, emails, calls: every piece of feedback arrives through a different channel and gets forgotten.",
        points: ["No central history", "Nobody owns the follow-up"],
      },
      {
        icon: Hourglass,
        title: "Measures without action",
        text: "A quarterly survey gives you a number, but nothing links that number to concrete action on the ground.",
        points: ["Issues found too late", "No resolution time tracked"],
      },
      {
        icon: Gauge,
        title: "Quality you cannot steer",
        text: "\"Customers are happy.\" Without structured data, satisfaction stays a feeling, not a metric.",
        points: ["No score per department", "No trend over time"],
      },
    ],
  },
};

export function Problems({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="probleme" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold text-orange-deep"><span className="h-0.5 w-6 bg-orange" aria-hidden />{c.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">
              {c.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">{c.intro}</p>
        </div>

        <div className="mt-14 grid border-t border-card-border lg:mt-20 lg:grid-cols-3">
          {c.items.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col gap-4 border-b border-card-border py-10 lg:border-b-0 lg:py-12 ${
                i > 0 ? "lg:border-l lg:pl-10" : ""
              } ${i < c.items.length - 1 ? "lg:pr-10" : ""}`}
            >
              <div className="flex items-center justify-between">
                <IconTile icon={item.icon} />
                <span className="text-sm font-medium tabular-nums text-orange-deep">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{item.text}</p>
              <ul className="mt-2 flex flex-col gap-2 border-t border-card-border pt-4">
                {item.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-text-dim">
                    <span className="h-px w-3 shrink-0 bg-orange" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
