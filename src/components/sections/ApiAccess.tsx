import { Code2, Webhook, Zap, ArrowUpRight, Terminal, KeyRound, Lock, Plus, Copy, Check } from "lucide-react";
import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

const featuresByLocale = {
  fr: [
    {
      icon: KeyRound,
      label: "Clés d'accès API",
      desc: "Générez vos clés depuis le dashboard Qualywatch. Format `qw_…`, hashées SHA-256, révocables à tout moment.",
    },
    {
      icon: Lock,
      label: "Permissions granulaires",
      desc: "7 scopes : read:feedbacks, write:feedbacks, read:stats, read:employees, read:services, read:clients, webhooks.",
    },
    {
      icon: Zap,
      label: "Rate limit par clé",
      desc: "Business : 60 req/min · Enterprise : 300 req/min. Plafond ajusté par clé selon votre plan.",
    },
    {
      icon: Webhook,
      label: "Webhooks signés HMAC",
      desc: "Events `feedback.created`, `feedback.critical`, `sla.breach`. Signature SHA-256, retry exponentiel (10s/1min/5min), auto-disable après 10 échecs.",
    },
  ],
  en: [
    {
      icon: KeyRound,
      label: "API access keys",
      desc: "Generate your keys from the Qualywatch dashboard. Format `qw_…`, SHA-256 hashed, revocable at any time.",
    },
    {
      icon: Lock,
      label: "Granular permissions",
      desc: "7 scopes: read:feedbacks, write:feedbacks, read:stats, read:employees, read:services, read:clients, webhooks.",
    },
    {
      icon: Zap,
      label: "Per-key rate limit",
      desc: "Business: 60 req/min · Enterprise: 300 req/min. Cap adjusted per key based on your plan.",
    },
    {
      icon: Webhook,
      label: "HMAC-signed webhooks",
      desc: "Events `feedback.created`, `feedback.critical`, `sla.breach`. SHA-256 signature, exponential retry (10s/1min/5min), auto-disable after 10 failures.",
    },
  ],
};

const apiKeysByLocale = {
  fr: [
    { name: "Production · CRM Salesforce", scope: "read:feedbacks", date: "Créée le 14/04/2026", active: true },
    { name: "Staging · Tests internes", scope: "read:stats · read:feedbacks", date: "Créée le 02/04/2026", active: true },
  ],
  en: [
    { name: "Production · Salesforce CRM", scope: "read:feedbacks", date: "Created 04/14/2026", active: true },
    { name: "Staging · Internal tests", scope: "read:stats · read:feedbacks", date: "Created 04/02/2026", active: true },
  ],
};

export function ApiAccess({ locale = "fr" }: { locale?: Locale }) {
  const isEnglish = locale === "en";
  const features = featuresByLocale[locale];
  const apiKeys = apiKeysByLocale[locale];
  return (
    <section
      id="api"
      className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.10), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.08), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              {isEnglish ? "№ 10 · API access" : "№ 10 · Accès API"}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              {isEnglish ? (
                <>Your data. Your <span className="italic text-orange">stack.</span></>
              ) : (
                <>Vos données. Votre <span className="italic text-orange">stack.</span></>
              )}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            {isEnglish ? (
              <>
                Generate your <strong className="text-text">API access keys</strong> directly from the dashboard
                and connect Qualywatch to your CRM, ERP, BI or helpdesk. Stable REST v1, scope-based permissions,
                per-key rate limit.
              </>
            ) : (
              <>
                Générez vos <strong className="text-text">clés d&apos;accès API</strong> directement depuis le dashboard
                et branchez Qualywatch à votre CRM, ERP, BI ou helpdesk. REST v1 stable, permissions par scope,
                rate limit par clé.
              </>
            )}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* LEFT — Features list */}
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="rounded-2xl border border-card-border bg-card p-5 transition hover:border-orange/40"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <f.icon className="h-5 w-5" strokeWidth="2" />
                  </span>
                  <div className="font-display mt-4 text-sm font-bold text-text">{f.label}</div>
                  <div className="mt-1.5 text-[12.5px] leading-snug text-text-dim">{f.desc}</div>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-4 rounded-3xl border border-card-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Lock className="h-5 w-5" strokeWidth="2" />
                </span>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                    {isEnglish ? "Availability" : "Disponibilité"}
                  </div>
                  <div className="font-display mt-1 text-sm font-bold text-text">
                    {isEnglish ? (
                      <>Business <span className="text-text-dim">(3 keys)</span> · Enterprise <span className="text-text-dim">(unlimited)</span></>
                    ) : (
                      <>Business <span className="text-text-dim">(3 clés)</span> · Enterprise <span className="text-text-dim">(illimité)</span></>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={getLocalizedPath(locale, "#contact")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-orange-soft btn-lift hover:bg-orange-deep"
                >
                  {isEnglish ? "Request access" : "Demander un accès"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth="2.5" />
                </Link>
                <Link
                  href="/docs/api"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-card-border bg-card px-5 py-3 text-[13px] font-bold text-text transition hover:border-orange hover:text-orange"
                >
                  {isEnglish ? "View documentation" : "Voir la documentation"}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — Dashboard mockup with API keys + code preview */}
          <div className="relative space-y-5">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.20), transparent 70%)" }}
            />

            <div
              className="relative overflow-hidden rounded-[24px] shadow-deep"
              style={{
                background: "#0F0E0C",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-orange/15 text-orange">
                    <KeyRound className="h-3.5 w-3.5" strokeWidth="2.5" />
                  </span>
                  <div>
                    <div className="font-display text-[12.5px] font-bold leading-none text-white">
                      {isEnglish ? "API access keys" : "Clés d'accès API"}
                    </div>
                    <div className="font-mono mt-0.5 text-[9px] uppercase tracking-widest text-white/40">
                      {isEnglish ? "2 / 3 active · Business plan" : "2 / 3 actives · Plan Business"}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1.5 text-[11px] font-bold text-white shadow-orange-soft"
                >
                  <Plus className="h-3 w-3" strokeWidth="3" />
                  {isEnglish ? "New key" : "Nouvelle clé"}
                </button>
              </div>

              <div className="divide-y divide-white/8">
                {apiKeys.map((k, i) => (
                  <div key={k.name} className="px-5 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" />
                        <span className="font-display text-[12.5px] font-bold text-white">{k.name}</span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/45">
                        {k.date}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <code className="flex-1 truncate rounded-lg bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/75">
                        qw_•••••••••••••••••••••••••••••••••••{i === 0 ? "8a3f" : "21cb"}
                      </code>
                      <button
                        type="button"
                        aria-label={isEnglish ? "Copy" : "Copier"}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white/60 transition hover:bg-orange/20 hover:text-orange"
                      >
                        {i === 0 ? (
                          <Copy className="h-3.5 w-3.5" strokeWidth="2" />
                        ) : (
                          <Check className="h-3.5 w-3.5" strokeWidth="2.5" />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">Scopes</span>
                      <span className="rounded-full bg-orange/15 px-2 py-0.5 font-mono text-[10px] font-bold text-orange">
                        {k.scope}
                      </span>
                      <span className="font-mono text-[9px] text-white/40">· 60 req/min</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-[20px] shadow-deep"
              style={{
                background: "#0F0E0C",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-2.5">
                <div className="font-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/40">
                  <Terminal className="h-3 w-3" strokeWidth="2.5" />
                  GET /api/v1/feedbacks
                </div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-orange">200 OK</span>
              </div>
              <pre className="font-mono overflow-x-auto px-5 py-4 text-[11.5px] leading-[1.6]">
                <code>
                  <span className="text-orange">curl</span>
                  <span className="text-white/85"> https://api.qualywatch.com/api/v1/feedbacks \</span>
                  {"\n  "}
                  <span className="text-white/85">-H </span>
                  <span className="text-[#6464FF]">{"\"Authorization: Bearer qw_…8a3f\""}</span>
                </code>
              </pre>
            </div>

            <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-card-border bg-card p-3 shadow-card sm:block">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-orange" strokeWidth="2.5" />
                <span className="font-display text-xs font-bold text-text">
                  {isEnglish ? "Stable REST v1" : "REST v1 stable"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
