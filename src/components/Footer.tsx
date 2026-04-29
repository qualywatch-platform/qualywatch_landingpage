import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-card-border px-6 py-10 lg:flex-row lg:px-16">
      <Logo />
      <p className="text-xs text-text-dim">
        © {new Date().getFullYear()} Qualywatch — Conçu à Dakar avec <span className="text-orange">●</span>
      </p>
    </footer>
  );
}
