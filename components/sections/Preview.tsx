"use client";

import { useState } from "react";
import { ChatMock } from "@/components/app-mock/ChatMock";
import { CompareMock } from "@/components/app-mock/CompareMock";
import { ImageStudioMock } from "@/components/app-mock/ImageStudioMock";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "chat",
    label: "Chat",
    caption:
      "The home screen: pick a model, attach a file, hold the mic. Suggestion cards get you moving when the box is blank.",
    Mock: ChatMock,
  },
  {
    id: "image",
    label: "Image Studio",
    caption:
      "Type what you picture, lock a style, keep generating. Every render stays in your history next to the prompt that made it.",
    Mock: ImageStudioMock,
  },
  {
    id: "compare",
    label: "Compare",
    caption:
      "Send one prompt to several models at once, read them side by side, keep the answer you would have written yourself.",
    Mock: CompareMock,
  },
];

export function Preview() {
  const [active, setActive] = useState(TABS[0]!.id);
  const current = TABS.find((tab) => tab.id === active) ?? TABS[0]!;

  return (
    <section id="preview" className="scroll-mt-20 pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="chip-mono">Product preview</span>
            <h2 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              Inside EchoGPT
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three real surfaces from the app. Nothing here is a mock-up of a mock-up.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Product preview"
            className="flex w-fit gap-1 rounded-xl border border-border/80 bg-lavender p-1"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                  active === tab.id
                    ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <current.Mock />
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            {current.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
