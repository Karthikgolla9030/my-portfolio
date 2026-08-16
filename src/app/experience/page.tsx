"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft, ArrowRight, Calendar, Building2 } from "lucide-react";
import { experience } from "@/data";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ExperienceArchivePage() {
  const router = useRouter();

  const getTagStyle = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Training":
      case "Training / Internship":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Leadership":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Self Learning":
      case "Projects":
        return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
      default:
        return "bg-secondary text-muted-foreground border-border";
    }
  };

  return (
    <main className="w-full bg-background min-h-screen py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="space-y-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Career Timeline & History
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
            All Experiences
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
            A complete listing of my professional internships, technical training, personal development phases, 
            and leadership positions.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-border ml-4 pl-8 md:pl-12 space-y-12 py-4">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              onClick={() => router.push(`/experience/${item.slug}`)}
              className="relative group cursor-pointer"
            >
              {/* Node bullet */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center transition-colors duration-300 z-10" />

              {/* Card wrapper */}
              <div className="bg-background hover:bg-secondary/30 border border-border hover:border-primary/30 hover:shadow-sm p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-block text-[10px] font-bold font-mono px-2.5 py-1 rounded border uppercase tracking-wider ${getTagStyle(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                        <Calendar size={14} />
                        {item.duration}
                      </span>
                    </div>
                    
                    <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <span>View Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground font-semibold font-heading">
                      <Building2 size={16} />
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
