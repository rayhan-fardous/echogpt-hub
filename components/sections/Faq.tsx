import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-lavender py-24 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="chip-mono">FAQ</span>
          <h2 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Questions people ask before the first prompt
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still unsure? Write to us and a person answers.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="card-echo bg-card px-6">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className="border-border/70">
                <AccordionTrigger className="font-display text-[0.95rem] font-semibold tracking-tight hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
