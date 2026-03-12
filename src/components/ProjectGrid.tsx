"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCaseStudyDialog } from "@/components/ProjectCaseStudyDialog";
import { projects, type Project } from "@/lib/projects";

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={
                  project.caseStudy && !project.featuredPage
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
