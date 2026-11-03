import { IPhoneFrame } from "@/components/IPhoneFrame";

const contentByLocale = {
  fr: {
    eyebrow: "Côté client",
    title: "Un avis en moins d'une minute. Sans application.",
    intro:
      "Votre client scanne le QR code posé à l'accueil, en chambre ou sur la table. Le formulaire s'ouvre directement dans son navigateur, au nom de votre établissement.",
    steps: [
      { title: "Il choisit son ressenti", text: "Positif, négatif, incident ou suggestion, puis une note de 1 à 5 étoiles." },
      { title: "Il précise le service concerné", text: "L'avis arrive directement au bon chef de service, sans tri manuel." },
      { title: "Il peut être recontacté", text: "S'il laisse ses coordonnées, il est informé du traitement et confirme lui-même la résolution." },
    ],
    alt: "Formulaire d'avis client QualyWatch ouvert sur un téléphone après le scan d'un QR code",
  },
  en: {
    eyebrow: "Customer side",
    title: "Feedback in under a minute. No app needed.",
    intro:
      "Your customer scans the QR code at the front desk, in the room or on the table. The form opens right in their browser, under your venue's name.",
    steps: [
      { title: "They pick how they feel", text: "Positive, negative, incident or suggestion, then a 1 to 5 star rating." },
      { title: "They name the department", text: "The feedback goes straight to the right department head, with no manual sorting." },
      { title: "They can be contacted back", text: "If they leave their details, they are kept informed and confirm the resolution themselves." },
    ],
    alt: "QualyWatch customer feedback form open on a phone after scanning a QR code",
  },
};

export function CustomerExperience({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="experience-client" className="border-y border-card-border bg-mist px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
        <div>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{c.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{c.intro}</p>

          <ol className="mt-10 border-t border-text">
            {c.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-card-border py-6">
                <span className="font-display text-xl tabular-nums text-orange-deep">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-text-dim">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex justify-center">
          <IPhoneFrame src="/app-formulaire-client.jpg" alt={c.alt} statusBarBg="#FBFBFB" />
        </div>
      </div>
    </section>
  );
}
