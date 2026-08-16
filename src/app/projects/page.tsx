"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, ArrowRight, FilterX } from "lucide-react";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";

// Custom Github Icon
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const categories = ["All", "Full Stack", "AI/ML", "Data Science", "Analytics"];
  
  // Extract all distinct technologies tags
  const allTechs = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    // Search query match
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category match
    const matchesCategory =
      selectedCategory === "All" ||
      project.tags.includes(selectedCategory) ||
      (selectedCategory === "AI/ML" && (project.tags.includes("AI/ML") || project.tags.includes("LLM") || project.tags.includes("LLMs")));

    // Technology match
    const matchesTech =
      selectedTech === "All" ||
      project.tags.includes(selectedTech);

    return matchesSearch && matchesCategory && matchesTech;
  });

  return (
    <main className="flex-1 w-full bg-background min-h-screen py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header (Compact) */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
            Projects
          </h1>
          <p className="text-base text-muted-foreground font-sans max-w-2xl">
            A comprehensive catalog of systems, machine learning utilities, and dashboards I have built.
          </p>
        </div>

        {/* Unified Search & Filter Toolbar */}
        <div className="border border-border/60 bg-secondary/10 rounded-2xl p-4 md:p-5 space-y-5 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-2/3 lg:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, stack, keywords..."
                className="w-full bg-background border border-border/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl pl-12 pr-4 py-3 text-sm text-foreground focus:outline-none transition-all shadow-sm"
              />
            </div>

            {/* Tech Stack Dropdown */}
            <div className="w-full md:w-auto shrink-0 relative">
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full md:w-48 bg-background border border-border/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl py-3 pl-4 pr-10 text-sm text-foreground focus:outline-none transition-all shadow-sm appearance-none cursor-pointer font-medium"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23171a18%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem top 50%",
                  backgroundSize: "0.65rem auto",
                }}
              >
                <option value="All">Filter by Tech...</option>
                {allTechs.filter(t => t !== "All").map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-wider transition-all px-4 py-2 rounded-lg ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border/60 text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List (Horizontal Editorial Layout) */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col md:flex-row gap-8 lg:gap-14 items-center md:items-start py-4 border-b border-border/40 pb-16 last:border-0"
              >
                {/* Left: Information (40%) */}
                <div className="w-full md:w-[45%] lg:w-[40%] space-y-6 shrink-0 order-2 md:order-1">
                  
                  {/* Number & Title */}
                  <div className="space-y-1">
                    <span className="text-muted-foreground/50 font-mono text-sm font-semibold tracking-widest block mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    {project.subtitle && (
                      <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.15em] pt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm md:text-base pr-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="bg-secondary/40 border border-border/40 text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50 px-2 py-1">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-foreground font-bold text-sm tracking-wide border-b-2 border-transparent hover:border-primary hover:text-primary transition-all pb-0.5"
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex items-center gap-4 text-muted-foreground/40 border-l border-border/60 pl-6">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub Repository">
                            <GithubIcon size={18} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Live Demo">
                            <Globe size={18} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Visual (60%) */}
                <div className="w-full md:w-[55%] lg:w-[60%] order-1 md:order-2">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="block relative aspect-video md:aspect-[16/10] overflow-hidden rounded-xl bg-secondary/10 border border-border/60 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-md"
                  >
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-mono text-xs uppercase tracking-widest">
                        Visual pending
                      </div>
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-secondary/10 rounded-2xl border border-border/40">
            <FilterX size={40} className="text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-xl text-foreground">No projects found</h3>
            <p className="text-sm text-muted-foreground font-sans mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}

      </div>
    </main>
  );
}
