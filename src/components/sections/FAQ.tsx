import { Plus, Mail } from "lucide-react";

const contentByLocale = {
  fr: {
    eyebrow: "FAQ",
    title: (
      <>
        Questions fréquentes.
      </>
    ),
    intro: "Ce qu'on nous demande le plus souvent avant de démarrer.",
    helpTitle: "Vous n'avez pas trouvé votre réponse ?",
    helpText: "Nous répondons sous 24 heures ouvrées.",
    faqs: [
      {
        q: "Mes clients doivent-ils télécharger une application ?",
        a: "Non. QualyWatch fonctionne par QR code et lien web. Aucune installation, aucun compte à créer côté client : l'avis est laissé en moins d'une minute.",
      },
      {
        q: "Combien de temps faut-il pour démarrer ?",
        a: "Quelques minutes : vous créez votre compte, ajoutez vos services et votre équipe, puis imprimez les QR codes générés pour chaque service.",
      },
      {
        q: "Puis-je personnaliser le formulaire d'avis ?",
        a: "Oui. À partir de la formule Business, vous pouvez ajouter vos propres champs : questions, ordre d'affichage et réponses obligatoires.",
      },
      {
        q: "Qu'est-ce que les KaliPoints ?",
        a: "Un système de points : vos clients en gagnent en donnant leur avis, vos employés en gagnent quand ils sont bien notés. Une reconnaissance immédiate.",
      },
      {
        q: "Comment sont protégées mes données ?",
        a: "Les données de chaque entreprise sont cloisonnées et les connexions chiffrées. Vous pouvez demander l'export ou la suppression de vos données à tout moment.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Mobile money (Orange Money, Wave), carte bancaire et virement. Facturation mensuelle ou annuelle, avec deux mois offerts sur l'abonnement annuel.",
      },
    ],
  },
  en: {
    eyebrow: "FAQ",
    title: (
      <>
        Frequently asked questions.
      </>
    ),
    intro: "What we get asked most often before getting started.",
    helpTitle: "Didn't find your answer?",
    helpText: "We reply within 24 business hours.",
    faqs: [
      {
        q: "Do my customers need to download an app?",
        a: "No. QualyWatch works through QR codes and web links. No install and no account on the customer side: feedback takes under a minute.",
      },
      {
        q: "How long does it take to get started?",
        a: "A few minutes: create your account, add your departments and team, then print the QR codes generated for each department.",
      },
      {
        q: "Can I customize the feedback form?",
        a: "Yes. From the Business plan, you can add your own fields: questions, display order and required answers.",
      },
      {
        q: "What are KaliPoints?",
        a: "A points system: customers earn points for sharing feedback, employees earn them when they get good ratings. Instant recognition.",
      },
      {
        q: "How is my data protected?",
        a: "Each company's data is isolated and connections are encrypted. You can request the export or deletion of your data at any time.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Mobile money (Orange Money, Wave), card and bank transfer. Monthly or annual billing, with two months free on annual plans.",
      },
    ],
  },
};

export function FAQ({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="faq" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
                    <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{c.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{c.intro}</p>
          <div className="mt-8 rounded-lg bg-orange-soft p-6">
            <p className="font-display text-base font-semibold text-text">{c.helpTitle}</p>
            <p className="mt-1 text-sm text-text-dim">{c.helpText}</p>
            <a
              href="mailto:aishaseye@qualywatch.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-deep hover:underline"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} aria-hidden />
              aishaseye@qualywatch.com
            </a>
          </div>
        </div>

        <div className="border-t border-card-border">
          {c.faqs.map((f) => (
            <details key={f.q} className="group border-b border-card-border py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="font-display text-base font-semibold text-text lg:text-lg">{f.q}</span>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-soft text-orange-deep transition-transform group-open:rotate-45">
                  <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
