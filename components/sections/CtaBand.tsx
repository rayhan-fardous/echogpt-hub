import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section id="get-started" className="scroll-mt-20 relative overflow-hidden bg-night-echo py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid place-items-center overflow-hidden">
        {[0, 1.8, 3.6].map((delay) => (
          <span
            key={delay}
            className="absolute h-[42rem] w-[42rem] animate-ripple rounded-full border border-brand-400/25"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center">
        <Reveal className="flex flex-col items-center">
          <span className="chip-mono text-brand-300">Get started</span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] font-bold tracking-tight text-brand-50 sm:text-5xl">
            Your next prompt is already waiting
          </h2>
          <p className="mt-4 max-w-xl text-lg text-brand-100/70">
            Open EchoGPT in a tab, ask the thing you have been putting off, and see what comes back in
            every format.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="brand" size="xl" asChild>
              <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">
                Open EchoGPT free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Install as an app
              </a>
            </Button>
          </div>

          <p className="mt-6 font-mono text-[11px] text-brand-200/60">
            Chrome · Edge · Safari · Firefox · no download needed
          </p>
        </Reveal>
      </div>
    </section>
  );
}
