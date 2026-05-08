import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, H3, P, UL, OL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("gestion-feedback-client-guide-complet")!;

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
    q: "Qu'est-ce que la gestion du feedback client ?",
    a: "La gestion du feedback client est l'ensemble des processus et outils qui permettent à une entreprise de collecter, analyser et agir sur les retours de ses clients (avis, plaintes, suggestions, notes). En 2026, c'est un pilier de la stratégie d'expérience client : les entreprises qui pilotent activement le feedback client améliorent leur taux de rétention de 25 % en moyenne.",
  },
  {
    q: "Quels sont les meilleurs canaux pour collecter du feedback client en Afrique ?",
    a: "En Afrique de l'Ouest, les trois canaux les plus efficaces sont : le QR code en point de vente (60 % des feedbacks pour les PME), WhatsApp Business (très haute pénétration, taux de réponse > 40 %), et l'email post-achat. Les enquêtes téléphoniques restent pertinentes pour les services premium.",
  },
  {
    q: "Quelle est la différence entre NPS, CSAT et CES ?",
    a: "Le NPS (Net Promoter Score) mesure la fidélité (« recommanderiez-vous ? »). Le CSAT (Customer Satisfaction) mesure la satisfaction immédiate (« êtes-vous satisfait ? »). Le CES (Customer Effort Score) mesure l'effort fourni (« avez-vous obtenu rapidement une solution ? »). Les trois sont complémentaires.",
  },
  {
    q: "Combien coûte un logiciel de gestion du feedback client pour une PME ?",
    a: "Pour une PME en Afrique de l'Ouest, comptez entre 0 et 70 USD/mois selon les besoins. Qualywatch propose un plan gratuit jusqu'à 50 feedbacks/mois, idéal pour démarrer. Les plans Pro (69 USD) et Business (139 USD) couvrent les PME multi-services. Mobile Money accepté.",
  },
  {
    q: "Comment commencer la gestion du feedback client dans une petite entreprise ?",
    a: "Trois étapes simples : 1) Choisir un seul indicateur (le NPS est le plus universel). 2) Mettre en place UN canal de collecte (par exemple un QR code à la sortie ou en table). 3) Définir un seuil d'alerte (ex : note ≤ 3) pour réagir sous 24 h. Vous pouvez démarrer en moins d'une semaine.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="La gestion du feedback client consiste à collecter, analyser et agir sur les retours clients pour piloter la satisfaction. En 2026, les PME africaines qui structurent ce processus avec un outil dédié (QR code, WhatsApp, IA d'analyse) augmentent leur rétention de 25 % en moyenne. Ce guide couvre les méthodes, KPIs et outils adaptés au marché ouest-africain."
      faqs={faqs}
    >
      <H2 id="definition">Qu&apos;est-ce que la gestion du feedback client ?</H2>
      <P>
        La <Strong>gestion du feedback client</Strong> est le processus structuré qui permet à une entreprise de collecter, centraliser, analyser et agir sur les retours de ses clients. Elle couvre tous les canaux de la voix du client : avis spontanés, enquêtes de satisfaction, plaintes, suggestions, notes et verbatims.
      </P>
      <P>
        En 2026, ce n&apos;est plus une option. Selon une étude Bain &amp; Company, <Strong>les entreprises qui pilotent activement le feedback client retiennent 25 % de clients en plus</Strong> que la moyenne de leur secteur. En Afrique de l&apos;Ouest, où le bouche-à-oreille pèse encore plus lourd qu&apos;ailleurs, ignorer le feedback revient à perdre des clients sans même savoir pourquoi.
      </P>

      <H2 id="pourquoi">Pourquoi c&apos;est critique pour les PME africaines</H2>
      <P>
        96 % des clients mécontents ne se plaignent jamais — ils partent simplement, et préviennent en moyenne 9 personnes de leur entourage. Pour une PME à Dakar, Abidjan ou Bamako, où le tissu commercial est dense et la concurrence locale forte, ce silence coûte cher.
      </P>
      <UL>
        <LI><Strong>Détecter avant qu&apos;il soit trop tard :</Strong> un feedback négatif capté en temps réel = un client retenu.</LI>
        <LI><Strong>Améliorer le service :</Strong> les verbatims sont une mine d&apos;or pour identifier les vrais problèmes (attente trop longue, employé impoli, prix flou).</LI>
        <LI><Strong>Motiver les équipes :</Strong> les feedbacks positifs nominatifs créent un engagement terrain inégalable.</LI>
        <LI><Strong>Crédibiliser auprès des clients :</Strong> afficher publiquement vos notes (Google, sur place) augmente la confiance et la conversion.</LI>
      </UL>

      <H2 id="canaux">Les 5 canaux de collecte du feedback en Afrique</H2>
      <P>
        Tous les canaux ne se valent pas. Voici les plus efficaces sur le marché ouest-africain, en 2026 :
      </P>
      <ComparisonTable
        headers={["Canal", "Taux de réponse", "Idéal pour"]}
        rows={[
          ["QR code en point de vente", "15-30 %", "Restaurants, hôtels, retail, banques en agence"],
          ["WhatsApp Business", "30-50 %", "PME services, e-commerce, SAV"],
          ["Email post-achat", "8-15 %", "E-commerce, services B2B"],
          ["Lien web (post-livraison)", "5-12 %", "E-commerce, livraison"],
          ["Appel téléphonique", "40-70 %", "Services premium, B2B haut de gamme"],
        ]}
      />
      <Callout title="Astuce locale" variant="info">
        En Afrique de l&apos;Ouest, WhatsApp est <Strong>le canal n°1</Strong> de communication avec les clients. Activez la collecte via WhatsApp Business dès que possible — les taux de réponse explosent.
      </Callout>

      <H2 id="kpis">Les KPIs essentiels à suivre</H2>
      <P>
        Trois indicateurs suffisent pour 90 % des cas. Choisissez-en un comme métrique nord, ajoutez les deux autres en complément :
      </P>
      <H3>NPS (Net Promoter Score)</H3>
      <P>
        Pose une seule question : « Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre entreprise ? ». Le NPS = % promoteurs (9-10) − % détracteurs (0-6). Score entre −100 et +100. Un NPS supérieur à +30 est excellent en Afrique de l&apos;Ouest.
      </P>
      <H3>CSAT (Customer Satisfaction)</H3>
      <P>
        Mesure la satisfaction sur une interaction précise (« Êtes-vous satisfait de votre repas ? »). Échelle 1-5 ou pourcentage. Idéal post-service.
      </P>
      <H3>CES (Customer Effort Score)</H3>
      <P>
        Mesure l&apos;effort que le client a dû fournir. Très utile pour les SAV : un client qui a galéré reviendra rarement, même si son problème a été résolu.
      </P>

      <H2 id="methode">La méthode en 5 étapes pour structurer la gestion</H2>
      <OL>
        <LI><Strong>Définir l&apos;indicateur nord</Strong> (NPS pour la fidélité, CSAT pour la satisfaction immédiate).</LI>
        <LI><Strong>Choisir 1 ou 2 canaux</Strong> de collecte adaptés à votre business (QR code + WhatsApp est un combo gagnant en Afrique).</LI>
        <LI><Strong>Mettre en place une alerte temps réel</Strong> sur les feedbacks négatifs (note ≤ 3) pour réagir sous 24 h.</LI>
        <LI><Strong>Analyser les verbatims</Strong> chaque semaine — l&apos;IA aide à clusteriser les thèmes récurrents.</LI>
        <LI><Strong>Boucler la boucle</Strong> : revenir vers le client mécontent ET partager les feedbacks positifs avec l&apos;équipe.</LI>
      </OL>

      <H2 id="outils">Quels outils choisir ?</H2>
      <P>
        Le choix dépend de votre taille, votre budget et votre marché. Pour une PME en Afrique de l&apos;Ouest, les critères clés sont : prix en FCFA ou en USD modeste, paiement Mobile Money accepté, support en français, hébergement avec faible latence depuis l&apos;Afrique, et adaptation aux usages locaux (WhatsApp natif, par exemple).
      </P>
      <P>
        <Strong>Qualywatch</Strong> est le seul outil pensé spécifiquement pour les PME ouest-africaines : QR code natif, WhatsApp Business intégré, prix en FCFA, paiement Orange Money / Wave / MTN, dashboard en français, alertes temps réel. Vous trouverez une comparaison détaillée avec les concurrents internationaux dans nos guides comparatifs.
      </P>

      <Callout title="Prochaine étape" variant="success">
        Si vous démarrez aujourd&apos;hui, commencez petit : <Strong>un seul indicateur (NPS), un seul canal (QR code), un seul seuil d&apos;alerte (note ≤ 3)</Strong>. Vous pourrez itérer à mesure que les feedbacks rentrent.
      </Callout>
    </BlogArticle>
  );
}
