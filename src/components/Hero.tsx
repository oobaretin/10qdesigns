"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MISSION =
  "Engineering clean, scalable solutions for complex ideas—from AI-driven SaaS to high-performance business platforms.";

export function Hero() {
  return (
    <TooltipProvider>
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-zinc-950 px-4 pt-24 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-default border-b-2 border-transparent transition-colors hover:border-zinc-600">
                  10Q Designs
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>10 Questions, One Solution.</p>
              </TooltipContent>
            </Tooltip>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-xl text-zinc-400 sm:text-2xl"
          >
            {MISSION}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <Button asChild size="lg" className="group gap-2">
              <Link href="#work">
                View Featured Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
}
