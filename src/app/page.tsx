import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { MoreProjectsGrid } from "@/components/MoreProjectsGrid";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-zinc-950">
        <Hero />
        <FeaturedWork />
        <MoreProjectsGrid />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
