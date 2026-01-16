// Skills data organized by category
export interface Skill {
  name: string;
  icon: string; // We'll use simple text icons or SVG paths
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Web & APIs",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "REST APIs", icon: "api" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Streamlit", icon: "streamlit" },
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      { name: "Pandas", icon: "pandas" },
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "Seaborn", icon: "seaborn" },
      { name: "Power BI", icon: "powerbi" },
    ],
  },
  {
    title: "ML & AI",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Keras", icon: "keras" },
      { name: "Scikit-learn", icon: "sklearn" },
      { name: "NLTK", icon: "nltk" },
    ],
  },
  {
    title: "Tools & Databases",
    skills: [
      { name: "Git", icon: "git" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
];
