import { NotebookPen, MessageCircle, Mail, Phone, Minus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const contentByLocale = {
  fr: {
    eyebrow: "Le problème",
    title: (
      <>
        L&apos;expérience client est votre <span className="text-orange-deep">angle mort</span> le plus coûteux.
      </>
    ),
    intro:
      "Chaque jour, vos clients vous disent ce qui ne va pas. La plupart de ces retours n'arrivent jamais à la bonne personne.",
    items: [
      {
        title: "Des retours éparpillés",
        text: "Cahier papier, WhatsApp personnel, e-mails, appels : chaque avis arrive par un canal différent et finit oublié.",
      },
      {
        title: "Des mesures sans action",
        text: "Une enquête par trimestre donne un chiffre, mais rien ne relie ce chiffre à une action concrète sur le terrain.",
      },
      {
        title: "Une qualité impossible à piloter",
        text: "« Les clients sont contents. » Sans données structurées, la satisfaction reste une impression, pas un indicateur.",
      },
    ],
    channels: [
      { icon: NotebookPen, label: "Cahier de réclamations", status: "Perdu" },
      { icon: MessageCircle, label: "WhatsApp du gérant", status: "Oublié" },
      { icon: Mail, label: "Boîte e-mail", status: "Non lu" },
      { icon: Phone, label: "Appel à l'accueil", status: "Sans suite" },
    ],
    timeline: { start: "Avis reçu", startDay: "Jour 1", end: "Enquête trimestrielle", endDay: "Jour 90", gap: "89 jours sans action" },
    scoreTitle: "Satisfaction par service",
    services: ["Accueil", "Restaurant", "Chambres"],
    notMeasured: "Non mesuré",
  },
  en: {
    eyebrow: "The problem",
    title: (
      <>
        Customer experience is your costliest <span className="text-orange-deep">blind spot.</span>
      </>
    ),
    intro: "Every day, your customers tell you what is wrong. Most of that feedback never reaches the right person.",
    items: [
      {
        title: "Scattered feedback",
        text: "Paper notebooks, personal WhatsApp, emails, calls: every piece of feedback arrives through a different channel and gets forgotten.",
      },
      {
        title: "Measures without action",
        text: "A quarterly survey gives you a number, but nothing links that number to concrete action on the ground.",
      },
      {
        title: "Quality you cannot steer",
        text: "\"Customers are happy.\" Without structured data, satisfaction stays a feeling, not a metric.",
      },
    ],
    channels: [
      { icon: NotebookPen, label: "Complaint book", status: "Lost" },
      { icon: MessageCircle, label: "Manager's WhatsApp", status: "Forgotten" },
      { icon: Mail, label: "Email inbox", status: "Unread" },
      { icon: Phone, label: "Front desk call", status: "No follow-up" },
    ],
    timeline: { start: "Feedback received", startDay: "Day 1", end: "Quarterly survey", endDay: "Day 90", gap: "89 days without action" },
    scoreTitle: "Satisfaction by department",
    services: ["Front desk", "Restaurant", "Rooms"],
    notMeasured: "Not measured",
  },
};

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-56 flex-col justify-center border-b border-card-border bg-[#F7F7F8] px-6" aria-hidden>
      {children}
    </div>
  );
}

export function Problems({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = contentByLocale[locale];
  const t = c.timeline;
  return (
    <section id="probleme" className="px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {/* 01 — scattered channels */}
          <article className="overflow-hidden rounded-xl border border-card-border bg-bg">
            <Panel>
              <ul className="space-y-2">
                {c.channels.map((ch) => (
                  <li key={ch.label} className="flex items-center gap-3 rounded-md border border-card-border bg-bg px-3 py-2">
                    <ch.icon className="h-4 w-4 shrink-0 text-text-mute" strokeWidth={1.8} />
                    <span className="flex-1 truncate text-[13px] text-text">{ch.label}</span>
                    <span className="rounded bg-[#FDECEC] px-2 py-0.5 text-[11px] font-medium text-[#B42318]">{ch.status}</span>
                  </li>
                ))}
              </ul>
            </Panel>
            <ProblemText index={1} title={c.items[0].title} text={c.items[0].text} />
          </article>

          {/* 02 — measure without action */}
          <article className="overflow-hidden rounded-xl border border-card-border bg-bg">
            <Panel>
              <div className="flex items-start justify-between text-[12px]">
                <div>
                  <div className="font-semibold text-text">{t.start}</div>
                  <div className="text-text-mute">{t.startDay}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-text">{t.end}</div>
                  <div className="text-text-mute">{t.endDay}</div>
                </div>
              </div>
              <div className="relative mt-4 flex items-center">
                <span className="h-3 w-3 shrink-0 rounded-full bg-orange-deep" />
                <span className="h-0 flex-1 border-t-2 border-dashed border-[#C9CED6]" />
                <span className="h-3 w-3 shrink-0 rounded-full border-2 border-text-mute bg-bg" />
              </div>
              <div className="mt-4 self-center rounded-md border border-card-border bg-bg px-3 py-1.5 text-[12px] font-medium text-text">
                {t.gap}
              </div>
            </Panel>
            <ProblemText index={2} title={c.items[1].title} text={c.items[1].text} />
          </article>

          {/* 03 — nothing to steer with */}
          <article className="overflow-hidden rounded-xl border border-card-border bg-bg">
            <Panel>
              <div className="rounded-md border border-card-border bg-bg p-4">
                <div className="text-[12px] font-semibold text-text">{c.scoreTitle}</div>
                <ul className="mt-3 space-y-2.5">
                  {c.services.map((s) => (
                    <li key={s} className="grid grid-cols-[84px_1fr_auto] items-center gap-3 text-[12px]">
                      <span className="truncate text-text-dim">{s}</span>
                      <span className="h-1.5 rounded-full bg-[#ECEDEF]" />
                      <span className="inline-flex items-center gap-1 text-text-mute">
                        <Minus className="h-3 w-3" strokeWidth={2} />
                        {c.notMeasured}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
            <ProblemText index={3} title={c.items[2].title} text={c.items[2].text} />
          </article>
        </div>
      </div>
    </section>
  );
}

function ProblemText({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <div className="p-6 lg:p-7">
      <span className="text-sm font-semibold tabular-nums text-orange-deep">0{index}</span>
      <h3 className="font-display mt-2 text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-text-dim">{text}</p>
    </div>
  );
}
