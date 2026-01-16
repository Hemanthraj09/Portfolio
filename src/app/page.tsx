"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <Intro />
        <Skills />
        <Projects />
        <Certifications />
        <About />
        <Contact />

        {/* Footer */}
        <footer className="relative border-t border-zinc-800 bg-black py-8">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row"
            >
              <p>© {new Date().getFullYear()} Hemanth Raj</p>
              <a
                href="https://github.com/Hemanthraj09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>
        </footer>
      </main>
    </>
  );
}
