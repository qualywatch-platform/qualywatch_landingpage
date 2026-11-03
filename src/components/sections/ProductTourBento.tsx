import Image from "next/image";
import { IPhoneFrame } from "@/components/IPhoneFrame";

const contentByLocale = {
  fr: {
    title: "Du QR code à la résolution.",
    titleSecond: "Sans rien perdre en route.",
    intro:
      "Chaque avis suit le même chemin : il est recueilli en moins d'une minute, confié à la bonne personne, puis traité dans les délais que vous avez fixés.",
    collect: {
      title: "Un avis en moins d'une minute",
      text: "Votre client scanne le QR code posé à l'accueil, en chambre ou sur la table. Le formulaire s'ouvre dans son navigateur, sans application à installer.",
      alt: "Formulaire d'avis client ouvert sur un téléphone",
    },
    assign: {
      title: "Le bon avis à la bonne personne",
      text: "Le chef de service confie l'avis à un membre de son équipe depuis son téléphone. L'employé est notifié immédiatement.",
      alt: "Assignation d'un avis à un employé dans l'application mobile",
    },
    sla: {
      title: "Des délais tenus, des relances automatiques",
      text: "Fixez un délai de réponse par niveau de priorité. Si un avis n'est pas traité à temps, QualyWatch relance le responsable puis fait remonter l'avis.",
      alt: "Règles de délais et d'escalade dans l'espace manager",
    },
    listAlt: "Liste des avis clients dans l'application mobile",
    detailAlt: "Détail d'un avis client dans l'application mobile",
  },
  en: {
    title: "From QR code to resolution.",
    titleSecond: "With nothing lost along the way.",
    intro:
      "Every piece of feedback follows the same path: collected in under a minute, handed to the right person, then resolved within the deadlines you set.",
    collect: {
      title: "Feedback in under a minute",
      text: "Your customer scans the QR code at the front desk, in the room or on the table. The form opens in their browser, with no app to install.",
      alt: "Customer feedback form open on a phone",
    },
    assign: {
      title: "The right feedback to the right person",
      text: "The department head assigns feedback to a team member from their phone. The employee is notified right away.",
      alt: "Assigning feedback to an employee in the mobile app",
    },
    sla: {
      title: "Deadlines met, automatic reminders",
      text: "Set a response deadline per priority level. If feedback isn't handled in time, QualyWatch reminds the owner, then escalates it.",
      alt: "Deadline and escalation rules in the manager workspace",
    },
    listAlt: "Customer feedback list in the mobile app",
    detailAlt: "Customer feedback detail in the mobile app",
  },
};

export function ProductTourBento({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="fonctionnalites" className="bg-[#F5F5F7] px-4 py-24 sm:px-6 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Intro: two-tone headline and a fan of three phones */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-ink">{c.title}</span>
            <br />
            <span className="text-[#86868B]">{c.titleSecond}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6E6E73] lg:text-xl">{c.intro}</p>
        </div>

        <div className="relative mx-auto mt-16 flex h-[420px] max-w-3xl items-start justify-center overflow-hidden sm:h-[520px] lg:mt-20">
          <div className="absolute left-1/2 top-10 hidden -translate-x-[115%] sm:block">
            <IPhoneFrame src="/app-mobile-detail.jpg" alt={c.detailAlt} statusBarBg="#75746F" statusBarText="#FFFFFF" />
          </div>
          <div className="absolute left-1/2 top-10 hidden translate-x-[15%] sm:block">
            <IPhoneFrame src="/app-equipe-assignation.jpg" alt={c.assign.alt} statusBarBg="#757575" statusBarText="#FFFFFF" />
          </div>
          <div className="relative z-10">
            <IPhoneFrame src="/app-mobile-avis.jpg" alt={c.listAlt} />
          </div>
        </div>

        {/* Bento pair */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-[32px] bg-gradient-to-b from-[#FF8A2B] to-[#E3600A] text-center">
            <div className="px-8 pt-12 sm:px-12">
              <h3 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{c.collect.title}</h3>
              <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-white/90">{c.collect.text}</p>
            </div>
            <div className="mt-10 flex justify-center">
              <div className="-mb-40">
                <IPhoneFrame src="/app-formulaire-client.jpg" alt={c.collect.alt} statusBarBg="#FBFBFB" />
              </div>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-[32px] bg-white text-center">
            <div className="flex justify-center">
              <div className="-mt-44">
                <IPhoneFrame src="/app-equipe-assignation.jpg" alt={c.assign.alt} statusBarBg="#757575" statusBarText="#FFFFFF" />
              </div>
            </div>
            <div className="px-8 pb-12 pt-10 sm:px-12">
              <h3 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{c.assign.title}</h3>
              <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-[#6E6E73]">{c.assign.text}</p>
            </div>
          </article>
        </div>

        {/* Wide tile */}
        <article className="mt-5 grid items-center gap-10 overflow-hidden rounded-[32px] bg-white p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{c.sla.title}</h3>
            <p className="mt-4 text-[17px] leading-relaxed text-[#6E6E73]">{c.sla.text}</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#E5E5EA] bg-white">
            <Image src="/app-web-sla.jpg" alt={c.sla.alt} width={2320} height={1500} sizes="(min-width: 1024px) 640px, 100vw" className="block h-auto w-full" />
          </div>
        </article>
      </div>
    </section>
  );
}
