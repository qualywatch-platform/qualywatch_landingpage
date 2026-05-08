import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, UL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("qualywatch-vs-google-forms")!;

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
    q: "Google Forms est-il vraiment gratuit ?",
    a: "Oui, Google Forms est 100 % gratuit et sans limite de réponses. Mais c'est aussi sa principale limite : il manque toutes les fonctions de pilotage opérationnel (alertes temps réel, dashboards NPS, gamification, IA, intégration WhatsApp Business). Idéal pour un sondage ponctuel, insuffisant pour piloter la satisfaction client au quotidien.",
  },
  {
    q: "Quand passer de Google Forms à Qualywatch ?",
    a: "Trois signaux indiquent qu'il est temps de passer à Qualywatch : (1) vous collectez plus de 30 feedbacks/mois et n'arrivez pas à les exploiter, (2) vous voulez être alerté en temps réel sur les feedbacks négatifs, (3) vous voulez piloter le NPS de votre entreprise sans calcul manuel.",
  },
  {
    q: "Peut-on combiner Google Forms et Qualywatch ?",
    a: "Oui. Beaucoup d'entreprises gardent Google Forms pour les sondages internes ponctuels (élections, RH, événements) et utilisent Qualywatch pour le pilotage de la satisfaction client en continu. Les deux sont complémentaires, pas concurrents directs.",
  },
  {
    q: "Combien de temps pour migrer ses formulaires Google Forms vers Qualywatch ?",
    a: "Pour un formulaire feedback client classique (5-10 questions), comptez 5 minutes. Qualywatch propose des templates pré-configurés (NPS, CSAT, satisfaction restaurant, satisfaction hôtel) qui couvrent 90 % des cas. Pas besoin de tout recréer manuellement.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Google Forms est gratuit, simple et illimité — parfait pour un sondage ponctuel. Mais pour piloter la satisfaction client au quotidien, il manque l'essentiel : alertes temps réel, NPS calculé automatiquement, intégration WhatsApp Business, gamification équipe. Qualywatch propose tout cela, avec un plan gratuit jusqu'à 50 feedbacks/mois."
      faqs={faqs}
    >
      <H2 id="resume">Le résumé en 3 lignes</H2>
      <UL>
        <LI><Strong>Google Forms</Strong> = gratuit, illimité, basique, idéal pour les sondages ponctuels.</LI>
        <LI><Strong>Qualywatch</Strong> = pilotage opérationnel, alertes temps réel, IA d&apos;analyse, gamification équipe.</LI>
        <LI>Si vous voulez <Strong>écouter activement vos clients tous les jours</Strong>, Google Forms ne suffit pas.</LI>
      </UL>

      <H2 id="google-forms">Google Forms en bref</H2>
      <H3>Ce qu&apos;on aime</H3>
      <UL>
        <LI>100 % gratuit et illimité (réponses, formulaires).</LI>
        <LI>Intégration native avec Google Sheets, Drive, Gmail.</LI>
        <LI>Très simple à prendre en main.</LI>
        <LI>Connu de tout le monde — pas besoin d&apos;expliquer.</LI>
      </UL>
      <H3>Ce qu&apos;on aime moins</H3>
      <UL>
        <LI>Pas d&apos;alertes temps réel en cas de feedback négatif.</LI>
        <LI>Pas de calcul automatique du NPS / CSAT.</LI>
        <LI>Pas d&apos;intégration WhatsApp Business.</LI>
        <LI>Pas de QR code natif (il faut générer manuellement).</LI>
        <LI>Pas de dashboard de pilotage opérationnel.</LI>
        <LI>Pas d&apos;IA pour analyser les verbatims.</LI>
        <LI>Pas de système de notation par employé / point de contact.</LI>
      </UL>

      <H2 id="qualywatch">Qualywatch en bref</H2>
      <H3>Ce qu&apos;on aime</H3>
      <UL>
        <LI>Plan gratuit utile (50 feedbacks/mois, alertes incluses).</LI>
        <LI>Tout est conçu pour le pilotage : alertes temps réel, NPS auto, dashboard sectoriel.</LI>
        <LI>QR code par point de contact, WhatsApp Business intégré.</LI>
        <LI>IA d&apos;analyse des verbatims (Llama 3.3 70B).</LI>
        <LI>Gamification équipe — chaque feedback positif récompense l&apos;employé concerné.</LI>
      </UL>
      <H3>Ce qu&apos;on aime moins</H3>
      <UL>
        <LI>Au-delà de 50 feedbacks/mois, il faut passer au plan payant (69 USD/mois).</LI>
        <LI>Moins universel que Google Forms — c&apos;est un outil spécialisé.</LI>
      </UL>

      <H2 id="comparatif">Tableau comparatif détaillé</H2>
      <ComparisonTable
        headers={["Critère", "Qualywatch", "Google Forms"]}
        rows={[
          ["Prix entrée", "Gratuit (50 feedbacks/mois)", "Gratuit illimité"],
          ["Spécialisé feedback client", "Oui", "Non (généraliste)"],
          ["Alertes temps réel", "Oui", "Non"],
          ["NPS / CSAT calculés auto", "Oui", "Non (manuel via Sheets)"],
          ["QR code par point de contact", "Oui", "Manuel"],
          ["WhatsApp Business", "Intégré", "Non"],
          ["Dashboard opérationnel", "Oui", "Sheets DIY"],
          ["IA d'analyse verbatims", "Oui", "Non"],
          ["Gamification équipe", "Oui (KaliPoints)", "Non"],
          ["Adapté pilotage qualité", "Conçu pour", "Pas du tout"],
          ["Templates feedback prêts", "Nombreux", "Limités"],
        ]}
      />

      <H2 id="recommandation">Notre recommandation par profil</H2>
      <UL>
        <LI><Strong>Sondage interne ponctuel</Strong> (élection, événement, vote) → Google Forms.</LI>
        <LI><Strong>Pilotage continu de la satisfaction client</Strong> → Qualywatch.</LI>
        <LI><Strong>Restaurant, hôtel, retail, banque</Strong> → Qualywatch (alertes terrain critiques).</LI>
        <LI><Strong>Université / association</Strong> → Google Forms si zéro budget.</LI>
        <LI><Strong>PME qui veut professionnaliser</Strong> → Qualywatch (gain de temps massif).</LI>
      </UL>

      <Callout title="Le test rapide" variant="info">
        Posez-vous une seule question : <Strong>« Si un client laisse une note de 1 étoile aujourd&apos;hui, comment je le saurai dans la minute ? »</Strong>. Si la réponse est « je le découvrirai demain en regardant Sheets », il est temps de passer à Qualywatch.
      </Callout>
    </BlogArticle>
  );
}
