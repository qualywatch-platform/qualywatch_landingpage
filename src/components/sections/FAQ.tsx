import Image from "next/image";
import { Plus, MessageCircleQuestion, Mail } from "lucide-react";

const faqsByLocale = {
  fr: [
    {
      q: "Mes clients doivent-ils télécharger une application ?",
      a: "Non. Qualywatch fonctionne via QR code et lien web. Aucune installation, aucune création de compte côté client. Le feedback est laissé en moins de 60 secondes.",
    },
    {
      q: "Combien de temps pour configurer Qualywatch ?",
      a: "10 minutes en moyenne. Inscription, import de votre équipe via Excel ou Google Sheets, génération automatique des QR codes par service. Vous êtes en production avant le service du soir.",
    },
    {
      q: "Puis-je personnaliser le formulaire de feedback ?",
      a: "Oui — 49 custom fields disponibles à partir du plan Business. Choisissez les questions, l'ordre, les conditions d'affichage, les réponses obligatoires.",
    },
    {
      q: "Qu'est-ce que les KaliPoints ?",
      a: "Un système de points convertibles : vos clients en gagnent en laissant un avis, vos employés en gagnent quand ils reçoivent une bonne note. C'est de la reconnaissance immédiate, pas du gadget.",
    },
    {
      q: "Qualywatch est-il conforme au RGPD ?",
      a: "Oui. Hébergement en Europe (Allemagne, Falkenstein), DPA disponible, droit à l'oubli, anonymisation, export de données en 1 clic. Conforme également à la loi sénégalaise sur les données.",
    },
    {
      q: "Quels moyens de paiement acceptez-vous ?",
      a: "Mobile money (Orange Money, Wave, MTN), CB internationale, virement bancaire. Facturation mensuelle ou annuelle (-2 mois sur l'année).",
    },
  ],
  en: [
    {
      q: "Do my customers need to download an app?",
      a: "No. Qualywatch works via QR code and web link. No install, no account on the customer side. Feedback is left in under 60 seconds.",
    },
    {
      q: "How long does it take to set up Qualywatch?",
      a: "10 minutes on average. Sign up, import your team via Excel or Google Sheets, automatic QR-code generation per service. You're live before the evening shift.",
    },
    {
      q: "Can I customise the feedback form?",
      a: "Yes — 49 custom fields available from the Business plan up. Choose the questions, the order, the display conditions, the required answers.",
    },
    {
      q: "What are KaliPoints?",
      a: "A convertible points system: your customers earn them for leaving feedback, your employees earn them when they get a good rating. Instant recognition, not a gimmick.",
    },
    {
      q: "Is Qualywatch GDPR compliant?",
      a: "Yes. European hosting (Germany, Falkenstein), DPA available, right to be forgotten, anonymisation, one-click data export. Also compliant with Senegal's data protection law.",
    },
    {
      q: "Which payment methods do you accept?",
      a: "Mobile money (Orange Money, Wave, MTN), international cards, bank transfer. Monthly or annual billing (-2 months on annual).",
    },
  ],
};

export function FAQ({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const isEnglish = locale === "en";
  const faqs = faqsByLocale[locale];
  return (
    <section id="faq" className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32">
      {/* Background image — very faded */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/faq-bg-44581.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.10]"
        />
        {/* Heavy white wash — image becomes a barely-there ghost */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.99) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* LEFT — sticky header */}
          <div className="reveal-children lg:sticky lg:top-28">
            <p className="reveal-item reveal-delay-1 font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 15 · FAQ</p>
            <h2 className="reveal-item reveal-delay-2 font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              {isEnglish ? (
                <>Frequently asked <span className="italic text-orange">questions.</span></>
              ) : (
                <>Questions <span className="italic text-orange">fréquentes.</span></>
              )}
            </h2>
            <p className="reveal-item reveal-delay-3 mt-5 text-base leading-relaxed text-text-dim lg:text-lg">
              {isEnglish
                ? "Everything we get asked before signing. No jargon, no empty promises."
                : "Tout ce qu'on nous demande avant de signer. Pas de jargon, pas de promesses creuses."}
            </p>

            {/* Help card */}
            <div className="reveal-item reveal-delay-4 mt-8 rounded-2xl border border-card-border bg-card p-5">
              <div className="flex items-center gap-2 text-orange">
                <MessageCircleQuestion className="h-5 w-5" strokeWidth="2" />
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  {isEnglish ? "Didn't find it?" : "Pas trouvé ?"}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-dim">
                {isEnglish ? "We reply within 24 business hours." : "On répond en moins de 24h ouvrées."}
              </p>
              <a
                href="mailto:aishaseye074@gmail.com"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-text transition hover:text-orange"
              >
                <Mail className="h-4 w-4" strokeWidth="2" />
                aishaseye074@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT — accordion list */}
          <div className="reveal-children space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className={`reveal-item reveal-delay-${(i % 5) + 1} group rounded-2xl border border-card-border bg-card p-5 transition hover:border-orange/30 open:border-orange/50 lg:p-6`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <div className="flex items-start gap-4">
                    <span className="font-mono mt-0.5 text-[12px] font-bold text-orange">
                      0{i + 1}
                    </span>
                    <span className="font-display text-base font-bold text-text lg:text-lg">
                      {f.q}
                    </span>
                  </div>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange transition group-open:rotate-45">
                    <Plus className="h-4 w-4" strokeWidth="2.5" />
                  </span>
                </summary>
                <p className="mt-4 pl-9 text-[14px] leading-relaxed text-text-dim lg:text-[15px]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
