import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Models } from "@/components/sections/Models";
import { Nav } from "@/components/sections/Nav";
import { Preview } from "@/components/sections/Preview";
import { Pricing } from "@/components/sections/Pricing";
import { Why } from "@/components/sections/Why";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Models />
        <Preview />
        <Why />
        <Pricing />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
