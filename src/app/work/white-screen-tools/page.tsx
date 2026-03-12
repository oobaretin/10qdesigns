"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code, Monitor, Ruler, Zap } from "lucide-react";

const techStack = [
  { name: "Next.js", icon: Code },
  { name: "Tailwind CSS", icon: Zap },
  { name: "PWA", icon: Monitor },
  { name: "Optimized JavaScript", icon: Ruler },
];

export default function WhiteScreenToolsPage() {
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
            >
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
                WhiteScreen Tools
              </h1>
              <p className="mt-2 text-zinc-400">
                Web Utility / Hardware Testing Suite
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
                Display maintenance and testing often require specific light
                conditions and patterns that are hard to find in a clean,
                ad-free environment. The goal was to build a professional-grade
                suite of tools for screen testing, OLED maintenance, and hardware
                calibration.
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
                I engineered a minimalist, high-utility web suite designed for
                precision and performance.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">OLED Maintenance:</strong>{" "}
                    Developed a specialized Burn-in Fixer and stuck-pixel repair
                    tool using high-frequency color cycling.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">Precision Tools:</strong>{" "}
                    Integrated digital screen rulers and color-purity testers that
                    leverage the full resolution of the user&apos;s display.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">PWA Integration:</strong>{" "}
                    Built as a Progressive Web App to allow users to use the
                    tools offline or in a dedicated window without browser
                    distractions—ideal for hardware testing environments.
                  </span>
                </li>
                <li className="flex gap-3 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-100">The Tech Stack:</strong>{" "}
                    Next.js, Tailwind CSS, and optimized JavaScript for
                    high-frame-rate visual patterns.
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
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 text-accent">
                    <Monitor className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      OLED Burn-in Fixer
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      High-frequency color cycling to repair stuck pixels and
                      reduce burn-in artifacts on OLED displays.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 text-accent">
                    <Ruler className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      Screen Calibration
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      Digital rulers and color-purity testers that use the full
                      resolution of display hardware.
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
                A live, specialized utility (whitescreentools.com) used by
                technicians and hardware enthusiasts to verify display quality.
                This project highlights my ability to build high-performance
                tools that solve niche technical problems with a focus on speed
                and accuracy.
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
                href="https://whitescreentools.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-accent/10 px-6 py-3 font-medium text-accent transition-colors hover:bg-accent/20"
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
