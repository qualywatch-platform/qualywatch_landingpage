import type { LucideIcon } from "lucide-react";

/** Line icon in the brand color. */
export function IconTile({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "sm" | "md" }) {
  const glyph = size === "sm" ? "h-[18px] w-[18px]" : "h-5 w-5";
  return <Icon className={`shrink-0 text-orange-deep ${glyph}`} strokeWidth={1.8} aria-hidden />;
}
