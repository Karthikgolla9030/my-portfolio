"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ArrowLeft, ArrowRight, BookOpen, Target, ShieldCheck
} from "lucide-react";
import { certifications, projects } from "@/data";

interface CertSpec {
  whatItCovered: string;
  whatFoundationLooksLike: {
    title: string;
    description: string;
  }[];
  whyItMatters: string;
  roadmap: string[];
  usefulness: {
    title: string;
    description: string;
  }[];
  relatedProjectsSlugs: string[];
}

const CERT_SPECS: Record<string, CertSpec> = {
  "sales-performance-analysis": {
    whatItCovered: "This internship focused on extracting actionable business insights from sales data. It covered the end-to-end process of preparing datasets, defining key performance metrics, and building visual dashboards to track and compare sales performance.",
    whatFoundationLooksLike: [
      { title: "Data Preparation", description: "Structuring raw sales records for analysis." },
      { title: "Metrics Definition", description: "Creating calculations for revenue, targets, and growth." },
      { title: "Visual Analysis", description: "Translating numbers into understandable dashboards." }
    ],
    whyItMatters: "Understanding sales data is critical for any business to evaluate its performance, identify trends, and make strategic decisions about future operations.",
    roadmap: ["Business Problem", "Data Preparation", "Sales Metrics", "Exploratory Analysis", "Performance Comparison", "Dashboard / Visualization", "Business Insights"],
    usefulness: [
      { title: "Performance Evaluation", description: "Evaluating regional or product-specific sales performance." },
      { title: "Trend Identification", description: "Identifying trends and seasonality in revenue." },
      { title: "Stakeholder Reporting", description: "Providing actionable metrics to business stakeholders." }
    ],
    relatedProjectsSlugs: ["sales-dashboard"]
  },
  "data-analysis-using-python": {
    whatItCovered: "Focused on using Python as a primary tool for data manipulation and analysis. It covered the fundamentals of the language and introduced essential libraries used to clean, structure, and visualize datasets.",
    whatFoundationLooksLike: [
      { title: "Language Fundamentals", description: "Python syntax, control flow, and basic data structures." },
      { title: "Data Handling", description: "Using pandas to read, manipulate, and structure tabular data." },
      { title: "Visualization", description: "Generating charts to interpret data distributions and relationships." }
    ],
    whyItMatters: "Python is the industry standard for programmatic data analysis. This foundation enables transitioning from manual spreadsheet work to automated, reproducible, and scalable data workflows.",
    roadmap: ["Python Fundamentals", "Data Handling", "Pandas & NumPy", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Practical Analysis"],
    usefulness: [
      { title: "Automation", description: "Automating repetitive data cleaning and structuring tasks." },
      { title: "Scale", description: "Handling datasets too large for traditional spreadsheet software." },
      { title: "Preparation", description: "Preparing structured data for further statistical or machine learning models." }
    ],
    relatedProjectsSlugs: ["zomato-analysis"]
  }
};

export default function CertificationDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  
  const cert = certifications.find((c) => c.slug === slug);
  const spec = CERT_SPECS[slug];

  if (!cert || !spec) {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Top Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-border gap-4">
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
              className="inline-flex items-center gap-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full transition-all shadow-sm"
            >
              <ShieldCheck size={16} />
              <span>View Original Certificate</span>
            </a>
          )}
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border uppercase tracking-wider">
              {cert.category}
            </span>
            <span className="text-sm font-semibold text-muted-foreground font-mono">{cert.date}</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground tracking-tight leading-tight">
            {cert.title}
          </h1>
          <p className="text-xl text-muted-foreground font-heading font-semibold flex items-center gap-2">
            Issued by {cert.issuer}
          </p>
        </div>

        <div className="space-y-16 font-sans text-base leading-relaxed text-muted-foreground pt-8">
          
          {/* 01 WHAT IT COVERED */}
          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="text-primary font-mono">01 —</span> What It Covered
            </h2>
            <p className="text-foreground text-lg">{spec.whatItCovered}</p>
          </section>

          {/* 02 WHAT THE FOUNDATION LOOKS LIKE */}
          <section className="space-y-6">
            <h2 className="font-heading font-bold text-xl text-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="text-primary font-mono">02 —</span> What The Foundation Looks Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {spec.whatFoundationLooksLike.map((item, i) => (
                <div key={i} className="p-6 bg-background border border-border rounded-xl space-y-3 shadow-sm hover:border-primary/30 transition-colors">
                  <span className="block text-xs font-bold text-primary uppercase tracking-widest">{item.title}</span>
                  <p className="text-sm text-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 WHY IT MATTERS */}
          <section className="space-y-4 bg-secondary/30 p-8 rounded-2xl border border-border">
            <h2 className="font-heading font-bold text-xl text-foreground uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="text-primary font-mono">03 —</span> Why It Matters
            </h2>
            <p className="text-foreground text-lg italic border-l-2 border-primary pl-4">{spec.whyItMatters}</p>
          </section>

          {/* 04 FOUNDATION ROADMAP */}
          <section className="space-y-6">
            <h2 className="font-heading font-bold text-xl text-foreground uppercase tracking-widest flex items-center gap-2 mb-6">
              <span className="text-primary font-mono">04 —</span> Foundation Roadmap
            </h2>
            <div className="flex flex-col gap-2">
              {spec.roadmap.map((step, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg shadow-sm">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-mono text-xs font-bold text-muted-foreground border border-border">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-foreground">{step}</span>
                  </div>
                  {i < spec.roadmap.length - 1 && (
                    <div className="h-6 w-px bg-border ml-8"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* WHERE IT'S USEFUL */}
          <section className="space-y-6">
            <h2 className="font-heading font-bold text-xl text-foreground uppercase tracking-widest flex items-center gap-2">
              <Target size={20} className="text-primary" />
              Where It's Useful
            </h2>
            <ul className="space-y-4">
              {spec.usefulness.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">{item.title}: </span>
                    <span>{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="space-y-6 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-xl text-foreground uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                Related Project
              </h2>
              <p className="text-sm">See how this learning foundation was applied in practice:</p>
              
              <div className="grid grid-cols-1 gap-6">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.slug}`}
                    className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest inline-block">
                        {p.tags[0]}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-sans line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform whitespace-nowrap">
                      <span>View Project</span>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Back navigation footer */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
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
              <span>View Original Certificate PDF</span>
            </a>
          )}
        </div>

      </div>
    </main>
  );
}
