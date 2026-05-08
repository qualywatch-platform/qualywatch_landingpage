import type { Metadata } from "next";
import Script from "next/script";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { H2, P, UL, OL, LI, Strong, Callout, ComparisonTable } from "@/components/blog/Prose";
import { getPostBySlug, BLOG_BASE, SITE_URL } from "@/lib/blog-data";

const post = getPostBySlug("comment-collecter-feedback-qr-code")!;

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
    q: "Combien coûte un QR code pour collecter du feedback ?",
    a: "Un QR code numérique est gratuit à générer. Le seul coût est l'impression (sticker, chevalet, affiche), généralement entre 500 et 5 000 FCFA selon le format et le matériau. Avec Qualywatch, la génération du QR code est incluse dans tous les plans, y compris le plan gratuit.",
  },
  {
    q: "Où placer le QR code pour maximiser les scans ?",
    a: "Les emplacements les plus efficaces : sur la table (chevalet ou sticker au coin), sur l'addition, à la sortie (affiche A4 à hauteur des yeux), à côté du terminal de paiement, et sur le ticket de caisse. Pour un restaurant, le combo 'chevalet en table + sticker sur l'addition' donne les meilleurs taux.",
  },
  {
    q: "Comment savoir d'où vient un feedback (table, service, employé) ?",
    a: "C'est tout l'intérêt d'avoir un QR code par point de contact (table, service, employé). Avec Qualywatch, vous générez en un clic 50, 100 ou 500 QR codes différents, chacun rattaché à un emplacement précis. Vous savez ainsi quel serveur, quelle table ou quel service a généré chaque feedback.",
  },
  {
    q: "Quel est le bon taux de scan d'un QR code feedback ?",
    a: "En 2026, un bon taux de scan se situe entre 15 et 35 %. En dessous de 10 %, il y a un problème (placement peu visible, formulaire trop long, manque d'incitation). Au-dessus de 40 %, c'est exceptionnel (souvent grâce à une incitation type récompense ou réduction).",
  },
  {
    q: "Faut-il offrir une réduction pour inciter au scan ?",
    a: "Pas nécessairement. Une étude Qualywatch sur 12 000 feedbacks restaurants montre qu'une simple phrase comme 'Votre avis aide notre équipe à s'améliorer' génère 80 % du résultat d'une remise de 5 %. La gamification (KaliPoints) est encore plus efficace que les réductions cash.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment collecter du feedback client par QR code",
  description: "Tutoriel complet pour collecter le feedback client en restaurant, hôtel ou commerce avec un QR code.",
  totalTime: "PT15M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
  tool: [
    { "@type": "HowToTool", name: "Compte Qualywatch (gratuit)" },
    { "@type": "HowToTool", name: "Imprimante (sticker ou chevalet)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Créer un compte Qualywatch",
      text: "Rendez-vous sur app.qualywatch.com et créez un compte gratuit en 2 minutes.",
      url: `${SITE_URL}/blog/${post.slug}#etape-1`,
    },
    {
      "@type": "HowToStep",
      name: "Configurer votre formulaire de feedback",
      text: "Choisissez 3 questions max : note globale, ce qui a plu, ce qui a manqué.",
      url: `${SITE_URL}/blog/${post.slug}#etape-2`,
    },
    {
      "@type": "HowToStep",
      name: "Générer vos QR codes par point de contact",
      text: "En un clic, générez un QR code par table, par service ou par employé.",
      url: `${SITE_URL}/blog/${post.slug}#etape-3`,
    },
    {
      "@type": "HowToStep",
      name: "Imprimer et placer les QR codes",
      text: "Stickers en table, chevalets ou affiche A4 à la sortie. Privilégier les zones à hauteur des yeux.",
      url: `${SITE_URL}/blog/${post.slug}#etape-4`,
    },
    {
      "@type": "HowToStep",
      name: "Configurer les alertes temps réel",
      text: "Définissez un seuil (ex : note ≤ 3) pour être prévenu instantanément en cas de feedback négatif.",
      url: `${SITE_URL}/blog/${post.slug}#etape-5`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="howto-jsonld-qr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <BlogArticle
        post={post}
        tldr="Collecter du feedback client par QR code prend 15 minutes à mettre en place et coûte moins de 5 000 FCFA par point de contact. Bien fait, c'est le canal n°1 en 2026 pour les restaurants, hôtels et commerces en Afrique de l'Ouest. Voici la méthode pas à pas, du compte au premier feedback."
        faqs={faqs}
      >
        <H2 id="pourquoi">Pourquoi le QR code est devenu LE canal de feedback en 2026</H2>
        <P>
          Trois raisons : (1) tout le monde sait scanner un QR code depuis le COVID, (2) zéro friction (pas d&apos;app à télécharger), (3) coût quasi nul. Pour un restaurant ou un hôtel en Afrique de l&apos;Ouest, c&apos;est aujourd&apos;hui le moyen le plus rentable d&apos;obtenir 10 fois plus d&apos;avis qu&apos;avec un livre d&apos;or papier.
        </P>

        <H2 id="etape-1">Étape 1 — Créer votre compte (2 minutes)</H2>
        <P>
          Rendez-vous sur <Strong>app.qualywatch.com</Strong> et créez un compte gratuit. Le plan Free couvre 50 feedbacks/mois — largement suffisant pour démarrer et tester.
        </P>

        <H2 id="etape-2">Étape 2 — Configurer votre formulaire (5 minutes)</H2>
        <P>
          La règle d&apos;or : <Strong>3 questions max</Strong>. Au-delà, le taux d&apos;abandon explose. Le formulaire le plus efficace pour la restauration :
        </P>
        <OL>
          <LI>« Comment évaluez-vous votre expérience ? » (note de 1 à 5 étoiles)</LI>
          <LI>« Qu&apos;est-ce qui vous a plu ? » (champ libre, optionnel)</LI>
          <LI>« Qu&apos;est-ce qui pourrait être amélioré ? » (champ libre, optionnel)</LI>
        </OL>
        <Callout title="Astuce conversion" variant="info">
          Demandez la note <Strong>en premier</Strong>. Si vous demandez d&apos;abord le nom, l&apos;email et 5 questions de profil, vous perdez 80 % des participants avant la note.
        </Callout>

        <H2 id="etape-3">Étape 3 — Générer vos QR codes par point de contact (3 minutes)</H2>
        <P>
          Avec Qualywatch, vous pouvez générer un QR code <Strong>par table, par service ou par employé</Strong>. C&apos;est crucial : ça vous permet de savoir d&apos;où vient chaque feedback et d&apos;identifier les problèmes localisés (table 12 mal servie, serveur Marie qui cartonne, etc.).
        </P>

        <H2 id="etape-4">Étape 4 — Imprimer et placer les QR codes</H2>
        <P>
          Plusieurs options selon votre business :
        </P>
        <ComparisonTable
          headers={["Format", "Usage", "Coût indicatif"]}
          rows={[
            ["Sticker rond (5 cm)", "Coin de table, addition, ticket", "200-500 FCFA / unité"],
            ["Chevalet de table (10 x 15 cm)", "Restaurants, cafés, salons", "1 500-3 000 FCFA / unité"],
            ["Affiche A4", "Sortie, comptoir, hall d'accueil", "500-1 500 FCFA / unité"],
            ["Vinyle vitrine (20 cm)", "Devanture, vitrine extérieure", "3 000-5 000 FCFA / unité"],
          ]}
        />
        <P>
          <Strong>Règle de placement :</Strong> à hauteur des yeux, dans une zone de calme (pas en pleine zone de passage où le client n&apos;a pas le temps).
        </P>

        <H2 id="etape-5">Étape 5 — Configurer les alertes temps réel</H2>
        <P>
          C&apos;est l&apos;étape qui change tout. Configurez une alerte qui prévient le manager (par email, SMS ou notification push) dès qu&apos;un feedback inférieur à 3 étoiles arrive. Objectif : <Strong>réagir sous 15 minutes</Strong>, idéalement avant que le client ne quitte l&apos;établissement.
        </P>
        <Callout title="Le pouvoir de la réaction immédiate" variant="success">
          Selon une étude HBR, un client mécontent dont le problème est résolu sur place devient <Strong>plus fidèle qu&apos;un client qui n&apos;a jamais eu de problème</Strong>. La rapidité de réaction est le levier n°1 de rétention.
        </Callout>

        <H2 id="resultats">Résultats attendus après 30 jours</H2>
        <UL>
          <LI><Strong>Taux de participation</Strong> : 15 à 35 % des clients (selon visibilité du QR).</LI>
          <LI><Strong>NPS</Strong> : premier baseline mesurable dès la 2e semaine.</LI>
          <LI><Strong>Feedbacks traités</Strong> : 100 % des notes ≤ 3 doivent être suivies sous 24 h.</LI>
          <LI><Strong>Avis Google publiés</Strong> : 5 à 15 % des promoteurs (notes 9-10) acceptent de publier sur Google si proposé directement.</LI>
        </UL>
      </BlogArticle>
    </>
  );
}
