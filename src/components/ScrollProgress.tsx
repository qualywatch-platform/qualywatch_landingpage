"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min(Math.max(window.scrollY / max, 0), 1);
      setProgress(pct);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      style={{ background: "rgba(15,14,12,0.04)" }}
    >
      <div
        className="h-full origin-left"
        style={{
          background:
            "linear-gradient(to right, #FFB36B 0%, #FA700D 50%, #C8540F 100%)",
          transform: `scaleX(${progress})`,
          transition: "transform 0.05s linear",
          boxShadow: "0 0 12px rgba(250,112,13,0.6)",
        }}
      />
    </div>
  );
}
