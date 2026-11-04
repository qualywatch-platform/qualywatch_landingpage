import { EyeOff, MessagesSquare, Unplug } from "lucide-react";

const icons = [MessagesSquare, Unplug, EyeOff];

const contentByLocale = {
  fr: {
    eyebrow: "Le problème",
    title: "L'expérience client est",
    titleAccent: "votre angle mort le plus coûteux.",
    intro: "Chaque jour, vos clients vous disent ce qui ne va pas.",
    introAccent: "La plupart de ces retours n'arrivent jamais à la bonne personne.",
    items: [
      {
        title: "Des retours éparpillés",
        text: "Cahier papier, WhatsApp personnel, e-mails, appels : chaque avis arrive par un canal différent et finit oublié. Personne n'est responsable du suivi.",
      },
      {
        title: "Des mesures sans action",
        text: "Une enquête par trimestre donne un chiffre, mais rien ne relie ce chiffre à une action concrète sur le terrain. Les problèmes sont découverts trop tard.",
      },
      {
        title: "Une qualité impossible à piloter",
        text: "« Les clients sont contents. » Sans données structurées, la satisfaction reste une impression, pas un indicateur que l'on suit service par service.",
      },
    ],
  },
  en: {
    eyebrow: "The problem",
    title: "Customer experience is",
    titleAccent: "your costliest blind spot.",
    intro: "Every day, your customers tell you what is wrong.",
    introAccent: "Most of that feedback never reaches the right person.",
    items: [
      {
        title: "Scattered feedback",
        text: "Paper notebooks, personal WhatsApp, emails, calls: every piece of feedback arrives through a different channel and gets forgotten. Nobody owns the follow-up.",
      },
      {
        title: "Measures without action",
        text: "A quarterly survey gives you a number, but nothing links that number to concrete action on the ground. Issues are found too late.",
      },
      {
        title: "Quality you cannot steer",
        text: "\"Customers are happy.\" Without structured data, satisfaction stays a feeling, not a metric you track department by department.",
      },
    ],
  },
};

export function Problems({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="probleme" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text lg:text-5xl">
            {c.title} <span className="text-orange">{c.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-dim">{c.intro}</p>
          <p className="mt-4 max-w-md border-l-2 border-orange pl-4 text-lg font-medium leading-relaxed text-orange-deep">{c.introAccent}</p>
        </div>

        <ul className="reveal-children border-t-2 border-orange">
          {c.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className={`reveal-item reveal-delay-${i + 1} flex gap-6 border-b border-card-border py-10 lg:py-12`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-soft">
                  <Icon className="h-5 w-5 text-orange-deep" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-text-dim lg:text-[17px]">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
