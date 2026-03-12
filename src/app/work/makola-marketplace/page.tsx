"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code, Zap, MapPin, ListChecks } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Code },
  { name: "React", icon: Zap },
  { name: "Local SEO Optimization", icon: MapPin },
];

export default function MakolaMarketplacePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
          <BackButton />
        </div>
        {/* Hero */}
        <section className="border-b border-zinc-800 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
                Makola Marketplace
              </h1>
              <p className="mt-2 text-zinc-400">
                E-commerce / Grocery Utility
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                The Challenge
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-300">
                Grocery shopping for specific ethnic markets often lacks a
                digital bridge between store inventory and the customer&apos;s
                kitchen. The goal was to build a utility that helps users
                organize their shopping experience while keeping them updated on
                specific kitchen specials in the Houston area.
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
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Smart Shopping Lists:</strong>{" "}
                    Implemented a persistent list feature so users can build
                    and save their grocery needs over time without losing data.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Localized SEO:</strong>{" "}
                    Optimized the platform for Houston-based searches to ensure
                    the store&apos;s kitchen specials reach the intended
                    neighborhood audience.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Performance-First UI:</strong>{" "}
                    Built a lightweight, mobile-responsive interface for quick
                    access while walking through store aisles.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">The Tech Stack:</strong>{" "}
                    Next.js and React for a fast, reactive frontend, with a
                    focus on clean typography and high-contrast accessibility.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Feature Spotlight */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Feature Spotlight
              </h2>
              <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 text-accent">
                  <ListChecks className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    Persistent Shopping List
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    Users can build and save their grocery needs over time
                    without losing data. Designed for quick access while
                    walking through store aisles—lightweight, mobile-responsive,
                    and always in sync.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                The Result
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-300">
                A functional tool that bridges the gap between traditional
                brick-and-mortar shopping and digital convenience. The project
                highlights my ability to build user-centric utilities tailored
                to specific geographic markets.
              </p>
            </motion.section>

            {/* Tech Stack */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Tech Stack
              </h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3"
                  >
                    <tech.icon className="h-5 w-5 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <div className="flex flex-col gap-4 border-t border-zinc-800 pt-8">
              <a
                href="https://makolamarketplace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent transition-colors hover:text-accent/80"
              >
                View Project
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/work"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
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
