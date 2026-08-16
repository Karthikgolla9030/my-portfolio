"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

// Social Custom SVG brand icons
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background border-t border-border relative z-10 py-12 md:py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand Info (col span 5) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-heading font-bold text-base tracking-tight text-foreground">
                KG <span className="text-muted-foreground font-normal mx-1">/</span> Karthik Golla
              </span>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground font-sans max-w-sm leading-relaxed">
              Data Science graduate building web applications with Python, while exploring data, machine learning, and AI.
            </p>
          </div>

          {/* Directory Map (col span 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest">
              Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
              <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Socials & Top (col span 3) */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end justify-between h-full min-h-[80px]">
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest md:text-right">
                Connect
              </h4>
              <div className="flex items-center gap-3 justify-start md:justify-end">
                <a href="https://github.com/Karthikgolla9030" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="GitHub">
                  <GithubIcon size={15} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="LinkedIn">
                  <LinkedinIcon size={15} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="Twitter">
                  <TwitterIcon size={15} />
                </a>
                <a href="mailto:karthik@example.com" className="p-2 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="Email">
                  <Mail size={15} />
                </a>
              </div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrolltoTop}
              className="group self-start md:self-end flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary font-medium transition-colors mt-2"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-sans text-center sm:text-left">
            &copy; {new Date().getFullYear()} Karthik Golla. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground font-sans tracking-wider">
            DESIGNED & BUILT BY KG
          </p>
        </div>

      </div>
    </footer>
  );
}
