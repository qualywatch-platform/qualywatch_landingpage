import { BellRing, Eye, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";

type Commitment = { icon: LucideIcon; title: string; text: string };

const contentByLocale: Record<"fr" | "en", { title: string; titleAccent: string; intro: string; items: Commitment[]; signature: string[] }> = {
  fr: {
    title: "Avec QualyWatch, chaque client est pris en charge.",
    titleAccent: "Jusqu'au bout.",
    intro:
      "Vos clients n'ont plus à se demander si quelqu'un a lu leur message. Vous n'avez plus à espérer que votre équipe a réagi. Le système s'en assure pour vous.",
    items: [
      {
        icon: ShieldCheck,
        title: "Aucun avis ne se perd",
        text: "Chaque avis est enregistré, daté et confié à un responsable nommé. Il ne peut plus disparaître dans un cahier ou une messagerie personnelle.",
      },
      {
        icon: BellRing,
        title: "Aucun avis ne reste sans suite",
        text: "Vous fixez le délai de réponse. S'il est dépassé, QualyWatch relance le responsable puis alerte sa hiérarchie. Personne ne peut l'ignorer.",
      },
      {
        icon: UserCheck,
        title: "Le client a le dernier mot",
        text: "Une fois le problème traité, c'est votre client qui confirme qu'il est réglé. Pas votre équipe. Vous savez que le travail est vraiment fait.",
      },
      {
        icon: Eye,
        title: "Vous voyez tout, en temps réel",
        text: "Chaque avis, chaque service, chaque délai. Depuis votre bureau ou votre téléphone, vous savez où en est chaque client, à tout moment.",
      },
    ],
    signature: ["Votre client est entendu.", "Votre équipe est responsable.", "Vous en avez la preuve."],
  },
  en: {
    title: "With QualyWatch, every customer is taken care of.",
    titleAccent: "All the way.",
    intro:
      "Your customers no longer wonder whether anyone read their message. You no longer hope your team reacted. The system makes sure of it for you.",
    items: [
      {
        icon: ShieldCheck,
        title: "No feedback gets lost",
        text: "Every piece of feedback is recorded, dated and assigned to a named owner. It can no longer vanish in a notebook or a personal inbox.",
      },
      {
        icon: BellRing,
        title: "No feedback goes unanswered",
        text: "You set the response deadline. If it is missed, QualyWatch reminds the owner, then alerts their manager. Nobody can ignore it.",
      },
      {
        icon: UserCheck,
        title: "The customer has the final say",
        text: "Once the issue is handled, your customer confirms it is solved. Not your team. You know the work is really done.",
      },
      {
        icon: Eye,
        title: "You see everything, in real time",
        text: "Every piece of feedback, every department, every deadline. From your desk or your phone, you know where each customer stands.",
      },
    ],
    signature: ["Your customer is heard.", "Your team is accountable.", "You have the proof."],
  },
};

export function CustomerPromise({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="promesse" className="bg-cream px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text lg:text-[52px]">
            {c.title} <span className="text-orange">{c.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">{c.intro}</p>
        </div>

        <ul className="reveal-children mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {c.items.map((it, i) => (
            <li
              key={it.title}
              className={`reveal-item reveal-delay-${i + 1} flex gap-5 rounded-2xl border border-orange/15 bg-white p-7 lg:p-9`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange">
                <it.icon className="h-5 w-5 text-white" strokeWidth={1.9} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-text lg:text-2xl">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-dim lg:text-base">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="font-display mt-14 flex flex-col gap-1 text-2xl font-semibold leading-snug text-text sm:text-3xl lg:mt-16 lg:flex-row lg:gap-3">
          {c.signature.map((line, i) => (
            <span key={line} className={i === c.signature.length - 1 ? "text-orange-deep" : ""}>
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
