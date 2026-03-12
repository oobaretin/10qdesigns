"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, BarChart3, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";

const FEATURED_IDS = ["smallprint-ai", "mood-meter-tracker", "real-taste-of-africa"];

const featuredMeta: Record<
  string,
  { badge: string; icon: typeof Bot; gradient: string }
> = {
  "smallprint-ai": {
    badge: "Next.js + Claude",
    icon: Bot,
    gradient: "from-violet-600/20 via-zinc-900 to-blue-600/20",
  },
  "mood-meter-tracker": {
    badge: "Next.js + Data Viz",
    icon: BarChart3,
    gradient: "from-teal-600/20 via-zinc-900 to-violet-600/20",
  },
  "real-taste-of-africa": {
    badge: "Next.js + PostgreSQL",
    icon: MapPin,
    gradient: "from-amber-600/20 via-zinc-900 to-orange-600/20",
  },
};

export function FeaturedWork() {
  const featured = projects.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section
      id="work"
      className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            Featured Work
          </h2>
          <p className="mt-2 text-zinc-400">
            Technical complexity, user experience, and scale.
          </p>
        </motion.div>

        <div className="space-y-8">
          {featured.map((project, index) => {
            const meta = featuredMeta[project.id];
            const Icon = meta?.icon ?? Bot;
            const isImageRight = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <Link href={project.featuredPage ?? "/work"}>
                  <div
                    className="group grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2)] md:grid-cols-2"
                  >
                    {/* Visual / Image area */}
                    <div
                      className={`flex min-h-[200px] items-center justify-center bg-gradient-to-br ${meta?.gradient ?? "from-zinc-800 to-zinc-900"} p-8 sm:min-h-[280px] md:order-2 ${isImageRight ? "md:order-1" : ""}`}
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div className="rounded-xl border border-zinc-700/50 bg-zinc-950/50 p-6 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-12 w-12 text-zinc-400 group-hover:text-accent sm:h-16 sm:w-16" />
                        </div>
                        <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-xs font-medium text-zinc-300">
                          {meta?.badge ?? project.techTags.slice(0, 2).join(" + ")}
                        </span>
                      </div>
                    </div>

                    {/* Content area */}
                    <div
                      className={`flex flex-col justify-center p-8 sm:p-10 md:order-1 ${isImageRight ? "md:order-2" : ""}`}
                    >
                      <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.techTags.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-zinc-700 bg-zinc-800/50 px-2.5 py-1 text-xs font-medium text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:gap-3">
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
