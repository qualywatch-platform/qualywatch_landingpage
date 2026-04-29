import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#probleme", label: "Le Problème" },
  { href: "#solution", label: "Solution" },
  { href: "#comment", label: "Comment ça marche" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#histoire", label: "Notre histoire" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-text-dim lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-orange"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#comment"
            className="hidden rounded-full px-4 py-2 text-[13px] font-medium text-text-dim transition hover:text-text md:inline-flex"
          >
            Voir la démo
          </Link>
          <Link
            href="https://app.qualywatch.com/register"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-2.5 text-[13px] font-semibold text-white btn-lift hover:shadow-orange"
          >
            Essayer gratuitement
          </Link>
        </div>
      </div>
    </header>
  );
}
