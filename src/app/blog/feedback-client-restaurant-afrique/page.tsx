import type { Metadata } from "next";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, P, UL, OL, LI, Strong, ComparisonTable, Callout } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE } from "@/lib/blog-data";

const post = getPostBySlug("feedback-client-restaurant-afrique")!;

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
    q: "Comment collecter du feedback dans un restaurant à Dakar ?",
    a: "La méthode la plus efficace en 2026 est le QR code en table : un autocollant ou un chevalet par table, avec un QR qui ouvre un formulaire court (3 questions max). Le client scanne, note, et le serveur reçoit l'alerte en temps réel si la note est basse. Coût d'installation : moins de 5 000 FCFA par table.",
  },
  {
    q: "Quel est le bon NPS pour un restaurant en Afrique de l'Ouest ?",
    a: "En 2026, le NPS médian observé dans la restauration ouest-africaine est de +32. Les meilleurs établissements (top 10 %) atteignent +58. Un NPS inférieur à +15 est un signal d'alerte sérieux qui justifie un plan d'action immédiat.",
  },
  {
    q: "Faut-il préférer un livre d'or papier ou un QR code numérique ?",
    a: "Le QR code gagne sur tous les critères : taux de participation 5 fois plus élevé, données exploitables (filtres par jour, par serveur, par plat), alertes en temps réel, possibilité de demander à publier sur Google. Le livre d'or papier reste utile pour le côté chaleureux, mais comme outil de pilotage, il ne sert plus à rien.",
  },
  {
    q: "Comment gérer un avis négatif sur Google My Business ?",
    a: "Trois règles : 1) Répondre sous 24 h, toujours. 2) Reconnaître le problème, présenter des excuses sincères, proposer une réparation concrète (offre, geste commercial). 3) Ne JAMAIS argumenter ou justifier — c'est lu par tous les futurs clients. Un avis négatif bien géré peut devenir un atout commercial.",
  },
  {
    q: "Combien de feedbacks faut-il viser par mois pour un restaurant ?",
    a: "Pour un restaurant servant 500 couverts/mois, viser 75 à 150 feedbacks remontés (15 à 30 % de taux de participation est excellent). En dessous de 30 feedbacks/mois, les données sont peu exploitables statistiquement.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      post={post}
      tldr="Pour un restaurant à Dakar, Abidjan ou Bamako, le feedback client n'est plus optionnel : 96 % des clients mécontents partent sans rien dire, et préviennent leur entourage. Ce guide couvre la méthode QR code en table, les outils adaptés au marché ouest-africain, le NPS médian par pays et 10 bonnes pratiques opérationnelles."
      faqs={faqs}
    >
      <H2 id="contexte">Pourquoi c&apos;est devenu critique pour les restaurants africains</H2>
      <P>
        Le secteur de la restauration en Afrique de l&apos;Ouest a explosé entre 2022 et 2026. À Dakar, Abidjan ou Bamako, on compte désormais en moyenne <Strong>3 à 5 nouveaux restaurants par semaine</Strong>. La concurrence se joue de plus en plus sur la qualité perçue — pas seulement sur le prix ou l&apos;emplacement.
      </P>
      <P>
        Avec la généralisation de Google Maps et des applis de livraison (Yango Deli, Glovo, Heetch Eats), <Strong>les avis publics pèsent désormais 40 à 60 % de la décision</Strong> d&apos;un nouveau client. Un restaurant à 3,2 étoiles perd structurellement face à un restaurant à 4,5 étoiles, à offre équivalente.
      </P>

      <H2 id="canaux">Les meilleurs canaux pour collecter du feedback en restauration</H2>
      <ComparisonTable
        headers={["Canal", "Taux de participation", "Coût mensuel"]}
        rows={[
          ["QR code en table (chevalet ou sticker)", "20-35 %", "< 5 000 FCFA / table (one-shot)"],
          ["QR code sur l'addition", "10-20 %", "Inclus dans l'impression"],
          ["WhatsApp Business (post-repas)", "25-40 %", "Inclus dans la solution"],
          ["SMS post-livraison", "8-15 %", "Coût SMS par envoi"],
          ["Lien sur Google Maps (avis publics)", "2-5 %", "Gratuit"],
        ]}
      />
      <Callout title="Combo gagnant" variant="success">
        Le QR code en table + une relance WhatsApp 2 h après le repas multiplie le taux de participation par 3 par rapport au QR seul. C&apos;est la méthode utilisée par les meilleurs restaurants de Dakar et Abidjan.
      </Callout>

      <H2 id="bonnes-pratiques">10 bonnes pratiques pour réussir sa collecte</H2>
      <OL>
        <LI><Strong>Garder le formulaire court</Strong> : 3 questions max (note globale, ce qui a plu, ce qui a manqué).</LI>
        <LI><Strong>Demander la note dès la première étape</Strong> — pas après 5 questions ennuyeuses.</LI>
        <LI><Strong>Personnaliser par service</Strong> (table, livraison, à emporter) pour des données utilisables.</LI>
        <LI><Strong>Identifier le serveur</Strong> dans le formulaire (gamification, mais aussi détection de problèmes individuels).</LI>
        <LI><Strong>Mettre une alerte temps réel</Strong> sur les notes ≤ 3 — manager prévenu sous 1 minute.</LI>
        <LI><Strong>Répondre à 100 % des feedbacks négatifs</Strong> sous 24 h.</LI>
        <LI><Strong>Demander aux promoteurs de noter sur Google</Strong> (proposez le lien automatiquement après une note 9 ou 10).</LI>
        <LI><Strong>Partager les retours positifs en équipe</Strong> chaque semaine — c&apos;est le meilleur outil de motivation.</LI>
        <LI><Strong>Faire un point mensuel</Strong> pour identifier les tendances (plats à supprimer, formations à prévoir).</LI>
        <LI><Strong>Communiquer sur les améliorations</Strong> aux clients (« Suite à vos retours, nous avons changé… »).</LI>
      </OL>

      <H2 id="kpis">Les KPIs à suivre pour un restaurant</H2>
      <UL>
        <LI><Strong>NPS mensuel</Strong> — viser au minimum +25, idéalement +40.</LI>
        <LI><Strong>Note moyenne</Strong> sur 5 étoiles — viser ≥ 4,3.</LI>
        <LI><Strong>Taux de participation</Strong> — viser ≥ 15 % des couverts.</LI>
        <LI><Strong>Délai de réponse aux avis Google</Strong> — viser ≤ 24 h, 100 % des avis.</LI>
        <LI><Strong>% feedbacks négatifs résolus</Strong> — viser 90 % avec geste commercial.</LI>
      </UL>

      <H2 id="outils">Quel outil utiliser ?</H2>
      <P>
        Pour un restaurant en Afrique de l&apos;Ouest, l&apos;outil idéal coche 5 critères : (1) génération QR code par table en quelques clics, (2) WhatsApp Business intégré, (3) alertes temps réel au manager, (4) tarif en FCFA et paiement Mobile Money, (5) support en français.
      </P>
      <P>
        <Strong>Qualywatch</Strong> coche les 5 — et ajoute un système de gamification (KaliPoints) qui motive l&apos;équipe en transformant chaque bonne note en points. Plan gratuit jusqu&apos;à 50 feedbacks/mois, puis 69 USD pour le plan Pro.
      </P>
    </BlogArticle>
  );
}
