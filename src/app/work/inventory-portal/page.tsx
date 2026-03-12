"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Package, Database, Zap } from "lucide-react";

const LIVE_URL = "https://vigilant-joy-production-4de6.up.railway.app/sell";

export default function InventoryPortalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
          <BackButton />
        </div>

        {/* Hero - Dashboard-inspired */}
        <section className="border-b border-zinc-800 bg-zinc-950 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
                Inventory & Sales Management Portal
              </h1>
              <p className="mt-2 text-zinc-500">
                Business Operations / SaaS Utility
              </p>
              <Button asChild variant="outline" className="mt-8 gap-2 border-zinc-700">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  Open Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
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
                Managing inventory and processing sales in real-time requires a
                system that is both fast and reliable. The goal was to build a
                functional &quot;Sell&quot; interface that allows for quick item
                entry, inventory tracking, and sales management without the lag
                of traditional bloated retail software.
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
                    <strong className="text-zinc-100">Real-Time Data Management:</strong>{" "}
                    Implemented a backend architecture designed for instant
                    updates, ensuring that inventory levels and sales records
                    are accurate across all sessions.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Streamlined UI:</strong>{" "}
                    Developed a clean, data-centric interface that allows users
                    to list items and manage sales with minimal clicks,
                    optimized for high-frequency business use.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Cloud Deployment:</strong>{" "}
                    Hosted via Railway, demonstrating versatility in using
                    different cloud infrastructure platforms (Railway/Vercel)
                    depending on the project&apos;s specific backend needs.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">The Tech Stack:</strong>{" "}
                    Next.js, Tailwind CSS, TypeScript, and Railway for
                    deployment.
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
                A robust, live operational tool (
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  vigilant-joy-production-4de6.up.railway.app/sell
                </a>
                ) that transforms complex inventory tasks into a simple,
                manageable workflow. This project highlights my ability to build
                the &quot;internal engines&quot; that power a business&apos;s
                daily operations.
              </p>
            </motion.section>

            {/* Tech Highlight - Railway */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Infrastructure
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-300">
                This project is hosted on{" "}
                <strong className="text-zinc-100">Railway</strong>, showcasing
                my range across cloud platforms. While many projects deploy to
                Vercel for frontend-focused workloads, this inventory portal
                leverages Railway for its backend-first architecture—ensuring
                reliable, real-time data sync and persistent storage for
                business-critical operations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2">
                  <Package className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm font-medium text-zinc-300">
                    Next.js
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2">
                  <Database className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm font-medium text-zinc-300">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    Railway
                  </span>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <div className="flex flex-col gap-4 border-t border-zinc-800 pt-8">
              <Button asChild className="w-fit gap-2">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer">
                  Open Inventory Portal
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
