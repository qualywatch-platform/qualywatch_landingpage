import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, UL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("qualywatch-vs-surveymonkey")!;

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
    q: "SurveyMonkey est-il disponible en Afrique ?",
    a: "Oui, SurveyMonkey est techniquement accessible depuis l'Afrique (l'app fonctionne). Mais le service n'est pas spécifiquement adapté : pas de paiement Mobile Money, support en anglais uniquement, pas de WhatsApp Business intégré, et tarifs élevés (à partir de 25 USD/mois) pour des fonctions souvent disproportionnées par rapport aux besoins d'une PME africaine.",
  },
  {
    q: "Peut-on migrer de SurveyMonkey vers Qualywatch ?",
    a: "Oui, en moins de 30 minutes. Exportez vos questionnaires depuis SurveyMonkey (CSV ou copie-coller), recréez-les dans Qualywatch (les templates équivalents sont disponibles), importez votre base contacts via Excel. L'équipe Qualywatch accompagne gratuitement les migrations.",
  },
  {
    q: "Qualywatch a-t-il toutes les fonctions de SurveyMonkey ?",
    a: "Pour les besoins courants des PME, oui : NPS, CSAT, formulaires personnalisables, tableaux de bord, exports, alertes. Qualywatch ajoute en plus : QR code natif, WhatsApp Business intégré, paiement Mobile Money, gamification équipe (KaliPoints), et IA d'analyse des verbatims. SurveyMonkey reste plus complet pour les enquêtes académiques ou marketing très complexes.",
  },
  {
    q: "Quel outil est le moins cher pour démarrer ?",
    a: "Qualywatch propose un plan gratuit jusqu'à 50 feedbacks/mois — c'est largement suffisant pour démarrer. SurveyMonkey a aussi un plan gratuit, mais limité à 10 questions par enquête et 40 réponses/mois, ce qui est trop peu pour un usage professionnel sérieux.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="SurveyMonkey est une référence mondiale de l'enquête en ligne, mais cher et non optimisé pour le marché africain. Qualywatch est plus abordable, accepte le Mobile Money, intègre nativement le QR code et WhatsApp Business, et propose un support en français. Pour une PME ouest-africaine, Qualywatch gagne sur le terrain pratique. Pour des études marketing complexes ou académiques, SurveyMonkey reste plus complet."
      faqs={faqs}
    >
      <H2 id="resume">Le résumé en 3 lignes</H2>
      <UL>
        <LI><Strong>Choisissez SurveyMonkey si</Strong> vous menez des études marketing complexes, avez un budget USD confortable et n&apos;avez pas besoin de canaux locaux (Mobile Money, WhatsApp).</LI>
        <LI><Strong>Choisissez Qualywatch si</Strong> vous êtes une PME en Afrique de l&apos;Ouest, voulez piloter la satisfaction client en temps réel, et payer en FCFA via Mobile Money.</LI>
        <LI><Strong>Pour 80 % des PME ouest-africaines</Strong>, Qualywatch est le meilleur rapport qualité/prix.</LI>
      </UL>

      <H2 id="surveymonkey">SurveyMonkey en bref</H2>
      <H3>Ce qu&apos;on aime</H3>
      <UL>
        <LI>Référence mondiale, plus de 20 ans d&apos;histoire, ultra-fiable.</LI>
        <LI>Bibliothèque de templates immense (1 500+ enquêtes prêtes).</LI>
        <LI>Fonctions d&apos;analyse statistique avancées (idéal pour études marketing).</LI>
        <LI>Intégrations riches (Salesforce, HubSpot, Slack, etc.).</LI>
      </UL>
      <H3>Ce qu&apos;on aime moins</H3>
      <UL>
        <LI>Cher (à partir de 25 USD/mois pour les fonctions sérieuses).</LI>
        <LI>Plan gratuit très limité (10 questions, 40 réponses/mois).</LI>
        <LI>Pas de paiement Mobile Money — seulement CB internationale.</LI>
        <LI>Support principalement en anglais.</LI>
        <LI>Pas de QR code natif ni de WhatsApp Business intégré.</LI>
        <LI>Aucune adaptation au marché africain (devises, langues, exemples sectoriels).</LI>
      </UL>

      <H2 id="qualywatch">Qualywatch en bref</H2>
      <H3>Ce qu&apos;on aime</H3>
      <UL>
        <LI>Pensé pour les PME d&apos;Afrique de l&apos;Ouest dès la conception.</LI>
        <LI>Plan gratuit généreux (50 feedbacks/mois — soit 10x SurveyMonkey).</LI>
        <LI>QR code natif et WhatsApp Business intégrés.</LI>
        <LI>Paiement Mobile Money (Orange Money, Wave, MTN).</LI>
        <LI>Support en français, équipe basée à Dakar.</LI>
        <LI>Gamification équipe (KaliPoints) pour motiver le terrain.</LI>
        <LI>IA d&apos;analyse des verbatims (Llama 3.3 70B).</LI>
      </UL>
      <H3>Ce qu&apos;on aime moins</H3>
      <UL>
        <LI>Bibliothèque de templates plus restreinte que SurveyMonkey.</LI>
        <LI>Moins d&apos;intégrations tierces (mais l&apos;API REST permet de tout connecter).</LI>
        <LI>Outil plus jeune — historique court par rapport à SurveyMonkey.</LI>
      </UL>

      <H2 id="comparatif">Tableau comparatif détaillé</H2>
      <ComparisonTable
        headers={["Critère", "Qualywatch", "SurveyMonkey"]}
        rows={[
          ["Prix entrée de gamme", "Gratuit (50 feedbacks/mois)", "25 USD/mois (au-delà du plan Free très limité)"],
          ["Plan gratuit utile", "Oui (50 feedbacks/mois)", "Limité (10 questions, 40 réponses)"],
          ["Paiement Mobile Money", "Oui (Orange Money, Wave, MTN)", "Non"],
          ["QR code natif", "Oui, par point de contact", "Limité"],
          ["WhatsApp Business", "Intégré", "Non"],
          ["NPS / CSAT calculés auto", "Oui", "Oui"],
          ["Alertes temps réel", "Oui (toutes formules)", "Plan payant uniquement"],
          ["IA d'analyse verbatims", "Oui (Llama 3.3 70B)", "Plan Enterprise uniquement"],
          ["Gamification équipe", "Oui (KaliPoints)", "Non"],
          ["Support en français", "Oui", "Limité"],
          ["Hébergement bas-latence Afrique", "Oui (Allemagne)", "USA"],
          ["Adapté Afrique de l'Ouest", "Conçu pour", "Non spécifique"],
        ]}
      />

      <H2 id="recommandation">Notre recommandation par profil</H2>
      <UL>
        <LI><Strong>PME africaine (restaurant, hôtel, retail, banque)</Strong> → <Strong>Qualywatch</Strong>, sans hésiter.</LI>
        <LI><Strong>Cabinet d&apos;études marketing</Strong> → SurveyMonkey si études quantitatives lourdes, Qualywatch si focus PME africaines.</LI>
        <LI><Strong>Université / chercheur</Strong> → SurveyMonkey (analyse statistique poussée).</LI>
        <LI><Strong>Startup en pleine croissance Afrique</Strong> → Qualywatch (scalable, moins cher, plus pertinent).</LI>
        <LI><Strong>Multinational avec présence Afrique</Strong> → Combo Qualywatch (Afrique) + SurveyMonkey (autres régions).</LI>
      </UL>

      <Callout title="Migration facile" variant="success">
        Si vous êtes déjà sur SurveyMonkey, la migration vers Qualywatch prend 30 minutes et notre équipe vous accompagne gratuitement. <Strong>Économies typiques observées : 50 à 70 % du coût annuel.</Strong>
      </Callout>
    </BlogArticle>
  );
}
