"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ArrowLeft, Brain, Cpu, Terminal, ShieldCheck, 
  BookOpen, Code, FlaskConical, Target, ArrowRight 
} from "lucide-react";
import { projects } from "@/data";

interface LearningSpec {
  title: string;
  whyLearning: string;
  concepts: string[];
  progress: string;
  notes: string;
  experiments: string;
  relatedProjectsSlugs: string[];
  futureGoals: string;
}

const LEARNING_SPECS: Record<string, LearningSpec> = {
  "llms": {
    title: "Large Language Models (LLMs)",
    whyLearning: "To understand tokenizer anomalies, context windows management, instruction tuning methodologies, and model parameters optimization under GPU memory constraints.",
    concepts: [
      "Transformer Architectures & Self-Attention weights math",
      "Tokenization behaviors and token index length limits",
      "Few-shot Context learning patterns and system prompts engineering",
      "Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)",
      "Model Evaluation benchmarks (MMLU, HumanEval)"
    ],
    progress: "Active study focus. Formulating prompt instruction files and analyzing context length decay scales.",
    notes: "Self-attention layers compute dot product similarities between sequence vectors. Memory footprints decay quadratically with sequence length unless optimized using FlashAttention configurations.",
    experiments: "Quantized Llama-3 checkpoints to 4-bit sizes using llama.cpp and verified local token generation speeds under varying context payload sizes.",
    relatedProjectsSlugs: [],
    futureGoals: "Train a custom LoRA adapter targeting medical QA conversational datasets to benchmark loss decay curves."
  },
  "rag": {
    title: "Retrieval-Augmented Generation (RAG)",
    whyLearning: "To build reliable, document-backed search engines that inject real-time context to prevent LLM hallucinations.",
    concepts: [
      "Vector Embeddings representations (Dense vs. Sparse mappings)",
      "Document chunking algorithms (Recursive, Token-based) and overlaps",
      "Distance calculations metrics (Cosine similarity, Inner Product, L2)",
      "Vector Databases indexing methodologies (FAISS, HNSW)",
      "Context reranking techniques (Cohere Rerank, Cross-Encoders)"
    ],
    progress: "Constructed search retrieval pipelines, configuring varying chunk parameters to compare context recall rates.",
    notes: "Chunk overlap settings preserve sentence integrity across split boundaries. Dense representation distances must correspond strictly to the embedding model's dimensions.",
    experiments: "Wrote FAISS retrieval routines inside LangChain, joining tabular database records with text embeddings to compare query recall scores against SQL queries.",
    relatedProjectsSlugs: ["skillsphere"],
    futureGoals: "Implement hierarchical parent-child document chunking pipelines to process scanned tables and charts."
  },
  "agentic-ai": {
    title: "Agentic AI & Orchestration Workflows",
    whyLearning: "To build multi-agent loops that coordinate plans, write and execute database functions, self-correct syntax errors, and collaborate.",
    concepts: [
      "LLM Function-calling protocols and schemas",
      "Asynchronous ReAct agent loops (Reasoning + Acting)",
      "State preservation and conversational memory management",
      "Hierarchical multi-agent routers",
      "Secure execution sandboxing configurations"
    ],
    progress: "Building state routers in LangGraph to classify user queries and trigger database query tools.",
    notes: "State variables must enforce loop detection constraints, preventing LLMs from falling into repetitive retry loops on tool execution failures.",
    experiments: "Coded a local SQL Executor agent that receives database requests, writes queries, executes against SQLite, checks syntax exceptions, and self-corrects.",
    relatedProjectsSlugs: [],
    futureGoals: "Construct secure sandbox environments to execute arbitrary scripts calculations safely."
  }
};

export default function LearningDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  
  const spec = LEARNING_SPECS[slug];

  if (!spec) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background p-8">
        <h1 className="text-2xl text-foreground font-heading font-bold">Topic Not Found</h1>
        <Link href="/learning" className="text-primary mt-4 flex items-center gap-1 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Learning Portal
        </Link>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => spec.relatedProjectsSlugs.includes(p.slug));

  const getTopicIcon = () => {
    switch (slug) {
      case "llms": return <Brain className="w-10 h-10 text-primary" />;
      case "rag": return <Cpu className="w-10 h-10 text-primary" />;
      default: return <Terminal className="w-10 h-10 text-primary" />;
    }
  };

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Back navigation */}
        <div className="pb-6 border-b border-border mb-6">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Learning Portal</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-secondary/30 border border-border p-8 md:p-10 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 uppercase tracking-widest">
              Active Focus Area
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
              {spec.title}
            </h1>
            <p className="text-sm text-muted-foreground font-mono">
              Category: Artificial Intelligence Research & Engineering
            </p>
          </div>
          <div className="w-24 h-24 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 shadow-inner">
            {getTopicIcon()}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-12 font-sans text-base leading-relaxed text-muted-foreground">
          
          {/* Why I am learning it */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Brain size={20} className="text-primary" />
              <span>Why I Am Learning It</span>
            </h2>
            <p className="text-foreground">{spec.whyLearning}</p>
          </section>

          {/* Core Concepts */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <span>Core Concepts Covered</span>
            </h2>
            <ul className="space-y-3">
              {spec.concepts.map((concept, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground">{concept}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Current Progress */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <ShieldCheck size={20} className="text-primary" />
              <span>Current Progress Status</span>
            </h2>
            <div className="p-5 rounded-xl bg-background border border-border shadow-sm text-foreground font-medium">
              {spec.progress}
            </div>
          </section>

          {/* Personal Study Notes */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <span>Engineering Notes</span>
            </h2>
            <p className="text-foreground italic border-l-4 border-primary/30 pl-4 py-1">
              "{spec.notes}"
            </p>
          </section>

          {/* Code Experiments */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Code size={20} className="text-primary" />
              <span>Hands-on Code Experiments</span>
            </h2>
            <p className="text-foreground">{spec.experiments}</p>
          </section>

          {/* Future Goals */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Target size={20} className="text-primary" />
              <span>Future Learning Goals</span>
            </h2>
            <p className="text-foreground">{spec.futureGoals}</p>
          </section>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6 pt-4">
              <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3">
                Related Sandbox Projects
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.slug}`}
                    className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest inline-block">
                        {p.tags[0]}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-sans line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-6 self-end group-hover:translate-x-1 transition-transform">
                      <span>View Case Study</span>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Back Navigation Footer */}
        <div className="pt-8 border-t border-border">
          <Link
            href="/learning"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Learning Portal</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
