"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5"
    >
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-zinc-900 to-black">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-zinc-800 transition-all duration-500 group-hover:text-accent/20 group-hover:scale-110">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Quick actions - always visible on mobile, hover-reveal on desktop */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 md:opacity-0 transition-all duration-300 md:group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all hover:bg-accent hover:text-black"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all hover:bg-accent hover:text-black"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-divider px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-divider pt-5">
          <a
            href={`/projects/${project.id}`}
            className="flex items-center gap-1 text-sm font-medium text-accent transition-all hover:gap-2"
          >
            <span>Details</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
