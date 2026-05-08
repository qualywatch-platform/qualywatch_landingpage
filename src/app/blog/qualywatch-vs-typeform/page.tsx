import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, UL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("qualywatch-vs-typeform")!;

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
    q: "Typeform fonctionne-t-il bien en Afrique ?",
    a: "Techniquement oui. L'app charge un peu plus lentement depuis l'Afrique de l'Ouest (serveurs en Europe), mais reste utilisable. Le vrai problème est le tarif (à partir de 25 USD/mois sans Mobile Money) et l'absence d'intégration WhatsApp Business, qui est pourtant le canal n°1 en Afrique.",
  },
  {
    q: "Pourquoi quitter Typeform ?",
    a: "Trois raisons fréquentes : (1) le plan gratuit est trop limité (10 réponses/mois), (2) le passage au plan payant à 25 USD/mois est cher pour une PME africaine, (3) l'absence de fonctions de pilotage temps réel (alertes, dashboard NPS automatique, gamification équipe) limite l'usage opérationnel quotidien.",
  },
  {
    q: "Qualywatch est-il aussi joli que Typeform ?",
    a: "L'UX de Typeform est légendaire. Qualywatch a une UX moderne et épurée, avec une approche différente : on privilégie la rapidité (formulaire en moins de 60 secondes) plutôt que les transitions élégantes. Pour la collecte de feedback en restauration ou retail, c'est plus efficace.",
  },
  {
    q: "Lequel choisir pour un formulaire de contact sur un site ?",
    a: "Pour un simple formulaire de contact embarqué dans un site, Typeform reste imbattable visuellement. Pour collecter du feedback client opérationnel (NPS, CSAT, alertes, suivi), Qualywatch est plus adapté.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Typeform est superbe visuellement et excellent pour un formulaire ponctuel élégant. Qualywatch est conçu pour piloter la satisfaction client au quotidien : QR codes par point de contact, WhatsApp Business intégré, alertes temps réel, gamification équipe, paiement Mobile Money. Pour une PME africaine, Qualywatch gagne. Pour un formulaire vitrine très soigné, Typeform reste pertinent."
      faqs={faqs}
    >
      <H2 id="resume">Le résumé en 3 lignes</H2>
      <UL>
        <LI><Strong>Typeform</Strong> = la beauté visuelle, idéal pour un formulaire premium ponctuel.</LI>
        <LI><Strong>Qualywatch</Strong> = le pilotage opérationnel, idéal pour une PME qui veut écouter ses clients tous les jours.</LI>
        <LI>Pour <Strong>une PME africaine</Strong>, Qualywatch est meilleur sur le rapport fonctionnalités/prix et l&apos;adaptation locale.</LI>
      </UL>

      <H2 id="typeform">Typeform en bref</H2>
      <H3>Ce qu&apos;on aime</H3>
      <UL>
        <LI>UX magnifique, conversationnelle, très moderne.</LI>
        <LI>Excellent pour les formulaires de contact, candidatures, feedback ponctuel.</LI>
        <LI>Logic jumps puissants (questions conditionnelles).</LI>
        <LI>Intégrations riches (Slack, Zapier, HubSpot, etc.).</LI>
      </UL>
      <H3>Ce qu&apos;on aime moins</H3>
      <UL>
        <LI>Plan gratuit limité à 10 réponses/mois (insuffisant en pratique).</LI>
        <LI>Plan payant à 25 USD/mois.</LI>
        <LI>Pas de paiement Mobile Money.</LI>
        <LI>Pas de WhatsApp Business intégré.</LI>
        <LI>Pas pensé pour le pilotage opérationnel (pas d&apos;alertes natives, pas de dashboard NPS sectoriel).</LI>
        <LI>Charge un peu lente depuis l&apos;Afrique (serveurs en Europe et USA).</LI>
      </UL>

      <H2 id="qualywatch">Qualywatch en bref</H2>
      <H3>Ce qu&apos;on aime</H3>
      <UL>
        <LI>Conçu pour le pilotage opérationnel quotidien (alertes, dashboards, KPIs).</LI>
        <LI>Plan gratuit généreux (50 feedbacks/mois).</LI>
        <LI>QR code natif par point de contact.</LI>
        <LI>WhatsApp Business intégré.</LI>
        <LI>Paiement Mobile Money.</LI>
        <LI>IA d&apos;analyse des verbatims.</LI>
        <LI>Gamification équipe (KaliPoints).</LI>
      </UL>
      <H3>Ce qu&apos;on aime moins</H3>
      <UL>
        <LI>UX moins « waouh » que Typeform pour un formulaire vitrine.</LI>
        <LI>Pas de logic jumps aussi avancés que Typeform (en cours de développement).</LI>
      </UL>

      <H2 id="comparatif">Tableau comparatif détaillé</H2>
      <ComparisonTable
        headers={["Critère", "Qualywatch", "Typeform"]}
        rows={[
          ["Plan gratuit", "50 feedbacks/mois", "10 réponses/mois (très limité)"],
          ["Plan payant entrée", "69 USD/mois (Pro)", "25 USD/mois (Basic)"],
          ["Paiement Mobile Money", "Oui", "Non"],
          ["QR code par point de contact", "Oui", "Manuel"],
          ["WhatsApp Business", "Intégré", "Non"],
          ["NPS / CSAT auto", "Oui", "Limité"],
          ["Alertes temps réel", "Oui", "Plan Plus (50 USD/mois)"],
          ["IA d'analyse verbatims", "Oui", "Limité"],
          ["Gamification équipe", "Oui", "Non"],
          ["UX visuelle", "Moderne, rapide", "Excellence (référence)"],
          ["Logic jumps avancés", "Standards", "Très puissants"],
          ["Adapté Afrique de l'Ouest", "Conçu pour", "Non spécifique"],
        ]}
      />

      <H2 id="recommandation">Notre recommandation par profil</H2>
      <UL>
        <LI><Strong>Restaurant, hôtel, retail en Afrique</Strong> → Qualywatch (QR code + WhatsApp + alertes natives).</LI>
        <LI><Strong>Agence de design / studio créatif</Strong> → Typeform pour la beauté visuelle des formulaires.</LI>
        <LI><Strong>PME B2B avec processus complexes</Strong> → Typeform si logic jumps critiques, Qualywatch sinon.</LI>
        <LI><Strong>Startup en croissance Afrique</Strong> → Qualywatch (rapport qualité/prix imbattable).</LI>
        <LI><Strong>Recrutement / candidatures</Strong> → Typeform pour l&apos;UX, Qualywatch pour la centralisation feedback continue.</LI>
      </UL>

      <Callout title="Le test pratique" variant="info">
        Si votre besoin principal est <Strong>« je veux savoir, en temps réel, ce que pensent mes clients »</Strong>, prenez Qualywatch. Si c&apos;est <Strong>« je veux un formulaire vitrine ultra-soigné »</Strong>, prenez Typeform.
      </Callout>
    </BlogArticle>
  );
}
