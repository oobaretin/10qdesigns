"use client";

import { motion } from "framer-motion";
import { Bot, Layout, Database, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Integrations & SaaS Architecture",
    description:
      "Building \"AI-wrapper\" tools and specialized reasoning systems using Claude or OpenAI. From automated document analysis to prompt engineering workflows.",
  },
  {
    icon: Layout,
    title: "Full-Stack Web Solutions",
    description:
      "High-performance, SEO-optimized web applications built with Next.js, TypeScript, and Tailwind CSS. Designed for scalability and speed.",
  },
  {
    icon: Database,
    title: "Directory & Marketplace Systems",
    description:
      "Custom data-driven platforms with robust search, filtering, and automated management. Expertise in data scraping and directory maintenance.",
  },
  {
    icon: GraduationCap,
    title: "Educational & Interactive Tools",
    description:
      "Designing digital learning modules and interactive manipulatives with a focus on intuitive user experience and pedagogical logic.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I Build
          </h2>
          <p className="mt-2 text-muted-foreground">
            The 10Q Designs Service Suite
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-lg border border-zinc-800 bg-transparent p-6 transition-shadow duration-300 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3)]"
            >
              <service.icon className="mb-4 h-8 w-8 text-zinc-400 transition-colors group-hover:text-accent" />
              <h3 className="text-lg font-bold text-zinc-100">
                {service.title}
              </h3>
              <p className="mt-2 text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
