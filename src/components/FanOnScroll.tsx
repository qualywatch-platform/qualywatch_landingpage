"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Opens its children like a fan as the visitor scrolls down: sets `--fan`
 * from 0 (block entering the screen) to 1 (block in the upper part of the
 * screen). The CSS classes `tour-fan-left` / `tour-fan-right` read it.
 */
export function FanOnScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.setProperty("--fan", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const top = node.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - top) / (vh * 0.7)));
      node.style.setProperty("--fan", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
