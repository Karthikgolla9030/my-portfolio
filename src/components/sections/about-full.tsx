"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";
import { personalInfo } from "@/data";

export function AboutFull({ id }: { id?: string }) {
  const { aboutTimeline, college, location, availability, email, focusAreas } = personalInfo;

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            My Story
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl leading-relaxed">
            A look into my journey, professional interests, and what drives me as an engineer.
          </p>
        </div>

        {/* Info Grid (No dark cards, just clean columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 border-y border-border">
          
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl text-foreground">Karthik Golla</h3>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              AI Engineer | Python Backend Developer
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-primary shrink-0" size={18} />
                <p className="text-sm font-medium text-muted-foreground">{college}</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <p className="text-sm font-medium text-muted-foreground">{location}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <p className="text-sm font-medium text-muted-foreground">{email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-primary shrink-0" size={18} />
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  {availability}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground">
              Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs font-semibold bg-secondary text-secondary-foreground px-4 py-2 rounded-md"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Timeline */}
        <div className="space-y-12">
          <h3 className="font-heading font-bold text-2xl text-foreground">
            The Journey
          </h3>
          
          <div className="space-y-16">
            {aboutTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-l-2 border-border pl-6 md:pl-8 md:border-none md:pl-0"
              >
                <div className="md:col-span-1">
                  <span className="text-lg font-heading font-bold text-primary">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-3 space-y-3">
                  <h4 className="font-heading font-bold text-xl text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-base text-muted-foreground font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
