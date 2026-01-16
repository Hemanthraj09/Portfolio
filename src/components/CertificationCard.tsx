"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";
import { Certification } from "@/data/certifications";
import { useState } from "react";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Encode image path for URLs with spaces/special characters
  const encodedImagePath = encodeURI(certification.image);

  const categoryColors: Record<string, string> = {
    course: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    hackathon: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    leadership: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  };

  const categoryLabels: Record<string, string> = {
    course: "Course",
    hackathon: "Hackathon",
    leadership: "Leadership & Participation",
  };

  const isPdf = certification.type === "pdf";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-xl border border-divider bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Certificate Image/Preview */}
        <div 
          className="relative aspect-[4/3] overflow-hidden bg-zinc-800 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          {isPdf ? (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
              <FileText size={48} className="mb-2 text-accent/60" />
              <span className="text-sm text-muted">PDF Certificate</span>
            </div>
          ) : (
            <img
              src={encodedImagePath}
              alt={certification.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-white">
              <ExternalLink size={16} />
              View Certificate
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category badge */}
          <span className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[certification.category]}`}>
            {categoryLabels[certification.category]}
          </span>
          
          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {certification.title}
          </h3>
          
          {/* Issuer & Date */}
          <div className="flex items-center justify-between text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Award size={14} className="text-accent" />
              {certification.issuer}
            </span>
            <span>{certification.date}</span>
          </div>
        </div>
      </motion.div>

      {/* Modal for viewing certificate */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-xl bg-zinc-900 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-zinc-800 p-2 text-white transition-colors hover:bg-zinc-700"
            >
              ✕
            </button>
            {isPdf ? (
              <iframe
                src={encodedImagePath}
                className="h-[80vh] w-[80vw] max-w-4xl rounded-lg"
                title={certification.title}
              />
            ) : (
              <img
                src={encodedImagePath}
                alt={certification.title}
                className="max-h-[85vh] w-auto rounded-lg"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
