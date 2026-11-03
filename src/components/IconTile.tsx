import type { LucideIcon } from "lucide-react";

/** Brand-colored square behind a line icon. */
export function IconTile({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9 rounded-md" : "h-11 w-11 rounded-lg";
  const glyph = size === "sm" ? "h-[18px] w-[18px]" : "h-5 w-5";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center bg-orange-soft text-orange-deep ${box}`} aria-hidden>
      <Icon className={glyph} strokeWidth={1.8} />
    </span>
  );
}
