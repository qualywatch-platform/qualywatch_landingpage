import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CursorSpotlight } from "@/components/CursorSpotlight";

export function CTA() {
  return (
    <section
      id="rejoindre"
      className="relative overflow-hidden px-6 py-28 lg:px-16 lg:py-36"
      style={{ background: "#0A0A0A" }}
    >
      <CursorSpotlight color="rgba(250,112,13,0.45)" size={520} />
      {/* Strong centered radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(250,112,13,0.55) 0%, rgba(250,112,13,0.22) 28%, rgba(250,112,13,0.06) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,170,90,0.45), transparent 70%)",
        }}
      />

      {/* MORE decorative chips floating — varied sizes & rotations */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[15%] hidden h-32 w-32 rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-sm lg:block"
        style={{ transform: "rotate(-8deg)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[18%] top-[25%] hidden h-12 w-12 rounded-2xl bg-orange/20 backdrop-blur-sm lg:block"
        style={{ transform: "rotate(15deg)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[18%] hidden h-24 w-24 rounded-2xl bg-orange/15 backdrop-blur-sm lg:block"
        style={{ transform: "rotate(12deg)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[20%] top-[30%] hidden h-10 w-10 rounded-full border border-orange/40 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-[42%] hidden h-16 w-16 rounded-full border-2 border-white/15 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[12%] bottom-[18%] hidden h-20 w-20 rounded-full border border-orange/35 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[6%] bottom-[35%] hidden h-14 w-14 rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-sm lg:block"
        style={{ transform: "rotate(20deg)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[8%] bottom-[20%] hidden h-28 w-28 rounded-3xl border border-white/12 bg-white/[0.03] backdrop-blur-sm lg:block"
        style={{ transform: "rotate(15deg)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[25%] bottom-[12%] hidden h-8 w-8 rounded-2xl bg-orange/25 lg:block"
        style={{ transform: "rotate(-22deg)" }}
      />
      {/* Sparkle dots */}
      <span aria-hidden className="pointer-events-none absolute left-[35%] top-[12%] hidden h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] lg:block" />
      <span aria-hidden className="pointer-events-none absolute right-[35%] top-[55%] hidden h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_18px_rgba(250,112,13,0.8)] lg:block" />
      <span aria-hidden className="pointer-events-none absolute left-[28%] bottom-[8%] hidden h-1.5 w-1.5 rounded-full bg-white/80 lg:block" />
      <span aria-hidden className="pointer-events-none absolute right-[42%] bottom-[28%] hidden h-1.5 w-1.5 rounded-full bg-orange/90 lg:block" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-widest"
          style={{
            color: "#FA700D",
            borderColor: "rgba(250,112,13,0.4)",
            background: "rgba(250,112,13,0.15)",
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
          </span>
          Prêt en 10 minutes
        </span>

        <h2
          className="font-display mt-7 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-7xl"
          style={{ color: "#FFFFFF" }}
        >
          Prêt à <span className="italic" style={{ color: "#FA700D" }}>écouter</span> <br className="hidden sm:block" />
          vos clients ?
        </h2>

        <p
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Rejoignez les <strong style={{ color: "#FFFFFF" }}>500+ établissements</strong> qui font confiance à Qualywatch
          pour améliorer leur expérience client.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-bold shadow-orange btn-lift sm:w-auto sm:text-lg"
            style={{ color: "#FFFFFF" }}
          >
            Commencer l&apos;essai gratuit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth="2.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border px-8 py-4 text-base font-bold backdrop-blur transition hover:bg-white/15 sm:w-auto sm:text-lg"
            style={{
              color: "#FFFFFF",
              borderColor: "rgba(255,255,255,0.28)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            Demander une démo
          </Link>
        </div>

        <div
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4" strokeWidth="3" style={{ color: "#FA700D" }} /> Sans engagement
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4" strokeWidth="3" style={{ color: "#FA700D" }} /> Pas de carte requise
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4" strokeWidth="3" style={{ color: "#FA700D" }} /> Configuration immédiate
          </span>
        </div>
      </div>
    </section>
  );
}
