"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xaqqnlze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-zinc-900">
      {/* Top divider */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Contact
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left side - Info */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Let&apos;s Connect
              </h3>
              <p className="mb-8 text-zinc-400 leading-relaxed">
                I&apos;m always open to conversations around data, machine learning, and real-world 
                problem solving. If you&apos;re building something meaningful with data, feel free to reach out.
              </p>

              {/* Contact Links */}
              <div className="space-y-4">
                <a
                  href="mailto:hemanthrajmv@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail size={18} />
                  <span>hemanthrajmv@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Hemanthraj09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hemanthrajmv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-3 text-accent transition-colors hover:text-accent-hover"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-accent focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-accent focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-accent focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-lg bg-accent-secondary py-3 font-medium text-white transition-all hover:bg-accent-secondary/90 hover:shadow-lg hover:shadow-accent-secondary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-sm mt-3">
                    <CheckCircle size={16} />
                    <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-3">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
