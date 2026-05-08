import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16 border-t border-card-border pt-12">
      <p className="font-mono text-[12px] font-bold uppercase tracking-[0.25em] text-orange">
        Articles connexes
      </p>
      <h2 className="font-display mt-3 text-2xl font-bold text-text sm:text-3xl">
        Pour aller plus loin
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl border border-card-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card"
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange">
              {p.categoryLabel}
            </p>
            <h3 className="font-display mt-2 text-lg font-bold leading-tight text-text group-hover:text-orange">
              {p.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-text-dim">
              {p.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange">
              Lire l&apos;article
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth="2.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
