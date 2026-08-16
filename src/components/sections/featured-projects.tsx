"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import { projects } from "@/data";

// Custom Github Icon since Lucide brand icons are removed
function GithubIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function FeaturedProjects({ id }: { id?: string }) {
  const router = useRouter();
  // Display the first 4 projects from static database
  const featured = projects.slice(0, 4);

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors pb-1 border-b border-primary/30"
          >
            <span>View all projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2x2 Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col space-y-6"
            >
              {/* Media Block (Compact Image Area) */}
              <div 
                className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden rounded-[1rem] bg-secondary/10 border border-border/60 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-md cursor-pointer"
                onClick={() => router.push(`/projects/${project.slug}`)}
              >
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-mono text-[10px] uppercase tracking-widest">
                    Visual pending
                  </div>
                )}
              </div>
                
              {/* Info Block */}
              <div className="flex flex-col space-y-4 px-1">
                {/* Header & Subtitle */}
                <div className="space-y-1.5">
                  <h3 
                    className="font-heading font-extrabold text-2xl md:text-3xl text-foreground cursor-pointer group-hover:text-primary transition-colors"
                    onClick={() => router.push(`/projects/${project.slug}`)}
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.15em]">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-sm font-sans text-muted-foreground leading-relaxed max-w-lg pr-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/40 border border-border/40 text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50 px-2 py-1">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center gap-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary font-bold text-[13px] tracking-wide hover:gap-2 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex items-center gap-4 text-muted-foreground/50 border-l border-border/60 pl-5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                          title="Live Demo"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
