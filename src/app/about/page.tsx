"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, FileText, ArrowDown, Database, Code2, LineChart, 
  PieChart, BrainCircuit, BookOpen, Rocket, Compass, CheckCircle2, Workflow
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-full bg-background min-h-screen py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-32">
        
        {/* 1. HERO — BEYOND THE RESUME */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              Discover My Journey
            </span>
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-tight">
              Beyond the Resume
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-heading font-medium">
              A path shaped by problems, projects, and the questions behind them.
            </p>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl">
            My path into technology hasn't been a straight line from one skill to the next. It has been a series of questions — what can data reveal, how does software turn an idea into something usable, and what makes a solution genuinely useful?
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl">
            Coursework gave me the foundation. Projects gave me context. Real datasets, internships, debugging sessions, and building applications taught me where those concepts actually matter.
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl">
            This is the part a resume usually leaves out.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-background border border-border hover:bg-secondary text-foreground font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* 1.5 WHAT BUILDING CHANGED */}
        <section className="bg-secondary/30 border-l-4 border-primary p-8 md:p-12 space-y-6 rounded-2xl">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground uppercase tracking-tight">
              What Building Changed
            </h2>
            <p className="text-lg text-muted-foreground font-serif italic pb-4 border-b border-border/50">
              "This is the moment where my perspective shifted from 'learning technologies' to 'understanding problems'."
            </p>
          </div>
          
          <div className="space-y-4 pt-2">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground leading-tight">
              Learning taught me how technologies work. Building taught me why they matter.
            </h3>
            <p className="text-base text-muted-foreground font-sans leading-relaxed max-w-3xl">
              The more I worked on projects, the more I realized that the hardest part isn't always writing the code — it's understanding the problem well enough to build something genuinely useful.
            </p>
          </div>
        </section>

        {/* 2. HOW IT STARTED (Curiosity-Driven Narrative) */}
        <section className="space-y-12">
          
          <div className="space-y-12 pl-4 border-l-[3px] border-border/60">
            {/* 01 THE STARTING POINT */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  01 — The Starting Point
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <Database size={22} className="text-primary" /> Data Science
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "What can we learn from data that isn't obvious at first?"
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>Data Science was where my technical journey began.</p>
                  <p>The degree introduced me to programming, databases, statistics, analytics, and the foundations behind machine learning. More importantly, it gave me a way to look at problems through data rather than assumptions.</p>
                  <p>But learning concepts was only the beginning.</p>
                </div>
                <p className="text-sm font-semibold text-primary/80 pt-2">→ The next step was learning how to actually build with code.</p>
              </div>
            </div>

            {/* 02 LEARNING TO BUILD */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  02 — Learning to Build
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <Code2 size={22} className="text-primary" /> Python
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "An idea is only useful once I can turn it into something that works."
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>Python became the language I used to make that transition.</p>
                  <p>Starting with programming fundamentals, I gradually moved toward object-oriented programming, data structures, database interaction, backend development, and application logic.</p>
                  <p>Working on projects changed the way I approached programming. Problems stopped looking like isolated coding questions and started looking like pieces of a larger system.</p>
                </div>
                <p className="text-sm font-semibold text-primary/80 pt-2">→ Then the data itself became the problem I wanted to understand better.</p>
              </div>
            </div>

            {/* 03 FROM DATA TO INSIGHT */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  03 — From Data to Insight
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <LineChart size={22} className="text-primary" /> Data Analytics
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "What is the story hidden inside a messy dataset?"
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>Working with real datasets introduced a different kind of problem.</p>
                  <p>Before analysis can begin, data has to be cleaned, structured, explored, and questioned. I worked with Python libraries including NumPy, Pandas, Matplotlib, and Seaborn to move from raw information to patterns and visualizations.</p>
                  <p>During my APSSDC internship, I worked on a Bengaluru Zomato data analysis project, which gave me hands-on experience with that process.</p>
                  <p>Raw data → exploration → patterns → insight.</p>
                </div>
                <p className="text-sm font-semibold text-primary/80 pt-2">→ But an insight has limited value if nobody can understand it.</p>
              </div>
            </div>

            {/* 04 MAKING DATA USEFUL */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  04 — Making Data Useful
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <PieChart size={22} className="text-primary" /> Power BI
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "How do you turn analysis into something another person can act on?"
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>During my Infosys Springboard internship, I worked on Sales Performance Analysis using Power BI.</p>
                  <p>The experience introduced me to another side of working with data: presenting information through dashboards, KPIs, visual analysis, and business-oriented reporting.</p>
                  <p>It taught me that technical work isn't only about getting the answer right.</p>
                  <p>It is also about making the answer clear and useful.</p>
                </div>
                <p className="text-sm font-semibold text-primary/80 pt-2">→ But understanding what happened wasn't enough to satisfy my curiosity.</p>
              </div>
            </div>

            {/* 05 WHAT COMES NEXT? */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  05 — What Comes Next?
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <BrainCircuit size={22} className="text-primary" /> Exploring Machine Learning
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "If data can help explain what happened, how can it help us reason about what comes next?"
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>That question led me toward Machine Learning.</p>
                  <p>I explored the fundamentals and started learning how models approach patterns, predictions, and decisions from data.</p>
                  <p>At the same time, I realized something important: understanding ML properly requires more than knowing how to call a model.</p>
                  <p>Some concepts made more sense when I stepped back and revisited the foundations behind them.</p>
                </div>
                <p className="text-sm font-semibold text-primary/80 pt-2">→ So instead of rushing forward, I went back to the basics.</p>
              </div>
            </div>

            {/* 06 BACK TO THE FOUNDATIONS */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  06 — Back to the Foundations
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <BookOpen size={22} className="text-primary" /> The Mathematics Behind the Models
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "What is actually happening underneath the algorithm?"
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>Linear Algebra, Calculus, Probability, and Statistics became areas I wanted to understand more deeply.</p>
                  <p>Rather than treating mathematics as something separate from technology, I started seeing it as part of the reasoning behind many ML concepts.</p>
                  <p>My academic project eventually shifted my attention toward application development, but the curiosity remained.</p>
                  <p>I'm continuing to explore AI and ML gradually, with the goal of understanding the foundations rather than simply collecting tools.</p>
                </div>
                <p className="text-sm font-semibold text-primary/80 pt-2">→ That shift in thinking influenced what I wanted from my projects.</p>
              </div>
            </div>

            {/* 07 BUILDING FOR A REASON */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  07 — Building For a Reason
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <Rocket size={22} className="text-primary" /> SkillSphere
                </h3>
                <p className="text-lg font-serif font-medium text-foreground italic">
                  "What if the project solved a problem instead of simply demonstrating a technology?"
                </p>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>This became an important turning point.</p>
                  <p>For my academic project, several ideas were considered, including Fake News Detection and Road Damage Detection.</p>
                  <p>Instead of choosing a project simply because the technology sounded impressive, I wanted to work on something with a more direct human use case.</p>
                  <p>That led to SkillSphere — a skill-sharing platform designed around connecting people who want to learn with people who can teach.</p>
                  <p>The project brought together application development, authentication, databases, role-based access, matching logic, and an AI-assisted component.</p>
                  <p>More importantly, it changed how I think about projects:</p>
                  <p className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-md border border-primary/20">
                    Technology should serve the problem — not the other way around.
                  </p>
                </div>
              </div>
            </div>

            {/* 08 BUILDING BEYOND ONE PROJECT */}
            <div className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[35px] md:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-background border-[3px] border-primary group-hover:scale-125 transition-transform" />
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  08 — Building Beyond One Project
                </span>
                <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-2">
                  <Compass size={22} className="text-primary" /> From Concepts to Applications
                </h3>
                <div className="text-base text-muted-foreground leading-relaxed space-y-4">
                  <p>Personal projects gave me opportunities to explore different sides of software development.</p>
                  <p>I worked with Python, Django, Django REST Framework, SQL and relational databases, APIs, authentication, frontend integration, and data analysis.</p>
                  <p>Each project exposed another piece of the bigger picture.</p>
                  <p>A backend isn't just an API.<br />A database isn't just a place to store data.<br />A dashboard isn't just a collection of charts.</p>
                  <p>They are parts of a system designed to solve a problem.</p>
                </div>
                <p className="text-sm font-bold text-foreground pt-2">And that is where my interest in software development has grown.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. LESSONS THAT STAYED WITH ME */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Lessons That Stayed With Me
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 border border-border p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
              <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                01 — Understand before you build
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The technology becomes easier to choose once the actual problem is clear.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
              <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                02 — Fundamentals create leverage
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Python, SQL, databases, APIs, and core programming concepts continue to matter even when the tools change.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
              <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                03 — Debugging is part of learning
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A solution that doesn't work often teaches more than one that worked immediately.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors">
              <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                04 — Projects need a reason
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A project becomes more meaningful when it answers a real question, solves a useful problem, or explores something worth understanding.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border p-8 rounded-2xl space-y-4 hover:border-primary/40 transition-colors md:col-span-2 lg:col-span-1">
              <h3 className="font-heading font-bold text-xl text-foreground leading-tight">
                05 — Going back isn't going backward
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When something doesn't make sense, revisiting the fundamentals is often the fastest way forward.
              </p>
            </div>
          </div>
        </section>

        {/* 4. HOW I APPROACH A PROBLEM */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground border-b border-border pb-4">
              How I Approach a Problem
            </h2>
            <p className="text-base text-muted-foreground">
              The first challenge is rarely writing the code. It is deciding what the code actually needs to accomplish.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative pt-4">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-8 right-8 h-0.5 bg-border -z-10" />

            {/* Connecting Line (Mobile) */}
            <div className="block md:hidden absolute top-8 bottom-8 left-12 w-0.5 bg-border -z-10" />

            <div className="flex flex-row md:flex-col items-center md:text-center space-x-6 md:space-x-0 md:space-y-4 w-full md:w-1/5 relative bg-background">
              <div className="w-24 h-24 shrink-0 rounded-full bg-secondary/30 border border-border flex flex-col items-center justify-center shadow-sm">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">01</span>
                <span className="font-heading font-bold text-foreground">UNDERSTAND</span>
              </div>
              <p className="text-sm text-muted-foreground md:px-2">What problem are we actually solving?</p>
            </div>

            <ArrowRight className="hidden md:block text-muted-foreground shrink-0" />
            
            <div className="flex flex-row md:flex-col items-center md:text-center space-x-6 md:space-x-0 md:space-y-4 w-full md:w-1/5 relative bg-background">
              <div className="w-24 h-24 shrink-0 rounded-full bg-secondary/30 border border-border flex flex-col items-center justify-center shadow-sm">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">02</span>
                <span className="font-heading font-bold text-foreground">BREAK DOWN</span>
              </div>
              <p className="text-sm text-muted-foreground md:px-2">What smaller pieces make up the problem?</p>
            </div>

            <ArrowRight className="hidden md:block text-muted-foreground shrink-0" />
            
            <div className="flex flex-row md:flex-col items-center md:text-center space-x-6 md:space-x-0 md:space-y-4 w-full md:w-1/5 relative bg-background">
              <div className="w-24 h-24 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex flex-col items-center justify-center shadow-sm text-primary">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">03</span>
                <span className="font-heading font-bold">BUILD</span>
              </div>
              <p className="text-sm text-muted-foreground md:px-2">What is the simplest useful solution I can test?</p>
            </div>

            <ArrowRight className="hidden md:block text-muted-foreground shrink-0" />
            
            <div className="flex flex-row md:flex-col items-center md:text-center space-x-6 md:space-x-0 md:space-y-4 w-full md:w-1/5 relative bg-background">
              <div className="w-24 h-24 shrink-0 rounded-full bg-secondary/30 border border-border flex flex-col items-center justify-center shadow-sm">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">04</span>
                <span className="font-heading font-bold text-foreground">VALIDATE</span>
              </div>
              <p className="text-sm text-muted-foreground md:px-2">Does it work beyond the ideal case?</p>
            </div>

            <ArrowRight className="hidden md:block text-muted-foreground shrink-0" />
            
            <div className="flex flex-row md:flex-col items-center md:text-center space-x-6 md:space-x-0 md:space-y-4 w-full md:w-1/5 relative bg-background">
              <div className="w-24 h-24 shrink-0 rounded-full bg-secondary/30 border border-border flex flex-col items-center justify-center shadow-sm">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">05</span>
                <span className="font-heading font-bold text-foreground">REFINE</span>
              </div>
              <p className="text-sm text-muted-foreground md:px-2">What can be made clearer, simpler, or more reliable?</p>
            </div>
          </div>
        </section>

        {/* 5. CURRENTLY */}
        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              What I'm Exploring Now
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-6 rounded-2xl space-y-3">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">
                BUILDING
              </h4>
              <p className="text-lg font-heading font-bold text-foreground">Practical software projects</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Working on applications that bring together backend logic, APIs, databases, authentication, and real-world use cases.</p>
            </div>
            
            <div className="bg-background border border-border p-6 rounded-2xl space-y-3">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">
                STRENGTHENING
              </h4>
              <p className="text-lg font-heading font-bold text-foreground">Backend fundamentals</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Going deeper into API design, databases, authentication, application architecture, and writing maintainable Python code.</p>
            </div>
            
            <div className="bg-background border border-border p-6 rounded-2xl space-y-3">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">
                ANALYZING
              </h4>
              <p className="text-lg font-heading font-bold text-foreground">Real-world data</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Continuing to work with Python, SQL, and analytics to understand how data can support better decisions.</p>
            </div>
            
            <div className="bg-background border border-border p-6 rounded-2xl space-y-3">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">
                EXPLORING
              </h4>
              <p className="text-lg font-heading font-bold text-foreground">AI & Machine Learning</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Gradually building my understanding of AI and ML, with more focus on fundamentals and practical applications than simply using the latest tools.</p>
            </div>
          </div>
        </section>

        {/* 6. WHAT COMES NEXT */}
        <section className="space-y-8 bg-foreground text-background p-10 md:p-14 rounded-[2rem] shadow-xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-background">
            What Comes Next
          </h2>
          <div className="space-y-6 text-lg font-medium leading-relaxed max-w-3xl text-background/90">
            <p>
              The next step is moving from learning through coursework and personal projects to learning through real-world engineering work.
            </p>
            <p>
              I'm looking for an opportunity where I can contribute to meaningful problems, work with experienced people, strengthen my technical foundation, and take responsibility for things that need to be built.
            </p>
            <p>
              I don't expect to know everything on day one. I want to bring curiosity, solid fundamentals, and a willingness to learn — and become better through the problems I haven't solved yet.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* 7. OUTSIDE THE CODE */}
        <section className="text-center pt-8">
          <h4 className="font-heading font-bold text-xl text-foreground mb-1">
            Outside the Code
          </h4>
          <p className="text-sm text-muted-foreground font-serif italic mb-6">
            A few things that keep me curious away from projects and coursework.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-foreground">
            <span className="bg-secondary/50 border border-border px-4 py-2 rounded-full shadow-sm">💻 Coding Side Projects</span>
            <span className="bg-secondary/50 border border-border px-4 py-2 rounded-full shadow-sm">📖 Technical Reading & Blogging</span>
            <span className="bg-secondary/50 border border-border px-4 py-2 rounded-full shadow-sm">🎧 Tech Podcasts</span>
            <span className="bg-secondary/50 border border-border px-4 py-2 rounded-full shadow-sm">♟️ Chess</span>
          </div>
        </section>

      </div>
    </main>
  );
}
