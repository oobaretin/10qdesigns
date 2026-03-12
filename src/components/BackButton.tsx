"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  return (
    <div className="sticky top-24 z-30 -mb-2 pt-2">
      <motion.span
        className="inline-block"
        whileHover={{ x: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-transparent px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Work
        </Link>
      </motion.span>
    </div>
  );
}
