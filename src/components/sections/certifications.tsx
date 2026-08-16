"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { certifications } from "@/data";

// Custom Mock Cert Visual
function CertVisual({ title, issuer }: { title: string; issuer: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-lg bg-secondary/80 overflow-hidden border border-border flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="absolute inset-4 border bg-background/90 flex flex-col items-center justify-between p-4 rounded-lg shadow-sm">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>

        <div className="text-center space-y-1.5 max-w-[160px]">
          <h4 className="text-xs font-heading font-extrabold text-foreground uppercase tracking-wider line-clamp-2 leading-snug">
            {title}
          </h4>
          <span className="block text-[10px] font-mono text-muted-foreground font-bold uppercase tracking-widest">
            {issuer}
          </span>
        </div>

        <span className="text-[9px] font-bold font-mono text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
          VERIFIED
        </span>
      </div>
    </div>
  );
}

export function Certifications({ id }: { id?: string }) {
  const categories = ["All", "Data Science", "AI/ML", "Cloud", "Others"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Achievements
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-sans max-w-md">
            Professional specializations and learning credentials obtained to validate technical proficiency.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto py-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-border"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col gap-6"
              >
                {/* Visual Shell */}
                <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                  <CertVisual title={cert.title} issuer={cert.issuer} />
                </div>
                
                {/* Information Metadata */}
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-sans">
                    <span>{cert.issuer}</span>
                    <span className="font-mono">{cert.date}</span>
                  </div>
                </div>

                {/* Verification Anchor */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>View Credential</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
