"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// Social Custom SVG brand icons
function GithubIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { icon: GithubIcon, href: "https://github.com/Karthikgolla9030", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/karthikgolla/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:karthikgolla493@gmail.com", label: "Email" },
];

export function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden py-16 md:py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Introduction & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-8"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-3">
                Hello, I'm
              </p>
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.1] mb-4">
                Karthik Golla
              </h1>
              <h2 className="text-xl sm:text-2xl text-primary font-medium tracking-tight">
                Data Science Graduate & Python Developer
              </h2>
            </div>

            <p className="text-muted-foreground font-sans text-base sm:text-lg max-w-xl leading-relaxed">
              I build practical software and data-driven solutions with Python, backend technologies, SQL, and analytics — with a growing curiosity for AI and machine learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-8 py-4 rounded-md transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </Link>
              
              <a
                href="/Karthik_Golla_Resume.pdf"
                download="Karthik_Golla_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-muted-foreground bg-transparent hover:bg-muted text-foreground font-medium text-sm px-8 py-4 rounded-md transition-all duration-200"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Right: Minimal Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-center w-full mt-12 lg:mt-0 lg:pr-4"
          >
            <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden flex items-center justify-center bg-secondary/30 border border-border shadow-sm p-3">
              <div className="w-full h-full rounded-2xl bg-background border border-border/60 relative overflow-hidden flex items-end justify-center pt-8 bg-gradient-to-b from-secondary/50 to-background">
                {/* Minimal elegant pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="absolute inset-0 z-10">
                  <Image
                    src="/images/profile_original.jpg"
                    alt="Karthik Golla"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Horizontal Fact Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div>
            <h4 className="text-3xl font-heading font-bold text-foreground mb-1">5+</h4>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Projects Built</p>
          </div>
          <div>
            <h4 className="text-3xl font-heading font-bold text-foreground mb-1">3</h4>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Certifications</p>
          </div>
          <div>
            <h4 className="text-3xl font-heading font-bold text-foreground mb-1">Python</h4>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Primary Lang</p>
          </div>
          <div>
            <h4 className="text-3xl font-heading font-bold text-foreground mb-1">Multiple Areas</h4>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">SOFTWARE • DATA • AI</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
