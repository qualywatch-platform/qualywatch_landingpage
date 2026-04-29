import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Bell, MessageSquare, TrendingUp, BarChart3, PlayCircle } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export function HeroV2() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background — original orange tiles + side gradients */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/orange-tiles-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Left side gradient overlay */}
        <div
          className="absolute inset-y-0 left-0 w-[40%]"
          style={{
            background:
              "linear-gradient(to right, rgba(250,112,13,0.35) 0%, transparent 100%)",
          }}
        />
        {/* Right side gradient overlay */}
        <div
          className="absolute inset-y-0 right-0 w-[40%]"
          style={{
            background:
              "linear-gradient(to left, rgba(250,112,13,0.30) 0%, transparent 100%)",
          }}
        />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />
      </div>

      {/* DECORATIVE floating shapes — softened to 30% to not dominate */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[5%] top-[18%] hidden h-24 w-24 rounded-3xl shadow-soft lg:block"
        style={{ transform: "rotate(-10deg)", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(4px)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[7%] top-[22%] hidden h-20 w-20 rounded-2xl shadow-soft lg:block"
        style={{ transform: "rotate(12deg)", background: "rgba(15,14,12,0.28)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[55%] hidden h-16 w-16 rounded-full lg:block"
        style={{ border: "2px solid rgba(15,14,12,0.18)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[58%] hidden h-12 w-12 rounded-full lg:block"
        style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(15,14,12,0.08)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[3%] top-[68%] hidden h-3 w-3 rounded-full lg:block"
        style={{ background: "rgba(15,14,12,0.35)", boxShadow: "0 0 14px rgba(15,14,12,0.18)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-[12%] hidden h-2 w-2 rounded-full lg:block"
        style={{ background: "rgba(255,255,255,0.4)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[22%] top-[8%] hidden h-2.5 w-2.5 rounded-full lg:block"
        style={{ background: "rgba(15,14,12,0.35)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[22%] top-[68%] hidden h-1.5 w-1.5 rounded-full lg:block"
        style={{ background: "rgba(255,255,255,0.4)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-[14%] top-[28%] hidden h-3 w-3 rounded-sm lg:block"
        style={{ transform: "rotate(45deg)", background: "rgba(15,14,12,0.22)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[14%] top-[38%] hidden h-4 w-4 rounded-sm lg:block"
        style={{ transform: "rotate(20deg)", background: "rgba(255,255,255,0.2)" }}
      />

      {/* STRONG GRADIENT light effects — warm halos (more pep) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-[5] h-[700px] w-[1100px] -translate-x-1/2 opacity-85 blur-3xl"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,250,235,0.95), rgba(255,225,180,0.4) 35%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 -z-[5] h-[560px] w-[560px] rounded-full opacity-90 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,250,235,0.85), rgba(255,235,210,0.35) 40%, transparent 75%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-20 -z-[5] h-[520px] w-[520px] rounded-full opacity-85 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,245,215,0.75), rgba(255,230,195,0.3) 40%, transparent 75%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[35%] -left-32 -z-[5] h-[540px] w-[540px] rounded-full opacity-75 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,200,140,0.65), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -right-32 -z-[5] h-[540px] w-[540px] rounded-full opacity-75 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,200,140,0.65), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-[5] h-[600px] w-[1100px] -translate-x-1/2 opacity-65 blur-3xl"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(255,170,90,0.6), transparent 65%)" }}
      />

      {/* CONTENT — top half */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-30">
        {/* Badge — dark on cream */}
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold backdrop-blur-md"
          style={{
            background: "#0F0E0C",
            borderColor: "rgba(15,14,12,0.15)",
            color: "#FFFFFF",
          }}
        >
          <span className="rounded-full bg-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Nouveau
          </span>
          <span>Capturez 10x plus d&apos;avis</span>
        </span>

        {/* Title — BLACK + WHITE italic with HIGHLIGHTER marker behind */}
        <h1 className="font-display animate-fade-up delay-1 mt-5 max-w-4xl text-center text-[40px] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[64px]">
          <span style={{ color: "#0F0E0C" }}>Ne laissez plus vos clients</span>
          <br />
          <span className="relative inline-block italic" style={{ color: "#FFFFFF" }}>
            {/* Orange highlight rectangle behind text */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-[-14px] inset-y-[6px] -z-10 rounded-sm"
              style={{ background: "#FA700D" }}
            />
            <span className="relative">partir en silence.</span>
          </span>
        </h1>

        {/* Subtitle — dark on cream */}
        <p
          className="animate-fade-up delay-2 mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed sm:text-base lg:text-lg"
          style={{ color: "rgba(15,14,12,0.72)" }}
        >
          <strong className="font-bold" style={{ color: "#0F0E0C" }}>96% des clients mécontents</strong> ne se plaignent pas — ils partent simplement.
          Avec Qualywatch, ils parlent <strong className="font-bold" style={{ color: "#0F0E0C" }}>avant de partir</strong>.
        </p>

        {/* CTAs — Essayer gratuitement = orange + white border + white text */}
        <div className="animate-fade-up delay-3 mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://app.qualywatch.com/register"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold shadow-orange btn-lift"
            style={{
              background: "#FA700D",
              border: "2px solid #FFFFFF",
              color: "#FFFFFF",
            }}
          >
            Essayer gratuitement
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth="2.5" />
          </Link>
          <Link
            href="#solution"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition"
            style={{
              border: "1px solid rgba(15,14,12,0.18)",
              background: "rgba(255,255,255,0.6)",
              color: "#0F0E0C",
              backdropFilter: "blur(8px)",
            }}
          >
            <PlayCircle className="h-5 w-5 text-orange transition-transform group-hover:scale-110" strokeWidth="2" />
            Voir la démo
          </Link>
        </div>

        {/* Spacer — small gap (~12px) so phone is close to buttons */}
        <div className="h-[540px] sm:h-[630px] lg:h-[720px]" />
      </div>

      {/* DECORATIVE half-circle SVG arcs around the phone — modern gradient */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] left-1/2 z-[8] w-[110%] max-w-[1100px] -translate-x-1/2 sm:bottom-[15%] sm:w-[100%]"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <defs>
          <linearGradient id="arcGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FA700D" stopOpacity="0" />
            <stop offset="20%" stopColor="#FA700D" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0F0E0C" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#FA700D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FA700D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="arcGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FA700D" stopOpacity="0" />
            <stop offset="30%" stopColor="#FA700D" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FA700D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FA700D" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer arc */}
        <path
          d="M 60 380 A 340 320 0 0 1 740 380"
          stroke="url(#arcGrad1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Inner arc — slightly smaller */}
        <path
          d="M 110 380 A 290 270 0 0 1 690 380"
          stroke="url(#arcGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* PHONE absolute bottom — +10% bigger */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[528px] w-[96%] max-w-[748px] -translate-x-1/2 sm:h-[616px] sm:max-w-[836px] lg:h-[704px] lg:max-w-[924px]">
        {/* Decorative SEMI-CIRCLES around cards (geometric wrapping) */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full sm:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Top-left wrapping arc */}
          <path
            d="M 8 22 A 14 14 0 0 1 22 8"
            fill="none"
            stroke="rgba(15,14,12,0.4)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* Top-right wrapping arc */}
          <path
            d="M 78 8 A 14 14 0 0 1 92 22"
            fill="none"
            stroke="rgba(15,14,12,0.4)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bottom-left wrapping arc */}
          <path
            d="M 22 92 A 14 14 0 0 1 8 78"
            fill="none"
            stroke="rgba(15,14,12,0.4)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bottom-right wrapping arc */}
          <path
            d="M 92 78 A 14 14 0 0 1 78 92"
            fill="none"
            stroke="rgba(15,14,12,0.4)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {/* White glow halo behind phone */}
        <div className="absolute inset-x-[15%] top-[8%] -z-10 h-[80%] rounded-[140px] bg-white/15 blur-3xl" />
        <div className="absolute inset-x-[25%] top-[15%] -z-10 h-[70%] rounded-[120px] bg-white/25 blur-2xl" />

        <Image
          src="/replit-assets/Hand_and_iPhone_16_Pro-Photoroom_1773297055780.png"
          alt="Application QualyWatch sur iPhone"
          fill
          priority
          sizes="(min-width: 1024px) 760px, (min-width: 640px) 700px, 92vw"
          className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.3)]"
        />

        {/* CARDS — close to the phone (negative offsets so they hug the edges) */}

        {/* Decorative ring around left-top card */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[-2%] top-[2%] z-10 hidden h-[160px] w-[160px] rounded-full border-2 border-dashed border-[#0F0E0C]/30 sm:block lg:left-[1%] lg:h-[180px] lg:w-[180px]"
        />
        {/* Card LEFT TOP — Satisfaction (compact - smallest) */}
        <div className="animate-float-1 pointer-events-auto absolute left-2 top-[14%] z-20 hidden w-44 sm:block sm:left-4 sm:w-48 lg:left-8 lg:w-52">
          <TiltCard
            className="rounded-3xl p-3.5 shadow-deep"
            style={{ background: "#0F0E0C", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>Satisfaction</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-bold text-success">
                <TrendingUp className="h-3 w-3" strokeWidth="2.5" /> +12%
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-3xl font-extrabold leading-none lg:text-4xl" style={{ color: "#FFFFFF" }}>4.8</span>
              <span className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.55)" }}>/5</span>
            </div>
            <div className="mt-2 flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-orange text-orange" />
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Card LEFT BOTTOM — Feedbacks with chart (LARGEST - chart needs space) */}
        <div className="animate-float-2 pointer-events-auto absolute left-2 top-[42%] z-20 hidden w-60 sm:block sm:left-4 sm:w-64 lg:left-2 lg:w-72">
          <TiltCard
            className="rounded-3xl p-5 shadow-deep"
            style={{ background: "#0F0E0C", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-glow text-orange">
                  <BarChart3 className="h-4 w-4" strokeWidth="2.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>Feedbacks · 7j</div>
                  <div className="font-display mt-0.5 text-xl font-extrabold leading-none" style={{ color: "#FFFFFF" }}>2 487</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-bold text-success">
                <TrendingUp className="h-3 w-3" strokeWidth="2.5" /> +18%
              </span>
            </div>
            <div className="mt-3 flex items-end gap-1">
              {[14, 22, 18, 28, 24, 36, 32, 40].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 7 ? "bg-orange" : "bg-orange/30"}`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>1 982 positifs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>505 à traiter</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Decorative ring around right-top card */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-2%] top-[8%] z-10 hidden h-[170px] w-[170px] rounded-full border-2 border-dashed border-[#0F0E0C]/30 sm:block lg:right-[1%] lg:h-[190px] lg:w-[190px]"
        />
        {/* Card RIGHT TOP — KaliPoints (medium-small) */}
        <div className="animate-float-3 pointer-events-auto absolute right-2 top-[20%] z-20 hidden w-48 sm:block sm:right-4 sm:w-52 lg:right-8 lg:w-56">
          <TiltCard
            className="rounded-3xl p-4 shadow-deep"
            style={{ background: "#0F0E0C", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>KaliPoints</span>
              <span className="rounded-full bg-orange/15 px-2 py-0.5 text-[10px] font-bold text-orange">+50</span>
            </div>
            <div className="font-display mt-2 text-3xl font-extrabold leading-none lg:text-4xl" style={{ color: "#FFFFFF" }}>2 480</div>
            <div className="mt-1.5 text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>Marie B. · top 3%</div>
            <div className="mt-2.5 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i <= 4 ? "bg-orange" : "bg-white/10"}`}
                />
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Card RIGHT BOTTOM — Nouveau feedback (BLACK) */}
        <div className="animate-float-1 pointer-events-auto absolute right-2 top-[48%] z-20 hidden w-56 sm:block sm:right-4 sm:w-60 lg:right-4">
          <TiltCard
            className="rounded-3xl p-4 shadow-deep"
            style={{ background: "#0F0E0C", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-start gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange text-white">
                <Bell className="h-5 w-5" strokeWidth="2.5" />
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-orange ring-2 ring-[#0F0E0C]" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold" style={{ color: "#FFFFFF" }}>Nouveau feedback</div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <MessageSquare className="h-3 w-3" />
                  Table 12 · 2 min
                </div>
                <div className="mt-1.5 flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-orange text-orange" />
                  ))}
                  <span className="ml-1 text-[10px] font-bold" style={{ color: "#FFFFFF" }}>5/5</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
