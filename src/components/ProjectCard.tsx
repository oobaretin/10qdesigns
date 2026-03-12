"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const hasFeaturedPage = !!project.featuredPage;
  const hasCaseStudy = !!project.caseStudy && !hasFeaturedPage;

  const cardContent = (
    <>
      <div className="relative aspect-video p-6">
        <h3 className="text-lg font-medium text-zinc-100 transition-colors group-hover:text-white">
          {project.title}
        </h3>
        <ExternalLink className="absolute right-6 top-6 h-5 w-5 text-zinc-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

        {/* Overlay: tech tags revealed on hover */}
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 bg-zinc-950/90 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.techTags.map((tech) => (
            <span
              key={tech}
              className="rounded border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {hasFeaturedPage ? (
        <Link href={project.featuredPage!}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative block overflow-hidden rounded-xl border border-zinc-800 bg-transparent transition-shadow duration-300 hover:border-zinc-600 hover:shadow-[0_0_24px_rgba(82,82,91,0.2)]"
          >
            {cardContent}
          </motion.div>
        </Link>
      ) : hasCaseStudy ? (
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onClick}
          onKeyDown={(e) => e.key === "Enter" && onClick?.()}
          whileHover={{ scale: 1.02 }}
          className="group relative block cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-transparent transition-shadow duration-300 hover:border-zinc-600 hover:shadow-[0_0_24px_rgba(82,82,91,0.2)]"
        >
          {cardContent}
        </motion.div>
      ) : (
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="group relative block overflow-hidden rounded-xl border border-zinc-800 bg-transparent transition-shadow duration-300 hover:border-zinc-600 hover:shadow-[0_0_24px_rgba(82,82,91,0.2)]"
        >
          {cardContent}
        </motion.a>
      )}
    </motion.div>
  );
}
