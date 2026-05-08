import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogPosts, BLOG_BASE, SITE_URL, type BlogPost } from "@/lib/blog-data";

const TITLE = "Blog Qualywatch — Guides feedback client, NPS et satisfaction (Afrique de l'Ouest)";
const DESCRIPTION =
  "Guides, comparatifs et tutoriels pour piloter la satisfaction client en Afrique de l'Ouest : NPS, gestion du feedback client, QR code, comparatifs SaaS et bonnes pratiques sectorielles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BLOG_BASE,
    type: "website",
    siteName: "Qualywatch",
    locale: "fr_SN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const groups: { label: string; eyebrow: string; filter: BlogPost["category"] }[] = [
  { label: "Guides piliers", eyebrow: "Hubs · Référence", filter: "pilier" },
  { label: "Comparatifs", eyebrow: "Choisir le bon outil", filter: "comparatif" },
  { label: "Alternatives", eyebrow: "Migrer vers Qualywatch", filter: "alternative" },
];

export default function BlogIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BLOG_BASE}#blog`,
    name: "Blog Qualywatch",
    description: DESCRIPTION,
    url: BLOG_BASE,
    inLanguage: "fr-SN",
    publisher: {
      "@type": "Organization",
      name: "Qualywatch",
      url: SITE_URL,
    },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `${BLOG_BASE}/${p.slug}`,
      datePublished: p.date,
      dateModified: p.dateModified || p.date,
      author: { "@type": "Organization", name: "Qualywatch" },
    })),
  };

  return (
    <>
      <Script
        id="blog-index-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="relative overflow-hidden pb-12 pt-28 sm:pt-32">
        {/* Background discret */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(255,225,180,0.4), transparent 60%), #FFFFFF",
          }}
        />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.25em] text-orange">
            <BookOpen className="mr-1.5 inline h-3.5 w-3.5" strokeWidth="2.5" />
            Blog Qualywatch
          </p>
          <h1 className="font-display mt-4 text-4xl font-extrabold leading-tight text-text sm:text-5xl lg:text-6xl">
            Guides, comparatifs et tutoriels pour piloter la{" "}
            <span className="italic text-orange">satisfaction client</span>{" "}
            en Afrique.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">
            Tout ce qu&apos;il faut savoir pour collecter, analyser et agir sur le
            feedback client — adapté aux PME du Sénégal, Côte d&apos;Ivoire, Mali,
            Bénin, Togo, Guinée et Burkina Faso.
          </p>
        </div>
      </section>

      {/* Articles groupés par catégorie */}
      {groups.map((group) => {
        const posts = blogPosts.filter((p) => p.category === group.filter);
        if (posts.length === 0) return null;
        return (
          <section
            key={group.filter}
            className="mx-auto max-w-5xl px-6 py-12 lg:px-8"
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-orange">
              {group.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-text sm:text-3xl">
              {group.label}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card"
                >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange">
                    {p.categoryLabel} · {p.readingTime} min
                  </p>
                  <h3 className="font-display mt-3 text-lg font-bold leading-tight text-text group-hover:text-orange">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-text-dim">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold text-orange">
                    Lire l&apos;article
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth="2.5"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Spacer bas avant footer */}
      <div className="h-16" />
    </>
  );
}
