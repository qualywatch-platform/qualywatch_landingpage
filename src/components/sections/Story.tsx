import Image from "next/image";

export function Story() {
  return (
    <section id="histoire" className="relative overflow-hidden px-6 py-20 lg:px-16 lg:py-28" style={{ background: "#F9FAFC" }}>
      {/* Subtle decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-orange/8"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Two-column: BIG photo left, text + label right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* BIG Photo card — left, takes lots of space */}
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[520px]">
            {/* Floating chip — Made with love in Dakar */}
            <span className="absolute -top-3 left-6 z-20 inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-orange-soft">
              ● Made with love in Dakar
            </span>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-card-border bg-card shadow-card">
              <Image
                src="/founder.jpg"
                alt="Aissatou Seye, fondatrice"
                fill
                sizes="(min-width: 1024px) 520px, 420px"
                className="object-cover object-top"
              />
              {/* Caption gradient — only at very bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-base font-bold text-white">Aissatou Seye</div>
                <div className="text-[11px] text-white/85">Fondatrice &amp; CEO · Qualywatch</div>
              </div>
            </div>

            {/* Decorative orange ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 -z-10 rounded-[34px] border border-orange/20"
            />
          </div>

          {/* RIGHT — label + minimaliste copy */}
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 11 · Notre histoire</p>
            <h2 className="font-display mt-3 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
              La vision derrière <span className="italic text-orange">Qualywatch.</span>
            </h2>

            <blockquote className="font-display mt-7 text-lg italic leading-snug text-text lg:text-xl">
              « J&apos;ai vu trop d&apos;entreprises perdre leurs meilleurs clients sans le savoir. Qualywatch existe pour que ça n&apos;arrive plus jamais. »
            </blockquote>

            <p className="mt-5 text-sm leading-relaxed text-text-dim lg:text-[15px]">
              Un client mécontent ne se plaint jamais — il s&apos;en va. Et puis il en parle à <span className="text-text">12 personnes</span>, lâche un <span className="text-text">bad review</span>, fait un <span className="text-text">live indigné</span>, ou poste un thread qui devient viral. Les entreprises perdent leur réputation en silence, sans avoir l&apos;occasion de réagir.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-dim lg:text-[15px]">
              Qualywatch n&apos;est pas un énième formulaire. C&apos;est l&apos;infrastructure qui transforme chaque feedback en décision — et chaque client mécontent en client retenu.
            </p>
            <p className="font-display mt-4 text-base font-bold italic text-orange lg:text-lg">
              La satisfaction n&apos;est pas un KPI. C&apos;est la promesse que vous tenez à vos clients.
            </p>

            {/* Compact stats — pro layout, label above value */}
            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-card-border pt-6">
              {[
                { label: "Fondation", value: "2024" },
                { label: "Conçu à", value: "Dakar" },
                { label: "Lancement", value: "2026" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                    {s.label}
                  </div>
                  <div className="font-display mt-1 text-xl font-extrabold text-text">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
