import { Inbox, Search, Zap, ArrowRight } from "lucide-react";

const pillars = [
  {
    n: "01",
    icon: Inbox,
    badge: "Capter",
    title: "Collectez sur tous vos canaux.",
    desc: "QR codes, SMS, WhatsApp, formulaire web. Tous les canaux convergent dans un flux unique, taggé.",
    accent: "5 canaux",
  },
  {
    n: "02",
    icon: Search,
    badge: "Analyser",
    title: "Comprenez ce qui compte.",
    desc: "IA contextuelle qui détecte sentiment, thématique et urgence. Synthèse hebdomadaire en français clair.",
    accent: "Gemini · Groq",
  },
  {
    n: "03",
    icon: Zap,
    badge: "Agir",
    title: "Bouclez la boucle, vite.",
    desc: "Réponse en 1 clic, escalation auto, KaliPoints aux équipes. Le client est rappelé avant qu'il parte.",
    accent: "Sous 5 min",
  },
];

export function Pillars() {
  return (
    <section id="solution" className="px-6 py-24 lg:px-16 lg:py-32" style={{ background: "#F9FAFC" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 03 · La solution</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Trois piliers pour reprendre le <span className="italic text-orange">contrôle.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            Qualywatch connecte le ressenti client à votre stratégie opérationnelle, en continu.
            Chaque pilier renforce les autres autour d&apos;une seule donnée — <strong className="text-text">la satisfaction</strong>.
          </p>
        </div>

        {/* Clean minimal cards — no AI-style visuals */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-card-border bg-card-border lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="group relative flex flex-col bg-bg p-10 transition hover:bg-card-hover">
              {/* Big folio number */}
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-text-mute">
                № {p.n}
              </span>

              {/* Icon */}
              <div className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                <p.icon className="h-5 w-5" strokeWidth="2" />
              </div>

              {/* Step name (small italic) */}
              <span className="font-display mt-6 text-base italic text-orange">{p.badge}</span>

              {/* Title */}
              <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-text lg:text-[26px]">
                {p.title}
              </h3>

              {/* Body */}
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-text-dim">
                {p.desc}
              </p>

              {/* Accent footer */}
              <div className="mt-8 flex items-center justify-between border-t border-card-border pt-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-text-mute">
                  {p.accent}
                </span>
                <ArrowRight className="h-4 w-4 text-text-mute transition group-hover:translate-x-0.5 group-hover:text-orange" strokeWidth="2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
