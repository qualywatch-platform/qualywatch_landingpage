import Link from "next/link";
import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center transition-transform group-hover:scale-105">
        <Image
          src="/qualywatch-logo.png"
          alt="QualyWatch"
          width={72}
          height={72}
          className="h-full w-full object-contain"
        />
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-text"}`}>
        Qualywatch
      </span>
    </Link>
  );
}
