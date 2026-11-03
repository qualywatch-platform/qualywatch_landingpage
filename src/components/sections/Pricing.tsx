import Link from "next/link";
import { Check, Zap, Building2, Crown, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

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

const plansByLocale: Record<Locale, Plan[]> = {
  fr: [
    {
      name: "Free",
      subtitle: "Pour démarrer",
      icon: Rocket,
      price: "0",
      cycle: "FCFA / mois",
      limits: ["1 manager · 10 employés", "5 services", "100 feedbacks/mois"],
      features: [
        "Score NPS",
        "Temps réel",
        "Export données",
        "Dashboard KPI",
        "Validation feedback",
        "Gestion employés",
        "Gestion services",
        "Gestion clients",
        "White-label",
      ],
      cta: "Commencer",
      highlighted: false,
    },
    {
      name: "Pro",
      subtitle: "Pour les équipes",
      icon: Zap,
      price: "40 000",
      cycle: "FCFA / mois",
      highlight: "Recommandé",
      limits: [
        "1 manager · 30 employés",
        "500 feedbacks/mois",
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
      price: "80 000",
      cycle: "FCFA / mois",
      limits: [
        "3 managers · 75 employés",
        "Feedbacks illimités",
        "300 WhatsApp/mois",
        "10 champs personnalisés",
      ],
      features: [
        "Inclut tout le plan Pro",
        "WhatsApp Business",
        "Réponses prédéfinies",
        "Champs personnalisés",
        "Chatbot",
        "Organigramme",
        "Récompenses",
        "Centre d'aide",
        "Accès API",
        "Veille de réputation",
        "Journal d'audit",
      ],
      cta: "Demander une démo",
      highlighted: false,
    },
    {
      name: "Enterprise",
      subtitle: "Solution complète",
      icon: Crown,
      price: "110 000",
      cycle: "FCFA / mois",
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
  ],
  en: [
    {
      name: "Free",
      subtitle: "To get started",
      icon: Rocket,
      price: "$0",
      cycle: "/mo",
      limits: ["1 manager · 10 employees", "5 services", "100 feedbacks/month"],
      features: [
        "NPS score",
        "Real-time",
        "Data export",
        "KPI dashboard",
        "Feedback validation",
        "Employee management",
        "Service management",
        "Customer management",
        "White-label",
      ],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      subtitle: "For teams",
      icon: Zap,
      price: "$69",
      cycle: "/mo",
      highlight: "Recommended",
      limits: [
        "1 manager · 30 employees",
        "500 feedbacks/month",
      ],
      features: [
        "Everything in Free",
        "Google Reviews CTA",
        "AI analysis",
        "BI Chat",
        "Team management",
        "Employee ranking",
        "Badges & leaderboard",
        "SLA management",
        "Advanced import/export",
        "Custom QR code",
        "Employee dispute",
        "Scheduled reports",
      ],
      cta: "Start now",
      highlighted: true,
    },
    {
      name: "Business",
      subtitle: "For businesses",
      icon: Building2,
      price: "$139",
      cycle: "/mo",
      limits: [
        "3 managers · 75 employees",
        "Unlimited feedback",
        "300 WhatsApp/month",
        "10 custom fields",
      ],
      features: [
        "Everything in Pro",
        "WhatsApp Business",
        "Canned responses",
        "Custom fields",
        "Chatbot",
        "Org chart",
        "Rewards",
        "Help center",
        "API access",
        "Reputation scraping",
        "Audit log",
      ],
      cta: "Request a demo",
      highlighted: false,
    },
    {
      name: "Enterprise",
      subtitle: "Complete solution",
      icon: Crown,
      price: "$190",
      cycle: "/mo",
      limits: [
        "5 managers · unlimited employees",
        "Unlimited feedback",
        "Unlimited WhatsApp (fair use)",
        "200 AI resolutions/month",
      ],
      features: [
        "Everything in Business",
        "Customer portal",
        "QualyAgent",
        "Predictive analytics",
      ],
      cta: "Custom solution",
      highlighted: false,
    },
  ],
};

export function Pricing({ locale = "fr" }: { locale?: Locale }) {
  const isEnglish = locale === "en";
  const plans = plansByLocale[locale];
  return (
    <section id="tarifs" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={isEnglish ? "Pricing" : "Tarifs"}
          title={
            isEnglish ? (
              <>Four plans, no hidden fees.</>
            ) : (
              <>Quatre formules, sans frais cachés.</>
            )
          }
          intro={
            isEnglish
              ? "Pay by mobile money, bank transfer or card, then activate the right plan directly from the app."
              : "Payez par mobile money, virement ou carte, puis activez la formule qui vous convient directement depuis l'application."
          }
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-lg bg-bg p-7 ${
                p.highlighted ? "border-2 border-orange-deep" : "border border-card-border"
              }`}
            >
              {p.highlighted && p.highlight && (
                <span className="absolute -top-3 left-7 rounded bg-orange-deep px-2.5 py-1 text-xs font-semibold text-white">
                  {p.highlight}
                </span>
              )}
              <div className="flex items-center gap-3">
                <IconTile icon={p.icon} size="sm" />
                <div>
                  <div className="font-display text-lg font-semibold text-text">{p.name}</div>
                  <div className="text-sm text-text-mute">{p.subtitle}</div>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold tracking-tight text-text">{p.price}</span>
                <span className="text-sm text-text-mute">{p.cycle}</span>
              </div>

              <ul className="mt-6 space-y-1.5 border-y border-card-border py-4">
                {p.limits.map((l) => (
                  <li key={l} className="text-sm font-medium text-text">
                    {l}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-snug text-text-dim">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-deep" strokeWidth={2.2} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={
                  p.name === "Free" || p.name === "Pro"
                    ? "https://app.qualywatch.com/auth/register"
                    : getLocalizedPath(locale, "#contact")
                }
                className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-semibold transition-colors ${
                  p.highlighted
                    ? "bg-orange-deep text-white hover:bg-[#A9460C]"
                    : "border border-[#C9CED6] text-text hover:border-text"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-text-dim">
          {isEnglish
            ? "Free signup. The Free plan is active as soon as your account is created; upgrade at any time from the app."
            : "Inscription gratuite. La formule Free est active dès la création du compte ; changez de formule à tout moment depuis l'application."}
        </p>
      </div>
    </section>
  );
}
