import { Mail, Shield, UserCheck, Smartphone } from "lucide-react";
import { IPhoneFrame } from "@/components/IPhoneFrame";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "Équipes",
    title: "Vos équipes. Vos collaborateurs. Tous connectés.",
    intro:
      "Invitez vos managers, chefs de service et employés. Chacun accède à son propre espace et ne voit que ce qui le concerne : le manager pilote l'ensemble, le chef de service répartit les avis, l'employé traite ceux qui lui sont confiés.",
    alt: "Assignation d'un avis client à un employé du service, dans l'application mobile QualyWatch",
    features: [
      { icon: Mail, label: "Invitation par e-mail", desc: "Un lien et un code de confirmation, le compte est créé en quelques minutes." },
      { icon: Shield, label: "Un rôle pour chacun", desc: "Manager, directeur, chef de service, employé : chaque rôle a ses propres droits." },
      { icon: UserCheck, label: "Le bon avis au bon employé", desc: "Le chef de service assigne l'avis à un membre de son service, qui est notifié." },
      { icon: Smartphone, label: "Sur le web et sur mobile", desc: "Les équipes terrain traitent les avis depuis leur téléphone." },
    ],
  },
  en: {
    eyebrow: "Teams",
    title: "Your teams. Your collaborators. All connected.",
    intro:
      "Invite your managers, department heads and employees. Each one gets their own workspace and only sees what concerns them: the manager oversees everything, the department head dispatches feedback, the employee handles what is assigned to them.",
    alt: "Assigning a customer review to a department employee in the QualyWatch mobile app",
    features: [
      { icon: Mail, label: "Email invitation", desc: "A link and a confirmation code: the account is ready in minutes." },
      { icon: Shield, label: "A role for everyone", desc: "Manager, director, department head, employee: each role has its own permissions." },
      { icon: UserCheck, label: "The right feedback to the right person", desc: "The department head assigns feedback to a team member, who gets notified." },
      { icon: Smartphone, label: "On web and mobile", desc: "Field teams handle feedback from their phone." },
    ],
  },
};

export function Collaborators({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="portail" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="flex justify-center rounded-3xl border border-card-border bg-mist px-6 py-14 lg:py-20">
            <IPhoneFrame src="/app-equipe-assignation.jpg" alt={c.alt} statusBarBg="#757575" statusBarText="#FFFFFF" />
          </div>

          <div>
                        <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">
              {c.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{c.intro}</p>

            <ul className="mt-10 grid border-t border-card-border sm:grid-cols-2">
              {c.features.map((f, i) => (
                <li
                  key={f.label}
                  className={`flex flex-col gap-2 border-b border-card-border py-6 ${
                    i % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8"
                  }`}
                >
                  <IconTile icon={f.icon} size="sm" />
                  <div className="font-display mt-1 text-base font-semibold text-text">{f.label}</div>
                  <div className="text-sm leading-relaxed text-text-dim">{f.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
