import Image from "next/image";
import { Star, MessageCircle, Activity, UserCircle, CheckCheck, Palette, Reply, BookOpen, QrCode } from "lucide-react";

const advantages = [
  {
    icon: Star,
    badge: "Google Reviews",
    title: "Boostez votre note Google.",
    desc: "CTA intelligent : les clients satisfaits sont redirigés vers Google pour laisser un avis 5 étoiles. Les insatisfaits sont traités en privé. Votre e-reputation grimpe — sans effort.",
    metric: "+460%",
    metricLabel: "d'avis Google collectés",
  },
  {
    icon: Activity,
    badge: "Predictive Churn",
    title: "Détectez les départs avant qu'ils arrivent.",
    desc: "Notre IA calcule un score de risque pour chaque client : baisse de note, silence prolongé, feedbacks négatifs récurrents. Vous agissez AVANT le départ — pas après la perte.",
    metric: "−47%",
    metricLabel: "taux d'attrition observé",
  },
  {
    icon: MessageCircle,
    badge: "WhatsApp & Email",
    title: "Confirmez la résolution avec le client.",
    desc: "Une fois le feedback négatif traité, le client reçoit un email + WhatsApp pour confirmer que le problème est bien résolu. Templates Meta approuvés. Vous gardez sa confiance.",
    metric: "94%",
    metricLabel: "résolution validée",
  },
  {
    icon: Palette,
    badge: "White-label & QR",
    title: "Vos couleurs, votre marque, partout.",
    desc: "QR codes, formulaires, emails et portail client aux couleurs de votre enseigne. Logo, mascotte, palette personnalisée — vos clients ne quittent jamais votre univers visuel.",
    metric: "100%",
    metricLabel: "branding cohérent",
  },
  {
    icon: UserCircle,
    badge: "Portail client privé",
    title: "Le client a son propre espace.",
    desc: "Chaque client peut suivre la résolution de son feedback dans son portail. Statut, échanges, historique, validation finale. La transparence comme arme de fidélisation.",
    metric: "100%",
    metricLabel: "transparence client",
  },
  {
    icon: Reply,
    badge: "Canned Responses",
    title: "Répondez en 3 secondes, à 3h du matin.",
    desc: "Bibliothèque de modèles validés par votre direction. Le manager choisit, personnalise, envoie. Plus jamais de réponse maladroite ou tardive — la qualité de réponse industrialisée.",
    metric: "< 5 min",
    metricLabel: "temps de réponse moyen",
  },
  {
    icon: CheckCheck,
    badge: "Le dernier mot client",
    title: "C'est le client qui valide.",
    desc: "Vous traitez le feedback ? Le client confirme la résolution depuis son portail, par email ou WhatsApp. Pas vous. Lui. Le dernier mot revient toujours à celui qui paie — c'est ça, la satisfaction.",
    metric: "Validé client",
    metricLabel: "à chaque résolution",
  },
  {
    icon: BookOpen,
    badge: "Help Center privé",
    title: "Vos clients trouvent les réponses seuls.",
    desc: "FAQ personnalisée par enseigne, articles de support, base de connaissances privée. 60% des questions clients trouvent leur réponse sans solliciter votre équipe — autonomie + confort.",
    metric: "−60%",
    metricLabel: "tickets entrants",
  },
];

export function Advantages() {
  return (
    <section id="armes" className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              № 06 · Vos armes
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Huit armes pour <span className="italic text-orange">retenir vos clients.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            Pas de promesses creuses. Huit capacités concrètes qui, mises bout à bout, transforment chaque feedback
            en opportunité de fidélisation — et chaque client mécontent en client retenu.
          </p>
        </div>

        <div className="mb-5 grid gap-4 lg:grid-cols-2">
          {advantages.map((a, i) => {
            // Checkerboard zigzag : (floor(i/2) + (i%2)) % 2 → 0=light, 1=dark
            const isDark = (Math.floor(i / 2) + (i % 2)) % 2 === 1;

            return (
              <div
                key={a.badge}
                className={`group relative flex gap-5 overflow-hidden rounded-3xl p-6 transition lg:p-7 ${
                  isDark ? "" : "card-base hover:border-orange/40"
                }`}
                style={
                  isDark
                    ? {
                        background: "#0F0E0C",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                    : undefined
                }
              >
                {/* Icon column */}
                <div className="shrink-0">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                      isDark
                        ? "bg-orange/15 text-orange group-hover:bg-orange group-hover:text-white"
                        : "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white"
                    }`}
                  >
                    <a.icon className="h-6 w-6" strokeWidth="2" />
                  </div>
                </div>

                {/* Content column */}
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
                    {a.badge}
                  </span>
                  <h3
                    className="font-display mt-1.5 text-lg font-bold leading-tight lg:text-xl"
                    style={isDark ? { color: "#FFFFFF" } : undefined}
                  >
                    {!isDark && <span className="text-text">{a.title}</span>}
                    {isDark && a.title}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-relaxed"
                    style={isDark ? { color: "rgba(255,255,255,0.72)" } : undefined}
                  >
                    {!isDark && <span className="text-text-dim">{a.desc}</span>}
                    {isDark && a.desc}
                  </p>

                  {/* Metric */}
                  <div
                    className="mt-4 inline-flex items-baseline gap-2 rounded-full px-3 py-1"
                    style={
                      isDark
                        ? { background: "rgba(250,112,13,0.18)" }
                        : { background: "rgba(250,112,13,0.08)" }
                    }
                  >
                    <span className="font-display text-base font-extrabold text-orange">{a.metric}</span>
                    <span
                      className="text-[11px] font-medium"
                      style={isDark ? { color: "rgba(255,255,255,0.7)" } : undefined}
                    >
                      {!isDark && <span className="text-text-dim">{a.metricLabel}</span>}
                      {isDark && a.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* HIGHLIGHT — White label + QR (DARK THEME) */}
        <div
          className="group relative overflow-hidden rounded-3xl p-7 lg:p-10"
          style={{
            background: "#0F0E0C",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Big number watermark */}
          <span
            aria-hidden
            className="font-display pointer-events-none absolute -right-4 -top-6 text-[200px] font-extrabold leading-none text-white/[0.04] sm:-right-8 sm:-top-10 sm:text-[260px]"
          >
            +1
          </span>
          {/* Decorative orange glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.5), transparent)" }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.4), transparent)" }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* LEFT — copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{
                  color: "#FA700D",
                  background: "rgba(250,112,13,0.18)",
                  border: "1px solid rgba(250,112,13,0.35)",
                }}
              >
                <Palette className="h-3.5 w-3.5" strokeWidth="2.5" />
                White-label + QR
              </div>
              <h3
                className="font-display mt-4 text-2xl font-bold leading-tight lg:text-3xl"
                style={{ color: "#FFFFFF" }}
              >
                Votre marque, <span className="italic" style={{ color: "#FA700D" }}>votre identité.</span>
              </h3>
              <p
                className="mt-3 text-[14px] leading-relaxed lg:text-[15px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Logo, couleurs, typographie — tout est customisable. Vos QR posters, vos emails, votre portail
                client, votre app prennent <strong style={{ color: "#FFFFFF" }}>l&apos;identité visuelle de votre entreprise</strong>.
                Une expérience cohérente avec votre marque, du premier scan jusqu&apos;à la confirmation de résolution.
              </p>

              {/* Customization options */}
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  { label: "Logo & favicon", icon: Palette },
                  { label: "Couleurs primaires", icon: Palette },
                  { label: "QR posters print-ready", icon: QrCode },
                  { label: "Domaine personnalisé", icon: Star },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2 text-[13px]"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <span
                      className="inline-flex h-5 w-5 items-center justify-center rounded-md"
                      style={{
                        color: "#FA700D",
                        background: "rgba(250,112,13,0.2)",
                      }}
                    >
                      <c.icon className="h-3 w-3" strokeWidth="2.5" />
                    </span>
                    {c.label}
                  </div>
                ))}
              </div>

              <div
                className="mt-6 inline-flex items-baseline gap-2 rounded-full px-3 py-1"
                style={{ background: "rgba(250,112,13,0.15)" }}
              >
                <span className="font-display text-base font-extrabold" style={{ color: "#FA700D" }}>49</span>
                <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                  custom fields disponibles (Business+)
                </span>
              </div>
            </div>

            {/* RIGHT — QR poster image (orange) inside dark card */}
            <div className="relative mx-auto w-full max-w-[260px]">
              <div className="absolute -inset-4 -z-10 rounded-[28px] bg-orange/30 blur-2xl" />
              <div
                className="relative overflow-hidden rounded-2xl shadow-card"
                style={{
                  background: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "10px",
                }}
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/qr-poster-orange.png"
                    alt="Affiche QR personnalisée"
                    width={620}
                    height={830}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              {/* Floating label */}
              <span
                className="absolute -top-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-orange-soft"
              >
                <QrCode className="h-3 w-3" strokeWidth="2.5" />
                Sample · Aisha SARL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
