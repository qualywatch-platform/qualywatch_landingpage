"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Color of the spotlight (rgb / hex) */
  color?: string;
  /** Spotlight diameter in px */
  size?: number;
  /** Opacity 0–1 */
  opacity?: number;
};

/**
 * Wraps a section so a soft glow follows the cursor while inside.
 * Use inside dark sections for premium feel.
 */
export function CursorSpotlight({
  color = "rgba(250,112,13,0.35)",
  size = 380,
  opacity = 1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    function onMove(e: MouseEvent) {
      if (!el || !parent) return;
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.opacity = String(opacity);
      el.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 60%)`;
    }
    function onLeave() {
      if (el) el.style.opacity = "0";
    }

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [color, size, opacity]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[1] opacity-0 transition-opacity duration-300"
    />
  );
}
