import { ArrowRight, Play } from "lucide-react";
import { ChatMock } from "@/components/app-mock/ChatMock";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

function Ripples() {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center overflow-hidden">
      {[0, 1.6, 3.2].map((delay) => (
        <span
          key={delay}
          className="absolute h-[30rem] w-[30rem] animate-ripple rounded-full border border-brand-300/50"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      <span className="absolute h-[34rem] w-[34rem] rounded-full bg-brand-200/25 blur-3xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[image:var(--gradient-veil)]" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000,transparent)]">
        <div className="h-full w-full dot-field opacity-40" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pt-16 pb-20 lg:grid-cols-[1.02fr_1.1fr] lg:pt-20">
        <div>
          <span className="chip-mono inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            AI workspace · in your browser
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight sm:text-6xl">
            One prompt bar for
            <span className="text-echo"> every kind of work</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            EchoGPT puts chat, image and video studios, model comparison, your connected files and
            hands-free automation behind a single question box. Ask once — get the answer, the
            artwork, the plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brand" size="xl" asChild>
              <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">
                Open EchoGPT
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#preview">
                <Play className="h-4 w-4 text-brand-500" />
                See it working
              </a>
            </Button>
          </div>

          <p className="mt-6 font-mono text-[11px] tracking-wide text-foreground/70">
            Free to start · No download · Installs as an app
          </p>
        </div>

        <div className="relative">
          <Ripples />
          <ChatMock className="relative animate-float shadow-[var(--shadow-lift)]" />
          <div className="absolute -top-6 -right-2 hidden rounded-xl border border-border/70 bg-card px-3 py-2 shadow-[var(--shadow-soft)] sm:block">
            <p className="font-mono text-[9px] text-muted-foreground">IMAGE STUDIO</p>
            <p className="font-display text-xs font-semibold">
              4 renders <span className="text-brand-600">ready</span>
            </p>
          </div>
          <div className="absolute -bottom-9 -left-4 hidden rounded-xl border border-border/70 bg-card px-3 py-2 shadow-[var(--shadow-soft)] sm:block">
            <p className="font-mono text-[9px] text-muted-foreground">COMPARE</p>
            <p className="font-display text-xs font-semibold">
              3 models <span className="text-brand-600">1 prompt</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
