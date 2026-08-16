import sys

path = r'c:\Users\karth\Downloads\projects\p\src\components\sections\skills-preview.tsx'

content = """\"use client\";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Database, Code2, LineChart, BrainCircuit, Wrench, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function SkillsPreview({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* 01 — HERO */}
        <div className="flex flex-col max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Skills & Technologies
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
            Tools I use to build, analyze, and explore.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
            My current toolkit spans Python development, data analysis, backend systems, databases, and machine learning — with a few areas I'm actively exploring.
          </p>
        </div>

        {/* 02 — CORE STACK */}
        <div className="space-y-8">
          <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight border-b border-border pb-4">
            What I Build With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Python", desc: "Programming · Backend · Data" },
              { name: "SQL", desc: "Databases · Analytics" },
              { name: "Django", desc: "Backend · Web Applications" },
              { name: "Django REST", desc: "APIs · Services" },
              { name: "Pandas", desc: "Data Analysis · EDA" },
              { name: "NumPy", desc: "Scientific Computing" },
              { name: "Matplotlib", desc: "Data Visualization" },
              { name: "Seaborn", desc: "Statistical Graphics" },
              { name: "Power BI", desc: "Business Intelligence" },
              { name: "PostgreSQL", desc: "Relational Database" },
              { name: "MySQL", desc: "Relational Database" },
              { name: "Git & GitHub", desc: "Version Control" }
            ].map((skill, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="font-bold text-foreground text-lg uppercase tracking-wide">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{skill.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 04 — SKILL MATURITY */}
        <div className="space-y-6">
          <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-tight border-b border-border pb-2">
            How I Currently Use These Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary/90 bg-primary/5 border border-primary/10 px-2 py-1 rounded">CORE</span>
              <p className="text-sm text-muted-foreground leading-relaxed">Used regularly in projects and development work.</p>
            </div>
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">APPLIED</span>
              <p className="text-sm text-muted-foreground leading-relaxed">Used in practical projects or analysis.</p>
            </div>
            <div className="space-y-2">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded">LEARNING / EXPLORING</span>
              <p className="text-sm text-muted-foreground leading-relaxed">Currently building stronger fundamentals or experimenting.</p>
            </div>
          </div>
        </div>

        {/* 03 — SKILL AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-border/60">
          
          {/* Software Development */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                <Terminal size={20} className="text-primary" /> Software Development
              </h3>
              <p className="text-sm text-muted-foreground">Building backend applications, APIs, and application logic with Python-based tools.</p>
            </div>
            <ul className="space-y-4 font-sans text-base text-foreground font-medium">
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Python <span className="text-[10px] font-bold uppercase text-primary/90 bg-primary/5 px-2 py-0.5 rounded">CORE</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Django <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Django REST Framework <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                FastAPI <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">LEARNING</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                JavaScript <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
            </ul>
          </div>

          {/* Data & Analytics */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                <LineChart size={20} className="text-primary" /> Data & Analytics
              </h3>
              <p className="text-sm text-muted-foreground">Working with structured data, exploratory analysis, visualization, and business reporting.</p>
            </div>
            <ul className="space-y-4 font-sans text-base text-foreground font-medium">
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                SQL <span className="text-[10px] font-bold uppercase text-primary/90 bg-primary/5 px-2 py-0.5 rounded">CORE</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Pandas <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                NumPy <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Matplotlib & Seaborn <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Power BI <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
            </ul>
          </div>

          {/* Machine Learning & AI */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                <BrainCircuit size={20} className="text-primary" /> Machine Learning & AI
              </h3>
              <p className="text-sm text-muted-foreground">Building my foundation in machine learning and exploring modern AI application patterns.</p>
            </div>
            <ul className="space-y-4 font-sans text-base text-foreground font-medium">
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Machine Learning <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">LEARNING</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Scikit-learn <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">LEARNING</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                PyTorch <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">LEARNING</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                LangChain <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">EXPLORING</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                LLMs & RAG <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">EXPLORING</span>
              </li>
            </ul>
          </div>

          {/* Data & Development Tools */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                <Database size={20} className="text-primary" /> Data & Development Tools
              </h3>
              <p className="text-sm text-muted-foreground">Databases, version control, and development infrastructure used across projects.</p>
            </div>
            <ul className="space-y-4 font-sans text-base text-foreground font-medium">
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                MySQL <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                PostgreSQL <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                SQLite <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">APPLIED</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                MongoDB <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">WORKING KNOWLEDGE</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                Git & GitHub <span className="text-[10px] font-bold uppercase text-primary/90 bg-primary/5 px-2 py-0.5 rounded">CORE</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/40 pb-2">
                AWS <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">LEARNING</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 05 — SKILLS IN PRACTICE */}
        <div className="space-y-10 pt-12 border-t border-border/60">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-3xl text-foreground uppercase tracking-tight">
              Skills in Practice
            </h3>
            <p className="text-lg text-muted-foreground font-sans">
              The technologies make more sense when you see where I use them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group border border-border p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <Link href="/projects/linkora" className="block space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block">REAL-TIME APPLICATION</span>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">Linkora</h4>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground font-medium">
                  <span className="bg-background px-2 py-1 rounded border border-border">Python</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Django</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">React</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">WebSockets</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Redis</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">PostgreSQL</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Used Python and Django to build backend logic, with WebSockets and Redis handling real-time matchmaking and communication.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-2">
                  View Case Study <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            <div className="group border border-border p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <Link href="/projects/sales-dashboard" className="block space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block">BUSINESS INTELLIGENCE</span>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">Sales Performance Analysis</h4>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground font-medium">
                  <span className="bg-background px-2 py-1 rounded border border-border">Power BI</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">DAX</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Data Analysis</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Used Power BI and DAX to transform sales data into interactive performance analysis and business insights.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-2">
                  View Case Study <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            <div className="group border border-border p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <Link href="/projects/zomato-analysis" className="block space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block">DATA ANALYSIS</span>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">Zomato Bengaluru Analysis</h4>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground font-medium">
                  <span className="bg-background px-2 py-1 rounded border border-border">Python</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Pandas</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">NumPy</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Matplotlib</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Seaborn</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Used Python-based analysis and visualization to explore restaurant ratings, pricing, cuisines, locations, and customer engagement.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-2">
                  View Case Study <ArrowRight size={14} />
                </span>
              </Link>
            </div>

            <div className="group border border-border p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <Link href="/projects/skillsphere" className="block space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block">APPLICATION DEVELOPMENT / AI</span>
                  <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">SkillSphere</h4>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground font-medium">
                  <span className="bg-background px-2 py-1 rounded border border-border">Python</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">Django</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">SQLite</span>
                  <span className="bg-background px-2 py-1 rounded border border-border">AI</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built a practical application around skill discovery and matching, combining backend development with AI-assisted functionality.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-2">
                  View Project <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* 06 — CURRENTLY EXPLORING */}
        <div className="bg-secondary/30 border border-border p-8 md:p-12 rounded-3xl">
          <div className="space-y-6 max-w-3xl">
            <h3 className="font-heading font-bold text-2xl text-foreground uppercase tracking-tight">
              Currently Exploring
            </h3>
            <p className="text-lg text-muted-foreground font-sans">
              Areas I'm currently spending time understanding more deeply.
            </p>
            <div className="flex flex-wrap gap-3 font-mono font-medium text-sm text-foreground pt-2">
              <span className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">Machine Learning</span>
              <span className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">PyTorch</span>
              <span className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">FastAPI</span>
              <span className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">LangChain</span>
              <span className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">LLMs & RAG</span>
              <span className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">AWS</span>
            </div>
          </div>
        </div>

        {/* 07 — HOW I APPROACH TECHNOLOGY */}
        <div className="space-y-12 pt-12 border-t border-border/60">
          <h3 className="font-heading font-bold text-3xl text-foreground uppercase tracking-tight text-center md:text-left">
            How I Approach Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block pb-2 border-b border-border/40">01</span>
              <h4 className="font-bold text-foreground text-lg uppercase tracking-wide">Start With the Problem</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I try to understand what needs to be solved before deciding which technology to use.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block pb-2 border-b border-border/40">02</span>
              <h4 className="font-bold text-foreground text-lg uppercase tracking-wide">Build With What I Know</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I prefer getting a simple working solution first, then improving it as I understand the problem better.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block pb-2 border-b border-border/40">03</span>
              <h4 className="font-bold text-foreground text-lg uppercase tracking-wide">Learn Through Projects</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Projects are where individual technologies start making sense as parts of a larger system.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block pb-2 border-b border-border/40">04</span>
              <h4 className="font-bold text-foreground text-lg uppercase tracking-wide">Go Back to Fundamentals</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When something doesn't make sense, I go back and strengthen the underlying concept instead of simply moving on.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated skills-preview.tsx with editorial redesign!")
