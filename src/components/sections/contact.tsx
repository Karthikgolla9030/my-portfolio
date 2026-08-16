"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Clock, Send } from "lucide-react";
import { personalInfo } from "@/data";

// Custom brand SVGs
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

export function Contact({ id }: { id?: string }) {
  const { email, location, availability, responseTime } = personalInfo;
  
  // Local Form state
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [subjectVal, setSubjectVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameVal || !emailVal || !messageVal) return;
    
    setStatus("sending");
    // Mock API Submission
    setTimeout(() => {
      setStatus("success");
      setNameVal("");
      setEmailVal("");
      setSubjectVal("");
      setMessageVal("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id={id} className="py-20 md:py-32 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
              Let's Connect
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-sans max-w-md">
            Have a project in mind, a job opportunity, or just want to say hi? Drop a message below!
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-border">
          
          {/* Left Panel: Contact info & Socials (col span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:sticky lg:top-32">
            <div className="space-y-8">
              <h3 className="font-heading font-bold text-2xl text-foreground">
                Contact Information
              </h3>

              <div className="space-y-6 font-sans text-sm text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Email</span>
                    <a href={`mailto:${email}`} className="text-foreground hover:text-primary font-medium transition-colors text-base">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Location</span>
                    <p className="text-foreground font-medium text-base">{location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Briefcase className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Availability</span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {availability}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Response Time</span>
                    <p className="text-foreground font-medium text-base">{responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network list */}
            <div className="pt-8 border-t border-border space-y-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Follow Me
              </h4>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Karthikgolla9030" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-all">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: Interactive Form (col span 7) */}
          <div className="lg:col-span-7 bg-secondary/30 border border-border p-8 md:p-10 rounded-2xl">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wider" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={nameVal}
                    onChange={(e) => setNameVal(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wider" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wider" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={subjectVal}
                  onChange={(e) => setSubjectVal(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wider" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={messageVal}
                  onChange={(e) => setMessageVal(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Hello Karthik, I would love to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-foreground hover:bg-foreground/90 disabled:opacity-70 text-background font-semibold text-sm py-4 rounded-lg transition-all"
              >
                {status === "sending" ? (
                  <span>Sending Message...</span>
                ) : status === "success" ? (
                  <span className="text-emerald-400">Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
