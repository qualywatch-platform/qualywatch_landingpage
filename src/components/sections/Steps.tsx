import { SectionHeader } from "@/components/SectionHeader";

const contentByLocale = {
  fr: {
    eyebrow: "Comment ça marche",
    title: "De l'avis client à l'action en 4 étapes.",
    intro:
      "Un fonctionnement simple, pensé pour les équipes terrain autant que pour la direction. Pas de formation longue, pas d'intégration complexe.",
    steps: [
      { title: "Connectez vos canaux", desc: "Ajoutez vos points de contact : QR code sur place, lien sur votre site, WhatsApp." },
      { title: "Collectez en continu", desc: "Les avis remontent automatiquement. Pas de saisie manuelle, aucune donnée perdue." },
      { title: "Suivez en temps réel", desc: "Scores, tendances et alertes. Chaque manager voit ce qui le concerne." },
      { title: "Agissez et mesurez", desc: "Assignez des responsables, déclenchez des actions correctives et mesurez leur effet." },
    ],
  },
  en: {
    eyebrow: "How it works",
    title: "From customer feedback to action in 4 steps.",
    intro:
      "A simple flow, designed for field teams as much as for executives. No long onboarding, no complex integration.",
    steps: [
      { title: "Connect your channels", desc: "Add your touchpoints: on-site QR code, link on your website, WhatsApp." },
      { title: "Collect continuously", desc: "Feedback flows in automatically. No manual entry, no data lost." },
      { title: "Track in real time", desc: "Scores, trends and alerts. Every manager sees what concerns them." },
      { title: "Act and measure", desc: "Assign owners, trigger corrective actions and measure their effect." },
    ],
  },
};

export function Steps({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="comment" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0">
          {c.steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-text pt-6 lg:pr-10">
              <span className="text-sm font-semibold tabular-nums text-orange-deep">0{i + 1}</span>
              <h3 className="font-display mt-3 text-lg font-semibold text-text">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-dim">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
