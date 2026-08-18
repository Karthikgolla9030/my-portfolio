"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";
import { certifications } from "@/data";
import Link from "next/link";

// Custom Mock Cert Visual
function CertVisual({ title, issuer }: { title: string; issuer: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-secondary/30 overflow-hidden border border-border flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />

      <div className="absolute inset-3 border border-border flex flex-col items-center justify-between p-5 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm">
        <div className="w-12 h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center mb-2">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>

        <div className="text-center space-y-2 max-w-[180px]">
          <h4 className="text-xs font-heading font-extrabold text-foreground uppercase tracking-widest line-clamp-2 leading-relaxed">
            {title}
          </h4>
          <span className="block text-[9px] font-mono text-muted-foreground font-bold uppercase tracking-widest">
            {issuer}
          </span>
        </div>

        <span className="text-[9px] font-bold font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mt-2">
          VERIFIED CREDENTIAL
        </span>
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const router = useRouter();
  const categories = ["All", "Data Analysis"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  return (
    <main className="w-full bg-background min-h-screen py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Achievements & Credentials
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
            All Certifications
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
            Professional training programs, academic certifications, and industry specializations completed 
            across backend development, cloud engineering, and artificial intelligence domains.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 focus:outline-none ${
                selectedCategory === cat
                  ? "bg-primary border-primary text-background shadow-sm"
                  : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest("a") || target.closest("button")) {
                    return;
                  }
                  router.push(`/certifications/${cert.slug}`);
                }}
                className="group bg-background border border-border hover:border-primary/30 hover:shadow-md p-6 rounded-2xl transition-all duration-300 flex flex-col gap-6 cursor-pointer"
              >
                {/* Visual Shell */}
                <CertVisual title={cert.title} issuer={cert.issuer} />
                
                {/* Information Metadata */}
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-sans pt-1">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="font-mono text-xs">{cert.date}</span>
                  </div>
                </div>

                {/* Bottom links */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
