import Image from "next/image";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TILES = [
  { src: "/assets/echo-ripples.jpg", label: "Concentric, glass, lilac", alt: "Abstract concentric glass ripples" },
  { src: "/assets/studio-canyon.jpg", label: "Canyon, dawn, violet grade", alt: "Figure at the edge of a misty canyon" },
  { src: "/assets/studio-ink.jpg", label: "Ink rings, macro, silver", alt: "Violet and silver ink swirling into rings" },
];

/** The Image Studio surface: prompt bar, style chips, results grid. */
export function ImageStudioMock({ className }: { className?: string }) {
  return (
    <div className={cn("card-echo overflow-hidden bg-card", className)}>
      <div className="flex items-center gap-2 border-b border-border/70 bg-lavender px-4 py-2.5">
        <span className="font-display text-[11px] font-bold tracking-tight">Image Studio</span>
        <span className="rounded bg-brand-100 px-1 font-mono text-[8px] font-bold text-brand-700">
          PRO
        </span>
        <span className="ml-auto font-mono text-[9px] text-muted-foreground">4 / 12 renders</span>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2 rounded-xl border border-border/80 bg-card px-3 py-2.5 shadow-[var(--shadow-soft)]">
          <Wand2 className="h-3.5 w-3.5 shrink-0 text-brand-500" />
          <span className="flex-1 truncate text-[11px] text-muted-foreground">
            concentric glass ripples on a violet field, soft studio light
          </span>
          <span className="flex items-center gap-1 rounded-lg bg-echo px-2 py-1 text-[9px] font-semibold text-brand-foreground">
            <Sparkles className="h-2.5 w-2.5" />
            Generate
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {["Glass", "Violet", "Macro", "3:4", "Style-locked"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border/80 bg-lavender px-2 py-0.5 font-mono text-[8.5px] text-brand-700"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {TILES.map((tile) => (
            <figure key={tile.label} className="overflow-hidden rounded-xl border border-border/70">
              <Image
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
                width={816}
                height={816}
                className="h-24 w-full object-cover sm:h-28"
              />
              <figcaption className="truncate bg-card px-1.5 py-1 font-mono text-[8px] text-muted-foreground">
                {tile.label}
              </figcaption>
            </figure>
          ))}
          <div className="flex h-24 flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-brand-300 bg-brand-50 sm:h-28">
            <Loader2 className="h-4 w-4 animate-spin text-brand-500" />
            <span className="font-mono text-[8px] text-brand-600">rendering…</span>
          </div>
        </div>
      </div>
    </div>
  );
}
