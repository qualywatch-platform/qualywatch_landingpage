import { Heart, AlertCircle, UserX, ChevronDown, Star, Layers } from "lucide-react";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Avis internes",
    title: "Vos employés ont aussi leur mot à dire.",
    intro:
      "Vos employés peuvent eux aussi donner leur avis : sur leur service, l'ambiance, les outils. Quand l'auteur est un membre actif de l'entreprise, son identité est automatiquement masquée et l'avis apparaît comme « Employé anonyme ».",
    features: [
      { icon: UserX, label: "Anonymat automatique", desc: "L'identité d'un membre de l'entreprise est masquée sans action de sa part." },
      { icon: Layers, label: "Les mêmes canaux", desc: "QR code, lien public, e-mail : les mêmes points de contact que pour vos clients." },
      { icon: AlertCircle, label: "Signaux faibles", desc: "Tensions et idées d'amélioration repérées avant de devenir des problèmes." },
      { icon: Heart, label: "Climat d'équipe", desc: "La santé de vos équipes, au même endroit que la satisfaction client." },
    ],
    form: {
      header: "Nouvel avis",
      badge: "Employé anonyme",
      service: "Service concerné",
      serviceValue: "Service client",
      rating: "Climat ressenti",
      message: "Votre message",
      messageValue: "L'équipe est très soudée, mais il manque du matériel pour les nouveaux arrivants.",
      notice: "Adresse reconnue comme membre actif : identité masquée.",
      submit: "Envoyer l'avis",
    },
  },
  en: {
    eyebrow: "Internal feedback",
    title: "Your employees have a say too.",
    intro:
      "Your employees can share feedback too: on their department, the atmosphere, the tools. When the author is an active company member, their identity is automatically hidden and the feedback shows as \"Anonymous employee\".",
    features: [
      { icon: UserX, label: "Automatic anonymity", desc: "A company member's identity is hidden without them doing anything." },
      { icon: Layers, label: "The same channels", desc: "QR code, public link, email: the same touchpoints as your customers." },
      { icon: AlertCircle, label: "Weak signals", desc: "Tensions and improvement ideas caught before they become problems." },
      { icon: Heart, label: "Team climate", desc: "Your teams' wellbeing, in the same place as customer satisfaction." },
    ],
    form: {
      header: "New feedback",
      badge: "Anonymous employee",
      service: "Department",
      serviceValue: "Customer service",
      rating: "Team climate",
      message: "Your message",
      messageValue: "The team is very close, but new joiners are missing equipment.",
      notice: "Address recognised as an active member: identity hidden.",
      submit: "Send feedback",
    },
  },
};

export function TeamFeedbacks({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  const f = c.form;
  return (
    <section id="feedbacks-internes" className="border-y border-card-border bg-cream px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold text-orange-deep"><span className="h-0.5 w-6 bg-orange" aria-hidden />{c.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{c.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{c.intro}</p>
            <ul className="mt-10 grid border-t border-card-border sm:grid-cols-2">
              {c.features.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex flex-col gap-2 border-b border-card-border py-6 ${i % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8"}`}
                >
                  <IconTile icon={item.icon} size="sm" />
                  <div className="font-display mt-1 text-base font-semibold text-text">{item.label}</div>
                  <div className="text-sm leading-relaxed text-text-dim">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-card-border bg-bg" aria-hidden>
            <div className="flex items-center justify-between border-b border-card-border px-6 py-4">
              <span className="font-display text-sm font-semibold text-text">{f.header}</span>
              <span className="inline-flex items-center gap-1.5 rounded border border-card-border px-2 py-1 text-xs font-medium text-text-dim">
                <UserX className="h-3.5 w-3.5" strokeWidth={1.8} />
                {f.badge}
              </span>
            </div>
            <div className="space-y-5 px-6 py-6">
              <div>
                <div className="text-xs font-medium text-text-mute">{f.service}</div>
                <div className="mt-2 flex items-center justify-between rounded-md border border-card-border px-3.5 py-2.5 text-sm text-text">
                  {f.serviceValue}
                  <ChevronDown className="h-4 w-4 text-text-mute" strokeWidth={1.8} />
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-text-mute">{f.rating}</div>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`h-6 w-6 ${i <= 4 ? "fill-orange text-orange" : "fill-card-border text-card-border"}`} strokeWidth={0} />
                  ))}
                  <span className="ml-2 text-sm font-medium text-text">4 / 5</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-text-mute">{f.message}</div>
                <div className="mt-2 rounded-md border border-card-border p-3.5 text-sm leading-relaxed text-text">{f.messageValue}</div>
              </div>
              <p className="flex items-start gap-2 text-[13px] leading-snug text-text-dim">
                <UserX className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
                {f.notice}
              </p>
              <div className="flex h-11 w-full items-center justify-center rounded-md bg-orange-deep text-sm font-semibold text-white">{f.submit}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
