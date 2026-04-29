"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("qw-theme") as Theme | null) ?? null;
    const systemPrefersLight =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial: Theme = stored ?? (systemPrefersLight ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("qw-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Activer le mode ${theme === "dark" ? "clair" : "sombre"}`}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card text-text transition hover:border-orange hover:text-orange"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all ${
          mounted && theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${
          mounted && theme === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />
    </button>
  );
}
