"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCaseStudyDialog } from "@/components/ProjectCaseStudyDialog";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const filterOptions = [
    { value: "all" as const, label: "All" },
    ...projectCategories,
  ];

  return (
    <section id="work" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Filter navigation */}
        <nav className="mb-12 flex flex-wrap gap-1 border-b border-zinc-800">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={cn(
                "relative px-4 py-3 text-sm font-medium transition-colors",
                filter === opt.value
                  ? "text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {opt.label}
              {filter === opt.value && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-zinc-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={
                  project.caseStudy
                    ? () => setSelectedProject(project)
                    : undefined
                }
              />
            ))}
          </AnimatePresence>
        </div>

        <ProjectCaseStudyDialog
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
