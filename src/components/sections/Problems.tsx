import { VolumeX, TrendingDown, AlertTriangle, FileText, MessageCircle, Mail, Phone, Radar } from "lucide-react";
import { Counter } from "@/components/Counter";

const channelsByLocale = {
  fr: [
    { icon: FileText, label: "Cahier papier", lost: "perdu" },
    { icon: MessageCircle, label: "WhatsApp perso", lost: "oublié" },
    { icon: Mail, label: "Email manager", lost: "noyé" },
    { icon: Phone, label: "Appel direction", lost: "trop tard" },
  ],
  en: [
    { icon: FileText, label: "Paper notebook", lost: "lost" },
    { icon: MessageCircle, label: "Personal WhatsApp", lost: "forgotten" },
    { icon: Mail, label: "Manager email", lost: "buried" },
    { icon: Phone, label: "Call to HQ", lost: "too late" },
  ],
};

const missingByLocale = {
  fr: [
    "Score satisfaction",
    "NPS structuré",
    "Taux réponse",
    "Temps résolution",
  ],
  en: [
    "Satisfaction score",
    "Structured NPS",
    "Response rate",
    "Resolution time",
  ],
};

export function Problems({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const isEnglish = locale === "en";
  const channels = channelsByLocale[locale];
  const missing = missingByLocale[locale];
  return (
    <section id="probleme" className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-children grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal-item reveal-delay-1">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              {isEnglish ? "№ 01 · The Problem" : "№ 01 · Le Problème"}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              {isEnglish ? (
                <>Customer experience is your costliest <span className="italic text-orange">blind spot.</span></>
              ) : (
                <>L&apos;expérience client est votre <span className="italic text-orange">angle mort</span> le plus coûteux.</>
              )}
            </h2>
          </div>
          <p className="reveal-item reveal-delay-2 text-base leading-relaxed text-text-dim lg:text-lg">
            {isEnglish ? (
              <>
                Every day, your customers send you signals. Most of them disappear before they reach the right person.
                Here are the <strong className="text-text">three leaks</strong> silently destroying your satisfaction.
              </>
            ) : (
              <>
                Chaque jour, vos clients vous envoient des signaux. La plupart disparaissent avant d&apos;arriver à la bonne personne.
                Voici les <strong className="text-text">trois fuites</strong> qui détruisent silencieusement votre satisfaction.
              </>
            )}
          </p>
        </div>

        {/* Bento grid — 1 tall + 2 short stacked */}
        <div className="reveal-children mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12 lg:grid-rows-2">
          {/* Card 01 — TALL on left, dark inverted */}
          <div className="reveal-item reveal-delay-2 group relative overflow-hidden rounded-3xl bg-[#0F0E0C] p-8 text-white transition lg:col-span-5 lg:row-span-2 lg:p-10">
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -right-4 -top-6 text-[200px] font-extrabold leading-none text-white/[0.04] sm:-right-8 sm:-top-12 sm:text-[280px]"
            >
              01
            </span>
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-60 transition group-hover:opacity-90"
              style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.45), transparent)" }}
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange">
                <VolumeX className="h-3.5 w-3.5" />
                {isEnglish ? "Leak #1" : "Fuite #1"}
              </span>
              <h3 className="font-display mt-6 text-3xl font-bold leading-tight lg:text-4xl">
                {isEnglish ? (
                  <>Feedback that gets lost <span className="italic text-orange">in the noise.</span></>
                ) : (
                  <>Des retours qui se perdent <span className="italic text-orange">dans le bruit.</span></>
                )}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/75">
                {isEnglish
                  ? "Paper forms, WhatsApp, emails… Customer feedback ends up everywhere except where it would be useful."
                  : "Fiches papier, WhatsApp, e-mails… Les feedbacks clients arrivent partout sauf là où ils seraient utiles."}
              </p>

              <div className="mt-8">
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {isEnglish ? "Fragmented channels" : "Canaux fragmentés"}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {channels.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-2.5 rounded-xl border p-2.5 transition hover:border-orange/50"
                      style={{
                        borderColor: "rgba(255,255,255,0.18)",
                        background: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <c.icon className="h-4 w-4 shrink-0" strokeWidth="2" style={{ color: "#FA700D" }} />
                      <div className="min-w-0">
                        <div className="truncate text-[11px] font-semibold" style={{ color: "#FFFFFF" }}>
                          {c.label}
                        </div>
                        <div
                          className="text-[9px] uppercase tracking-wider line-through"
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            textDecorationColor: "rgba(250,112,13,0.7)",
                          }}
                        >
                          {c.lost}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-baseline gap-3 border-t border-white/10 pt-5">
                <Counter value={70} suffix="%" className="font-display text-5xl font-extrabold text-orange lg:text-6xl" />
                <span className="max-w-[180px] text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {isEnglish ? (
                    <>of field feedback <span className="font-bold" style={{ color: "#FFFFFF" }}>never</span> makes it past the first contact.</>
                  ) : (
                    <>des remontées terrain ne dépassent <span className="font-bold" style={{ color: "#FFFFFF" }}>jamais</span> le premier interlocuteur.</>
                  )}
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <span className="font-display text-2xl leading-none" style={{ color: "#FA700D" }}>{isEnglish ? "\"" : "«"}</span>
                  <p className="text-[12.5px] italic leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {isEnglish
                      ? "Unhappy customers don't complain. They leave. And they tell 12 people."
                      : "Le client mécontent ne se plaint pas. Il part. Et il en parle à 12 personnes."}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2 pl-7">
                  <span className="h-1 w-1 rounded-full bg-orange" />
                  <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {isEnglish ? "Qualywatch study · 2.4M feedbacks" : "Étude QualyWatch · 2.4M feedbacks"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div
            className="reveal-item reveal-delay-3 group relative overflow-hidden rounded-3xl p-8 transition lg:col-span-7 lg:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(250,112,13,0.22) 0%, rgba(250,112,13,0.10) 60%, rgba(250,112,13,0.06) 100%)",
              border: "1px solid rgba(250,112,13,0.35)",
            }}
          >
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -right-4 -top-6 text-[180px] font-extrabold leading-none sm:-right-8 sm:-top-10 sm:text-[220px]"
              style={{ color: "rgba(250,112,13,0.10)" }}
            >
              02
            </span>

            <div className="relative flex items-start gap-6">
              <div className="hidden shrink-0 sm:block">
                <div className="bars-grow flex h-24 items-end gap-1.5">
                  {[60, 50, 40, 30, 22, 16, 10].map((h, i) => (
                    <div
                      key={i}
                      className="w-3 rounded-t transition group-hover:opacity-90"
                      style={{
                        height: `${h}px`,
                        background:
                          i === 0
                            ? "#FA700D"
                            : `rgba(250,112,13,${0.85 - i * 0.1})`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-orange">
                  <TrendingDown className="h-3 w-3" /> Q1 → Q4
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange">
                  <TrendingDown className="h-3.5 w-3.5" />
                  {isEnglish ? "Leak #2" : "Fuite #2"}
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold leading-tight text-text lg:text-3xl">
                  {isEnglish ? (
                    <>Data <span className="italic text-orange">without action.</span></>
                  ) : (
                    <>Des données <span className="italic text-orange">sans action.</span></>
                  )}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-dim">
                  {isEnglish
                    ? "Quarterly NPS — but what do you do between two readings? With no link from indicator to action, the number stays decorative."
                    : "NPS trimestriel, mais que faites-vous entre deux mesures ? Sans lien entre l'indicateur et l'action, le chiffre reste décoratif."}
                </p>
              </div>
            </div>

            <div className="relative mt-7 grid gap-3 border-t border-card-border pt-6 sm:grid-cols-3">
              <div className="rounded-xl border border-card-border bg-card p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
                  {isEnglish ? "Measure" : "Mesure"}
                </div>
                <div className="font-display mt-1 text-base font-bold text-text">
                  {isEnglish ? "Quarterly" : "Trimestrielle"}
                </div>
              </div>
              <div className="rounded-xl border border-card-border bg-card p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
                  {isEnglish ? "Action" : "Action"}
                </div>
                <div className="font-display mt-1 text-base font-bold text-orange">
                  {isEnglish ? "∅ None" : "∅ Aucune"}
                </div>
              </div>
              <div className="rounded-xl border border-orange/30 bg-orange/10 p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-orange">
                  {isEnglish ? "Outcome" : "Conséquence"}
                </div>
                <div className="font-display mt-1 text-base font-bold text-text">
                  {isEnglish ? "Decorative" : "Décoratif"}
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="reveal-item reveal-delay-4 group relative overflow-hidden rounded-3xl border border-card-border bg-card p-8 transition hover:border-orange/40 lg:col-span-7 lg:p-10">
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -right-4 -top-6 text-[180px] font-extrabold leading-none sm:-right-8 sm:-top-10 sm:text-[220px]"
              style={{ color: "rgba(15,14,12,0.04)" }}
            >
              03
            </span>
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-50 transition group-hover:opacity-80"
              style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.25), transparent)" }}
            />

            <div className="relative flex items-start gap-6">
              <div className="hidden shrink-0 flex-col gap-2 sm:flex">
                {[
                  { label: isEnglish ? "Intuition" : "Intuition", val: 92, accent: false },
                  { label: isEnglish ? "Data" : "Donnée", val: 18, accent: true },
                ].map((b) => (
                  <div key={b.label} className="w-28 rounded-xl border border-card-border bg-card-border/30 p-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-text-mute">{b.label}</span>
                      <span className="font-display text-sm font-extrabold text-text">{b.val}%</span>
                    </div>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-card-border">
                      <div
                        className={`h-full rounded-full ${b.accent ? "bg-orange" : "bg-text/60"}`}
                        style={{ width: `${b.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-card-border px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-text">
                  <Radar className="h-3.5 w-3.5 text-orange" />
                  {isEnglish ? "Leak #3" : "Fuite #3"}
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold leading-tight text-text lg:text-3xl">
                  {isEnglish ? (
                    <>A perception <span className="italic text-orange">impossible</span> to objectify.</>
                  ) : (
                    <>Un ressenti <span className="italic text-orange">impossible</span> à objectiver.</>
                  )}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-dim">
                  {isEnglish
                    ? "\"Customers are happy\" — really? Without a structured system, perceived quality stays a hunch, not a steering metric."
                    : "« Les clients sont contents » — vraiment ? Sans système structuré, la qualité perçue reste une intuition, pas une donnée de pilotage."}
                </p>
              </div>
            </div>

            <div className="relative mt-7 grid gap-3 border-t border-card-border pt-6 sm:grid-cols-4">
              {missing.map((k) => (
                <div
                  key={k}
                  className="flex items-center gap-2 rounded-xl border border-card-border bg-card-border/30 p-2.5"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
                    <AlertTriangle className="h-3 w-3 text-orange" strokeWidth="2.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-text-dim line-through">
                    {k}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
