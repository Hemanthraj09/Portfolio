"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CertificationCard from "./CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  // Show only top 3 featured certifications on home page
  const featuredCertifications = certifications.slice(0, 3);

  return (
    <section id="certifications" className="relative overflow-hidden py-32">
      {/* Top divider line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-divider to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Achievements
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Certifications
          </h2>
        </motion.div>

        {/* Featured Certifications Grid - 3 columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCertifications.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>

        {/* View All Certifications Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-2 rounded-full border border-divider bg-transparent px-8 py-4 font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
          >
            View all certifications
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
    </section>
  );
}
