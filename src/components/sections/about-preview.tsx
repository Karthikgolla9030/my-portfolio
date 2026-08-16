"use client";

import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Briefcase, Sparkles, Code } from "lucide-react";
import { personalInfo } from "@/data";

export function AboutPreview({ id }: { id?: string }) {
  const { availability } = personalInfo;

  const highlights = [
    "Python Development",
    "Backend Development",
    "Data Analytics",
    "SQL & Databases",
    "Problem Solving"
  ];

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title, Intro & Highlights (col span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Introduction
              </span>
              <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
                The Engineer Behind the Code
              </h2>
            </div>

            <div className="space-y-6 text-base font-sans text-muted-foreground leading-relaxed">
              <p>
                I am a Data Science graduate who enjoys turning ideas into practical software and data-driven solutions. 
                Python is at the center of most of the things I build, from backend applications and APIs to data analysis and dashboards.
              </p>
              <p>
                Projects have taken me across different parts of software and data, from working with real-world datasets to designing applications with authentication, databases, APIs, and role-based systems. Along the way, I've learned that good solutions start with understanding the problem, not choosing the technology first.
              </p>
              <p>
                I'm now looking for an opportunity to apply that foundation in a professional environment, contribute to real problems, and grow alongside experienced engineers and data professionals.
              </p>
            </div>

            {/* Highlights Chips */}
            <div className="pt-6 space-y-4">
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest">
                Key Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs font-semibold bg-secondary text-secondary-foreground px-4 py-2 rounded-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Minimal Profile Card (col span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-secondary/50 border border-border p-8 rounded-xl space-y-6">
              
              <div className="text-left space-y-2 pb-2 border-b border-border/40">
                <h3 className="font-heading font-bold text-lg text-foreground tracking-wide uppercase">
                  What Matters To Me
                </h3>
              </div>

              <div className="space-y-6 pt-2">
                
                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-primary/60 pt-0.5">01</span>
                  <div className="space-y-1.5">
                    <h4 className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">Solve the Right Problem</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Start by understanding what actually needs to be solved.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-primary/60 pt-0.5">02</span>
                  <div className="space-y-1.5">
                    <h4 className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">Build With Clarity</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Prefer solutions that are readable, practical, and easier to maintain.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-primary/60 pt-0.5">03</span>
                  <div className="space-y-1.5">
                    <h4 className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">Learn Through Implementation</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Turn concepts into working systems instead of stopping at theory.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-xs font-mono font-bold text-primary/60 pt-0.5">04</span>
                  <div className="space-y-1.5">
                    <h4 className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">Keep the Foundation Strong</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Strengthen the fundamentals that make new technologies easier to understand.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* The Shift Section */}
        <div className="bg-secondary/30 border-l-4 border-primary p-8 md:p-12 space-y-8">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest">
              The Shift
            </h3>
            <p className="text-lg text-muted-foreground font-serif italic border-b border-border/50 pb-6">
              "Somewhere between learning the tools and building with them, my questions changed."
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-2xl md:text-3xl text-foreground leading-tight max-w-4xl">
              Learning taught me how technologies work. Building taught me why they matter.
            </h4>
            <p className="text-base text-muted-foreground font-sans leading-relaxed max-w-3xl">
              I started focusing less on simply learning a technology and more on understanding the problem it could help solve.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm"
            >
              <span>Discover My Journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
