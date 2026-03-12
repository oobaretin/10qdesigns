"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const LIVE_URL = "https://smallprint-ai.example.com";

export default function SmallPrintAIPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
          <BackButton />
        </div>

        {/* Hero */}
        <section className="relative border-b border-zinc-800 bg-zinc-950 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
                SmallPrint AI
              </h1>
              <p className="mt-4 text-lg text-zinc-400">
                SaaS / AI Solutions
              </p>
              <Button asChild size="lg" className="mt-8 gap-2">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
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
                Legal documents and contracts are notoriously dense, making it
                difficult for non-lawyers to quickly identify risks or key
                clauses. The goal was to build a tool that could &quot;digest&quot;
                a PDF and provide an instant, high-accuracy summary without
                losing critical context.
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
                    Engineered a specialized AI-wrapper using Anthropic&apos;s
                    Claude model for its superior reasoning and long-context
                    window.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    Implemented robust server-side logic for multi-page document
                    parsing and PDF extraction.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    Developed custom system prompts to ensure the AI focuses on
                    &quot;Red Flag&quot; detection and executive summaries.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    Built with Next.js and TypeScript for a type-safe frontend,
                    styled with Tailwind CSS, and deployed via Vercel for instant
                    global delivery.
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
                A streamlined SaaS application where users can upload a contract
                and receive a structured analysis in under 10 seconds. The
                project demonstrates a seamless integration of AI reasoning into
                a user-friendly web utility.
              </p>
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
