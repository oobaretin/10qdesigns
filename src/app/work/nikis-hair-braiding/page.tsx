"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Sparkles, Zap } from "lucide-react";

const LIVE_URL = "https://nikis-african-hair-braiding.vercel.app";

export default function NikisHairBraidingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
          <BackButton />
        </div>
        {/* Hero with imagery placeholder */}
        <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
                Niki&apos;s African Hair Braiding
              </h1>
              <p className="mt-4 text-lg text-zinc-400">
                Professional Business Website
              </p>
              <Button asChild size="lg" className="mt-10 gap-2">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
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
              <p className="mt-4 leading-relaxed text-zinc-300">
                A professional service provider needed a sleek, modern digital
                presence to showcase their work and facilitate client inquiries.
                The goal was to move away from generic templates and build a
                custom, high-performance site that reflects the quality of the
                braiding services.
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
                    <strong className="text-zinc-100">Modern Development:</strong>{" "}
                    Built entirely using Cursor, leveraging AI-assisted coding
                    to ensure clean structure and rapid delivery.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Visual Showcase:</strong>{" "}
                    Designed a high-impact gallery and service layout to
                    highlight the intricate detail of the hair braiding work.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Optimized Deployment:</strong>{" "}
                    Deployed via Vercel for lightning-fast load times and global
                    availability.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">The Tech Stack:</strong>{" "}
                    Next.js, Tailwind CSS, and Cursor for streamlined
                    development.
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
              <p className="mt-4 leading-relaxed text-zinc-300">
                A live, professional business platform (
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  nikis-african-hair-braiding.vercel.app
                </a>
                ) that provides a seamless user experience. This project
                highlights my efficiency in taking a business from concept to a
                live, high-quality production environment in record time.
              </p>
            </motion.section>

            {/* Tech Highlight */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Modern Workflow
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-300">
                This project was built using{" "}
                <strong className="text-zinc-100">Cursor</strong> for AI-assisted
                development and deployed on{" "}
                <strong className="text-zinc-100">Vercel</strong> for
                lightning-fast, global delivery—showcasing a modern, efficient
                workflow from concept to production.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-zinc-300">
                    Cursor
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-zinc-300">
                    Vercel
                  </span>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <div className="flex flex-col gap-4 border-t border-zinc-800 pt-8">
              <Button asChild size="lg" className="w-fit gap-2">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  View Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
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
