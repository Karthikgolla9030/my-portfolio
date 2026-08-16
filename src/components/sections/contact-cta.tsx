"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Wrapper Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-secondary/30 border border-border p-10 md:p-16 rounded-2xl text-center flex flex-col items-center justify-center space-y-8 shadow-sm transition-all duration-300"
        >
          {/* Top visual dot indicator */}
          <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center text-primary shadow-sm mb-2">
            <MessageSquare size={24} />
          </div>

          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground tracking-tight leading-tight">
              Let's Connect & Work Together
            </h2>
            <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Whether you have an interesting job opportunity, want to collaborate on open-source models, or just want to talk software systems, my inbox is always open.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold text-sm px-8 py-4 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              <span>Send a Message</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="mailto:karthik@example.com"
              className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground hover:bg-secondary font-semibold text-sm px-8 py-4 rounded-lg transition-colors"
            >
              <Mail size={16} />
              <span>Email Directly</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
