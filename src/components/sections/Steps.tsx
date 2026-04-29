import { CursorSpotlight } from "@/components/CursorSpotlight";

const steps = [
  { n: "1", title: "Connectez vos canaux", desc: "Intégrez vos points de contact en quelques clics : site web, app, SMS, WhatsApp, QR code en magasin." },
  { n: "2", title: "Collectez en continu", desc: "Les feedbacks remontent automatiquement. Pas de saisie manuelle, pas de données perdues." },
  { n: "3", title: "Visualisez en temps réel", desc: "Dashboard intuitif avec scores, tendances et alertes. Chaque manager voit ce qui le concerne." },
  { n: "4", title: "Agissez et mesurez", desc: "Déclenchez des actions correctives, assignez des responsables, mesurez l'impact." },
];

export function Steps() {
  return (
    <section
      id="comment"
      className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32"
      style={{ background: "#0F0E0C" }}
    >
      <CursorSpotlight color="rgba(250,112,13,0.32)" size={460} />
      {/* Soft orange glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(250,112,13,0.25), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 04 · Comment ça marche</p>
            <h2
              className="font-display mt-4 text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl"
              style={{ color: "#FFFFFF" }}
            >
              De l&apos;avis client à l&apos;action en <span className="italic text-orange">4 étapes.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed lg:text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Un flux simple, pensé pour les équipes terrain autant que pour la direction.
            Pas de formation longue, pas d&apos;intégration complexe.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 lg:grid-cols-4">
          {/* Connecting line */}
          <div
            className="absolute left-[12%] right-[12%] top-10 hidden h-[2px] lg:block"
            style={{
              background:
                "linear-gradient(90deg, #FA700D, rgba(250,112,13,0.25), #FA700D, rgba(250,112,13,0.25))",
            }}
            aria-hidden
          />

          {steps.map((s) => (
            <div key={s.n} className="group relative z-10 text-center">
              <div
                className="font-display mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl font-extrabold transition group-hover:bg-orange group-hover:text-white group-hover:shadow-orange"
                style={{
                  border: "2px solid #FA700D",
                  background: "#0F0E0C",
                  color: "#FA700D",
                }}
              >
                {s.n}
              </div>
              <h4 className="font-display mt-6 text-base font-bold" style={{ color: "#FFFFFF" }}>
                {s.title}
              </h4>
              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
