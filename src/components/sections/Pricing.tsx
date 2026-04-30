import Link from "next/link";
import { Check, Sparkles, ArrowRight, Zap, Building2, Crown, Rocket } from "lucide-react";

type Plan = {
  name: string;
  subtitle: string;
  icon: typeof Zap;
  price: string;
  cycle: string;
  highlight?: string;
  limits: string[];
  features: string[];
  cta: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    subtitle: "Pour démarrer",
    icon: Rocket,
    price: "0$",
    cycle: "/mois",
    limits: [
      "1 manager · 10 employés",
      "5 services",
      "100 feedbacks/mois",
    ],
    features: [
      "Score NPS",
      "Temps réel",
      "Export données",
      "Dashboard KPI",
      "Validation feedback",
      "Gestion employés",
      "Gestion services",
      "Gestion clients",
    ],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "Pour les équipes",
    icon: Zap,
    price: "69$",
    cycle: "/mois",
    highlight: "Le plus populaire",
    limits: [
      "1 manager · 30 employés",
      "500 feedbacks/mois",
      "0 résolutions IA/mois",
    ],
    features: [
      "Inclut tout le plan Free",
      "CTA Avis Google",
      "Analyse IA",
      "Chat BI",
      "Gestion d'équipe",
      "Ranking employés",
      "Badges & Leaderboard",
      "Gestion SLA",
      "Import/Export avancé",
      "QR Code personnalisé",
      "Contestation employé",
      "Rapports planifiés",
    ],
    cta: "Démarrer maintenant",
    highlighted: true,
  },
  {
    name: "Business",
    subtitle: "Pour les entreprises",
    icon: Building2,
    price: "139$",
    cycle: "/mois",
    limits: [
      "3 managers · 75 employés",
      "Feedbacks illimités",
      "300 WhatsApp/mois",
      "10 champs personnalisés",
    ],
    features: [
      "Inclut tout le plan Pro",
      "WhatsApp Business",
      "White-label",
      "Réponses prédéfinies",
      "Champs personnalisés",
      "Chatbot",
      "Organigramme",
      "Récompenses",
      "Centre d'aide",
      "Accès API",
      "Scraping reputation",
      "Journal d'audit",
    ],
    cta: "Demander une démo",
    highlighted: false,
  },
  {
    name: "Enterprise",
    subtitle: "Solution complète",
    icon: Crown,
    price: "190$",
    cycle: "/mois",
    limits: [
      "5 managers · employés illimités",
      "Feedbacks illimités",
      "WhatsApp illimités (fair use)",
      "200 résolutions IA/mois",
    ],
    features: [
      "Inclut tout le plan Business",
      "Portail client",
      "QualyAgent",
      "Analytique prédictive",
    ],
    cta: "Solution sur-mesure",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32"
      style={{ background: "#FAFBFC" }}
    >
      {/* Decorative orange glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.12), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.08), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-children mx-auto mb-16 max-w-3xl text-center">
          <p className="reveal-item reveal-delay-1 font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 08 · Tarifs</p>
          <h2 className="reveal-item reveal-delay-2 font-display mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
            Quatre formules, <span className="italic text-orange">un seul prix.</span>
          </h2>
          <p className="reveal-item reveal-delay-3 mt-5 text-base leading-relaxed text-text-dim lg:text-lg">
            Pas de frais cachés. Mobile money, virement, CB.
            Activez ensuite le plan qui vous convient directement depuis l&apos;app.
          </p>
        </div>

        <div className="reveal-children grid gap-5 lg:grid-cols-4">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className={`reveal-item reveal-delay-${(plans.indexOf(p) % 4) + 1} group relative flex flex-col overflow-hidden rounded-3xl transition ${
                  p.highlighted
                    ? "shadow-[0_30px_80px_-20px_rgba(250,112,13,0.45)] lg:scale-[1.04]"
                    : "border border-card-border bg-card hover:-translate-y-1 hover:border-orange/40 hover:shadow-card"
                }`}
                style={
                  p.highlighted
                    ? {
                        background:
                          "linear-gradient(160deg, #1A1A1A 0%, #0F0E0C 100%)",
                        border: "1px solid rgba(250,112,13,0.4)",
                      }
                    : { background: "#FFFFFF" }
                }
              >
                {p.highlighted && (
                  <>
                    {/* Orange spotlight inside dark card */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full opacity-70 blur-3xl"
                      style={{
                        background:
                          "radial-gradient(closest-side, rgba(250,112,13,0.5), transparent 70%)",
                      }}
                    />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-orange-soft">
                      <Sparkles className="h-3 w-3" />
                      {p.highlight}
                    </span>
                  </>
                )}

                <div className="relative p-7 lg:p-8">
                  {/* Plan icon + name */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                        p.highlighted
                          ? "bg-orange text-white"
                          : "bg-orange/10 text-orange"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth="2.5" />
                    </span>
                    <div>
                      <div
                        className="font-display text-base font-bold"
                        style={{ color: p.highlighted ? "#FFFFFF" : undefined }}
                      >
                        {p.name}
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-3 text-[12.5px] leading-snug"
                    style={{
                      color: p.highlighted
                        ? "rgba(255,255,255,0.65)"
                        : "rgba(15,14,12,0.6)",
                    }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Price block */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className="font-display text-[44px] font-extrabold leading-none lg:text-[52px]"
                      style={{ color: p.highlighted ? "#FFFFFF" : undefined }}
                    >
                      {p.price}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: p.highlighted
                          ? "rgba(255,255,255,0.55)"
                          : "rgba(15,14,12,0.55)",
                      }}
                    >
                      {p.cycle}
                    </span>
                  </div>

                  {/* Limits — neutral block */}
                  <div
                    className="mt-6 rounded-2xl p-4"
                    style={{
                      background: p.highlighted
                        ? "rgba(255,255,255,0.06)"
                        : "#F4F5F7",
                      border: p.highlighted
                        ? "1px solid rgba(255,255,255,0.10)"
                        : "1px solid rgba(15,14,12,0.06)",
                    }}
                  >
                    <p
                      className="text-[10px] font-mono font-bold uppercase tracking-widest"
                      style={{
                        color: p.highlighted
                          ? "rgba(255,255,255,0.55)"
                          : "rgba(15,14,12,0.5)",
                      }}
                    >
                      Limites
                    </p>
                    <ul className="mt-2 space-y-1">
                      {p.limits.map((l, i) => (
                        <li
                          key={i}
                          className="text-[12px] font-medium leading-snug"
                          style={{
                            color: p.highlighted
                              ? "rgba(255,255,255,0.92)"
                              : "#0F0E0C",
                          }}
                        >
                          · {l}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features list */}
                  <p
                    className="mt-6 text-[10px] font-mono font-bold uppercase tracking-widest"
                    style={{
                      color: p.highlighted
                        ? "rgba(255,255,255,0.5)"
                        : "rgba(15,14,12,0.45)",
                    }}
                  >
                    Inclus
                  </p>
                  <ul className="mt-3 flex-1 space-y-2">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            p.highlighted
                              ? "bg-orange text-white"
                              : "bg-orange/15 text-orange"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5" strokeWidth="3.5" />
                        </span>
                        <span
                          className="text-[12.5px] leading-snug"
                          style={{
                            color: p.highlighted
                              ? "rgba(255,255,255,0.85)"
                              : "rgba(15,14,12,0.75)",
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className={`group/btn mt-7 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[14.5px] font-bold transition btn-lift ${
                      p.highlighted
                        ? "bg-orange text-white hover:bg-orange-deep"
                        : "border border-card-border text-text hover:border-orange hover:bg-orange hover:text-white"
                    }`}
                  >
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth="2.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-text-dim">
          <span className="font-bold text-text">Inscription gratuite</span> · Plan Free active a la creation · Upgrade depuis l&apos;app
        </div>
      </div>
    </section>
  );
}
