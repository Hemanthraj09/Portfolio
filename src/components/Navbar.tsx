"use client";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <a href="#" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
            HR
          </a>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors animated-underline"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-black transition-all hover:bg-accent-hover"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile: Resume button always visible */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition-all hover:bg-accent-hover"
            >
              <Download size={14} />
              Resume
            </a>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-zinc-800 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted hover:text-foreground transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
