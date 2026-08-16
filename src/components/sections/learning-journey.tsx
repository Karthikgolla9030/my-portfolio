"use client";

import { motion } from "framer-motion";

export function LearningJourney({ id }: { id?: string }) {
  const exploring = [
    "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "AI", "Agentic AI"
  ];

  return (
    <section id={id} className="py-24 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono font-bold text-muted-foreground tracking-widest uppercase block mb-6">
            Current Direction
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
            What I'm exploring next.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            Deepening my backend foundation while exploring machine learning and modern AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-border/40">
          
          {/* 01 DEEPENING */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group space-y-4"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">01 — DEEPENING</span>
              <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                Backend Development
              </h3>
            </div>
            
            <p className="text-base text-muted-foreground font-sans leading-relaxed md:min-h-[60px]">
              Strengthening backend fundamentals, APIs, application architecture, and the systems behind the products I build.
            </p>
            
            <div className="pt-2">
              <p className="text-sm font-mono text-muted-foreground/80 leading-relaxed">
                APIs · Architecture · Application Systems
              </p>
            </div>
          </motion.div>

          {/* 02 EXPLORING */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="space-y-1 mb-6">
              <span className="text-[10px] font-mono font-bold text-muted-foreground/60 tracking-widest uppercase block">02 — EXPLORING</span>
            </div>
            
            <div className="flex flex-wrap items-center leading-loose pt-1 gap-y-2">
              {exploring.map((tech, idx) => (
                <div key={tech} className="flex items-center group">
                  <span className="text-lg md:text-xl font-sans text-foreground/80 font-medium tracking-tight group-hover:text-foreground transition-colors cursor-default">
                    {tech}
                  </span>
                  {idx < exploring.length - 1 && (
                    <span className="mx-3 text-border font-bold">·</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
