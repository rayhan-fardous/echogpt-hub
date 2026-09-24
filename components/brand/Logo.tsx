import Image from "next/image";
import { cn } from "@/lib/utils";

/** Echo mark: official EchoGPT emblem */
export function EchoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="EchoGPT Logo"
      width={32}
      height={32}
      unoptimized
      priority
      className={cn("h-8 w-8 rounded-lg object-contain shrink-0", className)}
    />
  );
}

export function Wordmark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "font-display text-lg font-bold tracking-tight",
        tone === "dark" ? "text-brand-50" : "text-foreground",
        className,
      )}
    >
      Echo<span className="text-echo">GPT</span>
    </span>
  );
}
