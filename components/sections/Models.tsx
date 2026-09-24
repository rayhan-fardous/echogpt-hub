import { Reveal } from "@/components/Reveal";
import { MODELS, MODEL_ROUTER } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Models() {
  return (
    <section id="models" className="scroll-mt-20 relative overflow-hidden bg-night-echo pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_70%_0%,#000,transparent)]">
        <div className="h-full w-full echo-field opacity-30" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="chip-mono text-brand-300">AI models</span>
            <h2 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight text-brand-50 sm:text-5xl">
              The right model for the job you are actually doing
            </h2>
            <p className="mt-4 text-lg text-brand-100/70">
              Pick one yourself or let EchoGPT route the request. Either way, the output lands in the
              same thread.
            </p>
          </div>
          <span className="font-mono text-[11px] text-brand-200/70">
            auto-routing · swap anytime
          </span>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map((model, index) => (
            <Reveal key={model.name} delay={index * 80} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col gap-4 rounded-2xl border p-6 backdrop-blur-md transition-colors",
                  model.tier === "pro"
                    ? "border-brand-400/40 bg-brand-50/[0.06]"
                    : "border-brand-50/12 bg-brand-50/[0.03]",
                )}
              >
                <header className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-brand-50">
                    {model.name}
                  </h3>
                  <span className="shrink-0 rounded-md border border-brand-50/20 px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-brand-200 uppercase">
                    {model.role}
                  </span>
                </header>
                <p className="text-sm leading-relaxed text-brand-100/70">{model.copy}</p>
                <dl className="mt-auto flex flex-col gap-2 border-t border-brand-50/12 pt-4 font-mono text-[10.5px]">
                  <div className="flex justify-between">
                    <dt className="text-brand-200/85">context</dt>
                    <dd className="text-brand-50">{model.context}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-brand-200/85">speed</dt>
                    <dd className="text-brand-50">{model.speed}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="shrink-0 text-brand-200/85">best for</dt>
                    <dd className="text-right text-brand-50">{model.best}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {MODEL_ROUTER.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-50/15 px-3 py-1 font-mono text-[10.5px] text-brand-100/70"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
