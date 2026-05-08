import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, P, UL, OL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("alternative-typeform-pme-afrique")!;

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
    q: "Pourquoi Typeform ne convient pas toujours aux PME africaines ?",
    a: "Trois raisons : tarif élevé en USD (25 USD/mois minimum sérieux), plan gratuit limité à 10 réponses/mois, absence d'intégrations locales (pas de Mobile Money, pas de WhatsApp Business). Pour une PME ouest-africaine qui veut piloter sa satisfaction client au quotidien, c'est limitant.",
  },
  {
    q: "Existe-t-il une alternative gratuite à Typeform ?",
    a: "Oui, plusieurs : Qualywatch (50 feedbacks/mois gratuits, optimisé Afrique), Google Forms (illimité mais basique), et Tally (illimité mais sans fonctions de pilotage avancées). Qualywatch est la plus pertinente pour le marché africain.",
  },
  {
    q: "Quelle alternative à Typeform garde une UX aussi belle ?",
    a: "Tally et Forms.app proposent une UX moderne proche de Typeform. Mais aucune alternative ne reproduit exactement la qualité visuelle de Typeform. Si la beauté visuelle est critique pour vous, Typeform reste la référence — sinon, Qualywatch propose une UX moderne suffisante avec beaucoup plus de fonctions.",
  },
  {
    q: "Comment passer de Typeform à Qualywatch sans perdre mes données ?",
    a: "Exportez vos réponses Typeform en CSV (My Workspace → Workspace settings → Export data). Créez votre compte Qualywatch et recréez vos formulaires depuis les templates équivalents (5-10 min). Importez votre base contacts. L'équipe Qualywatch accompagne gratuitement la migration.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Typeform est élégant mais cher (25 USD/mois minimum) et peu adapté à l'Afrique de l'Ouest (pas de Mobile Money, pas de WhatsApp natif). Voici 5 alternatives plus abordables et mieux adaptées aux PME ouest-africaines, avec Qualywatch en tête pour le rapport fonctionnalités/prix."
      faqs={faqs}
    >
      <H2 id="pourquoi">Pourquoi chercher une alternative à Typeform ?</H2>
      <UL>
        <LI><Strong>Plan gratuit trop limité</Strong> : 10 réponses/mois maximum. C&apos;est insuffisant pour quasiment tous les usages professionnels.</LI>
        <LI><Strong>Plan payant cher</Strong> : 25 USD/mois pour le plan Basic, 50 USD/mois pour le Plus avec alertes.</LI>
        <LI><Strong>Pas de Mobile Money</Strong> : seulement la CB internationale.</LI>
        <LI><Strong>Pas de WhatsApp Business intégré</Strong> : alors que c&apos;est le canal n°1 en Afrique.</LI>
        <LI><Strong>Charge un peu lente depuis l&apos;Afrique</Strong> : serveurs principalement en Europe et USA.</LI>
      </UL>

      <H2 id="criteres">Critères pour choisir une bonne alternative</H2>
      <OL>
        <LI><Strong>Plan gratuit utile</Strong> (au moins 50 réponses/mois pour démarrer).</LI>
        <LI><Strong>Tarif en FCFA ou en USD modeste</Strong> (idéalement &lt; 70 USD/mois pour le plan opérationnel).</LI>
        <LI><Strong>Paiement Mobile Money</Strong>.</LI>
        <LI><Strong>Canaux locaux</Strong> : QR code natif, WhatsApp Business intégré.</LI>
        <LI><Strong>Support en français</Strong>.</LI>
      </OL>

      <H2 id="top5">Top 5 alternatives à Typeform pour PME africaines</H2>

      <H3>1. Qualywatch (notre choix)</H3>
      <P>
        Plan gratuit jusqu&apos;à 50 feedbacks/mois (5x plus que Typeform Free). QR code natif, WhatsApp Business intégré, paiement Mobile Money, support FR, IA d&apos;analyse, gamification équipe. Plan Pro à 69 USD/mois. Conçu pour les PME ouest-africaines.
      </P>

      <H3>2. Tally</H3>
      <P>
        Alternative gratuite illimitée avec une UX moderne plutôt jolie. Plan payant à partir de 29 USD/mois. Pas de Mobile Money, pas d&apos;adaptation africaine, mais bon pour un usage basique ponctuel.
      </P>

      <H3>3. Google Forms</H3>
      <P>
        Gratuit illimité. UX très basique, pas de pilotage. Convient pour des sondages internes ponctuels mais pas pour un suivi opérationnel sérieux de la satisfaction client.
      </P>

      <H3>4. Forms.app</H3>
      <P>
        Plan gratuit limité à 100 réponses/mois. Plan payant à partir de 25 USD/mois. UX moderne, beaucoup de templates, mais pas d&apos;intégration WhatsApp ni de Mobile Money.
      </P>

      <H3>5. Jotform</H3>
      <P>
        Plan gratuit à 100 soumissions/mois. Plan payant à partir de 34 USD/mois. Très complet, beaucoup d&apos;intégrations, mais pas spécifique Afrique.
      </P>

      <H2 id="comparatif">Tableau comparatif des 5 alternatives</H2>
      <ComparisonTable
        headers={["Critère", "Qualywatch", "Tally", "Google Forms", "Forms.app", "Jotform"]}
        rows={[
          ["Plan gratuit", "50/mois (utile)", "Illimité (basique)", "Illimité (basique)", "100/mois", "100/mois"],
          ["Plan payant entrée", "69 USD", "29 USD", "—", "25 USD", "34 USD"],
          ["Mobile Money", "Oui", "Non", "—", "Non", "Non"],
          ["WhatsApp Business", "Oui", "Non", "Non", "Non", "Non"],
          ["QR code natif", "Oui", "Manuel", "Manuel", "Oui", "Oui"],
          ["NPS auto", "Oui", "Non", "Non", "Limité", "Limité"],
          ["Alertes temps réel", "Oui", "Plan payant", "Non", "Plan payant", "Oui"],
          ["IA d'analyse", "Oui", "Non", "Non", "Non", "Limité"],
          ["Gamification équipe", "Oui (KaliPoints)", "Non", "Non", "Non", "Non"],
          ["Support FR", "Oui", "Limité", "Limité", "Limité", "Oui"],
        ]}
      />

      <H2 id="recommandation">Notre recommandation par profil</H2>
      <UL>
        <LI><Strong>PME africaine voulant piloter la satisfaction client</Strong> → Qualywatch.</LI>
        <LI><Strong>Besoin d&apos;UX très soignée pour un formulaire vitrine</Strong> → Tally ou Typeform (si budget OK).</LI>
        <LI><Strong>Sondage interne ponctuel zéro budget</Strong> → Google Forms.</LI>
        <LI><Strong>Formulaire avec beaucoup d&apos;intégrations</Strong> → Jotform.</LI>
        <LI><Strong>Restaurant, hôtel, retail en Afrique</Strong> → Qualywatch (QR code + WhatsApp + alertes natives).</LI>
      </UL>

      <Callout title="Migration accompagnée" variant="success">
        Si vous êtes sur Typeform et voulez migrer, l&apos;équipe Qualywatch vous accompagne <Strong>gratuitement</Strong>. Comptez 30 minutes pour la migration complète. Économies typiques : 40 à 60 % du coût annuel.
      </Callout>
    </BlogArticle>
  );
}
