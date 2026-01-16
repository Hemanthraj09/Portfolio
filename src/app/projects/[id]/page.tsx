"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-20 pb-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Project Image */}
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl border border-card-border md:h-80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Title & Tags */}
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Project
          </p>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          
          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-divider bg-transparent px-6 py-3 font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Github size={18} />
                View Source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-black transition-all hover:bg-accent-hover"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-xl font-semibold text-foreground">About This Project</h2>
          
          {/* Highlighted Callout */}
          {project.highlight && (
            <div className="mb-6 rounded-xl border border-accent/30 bg-accent/10 p-4">
              <p className="font-medium text-accent">
                {project.highlight}
              </p>
            </div>
          )}
          
          <p className="text-lg leading-relaxed text-muted">
            {project.fullDescription || project.description}
          </p>
        </motion.section>

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-xl font-semibold text-foreground">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Tech Stack Section */}
        {project.techDetails && project.techDetails.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-xl font-semibold text-foreground">Technology Stack</h2>
            <ul className="space-y-3">
              {project.techDetails.map((tech, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-secondary" />
                  <span className="text-muted">{tech}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Video Demo Section */}
        {project.video && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
              <Play size={20} className="text-accent" />
              Video Demo
            </h2>
            <div className="overflow-hidden rounded-2xl border border-card-border bg-card-bg">
              <video
                src={project.video}
                controls
                className="w-full"
                poster={project.image}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.section>
        )}
      </div>

      {/* Gradient decorations */}
      <div className="pointer-events-none fixed right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none fixed left-0 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[100px]" />
    </main>
  );
}
