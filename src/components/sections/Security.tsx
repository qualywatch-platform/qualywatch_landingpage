import { Lock, Shield, Cloud, KeyRound } from "lucide-react";

const contentByLocale = {
  fr: {
    eyebrow: "Données et sécurité",
    title: (
      <>
        La confiance est au cœur de notre <span className="text-white">engagement.</span>
      </>
    ),
    intro: "Vos données restent les vôtres : elles sont cloisonnées, protégées et exportables à tout moment.",
    items: [
      { icon: Lock, title: "Données cloisonnées", desc: "Chaque entreprise dispose de son propre espace. Aucun partage de données entre comptes." },
      { icon: Shield, title: "Respect de la vie privée", desc: "Droit à l'oubli, anonymisation et export de vos données sur simple demande." },
      { icon: Cloud, title: "Hébergement sécurisé", desc: "Infrastructure cloud professionnelle, connexions chiffrées et sauvegardes régulières." },
      { icon: KeyRound, title: "Connexion protégée", desc: "Sessions chiffrées avec expiration et code de vérification envoyé par e-mail." },
    ],
  },
  en: {
    eyebrow: "Data and security",
    title: (
      <>
        Trust is at the heart of our <span className="text-white">commitment.</span>
      </>
    ),
    intro: "Your data stays yours: isolated, protected and exportable at any time.",
    items: [
      { icon: Lock, title: "Isolated data", desc: "Every company has its own workspace. No data is shared between accounts." },
      { icon: Shield, title: "Privacy by design", desc: "Right to be forgotten, anonymization and data export on request." },
      { icon: Cloud, title: "Secure hosting", desc: "Professional cloud infrastructure, encrypted connections and regular backups." },
      { icon: KeyRound, title: "Protected sign-in", desc: "Encrypted sessions with expiry and a verification code sent by email." },
    ],
  },
};

export function Security({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="securite" className="bg-orange px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Own heading: the shared one is set for light backgrounds */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">{c.title}</h2>
          <p className="text-base leading-relaxed text-ink/85 lg:text-lg">{c.intro}</p>
        </div>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {c.items.map((it) => (
            <div key={it.title} className="flex flex-col gap-3 border-t border-ink/20 pt-6">
              <it.icon className="h-5 w-5 shrink-0 text-ink" strokeWidth={1.8} aria-hidden />
              <h3 className="font-display mt-1 text-base font-semibold text-ink">{it.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
