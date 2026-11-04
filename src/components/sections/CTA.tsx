import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const contentByLocale = {
  fr: {
    title: "Donnez à chaque client la certitude d'être entendu.",
    intro: "Créez votre compte en quelques minutes. Vos premiers avis arrivent dès aujourd'hui, et aucun ne restera sans suite.",
    primary: "Commencer gratuitement",
    secondary: "Demander une démo",
    points: ["Sans engagement", "Sans carte bancaire", "Configuration immédiate"],
    alt: "Client satisfait",
  },
  en: {
    title: "Give every customer the certainty of being heard.",
    intro: "Create your account in minutes. Your first reviews arrive today, and none will go unanswered.",
    primary: "Start for free",
    secondary: "Request a demo",
    points: ["No commitment", "No credit card", "Instant setup"],
    alt: "Happy customer",
  },
};

export function CTA({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="rejoindre" className="relative isolate overflow-hidden bg-orange">
      <Image
        src="/faq-bg-44581.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 hidden object-cover object-[left_top] md:block"
      />
      <div className="mx-auto flex max-w-7xl justify-end px-6 py-24 lg:px-16 lg:py-32">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">{c.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">{c.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="https://app.qualywatch.com/auth/register"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 text-[15px] font-semibold text-white transition-colors hover:bg-black"
            >
              {c.primary}
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-ink/40 bg-white/90 px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
            >
              {c.secondary}
            </Link>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {c.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                <Check className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
