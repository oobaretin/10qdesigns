"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code, BarChart3, PenLine } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Code },
  { name: "Data Visualization", icon: BarChart3 },
];

export default function MoodMeterTrackerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 pt-24">
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
              className="inline-block rounded-2xl bg-gradient-to-br from-violet-500/10 via-zinc-900/50 to-teal-500/10 p-1"
            >
              <div className="rounded-xl bg-zinc-950/80 px-4 py-2">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
                  Mood Meter Tracker
                </h1>
                <p className="mt-2 text-zinc-400">
                  Wellness / Data Visualization
                </p>
              </div>
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
                Emotional intelligence and mindfulness require consistent
                tracking and reflection. The goal was to build a digital companion
                that allows users to log their emotional states and visualize
                patterns over time, helping them gain insights into their mental
                well-being through a clean, non-intrusive interface.
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
              <p className="mt-4 text-zinc-300">
                I focused on creating a seamless, high-engagement tracking
                experience that prioritizes data privacy and visual clarity.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Intuitive Logging:</strong>{" "}
                    Designed a simplified interface for capturing complex
                    emotional data points quickly, ensuring low friction for
                    daily use.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Visual Analytics:</strong>{" "}
                    Implemented dynamic charts and data visualization tools to
                    help users identify trends in their mood and energy levels
                    over weeks and months.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Cross-Platform Accessibility:</strong>{" "}
                    Built with a responsive, mobile-first philosophy to ensure
                    users can log their feelings anytime, anywhere.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">The Tech Stack:</strong>{" "}
                    Next.js, Tailwind CSS, TypeScript, and specialized data
                    visualization libraries for real-time charting.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Feature Spotlight */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-violet-500/5 via-zinc-900/50 to-teal-500/5 p-8"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Feature Spotlight
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 text-violet-400">
                    <PenLine className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      Daily Logging
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      Low-friction interface for capturing emotional states
                      quickly. Designed for consistent daily use without overwhelming
                      the user.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 text-teal-400">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      Data Visualization
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      Dynamic charts and real-time analytics to identify mood
                      and energy trends over weeks and months.
                    </p>
                  </div>
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
                A live, user-centric wellness tool (moodmetertracker.com) that
                empowers individuals to take control of their emotional health.
                This project demonstrates my versatility in building applications
                that serve the human side of technology, combining data-driven
                logic with empathetic design.
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
                    className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3"
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
                href="https://www.moodmetertracker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-500/50 bg-gradient-to-r from-violet-500/20 to-teal-500/20 px-6 py-3 font-medium text-violet-300 transition-colors hover:from-violet-500/30 hover:to-teal-500/30"
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
