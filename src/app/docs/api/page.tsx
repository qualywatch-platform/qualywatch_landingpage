import type { Metadata } from "next";
import Link from "next/link";
import { NavbarV2 } from "@/components/NavbarV2";
import { Footer } from "@/components/Footer";
import {
  KeyRound,
  Lock,
  Zap,
  Webhook,
  ShieldCheck,
  Terminal,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Reference v1",
  description:
    "Documentation officielle de l'API REST Qualywatch v1 : authentification, scopes, endpoints feedbacks, stats, employees, services, clients et webhooks.",
  openGraph: {
    title: "API Reference v1 · Qualywatch",
    description:
      "Documentation officielle de l'API REST Qualywatch v1. Branchez vos feedbacks à votre stack en quelques minutes.",
  },
};

const BASE_URL = "https://qualywatchbackend-production.up.railway.app/api";

const sidebarSections = [
  { id: "introduction", label: "Introduction" },
  { id: "authentification", label: "Authentification" },
  { id: "rate-limits", label: "Rate limits" },
  { id: "errors", label: "Erreurs" },
  { id: "endpoints", label: "Endpoints" },
  { id: "endpoint-list-feedbacks", label: "GET /feedbacks", indent: true },
  { id: "endpoint-get-feedback", label: "GET /feedbacks/{id}", indent: true },
  { id: "endpoint-create-feedback", label: "POST /feedbacks", indent: true },
  { id: "endpoint-stats-overview", label: "GET /stats/overview", indent: true },
  { id: "endpoint-stats-nps", label: "GET /stats/nps", indent: true },
  { id: "endpoint-employees", label: "GET /employees", indent: true },
  { id: "endpoint-services", label: "GET /services", indent: true },
  { id: "endpoint-clients", label: "GET /clients", indent: true },
  { id: "webhooks", label: "Webhooks" },
];

const scopes = [
  { name: "read:feedbacks", desc: "Lecture liste et détail des feedbacks." },
  { name: "write:feedbacks", desc: "Création de feedbacks via API." },
  { name: "read:stats", desc: "Lecture des stats globales et NPS." },
  { name: "read:employees", desc: "Lecture de l'annuaire employés." },
  { name: "read:services", desc: "Lecture du catalogue services." },
  { name: "read:clients", desc: "Lecture de la base clients." },
  { name: "webhooks", desc: "Gestion des abonnements webhooks." },
];

const errors = [
  { code: 400, label: "Bad Request", desc: "Payload invalide ou paramètres manquants." },
  { code: 401, label: "Unauthorized", desc: "Clé API absente, mal formée ou révoquée." },
  { code: 403, label: "Forbidden", desc: "Scope insuffisant pour cette ressource." },
  { code: 404, label: "Not Found", desc: "Ressource introuvable ou hors de votre tenant." },
  { code: 429, label: "Too Many Requests", desc: "Quota de rate limit dépassé." },
  { code: 500, label: "Server Error", desc: "Incident côté API. Réessayez avec backoff." },
];

function CodeBlock({
  label,
  status,
  children,
}: {
  label: string;
  status?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-deep"
      style={{ background: "#0F0E0C", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="font-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/45">
          <Terminal className="h-3 w-3" strokeWidth="2.5" />
          {label}
        </div>
        {status ? (
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-orange">
            {status}
          </span>
        ) : null}
      </div>
      <pre className="font-mono overflow-x-auto px-4 py-4 text-[12px] leading-[1.65] text-white/85">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function SidebarLinks() {
  return (
    <nav className="space-y-1">
      {sidebarSections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`block rounded-lg px-3 py-1.5 text-[13px] text-text-dim transition hover:bg-orange/10 hover:text-orange ${
            s.indent ? "ml-3 font-mono text-[12px]" : "font-medium"
          }`}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}

function SectionTitle({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-28">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-orange">
        {eyebrow}
      </p>
      <h2 className="font-display mt-2 text-2xl font-bold leading-tight text-text sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function EndpointHeader({
  id,
  method,
  path,
  scope,
  description,
}: {
  id: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  path: string;
  scope: string;
  description: string;
}) {
  const methodColor =
    method === "GET"
      ? "bg-blue/15 text-blue"
      : method === "POST"
        ? "bg-success-soft text-success"
        : method === "DELETE"
          ? "bg-red-500/15 text-red-500"
          : "bg-orange/15 text-orange";

  return (
    <div id={id} className="scroll-mt-28">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`font-mono rounded-md px-2 py-1 text-[11px] font-bold ${methodColor}`}>
          {method}
        </span>
        <code className="font-mono text-sm font-semibold text-text">{path}</code>
        <span className="rounded-full bg-orange/10 px-2 py-0.5 font-mono text-[10px] font-bold text-orange">
          {scope}
        </span>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-text-dim">{description}</p>
    </div>
  );
}

export default function ApiDocsPage() {
  return (
    <>
      <NavbarV2 />
      <main style={{ background: "#FFFFFF" }} className="text-text">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-12 pt-32 lg:px-16 lg:pb-16 lg:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(250,112,13,0.15), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono inline-flex items-center gap-1.5 rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
                <BookOpen className="h-3 w-3" strokeWidth="2.5" />
                Docs · v1
              </span>
              <span className="font-mono inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-success">
                <CheckCircle2 className="h-3 w-3" strokeWidth="2.5" />
                REST stable
              </span>
            </div>
            <h1 className="font-display mt-5 text-4xl font-bold leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              API Reference <span className="italic text-orange">v1</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-dim lg:text-lg">
              Branchez Qualywatch à votre CRM, ERP, BI ou helpdesk. Authentification par clé,
              permissions par scope, rate limit par clé. Tout en JSON, tout sous HTTPS.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white shadow-orange-soft btn-lift hover:bg-orange-deep"
              >
                Demander un accès
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth="2.5"
                />
              </Link>
              <Link
                href="/#api"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-5 py-3 text-sm font-bold text-text transition hover:border-orange hover:text-orange"
              >
                Présentation produit
              </Link>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section className="relative px-6 pb-32 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[240px_1fr]">
            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <div className="rounded-2xl border border-card-border bg-card p-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                  Sommaire
                </p>
                <div className="mt-3">
                  <SidebarLinks />
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="min-w-0 space-y-16">
              {/* INTRODUCTION */}
              <section className="space-y-5">
                <SectionTitle
                  id="introduction"
                  eyebrow="№ 01 · Introduction"
                  title="Une API REST pensée pour vos intégrations"
                />
                <p className="text-[14.5px] leading-relaxed text-text-dim">
                  L&apos;API publique Qualywatch v1 est <strong className="text-text">REST</strong>,
                  versionnée, et exclusivement <strong className="text-text">JSON</strong> sur
                  HTTPS. Toutes les ressources sont scopées à votre entreprise (multi-tenant strict).
                  Les changements rétro-incompatibles sortiront sur une nouvelle version (v2)
                  — la v1 restera maintenue.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-card-border bg-card p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                      Base URL
                    </p>
                    <code className="font-mono mt-2 block break-all rounded-lg bg-bg3 px-3 py-2 text-[12px] text-text">
                      {BASE_URL}
                    </code>
                  </div>
                  <div className="rounded-2xl border border-card-border bg-card p-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                      Format
                    </p>
                    <p className="mt-2 text-[13px] text-text-dim">
                      <span className="font-mono text-text">application/json</span> — toutes les
                      réponses suivent
                      <span className="font-mono"> {`{ success, data, message? }`}</span>.
                    </p>
                  </div>
                </div>
              </section>

              {/* AUTH */}
              <section className="space-y-5">
                <SectionTitle
                  id="authentification"
                  eyebrow="№ 02 · Authentification"
                  title="Bearer token avec scopes granulaires"
                />
                <p className="text-[14.5px] leading-relaxed text-text-dim">
                  Générez vos clés depuis le dashboard
                  <Link
                    href="/#contact"
                    className="font-mono mx-1 inline-flex items-center gap-1 rounded-md bg-orange/10 px-1.5 py-0.5 text-[12px] font-bold text-orange hover:underline"
                  >
                    /dashboard/api-access
                  </Link>
                  (plans Business et Enterprise). Format <span className="font-mono text-text">qw_…</span>,
                  hashé SHA-256 côté serveur, révocable à tout moment.
                </p>

                <CodeBlock label="Authorization header">
                  <span className="text-blue">Authorization:</span>{" "}
                  <span className="text-orange">Bearer</span> qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </CodeBlock>

                <div className="rounded-2xl border border-card-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <KeyRound className="h-4.5 w-4.5" strokeWidth="2" />
                    </span>
                    <h3 className="font-display text-base font-bold text-text">Scopes disponibles</h3>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {scopes.map((s) => (
                      <li
                        key={s.name}
                        className="rounded-xl border border-card-border bg-bg3 p-3"
                      >
                        <code className="font-mono text-[12px] font-bold text-orange">
                          {s.name}
                        </code>
                        <p className="mt-1 text-[12.5px] leading-snug text-text-dim">{s.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-orange/30 bg-orange/5 p-4">
                  <div className="flex items-start gap-2">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange"
                      strokeWidth="2.5"
                    />
                    <p className="text-[13px] leading-relaxed text-text-dim">
                      <strong className="text-text">Sécurité :</strong> ne committez jamais vos clés.
                      Stockez-les dans un secret manager (Vault, AWS Secrets, GitHub Encrypted Secrets…).
                      Une clé compromise se révoque en 1 clic depuis le dashboard.
                    </p>
                  </div>
                </div>
              </section>

              {/* RATE LIMITS */}
              <section className="space-y-5">
                <SectionTitle
                  id="rate-limits"
                  eyebrow="№ 03 · Rate limits"
                  title="60 ou 300 requêtes par minute, par clé"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-card-border bg-card p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <Zap className="h-5 w-5" strokeWidth="2" />
                    </span>
                    <p className="font-mono mt-3 text-[10px] font-bold uppercase tracking-widest text-text-mute">
                      Plan Business
                    </p>
                    <p className="font-display mt-1 text-2xl font-bold text-text">60 req / min</p>
                    <p className="mt-2 text-[13px] text-text-dim">
                      Jusqu&apos;à 3 clés actives en parallèle.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-orange/40 bg-card p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <Zap className="h-5 w-5" strokeWidth="2" />
                    </span>
                    <p className="font-mono mt-3 text-[10px] font-bold uppercase tracking-widest text-text-mute">
                      Plan Enterprise
                    </p>
                    <p className="font-display mt-1 text-2xl font-bold text-text">300 req / min</p>
                    <p className="mt-2 text-[13px] text-text-dim">Clés illimitées.</p>
                  </div>
                </div>

                <p className="text-[14px] leading-relaxed text-text-dim">
                  Chaque réponse inclut les headers suivants pour vous permettre d&apos;adapter
                  votre cadence :
                </p>

                <CodeBlock label="Rate limit headers">
                  <span className="text-blue">X-RateLimit-Limit:</span>{" "}
                  <span className="text-orange">60</span>
                  {"\n"}
                  <span className="text-blue">X-RateLimit-Remaining:</span>{" "}
                  <span className="text-orange">42</span>
                  {"\n"}
                  <span className="text-blue">X-RateLimit-Reset:</span>{" "}
                  <span className="text-orange">1714402100</span>
                </CodeBlock>
                <p className="text-[13px] text-text-dim">
                  En cas de dépassement, l&apos;API renvoie un{" "}
                  <span className="font-mono text-orange">429 Too Many Requests</span>. Implémentez
                  un retry avec backoff exponentiel.
                </p>
              </section>

              {/* ERRORS */}
              <section className="space-y-5">
                <SectionTitle
                  id="errors"
                  eyebrow="№ 04 · Erreurs"
                  title="Codes HTTP standards"
                />
                <div className="overflow-hidden rounded-2xl border border-card-border bg-card">
                  <table className="w-full text-left">
                    <thead className="border-b border-card-border bg-bg3">
                      <tr>
                        <th className="font-mono px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-text-mute">
                          Code
                        </th>
                        <th className="font-mono px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-text-mute">
                          Status
                        </th>
                        <th className="font-mono px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-text-mute">
                          Quand ?
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {errors.map((e) => (
                        <tr key={e.code} className="border-t border-card-border">
                          <td className="px-4 py-3">
                            <span className="font-mono rounded-md bg-orange/10 px-2 py-0.5 text-[12px] font-bold text-orange">
                              {e.code}
                            </span>
                          </td>
                          <td className="font-mono px-4 py-3 text-[13px] font-semibold text-text">
                            {e.label}
                          </td>
                          <td className="px-4 py-3 text-[13px] text-text-dim">{e.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <CodeBlock label="Exemple · 401 Unauthorized" status="401">
                  {"{"}
                  {"\n  "}
                  <span className="text-blue">&quot;success&quot;</span>:{" "}
                  <span className="text-orange">false</span>,{"\n  "}
                  <span className="text-blue">&quot;message&quot;</span>:{" "}
                  <span className="text-success">&quot;Invalid or revoked API key.&quot;</span>
                  {"\n}"}
                </CodeBlock>
              </section>

              {/* ENDPOINTS */}
              <section className="space-y-10">
                <SectionTitle
                  id="endpoints"
                  eyebrow="№ 05 · Endpoints"
                  title="Catalogue complet de la v1"
                />

                {/* GET /feedbacks */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-list-feedbacks"
                    method="GET"
                    path="/v1/feedbacks"
                    scope="read:feedbacks"
                    description="Liste paginée des feedbacks de votre entreprise. Tri décroissant par date de création. Filtres par type, statut et fenêtre de dates."
                  />
                  <div className="rounded-2xl border border-card-border bg-card p-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                      Query params
                    </p>
                    <ul className="mt-2 space-y-1 text-[13px] text-text-dim">
                      <li>
                        <code className="font-mono text-text">type</code> — positif · negatif ·
                        suggestion · nps
                      </li>
                      <li>
                        <code className="font-mono text-text">status</code> — new · seen ·
                        in_progress · treated · resolved · archived…
                      </li>
                      <li>
                        <code className="font-mono text-text">date_from</code> /{" "}
                        <code className="font-mono text-text">date_to</code> — format YYYY-MM-DD
                      </li>
                      <li>
                        <code className="font-mono text-text">page</code> /{" "}
                        <code className="font-mono text-text">per_page</code> — défaut 20, max 100
                      </li>
                    </ul>
                  </div>
                  <CodeBlock label="curl · GET /v1/feedbacks">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/feedbacks?type=negatif&per_page=10 \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                  <CodeBlock label="200 OK · réponse" status="200">
                    {"{"}
                    {"\n  "}
                    <span className="text-blue">&quot;success&quot;</span>:{" "}
                    <span className="text-orange">true</span>,{"\n  "}
                    <span className="text-blue">&quot;data&quot;</span>: {"{"}
                    {"\n    "}
                    <span className="text-blue">&quot;items&quot;</span>: [{"\n      "}
                    {"{"}
                    {"\n        "}
                    <span className="text-blue">&quot;id&quot;</span>:{" "}
                    <span className="text-success">&quot;uuid-feedback-1&quot;</span>,{"\n        "}
                    <span className="text-blue">&quot;reference&quot;</span>:{" "}
                    <span className="text-success">&quot;FB-20260415-0042&quot;</span>,{"\n        "}
                    <span className="text-blue">&quot;type&quot;</span>:{" "}
                    <span className="text-success">&quot;negatif&quot;</span>,{"\n        "}
                    <span className="text-blue">&quot;status&quot;</span>:{" "}
                    <span className="text-success">&quot;new&quot;</span>,{"\n        "}
                    <span className="text-blue">&quot;rating&quot;</span>:{" "}
                    <span className="text-orange">2</span>,{"\n        "}
                    <span className="text-blue">&quot;created_at&quot;</span>:{" "}
                    <span className="text-success">&quot;2026-04-29T08:14:00+00:00&quot;</span>
                    {"\n      }"}
                    {"\n    ],"}
                    {"\n    "}
                    <span className="text-blue">&quot;pagination&quot;</span>: {"{"}
                    {"\n      "}
                    <span className="text-blue">&quot;total&quot;</span>:{" "}
                    <span className="text-orange">128</span>,{" "}
                    <span className="text-blue">&quot;per_page&quot;</span>:{" "}
                    <span className="text-orange">10</span>,{" "}
                    <span className="text-blue">&quot;current_page&quot;</span>:{" "}
                    <span className="text-orange">1</span>,{" "}
                    <span className="text-blue">&quot;last_page&quot;</span>:{" "}
                    <span className="text-orange">13</span>
                    {"\n    }"}
                    {"\n  }"}
                    {"\n}"}
                  </CodeBlock>
                </article>

                {/* GET /feedbacks/{id} */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-get-feedback"
                    method="GET"
                    path="/v1/feedbacks/{id}"
                    scope="read:feedbacks"
                    description="Détail complet d'un feedback : client, employé assigné, service, sentiment, et coordonnées de contact."
                  />
                  <CodeBlock label="curl · GET /v1/feedbacks/{id}">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/feedbacks/uuid-feedback-1 \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                </article>

                {/* POST /feedbacks */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-create-feedback"
                    method="POST"
                    path="/v1/feedbacks"
                    scope="write:feedbacks"
                    description="Pousse un nouveau feedback dans Qualywatch (déclenche détection de sentiment, alertes critiques, et SLA si applicable)."
                  />
                  <CodeBlock label="curl · POST /v1/feedbacks">
                    <span className="text-orange">curl</span> -X POST {BASE_URL}/v1/feedbacks \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>{" "}
                    \{"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">&quot;Content-Type: application/json&quot;</span> \
                    {"\n  "}
                    <span className="text-white/85">-d </span>
                    <span className="text-success">
                      {`'{"type":"negatif","title":"Caisse 4 lente","description":"15 min d`}&apos;
                      {`attente","rating":2,"contact_email":"client@example.com"}'`}
                    </span>
                  </CodeBlock>
                  <CodeBlock label="201 Created" status="201">
                    {"{"}
                    {"\n  "}
                    <span className="text-blue">&quot;success&quot;</span>:{" "}
                    <span className="text-orange">true</span>,{"\n  "}
                    <span className="text-blue">&quot;data&quot;</span>: {"{"}
                    {"\n    "}
                    <span className="text-blue">&quot;id&quot;</span>:{" "}
                    <span className="text-success">&quot;uuid-feedback-2&quot;</span>,{"\n    "}
                    <span className="text-blue">&quot;reference&quot;</span>:{" "}
                    <span className="text-success">&quot;FB-20260429-0128&quot;</span>,{"\n    "}
                    <span className="text-blue">&quot;status&quot;</span>:{" "}
                    <span className="text-success">&quot;new&quot;</span>
                    {"\n  }"}
                    {"\n}"}
                  </CodeBlock>
                </article>

                {/* GET /stats/overview */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-stats-overview"
                    method="GET"
                    path="/v1/stats/overview"
                    scope="read:stats"
                    description="Indicateurs agrégés de l'entreprise : volumes par type, satisfaction, ratio résolution, top services."
                  />
                  <CodeBlock label="curl · GET /v1/stats/overview">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/stats/overview \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                </article>

                {/* GET /stats/nps */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-stats-nps"
                    method="GET"
                    path="/v1/stats/nps"
                    scope="read:stats"
                    description="Score NPS global, breakdown promoteurs / passifs / détracteurs, et évolution mensuelle."
                  />
                  <CodeBlock label="curl · GET /v1/stats/nps">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/stats/nps \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                </article>

                {/* GET /employees */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-employees"
                    method="GET"
                    path="/v1/employees"
                    scope="read:employees"
                    description="Annuaire des employés avec service de rattachement, position et statut actif."
                  />
                  <CodeBlock label="curl · GET /v1/employees">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/employees \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                </article>

                {/* GET /services */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-services"
                    method="GET"
                    path="/v1/services"
                    scope="read:services"
                    description="Catalogue des services / points de contact de votre entreprise."
                  />
                  <CodeBlock label="curl · GET /v1/services">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/services \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                </article>

                {/* GET /clients */}
                <article className="space-y-4">
                  <EndpointHeader
                    id="endpoint-clients"
                    method="GET"
                    path="/v1/clients"
                    scope="read:clients"
                    description="Base clients de l'entreprise — nom, email, téléphone, total feedbacks, KaliPoints, dernière activité (200 plus récents)."
                  />
                  <CodeBlock label="curl · GET /v1/clients">
                    <span className="text-orange">curl</span> {BASE_URL}/v1/clients \
                    {"\n  "}
                    <span className="text-white/85">-H </span>
                    <span className="text-blue">
                      &quot;Authorization: Bearer qw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;
                    </span>
                  </CodeBlock>
                </article>
              </section>

              {/* WEBHOOKS */}
              <section className="space-y-5">
                <SectionTitle
                  id="webhooks"
                  eyebrow="№ 06 · Webhooks"
                  title="Recevez les événements en push"
                />
                <div className="rounded-2xl border border-orange/30 bg-orange/5 p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange"
                      strokeWidth="2.5"
                    />
                    <p className="text-[13px] leading-relaxed text-text-dim">
                      <strong className="text-text">Statut :</strong> infrastructure prête (HMAC-SHA256
                      signing, retry/backoff). Le dispatcher de delivery est en cours d&apos;intégration ;
                      la création/suppression d&apos;abonnements renvoie temporairement{" "}
                      <span className="font-mono text-orange">501 Not Implemented</span>. La lecture
                      des abonnements existants reste fonctionnelle.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <EndpointHeader
                    id="webhook-list"
                    method="GET"
                    path="/v1/webhooks"
                    scope="webhooks"
                    description="Liste les abonnements webhooks attachés à votre clé d'API."
                  />
                  <EndpointHeader
                    id="webhook-create"
                    method="POST"
                    path="/v1/webhooks"
                    scope="webhooks"
                    description="Crée un abonnement (dispatcher en cours d'intégration)."
                  />
                  <EndpointHeader
                    id="webhook-delete"
                    method="DELETE"
                    path="/v1/webhooks/{id}"
                    scope="webhooks"
                    description="Supprime un abonnement existant (dispatcher en cours d'intégration)."
                  />
                </div>

                <div className="rounded-2xl border border-card-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <Webhook className="h-4.5 w-4.5" strokeWidth="2" />
                    </span>
                    <h3 className="font-display text-base font-bold text-text">
                      Événements supportés
                    </h3>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                    {[
                      {
                        name: "feedback.created",
                        desc: "Nouveau feedback reçu (tous types).",
                      },
                      {
                        name: "feedback.critical",
                        desc: "Feedback flag critique (sentiment / mots-clés).",
                      },
                      {
                        name: "sla.breach",
                        desc: "SLA dépassé sur un feedback ouvert.",
                      },
                    ].map((e) => (
                      <li
                        key={e.name}
                        className="rounded-xl border border-card-border bg-bg3 p-3"
                      >
                        <code className="font-mono text-[12px] font-bold text-orange">
                          {e.name}
                        </code>
                        <p className="mt-1 text-[12.5px] leading-snug text-text-dim">{e.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-card-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <Lock className="h-4.5 w-4.5" strokeWidth="2" />
                    </span>
                    <h3 className="font-display text-base font-bold text-text">
                      Vérifier la signature
                    </h3>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-text-dim">
                    Chaque livraison embarque un header
                    <span className="font-mono mx-1 rounded-md bg-bg3 px-1.5 py-0.5 text-[12px] text-text">
                      X-QW-Signature: sha256=…
                    </span>
                    calculé avec le secret de votre webhook (HMAC-SHA256 du body brut).
                  </p>
                  <div className="mt-4">
                    <CodeBlock label="Vérification — Node.js">
                      <span className="text-blue">const</span> hmac ={" "}
                      <span className="text-orange">crypto</span>
                      .createHmac(<span className="text-success">&quot;sha256&quot;</span>,
                      WEBHOOK_SECRET)
                      {"\n  "}.update(rawBody)
                      {"\n  "}.digest(<span className="text-success">&quot;hex&quot;</span>);
                      {"\n"}
                      <span className="text-blue">const</span> expected ={" "}
                      <span className="text-success">&quot;sha256=&quot;</span> + hmac;
                      {"\n"}
                      <span className="text-blue">if</span> (header !== expected) reject();
                    </CodeBlock>
                  </div>
                </div>

                <div className="rounded-2xl border border-card-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <Zap className="h-4.5 w-4.5" strokeWidth="2" />
                    </span>
                    <h3 className="font-display text-base font-bold text-text">Politique de retry</h3>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-text-dim">
                    En cas d&apos;échec (timeout, 5xx, ou status &gt;= 400),{" "}
                    <strong className="text-text">3 tentatives</strong> sont déclenchées avec un
                    backoff progressif :
                  </p>
                  <ul className="font-mono mt-3 grid gap-2 text-[12.5px] sm:grid-cols-3">
                    <li className="rounded-lg bg-bg3 px-3 py-2 text-text-dim">
                      <span className="text-orange">+10s</span> · 1ère retry
                    </li>
                    <li className="rounded-lg bg-bg3 px-3 py-2 text-text-dim">
                      <span className="text-orange">+1min</span> · 2e retry
                    </li>
                    <li className="rounded-lg bg-bg3 px-3 py-2 text-text-dim">
                      <span className="text-orange">+5min</span> · 3e retry
                    </li>
                  </ul>
                  <p className="mt-3 text-[13px] text-text-dim">
                    Après 3 échecs consécutifs, le webhook est désactivé et une notification est
                    envoyée à l&apos;administrateur du compte.
                  </p>
                </div>
              </section>

              {/* CTA FOOTER */}
              <section className="rounded-3xl border border-card-border bg-card p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text sm:text-2xl">
                      Prêt à brancher Qualywatch à votre stack ?
                    </h3>
                    <p className="mt-2 text-[13.5px] text-text-dim">
                      L&apos;accès API est inclus dans les plans Business et Enterprise.
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white shadow-orange-soft btn-lift hover:bg-orange-deep"
                  >
                    Demander un accès
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth="2.5"
                    />
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
