"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            A curated laboratory of personal work and ongoing explorations
          </p>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Gradient decorations */}
      <div className="pointer-events-none fixed right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none fixed left-0 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[100px]" />
    </main>
  );
}
