import Image from "next/image";
import { EyeOff, MessageCircle, Heart, AlertCircle, UserX, ChevronDown, Star, Layers } from "lucide-react";

const features = [
  { icon: UserX, label: "Anonymisation auto", desc: "Quand l'auteur est un membre actif de l'entreprise, son identité est automatiquement masquée." },
  { icon: Layers, label: "Mêmes canaux", desc: "QR codes, lien public, email — vos équipes utilisent les mêmes points de contact que vos clients." },
  { icon: AlertCircle, label: "Signaux faibles", desc: "Tensions, frustrations, idées d'amélioration — repérées avant qu'elles deviennent des problèmes." },
  { icon: Heart, label: "Climat d'équipe", desc: "Mesurez la santé de vos équipes au même endroit que la satisfaction clients." },
];

export function TeamFeedbacks() {
  return (
    <section
      id="feedbacks-internes"
      className="relative isolate overflow-hidden px-6 py-24 lg:px-16 lg:py-32"
    >
      {/* Background image — engaged employee */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/faq-bg-44581.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
          style={{ transform: "scaleX(-1)" }}
        />
        {/* Image flipped → man now on the LEFT. Wash light on left, heavy on right. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(249,250,252,0.30) 0%, rgba(249,250,252,0.55) 35%, rgba(249,250,252,0.80) 65%, rgba(249,250,252,0.95) 100%)",
          }}
        />
        {/* Soft orange tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(250,112,13,0.08), transparent 55%), radial-gradient(ellipse at bottom right, rgba(250,112,13,0.06), transparent 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* LEFT — Copy */}
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              № 07 · Feedbacks internes
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Vos employés ont aussi leur{" "}
              <span className="italic text-orange">mot à dire.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-[17px]">
              Pas que les clients. Vos <strong className="text-text">employés</strong> et{" "}
              <strong className="text-text">membres d&apos;équipe</strong> peuvent eux aussi soumettre des feedbacks
              — sur leur manager, leur service, l&apos;ambiance, les outils. Quand l&apos;auteur est un membre actif de l&apos;entreprise,
              son identité est <strong className="text-text">automatiquement masquée</strong> et le feedback apparaît comme « Employé anonyme ».
            </p>

            {/* Features list */}
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="rounded-2xl border border-card-border bg-card p-4 transition hover:border-orange/40"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <f.icon className="h-4 w-4" strokeWidth="2.5" />
                  </span>
                  <div className="font-display mt-3 text-sm font-bold text-text">{f.label}</div>
                  <div className="mt-1 text-[12px] leading-snug text-text-dim">{f.desc}</div>
                </li>
              ))}
            </ul>

            {/* Highlight quote */}
            <div className="mt-7 rounded-2xl border-l-4 border-orange bg-card p-4">
              <p className="font-display text-[14px] italic leading-relaxed text-text">
                « Une entreprise qui n&apos;écoute pas ses équipes ne peut pas écouter ses clients. »
              </p>
            </div>
          </div>

          {/* RIGHT — Anonymous feedback form mockup */}
          <div className="relative">
            {/* Glow halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[44px] opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.18), transparent 70%)" }}
            />

            <div className="relative overflow-hidden rounded-[28px] border border-card-border bg-card shadow-deep">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-card-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-orange/15 text-orange">
                    <MessageCircle className="h-4 w-4" strokeWidth="2.5" />
                  </span>
                  <div>
                    <div className="font-display text-sm font-bold text-text">Nouveau feedback</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
                      Auteur détecté · interne
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange/10 px-2.5 py-1 text-[10px] font-bold text-orange">
                  <UserX className="h-3 w-3" strokeWidth="2.5" />
                  Employé anonyme
                </span>
              </div>

              {/* Form body */}
              <div className="space-y-5 px-6 py-6">
                {/* Service select */}
                <div>
                  <label className="font-mono block text-[10px] font-bold uppercase tracking-widest text-text-mute">
                    Service concerné
                  </label>
                  <div className="mt-2 flex items-center justify-between rounded-xl border border-card-border bg-card-border/30 px-3.5 py-2.5">
                    <span className="text-sm font-medium text-text">Service Client</span>
                    <ChevronDown className="h-4 w-4 text-text-mute" strokeWidth="2.5" />
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="font-mono block text-[10px] font-bold uppercase tracking-widest text-text-mute">
                    Climat ressenti
                  </label>
                  <div className="mt-2 flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-7 w-7 ${i <= 4 ? "fill-orange text-orange" : "fill-card-border text-card-border"}`}
                        strokeWidth="0"
                      />
                    ))}
                    <span className="ml-2 font-display text-sm font-bold text-text">4 / 5</span>
                  </div>
                </div>

                {/* Message preview */}
                <div>
                  <label className="font-mono block text-[10px] font-bold uppercase tracking-widest text-text-mute">
                    Votre message
                  </label>
                  <div className="mt-2 rounded-xl border border-card-border bg-card-border/30 p-3.5 text-[13px] leading-relaxed text-text">
                    <span className="text-text-dim">
                      L&apos;équipe est très soudée mais il manque
                    </span>{" "}
                    <span>du matériel pour les nouveaux arrivants…</span>
                    <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-orange align-middle" />
                  </div>
                </div>

                {/* Anonymisation auto info */}
                <div className="flex items-start gap-2.5 rounded-xl border border-orange/20 bg-orange/[0.06] p-3">
                  <UserX className="mt-0.5 h-4 w-4 shrink-0 text-orange" strokeWidth="2.5" />
                  <span className="text-[12.5px] leading-snug text-text-dim">
                    Email reconnu comme membre actif. Identité <strong className="text-text">automatiquement masquée</strong>.
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white shadow-orange-soft"
                >
                  Envoyer le feedback
                </button>
              </div>
            </div>

            {/* Floating chip */}
            <div className="absolute -left-4 bottom-10 hidden rounded-2xl border border-card-border bg-card p-3 shadow-card sm:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_8px_rgba(250,112,13,0.7)]" />
                <span className="font-display text-xs font-bold text-text">Identité auto-masquée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
