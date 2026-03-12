"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            About
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Full-Stack Engineer & AI Architect. I bridge the gap between complex
            data and intuitive user interfaces—building tools that solve
            functional problems.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Read full bio →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
