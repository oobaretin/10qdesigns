"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code, Database, Layers } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Code },
  { name: "PostgreSQL", icon: Database },
  { name: "Prisma", icon: Layers },
];

export default function RealTasteOfAfricaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
          <BackButton />
        </div>
        {/* Hero */}
        <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl lg:text-7xl">
                Real Taste of Africa
              </h1>
              <p className="mt-4 text-lg text-zinc-400">
                Business Directory & Platform
              </p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <a
                  href="https://realtasteofafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Data Highlight */}
        <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl"
            >
              175+ Verified Listings across Texas
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                The Challenge
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                The goal was to centralize a fragmented market by creating a
                statewide digital directory for African restaurants in Texas. The
                project required handling high volumes of business data while
                maintaining a high-performance search experience for users
                looking for local spots.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                The Solution
              </h2>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Data Orchestration:</strong>{" "}
                    Managed a database of 175+ active listings, utilizing
                    automated scraping and cleaning tools to ensure all
                    business information was verified and up-to-date.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Performance Engineering:</strong>{" "}
                    Built with Next.js to leverage Server-Side Rendering (SSR),
                    ensuring that the directory is highly SEO-friendly and loads
                    instantly.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Admin Control:</strong>{" "}
                    Developed a custom administrative dashboard to manage site
                    content, verify domains, and monitor listing status in
                    real-time.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">The Tech Stack:</strong>{" "}
                    Next.js, Tailwind CSS, Prisma, and PostgreSQL, with data
                    automation via Outscraper and Apify.
                  </span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                The Result
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                A live, scalable platform (realtasteofafrica.com) that serves as
                the primary resource for the African culinary scene in Texas.
                The project demonstrates my ability to manage large datasets and
                transform them into a clean, searchable user experience.
              </p>
            </motion.section>

            {/* Tech Stack Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Tech Stack
              </h2>
              <div className="mt-6 grid grid-cols-3 gap-6 sm:gap-8">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 text-zinc-400">
                      <tech.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-zinc-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="pt-8">
              <Link
                href="/work"
                className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                ← Back to Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
