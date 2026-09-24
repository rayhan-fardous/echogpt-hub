import { Reveal } from "@/components/Reveal";
import { WHY } from "@/lib/site";

export function Why() {
  return (
    <section id="why" className="scroll-mt-20 relative overflow-hidden bg-lavender py-24 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="chip-mono">Why EchoGPT</span>
            <h2 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              Fewer tools, better answers
            </h2>
          </Reveal>

          <ol className="mt-10 flex flex-col gap-8">
            {WHY.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 60} className="flex gap-5">
                <span className="font-mono text-xs text-brand-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120} className="lg:pt-24">
          <div className="card-echo flex flex-col gap-5 p-6">
            <p className="chip-mono">Your afternoon, before</p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[
                "Chat tab for the plan",
                "Second tab for the images",
                "Third tab for the video",
                "Notes app for the SOP",
                "Three logins, two bills",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-muted-foreground/40" />
                  <span className="line-through decoration-brand-300">{line}</span>
                </li>
              ))}
            </ul>

            <div className="h-px bg-border" />

            <p className="chip-mono text-brand-600">…and after</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                "One prompt bar, one thread",
                "Studios one click away in the sidebar",
                "Models compared, not guessed",
                "Files connected, sources attached",
                "Everything still there tomorrow",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span className="font-medium">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
