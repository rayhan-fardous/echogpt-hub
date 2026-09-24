import {
  ArrowUp,
  Clock,
  FileText,
  History,
  Image as ImageIcon,
  ListChecks,
  Mic,
  Paperclip,
  Plus,
  Columns2,
  Plug,
  ScanSearch,
  ShoppingBag,
  Sparkles,
  Video,
} from "lucide-react";
import { EchoMark } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Image Studio", icon: ImageIcon, pro: true },
  { label: "Video Studio", icon: Video, pro: true },
  { label: "Compare", icon: Columns2 },
  { label: "Connectors", icon: Plug },
  { label: "History", icon: History },
  { label: "Store", icon: ShoppingBag },
  { label: "AI Tasks", icon: ListChecks },
  { label: "AI Job Analysis", icon: ScanSearch },
  { label: "AI SOP Builder", icon: FileText },
];

const CARDS = [
  {
    title: "Unlock Your Creative Flow",
    copy: "Custom prompts that match your writing style and push past a blank page.",
  },
  {
    title: "Build a Resume That Shines",
    copy: "A CV tailored to the role, written to get past the first screen.",
  },
];

/** Recreates the EchoGPT chat surface inside a browser window. */
export function ChatMock({ className }: { className?: string }) {
  return (
    <div className={cn("card-echo overflow-hidden bg-card", className)}>
      <div className="flex items-center gap-3 border-b border-border/70 bg-lavender px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-3 py-1 font-mono text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          echogpt.live/chat
        </span>
      </div>

      <div className="grid grid-cols-1 bg-card sm:grid-cols-[8.75rem_1fr]">
        <aside className="hidden flex-col gap-3 border-r border-border/70 bg-lavender px-2.5 py-3 sm:flex">
          <div className="flex items-center gap-1.5">
            <EchoMark className="h-5 w-5" />
            <span className="font-display text-[11px] font-bold tracking-tight">EchoGPT</span>
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-echo px-2 py-1.5 text-[10px] font-semibold text-brand-foreground shadow-[var(--shadow-glow)]">
            <Plus className="h-3 w-3" />
            New Chat
          </div>
          <p className="chip-mono text-[8px] text-muted-foreground/70">Engagement</p>
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[9px] text-muted-foreground"
              >
                <item.icon className="h-2.5 w-2.5 shrink-0" />
                <span className="truncate">{item.label}</span>
                {item.pro ? (
                  <span className="ml-auto rounded bg-brand-100 px-1 font-mono text-[7px] font-bold text-brand-700">
                    PRO
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col gap-4 px-5 py-5">
          <div className="text-center">
            <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
              Hello There! How can I help today?
            </h3>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Your personal AI assistant is ready — ask anything, anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border/80 bg-card p-3 text-left shadow-[var(--shadow-soft)]"
              >
                <p className="font-display text-[11px] font-semibold leading-tight">
                  {card.title}
                </p>
                <p className="mt-1 text-[9.5px] leading-snug text-muted-foreground">{card.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto rounded-2xl border border-border/80 bg-card p-2.5 shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2 px-1 pb-2">
              <span className="flex items-center gap-1 rounded-md border border-border/70 px-1.5 py-0.5 text-[9px] font-medium">
                <Sparkles className="h-2.5 w-2.5 text-brand-500" />
                EchoGPT
              </span>
              <span className="text-[9px] text-muted-foreground">Auto routing</span>
              <span className="ml-auto flex items-center gap-1.5 text-muted-foreground">
                <Paperclip className="h-2.5 w-2.5" />
                <Clock className="h-2.5 w-2.5" />
              </span>
            </div>
            <div className="flex items-center gap-2 border-t border-border/60 pt-2">
              <span className="flex-1 text-[11px] text-muted-foreground">
                Ask a question
                <span className="ml-px inline-block h-3 w-px translate-y-0.5 animate-blink bg-brand-500" />
              </span>
              <Mic className="h-3 w-3 text-muted-foreground" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-echo text-brand-foreground shadow-[var(--shadow-glow)]">
                <ArrowUp className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
