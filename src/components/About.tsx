"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-zinc-950/50">
      {/* Top divider */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-divider to-transparent" />

      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            About Me
          </p>
          <h2 className="mb-10 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Background
          </h2>

          <div className="space-y-6 text-muted leading-relaxed text-base md:text-lg">
            <p>
              I&apos;m a Computer Science (Data Science) undergraduate at BMS College of Engineering, 
              graduating in 2027, with a strong interest in{" "}
              <span className="text-foreground font-medium">working with data and building intelligent systems</span>. 
              What truly drives me is the desire to understand how things work at a fundamental level.
            </p>

            <p>
              Rather than jumping straight to conclusions, I focus on the concepts, assumptions, and 
              logic behind models, algorithms, and data-driven decisions. This approach helps me build 
              solutions that are not only effective but also{" "}
              <span className="text-accent">interpretable and reliable</span>.
            </p>

            <p>
              I enjoy exploring datasets, performing exploratory data analysis, and experimenting with 
              machine learning models to uncover patterns and insights.
            </p>

            <p>
              I&apos;m interested in opportunities that allow me to work on impactful problems, learn 
              from experienced teams, and contribute to data-driven systems that make it to production.
            </p>
          </div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 pt-8 border-t border-divider"
          >
            <div className="flex items-center gap-3 text-muted">
              <GraduationCap size={20} className="text-accent" />
              <span>
                B.E. Computer Science (Data Science) · BMS College of Engineering · Graduating 2027
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[150px]" />
    </section>
  );
}
