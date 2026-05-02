import { Lock, Shield, Cloud, KeyRound, FileCheck, Server } from "lucide-react";

const items = [
  {
    icon: Lock,
    title: "Isolation multi-tenant",
    desc: "Chaque entreprise est cloisonnée. Aucun partage de données entre comptes.",
    highlight: "RBAC strict",
  },
  {
    icon: Shield,
    title: "RGPD conforme",
    desc: "Droit à l'oubli, anonymisation, export en 1 clic. DPA disponible.",
    highlight: "Loi Sénégal & UE",
  },
  {
    icon: Cloud,
    title: "Cloud sécurisé",
    desc: "Backups quotidiens automatiques, hébergement Europe RGPD.",
    highlight: "Backups daily",
  },
  {
    icon: KeyRound,
    title: "Authentification forte",
    desc: "Tokens chiffrés avec expiration, OTP par email, 2FA optionnel.",
    highlight: "Sanctum + OTP",
  },
];

export function Security() {
  return (
    <section className="relative px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 14 · Données &amp; Sécurité</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
            La confiance est au cœur <br className="hidden sm:block" />
            <span className="italic text-orange">de notre engagement.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">
            Vos données restent les vôtres. Conformité, isolation et chiffrement audités — pas un argument marketing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="card-base group relative overflow-hidden rounded-3xl p-6 hover:border-orange/40 lg:p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                <it.icon className="h-6 w-6" strokeWidth="2" />
              </div>
              <h3 className="font-display text-base font-bold text-text">{it.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-dim">{it.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-text-dim">
                <span className="h-1 w-1 rounded-full bg-orange" />
                {it.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-card-border pt-10 text-text-dim">
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            <FileCheck className="h-4 w-4 text-orange" strokeWidth="2.5" />
            RGPD ready
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            <Server className="h-4 w-4 text-orange" strokeWidth="2.5" />
            Hébergement Europe
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            <Lock className="h-4 w-4 text-orange" strokeWidth="2.5" />
            Tokens chiffrés
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            <Shield className="h-4 w-4 text-orange" strokeWidth="2.5" />
            DPA disponible
          </span>
        </div>
      </div>
    </section>
  );
}
