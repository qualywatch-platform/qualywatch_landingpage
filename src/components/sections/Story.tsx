import Image from "next/image";

const contentByLocale = {
  fr: {
    eyebrow: "Notre histoire",
    title: (
      <>
        La vision derrière QualyWatch.
      </>
    ),
    quote:
      "« J'ai vu trop d'entreprises perdre leurs meilleurs clients sans le savoir. QualyWatch existe pour que ça n'arrive plus. »",
    body: [
      "Un client mécontent se plaint rarement : il s'en va. Puis il en parle autour de lui, laisse un avis négatif en ligne ou publie sur les réseaux sociaux. L'entreprise perd sa réputation en silence, sans avoir eu l'occasion de réagir.",
      "QualyWatch n'est pas un énième formulaire. C'est l'outil qui transforme chaque avis en décision, et chaque client mécontent en client retenu.",
    ],
    signature: "La satisfaction n'est pas un indicateur. C'est la promesse que vous tenez à vos clients.",
    role: "Fondatrice et CEO, QualyWatch",
    alt: "Aissatou Seye, fondatrice de QualyWatch",
    facts: [
      { label: "Fondation", value: "2024" },
      { label: "Conçu à", value: "Dakar" },
      { label: "Lancement", value: "2026" },
    ],
  },
  en: {
    eyebrow: "Our story",
    title: (
      <>
        The vision behind QualyWatch.
      </>
    ),
    quote:
      "\"I've seen too many companies lose their best customers without ever knowing. QualyWatch exists so that it doesn't happen again.\"",
    body: [
      "An unhappy customer rarely complains: they just leave. Then they tell people around them, post a negative review online or share it on social media. The company loses its reputation in silence, with no chance to react.",
      "QualyWatch isn't yet another form. It's the tool that turns every piece of feedback into a decision, and every unhappy customer into a retained one.",
    ],
    signature: "Satisfaction isn't a metric. It's the promise you keep to your customers.",
    role: "Founder and CEO, QualyWatch",
    alt: "Aissatou Seye, founder of QualyWatch",
    facts: [
      { label: "Founded", value: "2024" },
      { label: "Built in", value: "Dakar" },
      { label: "Launch", value: "2026" },
    ],
  },
};

export function Story({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="histoire" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="mx-auto w-full max-w-[460px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-orange-soft">
            <Image src="/founder.jpg" alt={c.alt} fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover object-top" />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-card-border pt-4">
            <span className="font-display text-base font-semibold text-text">Aissatou Seye</span>
            <span className="text-sm text-text-dim">{c.role}</span>
          </figcaption>
        </figure>

        <div>
                    <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{c.title}</h2>
          <blockquote className="font-display mt-8 border-l-2 border-orange pl-6 text-xl leading-snug text-text lg:text-2xl">
            {c.quote}
          </blockquote>
          {c.body.map((p) => (
            <p key={p} className="mt-5 text-base leading-relaxed text-text-dim">
              {p}
            </p>
          ))}
          <p className="mt-5 text-base font-semibold text-orange-deep">{c.signature}</p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-card-border pt-6">
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-text-mute">{f.label}</dt>
                <dd className="font-display mt-1 text-2xl font-semibold text-text">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
