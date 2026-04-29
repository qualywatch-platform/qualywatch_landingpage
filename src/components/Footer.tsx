import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-card-border px-6 py-10 lg:flex-row lg:px-16">
      <Link href="/" className="inline-flex items-center gap-2.5">
        <Image
          src="/qualywatch-logo.png"
          alt="QualyWatch"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
        <span className="font-display text-base font-bold tracking-tight text-text">Qualywatch</span>
      </Link>
      <p className="text-xs text-text-dim">
        © {new Date().getFullYear()} Qualywatch — Conçu à Dakar avec <span className="text-orange">●</span>
      </p>
    </footer>
  );
}
