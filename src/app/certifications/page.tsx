"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";
import ParticleBackground from "@/components/ParticleBackground";

type Category = "all" | "course" | "hackathon" | "leadership";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "course", label: "Courses" },
  { value: "hackathon", label: "Hackathons" },
  { value: "leadership", label: "Leadership & Participation" },
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredCertifications = activeCategory === "all"
    ? certifications
    : certifications.filter((cert) => cert.category === activeCategory);

  return (
    <>
      <ParticleBackground />
      <main className="relative z-10 min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back button & Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Certifications
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              A collection of certifications, achievements, and recognitions from
              courses, hackathons, and leadership roles.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} className="text-muted" />
              <span className="text-sm text-muted">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.value
                      ? "bg-accent text-black"
                      : "border border-divider bg-transparent text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCertifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredCertifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-muted"
            >
              No certifications found in this category.
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-divider pt-12 md:grid-cols-4"
          >
            {[
              { label: "Total", value: certifications.length },
              { label: "Courses", value: certifications.filter((c) => c.category === "course").length },
              { label: "Hackathons", value: certifications.filter((c) => c.category === "hackathon").length },
              { label: "Leadership", value: certifications.filter((c) => c.category === "leadership").length },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
}
