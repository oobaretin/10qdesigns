"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCaseStudyDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectCaseStudyDialog({
  project,
  open,
  onOpenChange,
}: ProjectCaseStudyDialogProps) {
  if (!project?.caseStudy) return null;

  const { role, challenge, solution, result } = project.caseStudy;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="rounded border border-zinc-700 bg-zinc-900/80 px-2 py-0.5 text-xs font-medium text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <p className="text-sm text-zinc-400">{role}</p>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <section>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              The Challenge
            </h4>
            <p className="text-zinc-300 leading-relaxed">{challenge}</p>
          </section>

          <section>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              The Solution
            </h4>
            <ul className="space-y-2">
              {solution.map((item, i) => (
                <li key={i} className="flex gap-2 text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              The Result
            </h4>
            <p className="text-zinc-300 leading-relaxed">{result}</p>
          </section>

          <Button asChild className="mt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              View Live Site
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
