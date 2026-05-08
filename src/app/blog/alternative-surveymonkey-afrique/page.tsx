import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, P, UL, OL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("alternative-surveymonkey-afrique")!;

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
    q: "Pourquoi chercher une alternative à SurveyMonkey en Afrique ?",
    a: "Les trois raisons les plus fréquentes : (1) tarif élevé en USD sans Mobile Money, (2) absence d'intégration WhatsApp Business qui est le canal n°1 en Afrique, (3) support principalement en anglais. Pour une PME ouest-africaine, ces trois points rendent SurveyMonkey peu pratique au quotidien.",
  },
  {
    q: "Quelle est la meilleure alternative gratuite à SurveyMonkey ?",
    a: "Qualywatch (plan Free, jusqu'à 50 feedbacks/mois) est la meilleure alternative gratuite spécifiquement adaptée au marché africain. Google Forms est aussi gratuit mais sans aucune fonction de pilotage opérationnel.",
  },
  {
    q: "Comment migrer de SurveyMonkey vers une alternative ?",
    a: "La migration prend en moyenne 30 minutes : exporter les questionnaires en CSV depuis SurveyMonkey, recréer dans le nouvel outil (souvent un template équivalent existe), importer la base contacts. L'équipe Qualywatch accompagne gratuitement les migrations depuis SurveyMonkey.",
  },
  {
    q: "Faut-il privilégier un outil africain ou international ?",
    a: "Pour une PME en Afrique de l'Ouest, un outil pensé pour le marché local (Mobile Money, WhatsApp natif, FCFA, support FR) bat presque toujours un outil international, sur le terrain pratique. Les outils internationaux gardent l'avantage uniquement sur les fonctionnalités très avancées (statistiques marketing, intégrations enterprise).",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="SurveyMonkey est cher et peu adapté au marché africain (pas de Mobile Money, pas de WhatsApp Business, support EN). Voici 5 alternatives plus pertinentes pour une PME ouest-africaine, classées par usage. Qualywatch arrive en tête pour le rapport qualité/prix et l'adaptation locale."
      faqs={faqs}
    >
      <H2 id="pourquoi">Pourquoi chercher une alternative à SurveyMonkey ?</H2>
      <UL>
        <LI><Strong>Tarif</Strong> : 25 USD/mois minimum pour les fonctions sérieuses, 75 USD/mois pour le plan Advantage. Cher pour une PME africaine.</LI>
        <LI><Strong>Plan gratuit limité</Strong> : seulement 10 questions par enquête et 40 réponses/mois — quasiment inutile en pratique.</LI>
        <LI><Strong>Pas de Mobile Money</Strong> : seulement la CB internationale, ce qui exclut beaucoup de PME africaines.</LI>
        <LI><Strong>Pas de WhatsApp Business intégré</Strong> : pourtant le canal n°1 en Afrique de l&apos;Ouest.</LI>
        <LI><Strong>Support en anglais</Strong> : peu pratique pour les équipes francophones.</LI>
      </UL>

      <H2 id="criteres">Critères de sélection d&apos;une alternative</H2>
      <OL>
        <LI><Strong>Plan gratuit utile</Strong> (au moins 50 réponses/mois pour démarrer sérieusement).</LI>
        <LI><Strong>Paiement Mobile Money</Strong> (Orange Money, Wave, MTN).</LI>
        <LI><Strong>Canaux locaux natifs</Strong> (QR code, WhatsApp Business).</LI>
        <LI><Strong>Support en français</Strong>.</LI>
        <LI><Strong>Hébergement avec faible latence depuis l&apos;Afrique</Strong> (Europe ou Afrique).</LI>
      </OL>

      <H2 id="top5">Top 5 alternatives à SurveyMonkey pour l&apos;Afrique</H2>

      <H3>1. Qualywatch (notre choix)</H3>
      <P>
        Conçu pour les PME ouest-africaines. Plan gratuit jusqu&apos;à 50 feedbacks/mois (10x plus que SurveyMonkey Free). QR code natif, WhatsApp Business intégré, paiement Mobile Money, support en français. Plans payants : 69 USD (Pro), 139 USD (Business), 190 USD (Enterprise).
      </P>

      <H3>2. Typeform</H3>
      <P>
        UX très belle, idéale pour des formulaires premium. Plan gratuit limité à 10 réponses/mois. Plan payant à 25 USD/mois. Pas de Mobile Money, pas de WhatsApp natif. Convient mieux à une agence créative qu&apos;à une PME opérationnelle.
      </P>

      <H3>3. Google Forms</H3>
      <P>
        Gratuit illimité, mais aucune fonction de pilotage (pas d&apos;alertes, pas de NPS auto, pas de dashboard). À utiliser pour des sondages internes ponctuels uniquement.
      </P>

      <H3>4. Tally</H3>
      <P>
        Alternative légère et plutôt jolie, plan gratuit illimité (basique), plans payants à partir de 29 USD/mois. Bonne option pour des formulaires simples, mais pas de spécificités pour l&apos;Afrique.
      </P>

      <H3>5. Jotform</H3>
      <P>
        Très complet, beaucoup de templates. Plan gratuit limité à 100 soumissions/mois. Plans payants à partir de 34 USD/mois. Pas de Mobile Money, pas d&apos;adaptation africaine.
      </P>

      <H2 id="comparatif">Tableau comparatif des 5 alternatives</H2>
      <ComparisonTable
        headers={["Critère", "Qualywatch", "Typeform", "Google Forms", "Tally", "Jotform"]}
        rows={[
          ["Plan gratuit utile", "50/mois", "10/mois", "Illimité", "Illimité (basique)", "100/mois"],
          ["Plan payant entrée", "69 USD", "25 USD", "—", "29 USD", "34 USD"],
          ["Mobile Money", "Oui", "Non", "—", "Non", "Non"],
          ["WhatsApp Business", "Oui", "Non", "Non", "Non", "Non"],
          ["QR code natif", "Oui", "Manuel", "Manuel", "Manuel", "Oui"],
          ["NPS auto", "Oui", "Limité", "Non", "Non", "Limité"],
          ["Alertes temps réel", "Oui", "Plan Plus", "Non", "Non", "Oui"],
          ["IA d'analyse", "Oui", "Non", "Non", "Non", "Limité"],
          ["Support FR", "Oui", "Limité", "Limité", "Limité", "Oui"],
          ["Adapté Afrique", "Conçu pour", "Non", "Non", "Non", "Non"],
        ]}
      />

      <H2 id="migration">Comment migrer de SurveyMonkey vers Qualywatch</H2>
      <OL>
        <LI><Strong>Exportez vos données SurveyMonkey</Strong> en CSV (Account → Export).</LI>
        <LI><Strong>Créez un compte Qualywatch</Strong> gratuit (2 minutes).</LI>
        <LI><Strong>Recréez vos formulaires</Strong> à partir des templates Qualywatch (5-10 minutes par formulaire).</LI>
        <LI><Strong>Importez votre base contacts</Strong> via Excel ou Google Sheets.</LI>
        <LI><Strong>Activez Mobile Money</Strong> et passez en plan Pro si besoin de plus de 50 feedbacks/mois.</LI>
      </OL>

      <Callout title="Notre engagement" variant="success">
        L&apos;équipe Qualywatch accompagne <Strong>gratuitement</Strong> les migrations depuis SurveyMonkey. Économie typique observée : 50 à 70 % du coût annuel.
      </Callout>
    </BlogArticle>
  );
}
