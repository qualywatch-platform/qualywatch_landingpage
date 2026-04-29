import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "aishaseye074@gmail.com",
    href: "mailto:aishaseye074@gmail.com",
    note: "Réponse en moins de 24h ouvrées",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 70 407 26 68",
    href: "tel:+221704072668",
    note: "Lun – Ven · 9h – 18h GMT",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32"
      style={{ background: "#F9FAFC" }}
    >
      {/* Decorative orange glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.12), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.08), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              № 12 · Contact
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              Discutons. <span className="italic text-orange">On répond vite.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-text-dim lg:text-lg">
            Une question, une démo, un partenariat ? Écrivez-nous, appelez-nous, ou laissez un message.
            <strong className="text-text"> Réponse garantie sous 24h ouvrées.</strong>
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* LEFT — Direct contact channels */}
          <div className="flex flex-col gap-5">
            {channels.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-card-border bg-card p-6 transition btn-lift hover:border-orange/40 lg:p-7"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                  <c.icon className="h-6 w-6" strokeWidth="2" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">
                    {c.label}
                  </div>
                  <div className="font-display mt-1 truncate text-lg font-bold text-text lg:text-xl">
                    {c.value}
                  </div>
                  <div className="mt-1 text-xs text-text-dim">{c.note}</div>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-text-mute transition group-hover:translate-x-1 group-hover:text-orange"
                  strokeWidth="2.5"
                />
              </Link>
            ))}

            {/* Address + hours strip */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-card-border bg-card p-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <MapPin className="h-4 w-4" strokeWidth="2.5" />
                </span>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">Bureau</div>
                  <div className="font-display mt-1 text-sm font-bold text-text">Dakar, Sénégal</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-card-border bg-card p-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <Clock className="h-4 w-4" strokeWidth="2.5" />
                </span>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-mute">Horaires</div>
                  <div className="font-display mt-1 text-sm font-bold text-text">Lun – Ven · 9h – 18h</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Quick message form */}
          <form
            className="relative overflow-hidden rounded-3xl p-6 lg:p-8"
            style={{
              background: "#0F0E0C",
              border: "1px solid rgba(250,112,13,0.25)",
            }}
          >
            {/* Top-right glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.5), transparent 70%)" }}
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange">
                <Send className="h-3.5 w-3.5" strokeWidth="2.5" />
                Message rapide
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold text-white lg:text-3xl">
                Envoyez-nous un mot.
              </h3>

              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-2xl px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition focus:border-orange"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email pro"
                  className="w-full rounded-2xl px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition focus:border-orange"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
                <input
                  type="text"
                  placeholder="Entreprise"
                  className="w-full rounded-2xl px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition focus:border-orange"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
                <textarea
                  placeholder="Votre message…"
                  rows={4}
                  className="w-full resize-none rounded-2xl px-4 py-3 text-sm font-medium text-white placeholder-white/40 outline-none transition focus:border-orange"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white transition btn-lift hover:bg-orange-deep"
              >
                Envoyer le message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth="2.5" />
              </button>

              <p className="mt-3 text-center text-[11px] text-white/50">
                Vos données restent confidentielles · RGPD
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
