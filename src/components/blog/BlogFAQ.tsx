import { Plus } from "lucide-react";

export function BlogFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-bold text-text sm:text-3xl">
        Questions fréquentes
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-card-border bg-card p-5 transition hover:border-orange/30 open:border-orange/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="font-mono mt-0.5 text-[12px] font-bold text-orange">
                  0{i + 1}
                </span>
                <span className="font-display text-base font-bold text-text lg:text-lg">
                  {f.q}
                </span>
              </div>
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange transition group-open:rotate-45">
                <Plus className="h-4 w-4" strokeWidth="2.5" />
              </span>
            </summary>
            <p className="mt-3 pl-8 text-[14px] leading-relaxed text-text-dim lg:text-[15px]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
