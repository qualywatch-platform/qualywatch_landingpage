/**
 * Composants typographiques pour le corps des articles de blog.
 * Garde un style cohérent avec la landing sans dépendre de tailwindcss/typography.
 */
import type { ReactNode } from "react";

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display mt-12 scroll-mt-24 text-2xl font-bold leading-tight text-text sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="font-display mt-8 scroll-mt-24 text-xl font-bold leading-tight text-text sm:text-2xl"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[16px] leading-[1.75] text-text-dim sm:text-[17px]">
      {children}
    </p>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-text">{children}</strong>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-text-dim sm:text-[17px]">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-[16px] leading-[1.7] text-text-dim sm:text-[17px]">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="text-text-dim">{children}</li>;
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote
      className="mt-6 rounded-r-xl border-l-4 px-6 py-4 italic text-text"
      style={{ borderColor: "#FA700D", background: "rgba(250,112,13,0.06)" }}
    >
      {children}
    </blockquote>
  );
}

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-card-border">
      <table className="w-full text-left text-[14px]">
        <thead>
          <tr style={{ background: "#FA700D" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="font-display px-4 py-3 text-[13px] font-bold uppercase tracking-wider text-white sm:text-sm"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={
                ri % 2 === 0
                  ? "bg-white"
                  : "bg-[#FFF4EB]/40"
              }
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`border-t border-card-border px-4 py-3 align-top ${
                    ci === 0
                      ? "font-bold text-text"
                      : "text-text-dim"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({
  variant = "info",
  title,
  children,
}: {
  variant?: "info" | "warning" | "success";
  title?: string;
  children: ReactNode;
}) {
  const colors = {
    info: { bg: "rgba(250,112,13,0.06)", border: "#FA700D" },
    warning: { bg: "rgba(220,38,38,0.06)", border: "#DC2626" },
    success: { bg: "rgba(16,185,129,0.06)", border: "#10B981" },
  }[variant];
  return (
    <div
      className="mt-6 rounded-2xl border-l-4 p-5"
      style={{ background: colors.bg, borderColor: colors.border }}
    >
      {title && (
        <p className="font-display mb-2 font-bold text-text">{title}</p>
      )}
      <div className="text-[15px] leading-relaxed text-text">{children}</div>
    </div>
  );
}
