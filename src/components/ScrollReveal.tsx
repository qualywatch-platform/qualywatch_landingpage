"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only animate section headings + bars (cards stay visible by default)
    const targets: HTMLElement[] = [];
    document
      .querySelectorAll<HTMLElement>("section h2, section [data-reveal], .bars-grow")
      .forEach((el) => {
        if (!el.closest("[data-no-reveal]")) targets.push(el);
      });

    // Apply reveal only to elements currently OFF-screen so above-the-fold
    // content doesn't flash invisible on load.
    const viewportH = window.innerHeight;
    const toObserve: HTMLElement[] = [];
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < viewportH && rect.bottom > 0;
      if (!inView) {
        el.classList.add("reveal");
        toObserve.push(el);
      }
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );

    toObserve.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
