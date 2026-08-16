"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "#hero", type: "scroll" },
  { label: "About", path: "#about", type: "scroll" },
  { label: "Projects", path: "#projects", type: "scroll" },
  { label: "Skills", path: "#skills", type: "scroll" },
  { label: "Experience", path: "#experience", type: "scroll" },
  { label: "Certifications", path: "#certifications", type: "scroll" },
  { label: "Learning", path: "#learning", type: "scroll" },
  { label: "Contact", path: "#contact", type: "scroll" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/about") { setActiveSection("about"); return; }
    if (pathname === "/learning") { setActiveSection("learning"); return; }
    if (pathname.startsWith("/projects")) { setActiveSection("projects"); return; }
    if (pathname.startsWith("/certifications")) { setActiveSection("certifications"); return; }
    if (pathname.startsWith("/experience")) { setActiveSection("experience"); return; }
    if (pathname !== "/") { setActiveSection(""); return; }

    const sections = ["hero", "about", "projects", "skills", "experience", "certifications", "learning", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; 
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLinkActive = (item: typeof navItems[0]) => activeSection === item.path.substring(1);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (pathname === "/") {
      e.preventDefault();
      const targetId = item.path.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/${item.path}`);
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            KG <span className="text-muted-foreground font-normal mx-1">/</span> Karthik Golla
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const active = isLinkActive(item);
            return (
              <Link
                key={item.path}
                href={`/${item.path}`}
                onClick={(e) => handleLinkClick(e, item)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none rounded-md",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-secondary rounded-md -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="/Karthik_Golla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md transition-all duration-200"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Resume Actions */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="/Karthik_Golla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-medium text-xs px-3 py-1.5 rounded-md transition-all"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const active = isLinkActive(item);
                return (
                  <Link
                    key={item.path}
                    href={`/${item.path}`}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleLinkClick(e, item);
                    }}
                    className={cn(
                      "block px-4 py-3 rounded-md text-base font-medium transition-colors focus:outline-none",
                      active
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
