import { EchoMark, Wordmark } from "@/components/brand/Logo";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "Workspace",
    links: [
      { label: "Features", href: "#features" },
      { label: "AI models", href: "#models" },
      { label: "Preview", href: "#preview" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Image Studio", href: "#features" },
      { label: "Video Studio", href: "#features" },
      { label: "AI Job Analysis", href: "#features" },
      { label: "AI SOP Builder", href: "#features" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: `mailto:${SITE.email}` },
      { label: "Why EchoGPT", href: "#why" },
      { label: "Get started", href: SITE.appUrl },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-50/10 bg-night py-14">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <EchoMark className="h-7 w-7" />
              <Wordmark tone="dark" />
            </div>
            <p className="mt-3 max-w-xs text-sm text-brand-100/60">
              {SITE.tagline} Chat, studios, connectors and automation in one browser workspace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="chip-mono text-[10px] text-brand-300">{column.title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-100/60 transition-colors hover:text-brand-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-50/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-brand-100/50">
            © {new Date().getFullYear()} {SITE.name} · All rights reserved
          </p>
          <p className="font-mono text-[11px] text-brand-100/50">
            Built for people who would rather ask than search
          </p>
        </div>
      </div>
    </footer>
  );
}
