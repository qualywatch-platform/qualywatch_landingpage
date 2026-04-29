import { Infinity, Workflow, Users, Globe2, Sparkles } from "lucide-react";

const items = [
  {
    icon: Infinity,
    title: "Continu, pas ponctuel",
    desc: "Fini les enquêtes trimestrielles qui arrivent trop tard. Qualywatch écoute en permanence.",
    detail: "24/7 · Auto-collecte",
    metric: "100%",
    metricLabel: "de couverture",
  },
  {
    icon: Workflow,
    title: "Actionnable, pas décoratif",
    desc: "Chaque score est relié à une action. Pas de chiffre sans plan d'amélioration.",
    detail: "Alerte → Action → Mesure",
    metric: "< 5 min",
    metricLabel: "réaction terrain",
  },
  {
    icon: Users,
    title: "Terrain d'abord",
    desc: "Conçu pour les managers de proximité, pas seulement pour les comités de direction.",
    detail: "Mobile · Rapide · Clair",
    metric: "5 rôles",
    metricLabel: "RBAC granulaire",
  },
  {
    icon: Globe2,
    title: "Pensé pour les entreprises du monde",
    desc: "Multilingue, mobile-first, paiements locaux, hébergement multi-régions. Que vous soyez à Dakar, Casablanca, Paris ou São Paulo — Qualywatch s'adapte.",
    detail: "Multi-langue · Multi-devises · Multi-régions",
    metric: "350+",
    metricLabel: "enseignes en prod",
  },
];

export function Differentiators() {
  return (
    <section id="pourquoi" className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 05 · Pourquoi Qualywatch</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Pas un énième formulaire.<br />
              <span className="italic text-orange">Un système de pilotage.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            Quatre choix de conception qui nous distinguent — pas des bullet points marketing,
            des décisions architecturales que vous sentirez dès la première semaine.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="card-base group relative flex overflow-hidden rounded-3xl p-7 hover:border-orange/40 lg:p-8"
            >
              {/* Big number watermark */}
              <span
                aria-hidden
                className="font-display pointer-events-none absolute right-6 top-2 text-[120px] font-extrabold leading-none text-orange/[0.07] transition group-hover:text-orange/[0.13]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Left icon */}
              <div className="relative z-10 mr-6 shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-glow text-orange transition group-hover:bg-orange group-hover:text-white">
                  <it.icon className="h-7 w-7" strokeWidth="2" />
                </div>
              </div>

              {/* Right content */}
              <div className="relative z-10 flex-1">
                <h3 className="font-display text-xl font-bold leading-tight text-text">{it.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-dim">{it.desc}</p>

                {/* Pill detail */}
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-text-dim">
                  <Sparkles className="h-3 w-3 text-orange" strokeWidth="2.5" />
                  {it.detail}
                </div>

                {/* Metric */}
                <div className="mt-5 flex items-baseline gap-2 border-t border-card-border pt-4">
                  <span className="font-display text-2xl font-extrabold text-orange lg:text-3xl">{it.metric}</span>
                  <span className="text-[11px] font-medium text-text-dim">{it.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
