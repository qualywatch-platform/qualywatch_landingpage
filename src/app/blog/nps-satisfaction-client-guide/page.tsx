import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, P, OL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("nps-satisfaction-client-guide")!;

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
    q: "Qu'est-ce que le NPS ?",
    a: "Le Net Promoter Score (NPS) est un indicateur de satisfaction et de fidélité client qui mesure la probabilité qu'un client recommande votre entreprise. Il se calcule en soustrayant le pourcentage de détracteurs (notes 0-6) du pourcentage de promoteurs (notes 9-10), sur une échelle de −100 à +100.",
  },
  {
    q: "Comment calculer son NPS ?",
    a: "Posez la question : « Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre entreprise à un proche ? ». Classez les réponses : 0-6 = détracteurs, 7-8 = passifs, 9-10 = promoteurs. NPS = % promoteurs − % détracteurs. Exemple : 50 % promoteurs − 20 % détracteurs = NPS de +30.",
  },
  {
    q: "Quel est un bon NPS en Afrique de l'Ouest ?",
    a: "En Afrique de l'Ouest, un NPS supérieur à +30 est excellent. Les benchmarks observés en 2026 : restauration +32, hôtellerie +28, banque +15, télécoms +5, retail +20. Un NPS négatif est un signal d'alerte sérieux à ne pas négliger.",
  },
  {
    q: "À quelle fréquence mesurer le NPS ?",
    a: "Le NPS relationnel (global) se mesure tous les 3 à 6 mois. Le NPS transactionnel (post-interaction) se mesure à chaque touchpoint important : après un achat, un appel SAV, un séjour. Pour une PME, viser au minimum un NPS trimestriel.",
  },
  {
    q: "NPS, CSAT ou CES : lequel choisir ?",
    a: "Pour mesurer la fidélité globale et la croissance long terme : NPS. Pour mesurer la satisfaction immédiate après une interaction : CSAT. Pour mesurer la facilité d'usage d'un service ou d'un SAV : CES. Idéalement, combinez NPS (relationnel) + CSAT ou CES (transactionnel).",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Le Net Promoter Score (NPS) est l'indicateur de satisfaction client le plus universel en 2026. Il se calcule en une seule question, sur une échelle de −100 à +100. En Afrique de l'Ouest, viser un NPS supérieur à +30 est un objectif réaliste pour une PME bien gérée. Ce guide couvre la définition, le calcul, les benchmarks par secteur et la méthode pour améliorer son NPS en 30 jours."
      faqs={faqs}
    >
      <H2 id="definition">Qu&apos;est-ce que le NPS ?</H2>
      <P>
        Le <Strong>Net Promoter Score (NPS)</Strong> est un indicateur de fidélité et de satisfaction client inventé en 2003 par Fred Reichheld (Bain &amp; Company). Il mesure la probabilité qu&apos;un client recommande votre entreprise à un proche. Sa simplicité a fait son succès mondial : <Strong>plus de 80 % des entreprises du Fortune 500 l&apos;utilisent</Strong>.
      </P>
      <P>
        Il repose sur une seule question : « Sur une échelle de 0 à 10, quelle est la probabilité que vous nous recommandiez ? ». Le score final va de −100 (tous détracteurs) à +100 (tous promoteurs).
      </P>

      <H2 id="calcul">Comment calculer son NPS</H2>
      <OL>
        <LI>Poser la question NPS à un échantillon représentatif de clients (minimum 30 réponses pour avoir un résultat statistiquement utile).</LI>
        <LI>Classer les réponses : <Strong>0-6 = Détracteurs</Strong>, <Strong>7-8 = Passifs</Strong>, <Strong>9-10 = Promoteurs</Strong>.</LI>
        <LI>Calculer : <Strong>NPS = % promoteurs − % détracteurs</Strong>. Les passifs ne comptent pas.</LI>
      </OL>
      <Callout title="Exemple concret" variant="info">
        Sur 100 réponses : 50 promoteurs, 30 passifs, 20 détracteurs. NPS = 50 % − 20 % = <Strong>+30</Strong>. C&apos;est un excellent score pour la plupart des secteurs en Afrique de l&apos;Ouest.
      </Callout>

      <H2 id="benchmarks">Benchmarks NPS par secteur en Afrique de l&apos;Ouest (2026)</H2>
      <P>
        Les chiffres ci-dessous sont issus d&apos;une compilation de données Qualywatch, complétée par les rapports publics des principaux acteurs régionaux. Ils reflètent la moyenne observée sur le marché ouest-africain.
      </P>
      <ComparisonTable
        headers={["Secteur", "NPS médian", "NPS top 10 %"]}
        rows={[
          ["Restauration & cafés", "+32", "+58"],
          ["Hôtellerie", "+28", "+54"],
          ["Banque & micro-finance", "+15", "+42"],
          ["Télécoms", "+5", "+30"],
          ["Retail (grande distribution)", "+20", "+45"],
          ["Santé (cliniques privées)", "+25", "+50"],
          ["E-commerce / livraison", "+18", "+44"],
        ]}
      />

      <H2 id="csat-ces">NPS vs CSAT vs CES : quelles différences ?</H2>
      <ComparisonTable
        headers={["Indicateur", "Mesure", "Quand l'utiliser"]}
        rows={[
          ["NPS", "Fidélité, recommandation", "Mesure relationnelle, tous les 3-6 mois"],
          ["CSAT", "Satisfaction immédiate", "Post-interaction (commande, séjour, repas)"],
          ["CES", "Effort fourni", "Post-SAV, après une démarche administrative"],
        ]}
      />
      <P>
        Pour une PME qui démarre, <Strong>commencez par le NPS</Strong> : c&apos;est le plus universel, le plus simple à expliquer en interne, et celui qui a le plus de benchmarks disponibles.
      </P>

      <H2 id="ameliorer">Comment améliorer son NPS en 30 jours</H2>
      <OL>
        <LI><Strong>Semaine 1 :</Strong> mesurer le NPS de base sur un échantillon honnête (pas que vos meilleurs clients).</LI>
        <LI><Strong>Semaine 2 :</Strong> rappeler personnellement chaque détracteur. Comprendre la cause réelle. Réparer si possible.</LI>
        <LI><Strong>Semaine 3 :</Strong> identifier les 3 causes les plus fréquentes de détraction et lancer un plan d&apos;action terrain (formation, processus, communication).</LI>
        <LI><Strong>Semaine 4 :</Strong> mesurer à nouveau, comparer, et instaurer un rituel mensuel.</LI>
      </OL>

      <Callout title="Le piège à éviter" variant="warning">
        Ne tombez pas dans le « NPS theater » : forcer des notes hautes en demandant aux clients de noter haut. Vous obtiendrez un faux NPS qui ne servira à rien. Mieux vaut un NPS de +15 honnête qu&apos;un +60 truqué.
      </Callout>

      <H2 id="outils">Comment mesurer le NPS au quotidien</H2>
      <P>
        Pour une PME, l&apos;idéal est un outil qui automatise la collecte (QR code, WhatsApp, email) et calcule le NPS en temps réel sur un dashboard. <Strong>Qualywatch</Strong> propose la mesure NPS + CSAT + CES nativement, avec alertes immédiates sur les détracteurs et benchmarks sectoriels Afrique de l&apos;Ouest intégrés.
      </P>
    </BlogArticle>
  );
}
