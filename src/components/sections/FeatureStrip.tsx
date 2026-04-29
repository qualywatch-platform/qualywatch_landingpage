import { Zap, Brain, Target, Bell, Layers, FileBarChart2 } from "lucide-react";
import { CursorSpotlight } from "@/components/CursorSpotlight";

const tags = [
  { icon: Zap, label: "Feedbacks en temps réel" },
  { icon: Brain, label: "Analyse sémantique" },
  { icon: Target, label: "Indicateurs actionnables" },
  { icon: Bell, label: "Alertes intelligentes" },
  { icon: Layers, label: "Multi-canal" },
  { icon: FileBarChart2, label: "Rapports automatisés" },
];

export function FeatureStrip() {
  return (
    <section
      className="relative overflow-hidden border-y"
      style={{
        background: "#0F0E0C",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <CursorSpotlight color="rgba(250,112,13,0.4)" size={420} />
      {/* Soft orange glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-40 w-[400px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.35), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-1/4 h-40 w-[400px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(250,112,13,0.25), transparent 70%)" }}
      />

      {/* Marquee */}
      <div
        className="relative flex overflow-hidden py-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-5 pr-5">
          {[...tags, ...tags].map((t, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange/15">
                <t.icon className="h-3.5 w-3.5 text-orange" strokeWidth="2.5" />
              </span>
              <span className="font-display text-sm font-semibold text-white">
                {t.label}
              </span>
              <span className="ml-1 h-1 w-1 rounded-full bg-orange" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
