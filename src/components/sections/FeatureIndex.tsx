import {
  QrCode,
  BellRing,
  Gauge,
  Sparkles,
  Star,
  BadgeCheck,
  Reply,
  UserX,
  Trophy,
  Palette,
  FileBarChart2,
  Activity,
  type LucideIcon,
} from "lucide-react";

type Item = { icon: LucideIcon; title: string; text: string };

const contentByLocale: Record<"fr" | "en", { title: string; intro: string; items: Item[] }> = {
  fr: {
    title: "Tout ce qu'il faut pour piloter la satisfaction client.",
    intro: "Les fonctionnalités disponibles selon votre formule, sur le web et sur mobile.",
    items: [
      { icon: QrCode, title: "Collecte multicanale", text: "QR code, lien public, WhatsApp Business et e-mail, dans un seul flux." },
      { icon: BellRing, title: "Alertes en temps réel", text: "Le responsable concerné est prévenu dès qu'un avis critique arrive." },
      { icon: Gauge, title: "NPS et satisfaction", text: "Scores par service, par équipe et par période, en temps réel." },
      { icon: Sparkles, title: "Analyse et assistant IA", text: "Sentiment, sujet et urgence détectés. Posez vos questions en français." },
      { icon: Star, title: "Avis Google", text: "Les clients satisfaits sont invités à publier leur avis sur Google." },
      { icon: BadgeCheck, title: "Validation par le client", text: "Le client confirme lui-même que son problème est réglé." },
      { icon: Reply, title: "Réponses types", text: "Des réponses validées par la direction, personnalisables en un clic." },
      { icon: UserX, title: "Avis internes anonymes", text: "Vos employés s'expriment, leur identité est masquée automatiquement." },
      { icon: Trophy, title: "Badges et KaliPoints", text: "Points pour les clients, badges et classement pour les employés." },
      { icon: Palette, title: "Marque blanche", text: "Affiches QR, formulaires et e-mails aux couleurs de votre enseigne." },
      { icon: FileBarChart2, title: "Rapports planifiés", text: "Une synthèse envoyée par e-mail chaque semaine ou chaque mois." },
      { icon: Activity, title: "Risque de départ", text: "Repérez les clients dont la satisfaction baisse avant de les perdre." },
    ],
  },
  en: {
    title: "Everything you need to manage customer satisfaction.",
    intro: "Features available depending on your plan, on web and mobile.",
    items: [
      { icon: QrCode, title: "Multi-channel collection", text: "QR code, public link, WhatsApp Business and email, in a single stream." },
      { icon: BellRing, title: "Real-time alerts", text: "The person in charge is notified as soon as critical feedback arrives." },
      { icon: Gauge, title: "NPS and satisfaction", text: "Scores by department, team and period, in real time." },
      { icon: Sparkles, title: "AI analysis and assistant", text: "Sentiment, topic and urgency detected. Ask questions in plain language." },
      { icon: Star, title: "Google reviews", text: "Happy customers are invited to post their review on Google." },
      { icon: BadgeCheck, title: "Customer validation", text: "Customers confirm themselves that their issue is solved." },
      { icon: Reply, title: "Canned responses", text: "Replies approved by management, personalized in one click." },
      { icon: UserX, title: "Anonymous internal feedback", text: "Employees speak up, their identity is hidden automatically." },
      { icon: Trophy, title: "Badges and KaliPoints", text: "Points for customers, badges and leaderboard for employees." },
      { icon: Palette, title: "White label", text: "QR posters, forms and emails in your brand colors." },
      { icon: FileBarChart2, title: "Scheduled reports", text: "A summary emailed every week or every month." },
      { icon: Activity, title: "Churn risk", text: "Spot customers whose satisfaction is dropping before you lose them." },
    ],
  },
};

export function FeatureIndex({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  return (
    <section id="armes" className="bg-mist px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{c.title}</h2>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">{c.intro}</p>
        </div>
        <ul className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {c.items.map((it) => (
            <li key={it.title} className="border-t border-[#D5DAE1] pt-6">
              <it.icon className="h-5 w-5 text-orange-deep" strokeWidth={1.8} aria-hidden />
              <h3 className="font-display mt-4 text-base font-semibold text-text">{it.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-text-dim">{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
