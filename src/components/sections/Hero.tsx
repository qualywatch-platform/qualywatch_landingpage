import Link from "next/link";
import { ArrowRight, BarChart3, Clock, MessageSquare } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 lg:px-16 lg:pt-40">
      {/* Glow background */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(250,112,13,0.18) 0%, transparent 70%)" }}
      />
      <div className="dotted-grid-dark pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm font-medium text-orange">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange animate-pulse-glow" />
            </span>
            Lancement 2026 — Inscriptions ouvertes
          </span>

          <h1 className="font-display animate-fade-up delay-1 mt-8 text-[40px] font-extrabold leading-[1.05] text-text sm:text-5xl lg:text-[72px]">
            Ne laissez plus vos clients
            <br />
            <span className="relative inline-block text-orange">
              partir en silence.
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded bg-orange opacity-50" />
            </span>
          </h1>

          <p className="animate-fade-up delay-2 mt-7 max-w-xl text-lg leading-[1.8] text-text-dim">
            <strong className="font-semibold text-text">96% des clients mécontents</strong> ne se plaignent pas — ils partent simplement.{" "}
            <span className="text-text">Qualywatch</span> vous donne le pouvoir de les écouter et de les retenir{" "}
            <span className="text-text">instantanément</span>.
          </p>

          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-3">
            <Link
              href="https://app.qualywatch.com/register"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white btn-lift hover:shadow-orange"
            >
              Essayer gratuitement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#solution"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-7 py-3.5 text-base font-medium text-text transition hover:border-orange hover:text-orange"
            >
              Voir la démo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right: mockup */}
        <div className="relative w-full lg:w-[500px]">
          <div className="relative aspect-[4/3] w-full">
            {/* Mockup browser frame */}
            <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-card-border bg-bg2 shadow-deep">
              {/* Header */}
              <div className="flex h-12 items-center gap-1.5 border-b border-card-border bg-bg3 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 inline-flex items-center gap-1 rounded-md bg-bg4 px-2.5 py-1 text-[10px] font-mono text-text-dim">
                  app.qualywatch.com
                </span>
              </div>

              {/* Body grid */}
              <div className="grid grid-cols-2 gap-3 p-5">
                <div className="card-base rounded-xl p-4">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-text-dim">
                    Score satisfaction
                  </div>
                  <div className="font-display mt-1 text-3xl font-bold text-orange">87%</div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-orange" style={{ width: "87%" }} />
                  </div>
                </div>

                <div className="card-base rounded-xl p-4">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-text-dim">
                    Feedbacks ce mois
                  </div>
                  <div className="font-display mt-1 text-3xl font-bold text-white">2 451</div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-orange" style={{ width: "72%" }} />
                  </div>
                </div>

                {/* Chart */}
                <div className="card-base col-span-2 rounded-xl p-4">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-text-dim">
                    Tendance qualité — 12 dernières semaines
                  </div>
                  <div className="mt-3 flex h-[90px] items-end gap-1.5 px-2">
                    {[40, 55, 48, 62, 58, 70, 65, 75, 72, 80, 78, 85].map((h, i) => {
                      let bg = "bg-orange/20";
                      if (i % 2 === 1) bg = "bg-orange/50";
                      if (i % 3 === 2) bg = "bg-orange";
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-md ${bg} animate-grow-bar`}
                          style={{
                            ["--bar-h" as string]: `${h}%`,
                            animationDelay: `${0.3 + i * 0.06}s`,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="animate-float-1 absolute -right-5 top-[12%] z-20 flex items-center gap-2.5 rounded-2xl bg-bg2 border border-card-border p-3 px-4 shadow-card">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-glow text-orange">
                <BarChart3 className="h-4 w-4" strokeWidth="2.5" />
              </div>
              <div>
                <div className="font-display text-xl font-extrabold leading-none text-text">+34%</div>
                <div className="mt-0.5 max-w-[100px] text-[11px] leading-tight text-text-dim">
                  amélioration qualité
                </div>
              </div>
            </div>

            <div className="animate-float-2 absolute -left-6 bottom-[26%] z-20 flex items-center gap-2.5 rounded-2xl bg-bg2 border border-card-border p-3 px-4 shadow-card">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-success-soft text-success">
                <Clock className="h-4 w-4" strokeWidth="2.5" />
              </div>
              <div>
                <div className="font-display text-xl font-extrabold leading-none text-text">3 min</div>
                <div className="mt-0.5 max-w-[110px] text-[11px] leading-tight text-text-dim">
                  temps de réponse moyen
                </div>
              </div>
            </div>

            <div className="animate-float-3 absolute right-8 -bottom-4 z-20 flex items-center gap-2.5 rounded-2xl bg-bg2 border border-card-border p-3 px-4 shadow-card">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-soft text-blue">
                <MessageSquare className="h-4 w-4" strokeWidth="2.5" />
              </div>
              <div>
                <div className="font-display text-xl font-extrabold leading-none text-text">98%</div>
                <div className="mt-0.5 max-w-[100px] text-[11px] leading-tight text-text-dim">
                  taux de collecte
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
