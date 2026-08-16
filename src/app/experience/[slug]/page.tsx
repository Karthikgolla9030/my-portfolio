"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ArrowLeft, Calendar, Building2, MapPin, ArrowRight
} from "lucide-react";
import { experience, projects } from "@/data";

interface ExperienceSpec {
  experience: string;
  whatIWorkedOn: string[];
  changedApproach: string;
  takeaways: { title?: string; text: string }[];
  relatedProjectsSlugs: string[];
  section2Title?: string;
  section3Title?: string;
  isCustomFormat?: boolean;
  customSections?: { title: string; content: string }[];
}

const EXPERIENCE_SPECS: Record<string, ExperienceSpec> = {
  "apssdc-data-analytics-intern": {
    experience: "This was one of my first opportunities to work with a real-world dataset rather than the small, clean datasets typically used while learning.\n\nWorking with the Bengaluru restaurant data made the process feel different. Before I could find anything interesting, I had to understand what the columns represented, decide which questions were worth asking, and work through the data carefully enough to trust the results.\n\nThat experience helped me move from simply learning Python libraries to actually using them to investigate a dataset.",
    whatIWorkedOn: [
      "Worked with the Bengaluru restaurant dataset in Jupyter Notebook.",
      "Used Python libraries including Pandas, NumPy, Matplotlib, Seaborn, and Plotly for analysis and visualization.",
      "Explored relationships between ratings, pricing, cuisines, restaurant types, locations, and customer engagement.",
      "Created visualizations to make patterns in the data easier to understand.",
      "Interpreted the analysis and documented the observations from the dataset."
    ],
    changedApproach: "One of the biggest things I took from this experience was that analysis does not start with a chart or a Python function.\n\nIt starts with a question.\n\nWhile exploring the dataset, I became more comfortable moving between asking a question, checking what the data could actually tell me, testing it through analysis, and then deciding how to present what I found.\n\nThat made Python feel less like something I was simply learning and more like a tool for investigating problems.",
    takeaways: [
      {
        title: "REAL DATA IS MESSIER",
        text: "Working with a real dataset showed me that understanding and preparing the data is an important part of analysis."
      },
      {
        title: "QUESTIONS DRIVE ANALYSIS",
        text: "I learned to start with what I wanted to understand rather than immediately deciding which chart or technique to use."
      },
      {
        title: "VISUALIZATION IS PART OF THE ANSWER",
        text: "A useful analysis is not only about finding a pattern; it is also about making that pattern understandable."
      }
    ],
    relatedProjectsSlugs: ["zomato-analysis"],
  },
  "infosys-data-analytics-intern": {
    experience: "My internship introduced me to a more business-oriented side of data analytics. Instead of working with data only to find patterns, I started thinking about what those patterns mean for someone making a decision.\n\nWorking with sales data gave me an opportunity to explore how raw information can be organized into meaningful metrics and presented through Power BI. It was also my first practical experience thinking about a dashboard from the perspective of the person using it — what they need to see first, what they might want to compare, and how quickly they can understand the result.",
    whatIWorkedOn: [
      "Prepared and structured sales data for analysis and reporting.",
      "Created calculated metrics and DAX measures for sales and profitability analysis.",
      "Built interactive Power BI visualizations to explore different business dimensions.",
      "Compared products, customers, regions, and sales performance to identify patterns.",
      "Refined the presentation of the analysis so important information was easier to interpret."
    ],
    changedApproach: "One thing this experience changed was how I looked at visualizations.\n\nBefore this, a chart was mainly a way to display the result of an analysis. During the internship, I started thinking about why that particular visual was needed and what question it should help answer.\n\nThat shift made me more conscious of the difference between simply showing data and communicating something useful from it.",
    takeaways: [
      {
        title: "DATA TO DECISIONS",
        text: "I became more comfortable thinking about analysis from the perspective of the person who needs to use the result."
      },
      {
        title: "METRICS NEED CONTEXT",
        text: "A number becomes more useful when it can be compared across products, regions, customers, or time."
      },
      {
        title: "GOOD DASHBOARDS REQUIRE EDITING",
        text: "Not everything discovered during analysis needs to appear on the final screen. Deciding what to show is part of the work."
      }
    ],
    relatedProjectsSlugs: ["sales-dashboard"],
  },
  "data-nexus-technical-lead": {
    experience: "Being a Technical Lead for the Data Science branch gave me a different kind of responsibility from working on my own projects.\n\nI was part of the group responsible for keeping the technical side of the branch active — helping plan technical activities, sharing what I knew, and creating opportunities for students to learn by doing rather than only listening.\n\nIt also meant that I couldn't always approach a topic from my own perspective. I had to think about how to make a technical idea understandable to someone seeing it for the first time.",
    section2Title: "WHAT I CONTRIBUTED",
    whatIWorkedOn: [
      "Helped plan and coordinate technical activities for the Data Science branch.",
      "Supported peers with programming and data-related concepts when they needed guidance.",
      "Contributed to hands-on technical sessions and learning activities.",
      "Shared resources, approaches, and ideas that helped make technical learning more practical.",
      "Took responsibility for the technical side of branch activities rather than participating only as a learner."
    ],
    section3Title: "WHAT THE ROLE TAUGHT ME",
    changedApproach: "The biggest change was realizing that technical knowledge becomes more useful when you can communicate it clearly to someone else.\n\nWhen helping others, I often had to simplify a problem, approach it from a different angle, or explain why something worked instead of simply giving an answer.\n\nThat made me more deliberate about how I understand and communicate technical concepts myself.",
    takeaways: [
      {
        title: "TAKING OWNERSHIP",
        text: "Being responsible for technical activities taught me to think beyond my own work and follow through on things that involved others."
      },
      {
        title: "EXPLAINING IS ANOTHER FORM OF LEARNING",
        text: "Helping someone understand a concept often exposed gaps in my own understanding and pushed me to learn it more clearly."
      },
      {
        title: "TECHNICAL WORK IS ALSO ABOUT PEOPLE",
        text: "Good technical knowledge is more useful when it can be shared, communicated, and applied with others."
      }
    ],
    relatedProjectsSlugs: [],
  },
  "academic-personal-projects": {
    experience: "",
    whatIWorkedOn: [],
    changedApproach: "",
    takeaways: [],
    relatedProjectsSlugs: ["skillsphere", "linkora"],
    isCustomFormat: true,
    customSections: [
      {
        title: "BUILDING TO LEARN",
        content: "My academic and personal projects are where I turn ideas into working software. I use them to strengthen my skills through practical implementation rather than theory alone."
      },
      {
        title: "FROM IDEA TO IMPLEMENTATION",
        content: "I work across Python, backend development, databases, APIs, data analysis, and emerging AI technologies, depending on the problem I'm exploring. Some projects begin as academic work; others come from ideas I want to build independently."
      },
      {
        title: "WHY I KEEP BUILDING",
        content: "Personal projects give me room to experiment, make mistakes, debug problems, and understand how different technologies work together. Each project adds another layer to how I approach software — from breaking down a problem to building, testing, and refining the solution."
      }
    ]
  }
};

export default function ExperienceDetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  
  const expItem = experience.find((e) => e.slug === slug);
  const spec = EXPERIENCE_SPECS[slug] || EXPERIENCE_SPECS["academic-personal-projects"];

  if (!expItem) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background p-8">
        <h1 className="text-2xl text-foreground font-heading font-bold">Experience Record Not Found</h1>
        <Link href="/#experience" className="text-primary mt-4 flex items-center gap-1 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Experience
        </Link>
      </div>
    );
  }

  // Find related projects objects from data
  const relatedProjects = projects.filter((p) => spec.relatedProjectsSlugs.includes(p.slug));

  const getTagStyle = (type: string) => {
    switch (type) {
      case "Internship":
      case "Training / Internship":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Training":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Leadership":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "Projects":
      case "Self Learning":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-secondary text-foreground border-border";
    }
  };

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Experience</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-secondary/30 border border-border p-8 md:p-10 rounded-2xl shadow-sm space-y-6">
          <div className="space-y-4">
            <span className={`inline-block text-[10px] font-bold font-mono px-3 py-1 rounded-full border uppercase tracking-widest ${getTagStyle(expItem.type)}`}>
              {expItem.type}
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
              {expItem.role}
            </h1>
            <p className="text-base text-muted-foreground font-heading font-semibold flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
              <span className="flex items-center gap-1 text-foreground">
                <Building2 size={16} className="text-muted-foreground" />
                {expItem.company}
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground font-mono">
                <Calendar size={14} />
                {expItem.duration}
              </span>
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-12 font-sans text-base leading-relaxed text-muted-foreground">
          
          {spec.isCustomFormat && spec.customSections ? (
            spec.customSections.map((sec, i) => (
              <section key={i} className="space-y-4">
                <h2 className="font-heading font-bold text-lg text-foreground border-b border-border pb-2">
                  {sec.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">{sec.content}</p>
              </section>
            ))
          ) : (
            <>
              {/* 01 — THE EXPERIENCE */}
              <section className="space-y-4">
                <h2 className="font-heading font-bold text-lg text-foreground border-b border-border pb-2">
                  <span className="text-primary mr-2 font-mono text-sm">01 —</span> THE EXPERIENCE
                </h2>
                <p className="text-foreground whitespace-pre-line">{spec.experience}</p>
              </section>

              {/* 02 — WHAT I WORKED ON / CONTRIBUTED */}
              <section className="space-y-4">
                <h2 className="font-heading font-bold text-lg text-foreground border-b border-border pb-2">
                  <span className="text-primary mr-2 font-mono text-sm">02 —</span> {spec.section2Title || "WHAT I WORKED ON"}
                </h2>
                <ul className="space-y-2 list-disc list-inside text-foreground marker:text-primary">
                  {spec.whatIWorkedOn.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* 03 — WHAT CHANGED IN MY APPROACH / ROLE TAUGHT ME */}
              <section className="space-y-4">
                <h2 className="font-heading font-bold text-lg text-foreground border-b border-border pb-2">
                  <span className="text-primary mr-2 font-mono text-sm">03 —</span> {spec.section3Title || "WHAT CHANGED IN MY APPROACH"}
                </h2>
                <p className="text-foreground whitespace-pre-line">{spec.changedApproach}</p>
              </section>

              {/* 04 — WHAT I TOOK FROM IT */}
              <section className="space-y-4">
                <h2 className="font-heading font-bold text-lg text-foreground border-b border-border pb-2">
                  <span className="text-primary mr-2 font-mono text-sm">04 —</span> WHAT I TOOK FROM IT
                </h2>
                <ul className="space-y-4 list-disc list-inside text-foreground marker:text-primary">
                  {spec.takeaways.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point.title && <span className="font-bold text-foreground mr-2">{point.title} &mdash;</span>}
                      <span className={point.title ? "text-muted-foreground" : ""}>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* RELATED PROJECT */}
          {relatedProjects.length > 0 && (
            <section className="space-y-4 pt-4">
              <h2 className="font-heading font-bold text-sm text-muted-foreground uppercase tracking-widest border-b border-border pb-2">
                RELATED PROJECT{relatedProjects.length > 1 ? 'S' : ''}
              </h2>
              
              <div className="flex flex-col gap-3">
                {relatedProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                  >
                    <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {proj.title}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                      View project <ArrowRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Bottom Back Nav Bar */}
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Experience</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span>Back to Home</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}
