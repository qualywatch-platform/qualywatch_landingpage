import { Hotel, Landmark, Smartphone, ShoppingCart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Pour qui ?",
    title: "Pensé pour les entreprises qui vivent au contact du client.",
    sectors: [
      {
        icon: Hotel,
        title: "Hôtellerie et restauration",
        desc: "Recueillez l'avis du client avant qu'il ne parte, et avant qu'il ne le publie. Chaque séjour devient une source d'amélioration.",
      },
      {
        icon: Landmark,
        title: "Banque et assurance",
        desc: "Mesurez objectivement la qualité d'accueil en agence et repérez les points de friction du parcours client.",
      },
      {
        icon: Smartphone,
        title: "Télécoms et services",
        desc: "Suivez la satisfaction en temps réel dans vos centres d'appel, boutiques et canaux en ligne.",
      },
      {
        icon: ShoppingCart,
        title: "Commerce et distribution",
        desc: "Évaluez l'expérience en point de vente, comparez vos sites et donnez aux managers terrain les moyens d'agir.",
      },
    ],
  },
  en: {
    eyebrow: "Who is it for?",
    title: "Built for companies that live in customer contact.",
    sectors: [
      {
        icon: Hotel,
        title: "Hospitality and restaurants",
        desc: "Capture customer feedback before they leave, and before they post it. Every stay becomes a source of improvement.",
      },
      {
        icon: Landmark,
        title: "Banking and insurance",
        desc: "Objectively measure branch service quality and spot friction points in the customer journey.",
      },
      {
        icon: Smartphone,
        title: "Telecom and services",
        desc: "Track satisfaction in real time across call centers, stores and online channels.",
      },
      {
        icon: ShoppingCart,
        title: "Retail and distribution",
        desc: "Measure in-store experience, compare your locations and give field managers the means to act.",
      },
    ],
  },
};

export function Sectors({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="secteurs" className="border-t border-card-border px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} layout="stack" />
        <div className="mt-14 grid border-t border-card-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {c.sectors.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-3 border-b border-card-border py-8 sm:px-6 lg:border-b-0 lg:py-10 ${
                i === 0 ? "sm:pl-0" : "lg:border-l"
              } ${i % 2 === 1 ? "sm:border-l" : ""}`}
            >
              <IconTile icon={s.icon} />
              <h3 className="font-display mt-2 text-lg font-semibold text-text">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
