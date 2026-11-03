import Image from "next/image";
import { Star, MessageCircle, Activity, UserCircle, CheckCheck, Palette, Reply, BookOpen, Check } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Fidélisation",
    title: (
      <>
        Huit leviers pour <span className="text-orange-deep">retenir vos clients.</span>
      </>
    ),
    intro:
      "Des capacités concrètes qui, mises bout à bout, transforment chaque avis en occasion de fidéliser, et chaque client mécontent en client retenu.",
    items: [
      {
        icon: Star,
        badge: "Avis Google",
        title: "Améliorez votre note Google.",
        desc: "Les clients satisfaits sont invités à publier leur avis sur Google. Les mécontents sont pris en charge en privé.",
      },
      {
        icon: Activity,
        badge: "Risque de départ",
        title: "Repérez les clients sur le départ.",
        desc: "Un score de risque par client : baisse de note, silence prolongé, avis négatifs répétés. Vous agissez avant de le perdre.",
      },
      {
        icon: MessageCircle,
        badge: "WhatsApp et e-mail",
        title: "Confirmez la résolution avec le client.",
        desc: "Une fois l'avis traité, le client reçoit un e-mail et un message WhatsApp pour confirmer que le problème est réglé.",
      },
      {
        icon: Palette,
        badge: "Marque blanche",
        title: "Vos couleurs, partout.",
        desc: "QR codes, formulaires, e-mails et portail client aux couleurs de votre enseigne.",
      },
      {
        icon: UserCircle,
        badge: "Portail client",
        title: "Le client a son propre espace.",
        desc: "Il suit le traitement de son avis : statut, échanges, historique et validation finale.",
      },
      {
        icon: Reply,
        badge: "Réponses types",
        title: "Répondez vite et bien.",
        desc: "Une bibliothèque de réponses validées par la direction. Le manager choisit, personnalise et envoie.",
      },
      {
        icon: CheckCheck,
        badge: "Validation client",
        title: "C'est le client qui valide.",
        desc: "Le client confirme lui-même la résolution, depuis son portail, par e-mail ou WhatsApp. Le dernier mot lui revient.",
      },
      {
        icon: BookOpen,
        badge: "Centre d'aide",
        title: "Vos clients trouvent les réponses seuls.",
        desc: "FAQ et articles d'aide propres à votre enseigne, pour les questions les plus fréquentes.",
      },
    ],
    brand: {
      eyebrow: "Marque blanche et QR codes",
      title: "Votre marque, votre identité.",
      desc: "Logo, couleurs, typographie : vos affiches QR, vos e-mails et votre portail client prennent l'identité visuelle de votre entreprise, du premier scan jusqu'à la confirmation de résolution.",
      points: ["Logo et favicon", "Couleurs de votre marque", "Affiches QR prêtes à imprimer", "Domaine personnalisé"],
      alt: "Exemple d'affiche QR code personnalisée",
    },
  },
  en: {
    eyebrow: "Retention",
    title: (
      <>
        Eight levers to <span className="text-orange-deep">retain your customers.</span>
      </>
    ),
    intro:
      "Concrete capabilities that, taken together, turn every review into a retention opportunity, and every unhappy customer into a retained one.",
    items: [
      {
        icon: Star,
        badge: "Google reviews",
        title: "Improve your Google rating.",
        desc: "Happy customers are invited to post their review on Google. Unhappy ones are handled privately.",
      },
      {
        icon: Activity,
        badge: "Churn risk",
        title: "Spot customers about to leave.",
        desc: "A risk score per customer: rating drop, prolonged silence, repeated negative reviews. Act before you lose them.",
      },
      {
        icon: MessageCircle,
        badge: "WhatsApp and email",
        title: "Confirm resolution with the customer.",
        desc: "Once the feedback is handled, the customer gets an email and a WhatsApp message to confirm the issue is solved.",
      },
      {
        icon: Palette,
        badge: "White label",
        title: "Your colors, everywhere.",
        desc: "QR codes, forms, emails and customer portal in your brand's colors.",
      },
      {
        icon: UserCircle,
        badge: "Customer portal",
        title: "Customers get their own space.",
        desc: "They follow their feedback's resolution: status, messages, history and final validation.",
      },
      {
        icon: Reply,
        badge: "Canned responses",
        title: "Reply fast and well.",
        desc: "A library of replies approved by management. The manager picks one, personalizes it and sends it.",
      },
      {
        icon: CheckCheck,
        badge: "Customer validation",
        title: "The customer validates.",
        desc: "Customers confirm the resolution themselves, from their portal, by email or WhatsApp. They have the last word.",
      },
      {
        icon: BookOpen,
        badge: "Help center",
        title: "Customers find answers on their own.",
        desc: "FAQ and help articles specific to your brand, for the most common questions.",
      },
    ],
    brand: {
      eyebrow: "White label and QR codes",
      title: "Your brand, your identity.",
      desc: "Logo, colors, typography: your QR posters, emails and customer portal take on your company's visual identity, from the first scan to the resolution confirmation.",
      points: ["Logo and favicon", "Your brand colors", "Print-ready QR posters", "Custom domain"],
      alt: "Sample custom QR code poster",
    },
  },
};

export function Advantages({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  const b = c.brand;
  return (
    <section id="armes" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {c.items.map((a) => (
            <div key={a.badge} className="flex flex-col gap-3">
              <IconTile icon={a.icon} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-deep">{a.badge}</p>
              <h3 className="font-display text-lg font-semibold leading-snug text-text">{a.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 overflow-hidden rounded-xl bg-orange-soft p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:p-16">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold text-orange-deep">
              <span className="h-0.5 w-6 bg-orange" aria-hidden />
              {b.eyebrow}
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold leading-tight text-text sm:text-3xl">{b.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-text-dim">{b.desc}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {b.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[15px] text-text">
                  <Check className="h-4 w-4 shrink-0 text-orange-deep" strokeWidth={2.2} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-lg border border-[#F2D9C4] bg-bg p-3">
            <Image src="/qr-poster-orange.png" alt={b.alt} width={620} height={830} className="h-auto w-full rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
