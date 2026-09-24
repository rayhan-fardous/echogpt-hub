import { Reveal } from "@/components/Reveal";
import { FEATURES } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 relative py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="chip-mono">Features</span>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Ten tools, one shared context
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything below lives in the same sidebar and reads from the same conversation, so you
            never have to explain your project twice.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={(index % 4) * 70}
              className={cn("h-full", feature.span === "wide" && "lg:col-span-2")}
            >
              <article className="group h-full card-echo flex flex-col gap-3 p-6 transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  {feature.pro ? (
                    <span className="ml-auto rounded-md bg-spark px-1.5 py-0.5 font-mono text-[9px] font-bold text-spark-foreground">
                      PRO
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
