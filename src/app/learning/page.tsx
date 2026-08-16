"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, Map, CheckCircle2, Circle, HelpCircle, 
  ArrowLeft, ArrowRight, Brain, Cpu, Terminal, Book, Newspaper 
} from "lucide-react";
import { currentlyLearning, learningRoadmap } from "@/data";
import Link from "next/link";

export default function LearningPage() {
  const getRoadmapIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case "Active":
        return <Circle className="w-5 h-5 text-primary fill-primary/10 animate-pulse" />;
      default:
        return <HelpCircle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case "Completed":
        return "border-emerald-200 shadow-sm";
      case "Active":
        return "border-primary/40 shadow-sm";
      default:
        return "border-border";
    }
  };

  const majorTopics = [
    {
      slug: "llms",
      title: "Large Language Models (LLMs)",
      icon: Brain,
      desc: "Investigating model weight tuning, parameters optimization, context constraints, and tokenizers."
    },
    {
      slug: "rag",
      title: "Retrieval-Augmented Generation",
      icon: Cpu,
      desc: "Designing secure document loader pipelines, chunking policies, and vector database indexing (FAISS)."
    },
    {
      slug: "agentic-ai",
      title: "Agentic AI & Workflows",
      icon: Terminal,
      desc: "Constructing multi-agent loop orchestrations, function-calling patterns, and task execution pipelines."
    }
  ];

  const resources = {
    books: [
      { name: "Designing Data-Intensive Applications", author: "Martin Kleppmann", status: "Reading" },
      { name: "Hands-On Machine Learning", author: "Aurélien Géron", status: "Completed" },
      { name: "Clean Architecture", author: "Robert C. Martin", status: "Completed" }
    ],
    courses: [
      { name: "CS224n: Deep Learning for NLP", school: "Stanford University", status: "In Progress" },
      { name: "Deep Learning Specialization", school: "DeepLearning.AI", status: "Completed" },
      { name: "AWS Cloud Practitioner", school: "Amazon Web Services", status: "Completed" }
    ],
    papers: [
      { title: "Attention Is All You Need", authors: "Vaswani et al.", status: "Completed" },
      { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", authors: "Lewis et al.", status: "Completed" },
      { title: "LLM Compiler: An Optimizer for Agentic Workflows", authors: "Kim et al.", status: "Reading" }
    ]
  };

  return (
    <main className="w-full bg-background min-h-screen py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Competency Growth & Roadmaps
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
            Learning Journey
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
            I believe that software engineers must remain lifelong students. This portal tracks my current focus, 
            technical roadmap timelines, research paper readings, and exploration topics.
          </p>
        </div>

        {/* Major Topics Portal (Dedicated Sub-Pages) */}
        <div className="space-y-8 pt-8 border-t border-border">
          <h2 className="font-heading font-bold text-3xl text-foreground">
            Major Learning Domains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {majorTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.slug}
                  href={`/learning/${topic.slug}`}
                  className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary shadow-sm">
                      <Icon size={20} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-8 group-hover:translate-x-1 transition-transform">
                    <span>Explore Focus Topic</span>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Section 2: Currently Learning Grid */}
        <div className="space-y-8 pt-16 border-t border-border">
          <h2 className="font-heading font-bold text-3xl text-foreground flex items-center gap-3">
            <BookOpen size={24} className="text-primary" />
            <span>Active Study Focus</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentlyLearning.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-200 flex items-start justify-between gap-4 shadow-sm"
              >
                <div className="space-y-2">
                  <span className="block text-xs font-mono font-semibold text-muted-foreground uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs font-sans text-muted-foreground">
                    Started: {item.dateStarted}
                  </p>
                </div>
                
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full border uppercase tracking-wider ${
                  item.status === "In Progress"
                    ? "bg-primary/10 text-primary border-primary/20"
                    : "bg-secondary text-muted-foreground border-border"
                }`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Connected Roadmaps */}
        <div className="space-y-12 pt-16 border-t border-border">
          <h2 className="font-heading font-bold text-3xl text-foreground flex items-center gap-3">
            <Map size={24} className="text-primary" />
            <span>Mastery Roadmap</span>
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative py-12">
            <div className="absolute top-[84px] inset-x-12 h-0.5 bg-border" />

            <div className="grid grid-cols-5 gap-6">
              {learningRoadmap.map((node, i) => (
                <motion.div
                  key={node.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center space-y-5 relative"
                >
                  <div className={`w-12 h-12 rounded-full bg-background border-2 z-10 flex items-center justify-center transition-colors duration-300 shadow-sm ${getStatusBorder(node.status)}`}>
                    {getRoadmapIcon(node.status)}
                  </div>

                  <div className="space-y-2 px-2">
                    <span className={`inline-block text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                      node.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : node.status === "Active"
                        ? "bg-primary/10 text-primary border-primary/20"
                        : "bg-secondary text-muted-foreground border-border"
                    }`}>
                      {node.status}
                    </span>
                    <h4 className="font-heading font-bold text-base text-foreground">
                      {node.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-[160px]">
                      {node.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden relative border-l border-border ml-4 pl-8 space-y-10 py-4">
            {learningRoadmap.map((node, i) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="relative flex flex-col items-start space-y-3 bg-secondary/30 border border-border p-5 rounded-xl"
              >
                <div className={`absolute -left-[45px] top-5 w-6 h-6 rounded-full bg-background border-2 flex items-center justify-center ${getStatusBorder(node.status)}`}>
                  {getRoadmapIcon(node.status)}
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                    node.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : node.status === "Active"
                      ? "bg-primary/10 text-primary border-primary/20"
                      : "bg-secondary text-muted-foreground border-border"
                  }`}>
                    {node.status}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base text-foreground">
                  {node.title}
                </h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {node.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Books, Courses, Research Papers split list */}
        <div className="space-y-8 pt-16 border-t border-border">
          <h2 className="font-heading font-bold text-3xl text-foreground">
            Academic Focus & Materials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Books Column */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                <Book size={20} className="text-primary" />
                <span>Books</span>
              </h3>
              <div className="space-y-4">
                {resources.books.map((b) => (
                  <div key={b.name} className="p-5 rounded-xl bg-secondary/30 border border-border space-y-2 shadow-sm">
                    <h4 className="text-sm font-bold text-foreground">{b.name}</h4>
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{b.author}</span>
                      <span className={b.status === "Reading" ? "text-primary font-bold" : "text-emerald-600"}>{b.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses Column */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                <span>Courses & Lectures</span>
              </h3>
              <div className="space-y-4">
                {resources.courses.map((c) => (
                  <div key={c.name} className="p-5 rounded-xl bg-secondary/30 border border-border space-y-2 shadow-sm">
                    <h4 className="text-sm font-bold text-foreground">{c.name}</h4>
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{c.school}</span>
                      <span className={c.status === "In Progress" ? "text-primary font-bold" : "text-emerald-600"}>{c.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Papers Column */}
            <div className="space-y-5">
              <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                <Newspaper size={20} className="text-primary" />
                <span>Research Papers</span>
              </h3>
              <div className="space-y-4">
                {resources.papers.map((p) => (
                  <div key={p.title} className="p-5 rounded-xl bg-secondary/30 border border-border space-y-2 shadow-sm">
                    <h4 className="text-sm font-bold text-foreground line-clamp-2">{p.title}</h4>
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                      <span>{p.authors}</span>
                      <span className={p.status === "Reading" ? "text-primary font-bold" : "text-emerald-600"}>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Technologies Exploring & Future Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-border">
          <div className="p-8 rounded-2xl bg-secondary/30 border border-border space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-widest">
              Technologies Currently Exploring
            </h3>
            <div className="flex flex-wrap gap-2 text-sm font-mono font-medium text-primary">
              <span className="bg-background border border-border px-4 py-2 rounded-lg">Vector Indexes (Qdrant)</span>
              <span className="bg-background border border-border px-4 py-2 rounded-lg">Rust (Fast compilation)</span>
              <span className="bg-background border border-border px-4 py-2 rounded-lg">LangGraph Multi-Agents</span>
              <span className="bg-background border border-border px-4 py-2 rounded-lg">FastAPI Async endpoints</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/30 border border-border space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-widest">
              Future Learning Goals (Next 12 Months)
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Build a multi-agent system scheduling asynchronous database operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Evaluate embedding models benchmarks comparing Cosine against dot product.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Master Docker configurations and Kubernetes namespaces.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
