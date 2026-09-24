import { Check, Columns2 } from "lucide-react";
import { cn } from "@/lib/utils";

const COLUMNS = [
  {
    model: "EchoGPT Core",
    time: "0.8s",
    copy: "Short, direct answer. A quick draft you can edit yourself.",
    score: 82,
    winner: false,
  },
  {
    model: "EchoGPT Reason",
    time: "4.1s",
    copy: "Steps first, then the recommendation, with the trade-off stated plainly.",
    score: 96,
    winner: true,
  },
  {
    model: "EchoGPT Vision",
    time: "1.6s",
    copy: "Reads the attached screenshot and answers from what is on screen.",
    score: 88,
    winner: false,
  },
];

/** The Compare surface: one prompt, several models, keep the best. */
export function CompareMock({ className }: { className?: string }) {
  return (
    <div className={cn("card-echo overflow-hidden bg-card", className)}>
      <div className="flex items-center gap-2 border-b border-border/70 bg-lavender px-4 py-2.5">
        <Columns2 className="h-3.5 w-3.5 text-brand-500" />
        <span className="font-display text-[11px] font-bold tracking-tight">Compare</span>
        <span className="ml-auto font-mono text-[9px] text-muted-foreground">
          3 models · 1 prompt
        </span>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="rounded-xl border border-border/80 bg-lavender px-3 py-2 text-[11px] text-muted-foreground">
          <span className="chip-mono mr-2 text-[8px]">Prompt</span>
          Which launch plan should I run for a two-week beta?
        </div>

        <div className="grid gap-2.5 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <article
              key={col.model}
              className={cn(
                "flex flex-col gap-2 rounded-xl border bg-card p-3",
                col.winner
                  ? "border-brand-400 shadow-[var(--shadow-lift)]"
                  : "border-border/80 shadow-[var(--shadow-soft)]",
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span className="font-display text-[10.5px] font-semibold">{col.model}</span>
                <span className="font-mono text-[8.5px] text-muted-foreground">{col.time}</span>
              </header>
              <p className="text-[10px] leading-snug text-muted-foreground">{col.copy}</p>
              <div className="mt-auto h-1 overflow-hidden rounded-full bg-brand-100">
                <div className="h-full rounded-full bg-echo" style={{ width: `${col.score}%` }} />
              </div>
              <span
                className={cn(
                  "flex items-center justify-center gap-1 rounded-lg py-1 text-[9px] font-semibold",
                  col.winner
                    ? "bg-echo text-brand-foreground"
                    : "border border-border/80 text-muted-foreground",
                )}
              >
                {col.winner ? <Check className="h-2.5 w-2.5" /> : null}
                {col.winner ? "Keep this" : "Use"}
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
