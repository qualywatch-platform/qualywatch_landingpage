import Image from "next/image";
import { Check } from "lucide-react";
import { IPhoneFrame } from "@/components/IPhoneFrame";

type Row = {
  title: string;
  text: string;
  points: string[];
  media:
    | { kind: "phone"; src: string; alt: string; statusBarBg?: string; statusBarText?: string }
    | { kind: "web"; src: string; alt: string; width: number; height: number };
};

const contentByLocale: Record<"fr" | "en", { title: string; intro: string; rows: Row[] }> = {
  fr: {
    title: "Du QR code à la résolution, sans rien perdre en route.",
    intro: "Chaque avis suit le même chemin : il est recueilli, confié à la bonne personne, puis traité dans les délais que vous avez fixés.",
    rows: [
      {
        title: "Un avis en moins d'une minute, sans application",
        text: "Votre client scanne le QR code posé à l'accueil, en chambre ou sur la table. Le formulaire s'ouvre dans son navigateur, au nom de votre établissement.",
        points: [
          "Ressenti, note sur 5 et service concerné",
          "Coordonnées facultatives pour être recontacté",
          "Aux couleurs de votre marque",
        ],
        media: { kind: "phone", src: "/app-formulaire-client.jpg", alt: "Formulaire d'avis client ouvert sur un téléphone après le scan d'un QR code", statusBarBg: "#FBFBFB" },
      },
      {
        title: "Le bon avis arrive à la bonne personne",
        text: "Le chef de service reçoit les avis de son périmètre et les confie à un membre de son équipe, depuis le web ou son téléphone. L'employé est notifié immédiatement.",
        points: [
          "Un espace par rôle : manager, chef de service, employé",
          "Employés proposés par service",
          "Invitation de l'équipe par e-mail",
        ],
        media: { kind: "phone", src: "/app-equipe-assignation.jpg", alt: "Assignation d'un avis client à un employé du service dans l'application mobile", statusBarBg: "#757575", statusBarText: "#FFFFFF" },
      },
      {
        title: "Des délais tenus, et des relances automatiques",
        text: "Vous fixez un délai de réponse et de résolution par niveau de priorité. Quand un avis n'est pas traité à temps, QualyWatch relance le responsable puis fait remonter l'avis.",
        points: [
          "Règles par priorité, de faible à urgence",
          "Escalade par e-mail et notification mobile",
          "Taux de dépassement suivi dans le temps",
        ],
        media: { kind: "web", src: "/app-web-sla.jpg", alt: "Règles de délais et d'escalade dans l'espace manager", width: 2320, height: 1500 },
      },
    ],
  },
  en: {
    title: "From QR code to resolution, with nothing lost along the way.",
    intro: "Every piece of feedback follows the same path: it is collected, handed to the right person, then resolved within the deadlines you set.",
    rows: [
      {
        title: "Feedback in under a minute, no app needed",
        text: "Your customer scans the QR code at the front desk, in the room or on the table. The form opens in their browser, under your venue's name.",
        points: ["Feeling, 5-star rating and department", "Optional contact details for a callback", "In your brand colors"],
        media: { kind: "phone", src: "/app-formulaire-client.jpg", alt: "Customer feedback form open on a phone after scanning a QR code", statusBarBg: "#FBFBFB" },
      },
      {
        title: "The right feedback reaches the right person",
        text: "Department heads receive the feedback for their area and assign it to a team member, from the web or their phone. The employee is notified right away.",
        points: ["One workspace per role: manager, department head, employee", "Employees suggested by department", "Team invitations by email"],
        media: { kind: "phone", src: "/app-equipe-assignation.jpg", alt: "Assigning customer feedback to a department employee in the mobile app", statusBarBg: "#757575", statusBarText: "#FFFFFF" },
      },
      {
        title: "Deadlines met, with automatic reminders",
        text: "Set a response and resolution deadline for each priority level. When feedback isn't handled in time, QualyWatch reminds the owner, then escalates it.",
        points: ["Rules by priority, from low to urgent", "Escalation by email and mobile notification", "Breach rate tracked over time"],
        media: { kind: "web", src: "/app-web-sla.jpg", alt: "Deadline and escalation rules in the manager workspace", width: 2320, height: 1500 },
      },
    ],
  },
};

export function ProductTour({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="fonctionnalites" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text lg:text-5xl">{c.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-dim">{c.intro}</p>
        </div>

        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-32">
          {c.rows.map((row, i) => {
            const mediaFirst = i % 2 === 1;
            return (
              <div
                key={row.title}
                className={`grid items-center gap-12 lg:gap-20 ${row.media.kind === "web" ? "lg:grid-cols-[0.8fr_1.2fr]" : "lg:grid-cols-2"}`}
              >
                <div className={mediaFirst ? "lg:order-2" : ""}>
                  <h3 className="font-display text-2xl font-semibold leading-snug text-text lg:text-[32px] lg:leading-[1.2]">{row.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{row.text}</p>
                  <ul className="mt-8 space-y-3">
                    {row.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] text-text">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-deep" strokeWidth={2} aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex justify-center overflow-hidden rounded-2xl bg-mist ${mediaFirst ? "lg:order-1" : ""} ${row.media.kind === "phone" ? "px-8 pt-12 lg:pt-16" : "p-6 sm:p-10"}`}>
                  {row.media.kind === "phone" ? (
                    <div className="-mb-28 sm:-mb-36">
                      <IPhoneFrame src={row.media.src} alt={row.media.alt} statusBarBg={row.media.statusBarBg} statusBarText={row.media.statusBarText} />
                    </div>
                  ) : (
                    <div className="w-full overflow-hidden rounded-lg border border-card-border bg-white">
                      <Image src={row.media.src} alt={row.media.alt} width={row.media.width} height={row.media.height} sizes="(min-width: 1024px) 720px, 100vw" className="block h-auto w-full" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
