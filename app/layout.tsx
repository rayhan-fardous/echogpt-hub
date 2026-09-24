import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — one prompt bar for every kind of work`,
  description:
    "EchoGPT is an AI workspace with chat, Image Studio, Video Studio, model compare, connectors, AI Tasks, Job Analysis and SOP Builder behind a single prompt bar. Free to start, no install.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — one prompt bar for every kind of work`,
    description:
      "Chat, image and video studios, model compare, connectors and automation in one browser workspace. Ask once, get the answer in every format.",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — one prompt bar for every kind of work`,
    description:
      "An AI workspace with chat, studios, model compare and automation in one browser tab.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
