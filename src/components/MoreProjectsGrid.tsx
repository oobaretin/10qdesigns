"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

const FEATURED_IDS = ["smallprint-ai", "mood-meter-tracker", "real-taste-of-africa"];
const MORE_ORDER = [
  "white-screen-tools",
  "afri-table",
  "inventory-portal",
  "nikis-hair-braiding",
  "makola-marketplace",
];

export function MoreProjectsGrid() {
  const byId = new Map(projects.map((p) => [p.id, p]));
  const moreProjects = MORE_ORDER.map((id) => byId.get(id)).filter(
    (p): p is NonNullable<typeof p> => !!p
  );

  return (
    <section className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            More Projects
          </h2>
          <p className="mt-2 text-zinc-400">
            Additional builds across utilities, commerce, and business platforms.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {moreProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={project.featuredPage ?? project.liveLink}>
                <div className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 sm:p-6">
                  <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techTags.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-zinc-700 bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors group-hover:text-accent">
                    {project.featuredPage ? "View Case Study" : "View Project"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
