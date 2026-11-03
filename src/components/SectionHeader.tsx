import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** "split": title left, intro right on large screens. "stack": intro under the title. */
  layout?: "split" | "stack";
  className?: string;
};

/** Plain section heading shared by the landing sections. */
export function SectionHeader({ eyebrow, title, intro, layout = "split", className = "" }: SectionHeaderProps) {
  if (layout === "stack") {
    return (
      <div className={`max-w-3xl ${className}`}>
        <p className="flex items-center gap-2.5 text-sm font-semibold text-orange-deep"><span className="h-0.5 w-6 bg-orange" aria-hidden />{eyebrow}</p>
        <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{title}</h2>
        {intro && <p className="mt-5 text-base leading-relaxed text-text-dim lg:text-lg">{intro}</p>}
      </div>
    );
  }
  return (
    <div className={`grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16 ${className}`}>
      <div>
        <p className="flex items-center gap-2.5 text-sm font-semibold text-orange-deep"><span className="h-0.5 w-6 bg-orange" aria-hidden />{eyebrow}</p>
        <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">{title}</h2>
      </div>
      {intro && <p className="text-base leading-relaxed text-text-dim lg:text-lg">{intro}</p>}
    </div>
  );
}
