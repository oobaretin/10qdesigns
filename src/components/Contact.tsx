"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const EMAIL = "hello@10qdesigns.com";

const socialLinks = [
  { href: "https://github.com/oobaretin/10qdesigns", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <TooltipProvider>
      <section
        id="contact"
        className="scroll-mt-24 bg-gradient-to-b from-zinc-950 to-zinc-900 px-6 py-24"
      >
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
              Let&apos;s Build Something.
            </h2>

            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
              {/* Email with Copy button */}
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-zinc-300 transition-colors hover:text-accent"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="break-all font-medium">{EMAIL}</span>
                </a>
                <Tooltip open={copied ? true : undefined}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                    >
                      <Copy className="h-4 w-4" />
                      {copied ? "Copied!" : "Copy Email"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Social icons */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition-colors hover:text-accent"
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
}
