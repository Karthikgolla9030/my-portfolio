"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Building2, Briefcase } from "lucide-react";
import { experience } from "@/data";

export function ExperiencePreview({ id }: { id?: string }) {
  const router = useRouter();

  // Get tag colors based on experience type for light mode
  const getTagStyle = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Training":
      case "Training / Internship":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Leadership":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Self Learning":
      case "Projects":
        return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Quick Summary */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Career Path
              </span>
              <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
                Experience
              </h2>
            </div>
            
            <p className="text-base font-sans text-muted-foreground leading-relaxed">
              A chronological review of my professional internships, software training courses, and student leadership milestones in computer science.
            </p>

            <div className="p-6 rounded-xl bg-secondary/50 border border-border space-y-6">
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={18} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Highlights</span>
              </div>
              <ul className="space-y-4 text-sm text-foreground font-sans">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>2 Data Analytics Internships</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Technical Lead — Data Nexus Club</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Ongoing Academic & Personal Projects</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/experience"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors pb-1 border-b border-primary/30"
              >
                <span>View All Experience</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Timeline Path */}
          <div className="lg:col-span-8">
            <div className="relative border-l border-border ml-4 md:ml-12 pl-6 md:pl-10 space-y-12 py-2">
              {experience.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.closest("a") || target.closest("button")) {
                      return;
                    }
                    router.push(`/experience/${item.slug}`);
                  }}
                >
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[14px] h-[14px] rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="p-6 rounded-xl border border-transparent hover:border-border hover:bg-secondary/30 transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6"
                  >
                    {/* Header Info */}
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border ${getTagStyle(item.type)}`}>
                            {item.type}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground">
                            <Calendar size={14} />
                            {item.duration}
                          </span>
                        </div>
                        
                        {/* Hover View Details indicator */}
                        <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                          <span>Details</span>
                          <ArrowRight size={14} />
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                          {item.role}
                        </h3>
                        <p className="flex items-center gap-2 text-sm text-muted-foreground font-semibold font-heading uppercase tracking-widest">
                          <Building2 size={16} />
                          {item.company}
                        </p>
                      </div>

                      <p className="text-base text-muted-foreground font-sans leading-relaxed pt-2">
                        {item.description}
                      </p>
                    </div>

                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
