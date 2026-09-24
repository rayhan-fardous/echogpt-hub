import { MARQUEE } from "@/lib/site";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative flex overflow-hidden border-y border-border/70 bg-lavender py-3">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 font-mono text-[11px] tracking-[0.14em] text-brand-700/70 uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-brand-400" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-lavender to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-lavender to-transparent" />
    </div>
  );
}
