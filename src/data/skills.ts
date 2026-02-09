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
      { name: "Kotlin", icon: "kotlin" },
      { name: "R", icon: "r" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Backend and APIs",
    skills: [
      { name: "REST APIs", icon: "api" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Docker", icon: "docker" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      { name: "Pandas", icon: "pandas" },
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "Seaborn", icon: "seaborn" },
      { name: "Tableau", icon: "tableau" },
      { name: "NumPy", icon: "numpy" },
    ],
  },
  {
    title: "ML & AI",
    skills: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Keras", icon: "keras" },
      { name: "Scikit-learn", icon: "sklearn" },
      { name: "NLTK", icon: "nltk" },
      { name: "Langflow", icon: "langflow" },
      { name: "RAG Pipelines", icon: "rag" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Android Studio", icon: "android" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Power BI", icon: "powerbi" },
    ],
  },
];
