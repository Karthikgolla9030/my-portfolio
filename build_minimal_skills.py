import sys

path = r'c:\Users\karth\Downloads\projects\p\src\components\sections\skills-preview.tsx'

content = """\"use client\";

import { motion } from "framer-motion";

export function SkillsPreview({ id }: { id?: string }) {
  const toolkit = [
    {
      id: "01",
      title: "PROGRAMMING",
      skills: [
        { name: "Python", status: "core" },
        { name: "SQL", status: "core" },
        { name: "JavaScript", status: "applied" }
      ]
    },
    {
      id: "02",
      title: "DATA & ANALYTICS",
      skills: [
        { name: "Pandas", status: "applied" },
        { name: "NumPy", status: "applied" },
        { name: "Matplotlib", status: "applied" },
        { name: "Seaborn", status: "applied" },
        { name: "Power BI", status: "applied" }
      ]
    },
    {
      id: "03",
      title: "BACKEND",
      skills: [
        { name: "Django", status: "applied" },
        { name: "Django REST Framework", status: "applied" },
        { name: "FastAPI", status: "exploring" }
      ]
    },
    {
      id: "04",
      title: "MACHINE LEARNING & AI",
      skills: [
        { name: "Machine Learning", status: "exploring" },
        { name: "Scikit-learn", status: "exploring" },
        { name: "PyTorch", status: "exploring" },
        { name: "LangChain", status: "exploring" },
        { name: "LLMs & RAG", status: "exploring" }
      ]
    },
    {
      id: "05",
      title: "DATABASES",
      skills: [
        { name: "MySQL", status: "applied" },
        { name: "PostgreSQL", status: "applied" },
        { name: "SQLite", status: "applied" },
        { name: "MongoDB", status: "applied" }
      ]
    },
    {
      id: "06",
      title: "TOOLS & CLOUD",
      skills: [
        { name: "Git", status: "applied" },
        { name: "GitHub", status: "applied" },
        { name: "AWS", status: "exploring" }
      ]
    }
  ];

  const exploring = [
    "FastAPI", "Machine Learning", "PyTorch", "LangChain", "LLMs & RAG", "AWS"
  ];

  return (
    <section id={id} className="py-24 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HERO SECTION */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-mono font-bold text-muted-foreground tracking-widest uppercase block mb-6">
            Skills & Technologies
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
            The tools behind my work.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Python, data, backend development, and the technologies I'm exploring.
          </p>
        </div>

        {/* TECHNICAL TOOLKIT */}
        <div className="space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/60 pb-6">
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              Technical Toolkit
            </h3>
            
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" />
                <span className="text-foreground">Core</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                <span className="text-muted-foreground">Applied</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/40" />
                <span className="text-primary">Exploring</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-4">
            {toolkit.map((category, i) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="space-y-4"
              >
                <h4 className="text-xs font-mono font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-3">
                  <span>{category.id}</span>
                  <span>{category.title}</span>
                </h4>
                
                <div className="flex flex-wrap items-center leading-loose">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="flex items-center">
                      <span className={`text-lg md:text-xl font-heading font-bold tracking-tight ${
                        skill.status === 'core' ? 'text-foreground' : 
                        skill.status === 'applied' ? 'text-foreground/70' : 
                        'text-primary/80'
                      }`}>
                        {skill.name}
                        {skill.status === 'core' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground ml-1.5 mb-1" />}
                      </span>
                      {idx < category.skills.length - 1 && (
                        <span className="mx-3 text-border text-lg">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CURRENTLY EXPLORING */}
        <div className="border border-border/60 rounded-2xl p-8 bg-secondary/20 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 justify-between">
          <div className="space-y-1 shrink-0">
            <h4 className="font-heading font-bold text-base text-foreground uppercase tracking-tight">Currently Exploring</h4>
            <p className="text-xs text-muted-foreground font-sans">Building deeper familiarity with the technologies below.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 text-sm font-mono font-bold text-primary">
            {exploring.map((tech) => (
              <span key={tech} className="bg-primary/5 px-3 py-1.5 rounded-md border border-primary/10">
                {tech}
              </span>
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

print("Updated skills-preview.tsx with minimalist redesign!")
