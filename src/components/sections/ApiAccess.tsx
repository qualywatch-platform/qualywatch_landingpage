import { Webhook, Zap, ArrowUpRight, KeyRound, Lock } from "lucide-react";
import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Accès API",
    title: (
      <>
        Vos données. <span className="text-orange-deep">Vos outils.</span>
      </>
    ),
    intro:
      "Générez vos clés d'accès depuis le tableau de bord et connectez QualyWatch à votre CRM, ERP, outil de BI ou helpdesk.",
    features: [
      { icon: KeyRound, label: "Clés d'accès API", desc: "Créées depuis le tableau de bord, chiffrées et révocables à tout moment." },
      { icon: Lock, label: "Permissions par clé", desc: "Lecture des avis, des statistiques, des employés, des services, des clients, et webhooks." },
      { icon: Zap, label: "Limite de requêtes", desc: "60 requêtes par minute en Business, 300 en Enterprise." },
      { icon: Webhook, label: "Webhooks signés", desc: "Nouvel avis, avis critique, délai dépassé : signature HMAC et nouvelles tentatives automatiques." },
    ],
    availability: "Disponible avec les offres Business (3 clés) et Enterprise (illimité).",
    request: "Demander un accès",
    docs: "Voir la documentation",
  },
  en: {
    eyebrow: "API access",
    title: (
      <>
        Your data. <span className="text-orange-deep">Your tools.</span>
      </>
    ),
    intro: "Generate access keys from the dashboard and connect QualyWatch to your CRM, ERP, BI tool or helpdesk.",
    features: [
      { icon: KeyRound, label: "API access keys", desc: "Created from the dashboard, encrypted and revocable at any time." },
      { icon: Lock, label: "Per-key permissions", desc: "Read feedback, statistics, employees, departments, customers, and webhooks." },
      { icon: Zap, label: "Rate limits", desc: "60 requests per minute on Business, 300 on Enterprise." },
      { icon: Webhook, label: "Signed webhooks", desc: "New feedback, critical feedback, missed deadline: HMAC signature and automatic retries." },
    ],
    availability: "Available on Business (3 keys) and Enterprise (unlimited) plans.",
    request: "Request access",
    docs: "View documentation",
  },
};

export function ApiAccess({ locale = "fr" }: { locale?: Locale }) {
  const c = contentByLocale[locale];
  return (
    <section id="api" className="border-y border-card-border bg-cream px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {c.features.map((f) => (
                <li key={f.label} className="flex flex-col gap-3">
                  <IconTile icon={f.icon} />
                  <div className="font-display mt-1 text-base font-semibold text-text">{f.label}</div>
                  <div className="text-sm leading-relaxed text-text-dim">{f.desc}</div>
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-card-border pt-6 text-sm text-text-dim">{c.availability}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={getLocalizedPath(locale, "#contact")}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-orange-deep px-5 text-sm font-semibold text-white transition-colors hover:bg-[#A9460C]"
              >
                {c.request}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
              <Link
                href="/docs/api"
                className="inline-flex h-11 items-center rounded-md border border-[#C9CED6] bg-bg px-5 text-sm font-semibold text-text transition-colors hover:border-text"
              >
                {c.docs}
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-ink">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <span className="font-mono text-xs text-white/60">GET /api/v1/feedbacks</span>
              <span className="font-mono text-xs font-semibold text-orange">200 OK</span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.7] text-white/85">
              <code>
                <span className="text-orange">curl</span> https://api.qualywatch.com/api/v1/feedbacks \{"\n"}
                {"  "}-H <span className="text-[#F5C9A3]">&quot;Authorization: Bearer qw_…8a3f&quot;</span>
                {"\n\n"}
                <span className="text-white/50">{"{"}</span>
                {"\n  "}&quot;data&quot;: [{"{"}
                {"\n    "}&quot;reference&quot;: <span className="text-[#F5C9A3]">&quot;QW-2026-D5BF79&quot;</span>,
                {"\n    "}&quot;type&quot;: <span className="text-[#F5C9A3]">&quot;negative&quot;</span>,
                {"\n    "}&quot;service&quot;: <span className="text-[#F5C9A3]">&quot;Housekeeping&quot;</span>,
                {"\n    "}&quot;status&quot;: <span className="text-[#F5C9A3]">&quot;in_progress&quot;</span>
                {"\n  "}
                {"}]"}
                {"\n"}
                <span className="text-white/50">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
