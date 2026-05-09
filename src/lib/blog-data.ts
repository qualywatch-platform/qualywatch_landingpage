/**
 * Source unique de vérité pour tous les articles du blog Qualywatch.
 *
 * Utilisée par :
 *  - src/app/sitemap.ts (génération automatique des URLs)
 *  - src/app/blog/page.tsx (index du blog)
 *  - chaque src/app/blog/<slug>/page.tsx (related posts, breadcrumbs)
 *  - composants <BlogCard /> et <RelatedPosts />
 */
export type BlogCategory =
  | "pilier"
  | "comparatif"
  | "alternative"
  | "guide-sectoriel"
  | "tutoriel";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string; // ISO format YYYY-MM-DD
  dateModified?: string;
  readingTime: number; // minutes
  /** Mots-clés ciblés — utilisés pour la <meta keywords> et le suivi SEO */
  keywords: string[];
  /** Slugs des articles connexes — pour le maillage interne */
  related?: string[];
};

export const SITE_URL = "https://www.qualywatch.com";
export const BLOG_BASE = `${SITE_URL}/blog`;

export const blogPosts: BlogPost[] = [
  // ============== PILIERS ==============
  {
    slug: "gestion-feedback-client-guide-complet",
    title:
      "Gestion du feedback client : le guide complet 2026 pour les PME africaines",
    description:
      "Tout savoir sur la gestion du feedback client en 2026 : définition, méthodes de collecte (QR code, WhatsApp, email), outils, KPIs et bonnes pratiques pour les PME du Sénégal et d'Afrique de l'Ouest.",
    category: "pilier",
    categoryLabel: "Guide pilier",
    date: "2026-05-03",
    readingTime: 12,
    keywords: [
      "gestion feedback client",
      "logiciel feedback client",
      "voix du client",
      "collecte feedback PME Afrique",
      "guide feedback client 2026",
    ],
    related: [
      "nps-satisfaction-client-guide",
      "comment-collecter-feedback-qr-code",
      "logiciel-feedback-client-pme-afrique",
    ],
  },
  {
    slug: "nps-satisfaction-client-guide",
    title:
      "NPS et satisfaction client : guide complet 2026 (avec benchmarks Afrique)",
    description:
      "Le Net Promoter Score (NPS) expliqué simplement : définition, calcul, interprétation, benchmarks par secteur en Afrique de l'Ouest, et méthode pour améliorer son NPS en 30 jours.",
    category: "pilier",
    categoryLabel: "Guide pilier",
    date: "2026-05-03",
    readingTime: 10,
    keywords: [
      "NPS",
      "Net Promoter Score",
      "satisfaction client",
      "CSAT",
      "benchmark NPS Afrique",
      "calcul NPS",
    ],
    related: [
      "gestion-feedback-client-guide-complet",
      "comment-collecter-feedback-qr-code",
      "feedback-client-restaurant-afrique",
    ],
  },
  {
    slug: "feedback-client-restaurant-afrique",
    title:
      "Feedback client restaurant en Afrique : le guide pratique 2026",
    description:
      "Comment collecter et gérer le feedback client dans un restaurant à Dakar, Abidjan ou Bamako. Méthode QR code en table, gestion des avis Google, KPIs et 10 bonnes pratiques.",
    category: "pilier",
    categoryLabel: "Guide pilier",
    date: "2026-05-03",
    readingTime: 9,
    keywords: [
      "feedback client restaurant",
      "avis client restaurant Dakar",
      "satisfaction client restauration Afrique",
      "QR code restaurant",
      "logiciel restaurant Sénégal",
    ],
    related: [
      "comment-collecter-feedback-qr-code",
      "logiciel-feedback-client-pme-afrique",
      "qualywatch-vs-google-forms",
    ],
  },
  {
    slug: "logiciel-feedback-client-pme-afrique",
    title:
      "Meilleur logiciel de feedback client pour PME en Afrique de l'Ouest (2026)",
    description:
      "Comparatif des meilleurs logiciels de gestion du feedback client adaptés aux PME africaines : critères de choix, top 5, prix en FCFA, paiement Mobile Money, support en français.",
    category: "pilier",
    categoryLabel: "Guide pilier",
    date: "2026-05-03",
    readingTime: 11,
    keywords: [
      "logiciel feedback client PME",
      "meilleur logiciel satisfaction client Afrique",
      "outil feedback client UEMOA",
      "SaaS feedback PME Sénégal",
      "tarif logiciel feedback FCFA",
    ],
    related: [
      "qualywatch-vs-surveymonkey",
      "qualywatch-vs-typeform",
      "alternative-surveymonkey-afrique",
    ],
  },
  {
    slug: "comment-collecter-feedback-qr-code",
    title:
      "Comment collecter du feedback client par QR code : tutoriel complet 2026",
    description:
      "Tutoriel pas à pas pour collecter le feedback client avec un QR code : génération, placement (table, comptoir, sortie), formulaire optimisé, suivi temps réel et exemples concrets.",
    category: "pilier",
    categoryLabel: "Tutoriel pilier",
    date: "2026-05-03",
    readingTime: 8,
    keywords: [
      "QR code feedback",
      "collecter feedback client QR code",
      "tutoriel QR code restaurant",
      "scan QR avis client",
    ],
    related: [
      "gestion-feedback-client-guide-complet",
      "feedback-client-restaurant-afrique",
      "nps-satisfaction-client-guide",
    ],
  },

  // ============== COMPARATIFS ==============
  {
    slug: "qualywatch-vs-surveymonkey",
    title:
      "Qualywatch vs SurveyMonkey : comparatif complet 2026 (PME africaines)",
    description:
      "Qualywatch ou SurveyMonkey : quel outil de feedback client choisir en 2026 ? Comparatif détaillé prix, fonctionnalités, support, paiement Mobile Money et adaptation au marché africain.",
    category: "comparatif",
    categoryLabel: "Comparatif",
    date: "2026-05-03",
    readingTime: 9,
    keywords: [
      "Qualywatch vs SurveyMonkey",
      "alternative SurveyMonkey",
      "comparatif logiciel feedback client",
      "SurveyMonkey Afrique",
    ],
    related: [
      "qualywatch-vs-typeform",
      "qualywatch-vs-google-forms",
      "alternative-surveymonkey-afrique",
    ],
  },
  {
    slug: "qualywatch-vs-typeform",
    title:
      "Qualywatch vs Typeform : comparatif 2026 pour PME francophones",
    description:
      "Qualywatch ou Typeform : quel logiciel de formulaires et feedback client choisir ? Comparatif honnête prix, ergonomie, intégrations, support FR et adaptation Afrique.",
    category: "comparatif",
    categoryLabel: "Comparatif",
    date: "2026-05-03",
    readingTime: 8,
    keywords: [
      "Qualywatch vs Typeform",
      "alternative Typeform",
      "comparatif Typeform PME",
      "Typeform Afrique francophone",
    ],
    related: [
      "qualywatch-vs-surveymonkey",
      "qualywatch-vs-google-forms",
      "logiciel-feedback-client-pme-afrique",
    ],
  },
  {
    slug: "qualywatch-vs-google-forms",
    title:
      "Qualywatch vs Google Forms : pourquoi changer en 2026",
    description:
      "Google Forms est gratuit, mais limité pour piloter la satisfaction client. Comparatif Qualywatch vs Google Forms : fonctionnalités, IA, alertes temps réel, gamification.",
    category: "comparatif",
    categoryLabel: "Comparatif",
    date: "2026-05-03",
    readingTime: 7,
    keywords: [
      "Qualywatch vs Google Forms",
      "alternative Google Forms",
      "Google Forms feedback client",
      "limites Google Forms",
    ],
    related: [
      "qualywatch-vs-surveymonkey",
      "qualywatch-vs-typeform",
      "comment-collecter-feedback-qr-code",
    ],
  },

  // ============== ALTERNATIVES ==============
  {
    slug: "alternative-surveymonkey-afrique",
    title:
      "Top 5 alternatives à SurveyMonkey pour l'Afrique de l'Ouest (2026)",
    description:
      "Vous cherchez une alternative à SurveyMonkey adaptée au marché africain ? Top 5 outils avec paiement Mobile Money, support français et tarifs en FCFA. Comparatif 2026.",
    category: "alternative",
    categoryLabel: "Alternative",
    date: "2026-05-03",
    readingTime: 8,
    keywords: [
      "alternative SurveyMonkey",
      "alternative SurveyMonkey Afrique",
      "logiciel sondage gratuit Afrique",
      "outil enquête FCFA",
    ],
    related: [
      "qualywatch-vs-surveymonkey",
      "logiciel-feedback-client-pme-afrique",
      "alternative-typeform-pme-afrique",
    ],
  },
  {
    slug: "alternative-typeform-pme-afrique",
    title:
      "Alternative à Typeform pour les PME d'Afrique de l'Ouest (2026)",
    description:
      "Typeform est élégant mais cher. Découvrez 5 alternatives à Typeform plus abordables, en français et adaptées aux PME du Sénégal, Côte d'Ivoire, Mali et Bénin.",
    category: "alternative",
    categoryLabel: "Alternative",
    date: "2026-05-03",
    readingTime: 7,
    keywords: [
      "alternative Typeform",
      "alternative Typeform Afrique",
      "logiciel formulaire PME Afrique",
      "Typeform pas cher",
    ],
    related: [
      "qualywatch-vs-typeform",
      "alternative-surveymonkey-afrique",
      "logiciel-feedback-client-pme-afrique",
    ],
  },
  {
    slug: "customer-service-solutions",
    title: "Customer Service Solutions",
    description:
      "The toolkit that turns every customer signal into a fast, measurable action — across every channel, in real time.",
    category: "pilier",
    categoryLabel: "Solutions",
    date: "2026-05-09",
    readingTime: 2,
    keywords: [
      "customer service solutions",
      "customer feedback platform",
      "real-time customer alerts",
      "NPS tracking software",
      "WhatsApp Business feedback",
    ],
    related: [
      "solutions-service-client",
      "gestion-feedback-client-guide-complet",
      "logiciel-feedback-client-pme-afrique",
    ],
  },
  {
    slug: "solutions-service-client",
    title: "Solutions de service client",
    description:
      "La boîte à outils qui transforme chaque signal client en action rapide et mesurable — sur tous les canaux, en temps réel.",
    category: "pilier",
    categoryLabel: "Solutions",
    date: "2026-05-09",
    readingTime: 2,
    keywords: [
      "solutions service client",
      "logiciel feedback client",
      "alertes temps réel client",
      "suivi NPS automatique",
      "WhatsApp Business feedback",
    ],
    related: [
      "customer-service-solutions",
      "gestion-feedback-client-guide-complet",
      "logiciel-feedback-client-pme-afrique",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post?.related) return [];
  return post.related
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== undefined);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
