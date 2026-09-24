"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { EchoMark, Wordmark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5">
        <a href="#top" className="flex items-center gap-2">
          <EchoMark className="h-7 w-7" />
          <Wordmark />
        </a>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">Sign in</a>
          </Button>
          <Button variant="brand" size="sm" asChild>
            <a href={SITE.appUrl} target="_blank" rel="noopener noreferrer">
              Open EchoGPT
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
