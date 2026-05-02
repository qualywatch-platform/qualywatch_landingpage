import type { Metadata } from "next";
import Link from "next/link";
import { NavbarV2 } from "@/components/NavbarV2";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Mail, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Qualywatch — comment nous collectons, utilisons et protégeons vos données personnelles. Conforme RGPD.",
  openGraph: {
    title: "Politique de confidentialité · Qualywatch",
    description:
      "Comment Qualywatch collecte, utilise et protège vos données personnelles. Conforme RGPD.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

const LAST_UPDATED = "2 mai 2026";

const subProcessors = [
  { name: "Google Firebase / FCM", purpose: "Notifications push", location: "UE / USA (SCC)" },
  { name: "Apple APNs", purpose: "Notifications push iOS", location: "USA (SCC)" },
  { name: "Pusher", purpose: "Notifications temps réel", location: "UE" },
  { name: "Stripe", purpose: "Paiements internationaux", location: "UE / USA (SCC)" },
  { name: "Flutterwave", purpose: "Paiements Mobile Money", location: "Nigeria / Kenya" },
  { name: "Resend", purpose: "Emails transactionnels", location: "UE / USA (SCC)" },
  { name: "Brevo", purpose: "Emails transactionnels", location: "UE" },
  { name: "Groq", purpose: "Analyse IA des feedbacks (anonymisée)", location: "USA (SCC)" },
  { name: "Hetzner", purpose: "Hébergement infrastructure", location: "Allemagne (UE)" },
  { name: "MinIO / Cloudflare R2", purpose: "Stockage de fichiers", location: "UE" },
  { name: "Cloudflare", purpose: "CDN, sécurité réseau", location: "UE / Mondial" },
];

const purposes = [
  { goal: "Fournir les Services (compte, feedbacks, notifications)", basis: "Exécution du contrat" },
  { goal: "Authentification et sécurité", basis: "Intérêt légitime" },
  { goal: "Communications transactionnelles (email/push)", basis: "Exécution du contrat" },
  { goal: "Facturation et paiement", basis: "Obligation légale" },
  { goal: "Améliorer les Services (analytics anonymisés)", basis: "Intérêt légitime" },
  { goal: "Communications marketing", basis: "Consentement (révocable)" },
  { goal: "Respect des obligations légales (audit, comptabilité)", basis: "Obligation légale" },
];

const retention = [
  { data: "Compte actif", duration: "Tant que le compte existe" },
  { data: "Compte inactif", duration: "3 ans après dernière connexion, puis suppression" },
  { data: "Données de feedback", duration: "5 ans (audit, conformité)" },
  { data: "Données de facturation", duration: "10 ans (obligation comptable)" },
  { data: "Sauvegardes", duration: "90 jours" },
  { data: "Logs de sécurité", duration: "1 an" },
];

const sections = [
  { id: "responsable", label: "1. Responsable du traitement" },
  { id: "donnees", label: "2. Données collectées" },
  { id: "finalites", label: "3. Pourquoi ces données" },
  { id: "tiers", label: "4. Sous-traitants et tiers" },
  { id: "transferts", label: "5. Transferts internationaux" },
  { id: "conservation", label: "6. Conservation" },
  { id: "securite", label: "7. Sécurité" },
  { id: "droits", label: "8. Vos droits (RGPD)" },
  { id: "mineurs", label: "9. Mineurs" },
  { id: "cookies", label: "10. Cookies" },
  { id: "modifications", label: "11. Modifications" },
  { id: "contact", label: "12. Contact" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-text">
      <NavbarV2 />

      <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 border-b border-gray-200 pb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Conforme RGPD
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            Dernière mise à jour : <span className="font-medium text-gray-700">{LAST_UPDATED}</span>
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Table des matières
            </p>
            <nav className="space-y-1 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-md px-3 py-1.5 text-gray-600 transition hover:bg-orange-50 hover:text-orange-700"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Body */}
          <article className="prose-content max-w-none space-y-12 text-[15px] leading-relaxed text-gray-700">
            {/* Intro */}
            <p>
              Qualywatch (« <strong>nous</strong> », « <strong>Qualywatch</strong> ») exploite la
              plateforme web et l&apos;application mobile Qualywatch (les « <strong>Services</strong> »).
              Cette politique explique quelles données nous collectons, pourquoi, et quels sont vos
              droits. Elle est conforme au Règlement Général sur la Protection des Données (RGPD) et
              aux lois locales applicables.
            </p>

            {/* 1 */}
            <section id="responsable">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                1. Responsable du traitement
              </h2>
              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="font-semibold text-gray-900">Qualywatch SAS</p>
                <p className="mt-1 flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  Dakar, 11000, Sénégal
                </p>
                <p className="mt-1 flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contact@qualywatch.com" className="text-orange-600 hover:underline">
                    contact@qualywatch.com
                  </a>
                </p>
                <p className="mt-1 flex items-center gap-2 text-gray-600">
                  <ShieldCheck className="h-4 w-4" />
                  DPO :{" "}
                  <a href="mailto:dpo@qualywatch.com" className="text-orange-600 hover:underline">
                    dpo@qualywatch.com
                  </a>
                </p>
              </div>
            </section>

            {/* 2 */}
            <section id="donnees">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                2. Données que nous collectons
              </h2>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">Données fournies par vous</h3>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Identité : nom, prénom, fonction</li>
                <li>Coordonnées : adresse email, numéro de téléphone</li>
                <li>Identifiants : nom d&apos;utilisateur, mot de passe (chiffré bcrypt)</li>
                <li>Données entreprise : raison sociale, secteur d&apos;activité</li>
                <li>Photos : avatar de profil, pièces jointes aux feedbacks</li>
                <li>Contenu : feedbacks clients, messages de chat, notes internes</li>
                <li>
                  Données de paiement : traitées exclusivement par Stripe et Flutterwave (nous ne
                  stockons aucun numéro de carte)
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Données collectées automatiquement
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Identifiants techniques : adresse IP, type d&apos;appareil, OS</li>
                <li>Token de notification push (FCM)</li>
                <li>Données d&apos;usage : pages consultées, fonctionnalités utilisées</li>
                <li>Données de diagnostic : rapports de plantage, performances</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Permissions iOS / Android demandées
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  <strong>Caméra</strong> : pour scanner les codes QR de collecte de feedback
                </li>
                <li>
                  <strong>Photos</strong> : pour ajouter des pièces jointes aux feedbacks et avatars
                </li>
                <li>
                  <strong>Notifications</strong> : pour recevoir les alertes en temps réel
                </li>
                <li>
                  <strong>Localisation approximative</strong> (optionnelle) : pour les terminaux
                  physiques uniquement
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section id="finalites">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                3. Pourquoi nous traitons ces données
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                    <tr>
                      <th className="px-4 py-3">Finalité</th>
                      <th className="px-4 py-3">Base légale (RGPD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {purposes.map((p) => (
                      <tr key={p.goal}>
                        <td className="px-4 py-3 text-gray-700">{p.goal}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">{p.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4 */}
            <section id="tiers">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                4. Sous-traitants et tiers
              </h2>
              <p className="mt-3">
                Nous partageons des données avec les sous-traitants suivants, qui agissent uniquement
                sur nos instructions et dans le respect du RGPD :
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                    <tr>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Finalité</th>
                      <th className="px-4 py-3">Localisation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {subProcessors.map((s) => (
                      <tr key={s.name}>
                        <td className="px-4 py-3 font-medium text-gray-900">{s.name}</td>
                        <td className="px-4 py-3 text-gray-700">{s.purpose}</td>
                        <td className="px-4 py-3 text-gray-600">{s.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-medium text-orange-900">
                  Nous ne vendons jamais vos données. Nous ne faisons aucun ciblage publicitaire.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section id="transferts">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                5. Transferts internationaux
              </h2>
              <p className="mt-3">
                Certains sous-traitants sont situés hors UE (USA, Nigeria, Kenya). Ces transferts sont
                encadrés par les <strong>Clauses Contractuelles Types</strong> (SCC) approuvées par la
                Commission européenne, garantissant un niveau de protection équivalent au RGPD.
              </p>
            </section>

            {/* 6 */}
            <section id="conservation">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                6. Conservation des données
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                    <tr>
                      <th className="px-4 py-3">Donnée</th>
                      <th className="px-4 py-3">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {retention.map((r) => (
                      <tr key={r.data}>
                        <td className="px-4 py-3 font-medium text-gray-900">{r.data}</td>
                        <td className="px-4 py-3 text-gray-700">{r.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7 */}
            <section id="securite">
              <h2 className="font-display text-2xl font-semibold text-gray-900">7. Sécurité</h2>
              <p className="mt-3">
                Nous appliquons des mesures techniques et organisationnelles adaptées :
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Chiffrement TLS 1.2+ en transit, AES-256 au repos</li>
                <li>Mots de passe hashés (bcrypt)</li>
                <li>Authentification multi-facteurs disponible</li>
                <li>Cloisonnement multi-tenant strict (chaque entreprise voit uniquement ses données)</li>
                <li>Audit log de toutes les actions sensibles</li>
                <li>Sauvegardes quotidiennes chiffrées</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </section>

            {/* 8 */}
            <section id="droits">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                8. Vos droits (RGPD)
              </h2>
              <p className="mt-3">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li><strong>Accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Rectification</strong> : corriger des données inexactes</li>
                <li><strong>Effacement</strong> (« droit à l&apos;oubli ») : demander la suppression</li>
                <li><strong>Portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Opposition</strong> : vous opposer à un traitement</li>
                <li><strong>Limitation</strong> : restreindre un traitement</li>
                <li><strong>Retrait du consentement</strong> : à tout moment</li>
                <li>
                  <strong>Réclamation</strong> auprès d&apos;une autorité (CDP Sénégal, CNIL France)
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits :{" "}
                <a href="mailto:dpo@qualywatch.com" className="text-orange-600 hover:underline">
                  dpo@qualywatch.com
                </a>
                . Nous répondons sous 30 jours.
              </p>
            </section>

            {/* 9 */}
            <section id="mineurs">
              <h2 className="font-display text-2xl font-semibold text-gray-900">9. Mineurs</h2>
              <p className="mt-3">
                Qualywatch n&apos;est pas destiné aux personnes de moins de 18 ans. Nous ne collectons
                pas sciemment de données concernant des mineurs. Si vous pensez qu&apos;un mineur nous a
                transmis des données, contactez-nous immédiatement à{" "}
                <a href="mailto:dpo@qualywatch.com" className="text-orange-600 hover:underline">
                  dpo@qualywatch.com
                </a>
                .
              </p>
            </section>

            {/* 10 */}
            <section id="cookies">
              <h2 className="font-display text-2xl font-semibold text-gray-900">
                10. Cookies et traceurs
              </h2>
              <p className="mt-3">
                L&apos;application mobile n&apos;utilise pas de cookies. La plateforme web utilise
                uniquement des cookies techniques (session, préférences) — aucun cookie publicitaire
                ni de suivi tiers. Aucun consentement n&apos;est requis pour ces cookies essentiels.
              </p>
            </section>

            {/* 11 */}
            <section id="modifications">
              <h2 className="font-display text-2xl font-semibold text-gray-900">11. Modifications</h2>
              <p className="mt-3">
                Nous pouvons mettre à jour cette politique. Toute modification substantielle vous sera
                notifiée par email ou notification dans l&apos;application. La date « Dernière mise à
                jour » en haut indique la version en vigueur.
              </p>
            </section>

            {/* 12 */}
            <section id="contact">
              <h2 className="font-display text-2xl font-semibold text-gray-900">12. Contact</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:contact@qualywatch.com"
                  className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-300 hover:bg-orange-50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-orange-600" />
                    <p className="font-semibold text-gray-900">Questions générales</p>
                  </div>
                  <p className="text-sm text-orange-600">contact@qualywatch.com</p>
                </a>
                <a
                  href="mailto:dpo@qualywatch.com"
                  className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-orange-300 hover:bg-orange-50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-orange-600" />
                    <p className="font-semibold text-gray-900">DPO / RGPD</p>
                  </div>
                  <p className="text-sm text-orange-600">dpo@qualywatch.com</p>
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Adresse postale : Qualywatch SAS, Dakar 11000, Sénégal
              </p>
            </section>

            {/* Back link */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:underline"
              >
                ← Retour à l&apos;accueil
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
