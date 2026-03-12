"use client";

import { Header } from "@/components/Header";
import { BackButton } from "@/components/BackButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, UtensilsCrossed } from "lucide-react";

const LIVE_URL = "https://afri-table.com";

export default function AfriTablePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 pt-24">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
          <BackButton />
        </div>

        {/* Hero with culinary visual placeholder */}
        <section className="relative border-b border-zinc-800/80 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-7xl">
            {/* Image placeholder - culinary presentation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex aspect-[21/9] items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950"
            >
              <div className="flex flex-col items-center gap-4 text-zinc-600">
                <UtensilsCrossed className="h-16 w-16" />
                <span className="text-sm font-medium tracking-wider">
                  CULINARY PRESENTATION
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
                Afri-Table
              </h1>
              <p className="mt-4 text-lg text-zinc-500">
                Hospitality & Culinary Platform
              </p>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-100"
              >
                Visit Live Site
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                The Challenge
              </h2>
              <p className="mt-6 leading-relaxed text-zinc-400">
                The culinary industry requires more than just a menu; it needs a
                digital environment that conveys the premium nature of the brand
                while providing functional utility. The challenge was to create a
                sleek, high-performance platform for Afri-Table that balances
                aesthetic elegance with rapid accessibility.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                The Solution
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-4 text-zinc-400">
                  <span className="mt-1.5 h-px w-8 shrink-0 bg-zinc-600" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-200">Responsive Visual Identity:</strong>{" "}
                    Built a custom frontend that adapts seamlessly across
                    devices, ensuring the high-resolution imagery and elegant
                    typography remain consistent.
                  </span>
                </li>
                <li className="flex gap-4 text-zinc-400">
                  <span className="mt-1.5 h-px w-8 shrink-0 bg-zinc-600" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-200">Modern Development Workflow:</strong>{" "}
                    Developed using Cursor for rapid iteration and Vercel for
                    high-availability hosting, ensuring zero-downtime and global
                    performance.
                  </span>
                </li>
                <li className="flex gap-4 text-zinc-400">
                  <span className="mt-1.5 h-px w-8 shrink-0 bg-zinc-600" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-200">Scalable Framework:</strong>{" "}
                    Leveraged Next.js to handle dynamic content efficiently,
                    preparing the platform for future features like integrated
                    booking or digital menu management.
                  </span>
                </li>
                <li className="flex gap-4 text-zinc-400">
                  <span className="mt-1.5 h-px w-8 shrink-0 bg-zinc-600" />
                  <span className="leading-relaxed">
                    <strong className="text-zinc-200">The Tech Stack:</strong>{" "}
                    Next.js, Tailwind CSS, TypeScript, and Vercel.
                  </span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                The Result
              </h2>
              <p className="mt-6 leading-relaxed text-zinc-400">
                A polished, live digital presence (
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-100"
                >
                  afri-table.com
                </a>
                ) that serves as a cornerstone for the brand. This project
                demonstrates my ability to build sophisticated, industry-specific
                web solutions that align technical performance with high-end
                brand standards.
              </p>
            </motion.section>

            {/* CTA */}
            <div className="flex flex-col gap-6 border-t border-zinc-800/80 pt-12">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-100"
              >
                Visit Live Site
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
