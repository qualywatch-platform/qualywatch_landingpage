import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import {
  BLOG_BASE,
  SITE_URL,
  type BlogPost,
  getRelatedPosts,
} from "@/lib/blog-data";
import { RelatedPosts } from "./RelatedPosts";
import { BlogFAQ } from "./BlogFAQ";

export type BlogArticleProps = {
  post: BlogPost;
  /** Bloc principal de contenu (paragraphes, sections, tableaux). */
  children: React.ReactNode;
  /** Résumé en 2-3 lignes affiché dans une bannière en haut (TL;DR). */
  tldr: string;
  /** FAQ optionnelle — incluse à la fin de l'article + injectée en JSON-LD FAQPage. */
  faqs?: { q: string; a: string }[];
};

/**
 * Layout commun à tous les articles du blog Qualywatch.
 * Injecte automatiquement Article + BreadcrumbList + (optionnellement) FAQPage en JSON-LD.
 */
export function BlogArticle({ post, children, tldr, faqs }: BlogArticleProps) {
  const url = `${BLOG_BASE}/${post.slug}`;
  const related = getRelatedPosts(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Organization",
      name: "Qualywatch",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Qualywatch",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "fr-SN",
    keywords: post.keywords.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: BLOG_BASE },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqJsonLd = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <Script
        id={`article-jsonld-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id={`breadcrumb-jsonld-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <Script
          id={`faq-jsonld-${post.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article className="relative pb-24 pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Fil d'Ariane"
            className="font-mono mb-6 flex items-center gap-1.5 text-[12px] uppercase tracking-widest text-text-dim"
          >
            <Link href="/" className="transition hover:text-orange">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth="2.5" />
            <Link href="/blog" className="transition hover:text-orange">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth="2.5" />
            <span className="text-orange">{post.categoryLabel}</span>
          </nav>

          {/* Eyebrow + titre */}
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.25em] text-orange">
            {post.categoryLabel}
          </p>
          <h1 className="font-display mt-3 text-3xl font-extrabold leading-tight text-text sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-dim">
            {post.description}
          </p>

          {/* Méta (date + lecture) */}
          <div className="font-mono mt-6 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-widest text-text-dim">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-orange" strokeWidth="2.5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-orange" strokeWidth="2.5" />
              {post.readingTime} min de lecture
            </span>
          </div>

          {/* TL;DR */}
          <aside
            className="mt-10 rounded-2xl border-l-4 p-6"
            style={{
              borderColor: "#FA700D",
              background: "#FFF4EB",
            }}
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-orange">
              TL;DR
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text">
              {tldr}
            </p>
          </aside>

          {/* Contenu principal */}
          <div className="prose-qw mt-10">{children}</div>

          {/* FAQ */}
          {faqs && faqs.length > 0 && <BlogFAQ faqs={faqs} />}

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-text p-8 text-white sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Prêt à transformer chaque feedback en action ?
            </h2>
            <p className="mt-3 text-base text-white/70">
              Qualywatch est gratuit jusqu&apos;à 50 feedbacks par mois.
              Configurez votre première campagne en 10 minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://app.qualywatch.com"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                Essayer gratuitement
                <ChevronRight className="h-4 w-4" strokeWidth="2.5" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Demander une démo
              </Link>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && <RelatedPosts posts={related} />}

          {/* Retour blog */}
          <div className="mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-dim transition hover:text-orange"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth="2.5" />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
