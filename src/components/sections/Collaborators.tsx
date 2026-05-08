import Image from "next/image";
import { Mail, Shield, Sparkles, Crown, Users } from "lucide-react";

const featuresByLocale = {
  fr: [
    { icon: Mail, label: "Invitation par email", desc: "Envoyez un lien magique sécurisé" },
    { icon: Shield, label: "Permissions granulaires", desc: "6 rôles : CEO, directeur, manager, chef de service, employé, client" },
    { icon: Users, label: "Collaboration temps réel", desc: "Plusieurs personnes sur le même feedback" },
    { icon: Crown, label: "Clients illimités", desc: "Aucune limite sur le nombre de collaborateurs" },
  ],
  en: [
    { icon: Mail, label: "Email invitation", desc: "Send a secure magic link" },
    { icon: Shield, label: "Granular permissions", desc: "6 roles: CEO, director, manager, service head, employee, customer" },
    { icon: Users, label: "Real-time collaboration", desc: "Multiple people on the same feedback" },
    { icon: Crown, label: "Unlimited customers", desc: "No cap on the number of collaborators" },
  ],
};

export function Collaborators({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const isEnglish = locale === "en";
  const features = featuresByLocale[locale];
  return (
    <section
      id="portail"
      className="relative overflow-hidden px-6 py-24 lg:px-16 lg:py-32"
      style={{ background: "#FFFFFF" }}
    >
      {/* Decorative orange glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.10), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* LEFT — Real invitation screenshot in phone frame */}
          <div className="relative flex items-center justify-center">
            {/* Glow halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[80px] opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.30), transparent 70%)" }}
            />

            <div className="relative">
              {/* Phone frame */}
              <div className="relative h-[520px] w-64 overflow-hidden rounded-[44px] border-[8px] border-[#0F0E0C] bg-[#0F0E0C] shadow-deep sm:h-[580px] sm:w-72">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0F0E0C]" />

                {/* Screen — invitation screenshot */}
                <div className="relative h-full w-full">
                  <Image
                    src="/invitation-screenshot.png"
                    alt={isEnglish ? "Invitation to join a Qualywatch team" : "Invitation à rejoindre une équipe Qualywatch"}
                    fill
                    sizes="(min-width: 640px) 288px, 256px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating onboarding chip */}
              <div className="absolute -right-4 top-12 hidden rounded-2xl border border-card-border bg-card p-3 shadow-card sm:block">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange" strokeWidth="2.5" />
                  <span className="font-display text-xs font-bold text-text">
                    {isEnglish ? "2-min onboarding" : "Onboarding 2 min"}
                  </span>
                </div>
              </div>

              {/* Floating "magic link" chip */}
              <div className="absolute -left-4 bottom-16 hidden rounded-2xl border border-card-border bg-card p-3 shadow-card sm:block">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange" strokeWidth="2.5" />
                  <span className="font-display text-xs font-bold text-text">
                    {isEnglish ? "Magic link" : "Lien magique"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">
              {isEnglish ? "№ 06 · Customer portal" : "№ 06 · Portail client"}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-[1.05] text-text sm:text-4xl lg:text-5xl">
              {isEnglish ? (
                <>Your teams. Your collaborators. <span className="italic text-orange">All connected.</span></>
              ) : (
                <>Vos équipes. Vos collaborateurs. <span className="italic text-orange">Tous connectés.</span></>
              )}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-[17px]">
              {isEnglish ? (
                <>
                  With Qualywatch, invite both your <strong className="text-text">internal teams</strong> (managers, service heads, employees)
                  and your <strong className="text-text">external collaborators</strong> — partners, vendors, VIP customers.
                  Each one with their own role, permissions and workspace.
                </>
              ) : (
                <>
                  Avec Qualywatch, invitez aussi bien vos <strong className="text-text">équipes internes</strong> (managers, chefs de service, employés)
                  que vos <strong className="text-text">collaborateurs externes</strong> — partenaires, prestataires, clients VIP.
                  Chacun avec son rôle, ses permissions, son espace.
                </>
              )}
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

            {/* Highlight stat */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-card-border bg-card px-4 py-2.5">
              <Users className="h-4 w-4 text-orange" strokeWidth="2.5" />
              <span className="text-[13px] font-semibold text-text">
                {isEnglish ? (
                  <><strong className="text-orange">Unlimited collaborators</strong> on every plan</>
                ) : (
                  <><strong className="text-orange">Collaborateurs illimités</strong> sur tous les plans</>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
