import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone, Monitor, ArrowRight, Wifi, Battery, Signal, Globe, Zap, ShieldCheck, Star } from "lucide-react";

export function AppStores() {
  return (
    <section id="apps" className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32">
      {/* Decorative shapes */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[20%] hidden h-20 w-20 rounded-3xl border border-orange/20 bg-orange/[0.05] lg:block"
        style={{ transform: "rotate(-12deg)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[25%] hidden h-14 w-14 rounded-full border border-orange/30 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[8%] bottom-[20%] hidden h-3 w-3 rounded-full bg-orange shadow-[0_0_18px_rgba(250,112,13,0.7)] lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[12%] bottom-[15%] hidden h-12 w-12 rounded-2xl bg-orange/15 lg:block"
        style={{ transform: "rotate(20deg)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 11 · Plateforme</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Web, iOS, Android — <span className="italic text-orange">tout est là.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            Pilotez votre satisfaction client depuis votre bureau ou en mobilité. Une seule connexion, vos données partout.
            Téléchargez l&apos;app sur App Store ou Google Play.
          </p>
        </div>

        {/* Premium showcase — orange GRADIENT card */}
        <div
          className="relative overflow-hidden rounded-[40px] shadow-deep"
          style={{
            background:
              "linear-gradient(135deg, #FFB36B 0%, #FA700D 45%, #C8540F 100%)",
          }}
        >
          {/* Warm radial highlights for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 85% 15%, rgba(255,220,180,0.55), transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(120,50,5,0.35), transparent 55%)",
            }}
          />
          {/* Subtle dotted pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0F0E0C 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
            {/* LEFT — Copy + download buttons (BLACK dominant on orange) */}
            <div className="flex flex-col">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                style={{
                  background: "rgba(15,14,12,0.92)",
                  color: "#FFFFFF",
                }}
              >
                <Smartphone className="h-3.5 w-3.5" strokeWidth="2.5" />
                Application mobile
              </div>

              <h3
                className="font-display mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-[40px]"
                style={{ color: "#0F0E0C" }}
              >
                Vos feedbacks en poche, <span className="italic" style={{ color: "#FFFFFF" }}>partout, tout le temps.</span>
              </h3>

              {/* Platform pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { icon: Globe, label: "Web" },
                  { icon: Apple, label: "iOS 14+" },
                  { icon: Smartphone, label: "Android 9+" },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      color: "#0F0E0C",
                      border: "1px solid rgba(15,14,12,0.08)",
                    }}
                  >
                    <p.icon className="h-3.5 w-3.5" strokeWidth="2.5" />
                    {p.label}
                  </span>
                ))}
              </div>

              <p
                className="mt-5 text-[15px] leading-relaxed"
                style={{ color: "rgba(15,14,12,0.85)" }}
              >
                <strong>Notifications temps réel</strong>, dashboard mobile, validation des feedbacks
                en quelques secondes — même <strong>sans connexion</strong>. L&apos;app native iOS et
                Android, conçue pour les équipes terrain qui pilotent leur enseigne au quotidien.
              </p>

              <p
                className="mt-3 text-[14px] leading-relaxed"
                style={{ color: "rgba(15,14,12,0.72)" }}
              >
                Vos managers reçoivent une alerte dès qu&apos;un client laisse un feedback critique.
                Ils peuvent intervenir, assigner, répondre — directement depuis leur poche.
              </p>

              {/* Feature list */}
              <ul
                className="mt-5 grid gap-2 text-[13.5px] sm:grid-cols-2"
                style={{ color: "rgba(15,14,12,0.92)" }}
              >
                {[
                  { icon: Zap, label: "Push notifications" },
                  { icon: Wifi, label: "Mode hors-ligne" },
                  { icon: Smartphone, label: "Sync auto multi-appareils" },
                  { icon: ShieldCheck, label: "Authentification biométrique" },
                ].map((f) => (
                  <li key={f.label} className="flex items-center gap-2">
                    <span
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(15,14,12,0.92)" }}
                    >
                      <f.icon className="h-3 w-3 text-orange" strokeWidth="2.5" />
                    </span>
                    <span className="font-medium">{f.label}</span>
                  </li>
                ))}
              </ul>

              {/* Stats strip — fills space + adds proof */}
              <div
                className="mt-6 grid grid-cols-3 gap-3 rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {[
                  { v: "4.9", l: "Note moyenne", icon: Star },
                  { v: "<2s", l: "Temps réponse", icon: Zap },
                  { v: "99.9%", l: "Uptime", icon: ShieldCheck },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <s.icon className="h-3.5 w-3.5 text-[#0F0E0C]" strokeWidth="2.5" />
                      <span className="font-display text-lg font-extrabold" style={{ color: "#0F0E0C" }}>
                        {s.v}
                      </span>
                    </div>
                    <div
                      className="mt-0.5 text-[10px] font-mono font-bold uppercase tracking-widest"
                      style={{ color: "rgba(15,14,12,0.7)" }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Download buttons */}
              <div className="mt-5">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "rgba(15,14,12,0.78)" }}
                >
                  Disponible sur
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-[#0F0E0C] px-5 py-3 transition hover:bg-white"
                  >
                    <Apple className="h-7 w-7 text-white transition group-hover:text-orange" strokeWidth="1.5" />
                    <div className="text-left">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-white opacity-70 transition group-hover:text-orange group-hover:opacity-100">Télécharger sur</div>
                      <div className="font-display text-[15px] font-bold leading-tight text-white transition group-hover:text-orange">App Store</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-2xl bg-[#0F0E0C] px-5 py-3 transition hover:bg-white"
                  >
                    <svg viewBox="0 0 512 512" className="h-7 w-7 text-white transition group-hover:text-orange" fill="currentColor">
                      <path d="M99.617 8.057a50.191 50.191 0 0 0-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0 0 27.31-8.07l266.965-149.736-74.849-74.483z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-white opacity-70 transition group-hover:text-orange group-hover:opacity-100">Disponible sur</div>
                      <div className="font-display text-[15px] font-bold leading-tight text-white transition group-hover:text-orange">Google Play</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT — Phone mockup placeholder (user will replace image) */}
            <div className="relative flex items-center justify-center">
              {/* Phone frame */}
              <div className="relative">
                {/* Glow halo */}
                <div className="absolute -inset-8 -z-10 rounded-[80px] bg-orange/30 opacity-60 blur-3xl" />

                <div className="relative h-[480px] w-60 overflow-hidden rounded-[44px] border-[8px] border-[#0F0E0C] bg-[#0F0E0C] shadow-deep sm:h-[540px] sm:w-64">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0F0E0C]" />

                  {/* iOS-style status bar */}
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 text-[11px] font-bold text-white">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Signal className="h-3 w-3" />
                      <Wifi className="h-3 w-3" />
                      <Battery className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Screen — placeholder for user's image */}
                  <div className="relative h-full w-full">
                    <Image
                      src="/mobile-screenshot.png"
                      alt="QualyWatch mobile"
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Decorative chip near phone */}
                <div className="absolute -right-6 top-12 hidden rounded-2xl border border-card-border bg-card p-3 shadow-card sm:block">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange shadow-[0_0_8px_rgba(250,112,13,0.7)]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text">iOS · Android</span>
                  </div>
                </div>

                <div className="absolute -left-4 bottom-16 hidden rounded-2xl border border-card-border bg-card p-3 shadow-card sm:block">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-orange">Native</div>
                  <div className="font-display text-sm font-bold text-text">Flutter 3.x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
