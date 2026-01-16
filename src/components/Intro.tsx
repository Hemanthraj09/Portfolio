"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Intro() {
  return (
    <section className="relative flex min-h-screen items-center py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Hemanth Raj
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={itemVariants}
            className="mb-8 text-xl font-medium text-muted md:text-2xl"
          >
            Data Science & Machine Learning Enthusiast
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            I&apos;m a data science student passionate about turning data into actionable insights.
            I enjoy exploring datasets, building machine learning models, and learning how to deploy data-driven solutions that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-black transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-divider bg-transparent px-8 py-4 font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/Hemanthraj09", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hemanthrajmv", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hemanthrajmv@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-all duration-300 hover:text-accent hover:scale-110"
                aria-label={label}
              >
                <Icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[100px]" />
    </section>
  );
}
