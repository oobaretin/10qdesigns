"use client";

import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";

const coreTechnologies = {
  frontend: ["React", "Next.js (App Router)", "Tailwind CSS", "Framer Motion"],
  backend: ["Prisma", "PostgreSQL", "Anthropic API", "OpenAI API"],
  specialization: [
    "Prompt Engineering",
    "AI-Powered Automation",
    "Specialized SaaS Utilities",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 pt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-16 lg:grid-cols-[1fr,320px] lg:gap-20"
          >
            {/* Left column: Text content */}
            <div className="space-y-6 border-b border-zinc-800/60 pb-12 lg:border-b-0 lg:border-r lg:border-zinc-800/60 lg:pr-16 lg:pb-0">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
                Full-Stack Engineer & AI Architect
              </h1>

              <p className="mt-4 text-zinc-300 leading-relaxed">
                I bridge the gap between complex data and intuitive user
                interfaces. With a focus on Next.js, TypeScript, and SaaS
                architecture, I build tools that don&apos;t just look
                professional—they solve functional problems.
              </p>

              <section className="space-y-4 pt-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Technical Core
                </h2>
                <div className="space-y-3 text-zinc-300">
                  <p>
                    <span className="font-medium text-zinc-300"
                      >Frontend:</span>{" "}
                    React, Next.js (App Router), Tailwind CSS, Framer Motion.
                  </p>
                  <p>
                    <span className="font-medium text-zinc-300"
                      >Backend & Data:</span>{" "}
                    Prisma, PostgreSQL, API Integration (Anthropic/OpenAI).
                  </p>
                  <p>
                    <span className="font-medium text-zinc-300"
                      >Specialization:</span>{" "}
                    Prompt Engineering, AI-powered automation, and specialized
                    SaaS utilities.
                  </p>
                </div>
              </section>

              <section className="space-y-4 border-t border-zinc-800/60 pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  The 10Q Approach
                </h2>
                <p className="leading-relaxed text-zinc-300">
                  Whether I&apos;m building a legal analysis tool like SmallPrint
                  AI or a statewide directory like Real Taste of Africa, my goal
                  is the same: clean code, rapid deployment, and a high-performance
                  user experience. I specialize in turning niche requirements—from
                  Montessori digital manipulatives to localized marketplace
                  SEO—into scalable web applications.
                </p>
              </section>

              <Link
                href="/work"
                className="inline-block mt-8 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                View my work →
              </Link>
            </div>

            {/* Right column: Core Technologies badges */}
            <div className="space-y-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Core Technologies
              </h2>
              <div className="flex flex-col gap-4">
                <div className="space-y-3">
                  <span className="text-xs font-medium text-zinc-500">
                    Frontend
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {coreTechnologies.frontend.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-zinc-700 bg-zinc-900/50 text-zinc-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 border-t border-zinc-800/60 pt-4">
                  <span className="text-xs font-medium text-zinc-500">
                    Backend & Data
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {coreTechnologies.backend.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-zinc-700 bg-zinc-900/50 text-zinc-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 border-t border-zinc-800/60 pt-4">
                  <span className="text-xs font-medium text-zinc-500">
                    Specialization
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {coreTechnologies.specialization.map((tech) => (
                      <Badge
                        key={tech}
                        variant="default"
                        className="border-accent/30 bg-accent/10 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
