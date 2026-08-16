import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "Python", category: "Languages", proficiency: "Expert", percentage: 95, iconName: "python", status: "CORE", evidence: "Projects · Backend · Data" },
  { name: "JavaScript", category: "Languages", proficiency: "Advanced", percentage: 85, iconName: "javascript", status: "WORKING KNOWLEDGE", evidence: "Frontend · Projects" },
  { name: "SQL", category: "Languages", proficiency: "Advanced", percentage: 88, iconName: "sql", status: "CORE", evidence: "Database · Analytics" },
  
  { name: "Django", category: "Frameworks", proficiency: "Intermediate", percentage: 78, iconName: "django", status: "APPLIED", evidence: "Projects · REST APIs" },
  { name: "Django REST Framework", category: "Frameworks", proficiency: "Intermediate", percentage: 75, iconName: "django", status: "APPLIED", evidence: "Backend APIs" },
  { name: "FastAPI", category: "Frameworks", proficiency: "Intermediate", percentage: 75, iconName: "fastapi", status: "LEARNING", evidence: "Backend Architecture" },
  
  { name: "Pandas", category: "Frameworks", proficiency: "Advanced", percentage: 85, iconName: "pandas", status: "APPLIED", evidence: "Data Analysis" },
  { name: "NumPy", category: "Frameworks", proficiency: "Advanced", percentage: 85, iconName: "numpy", status: "APPLIED", evidence: "Data Science" },
  { name: "Matplotlib", category: "Frameworks", proficiency: "Intermediate", percentage: 80, iconName: "matplotlib", status: "APPLIED", evidence: "Data Visualization" },
  { name: "Scikit-learn", category: "Frameworks", proficiency: "Advanced", percentage: 80, iconName: "scikitlearn", status: "APPLIED", evidence: "Machine Learning" },
  { name: "PyTorch", category: "Frameworks", proficiency: "Intermediate", percentage: 72, iconName: "pytorch", status: "LEARNING", evidence: "Deep Learning" },
  { name: "LangChain", category: "Frameworks", proficiency: "Intermediate", percentage: 76, iconName: "langchain", status: "EXPLORING", evidence: "AI Integration" },
  
  { name: "MySQL", category: "Databases", proficiency: "Advanced", percentage: 84, iconName: "mysql", status: "APPLIED", evidence: "Relational DBs" },
  { name: "PostgreSQL", category: "Databases", proficiency: "Intermediate", percentage: 78, iconName: "postgresql", status: "APPLIED", evidence: "Projects" },
  { name: "SQLite", category: "Databases", proficiency: "Advanced", percentage: 85, iconName: "sqlite", status: "APPLIED", evidence: "Local Development" },
  { name: "MongoDB", category: "Databases", proficiency: "Intermediate", percentage: 70, iconName: "mongodb", status: "WORKING KNOWLEDGE", evidence: "NoSQL DBs" },
  
  { name: "PowerBI", category: "Tools", proficiency: "Advanced", percentage: 86, iconName: "powerbi", status: "APPLIED", evidence: "Internship · Analytics" },
  { name: "Git", category: "Tools", proficiency: "Advanced", percentage: 88, iconName: "git", status: "APPLIED", evidence: "Version Control" },
  { name: "GitHub", category: "Tools", proficiency: "Advanced", percentage: 88, iconName: "github", status: "APPLIED", evidence: "Source Management" },
  { name: "AWS", category: "Cloud", proficiency: "Intermediate", percentage: 70, iconName: "aws", status: "LEARNING", evidence: "Cloud Deployment" },
  
  { name: "Machine Learning", category: "Concepts", proficiency: "Advanced", percentage: 85, iconName: "aiml", status: "APPLIED", evidence: "Predictive Models" },
  { name: "LLMs & RAG", category: "Concepts", proficiency: "Advanced", percentage: 80, iconName: "llmrag", status: "EXPLORING", evidence: "AI Engineering" }
];
