import Image from "next/image";
import { Star, TrendingUp, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aminata K.",
    title: "Directrice",
    company: "Clinique Santé Plus",
    city: "Dakar",
    quote:
      "Un patient mécontent a été rattrapé en 4 minutes grâce à l'alerte temps réel. Il est revenu la semaine suivante. Sans Qualywatch, on l'aurait perdu.",
    metric: "4 min",
    metricLabel: "rattrapage",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    accent: "#FA700D",
  },
  {
    name: "Jean-Marc L.",
    title: "Directeur F&B",
    company: "Hôtel Ivoire",
    city: "Abidjan",
    quote:
      "Le leaderboard a tout changé. Nos serveurs se battent pour être en tête du classement. La satisfaction a augmenté de 23% en un trimestre.",
    metric: "+23%",
    metricLabel: "satisfaction",
    photo: "https://images.unsplash.com/photo-1568585219057-9206c0bb91d6?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    accent: "#FA700D",
  },
  {
    name: "Ousmane D.",
    title: "Gérant",
    company: "Le Baobab Lounge",
    city: "Bamako",
    quote:
      "On recevait 3 avis Google par mois. Avec Qualywatch, on en collecte 15 par semaine. Notre note est passée de 4.1 à 4.8 en 2 mois.",
    metric: "+460%",
    metricLabel: "avis Google",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    accent: "#FA700D",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 12 · Témoignages</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Pas du marketing. <br />
              <span className="italic text-orange">Des résultats.</span>
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-text-dim lg:text-lg">
              <span className="font-bold text-text">350+ enseignes</span> ·{" "}
              <span className="font-bold text-text">2.4M de feedbacks</span> ·{" "}
              <span className="font-bold text-text">12 mois de données</span> — par les opérateurs qui pilotent leur enseigne au quotidien.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Méthodologie ouverte · Données vérifiables
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`card-base group relative flex flex-col overflow-hidden rounded-3xl p-6 transition hover:border-orange/40 lg:p-8 ${
                i === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              {/* Decorative giant quote mark */}
              <Quote
                aria-hidden
                className="pointer-events-none absolute right-4 top-4 h-20 w-20 text-orange/[0.08]"
                fill="currentColor"
                strokeWidth="0"
              />

              {/* Subtle accent gradient corner */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full opacity-50 blur-3xl"
                style={{
                  background: `radial-gradient(closest-side, ${t.accent}33, transparent 70%)`,
                }}
              />

              {/* Top — Photo + name */}
              <div className="relative flex items-center gap-4">
                <div
                  className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full"
                  style={{
                    boxShadow: `0 0 0 3px var(--card-bg), 0 0 0 5px ${t.accent}`,
                  }}
                >
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base font-bold text-text">{t.name}</div>
                  <div className="mt-0.5 text-[11px] text-text-dim">{t.title}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-mute">
                    {t.company} · {t.city}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="relative mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-orange text-orange" />
                ))}
                <span className="ml-2 text-[10px] font-mono font-medium uppercase tracking-widest text-text-mute">
                  5.0 / 5
                </span>
              </div>

              {/* Quote — softer */}
              <blockquote className="font-display relative mt-4 flex-1 text-[15.5px] leading-[1.55] text-text/85 lg:text-[16.5px]">
                <span aria-hidden className="absolute -left-1 top-0 -translate-y-2 text-3xl font-medium text-orange/60">
                  “
                </span>
                <span className="relative pl-4">{t.quote}</span>
              </blockquote>

              {/* Metric — bottom strip (softer) */}
              <div
                className="mt-6 flex items-center justify-between rounded-2xl p-4"
                style={{
                  background: "rgba(250,112,13,0.06)",
                  border: "1px solid rgba(250,112,13,0.15)",
                }}
              >
                <div className="flex items-baseline gap-1.5">
                  <TrendingUp className="h-4 w-4 text-orange" strokeWidth="2.5" />
                  <span className="font-display text-2xl font-extrabold text-orange">{t.metric}</span>
                </div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-orange/75">
                  {t.metricLabel}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
