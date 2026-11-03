import Image from "next/image";

type IPhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Color behind the iOS status bar; the screenshot starts below it. */
  statusBarBg?: string;
  statusBarText?: string;
  size?: "md" | "sm";
};

/** iPhone 15 Pro style device frame around a real app screenshot. */
export function IPhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
  statusBarBg = "#FFFFFF",
  statusBarText = "#0B0B0C",
  size = "md",
}: IPhoneFrameProps) {
  const width = size === "sm" ? "w-[220px] xl:w-[240px]" : "w-[280px] sm:w-[310px]";
  return (
    <div className={`relative ${width} ${className}`}>
      {/* Side buttons */}
      <span aria-hidden className="absolute -left-[3px] top-[18%] h-7 w-[3px] rounded-l-sm bg-[#6E7176]" />
      <span aria-hidden className="absolute -left-[3px] top-[26%] h-12 w-[3px] rounded-l-sm bg-[#6E7176]" />
      <span aria-hidden className="absolute -left-[3px] top-[35%] h-12 w-[3px] rounded-l-sm bg-[#6E7176]" />
      <span aria-hidden className="absolute -right-[3px] top-[30%] h-20 w-[3px] rounded-r-sm bg-[#6E7176]" />

      {/* Titanium band */}
      <div
        className="rounded-[54px] p-[3px] shadow-[0_30px_60px_-20px_rgba(15,14,12,0.35),0_12px_24px_-12px_rgba(15,14,12,0.25)]"
        style={{ background: "linear-gradient(145deg, #A3A6AB 0%, #5F6267 35%, #8C8F94 65%, #4B4E52 100%)" }}
      >
        {/* Black bezel */}
        <div className="rounded-[51px] bg-[#0B0B0C] p-[10px]">
          {/* Screen */}
          <div className="relative flex aspect-[393/852] flex-col overflow-hidden rounded-[42px]" style={{ background: statusBarBg }}>
            <div className="h-[46px] shrink-0" />
            <div className="relative flex-1">
              <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 640px) 290px, 260px" className="object-cover object-top" />
            </div>

            {/* iOS status bar */}
            <div aria-hidden className="absolute inset-x-0 top-0 flex h-[46px] items-center justify-between px-6 pt-1 text-[13px] font-semibold" style={{ color: statusBarText }}>
              <span className="tabular-nums">9:41</span>
              <span className="flex items-center gap-1">
                <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.8" /><rect x="4.5" y="5" width="3" height="6" rx="0.8" /><rect x="9" y="2.5" width="3" height="8.5" rx="0.8" /><rect x="13.5" y="0" width="3" height="11" rx="0.8" /></svg>
                <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5 2.2c2.1 0 4 .8 5.4 2.2l1.1-1.1A9.2 9.2 0 0 0 7.5.6 9.2 9.2 0 0 0 1 3.3l1.1 1.1a7.6 7.6 0 0 1 5.4-2.2Zm0 3.2c1.2 0 2.3.5 3.2 1.3l1.1-1.1a6.1 6.1 0 0 0-8.6 0l1.1 1.1c.9-.8 2-1.3 3.2-1.3Zm0 3.2c.4 0 .8.2 1.1.4L7.5 10.1 6.4 9c.3-.3.7-.4 1.1-.4Z" /></svg>
                <svg width="22" height="11" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.2" stroke="currentColor" opacity="0.4" /><rect x="2" y="2" width="18" height="8" rx="2" fill="currentColor" /><path d="M23 4v4c.8-.3 1.3-1.1 1.3-2S23.8 4.3 23 4Z" fill="currentColor" opacity="0.4" /></svg>
              </span>
            </div>

            {/* Dynamic Island */}
            <div aria-hidden className="absolute left-1/2 top-[11px] h-[24px] w-[30%] -translate-x-1/2 rounded-full bg-[#0B0B0C]" />
          </div>
        </div>
      </div>
    </div>
  );
}
