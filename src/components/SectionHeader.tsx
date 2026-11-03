import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** "split": title left, intro right on large screens. "stack": intro under the title. */
  layout?: "split" | "stack";
  className?: string;
};

/** Plain section heading shared by the landing sections. `eyebrow` is kept as the section's name for callers but not displayed. */
export function SectionHeader({ title, intro, layout = "split", className = "" }: SectionHeaderProps) {
  if (layout === "stack") {
    return (
      <div className={`max-w-3xl ${className}`}>
                <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{title}</h2>
        {intro && <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{intro}</p>}
      </div>
    );
  }
  return (
    <div className={`grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16 ${className}`}>
      <div>
                <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{title}</h2>
      </div>
      {intro && <p className="text-base leading-relaxed text-text-dim lg:text-lg">{intro}</p>}
    </div>
  );
}
