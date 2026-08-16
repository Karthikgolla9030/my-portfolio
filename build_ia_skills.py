import sys

path = r'c:\Users\karth\Downloads\projects\p\src\components\sections\skills-preview.tsx'

content = """\"use client\";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function SkillsPreview({ id }: { id?: string }) {
  const toolkit = [
    {
      id: "PROGRAMMING",
      skills: ["Python", "SQL", "JavaScript"],
      highlight: ["Python", "SQL"]
    },
    {
      id: "DATA & ANALYTICS",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
      highlight: []
    },
    {
      id: "BACKEND & APIs",
      skills: ["Django", "Django REST Framework"],
      highlight: []
    },
    {
      id: "DATABASES & TOOLS",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Git", "GitHub"],
      highlight: []
    },
    {
      id: "APPLICATION DEVELOPMENT",
      skills: ["React", "WebSockets", "Redis"],
      highlight: []
    }
  ];

  const exploring = [
    "FastAPI", "Machine Learning", "Scikit-learn", "PyTorch", "LangChain", "LLMs & RAG", "AWS"
  ];

  return (
    <section id={id} className="py-24 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HERO SECTION */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono font-bold text-muted-foreground tracking-widest uppercase block mb-6">
            Skills & Technologies
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
            The tools behind my work.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Python, data, backend development, and the technologies I'm learning next.
          </p>
        </div>

        {/* 01 — WHAT I WORK WITH */}
        <div className="space-y-10 pt-12 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block mb-4">01</span>
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              What I Work With
            </h3>
          </div>

          <div className="space-y-10">
            {toolkit.map((category) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <h4 className="text-xs font-mono font-bold text-muted-foreground/60 uppercase tracking-widest">
                  {category.id}
                </h4>
                <div className="flex flex-wrap items-center leading-loose">
                  {category.skills.map((skill, idx) => {
                    const isHighlight = category.highlight.includes(skill);
                    return (
                      <div key={skill} className="flex items-center">
                        <span className={`text-lg md:text-xl font-sans tracking-tight ${
                          isHighlight ? 'text-foreground font-semibold' : 'text-foreground/70 font-medium'
                        }`}>
                          {skill}
                        </span>
                        {idx < category.skills.length - 1 && (
                          <span className="mx-3 text-border font-bold">·</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 02 — HOW THE STACK FITS TOGETHER */}
        <div className="space-y-10 pt-12 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block mb-4">02</span>
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              How the Stack Fits Together
            </h3>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start space-y-6 pt-4"
          >
            {/* Step 1 */}
            <div className="space-y-2">
              <span className="text-lg md:text-xl font-sans font-semibold text-foreground tracking-tight">Python</span>
            </div>
            <ArrowDown className="text-border ml-4" size={20} />
            
            {/* Step 2 */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest block mb-1">Backend</span>
              <span className="text-lg md:text-xl font-sans font-medium text-foreground/70 tracking-tight">Django · Django REST Framework</span>
            </div>
            <ArrowDown className="text-border ml-4" size={20} />

            {/* Step 3 */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest block mb-1">Data</span>
              <span className="text-lg md:text-xl font-sans font-medium text-foreground/70 tracking-tight">Pandas · NumPy · Matplotlib · Seaborn</span>
            </div>
            <ArrowDown className="text-border ml-4" size={20} />

            {/* Step 4 */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest block mb-1">Databases</span>
              <span className="text-lg md:text-xl font-sans font-medium text-foreground/70 tracking-tight">MySQL · PostgreSQL · SQLite</span>
            </div>
            <ArrowDown className="text-border ml-4" size={20} />

            {/* Step 5 */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest block mb-1">Applications</span>
              <span className="text-lg md:text-xl font-sans font-medium text-foreground/70 tracking-tight">React · WebSockets · Redis</span>
            </div>
          </motion.div>
        </div>

        {/* 03 — CURRENTLY LEARNING */}
        <div className="space-y-8 pt-12 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block mb-4">03</span>
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              Currently Learning
            </h3>
            <p className="text-sm text-muted-foreground font-sans">
              Areas I'm actively building deeper familiarity with.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center leading-loose pt-2">
            {exploring.map((tech, idx) => (
              <div key={tech} className="flex items-center">
                <span className="text-base md:text-lg font-sans font-medium text-muted-foreground/60 tracking-tight">
                  {tech}
                </span>
                {idx < exploring.length - 1 && (
                  <span className="mx-3 text-border font-bold">·</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated skills-preview.tsx with information architecture redesign!")
