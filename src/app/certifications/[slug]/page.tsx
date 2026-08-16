"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ArrowLeft, ArrowRight, Calendar, Award, ExternalLink, ShieldCheck, 
  BookOpen, Compass, Cpu, Target, FileText, Download 
} from "lucide-react";
import { certifications, projects } from "@/data";

interface CertSpec {
  overview: string;
  whyIChoseIt: string;
  skillsGained: {
    technical: string;
    practical: string;
    tools: string;
    concepts: string;
  };
  howIAppliedIt: string;
  takeaways: string;
  relatedProjectsSlugs: string[];
}

const CERT_SPECS: Record<string, CertSpec> = {
  "python-for-data-science": {
    overview: "Rigorous academic course by IIT Madras covering Python primitives, core scientific libraries, basic linear algebra, and data visualisation frameworks.",
    whyIChoseIt: "To establish a solid data structure foundation and formalise my Python syntax practices with standard mathematical libraries.",
    skillsGained: {
      technical: "Matrix Algebra & Statistical Summaries",
      practical: "Dataset Cleansing & Data Formatting",
      tools: "Pandas, NumPy, Matplotlib",
      concepts: "Array Manipulation & Vectorization Operations"
    },
    howIAppliedIt: "Cleaned and structured dynamic metrics tables for transaction analysis modules.",
    takeaways: "Realized that vectorized linear algebra operations in NumPy are orders of magnitude faster than standard Python nested loop operations.",
    relatedProjectsSlugs: ["sales-dashboard"]
  },
  "machine-learning": {
    overview: "Deep-dive into supervised machine learning algorithms, gradient descent optimization, cost minimization formulas, regularization, and classification systems.",
    whyIChoseIt: "To learn the mathematics behind decision trees, neural network layer weights, and parameter optimizations.",
    skillsGained: {
      technical: "Supervised & Unsupervised learning formulas",
      practical: "Cost function minimization & hyperparameter tuning",
      tools: "Python, Scikit-Learn",
      concepts: "Gradient Descent, Regularization & Overfitting"
    },
    howIAppliedIt: "Trained classification algorithms on user engagement logs for community skill-matching analytics.",
    takeaways: "Learned how regularization acts as a crucial math lever to combat model overfitting under real-world data constraints.",
    relatedProjectsSlugs: ["skillsphere"]
  },
  "deep-learning-specialization": {
    overview: "Multi-course specialization detailing Deep Neural Networks, hyperparameter optimization, Convolutional Networks (CNNs), and Sequence Models (RNNs/LSTMs).",
    whyIChoseIt: "To learn how to assemble multi-layer neural networks and sequence models to process high-dimensional datasets.",
    skillsGained: {
      technical: "Backpropagation math & optimization algorithms",
      practical: "CNN convolution filters & sequence vector mappings",
      tools: "PyTorch, NumPy",
      concepts: "Adam Optimizer, Batch Normalization & Dropout layers"
    },
    howIAppliedIt: "Implemented conversational retrieval embedding networks for automated match recommendations.",
    takeaways: "Understanding the underlying forward/backward math is critical to debugging model weights issues like exploding/vanishing gradients.",
    relatedProjectsSlugs: []
  },
  "aws-cloud-practitioner": {
    overview: "Introduction to cloud concepts, core infrastructure services (EC2, S3, RDS, DynamoDB), network security architecture, billing, and IAM support structures.",
    whyIChoseIt: "To learn standard cloud infrastructure design principles and understand how databases are deployed and managed at scale.",
    skillsGained: {
      technical: "Cloud Architecture & Security Policies",
      practical: "EC2 provisioning & IAM user access mappings",
      tools: "AWS Console, AWS CLI, S3, RDS",
      concepts: "Auto-scaling, High Availability & Serverless Deployments"
    },
    howIAppliedIt: "Configured database instances and security policies for sandbox environment setups.",
    takeaways: "Shifted my software engineering thinking from local host development configurations to high-availability serverless deployments.",
    relatedProjectsSlugs: []
  },
  "prompt-engineering": {
    overview: "Designing prompts for large language models, pattern-based prompt designs, chain-of-thought methods, and context injection structures.",
    whyIChoseIt: "To systematically leverage generative LLM models inside software interfaces.",
    skillsGained: {
      technical: "Context Windows Management & System Prompts",
      practical: "Chain-of-Thought Prompting & Prompt Patterns",
      tools: "OpenAI GPT-4, Anthropic Claude, LangChain",
      concepts: "In-Context Learning, Few-shot Prompting & Meta-prompts"
    },
    howIAppliedIt: "Formulated system instruction templates for conversational recommendation tools.",
    takeaways: "Learned that minor framing changes in the system prompt yield massive changes in LLM output reliability.",
    relatedProjectsSlugs: ["skillsphere"]
  }
};

export default function CertificationDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  
  const cert = certifications.find((c) => c.slug === slug);
  const spec = CERT_SPECS[slug] || CERT_SPECS["python-for-data-science"];

  if (!cert) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background p-8">
        <h1 className="text-2xl text-foreground font-heading font-bold">Credential Not Found</h1>
        <Link href="/certifications" className="text-primary mt-4 flex items-center gap-1 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Certifications
        </Link>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => spec.relatedProjectsSlugs.includes(p.slug));

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      {/* NEW HERO WRAPPER - Wider for 2 column layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 mb-16 md:mb-24">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Certifications</span>
          </Link>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <ShieldCheck size={16} />
              <span className="hidden sm:inline">Verify Credential</span>
              <span className="sm:hidden">Verify</span>
            </a>
          )}
        </div>

        {/* Two-Column Hero */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Certificate Image */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="rounded-xl overflow-hidden border border-border shadow-md bg-secondary/20 p-2">
              {cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-auto object-contain rounded-lg border border-border/50" 
                />
              ) : (
                <div className="w-full aspect-[4/3] flex flex-col items-center justify-center text-muted-foreground/50 font-mono text-sm gap-2">
                  <Award size={32} className="opacity-20" />
                  <span>Certificate Image Pending</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-[55%] space-y-8 pt-2">
            <div>
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight mb-3">
                {cert.title}
              </h1>
              <p className="text-xl text-muted-foreground font-heading font-semibold">
                {cert.issuer}
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground font-sans leading-relaxed">
              {spec.overview}
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-6 border-t border-border/60">
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Issued</span>
                <span className="text-sm font-semibold text-foreground font-mono">{cert.date}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Duration</span>
                <span className="text-sm font-semibold text-foreground font-mono">Self-paced</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Credential ID</span>
                <span className="text-sm font-semibold text-foreground font-mono truncate block" title={cert.id || "N/A"}>{cert.id || "N/A"}</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Platform</span>
                <span className="text-sm font-semibold text-foreground font-mono truncate block" title={cert.issuer}>{cert.issuer}</span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm group"
              >
                <span>View Credential</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* EXISTING CONTENT WRAPPER - Standard width */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Technical Study Content */}
        <div className="space-y-12 font-sans text-base leading-relaxed text-muted-foreground">
          
          {/* Program Overview */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <span>Program Overview</span>
            </h2>
            <p className="text-foreground">{spec.overview}</p>
          </section>

          {/* Why I Chose It */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Compass size={20} className="text-primary" />
              <span>Why I Chose It</span>
            </h2>
            <p className="text-foreground">{spec.whyIChoseIt}</p>
          </section>

          {/* Skills Gained Grid */}
          <section className="space-y-6">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Cpu size={20} className="text-primary" />
              <span>Skills & Competencies Gained</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-background border border-border rounded-xl space-y-2 shadow-sm">
                <span className="block text-xs font-bold text-primary uppercase tracking-widest">Technical Math</span>
                <p className="text-sm text-foreground font-medium">{spec.skillsGained.technical}</p>
              </div>
              <div className="p-5 bg-background border border-border rounded-xl space-y-2 shadow-sm">
                <span className="block text-xs font-bold text-primary uppercase tracking-widest">Practical Capability</span>
                <p className="text-sm text-foreground font-medium">{spec.skillsGained.practical}</p>
              </div>
              <div className="p-5 bg-background border border-border rounded-xl space-y-2 shadow-sm">
                <span className="block text-xs font-bold text-primary uppercase tracking-widest">Frameworks & Tools</span>
                <p className="text-sm text-foreground font-medium">{spec.skillsGained.tools}</p>
              </div>
              <div className="p-5 bg-background border border-border rounded-xl space-y-2 shadow-sm">
                <span className="block text-xs font-bold text-primary uppercase tracking-widest">Theoretical Concepts</span>
                <p className="text-sm text-foreground font-medium">{spec.skillsGained.concepts}</p>
              </div>
            </div>
          </section>

          {/* How I Applied It */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Target size={20} className="text-primary" />
              <span>How I Applied It</span>
            </h2>
            <p className="text-foreground">{spec.howIAppliedIt}</p>
          </section>

          {/* Key Takeaways */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              <span>Key Takeaways</span>
            </h2>
            <p className="text-foreground">{spec.takeaways}</p>
          </section>



          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6 pt-4">
              <h2 className="font-heading font-bold text-2xl text-foreground border-b border-border pb-3">
                Related Projects Using These Skills
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

        {/* Back navigation footer */}
        <div className="pt-8 border-t border-border">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Certifications</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
