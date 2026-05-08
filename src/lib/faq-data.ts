/**
 * Source unique pour les FAQ de la landing page.
 * Utilisée à la fois par le composant <FAQ /> et par le JSON-LD FAQPage
 * injecté dans le layout pour les rich results Google et les AI Overviews.
 */
export type FaqEntry = {
  q: string;
  a: string;
};

export const faqEntries: FaqEntry[] = [
  {
    q: "Mes clients doivent-ils télécharger une application ?",
    a: "Non. Qualywatch fonctionne via QR code et lien web. Aucune installation, aucune création de compte côté client. Le feedback est laissé en moins de 60 secondes, depuis n'importe quel smartphone.",
  },
  {
    q: "Combien de temps pour configurer Qualywatch ?",
    a: "10 minutes en moyenne. Inscription, import de votre équipe via Excel ou Google Sheets, génération automatique des QR codes par service. Vous êtes en production avant le service du soir.",
  },
  {
    q: "Puis-je personnaliser le formulaire de feedback ?",
    a: "Oui — 49 custom fields disponibles à partir du plan Business. Choisissez les questions, l'ordre, les conditions d'affichage, les réponses obligatoires, et adaptez chaque formulaire au service ou à la typologie de client.",
  },
  {
    q: "Qu'est-ce que les KaliPoints ?",
    a: "Un système de points convertibles : vos clients en gagnent en laissant un avis, vos employés en gagnent quand ils reçoivent une bonne note. C'est de la reconnaissance immédiate qui dope la satisfaction et l'engagement terrain — pas du gadget.",
  },
  {
    q: "Qualywatch est-il conforme au RGPD ?",
    a: "Oui. Hébergement en Europe (Allemagne, Falkenstein), DPA disponible, droit à l'oubli, anonymisation, export de données en 1 clic. Conforme également à la loi sénégalaise sur la protection des données personnelles (CDP).",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Mobile money (Orange Money, Wave, MTN Mobile Money), carte bancaire internationale, virement bancaire. Facturation mensuelle ou annuelle (-2 mois sur l'année). Tarifs disponibles en FCFA pour les entreprises de la zone UEMOA.",
  },
  {
    q: "Qualywatch fonctionne-t-il pour les PME en Afrique de l'Ouest ?",
    a: "Oui — c'est même notre cœur de cible. Qualywatch est pensé pour les PME du Sénégal, Côte d'Ivoire, Mali, Bénin, Togo, Guinée et Burkina Faso : tarifs en FCFA, paiement Mobile Money, support en français, hébergement avec faible latence depuis l'Afrique de l'Ouest.",
  },
  {
    q: "Comment fonctionne la collecte de feedback par QR code ?",
    a: "Vous générez un QR code par service ou par point de contact (table de restaurant, comptoir bancaire, sortie de magasin). Le client le scanne, répond en moins d'une minute, et vous recevez le feedback en temps réel sur votre tableau de bord avec alerte si la note est basse.",
  },
];
