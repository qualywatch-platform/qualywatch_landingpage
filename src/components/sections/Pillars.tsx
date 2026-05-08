import { Inbox, Search, Zap, ArrowRight } from "lucide-react";

const pillarsByLocale = {
  fr: [
    {
      n: "01",
      icon: Inbox,
      badge: "Capter",
      title: "Collectez sur tous vos canaux.",
      desc: "QR codes, WhatsApp, email, formulaire web. Tous les canaux convergent dans un flux unique, taggé.",
      accent: "4 canaux",
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
  ],
  en: [
    {
      n: "01",
      icon: Inbox,
      badge: "Capture",
      title: "Collect across every channel.",
      desc: "QR codes, WhatsApp, email, web form. Every channel flows into a single, tagged stream.",
      accent: "4 channels",
    },
    {
      n: "02",
      icon: Search,
      badge: "Analyse",
      title: "Understand what matters.",
      desc: "Context-aware AI that detects sentiment, topic and urgency. A weekly summary in plain English.",
      accent: "Gemini · Groq",
    },
    {
      n: "03",
      icon: Zap,
      badge: "Act",
      title: "Close the loop fast.",
      desc: "One-click reply, auto-escalation, KaliPoints for teams. The customer is contacted before they leave.",
      accent: "Under 5 min",
    },
  ],
};

export function Pillars({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const isEnglish = locale === "en";
  const pillars = pillarsByLocale[locale];
  return (
    <section id="solution" className="px-6 py-24 lg:px-16 lg:py-32" style={{ background: "#F9FAFC" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              {isEnglish ? "№ 03 · The solution" : "№ 03 · La solution"}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              {isEnglish ? (
                <>Three pillars to take back <span className="italic text-orange">control.</span></>
              ) : (
                <>Trois piliers pour reprendre le <span className="italic text-orange">contrôle.</span></>
              )}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            {isEnglish ? (
              <>
                Qualywatch connects how customers feel to how your operations run, continuously.
                Each pillar reinforces the others around one single data point — <strong className="text-text">satisfaction</strong>.
              </>
            ) : (
              <>
                Qualywatch connecte le ressenti client à votre stratégie opérationnelle, en continu.
                Chaque pilier renforce les autres autour d&apos;une seule donnée — <strong className="text-text">la satisfaction</strong>.
              </>
            )}
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
