import { Layers, Bell, BarChart3, Brain, ShieldCheck, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { IconTile } from "@/components/IconTile";

const contentByLocale = {
  fr: {
    eyebrow: "La solution",
    title: "Six fonctionnalités, un seul outil.",
    intro: "Plus de questionnaires papier interminables. Un scan, un avis, et une action immédiate.",
    features: [
      {
        icon: Layers,
        title: "Collecte multicanale",
        description:
          "QR code sur place, WhatsApp Business, e-mail, lien public. Vos clients laissent un avis en moins d'une minute, sans application à installer.",
      },
      {
        icon: Bell,
        title: "Alertes en temps réel",
        description:
          "Notification sur mobile et sur le web dès qu'un avis critique arrive. Le responsable concerné est prévenu, pas toute la direction en copie.",
      },
      {
        icon: BarChart3,
        title: "Tableau de bord NPS et satisfaction",
        description:
          "Scores NPS et satisfaction par service, par équipe et par période. Chaque manager ne voit que ce qui le concerne.",
      },
      {
        icon: Brain,
        title: "Analyse et assistant IA",
        description:
          "Chaque avis est classé automatiquement : sentiment, sujet, urgence. L'assistant répond à vos questions : « Quel service a le plus baissé en mai ? »",
      },
      {
        icon: ShieldCheck,
        title: "Délais et escalade",
        description:
          "Vous fixez un délai de traitement par priorité. Un avis non traité à temps remonte automatiquement au niveau supérieur.",
      },
      {
        icon: Trophy,
        title: "Badges et classement",
        description:
          "Vos clients cumulent des points en donnant leur avis. Vos employés bien notés reçoivent des badges et apparaissent au classement.",
      },
    ],
  },
  en: {
    eyebrow: "The solution",
    title: "Six features, one tool.",
    intro: "No more endless paper questionnaires. A scan, a review, and immediate action.",
    features: [
      {
        icon: Layers,
        title: "Multi-channel collection",
        description:
          "On-site QR code, WhatsApp Business, email, public link. Customers leave feedback in under a minute, with no app to install.",
      },
      {
        icon: Bell,
        title: "Real-time alerts",
        description:
          "Mobile and web notifications as soon as critical feedback arrives. The person in charge is alerted, not the whole board in CC.",
      },
      {
        icon: BarChart3,
        title: "NPS and satisfaction dashboard",
        description:
          "NPS and satisfaction scores by department, team and period. Every manager only sees what concerns them.",
      },
      {
        icon: Brain,
        title: "AI analysis and assistant",
        description:
          "Every piece of feedback is classified automatically: sentiment, topic, urgency. The assistant answers your questions: \"Which department dropped the most in May?\"",
      },
      {
        icon: ShieldCheck,
        title: "Deadlines and escalation",
        description:
          "Set a resolution deadline per priority. Feedback not handled in time is automatically escalated to the next level.",
      },
      {
        icon: Trophy,
        title: "Badges and leaderboard",
        description:
          "Customers earn points for sharing feedback. Well-rated employees receive badges and appear on the leaderboard.",
      },
    ],
  },
};

export function Features6({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="fonctionnalites" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        <div className="mt-14 grid border-l border-t border-card-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {c.features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 border-b border-r border-card-border p-8 lg:p-10">
              <IconTile icon={f.icon} />
              <h3 className="font-display mt-2 text-lg font-semibold text-text">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-dim">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
