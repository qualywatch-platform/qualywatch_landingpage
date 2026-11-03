import { Lock, Shield, Cloud, KeyRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Données et sécurité",
    title: (
      <>
        La confiance est au cœur <span className="text-orange-deep">de notre engagement.</span>
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
        Trust is at the heart <span className="text-orange-deep">of our commitment.</span>
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
    <section className="border-y border-card-border bg-cream px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {c.items.map((it) => (
            <div key={it.title} className="flex flex-col gap-3 rounded-lg border border-card-border bg-bg p-7">
              <IconTile icon={it.icon} />
              <h3 className="font-display mt-2 text-lg font-semibold text-text">{it.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
