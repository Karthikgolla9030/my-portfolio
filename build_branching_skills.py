import sys

path = r'c:\Users\karth\Downloads\projects\p\src\components\sections\skills-preview.tsx'

content = """\"use client\";

import { motion } from "framer-motion";

export function SkillsPreview({ id }: { id?: string }) {
  const toolkit = [
    {
      id: "01",
      title: "PROGRAMMING",
      skills: ["Python", "SQL", "JavaScript"],
      highlight: ["Python", "SQL"]
    },
    {
      id: "02",
      title: "DATA & ANALYTICS",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
      highlight: []
    },
    {
      id: "03",
      title: "BACKEND & APIs",
      skills: ["Django", "Django REST Framework", "FastAPI"],
      highlight: []
    },
    {
      id: "04",
      title: "DATABASES & INFRASTRUCTURE",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
      highlight: []
    },
    {
      id: "05",
      title: "APPLICATION & REAL-TIME",
      skills: ["React", "WebSockets"],
      highlight: []
    },
    {
      id: "06",
      title: "DEVELOPMENT TOOLS",
      skills: ["Git", "GitHub"],
      highlight: []
    }
  ];

  const exploring = [
    "Machine Learning", "Scikit-learn", "FastAPI", "PyTorch", "LangChain", "LLMs & RAG", "AWS"
  ];

  return (
    <section id={id} className="py-24 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* HERO SECTION */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono font-bold text-muted-foreground tracking-widest uppercase block mb-6">
            Skills & Technologies
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
            The tools behind what I build.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Python, backend development, data, and the technologies I'm exploring next.
          </p>
        </div>

        {/* 01 — WHAT I WORK WITH */}
        <div className="space-y-12 pt-8 border-t border-border/40">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block mb-4">01</span>
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              What I Work With
            </h3>
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              Technologies I use across software development, data analysis, backend systems, and application projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {toolkit.map((category) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <h4 className="text-xs font-mono font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-3">
                  <span>{category.id}</span>
                  <span>{category.title}</span>
                </h4>
                <div className="flex flex-wrap items-center leading-loose pt-1">
                  {category.skills.map((skill, idx) => {
                    const isHighlight = category.highlight.includes(skill);
                    return (
                      <div key={skill} className="flex items-center">
                        <span className={`text-lg font-sans tracking-tight ${
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

        {/* 02 — HOW THE PIECES COME TOGETHER */}
        <div className="space-y-12 pt-12 border-t border-border/40">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block mb-4">02</span>
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              How the Pieces Come Together
            </h3>
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              My projects take different paths depending on the problem — from backend systems and applications to data analysis and business intelligence.
            </p>
          </div>

          {/* Technical Map */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-8"
          >
            {/* Foundation Layer */}
            <div className="flex flex-col items-center text-center space-y-4">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase">
                Foundation
              </span>
              <span className="text-2xl font-sans font-bold text-foreground tracking-tight">
                Python <span className="mx-3 text-border font-normal">·</span> SQL
              </span>
              
              {/* Connecting Lines (Desktop/Tablet) */}
              <div className="hidden md:flex flex-col items-center w-full mt-4 px-12 lg:px-32">
                <div className="w-px h-8 bg-border/60"></div>
                <div className="w-full border-t border-border/60 relative">
                  <div className="absolute top-0 left-0 w-px h-8 bg-border/60"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-border/60"></div>
                  <div className="absolute top-0 right-0 w-px h-8 bg-border/60"></div>
                </div>
              </div>

              {/* Connecting Line (Mobile) */}
              <div className="md:hidden flex flex-col items-center w-full mt-4">
                <div className="w-px h-12 bg-border/60"></div>
              </div>
            </div>

            {/* Three Paths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 max-w-5xl mx-auto mt-4 md:mt-8">
              
              {/* Path 01 */}
              <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/20 transition-colors border border-transparent hover:border-border/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">Path 01</span>
                  <h4 className="font-heading font-bold text-lg text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                    Backend & Systems
                  </h4>
                </div>
                <p className="text-sm text-foreground/80 font-sans leading-relaxed md:min-h-[60px]">
                  Building the logic, APIs, and services behind applications.
                </p>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">
                    Django · DRF · PostgreSQL
                  </p>
                </div>
              </div>

              {/* Path 02 */}
              <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/20 transition-colors border border-transparent hover:border-border/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">Path 02</span>
                  <h4 className="font-heading font-bold text-lg text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                    Applications
                  </h4>
                </div>
                <p className="text-sm text-foreground/80 font-sans leading-relaxed md:min-h-[60px]">
                  Turning backend capabilities into usable application experiences.
                </p>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">
                    React · WebSockets
                  </p>
                </div>
              </div>

              {/* Path 03 */}
              <div className="group text-center space-y-4 p-6 rounded-2xl hover:bg-secondary/20 transition-colors border border-transparent hover:border-border/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">Path 03</span>
                  <h4 className="font-heading font-bold text-lg text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                    Data & BI
                  </h4>
                </div>
                <p className="text-sm text-foreground/80 font-sans leading-relaxed md:min-h-[60px]">
                  Working with data to uncover patterns, measure performance, and communicate insights.
                </p>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">
                    Pandas · NumPy · Power BI
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* 03 — CURRENTLY EXPLORING */}
        <div className="space-y-8 pt-12 border-t border-border/40">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block mb-4">03</span>
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              Currently Exploring
            </h3>
            <p className="text-sm text-muted-foreground font-sans">
              Areas I'm spending time understanding more deeply.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3 pt-2">
            {exploring.map((tech) => (
              <span key={tech} className="text-xs md:text-sm font-sans font-medium text-muted-foreground/80 tracking-tight bg-secondary/30 px-3 py-1.5 rounded-full border border-border/50">
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

print("Updated skills-preview.tsx with branching map architecture!")
