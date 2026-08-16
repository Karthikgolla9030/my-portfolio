"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { certifications } from "@/data";

// Custom Mock Cert Visual
function CertVisual({ title, issuer }: { title: string; issuer: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-lg bg-secondary/80 overflow-hidden border border-border flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="absolute inset-4 border bg-background/90 flex flex-col items-center justify-between p-4 rounded-lg shadow-sm">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>

        <div className="text-center space-y-1.5 max-w-[160px]">
          <h4 className="text-xs font-heading font-extrabold text-foreground uppercase tracking-wider line-clamp-2 leading-snug">
            {title}
          </h4>
          <span className="block text-[10px] font-mono text-muted-foreground font-bold uppercase tracking-widest">
            {issuer}
          </span>
        </div>

        <span className="text-[9px] font-bold font-mono text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
          VERIFIED
        </span>
      </div>
    </div>
  );
}

export function CertificationsPreview({ id }: { id?: string }) {
  const router = useRouter();
  const featured = certifications.slice(0, 3);

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Achievements
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
              Featured Certifications
            </h2>
            <p className="text-base text-muted-foreground font-sans max-w-xl">
              Professional specializations and learning credentials obtained to validate technical proficiency.
            </p>
          </div>

          <Link
            href="/certifications"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors pb-1 border-b border-primary/30 shrink-0"
          >
            <span>View All Certifications</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-border">
          {featured.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest("a") || target.closest("button")) {
                  return;
                }
                router.push(`/certifications/${cert.slug}`);
              }}
              className="group flex flex-col gap-6 cursor-pointer"
            >
              {/* Visual Shell */}
              <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                <CertVisual title={cert.title} issuer={cert.issuer} />
              </div>
              
              {/* Information Metadata */}
              <div className="space-y-2 flex-1">
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground font-sans">
                  <span>{cert.issuer}</span>
                  <span className="font-mono">{cert.date}</span>
                </div>
              </div>

              {/* Bottom verify link anchor */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-wider">
                  {cert.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
