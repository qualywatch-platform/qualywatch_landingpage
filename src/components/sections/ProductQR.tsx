import Image from "next/image";
import { Bell, Route, ScanLine, Store, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

type Point = { icon: LucideIcon; title: string; desc: string };

const contentByLocale: Record<
  "fr" | "en",
  { eyebrow: string; title: string; intro: string; alts: [string, string, string]; points: Point[]; sectors: string[]; cta: string }
> = {
  fr: {
    eyebrow: "QR code produit",
    title: "Un QR code sur vos produits. Vos clients parlent directement à la marque.",
    intro:
      "Imprimé sur l'emballage, le QR code QualyWatch permet de donner un avis, signaler un problème ou poser une question en quelques secondes, sans application. Vous êtes enfin proche de ceux qui achètent vos produits, même en rayon chez un distributeur.",
    alts: [
      "Bouteille de jus d'orange avec un QR code sur l'étiquette",
      "Barquette traiteur avec un QR code « Partagez-nous votre expérience »",
      "Paquet de biscuits avec un QR code sur le côté",
    ],
    points: [
      {
        icon: ScanLine,
        title: "Le produit est déjà connu",
        desc: "Un QR code par produit ou par gamme. Le client indique le motif, le numéro de lot et la date de péremption.",
      },
      {
        icon: Bell,
        title: "Alerte sur un lot",
        desc: "Plusieurs retours négatifs sur le même lot en quelques jours : vous êtes prévenu avant que le problème ne s'étende.",
      },
      {
        icon: Route,
        title: "Le bon service, tout de suite",
        desc: "Une réaction ou un défaut va à la Qualité, une question au service consommateurs, un avis au marketing.",
      },
      {
        icon: Store,
        title: "Vous découvrez vos points de vente",
        desc: "Pays, ville, type de magasin : vous savez où vos produits sont achetés, et où une contrefaçon est signalée.",
      },
    ],
    sectors: ["Cosmétique", "Agroalimentaire", "Boissons", "Traiteur", "Textile"],
    cta: "Parler de mes produits",
  },
  en: {
    eyebrow: "Product QR code",
    title: "A QR code on your products. Your customers talk straight to the brand.",
    intro:
      "Printed on the packaging, the QualyWatch QR code lets people leave a review, report a problem or ask a question in seconds, with no app. You finally get close to the people who buy your products, even on a retailer's shelf.",
    alts: [
      "Orange juice bottle with a QR code on the label",
      "Takeaway meal tray with a “Share your experience” QR code",
      "Pack of biscuits with a QR code on the side",
    ],
    points: [
      {
        icon: ScanLine,
        title: "The product is already known",
        desc: "One QR code per product or per range. The customer gives the reason, the batch number and the expiry date.",
      },
      {
        icon: Bell,
        title: "Batch alert",
        desc: "Several negative reports on the same batch within a few days: you are warned before the problem spreads.",
      },
      {
        icon: Route,
        title: "The right team, right away",
        desc: "A reaction or a defect goes to Quality, a question to consumer care, a review to marketing.",
      },
      {
        icon: Store,
        title: "You learn where you sell",
        desc: "Country, city, type of store: you know where your products are bought, and where a counterfeit is reported.",
      },
    ],
    sectors: ["Cosmetics", "Food", "Drinks", "Catering", "Textile"],
    cta: "Talk about my products",
  },
};

export function ProductQR({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="qr-produits" className="border-t border-card-border px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-5 lg:grid-rows-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl lg:col-span-3 lg:row-span-2 lg:aspect-auto">
            <Image src="/produit-jus.jpg" alt={c.alts[0]} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl lg:col-span-2">
            <Image src="/produit-traiteur.jpg" alt={c.alts[1]} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl lg:col-span-2">
            <Image src="/produit-biscuits.jpg" alt={c.alts[2]} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mt-14 grid border-t border-card-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {c.points.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col gap-3 border-b border-card-border py-8 sm:px-6 lg:border-b-0 lg:py-10 ${
                i === 0 ? "sm:pl-0" : "lg:border-l"
              } ${i % 2 === 1 ? "sm:border-l" : ""}`}
            >
              <IconTile icon={p.icon} />
              <h3 className="font-display mt-2 text-lg font-semibold text-text">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {c.sectors.map((s) => (
            <span key={s} className="rounded-full border border-card-border px-4 py-2 text-sm font-medium text-text">
              {s}
            </span>
          ))}
          <a
            href={`/${locale}#contact`}
            className="ml-auto rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-deep"
          >
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
