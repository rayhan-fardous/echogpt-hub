import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { PLANS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 pt-12 pb-24 sm:pt-16 sm:pb-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="chip-mono">Pricing</span>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Start free, go Pro when the work gets serious
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No usage surprises. Every plan includes the whole workspace — the difference is the
            engines you can switch on.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col gap-6 rounded-3xl border p-7",
                  plan.highlighted
                    ? "border-brand-400 bg-night-echo shadow-[var(--shadow-lift)]"
                    : "card-echo",
                )}
              >
                <header>
                  <div className="flex items-center justify-between">
                    <h3
                      className={cn(
                        "font-display text-lg font-semibold tracking-tight",
                        plan.highlighted ? "text-brand-50" : "text-foreground",
                      )}
                    >
                      {plan.name}
                    </h3>
                    {plan.highlighted ? (
                      <span className="rounded-md bg-spark px-1.5 py-0.5 font-mono text-[9px] font-bold text-spark-foreground">
                        POPULAR
                      </span>
                    ) : null}
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      plan.highlighted ? "text-brand-100/70" : "text-foreground/60",
                    )}
                  >
                    {plan.blurb}
                  </p>
                </header>

                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-display text-5xl font-bold tracking-tight",
                      plan.highlighted ? "text-brand-50" : "text-foreground",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[11px]",
                      plan.highlighted ? "text-brand-200/70" : "text-foreground/60",
                    )}
                  >
                    {plan.unit}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted ? "text-brand-300" : "text-brand-500",
                        )}
                      />
                      <span
                        className={plan.highlighted ? "text-brand-50/90" : "text-foreground/90"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "brand" : "outline"}
                  size="lg"
                  className="mt-auto w-full"
                  asChild
                >
                  <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="font-mono text-[11px] text-muted-foreground">
            Cancel any time · Team seats are billed monthly · Prices in USD
          </p>
        </Reveal>
      </div>
    </section>
  );
}
