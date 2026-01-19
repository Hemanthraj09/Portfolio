"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMongodb, 
  SiGit, 
  SiTensorflow, 
  SiKeras, 
  SiScikitlearn,
  SiPandas,
  SiStreamlit,
  SiFastapi,
} from "react-icons/si";
import { FaJava, FaDatabase, FaChartBar } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { BiLineChart } from "react-icons/bi";
import { IconType } from "react-icons";

// Map skill icons to their react-icons components
const iconMap: Record<string, { Icon: IconType; color: string }> = {
  python: { Icon: SiPython, color: "#3776AB" },
  java: { Icon: FaJava, color: "#ED8B00" },
  sql: { Icon: FaDatabase, color: "#336791" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss3, color: "#1572B6" },
  api: { Icon: TbApi, color: "#4CAF50" },
  fastapi: { Icon: SiFastapi, color: "#009688" },
  streamlit: { Icon: SiStreamlit, color: "#FF4B4B" },
  pandas: { Icon: SiPandas, color: "#150458" },
  matplotlib: { Icon: BiLineChart, color: "#11557C" },
  seaborn: { Icon: BiLineChart, color: "#4C72B0" },
  powerbi: { Icon: FaChartBar, color: "#F2C811" },
  tensorflow: { Icon: SiTensorflow, color: "#FF6F00" },
  keras: { Icon: SiKeras, color: "#D00000" },
  sklearn: { Icon: SiScikitlearn, color: "#F7931E" },
  git: { Icon: SiGit, color: "#F05032" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
};

// Skill Icon component with proper SVG logos
const SkillIcon = ({ icon, name }: { icon: string; name: string }) => {
  const iconData = iconMap[icon];
  
  if (!iconData) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
        <span className="text-sm font-medium text-zinc-300">{name}</span>
      </div>
    );
  }

  const { Icon, color } = iconData;

  return (
    <div 
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
    >
      <Icon size={20} style={{ color }} />
      <span className="text-sm font-medium text-zinc-200">{name}</span>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-32">
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
            Expertise
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid - Cleaner Layout */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
                {category.title}
              </h3>

              {/* Skills in this category */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                  >
                    <SkillIcon icon={skill.icon} name={skill.name} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[120px]" />
    </section>
  );
}
