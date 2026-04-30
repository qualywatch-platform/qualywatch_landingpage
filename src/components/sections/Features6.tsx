import { Layers, Bell, BarChart3, Brain, ShieldCheck, Trophy, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Collecte multi-canal",
    description:
      "QR code en magasin, WhatsApp Business, email, SMS, lien public. Vos clients laissent un avis depuis leur canal préféré, en moins de 60 secondes — sans app à installer.",
    highlight: "5 canaux",
    accent: "from-orange/15",
  },
  {
    icon: Bell,
    title: "Alertes temps réel",
    description:
      "Push notifications mobile + web dès qu'un feedback critique arrive. Le bon manager est prévenu en moins de 30 secondes — pas un email au PDG en copie.",
    highlight: "< 30 s",
    accent: "from-blue-soft/40",
  },
  {
    icon: BarChart3,
    title: "Dashboard NPS & CSAT",
    description:
      "Suivez vos scores NPS, CSAT et satisfaction par service, équipe, période. Tendances, comparatifs, anomalies — chaque manager voit uniquement ce qui le concerne.",
    highlight: "Temps réel",
    accent: "from-success-soft",
  },
  {
    icon: Brain,
    title: "IA — Analyse & Chat",
    description:
      "Chaque feedback est classé automatiquement (sentiment, sujet, urgence). Le Chat IA répond à vos questions métier : « Quel service a le plus chuté en mai ? ».",
    highlight: "Gemini · Groq",
    accent: "from-orange/15",
  },
  {
    icon: ShieldCheck,
    title: "SLA & escalation auto",
    description:
      "Définissez les délais de traitement par priorité. Un feedback non traité à temps remonte automatiquement au manager supérieur. Plus jamais d'oubli, plus jamais d'angle mort.",
    highlight: "3 niveaux",
    accent: "from-blue-soft/40",
  },
  {
    icon: Trophy,
    title: "Gamification KaliPoints",
    description:
      "Vos clients gagnent des points en laissant un avis. Vos employés reçoivent badges et leaderboard quand ils sont bien notés. La qualité devient un sport d'équipe.",
    highlight: "Badges · Top 10",
    accent: "from-success-soft",
  },
];

export function Features6() {
  return (
    <section id="fonctionnalites" className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32">
      {/* Decorative background — concentric rings + dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/8"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/6"
      />
      <div
        aria-hidden
        className="dotted-grid-dark pointer-events-none absolute inset-0 -z-10 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.4), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.35), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-children mx-auto mb-16 max-w-3xl text-center">
          <p className="reveal-item reveal-delay-1 font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
            № 02 · La solution simple
          </p>
          <h2 className="reveal-item reveal-delay-2 font-display mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
            6 fonctionnalités <span className="italic text-orange">puissantes.</span>
          </h2>
          <p className="reveal-item reveal-delay-3 mt-5 text-base leading-relaxed text-text-dim lg:text-lg">
            Plus de questionnaires papiers interminables. Juste un scan, un avis, et une action immédiate.
          </p>
        </div>

        <div className="reveal-children grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal-item reveal-delay-${(i % 6) + 1} card-base group relative flex flex-col overflow-hidden rounded-3xl p-7 btn-lift hover:border-orange/40`}
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              {/* Top gradient ribbon — subtle, only on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange via-orange/60 to-transparent opacity-0 transition group-hover:opacity-100"
              />

              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-glow text-orange transition group-hover:bg-orange group-hover:text-white">
                  <f.icon className="h-6 w-6" strokeWidth="2" />
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                  {f.highlight}
                </span>
              </div>

              <h3 className="font-display mt-6 text-lg font-bold text-text">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">{f.description}</p>

              <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-orange opacity-0 transition group-hover:opacity-100">
                En savoir plus
                <ArrowRight className="h-3.5 w-3.5" strokeWidth="2.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
