"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
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
