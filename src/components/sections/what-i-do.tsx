"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Database, Cpu } from "lucide-react";
import { personalInfo } from "@/data";

export function WhatIDo({ id }: { id?: string }) {
  const { whatIDo } = personalInfo;

  const getIcon = (title: string) => {
    const normalized = title.toLowerCase();
    if (normalized.includes("ai")) return <Sparkles className="w-5 h-5 text-primary" />;
    if (normalized.includes("backend")) return <Terminal className="w-5 h-5 text-primary" />;
    if (normalized.includes("science")) return <Database className="w-5 h-5 text-primary" />;
    return <Cpu className="w-5 h-5 text-primary" />;
  };

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
              Domains of Expertise
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-sans max-w-md">
            My primary technical focuses and domains of delivery, translating complex engineering into scalable products.
          </p>
        </div>

        {/* 4 Feature Strip Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto border-t border-border pt-12">
          {whatIDo.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-2 text-primary transition-transform group-hover:scale-110 duration-300">
                {getIcon(service.title)}
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
