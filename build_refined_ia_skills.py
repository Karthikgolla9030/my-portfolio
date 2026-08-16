import sys

path = r'c:\Users\karth\Downloads\projects\p\src\components\sections\skills-preview.tsx'

content = """\"use client\";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
              I work across the layers that turn an idea into something usable — from writing the logic to connecting data, services, and applications.
            </p>
          </div>

          {/* Desktop Horizontal Flow */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-start justify-between gap-4 pt-8"
          >
            {/* 01 CODE */}
            <div className="flex-1 space-y-4 pr-6 border-r border-border/40 relative">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">01</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">CODE</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed min-h-[40px]">
                Write the logic.
              </p>
              <div className="pt-2 border-t border-border/40">
                <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">Python · SQL · JavaScript</p>
              </div>
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-background">
                <ArrowRight className="text-border" size={20} />
              </div>
            </div>

            {/* 02 BUILD */}
            <div className="flex-1 space-y-4 px-6 border-r border-border/40 relative">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">02</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">BUILD</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed min-h-[40px]">
                Turn logic into applications and APIs.
              </p>
              <div className="pt-2 border-t border-border/40">
                <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">Django · Django REST Framework</p>
              </div>
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-background">
                <ArrowRight className="text-border" size={20} />
              </div>
            </div>

            {/* 03 CONNECT */}
            <div className="flex-1 space-y-4 px-6 border-r border-border/40 relative">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">03</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">CONNECT</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed min-h-[40px]">
                Work with databases, services, and real-time communication.
              </p>
              <div className="pt-2 border-t border-border/40">
                <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">PostgreSQL · MySQL · Redis · WebSockets</p>
              </div>
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-background">
                <ArrowRight className="text-border" size={20} />
              </div>
            </div>

            {/* 04 ANALYZE */}
            <div className="flex-1 space-y-4 pl-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">04</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">ANALYZE</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed min-h-[40px]">
                Use data to understand what is happening and communicate it clearly.
              </p>
              <div className="pt-2 border-t border-border/40">
                <p className="text-xs font-mono text-muted-foreground/80 leading-relaxed">Pandas · NumPy · Power BI</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile/Tablet Vertical Flow */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:hidden flex flex-col items-start space-y-8 pt-4 pl-4 border-l border-border/40 relative"
          >
            {/* 01 CODE */}
            <div className="space-y-2 relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">01</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">CODE</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed">
                Write the logic.
              </p>
              <p className="text-xs font-mono text-muted-foreground/80 pt-1">Python · SQL · JavaScript</p>
            </div>
            
            {/* 02 BUILD */}
            <div className="space-y-2 relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">02</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">BUILD</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed">
                Turn logic into applications and APIs.
              </p>
              <p className="text-xs font-mono text-muted-foreground/80 pt-1">Django · Django REST Framework</p>
            </div>

            {/* 03 CONNECT */}
            <div className="space-y-2 relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">03</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">CONNECT</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed">
                Work with databases, services, and real-time communication.
              </p>
              <p className="text-xs font-mono text-muted-foreground/80 pt-1">PostgreSQL · MySQL · Redis · WebSockets</p>
            </div>

            {/* 04 ANALYZE */}
            <div className="space-y-2 relative">
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border" />
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">04</span>
                <h4 className="font-heading font-bold text-xl text-foreground uppercase tracking-tight">ANALYZE</h4>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed">
                Use data to understand what is happening and communicate it clearly.
              </p>
              <p className="text-xs font-mono text-muted-foreground/80 pt-1">Pandas · NumPy · Power BI</p>
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

print("Updated skills-preview.tsx with refined information architecture redesign!")
