"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Award, CheckCircle2 } from "lucide-react";
import { experience, experienceHighlights, experienceBulletPoints } from "@/data";

export function ExperienceFull({ id }: { id?: string }) {
  const getTagStyle = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "Training":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Leadership":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Self Learning":
        return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Milestones
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-sans max-w-md">
            My professional journey, academic training, and leadership experience.
          </p>
        </div>

        {/* Split Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-border">
          
          {/* Left Column: Timeline list (col span 7) */}
          <div className="lg:col-span-7">
            <div className="relative border-l border-border ml-4 md:ml-8 pl-6 md:pl-10 space-y-12 py-2">
              {experience.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[14px] h-[14px] rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 rounded-xl border border-transparent hover:border-border hover:bg-secondary/30 transition-all duration-300 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border ${getTagStyle(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground">
                        <Calendar size={14} />
                        {item.duration}
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
              ))}
            </div>
          </div>

          {/* Right Column: Highlights Stats & Bullet list (col span 5) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            {/* Highlights Grid */}
            <div className="bg-secondary/50 border border-border p-8 rounded-xl space-y-8">
              <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Award size={18} />
                </div>
                <span>Professional Highlights</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {experienceHighlights.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-background border border-border text-center space-y-2 shadow-sm"
                  >
                    <span className="block text-3xl font-heading font-extrabold text-primary">
                      {stat.count}
                    </span>
                    <span className="block text-xs font-sans text-muted-foreground font-semibold uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Do Summary Points */}
            <div className="bg-secondary/30 border border-border p-8 rounded-xl space-y-6">
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-widest">
                My Focus & Deliverables
              </h3>
              
              <div className="space-y-5">
                {experienceBulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground font-sans leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
