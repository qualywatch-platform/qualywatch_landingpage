import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, P, UL, OL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("logiciel-feedback-client-pme-afrique")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: `${BLOG_BASE}/${post.slug}`,
    locale: "fr_SN",
    siteName: "Qualywatch",
    publishedTime: post.date,
  },
  twitter: { card: "summary_large_image", title: post.title, description: post.description },
};

const faqs = [
  {
    q: "Quel est le meilleur logiciel de feedback client pour une PME africaine en 2026 ?",
    a: "Le meilleur logiciel pour une PME en Afrique de l'Ouest combine 5 critères : prix abordable (idéalement gratuit pour démarrer), paiement Mobile Money (Orange Money, Wave, MTN), interface en français, canaux adaptés (QR code et WhatsApp natifs), et support local réactif. Qualywatch est aujourd'hui le seul outil pensé spécifiquement pour ce marché.",
  },
  {
    q: "Quel budget prévoir pour un logiciel de feedback client ?",
    a: "Pour une PME en Afrique de l'Ouest, comptez entre 0 et 70 USD/mois (≈ 0 à 42 000 FCFA). Un plan gratuit suffit pour démarrer (jusqu'à 50 feedbacks/mois). Au-delà, comptez 30-70 USD pour les fonctionnalités avancées (multi-services, custom fields, IA d'analyse).",
  },
  {
    q: "Faut-il un logiciel international ou local ?",
    a: "Pour une PME africaine, un logiciel pensé pour le marché local bat presque toujours un logiciel international, pour 4 raisons : prix adaptés (FCFA, Mobile Money), latence réduite (hébergement proche), support en français avec compréhension du contexte, et intégration WhatsApp native. Les outils US (SurveyMonkey, Typeform) sont puissants mais souvent surdimensionnés et chers.",
  },
  {
    q: "Quels sont les outils gratuits pour collecter du feedback client ?",
    a: "Trois options gratuites pertinentes : Qualywatch (plan Free jusqu'à 50 feedbacks/mois, avec QR code + WhatsApp + alertes), Google Forms (gratuit illimité mais sans alertes ni dashboard), et Typeform Free (limité à 10 réponses/mois, vraiment trop peu). Qualywatch est de loin le plus généreux pour le marché africain.",
  },
  {
    q: "Comment migrer depuis SurveyMonkey ou Typeform vers Qualywatch ?",
    a: "La migration prend en moyenne 30 minutes : 1) Exportez vos questionnaires existants (CSV ou copie-coller). 2) Recréez-les dans Qualywatch (les templates sont déjà disponibles). 3) Importez votre liste clients via Excel ou Google Sheets. 4) Générez vos QR codes. Notre équipe accompagne gratuitement les migrations.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="En 2026, choisir un logiciel de feedback client pour une PME en Afrique de l'Ouest se joue sur 5 critères : prix en FCFA, paiement Mobile Money, support français, QR code et WhatsApp natifs, hébergement proche. Qualywatch est aujourd'hui le seul outil pensé spécifiquement pour ce marché. Voici le top 5, le tableau comparatif et nos recommandations par profil."
      faqs={faqs}
    >
      <H2 id="criteres">Les 5 critères de choix pour une PME africaine</H2>
      <P>
        Avant de comparer les outils, il faut clarifier vos besoins. Pour une PME en Afrique de l&apos;Ouest, ces 5 critères sont déterminants :
      </P>
      <OL>
        <LI><Strong>Prix adapté au marché local</Strong> — un plan gratuit ou à moins de 70 USD/mois, idéalement avec tarif en FCFA.</LI>
        <LI><Strong>Paiement Mobile Money</Strong> — Orange Money, Wave, MTN sont indispensables (la CB internationale n&apos;est pas universelle).</LI>
        <LI><Strong>Canaux natifs adaptés</Strong> — QR code et WhatsApp Business obligatoires en 2026.</LI>
        <LI><Strong>Support en français</Strong> — un support EN-only est un blocage pour la majorité des équipes terrain.</LI>
        <LI><Strong>Hébergement avec faible latence</Strong> — un serveur en Europe ou Afrique de l&apos;Ouest, pas en Asie.</LI>
      </OL>

      <H2 id="top5">Top 5 logiciels de feedback client pour PME en Afrique de l&apos;Ouest</H2>

      <H3>1. Qualywatch</H3>
      <P>
        Pensé spécifiquement pour les PME ouest-africaines. Plan gratuit jusqu&apos;à 50 feedbacks/mois, puis 69 USD pour le plan Pro. QR code natif, WhatsApp Business intégré, paiement Mobile Money, support en français, hébergement Europe (Allemagne).
      </P>

      <H3>2. SurveyMonkey</H3>
      <P>
        Le leader mondial. Très puissant, beaucoup de templates, mais cher (à partir de 25 USD/mois) et pas optimisé pour l&apos;Afrique : pas de Mobile Money, pas de WhatsApp natif, support EN principalement.
      </P>

      <H3>3. Typeform</H3>
      <P>
        UX très élégante, formulaires conversationnels. Plan gratuit limité à 10 réponses/mois (insuffisant). Plan payant à 25 USD/mois mais sans intégration Mobile Money ni WhatsApp.
      </P>

      <H3>4. Google Forms</H3>
      <P>
        Gratuit et illimité. Suffisant pour des sondages basiques, mais aucune fonction de pilotage (pas d&apos;alertes, pas de dashboard avancé, pas de NPS calculé automatiquement). À utiliser seulement comme outil temporaire.
      </P>

      <H3>5. Medallia</H3>
      <P>
        Outil enterprise très puissant (utilisé par les grandes entreprises). Hors budget pour une PME (à partir de 1 000 USD/mois), et complexité élevée. À considérer seulement à partir de plusieurs centaines d&apos;employés.
      </P>

      <H2 id="comparatif">Tableau comparatif détaillé</H2>
      <ComparisonTable
        headers={["Critère", "Qualywatch", "SurveyMonkey", "Typeform", "Google Forms"]}
        rows={[
          ["Prix entrée de gamme", "Gratuit (50 feedbacks/mois)", "25 USD/mois", "0 (10 réponses/mois)", "Gratuit"],
          ["Paiement Mobile Money", "Oui (Orange Money, Wave, MTN)", "Non", "Non", "—"],
          ["QR code natif", "Oui", "Limité", "Oui", "Limité"],
          ["WhatsApp Business intégré", "Oui", "Non", "Non", "Non"],
          ["NPS / CSAT calculés auto", "Oui", "Oui", "Limité", "Non"],
          ["Alertes temps réel", "Oui", "Plan payant", "Plan payant", "Non"],
          ["Support en français", "Oui", "Limité", "Limité", "Limité"],
          ["IA d'analyse verbatims", "Oui (Llama 3.3 70B)", "Plan enterprise", "Non", "Non"],
          ["Adapté Afrique", "Conçu pour", "Non spécifique", "Non spécifique", "Non spécifique"],
        ]}
      />

      <H2 id="recommandation">Notre recommandation par profil</H2>
      <UL>
        <LI><Strong>Restaurant, hôtel, retail à Dakar/Abidjan/Bamako</Strong> → <Strong>Qualywatch</Strong> (QR code + WhatsApp natifs, gamification équipe).</LI>
        <LI><Strong>PME B2B internationale</Strong> → SurveyMonkey ou Qualywatch selon budget.</LI>
        <LI><Strong>Startup avec budget zéro</Strong> → Qualywatch plan Free, puis Google Forms en fallback.</LI>
        <LI><Strong>Grande entreprise (500+ employés)</Strong> → Qualywatch Business/Enterprise ou Medallia selon scale.</LI>
        <LI><Strong>Agence freelance / consultant</Strong> → Typeform pour l&apos;UX, Qualywatch pour le pilotage opérationnel.</LI>
      </UL>

      <Callout title="Pour démarrer aujourd'hui" variant="success">
        Le plan Free de Qualywatch couvre 90 % des besoins d&apos;une PME qui démarre. Inscription en 2 minutes, premier QR code généré en 5 minutes, premier feedback collecté dans la journée.
      </Callout>
    </BlogArticle>
  );
}
