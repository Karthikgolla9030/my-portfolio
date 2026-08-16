"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Globe, FileText, CheckCircle, Database as DbIcon, 
  Code, Terminal, AlertTriangle, ArrowRight, Share2, Layers, Cpu, X 
} from "lucide-react";
import { projects } from "@/data";
import { cn } from "@/lib/utils";

// Custom Github Icon
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// ---------------------------------------------------------------------
// High-Fidelity Local Technical Specifications Mapping by Slug
// ---------------------------------------------------------------------

interface TechSpec {
  businessProblem: string;
  objectives: string[];
  features: string[];
  architectureDesc: string;
  workflowDesc: string;
  databaseDesign: { table: string; columns: { name: string; type: string; desc: string }[] }[];
  apiDesign: { method: "GET" | "POST" | "PUT" | "DELETE"; path: string; req?: string; res: string; desc: string }[];
  folderStructure: string;
  journey: string;
  challenges: { title: string; desc: string; sol: string }[];
  lessons: string[];
  improvements: string[];
  matchmakingDesc?: string;
  friendshipSystem?: string;
  messagingDesc?: string;
  realtimeArchitecture?: string;
  webSocketArchitecture?: string;
  deployment?: string;
  security?: string;
}

const PROJECT_TECH_SPECS: Record<string, TechSpec> = {
  linkora: {
    businessProblem: "Users looking to meet like-minded individuals online face friction with generic chat apps that lack interest-based filtering, leading to poor connection quality and delayed real-time communication.",
    objectives: [
      "Develop a random matchmaking engine based on shared profile interests.",
      "Implement highly concurrent WebSockets for instant messaging.",
      "Ensure robust user trust with blocks, reports, and friendship pinning."
    ],
    features: [
      "Random matching queue using a dynamic correlation algorithm.",
      "Real-time WebSocket chat via Django Channels and Redis.",
      "Comprehensive profile and friendship management system."
    ],
    architectureDesc: "A modern decoupled architecture with a React (Vite) frontend communicating with a Django/DRF backend via HTTP for REST APIs and WebSocket (ASGI) for real-time events.",
    workflowDesc: "1. User enters queue -> 2. MatchQueue checks active entries -> 3. Match found -> 4. Workspace & Channel created -> 5. Users joined to WS room.",
    databaseDesign: [
      {
        table: "MatchQueue & UserMatchHistory",
        columns: [
          { name: "id", type: "UUID (PK)", desc: "Unique entry ID" },
          { name: "user", type: "FK", desc: "User seeking match" },
          { name: "matched_workspace", type: "FK", desc: "Resulting chat room" },
          { name: "match_score", type: "INT", desc: "Calculated correlation score" }
        ]
      },
      {
        table: "Message & DirectMessage",
        columns: [
          { name: "id", type: "UUID (PK)", desc: "Message ID" },
          { name: "channel", type: "FK", desc: "Target channel" },
          { name: "content", type: "TEXT", desc: "Message body" },
          { name: "is_delivered", type: "BOOLEAN", desc: "Delivery status" }
        ]
      }
    ],
    apiDesign: [
      {
        method: "GET",
        path: "/api/v1/workspaces/match/",
        res: '{\n  "status": "matched",\n  "workspace_id": "uuid-..."\n}',
        desc: "Polls or fetches the current matchmaking status."
      },
      {
        method: "POST",
        path: "/api/v1/auth/login",
        req: '{\n  "email": "user@example.com",\n  "password": "***"\n}',
        res: '{\n  "access_token": "...",\n  "refresh": "..."\n}',
        desc: "Authenticates user and returns JWT."
      }
    ],
    folderStructure: `chat_app/\n├── backend-django/        # API & ASGI Backend\n│   ├── apps/              # Django Apps (users, messages, workspaces)\n│   ├── config/            # Settings & Routing (asgi.py)\n│   └── requirements.txt\n├── frontend/              # Vite React Client\n│   ├── src/               # React Components\n│   └── package.json\n└── docker-compose.yml     # Services Configuration`,
    journey: "Started by designing the complex relational models for Workspaces and Users. Then implemented the matchmaking logic in Django, followed by configuring ASGI and Redis for the WebSocket consumers.",
    challenges: [
      {
        title: "WebSocket Connection State",
        desc: "Managing dropped connections and ensuring messages aren't lost when users disconnect briefly.",
        sol: "Implemented a robust reconnect strategy on the frontend and state tracking (is_delivered) in the Message model."
      }
    ],
    lessons: [
      "Mastered Django Channels and the ASGI specification.",
      "Gained deep understanding of Redis as a channel layer for pub/sub messaging."
    ],
    improvements: [
      "Implement WebRTC for voice/video calling within matched workspaces.",
      "Add an AI-based moderation bot to filter inappropriate messages."
    ],
    matchmakingDesc: "The matchmaking system utilizes a `MatchQueue` where active users wait. A background task or view checks for compatibility using the `looking_for` and `interests` arrays from `UserProfile`, generating a `UserMatchHistory` record with a `match_score` before dropping users into a dedicated `Workspace`.",
    friendshipSystem: "Users can send `FriendRequest`s. Once accepted, a `Friendship` record is created, allowing users to pin or favorite their connections, tracking engagement outside of the random matchmaking loop.",
    messagingDesc: "Messages are categorized into Workspace `Channel` chats and `DirectMessage`s. The schema supports nested replies (`parent_message`), delivery receipts (`is_delivered`), and read statuses (`is_read`).",
    realtimeArchitecture: "The frontend maintains a persistent WebSocket connection to the backend. Django Channels handles incoming frames, routing them to `ChatConsumer`. Redis broadcasts messages across multiple Daphne/Uvicorn workers, ensuring seamless real-time delivery.",
    webSocketArchitecture: "WebSocket connections are authenticated via JWT query tokens. The `ChatConsumer` joins a specific Redis group corresponding to the `workspace_id`. When a message is received, it's saved to PostgreSQL and asynchronously broadcast to the group.",
    deployment: "The application is containerized using Docker, with `docker-compose` orchestrating the Django backend, Vite frontend, Redis, and PostgreSQL instances.",
    security: "Employs strict CORS policies, JWT-based authentication for both HTTP and WebSockets, and explicit role checking for Workspace and Channel access."
  },
  skillsphere: {
    businessProblem: "Local neighborhoods lack central pathways to exchange expertise (e.g. guitar lessons, coding advice) while ensuring participant credibility.",
    objectives: [
      "Configure neighborhood skill matches with matching algorithms.",
      "Implement real-time chat between mentors and learners.",
      "Deploy skills verification tests ensuring profile authenticity."
    ],
    features: [
      "Match-making algorithm scanning skill profile filters.",
      "Direct chat channels linking verified learners and tutors.",
      "Dashboard metrics displaying active courses and engagement status."
    ],
    architectureDesc: "Monolithic Django application serving starlit interfaces natively, leveraging Django ORM queries and relational mapping triggers.",
    workflowDesc: "1. Learner selects skill -> 2. Algorithm scans profiles -> 3. Matches are scored and listed -> 4. Peer initiates chat window.",
    databaseDesign: [
      {
        table: "profiles",
        columns: [
          { name: "id", type: "INT (PK)", desc: "Unique user profile ID" },
          { name: "bio", type: "TEXT", desc: "User summary context details" },
          { name: "skills_offered", type: "VARCHAR(255)", desc: "Expertise categories" }
        ]
      },
      {
        table: "matches",
        columns: [
          { name: "id", type: "INT (PK)", desc: "Match reference tag" },
          { name: "score", type: "FLOAT", desc: "Correlation index match rating" }
        ]
      }
    ],
    apiDesign: [
      {
        method: "GET",
        path: "/api/v1/skills/match?user_id=12",
        res: '[\n  {\n    "mentor_id": 4,\n    "score": 0.89,\n    "skill": "Python"\n  }\n]',
        desc: "Retrieves list of recommended tutors."
      }
    ],
    folderStructure: `skillsphere/               # Django Monolith\n├── match_engine/          # Matching logic routines\n│   ├── algorithms.py      # Python scoring engine\n├── templates/             # Server-rendered HTML\n└── static/                # Layout style assets`,
    journey: "Structured the relational ORM schemas to store user skills metadata, then focused on tuning the scoring algorithm, and built responsive forms for skill profiles.",
    challenges: [
      {
        title: "Slow Match Performance",
        desc: "Large databases queries nested inside calculation loops delayed matching runs.",
        sol: "Cached matches inside session objects and used Django select_related statements."
      }
    ],
    lessons: [
      "Learned to leverage Django ORM select_related for query optimizations.",
      "Designed secure database transaction models."
    ],
    improvements: [
      "Incorporate video call structures inside matching channels.",
      "Add automated AI grading criteria on quiz modules."
    ]
  },
  "sales-dashboard": {
    businessProblem: "Sales managers require unified performance metrics to detect underperforming products and sales channels without manually extracting spreadsheets.",
    objectives: [
      "Establish end-to-end Power BI sales dashboards.",
      "Calculate key metrics (YoY growth, regional profit margins) using DAX functions.",
      "Design clean visual reports detailing monthly metrics highlights."
    ],
    features: [
      "Interactive KPI cards highlighting revenue milestones.",
      "Regional map visual showcasing distribution sales thresholds.",
      "Clustered column metrics analyzing top products channels."
    ],
    architectureDesc: "Data pipeline pulling CSV transaction datasets, cleaning values via Power Query, structuring star-schema databases, and serving reports inside Power BI desktop.",
    workflowDesc: "1. Sales file imported -> 2. Power Query handles null records -> 3. Data model joins Tables -> 4. DAX variables execute -> 5. Visual filters refresh.",
    databaseDesign: [
      {
        table: "Sales_Data (Data Model)",
        columns: [
          { name: "Order_ID", type: "VARCHAR", desc: "Unique transaction order tag" },
          { name: "Product_ID", type: "VARCHAR", desc: "Relational join field to product catalog" },
          { name: "Sales_Amount", type: "DECIMAL", desc: "Revenue generated on transaction" }
        ]
      }
    ],
    apiDesign: [
      {
        method: "GET",
        path: "DAX: Total Revenue",
        res: "Total Revenue = SUM(Sales_Data[Sales_Amount])",
        desc: "Aggregates revenue across selected filter criteria."
      }
    ],
    folderStructure: `sales_dashboard/           # Power BI Project\n├── Sales_Analysis.pbix    # Core PBIX project\n├── assets/                # Visual themes JSON\n└── data/                  # Source CSV spreadsheets`,
    journey: "Cleaned raw records, loaded them into Power BI modeling portal, structured table dimensions, engineered calculated fields via DAX, and styled visual cards.",
    challenges: [
      {
        title: "Context Filter Conflicts",
        desc: "Inconsistent dates mapping messed up Year-over-Year comparison loops.",
        sol: "Built custom Calendar dimension tables and mapped standard date calculations."
      }
    ],
    lessons: [
      "Mastered context relationships inside Power BI modeling.",
      "Understood how to construct clear, recruiter-friendly KPIs."
    ],
    improvements: [
      "Integrate SQL databases backend connectors to automate data load.",
      "Add automated scheduling pipelines refreshing dashboards daily."
    ]
  }
};

// Fallback Spec for other projects
const FALLBACK_SPEC: TechSpec = {
  businessProblem: "Technical workflows are manual, fragmented, and lack automated validation pipelines.",
  objectives: [
    "Build secure pipelines automating database queries.",
    "Optimize backend runtimes using clean code guidelines.",
    "Provide clear interfaces tracking parameters."
  ],
  features: [
    "Interactive dashboard plotting stats parameters.",
    "Automated alerts indicating errors/performance flags.",
    "Export files supporting dynamic formatting."
  ],
  architectureDesc: "Modular component pipeline distributing computational tasks across REST nodes.",
  workflowDesc: "1. User initiates command -> 2. Server triggers routine -> 3. Relational models query -> 4. Outputs display.",
  databaseDesign: [
    {
      table: "records",
      columns: [
        { name: "id", type: "INT", desc: "Unique primary identifier" },
        { name: "status", type: "VARCHAR", desc: "Active state variable" }
      ]
    }
  ],
  apiDesign: [
    {
      method: "GET",
      path: "/api/v1/records",
      res: '[\n  {\n    "id": 1,\n    "status": "ready"\n  }\n]',
      desc: "Fetches list of active system records."
    }
  ],
  folderStructure: `src/\n├── components/            # UI components\n├── lib/                   # Code helpers\n└── app/                   # App routes`,
  journey: "Researched constraints, designed system modules, configured interfaces, and validated builds.",
  challenges: [
    {
      title: "Performance Latency",
      desc: "High load routines delayed page render speeds.",
      sol: "Optimized functions and cached static responses."
    }
  ],
  lessons: [
    "Understood caching boundaries.",
    "Practiced standard code formatting routines."
  ],
  improvements: [
    "Integrate telemetry monitoring hooks.",
    "Add more test scripts."
  ]
};



function ProjectHero({ project }: { project: any }) {
  // Derive a short category label from tags or role
  const categoryLabel = project.stats?.role || (project.tags?.[0] ?? "Project");

  return (
    <div className="mb-16 border-b border-border pb-16">
      <div className="max-w-4xl space-y-10">

        {/* Category label */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
            {categoryLabel}
          </span>
          <span className="h-px w-8 bg-primary/40 inline-block" />
          {project.subtitle && (
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
              {project.subtitle}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.05]">
          {project.title}
        </h1>

        {/* Descriptions */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
            {project.description}
          </p>
          {project.longDescription && project.longDescription !== project.description && (
            <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
              {project.longDescription}
            </p>
          )}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          {project.slug !== 'sales-dashboard' && project.slug !== 'zomato-analysis' && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {(project.githubUrl || project.slug === 'sales-dashboard' || project.slug === 'zomato-analysis') && (
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground hover:bg-secondary font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>

        {/* Metadata row */}
        <div className="pt-8 border-t border-border">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
            <div className="space-y-1.5">
              <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Duration</span>
              <span className="text-sm font-bold text-foreground">{project.stats?.duration || 'Ongoing'}</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">My Role</span>
              <span className="text-sm font-bold text-foreground">{project.stats?.role || 'Developer'}</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Tech Stack</span>
              <span className="text-sm font-bold text-foreground block" title={project.stats?.techStack}>
                {project.stats?.techStack}
              </span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Status</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping shrink-0" />
                {project.stats?.status || 'Completed'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ZomatoCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");

  React.useEffect(() => {
    const anchors = ["overview", "why", "questions", "analysis", "visualizations", "insights", "contribution", "challenges", "lessons", "future"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const anchor of anchors) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "why", label: "Why This Analysis" },
    { id: "questions", label: "Questions" },
    { id: "analysis", label: "Analysis" },
    { id: "visualizations", label: "Visualizations" },
    { id: "insights", label: "Insights" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges" },
    { id: "lessons", label: "Lessons Learned" },
    { id: "future", label: "Future Scope" }
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Case Study: {project.title}
          </span>
        </div>

        <ProjectHero project={project} />

        {/* Split documentation portal layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="w-full lg:w-64 shrink-0 sticky top-28 hidden lg:block space-y-6">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground">DOCUMENTATION</h3>
            <nav className="flex flex-col gap-2 border-l border-border pl-5 text-sm font-medium">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`block py-1.5 transition-colors focus:outline-none relative -left-[21px] pl-[20px] border-l-2 ${activeAnchor === item.id ? "text-primary border-primary font-bold" : "text-muted-foreground hover:text-foreground border-transparent"}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content */}
          <div className="flex-1 max-w-4xl space-y-24 font-sans text-muted-foreground">
            
            {/* Overview */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Zomato Bengaluru Data Analysis explores restaurant data to understand how ratings, pricing, cuisines, locations, restaurant types, online ordering, table booking, and customer engagement vary across Bengaluru.</p>
                <p>Using Python in Jupyter Notebook, I explored the dataset, prepared relevant fields, analyzed different aspects of the restaurant ecosystem, and used visualizations to turn the results into understandable observations.</p>
              </div>
              <div className="pt-6 pb-2">
                <div className="inline-flex items-center gap-3 md:gap-5 text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-primary border border-border rounded-xl px-4 py-3 bg-secondary/30 shadow-sm overflow-x-auto max-w-full">
                  <span>RAW DATA</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span>ANALYSIS</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span>VISUALIZATION</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span>INSIGHT</span>
                </div>
              </div>
            </section>

            {/* Why This Analysis? */}
            <section id="why" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Why This Analysis?</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Real-world datasets rarely arrive as neatly organized answers. They contain different types of information, inconsistencies, and many possible directions for exploration.</p>
                <p>Instead of looking at the dataset as a collection of columns, I approached it through questions — What affects restaurant choice? Where are restaurants concentrated? How does pricing vary? What can ratings and votes tell us?</p>
                <p>The goal was to move from simply working with data to understanding what the data could actually reveal.</p>
              </div>
            </section>

            {/* Questions Behind the Analysis */}
            <section id="questions" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Questions Behind the Analysis</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                Rather than analyzing every column independently, I grouped the exploration around questions that could reveal useful patterns.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "How are restaurant ratings distributed?",
                  "Which restaurant types and cuisines are most common?",
                  "How does restaurant pricing vary across Bengaluru?",
                  "How do online ordering and table booking availability compare?",
                  "Which locations have higher restaurant concentration?",
                  "What can votes and ratings tell us about customer engagement?"
                ].map((q, i) => (
                  <div key={i} className="p-6 bg-secondary/20 border border-border rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl font-heading font-bold text-primary/40">0{i + 1}</span>
                    <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* From Raw Data to Analysis */}
            <section id="analysis" className="space-y-12 scroll-mt-28">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-6">From Raw Data to Analysis</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "RAW DATA", desc: "Kaggle restaurant dataset" },
                    { title: "INSPECT", desc: "Understand columns, data types, and structure" },
                    { title: "CLEAN", desc: "Handle missing and inconsistent values" },
                    { title: "PREPARE", desc: "Prepare relevant fields for analysis" },
                    { title: "EXPLORE", desc: "Investigate patterns and relationships" },
                    { title: "VISUALIZE", desc: "Represent findings through charts" },
                    { title: "INTERPRET", desc: "Turn patterns into observations" }
                  ].map((step, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border border-border bg-background shadow-sm ${i === 6 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""}`}>
                      <span className="font-mono text-sm font-bold text-primary/60 mt-1">0{i+1}</span>
                      <div>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  Before asking the data questions, I first needed to understand what I was working with. I inspected the dataset structure, reviewed relevant columns, checked data quality, and prepared the fields needed for analysis.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground pb-4 border-b border-border/50">What I Explored</h3>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">01 — RATINGS</h4>
                  <p className="text-base md:text-lg text-foreground">Examined average ratings and rating distributions to understand how restaurant ratings were spread across the dataset.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Average restaurant rating</li>
                    <li>Rating distribution</li>
                    <li>Relationship between rating and other characteristics</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">02 — RESTAURANTS & CUISINES</h4>
                  <p className="text-base md:text-lg text-foreground">Explored the variety of restaurant types, cuisine categories, and restaurant chains represented across Bengaluru.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Restaurant types</li>
                    <li>Cuisine varieties</li>
                    <li>North Indian / South Indian and other cuisine categories</li>
                    <li>Top restaurant chains</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">03 — LOCATION</h4>
                  <p className="text-base md:text-lg text-foreground">Compared restaurant concentration across Bengaluru to understand which areas had a stronger restaurant presence.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Restaurants by location</li>
                    <li>Restaurant concentration</li>
                    <li>Food-focused areas</li>
                    <li>Affordable restaurant availability by location</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">04 — PRICING</h4>
                  <p className="text-base md:text-lg text-foreground">Examined how much different restaurant experiences cost and where budget-friendly options could be found.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Approximate cost for two people</li>
                    <li>Cost distribution</li>
                    <li>Cheapest restaurants and Most expensive restaurants</li>
                    <li>Top expensive restaurants and Restaurants below ₹500</li>
                    <li>Highly rated affordable restaurants</li>
                    <li>Price vs rating relationship</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">05 — SERVICES & CUSTOMER ENGAGEMENT</h4>
                  <p className="text-base md:text-lg text-foreground">Looked beyond ratings to understand how restaurant services and customer activity varied.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Online ordering availability</li>
                    <li>Table booking availability</li>
                    <li>Highest-voted restaurants</li>
                    <li>Votes vs online ordering and Votes vs restaurant characteristics</li>
                    <li>Price vs online ordering</li>
                  </ul>
                </div>
                
              </div>
            </section>

            {/* Exploring the Data Visually */}
            <section id="visualizations" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Exploring the Data Visually</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "01 — Ratings", desc: "Rating distribution and restaurant-rating comparisons." },
                  { title: "02 — Pricing", desc: "Cost distribution and price comparisons." },
                  { title: "03 — Locations", desc: "Restaurant concentration across Bengaluru areas." },
                  { title: "04 — Cuisines", desc: "Cuisine and restaurant-type distribution." },
                  { title: "05 — Online Ordering", desc: "Comparison of restaurants offering online ordering." },
                  { title: "06 — Customer Engagement", desc: "Votes and rating-related comparisons." }
                ].map((vis, i) => (
                  <div key={i} className="group space-y-4">
                    <div className="aspect-[4/3] bg-secondary/30 rounded-2xl border border-border flex items-center justify-center p-6 text-center shadow-sm relative overflow-hidden">
                       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--foreground) 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                       <div className="relative z-10 flex flex-col items-center gap-3">
                         <Layers size={32} className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                         <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Visualization</span>
                       </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground">{vis.title}</h4>
                      <p className="text-sm text-muted-foreground">{vis.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What the Data Revealed */}
            <section id="insights" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What the Data Revealed</h2>
              
              <div className="space-y-6">
                {[
                  "Restaurant ratings showed noticeable variation across the dataset.",
                  "Restaurant pricing ranged from budget-friendly options to significantly more expensive dining experiences.",
                  "Restaurant concentration differed considerably across Bengaluru locations.",
                  "Some cuisine categories appeared far more frequently than others.",
                  "Online ordering and table booking were not equally available across restaurants.",
                  "Votes added another perspective on customer engagement beyond rating alone.",
                  "Combining price and rating made it possible to identify relatively affordable restaurants with stronger ratings."
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-background border-l-4 border-l-primary border-y border-r border-y-border border-r-border rounded-r-2xl shadow-sm">
                    <CheckCircle className="text-primary shrink-0 w-6 h-6" />
                    <p className="text-base md:text-lg text-foreground font-medium">{insight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* My Contribution */}
            <section id="contribution" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              
              <div className="p-8 bg-secondary/20 border border-border rounded-3xl space-y-6">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground text-center mb-2">Data Analysis & Visualization</h3>
                <p className="text-base md:text-lg leading-relaxed text-foreground text-center max-w-2xl mx-auto mb-8">
                  This was my first practical data-analysis project, and my contribution centered on understanding the dataset, performing exploratory analysis, creating visualizations, and turning the results into meaningful observations.
                </p>
                
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <ul className="space-y-4">
                    {[
                      "Explored and understood the dataset",
                      "Prepared relevant data for analysis",
                      "Performed exploratory analysis using Python",
                      "Created charts using Matplotlib, Seaborn, and Plotly",
                      "Compared restaurant characteristics",
                      "Extracted observations from the analysis",
                      "Documented the analysis in Jupyter Notebook"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                        <span className="text-base text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* What Was Challenging */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What Was Challenging</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6 pb-2 border-b border-border/50">01 — WORKING WITH A MESSY REAL-WORLD DATASET</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                        The dataset looked straightforward at first, but once I started exploring it, I found that different columns required different types of preparation before they could be compared or analyzed reliably.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Solution:</span>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Instead of jumping directly into visualization, I inspected the columns and their values first. I identified fields that needed cleaning or preparation, handled the problematic entries, and then used the prepared data for the analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6 pb-2 border-b border-border/50">02 — TURNING MANY QUESTIONS INTO USEFUL VISUALIZATIONS</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                        The project involved many possible questions around ratings, pricing, locations, cuisines, votes, and restaurant services. The difficult part was deciding how to represent each question clearly without creating meaningless charts.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Solution:</span>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        I grouped related questions together and selected visualizations based on what I was trying to compare or understand. This helped me move from simply creating charts to using each visualization to answer a specific analytical question.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* What This Project Taught Me */}
            <section id="lessons" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What This Project Taught Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Data analysis starts with understanding the question.",
                  "Real-world data requires more preparation than clean tutorial datasets.",
                  "A visualization should answer something, not simply decorate a notebook.",
                  "Finding a pattern is different from understanding what that pattern means.",
                  "Working with a real dataset taught me how raw data becomes useful insight.",
                  "Good analysis requires both technical work and curiosity about the problem."
                ].map((lesson, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-secondary/30 border border-border rounded-2xl">
                    <span className="font-mono font-bold text-primary/40 mt-1">0{i+1}</span>
                    <p className="text-base text-foreground font-medium">{lesson}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-serif italic text-foreground text-center max-w-2xl mx-auto px-6 border-l-2 border-r-2 border-primary/20 py-4">
                "This project gave me my first practical experience moving from Python fundamentals to using code to investigate a real-world problem."
              </p>
            </section>

            {/* Where This Could Go Next */}
            <section id="future" className="space-y-8 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Where This Could Go Next</h2>
              <p className="text-base md:text-lg text-foreground mb-6">
                If I extended this analysis further, I would take the cleaned dataset beyond the notebook and make the findings more interactive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "01 — Interactive Dashboard", desc: "Build a Power BI dashboard for exploring restaurant trends dynamically." },
                  { title: "02 — Geographic Exploration", desc: "Visualize restaurant concentration and affordability using maps." },
                  { title: "03 — Multi-City Comparison", desc: "Compare restaurant patterns across Bengaluru and other cities." },
                  { title: "04 — Predictive Exploration", desc: "Explore rating or pricing prediction as a separate Machine Learning project." }
                ].map((idea, i) => (
                  <div key={i} className="p-5 border border-border rounded-xl bg-background shadow-sm hover:border-primary/30 transition-colors">
                    <h4 className="font-mono text-sm font-bold text-foreground mb-2">{idea.title}</h4>
                    <p className="text-sm text-muted-foreground">{idea.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center mt-8">Future Ideas</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}





function SalesDashboardCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const anchors = ["overview", "problem", "dataset", "preparation", "dax", "analyzed", "dashboard", "insights", "contribution", "challenges", "learned", "future"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const anchor of anchors) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem / Objective" },
    { id: "dataset", label: "Dataset" },
    { id: "preparation", label: "Data Preparation" },
    { id: "dax", label: "DAX & Calculated Metrics" },
    { id: "analyzed", label: "What I Analyzed" },
    { id: "dashboard", label: "The Dashboard" },
    { id: "insights", label: "Key Insights" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "learned", label: "What I Learned" },
    { id: "future", label: "Future Scope" }
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-secondary text-foreground rounded-full hover:bg-border transition-colors shadow-sm"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-7xl max-h-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt="Dashboard Full View" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Case Study: {project.title}
          </span>
        </div>

        <ProjectHero project={project} />

        {/* Split documentation portal layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="w-full lg:w-64 shrink-0 sticky top-28 hidden lg:block space-y-6">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground">DOCUMENTATION</h3>
            <nav className="flex flex-col gap-2 border-l border-border pl-5 text-sm font-medium">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`block py-1.5 transition-colors focus:outline-none relative -left-[21px] pl-[20px] border-l-2 ${activeAnchor === item.id ? "text-primary border-primary font-bold" : "text-muted-foreground hover:text-foreground border-transparent"}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content */}
          <div className="flex-1 max-w-4xl space-y-24 font-sans text-muted-foreground">
            
            {/* 1. OVERVIEW */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>This project focused on understanding sales performance using Power BI. I worked with a real-world dataset containing sales, customer, product, and regional data, and brought this information together into an interactive dashboard.</p>
                <p>The goal was to move beyond static spreadsheets and create a view where performance could be explored dynamically, allowing users to compare profitability and identify business trends effortlessly.</p>
              </div>
            </section>

            {/* 2. PROBLEM / OBJECTIVE */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Problem & Objective</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase pb-2">THE PROBLEM</h3>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    Sales performance can become difficult to understand when information is spread across different sales, customer, product, and regional attributes. The dashboard was built to make this information easier to explore and compare.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase pb-2">OBJECTIVES</h3>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-foreground">
                    <li>Evaluate sales performance across important metrics.</li>
                    <li>Identify trends and patterns.</li>
                    <li>Compare products, customers, channels, and regions.</li>
                    <li>Understand profitability, discounts, and returns.</li>
                    <li>Support clearer sales-performance monitoring.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. DATASET */}
            <section id="dataset" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Dataset</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                The dataset brought together different parts of the sales process.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">ORDER DETAILS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Invoice Number, Shipping Type, Order Date, Delivery Date, Payment Method
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">CUSTOMER DETAILS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Client Code, Client Name, Client Segment, Location, Country, Region, Zip Code
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">PRODUCT DETAILS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Product Code, Product Category, Product Description, Warranty
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">SALES METRICS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Sale Amount, Quantity, Discount Rate, Profit Margin, Unit Price
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">CUSTOMER FEEDBACK</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Customer Rating, Product Return Status, Customer Loyalty Program
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">MARKETING</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Sales Channel, Marketing Campaign Code
                  </p>
                </div>

              </div>
            </section>

            {/* 4. DATA PREPARATION */}
            <section id="preparation" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Data Preparation</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                The dataset was prepared in Power BI before building the dashboard to ensure the analysis was accurate.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground">
                <li>Inspecting the dataset.</li>
                <li>Checking data types.</li>
                <li>Handling inconsistent values.</li>
                <li>Preparing fields for analysis.</li>
                <li>Creating calculated columns.</li>
                <li>Structuring the data for reporting.</li>
              </ul>
            </section>

            {/* 5. DAX & CALCULATED METRICS */}
            <section id="dax" className="space-y-8 scroll-mt-28 bg-secondary/10 p-8 rounded-3xl border border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">DAX & Calculated Metrics</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                DAX was used to create calculated columns and measures required for the analysis.
              </p>
              
              <div className="space-y-10">
                
                {/* Calculated Columns */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 border-b border-border/50 pb-2">Calculated Columns</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">ACTUAL COST</div>
                      <div className="text-sm text-muted-foreground font-mono">Sale Amount − Profit Margin</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">DISCOUNT</div>
                      <div className="text-sm text-muted-foreground font-mono">Sale Amount × Discount Rate</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">UNIT PRICE</div>
                      <div className="text-sm text-muted-foreground font-mono">Sale Amount ÷ Quantity</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">CUSTOMER SATISFACTION</div>
                      <div className="text-sm text-muted-foreground font-mono">5 → Excellent, 4 → Good</div>
                    </div>
                  </div>
                </div>

                {/* DAX Measures */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 border-b border-border/50 pb-2">Important Measures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      { name: "TOTAL SALES", desc: "Total value generated from sales." },
                      { name: "GROSS PROFIT", desc: "Total profit generated across sales." },
                      { name: "TOTAL UNITS SOLD", desc: "Total quantity sold." },
                      { name: "AVERAGE SALES PER ORDER", desc: "Average sales value per order." },
                      { name: "TOTAL COST", desc: "Total cost of goods sold." },
                      { name: "GROSS PROFIT MARGIN", desc: "Profit relative to sales amount." },
                      { name: "CLIENT COUNT", desc: "Total number of unique clients." },
                      { name: "SALES % BY CATEGORY", desc: "Percentage contribution of each category." },
                      { name: "SALES BY CHANNEL", desc: "Sales distributed by purchase channel." },
                      { name: "SALES BY REGION", desc: "Sales distributed by geographic location." },
                      { name: "SALES PER CLIENT", desc: "Average revenue generated per client." },
                      { name: "TOTAL DISCOUNT", desc: "Total value of all discounts given." },
                      { name: "NON-RETURN COUNT", desc: "Count of successful, unreturned orders." },
                      { name: "AVERAGE UNIT PRICE", desc: "Average price of individual units sold." }
                    ].map((metric, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="font-mono text-xs font-bold text-foreground">{metric.name}</span>
                        <span className="text-sm text-muted-foreground">{metric.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. WHAT I ANALYZED */}
            <section id="analyzed" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Analyzed</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "SALES PERFORMANCE", desc: "Sales, units sold, average sales per order, and sales contribution." },
                  { title: "PRODUCTS", desc: "Product categories and their contribution to sales." },
                  { title: "CUSTOMERS", desc: "Client segments, customer count, satisfaction, and loyalty." },
                  { title: "REGIONS", desc: "Regional sales performance and comparison." },
                  { title: "CHANNELS", desc: "Sales performance across different sales channels." },
                  { title: "PROFITABILITY", desc: "Profit, cost, margin, and discount analysis." },
                  { title: "RETURNS", desc: "Return and non-return patterns." },
                  { title: "TRENDS", desc: "Changes in sales performance over time." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-background border border-border rounded-xl shadow-sm">
                    <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. THE DASHBOARD */}
            <section id="dashboard" className="space-y-12 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Dashboard</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                The analysis was brought together in Power BI through multiple report views, each focusing on a different part of sales performance.
              </p>

              {/* Main Dashboard */}
              <div className="space-y-4">
                <div 
                  className="w-full aspect-[16/9] bg-secondary border border-border rounded-2xl shadow-md overflow-hidden cursor-zoom-in relative group"
                  onClick={() => setLightboxImage("/images/projects/sales-dashboard-main.jpg")}
                >
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/projects/sales-dashboard-main.jpg" 
                    alt="Sales Performance Overview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback logic in case the image isn't available yet
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: /images/projects/sales-dashboard-main.jpg%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="text-center mt-4">
                  <span className="block font-mono text-sm font-bold text-foreground mb-1 uppercase tracking-widest">01 — SALES PERFORMANCE OVERVIEW</span>
                  <span className="text-sm text-muted-foreground">An overview of the core sales KPIs, including sales, profit, units sold, discounts and returns.</span>
                </div>
              </div>

              {/* Explore The Report Grid */}
              <div className="pt-8 border-t border-border/50">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Explore the Report</h3>
                <p className="text-base text-foreground mb-8">Different report views were used to look at the business from different angles.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { num: "02", title: "PRODUCT ANALYSIS", desc: "Sales performance across products and categories.", img: "/images/projects/sales-dashboard-product.jpg" },
                    { num: "03", title: "CUSTOMER ANALYSIS", desc: "Customer segments, loyalty and satisfaction patterns.", img: "/images/projects/sales-dashboard-customer.jpg" },
                    { num: "04", title: "REGIONAL ANALYSIS", desc: "Comparison of sales performance across regions.", img: "/images/projects/sales-dashboard-regional.jpg" },
                    { num: "05", title: "SALES TRENDS", desc: "Changes in sales performance over time.", img: "/images/projects/sales-dashboard-trends.jpg" },
                    { num: "06", title: "TARGET & PERFORMANCE", desc: "Performance comparison against relevant targets and metrics.", img: "/images/projects/sales-dashboard-target.jpg" }
                  ].map((view, i) => (
                    <div key={i} className="space-y-4">
                      <div 
                        className="w-full aspect-[16/9] bg-secondary border border-border rounded-xl shadow-sm overflow-hidden cursor-zoom-in relative group"
                        onClick={() => setLightboxImage(view.img)}
                      >
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                           <div className="bg-background/90 text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">Click to expand</div>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={view.img} 
                          alt={view.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EPlaceholder: ${view.img.split('/').pop()}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <div>
                        <span className="block font-mono text-xs font-bold text-foreground mb-1 tracking-widest">{view.num} — {view.title}</span>
                        <span className="text-sm text-muted-foreground">{view.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. KEY INSIGHTS */}
            <section id="insights" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Key Insights</h2>
              <div className="space-y-4">
                {[
                  "Sales performance was heavily concentrated in specific product categories like Automotive Parts and Wearable Tech.",
                  "Different product categories performed significantly better in specific sales channels (e.g., In-store vs. Online).",
                  "Profitability was strongly influenced by discount rates across different customer segments.",
                  "Regional analysis revealed distinct disparities in average sales per order between countries.",
                  "Actual sales and profit levels fell below the established performance targets for the period."
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-background border-l-2 border-primary shadow-sm">
                    <CheckCircle className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                    <p className="text-base text-foreground">{insight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. MY CONTRIBUTION */}
            <section id="contribution" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              <div className="p-8 bg-secondary/20 border border-border rounded-3xl">
                <ul className="space-y-4">
                  {[
                    "Preparing the data for analysis and ensuring consistency.",
                    "Creating calculated columns required for the dashboard.",
                    "Creating DAX measures to track KPIs accurately.",
                    "Building the Power BI report and its interactive elements.",
                    "Creating visualizations to represent performance clearly.",
                    "Organizing the dashboard views logically for users.",
                    "Analyzing sales performance across multiple dimensions.",
                    "Interpreting the results to highlight important patterns."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 10. CHALLENGES & SOLUTIONS */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Challenges & Solutions</h2>
              
              <div className="grid grid-cols-1 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">01 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Deciding which metrics were actually useful for measuring sales performance rather than just adding every possible calculation.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I focused on the core objectives (sales, profit, units, discounts, returns) and only created measures that directly helped evaluate performance, trends, or segments, ensuring the dashboard wasn't cluttered with unnecessary numbers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">02 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Creating the right DAX calculations and ensuring the metrics behaved correctly under different filters and visuals.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I tested each DAX measure against simple table visuals first to verify that filter context was applied properly across products, channels, and regions before integrating the measures into the final dashboard visuals.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 11. WHAT I LEARNED */}
            <section id="learned" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Learned</h2>
              <ul className="space-y-4">
                {[
                  "How data preparation directly affects reporting accuracy and visualization capabilities.",
                  "How DAX can turn raw fields into highly useful, dynamic business metrics.",
                  "How dashboard structure affects how easily information can be understood by the user.",
                  "How different report views can reveal completely different aspects of performance."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="text-primary/60 shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 12. FUTURE SCOPE */}
            <section id="future" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Future Scope</h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                The dashboard could be extended further to make the analysis more predictive and useful for ongoing decision-making.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Sales Forecasting", desc: "Add forecasting to estimate future sales based on historical trends." },
                  { title: "Target Monitoring", desc: "Introduce more detailed target-vs-actual tracking with variance analysis." },
                  { title: "Customer Segmentation", desc: "Develop deeper customer segments based on purchase behavior, loyalty, and value." },
                  { title: "Profitability Analysis", desc: "Extend the analysis to identify products, regions, and channels contributing most to profit." },
                  { title: "Automated Reporting", desc: "Set up scheduled Power BI refreshes and automated report distribution for regular performance monitoring." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="text-primary/60 shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground">
                      <strong className="text-foreground">{item.title}</strong> — <span className="text-muted-foreground">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}



function LinkoraCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const anchors = ["overview", "problem", "whatibuilt", "matchmaking", "realtime", "architecture", "contribution", "challenges", "learned", "future"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const anchor of anchors) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "whatibuilt", label: "What I Built" },
    { id: "matchmaking", label: "Intelligent Matchmaking" },
    { id: "realtime", label: "Real-Time Messaging" },
    { id: "architecture", label: "Architecture" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "learned", label: "What I Learned" },
    { id: "future", label: "Future Scope" }
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-secondary text-foreground rounded-full hover:bg-border transition-colors shadow-sm"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-7xl max-h-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt="Expanded view" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Case Study: {project.title}
          </span>
        </div>

        <ProjectHero project={project} />

        {/* Split documentation portal layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="w-full lg:w-64 shrink-0 sticky top-28 hidden lg:block space-y-6">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground">DOCUMENTATION</h3>
            <nav className="flex flex-col gap-2 border-l border-border pl-5 text-sm font-medium">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`block py-1.5 transition-colors focus:outline-none relative -left-[21px] pl-[20px] border-l-2 ${activeAnchor === item.id ? "text-primary border-primary font-bold" : "text-muted-foreground hover:text-foreground border-transparent"}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content */}
          <div className="flex-1 max-w-4xl space-y-24 font-sans text-muted-foreground">
            
            {/* 01 — OVERVIEW */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Linkora is a real-time web application that connects people for conversations based on their interests and matching preferences.</p>
                <p>The interesting part wasn't just building a chat screen. I wanted to understand what happens behind the scenes when users need to be matched, connected in real time, and kept in the same conversation even when their connection briefly drops.</p>
              </div>
              
              <div 
                className="w-full aspect-[16/9] bg-secondary border border-border rounded-2xl shadow-md overflow-hidden cursor-zoom-in relative group mt-8"
                onClick={() => setLightboxImage("/images/projects/linkora-main.png")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-main.png" 
                  alt="Linkora Main UI"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-main.png%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </section>

            {/* 02 — THE PROBLEM */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Problem</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Finding someone to talk to usually means searching through profiles, sending requests, and waiting for a response. I wanted to explore a different approach — let users describe who they are looking for and let the system find a suitable person for them.</p>
                <p>The harder part came after the match. Once two users are connected, the system has to keep track of their session, deliver messages instantly, handle typing and read states, and deal with users disconnecting unexpectedly.</p>
              </div>
            </section>

            {/* 03 — WHAT I BUILT */}
            <section id="whatibuilt" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Built</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { num: "01", title: "Preference-based Matching", desc: "Users can specify matching preferences such as intent, gender, interests, language and country." },
                  { num: "02", title: "Instant Matching", desc: "Users enter a matchmaking queue and are connected with a compatible person." },
                  { num: "03", title: "Real-Time Chat", desc: "Messages are delivered through WebSockets rather than repeatedly polling the server." },
                  { num: "04", title: "Friend Connections", desc: "A random conversation can turn into a longer-term connection through the friendship system." },
                  { num: "05", title: "Typing & Read Status", desc: "The chat supports typing indicators and delivered/seen message states." },
                  { num: "06", title: "Connection Recovery", desc: "A temporary network interruption does not immediately destroy the conversation." }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-background border border-border rounded-xl shadow-sm">
                    <span className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-3 block">{feature.num}</span>
                    <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                    <p className="text-base text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 04 — INTELLIGENT MATCHMAKING */}
            <section id="matchmaking" className="space-y-8 scroll-mt-28 bg-secondary/10 p-6 md:p-10 rounded-3xl border border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Matching Logic</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                The matching system is where most of the interesting logic happens.
              </p>
              
              <div className="my-8 overflow-hidden rounded-xl border border-border bg-background shadow-sm p-6 text-center font-mono text-sm text-foreground">
                <span className="block text-primary font-bold">USER</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">MATCHING PREFERENCES</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">QUEUE</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">FILTER COMPATIBLE USERS</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">SCORE CANDIDATES</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block text-emerald-600 font-bold">SELECT MATCH</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block font-bold">CREATE CHAT SESSION</span>
              </div>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground">
                <p>
                  The system considers: <strong>Gender, Looking-for intent, Interests, Language, Country, and Wait time.</strong>
                </p>
                <p>
                  Candidates start with a base score. Shared interests contribute the most, while matching language and country add smaller weights. As someone waits longer, the matching criteria gradually relax so that users do not remain stuck in the queue indefinitely.
                </p>
                
                <div className="bg-background border border-border rounded-xl p-6 my-6 font-mono text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-between"><span>Base score:</span><span className="font-bold">0.5</span></div>
                  <div className="flex justify-between"><span>Interest overlap:</span><span className="font-bold text-primary">up to +0.35</span></div>
                  <div className="flex justify-between"><span>Language:</span><span className="font-bold text-primary">+0.08</span></div>
                  <div className="flex justify-between"><span>Country:</span><span className="font-bold text-primary">+0.05</span></div>
                  <div className="flex justify-between sm:col-span-2"><span>Wait-time relaxation:</span><span className="font-bold text-emerald-600">up to +0.20</span></div>
                </div>

                <p>
                  Users also cannot be repeatedly matched with the same person after the configured encounter limit (<code className="bg-foreground/5 px-2 py-1 rounded text-sm text-primary">MAX_MATCH_ENCOUNTERS = 3</code>), unless they are already friends.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 mt-8 rounded-r-xl">
                  <h4 className="font-bold text-foreground mb-2">Concurrency & Locks</h4>
                  <p>
                    Because multiple users can be searching at the same time, matchmaking uses a <strong>Redis distributed lock</strong> to prevent the same user from being assigned to multiple conversations concurrently.
                  </p>
                </div>
              </div>
              
              <div 
                className="w-full aspect-video bg-background border border-border rounded-2xl shadow-sm overflow-hidden cursor-zoom-in relative group mt-8 p-4"
                onClick={() => setLightboxImage("/images/projects/linkora-match.jpg")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-match.jpg" 
                  alt="Matchmaking Flow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-match.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </section>

            {/* 05 — REAL-TIME MESSAGING */}
            <section id="realtime" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Real-Time, Not Just Chat</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Once a match is found, the conversation moves into a WebSocket-based chat session.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Messages are sent through WebSockets and broadcast through Django Channels. Redis acts as the channel layer and also handles short-lived state that doesn't need to live in the database.
              </p>

              <div className="my-8 p-6 bg-secondary/20 border border-border rounded-xl text-center font-mono text-sm text-foreground flex flex-col items-center gap-2">
                <span className="font-bold">USER A</span>
                <span className="text-primary text-lg">↕</span>
                <span>WEBSOCKET</span>
                <span className="text-primary text-lg">↕</span>
                <span className="bg-background px-4 py-2 border border-border rounded-md font-bold">DJANGO CHANNELS</span>
                <span className="text-primary text-lg">↕</span>
                <span className="bg-emerald-500/10 text-emerald-700 px-4 py-2 border border-emerald-500/20 rounded-md font-bold">REDIS</span>
                <span className="text-primary text-lg">↕</span>
                <span>WEBSOCKET</span>
                <span className="text-primary text-lg">↕</span>
                <span className="font-bold">USER B</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Typing Indicators</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Typing status is temporary, so it is stored in Redis with a short 3-second expiry instead of repeatedly writing to the database.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Read Receipts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Messages can move between delivered and seen states, with updates sent back through the WebSocket connection.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Reconnect Grace Period</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This was one of the parts I found particularly useful to solve. If a user temporarily loses their connection or refreshes the page, the chat is not immediately destroyed. The system keeps the session alive for 30 seconds, giving the user time to reconnect.
                  </p>
                </div>
              </div>
              
              <div 
                className="w-full aspect-[16/9] bg-secondary border border-border rounded-2xl shadow-sm overflow-hidden cursor-zoom-in relative group mt-8"
                onClick={() => setLightboxImage("/images/projects/linkora-chat.jpg")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-chat.jpg" 
                  alt="Chat Interface"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-chat.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </section>

            {/* 06 — ARCHITECTURE */}
            <section id="architecture" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">How the Pieces Fit Together</h2>
              
              <div 
                className="w-full aspect-[2/1] bg-background border border-border rounded-2xl shadow-sm overflow-hidden cursor-zoom-in relative group mt-8 p-4 mb-10"
                onClick={() => setLightboxImage("/images/projects/linkora-arch.jpg")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-arch.jpg" 
                  alt="Architecture Diagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-arch.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">React</h3>
                    <p className="text-base text-muted-foreground">Handles the user interface and communicates with the backend through REST APIs and WebSockets.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Django / DRF</h3>
                    <p className="text-base text-muted-foreground">Handles API requests, authentication and application-level operations.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Django Channels</h3>
                    <p className="text-base text-muted-foreground">Handles the real-time WebSocket connections.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 text-primary">Redis</h3>
                    <p className="text-base text-muted-foreground">Redis is used for more than just messaging. It handles channel-layer communication, matchmaking locks, temporary queue/session state, typing indicators, and reconnect timers.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Database (PostgreSQL)</h3>
                    <p className="text-base text-muted-foreground">Persistent application data (Users → Match Queue → Chat Room → Messages).</p>
                  </div>
                </div>

                <div className="bg-secondary/20 p-6 rounded-2xl border border-border mt-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Service Layer</h3>
                  <p className="text-base text-foreground mb-4">Business logic is separated into services such as:</p>
                  <ul className="flex flex-wrap gap-3 font-mono text-sm mb-4">
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">MatchmakingService</li>
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">ChatService</li>
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">SessionService</li>
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">PresenceService</li>
                  </ul>
                  <p className="text-base text-muted-foreground italic border-l-2 border-primary/30 pl-3 py-1">
                    "Keeping the main business logic inside services keeps the WebSocket consumers relatively small and makes the core logic easier to reason about and test."
                  </p>
                </div>
              </div>
            </section>

            {/* 07 — MY CONTRIBUTION */}
            <section id="contribution" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              <div className="p-8 bg-background border border-border rounded-3xl shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Built and worked on the React frontend.",
                    "Implemented backend functionality using Django / DRF.",
                    "Worked on matchmaking logic.",
                    "Implemented real-time communication using WebSockets.",
                    "Worked with Redis for real-time state and matchmaking coordination.",
                    "Implemented friendship and chat flows.",
                    "Worked on authentication.",
                    "Integrated frontend and backend functionality.",
                    "Worked through connection and state-management issues."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 08 — CHALLENGES & SOLUTIONS */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Challenges & Solutions</h2>
              
              <div className="grid grid-cols-1 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">01 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Two users can start searching at almost the same time. Without coordination, the same person could potentially be assigned to more than one match.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Used a Redis distributed lock while evaluating and assigning matches so that concurrent matchmaking operations do not select the same user at the same time.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-serif italic text-foreground">"This introduced me to concurrency problems that are easy to miss when a system is tested with only one user."</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">02 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      A WebSocket can disconnect because of a refresh, network problem, or temporary connection loss. Ending the conversation immediately would create a poor user experience.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Implemented a 30-second reconnect grace period using Redis. If the user reconnects within that period, the session can continue; otherwise the conversation is closed.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-serif italic text-foreground">"I learned that real-time applications have to handle failure as part of the normal user flow."</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">03 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Typing indicators can generate frequent updates. Writing every typing event to the database would create unnecessary load for information that only matters for a few seconds.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Used Redis with a short 3-second TTL for temporary typing state instead of persisting every event.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-serif italic text-foreground">"This helped me understand the difference between information that needs to be stored permanently and state that only needs to exist temporarily."</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 09 — WHAT I LEARNED */}
            <section id="learned" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What Building Linkora Taught Me</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Real-time systems are mostly about managing state.",
                  "A feature that looks simple from the UI can become much more complicated when multiple users interact with it at the same time.",
                  "Redis is useful for much more than caching.",
                  "Connection failures are part of the system, not just edge cases.",
                  "Separating business logic from consumers makes real-time code easier to understand.",
                  "Building the project made me think more about what happens between two users clicking a button and actually seeing the result."
                ].map((lesson, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-secondary/30 border border-border rounded-xl shadow-sm">
                    <CheckCircle className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                    <p className="text-base text-foreground font-medium">{lesson}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 10 — FUTURE SCOPE */}
            <section id="future" className="space-y-8 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">If I Took It Further</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "01 — Better Match Ranking", desc: "Improve the matching model with more signals and feedback from previous conversations." },
                  { title: "02 — Scaling Real-Time Infrastructure", desc: "Explore how the real-time layer would behave with a much larger concurrent user base." },
                  { title: "03 — Moderation", desc: "Add stronger reporting, moderation and abuse-prevention mechanisms." },
                  { title: "04 — Better Presence & Notifications", desc: "Improve presence tracking and notification behavior across reconnects and sessions." }
                ].map((idea, i) => (
                  <div key={i} className="p-6 border border-border rounded-xl bg-background shadow-sm">
                    <h4 className="font-mono text-sm font-bold text-foreground mb-2">{idea.title}</h4>
                    <p className="text-sm text-muted-foreground">{idea.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </main>
  );
}


export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  
  const project = projects.find((p) => p.slug === slug);
  const spec = PROJECT_TECH_SPECS[slug] || FALLBACK_SPEC;

  const [activeAnchor, setActiveAnchor] = useState("overview");

  // Related projects filtering (pick other projects)
  const related = projects.filter((p) => p.slug !== slug).slice(0, 2);

  // If this is the Sales Dashboard project, use its bespoke layout
  if (slug === "sales-dashboard") {
    return <SalesDashboardCaseStudy project={project} related={related} />;
  }


  // If this is the Zomato project, use the completely custom layout
  // If this is the Linkora project, use its bespoke layout
  if (slug === "linkora") {
    return <LinkoraCaseStudy project={project} related={related} />;
  }

  if (slug === "zomato-analysis") {
    return <ZomatoCaseStudy project={project} related={related} />;
  }


  // Intersection observer to track active header section
  useEffect(() => {
    const anchors = slug === "zomato-analysis" ? ["overview", "problem", "objectives", "dataset", "eda", "analysis", "visualizations", "insights", "challenges", "contribution", "tools", "lessons", "future", "related"] : [
      "overview", "problem", "objectives", "features", "matchmaking", "friendship", "messaging", "realtime", "tech-stack", 
      "architecture", "workflow", "database", "api-design", "websocket",
      "folder-structure", "deployment", "security", "challenges", "lessons", "improvements", "related"
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const anchor of anchors) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background p-8">
        <h1 className="text-2xl text-foreground font-heading font-bold">Case Study Not Found</h1>
        <Link href="/projects" className="text-primary mt-4 flex items-center gap-1 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>
      </div>
    );
  }

  const tocItems = slug === "zomato-analysis" ? [ { id: "overview", label: "Overview" }, { id: "problem", label: "Problem Statement" }, { id: "objectives", label: "Objectives" }, { id: "dataset", label: "Dataset & Preparation" }, { id: "eda", label: "Exploratory Data Analysis" }, { id: "analysis", label: "Key Analysis" }, { id: "visualizations", label: "Visualizations" }, { id: "insights", label: "Key Insights" }, { id: "challenges", label: "Challenges & Solutions" }, { id: "contribution", label: "My Contribution" }, { id: "tools", label: "Tools & Libraries" }, { id: "lessons", label: "Lessons Learned" }, { id: "future", label: "Future Scope" }, { id: "related", label: "Related Projects" } ] : [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem Statement" },
    { id: "objectives", label: "Objectives" },
    { id: "features", label: "Key Features" },
    ...(spec.matchmakingDesc ? [{ id: "matchmaking", label: "Matchmaking System" }] : []),
    ...(spec.friendshipSystem ? [{ id: "friendship", label: "Friendship System" }] : []),
    ...(spec.messagingDesc ? [{ id: "messaging", label: "Messaging Architecture" }] : []),
    ...(spec.realtimeArchitecture ? [{ id: "realtime", label: "Realtime Architecture" }] : []),
    { id: "tech-stack", label: "Tech Stack" },
    { id: "architecture", label: "System Architecture" },
    { id: "workflow", label: "Workflow Diagram" },
    { id: "database", label: "Database Design" },
    { id: "api-design", label: "API Design" },
    ...(spec.webSocketArchitecture ? [{ id: "websocket", label: "WebSocket Architecture" }] : []),
    { id: "folder-structure", label: "Folder Structure" },
    ...(spec.deployment ? [{ id: "deployment", label: "Deployment" }] : []),
    ...(spec.security ? [{ id: "security", label: "Security" }] : []),
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "lessons", label: "Lessons Learned" },
    { id: "improvements", label: "Future Scope" },
    { id: "related", label: "Related Projects" },
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Case Study: {project.title}
          </span>
        </div>

        <ProjectHero project={project} />

        {/* Split documentation portal layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Table of Contents navigation bar (lg:w-64) */}
          <aside className="w-full lg:w-64 shrink-0 sticky top-28 hidden lg:block space-y-6">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground">
              DOCUMENTATION
            </h3>
            
            <nav className="flex flex-col gap-2 border-l border-border pl-5 text-sm font-medium">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "block py-1.5 transition-colors focus:outline-none relative -left-[21px] pl-[20px] border-l-2",
                    activeAnchor === item.id
                      ? "text-primary border-primary font-bold"
                      : "text-muted-foreground hover:text-foreground border-transparent"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content (flex-1 max-w-4xl) */}
          <div className="flex-1 max-w-4xl space-y-20 font-sans text-muted-foreground">
            
            
            {slug === "zomato-analysis" ? (
              <>
                {/* Section 1: Overview */}
                <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Overview</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>Zomato Bengaluru Data Analysis is an exploratory data analysis project based on restaurant data from Bengaluru.</p>
                    <p>The project uses Python and popular data-analysis and visualization libraries to understand restaurant ratings, cuisines, pricing, locations, online ordering, table booking, votes, and other characteristics of the Bengaluru restaurant ecosystem.</p>
                    <p>The analysis was performed in Jupyter Notebook, with visualizations used to identify patterns and communicate insights from the dataset.</p>
                  </div>
                </section>
                
                {/* Section 2: Problem Statement */}
                <section id="problem" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Problem Statement</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>Bengaluru has a large and diverse restaurant ecosystem, making it difficult to understand restaurant trends from raw data alone.</p>
                    <p>The objective of this analysis was to transform a raw restaurant dataset into meaningful information about ratings, pricing, cuisines, locations, restaurant types, online ordering, table booking, and customer engagement.</p>
                    <p>The focus was not simply to create charts, but to use the data to answer practical questions about the restaurant landscape in Bengaluru.</p>
                  </div>
                </section>
                
                {/* Section 3: Objectives */}
                <section id="objectives" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Objectives</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">01 — Understand restaurant ratings</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Analyze rating distributions and identify patterns in restaurant ratings.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">02 — Explore restaurant categories</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Understand different restaurant types, cuisines, and restaurant chains.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">03 — Analyze pricing</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Study approximate cost for two people and identify affordable and expensive restaurants.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">04 — Study customer behavior</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Analyze votes and their relationship with restaurant characteristics.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">05 — Compare services</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Analyze online ordering and table-booking availability.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">06 — Explore locations</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Identify restaurant concentration, affordable areas, and popular food locations across Bengaluru.</p>
                    </div>
                  </div>
                </section>
                
                {/* Section 4: Dataset & Preparation */}
                <section id="dataset" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Dataset & Preparation</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p><strong>Source:</strong> Kaggle</p>
                    <p><strong>Dataset:</strong> Bengaluru / Bangalore Zomato restaurant dataset</p>
                    <p>The dataset contained restaurant-level information such as: Restaurant name, Location, Restaurant type, Cuisine, Rating, Votes, Approximate cost for two people, Online ordering availability, Table booking availability, and other attributes.</p>
                    <p>Before analysis, the dataset was examined and prepared for meaningful analysis. Preparation included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Inspecting the dataset structure</li>
                      <li>Understanding columns and data types</li>
                      <li>Identifying missing values</li>
                      <li>Cleaning inconsistent values</li>
                      <li>Converting relevant columns into usable formats</li>
                      <li>Preparing categorical and numerical data for analysis</li>
                    </ul>
                  </div>
                </section>
                
                {/* Section 5: Exploratory Data Analysis */}
                <section id="eda" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Exploratory Data Analysis</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>The project used exploratory analysis to understand patterns before drawing conclusions.</p>
                    <div className="p-4 bg-secondary/30 rounded-xl border border-border text-center font-mono text-sm overflow-x-auto whitespace-nowrap text-primary">
                      Dataset → Cleaning → Exploration → Analysis → Visualization → Insights
                    </div>
                    <p>Pandas and NumPy were used for data manipulation and numerical analysis. Matplotlib, Seaborn, and Plotly were used to visualize patterns and relationships.</p>
                  </div>
                </section>

                {/* Section 6: Key Analysis */}
                <section id="analysis" className="space-y-8 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Key Analysis</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Restaurant Ratings</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Calculated the average rating of restaurants.</li>
                        <li>Studied the distribution of restaurant ratings.</li>
                        <li>Identified highly rated restaurants.</li>
                        <li>Examined the relationship between ratings and other restaurant characteristics.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Restaurant Types & Cuisines</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Analyzed different types of restaurants in Bengaluru.</li>
                        <li>Identified popular restaurant categories.</li>
                        <li>Examined cuisine varieties such as North Indian, South Indian, and other cuisine categories.</li>
                        <li>Explored restaurant chains and their presence across Bengaluru.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Location Analysis</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Analyzed the number of restaurants across different Bengaluru locations.</li>
                        <li>Identified locations with higher restaurant concentration.</li>
                        <li>Explored food-oriented areas across Bengaluru.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Online Ordering & Table Booking</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Compared restaurants that provide online ordering with those that do not.</li>
                        <li>Analyzed the availability of table booking.</li>
                        <li>Studied how online ordering relates to votes, ratings, and pricing.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Pricing Analysis</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Analyzed the approximate cost for two people.</li>
                        <li>Studied the distribution of restaurant prices.</li>
                        <li>Identified budget-friendly and expensive restaurants.</li>
                        <li>Found restaurants under ₹500.</li>
                        <li>Identified highly rated restaurants that were also relatively affordable.</li>
                        <li>Compared pricing across different locations.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Customer Engagement</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Identified the highest-voted restaurant.</li>
                        <li>Analyzed how votes varied based on restaurant characteristics.</li>
                        <li>Studied the relationship between votes, ratings, online ordering, and price.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Detailed Restaurant Analysis</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Identified the most expensive and cheapest restaurants.</li>
                        <li>Examined the most expensive restaurant and its associated dish information where available.</li>
                        <li>Identified affordable restaurants across different locations.</li>
                        <li>Explored suitable budget restaurants by location.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                {/* Section 7: Visualizations */}
                <section id="visualizations" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Visualizations</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>The analysis was supported by visualizations created using: <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>Plotly</strong>.</p>
                    <p>Visualizations were used for:</p>
                    <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                      <li>Rating distributions and price distributions</li>
                      <li>Restaurant counts, cuisine distributions, and restaurant types</li>
                      <li>Location comparisons</li>
                      <li>Online ordering and table booking comparisons</li>
                      <li>Rating vs. cost relationships</li>
                      <li>Votes and restaurant characteristics</li>
                      <li>Budget restaurant analysis</li>
                    </ul>
                    <p>The purpose of the visualizations was to make patterns easier to identify and turn raw analysis into understandable insights.</p>
                  </div>
                </section>
                
                {/* Section 8: Key Insights */}
                <section id="insights" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Key Insights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Ratings</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Restaurant ratings showed noticeable variation across Bengaluru, making rating distribution useful for understanding overall restaurant performance.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Pricing</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Restaurant pricing varied significantly, with both budget-friendly options and premium restaurants present across different locations.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Location</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Restaurant availability was concentrated in certain Bengaluru areas, revealing clear differences in restaurant density between locations.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Cuisine</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Bengaluru's restaurant ecosystem contained a wide variety of cuisines, with some cuisine categories appearing much more frequently than others.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Online Ordering</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Online ordering availability varied across restaurants, allowing comparisons between restaurants that accepted online orders and those that did not.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Customer Engagement</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Votes provided another perspective beyond ratings and helped identify restaurants with stronger customer engagement.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm md:col-span-2">
                      <h3 className="font-heading font-bold text-lg text-foreground">Affordability</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Combining price and rating made it possible to identify restaurants that offered relatively good ratings while remaining within a lower budget.</p>
                    </div>
                  </div>
                </section>
                
                {/* Section 9: Challenges & Solutions */}
                <section id="challenges" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">01</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Understanding a real-world dataset</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> The dataset contained many columns and different types of information, which initially made it difficult to understand which fields were useful for each analysis.</p>
                        <p><strong className="text-primary">Solution:</strong> I first explored the dataset structure, examined individual columns, checked data types and missing values, and then grouped the analysis around meaningful questions.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">02</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Working with inconsistent data</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> Real-world datasets are rarely perfectly clean. Some values required inspection and preparation before they could be used reliably in analysis.</p>
                        <p><strong className="text-primary">Solution:</strong> I inspected problematic columns, cleaned inconsistent values, handled missing or unsuitable entries where necessary, and prepared the data before performing calculations.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">03</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Choosing the right visualization</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> Not every question can be explained effectively using the same type of chart.</p>
                        <p><strong className="text-primary">Solution:</strong> I experimented with different visualizations using Matplotlib, Seaborn, and Plotly and selected charts based on the type of comparison or relationship I wanted to communicate.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">04</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Moving from charts to insights</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> Creating a chart was not enough; I needed to understand what the visualization was actually showing.</p>
                        <p><strong className="text-primary">Solution:</strong> For each analysis, I focused on identifying patterns, comparisons, distributions, and relationships rather than simply generating visualizations.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">05</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Handling a large number of analytical questions</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> The project involved many different questions around pricing, ratings, locations, cuisines, votes, and restaurant services.</p>
                        <p><strong className="text-primary">Solution:</strong> I organized the analysis into categories such as ratings, pricing, locations, cuisines, customer engagement, and services. This made the notebook easier to follow and the conclusions easier to communicate.</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Section 10: My Contribution */}
                <section id="contribution" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">My Contribution</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>As this was my first data-analysis project, my primary contribution was exploratory analysis and visualization.</p>
                    <p>I worked on:</p>
                    <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                      <li>Exploring and understanding the dataset</li>
                      <li>Preparing data for analysis</li>
                      <li>Performing analysis using Python</li>
                      <li>Creating charts and visualizations</li>
                      <li>Comparing restaurant characteristics</li>
                      <li>Extracting meaningful insights from the data</li>
                      <li>Presenting findings clearly through the Jupyter Notebook</li>
                    </ul>
                  </div>
                </section>
                
                {/* Section 11: Tools & Libraries */}
                <section id="tools" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Tools & Libraries</h2>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Kaggle Dataset"].map((tool) => (
                      <span key={tool} className="text-sm font-semibold bg-secondary text-foreground border border-border px-4 py-2 rounded-lg">{tool}</span>
                    ))}
                  </div>
                </section>
                
                {/* Section 12: Lessons Learned */}
                <section id="lessons" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Lessons Learned</h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-foreground">This project gave me my first practical experience working with a real-world dataset.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Data analysis starts with understanding the problem, not immediately writing code.",
                        "Data cleaning is an important part of reliable analysis.",
                        "Visualization can reveal patterns that are difficult to notice from raw data.",
                        "Different questions require different analytical approaches.",
                        "Good analysis should lead to understandable insights, not just charts.",
                        "Working with a real dataset taught me how messy practical data can be compared with clean tutorial examples."
                      ].map((lesson, i) => (
                        <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm md:text-base text-foreground font-sans">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                
                {/* Section 13: Future Scope */}
                <section id="future" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Future Scope</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Building an interactive Power BI dashboard from the cleaned dataset.",
                      "Adding more advanced statistical analysis.",
                      "Exploring geographic patterns using maps.",
                      "Comparing restaurant trends across multiple cities.",
                      "Applying machine learning techniques to explore rating or price prediction as a separate future project."
                    ].map((imp, i) => (
                      <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm md:text-base text-foreground font-sans">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <>

{/* Section 1: Overview */}
            <section id="overview" className="space-y-8 scroll-mt-28 pt-4">
              <div className="space-y-5">
                <h3 className="font-heading font-bold text-2xl text-foreground">Project Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 bg-secondary/30 border border-border p-5 rounded-2xl">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-base text-foreground leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2: Problem Statement */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Problem Statement & Scope
              </h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {project.problemStatement}
                </p>
                <div className="bg-red-50 border border-red-200 p-6 rounded-2xl space-y-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold font-mono text-red-700 bg-red-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <AlertTriangle size={14} />
                    <span>BUSINESS PROBLEM</span>
                  </span>
                  <p className="text-base text-red-900 leading-relaxed font-medium">
                    {spec.businessProblem}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Objectives */}
            <section id="objectives" className="space-y-6 scroll-mt-28">
              <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-widest">Project Objectives</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {spec.objectives.map((obj, i) => (
                  <div key={i} className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                    <span className="text-sm font-mono font-bold text-primary bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-sm text-foreground font-sans leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Key Features */}
            <section id="features" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {spec.features.map((feat, i) => (
                  <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-foreground font-sans">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Conditional Section: Matchmaking */}
            {spec.matchmakingDesc && (
              <section id="matchmaking" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  Matchmaking System
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.matchmakingDesc}
                </p>
              </section>
            )}

            {/* Conditional Section: Friendship */}
            {spec.friendshipSystem && (
              <section id="friendship" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  Friendship System
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.friendshipSystem}
                </p>
              </section>
            )}

            {/* Conditional Section: Messaging */}
            {spec.messagingDesc && (
              <section id="messaging" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  Messaging Architecture
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.messagingDesc}
                </p>
              </section>
            )}

            {/* Conditional Section: Realtime */}
            {spec.realtimeArchitecture && (
              <section id="realtime" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  Realtime Architecture
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.realtimeArchitecture}
                </p>
              </section>
            )}

            {/* Section 5: Tech Stack */}
            <section id="tech-stack" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-semibold bg-secondary text-foreground border border-border px-4 py-2 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Section 6: Architecture Diagram */}
            <section id="architecture" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Architecture Diagram
              </h2>
              <p className="text-base leading-relaxed text-foreground">{spec.architectureDesc}</p>
              
              {/* Dynamic visual representation of pipeline */}
              <div className="p-8 bg-secondary/30 rounded-2xl border border-border flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                <div className="p-4 bg-background border border-border shadow-sm rounded-xl w-36 shrink-0">
                  <span className="block text-sm font-bold text-primary">Client UI</span>
                  <span className="block text-xs text-muted-foreground mt-2">Next.js Client</span>
                </div>
                <ArrowRight className="text-muted-foreground hidden md:block" />
                <div className="p-4 bg-background border border-border shadow-sm rounded-xl w-40 shrink-0">
                  <span className="block text-sm font-bold text-primary">Auth Gate</span>
                  <span className="block text-xs text-muted-foreground mt-2">JWT verification</span>
                </div>
                <ArrowRight className="text-muted-foreground hidden md:block" />
                <div className="p-4 bg-background border border-border shadow-sm rounded-xl w-36 shrink-0">
                  <span className="block text-sm font-bold text-primary">Backend API</span>
                  <span className="block text-xs text-muted-foreground mt-2">Python Django</span>
                </div>
                <ArrowRight className="text-muted-foreground hidden md:block" />
                <div className="p-4 bg-background border border-border shadow-sm rounded-xl w-36 shrink-0">
                  <span className="block text-sm font-bold text-emerald-600">Database</span>
                  <span className="block text-xs text-muted-foreground mt-2">Relational Store</span>
                </div>
              </div>
            </section>

            {/* Section 7: Workflow Diagram */}
            <section id="workflow" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Workflow Diagram
              </h2>
              <p className="text-base leading-relaxed text-foreground">{spec.workflowDesc}</p>
              
              <div className="p-8 bg-secondary/30 rounded-2xl border border-border space-y-6">
                <div className="flex items-center gap-4 text-sm md:text-base font-sans text-foreground">
                  <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold font-mono border border-border shadow-sm">1</span>
                  <span>User interface fires query event (e.g. key searches)</span>
                </div>
                <div className="flex items-center gap-4 text-sm md:text-base font-sans text-foreground">
                  <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold font-mono border border-border shadow-sm">2</span>
                  <span>API gateway intercepts requests with secure parameters validation</span>
                </div>
                <div className="flex items-center gap-4 text-sm md:text-base font-sans text-foreground">
                  <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold font-mono border border-border shadow-sm">3</span>
                  <span>SQL models fetch queried tuples using index lookups</span>
                </div>
                <div className="flex items-center gap-4 text-sm md:text-base font-sans text-foreground">
                  <span className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-sm font-bold font-mono border border-border shadow-sm">4</span>
                  <span>Aggregated results map into JSON feeds and print on layouts</span>
                </div>
              </div>
            </section>

            {/* Section 8: Database Design */}
            <section id="database" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Database Design
              </h2>
              
              <div className="space-y-10">
                {spec.databaseDesign.map((tableInfo) => (
                  <div key={tableInfo.table} className="space-y-4">
                    <h3 className="font-heading font-bold text-lg text-primary flex items-center gap-2">
                      <DbIcon size={18} />
                      <span>Table: {tableInfo.table}</span>
                    </h3>
                    
                    <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
                      <table className="w-full text-left text-sm font-sans text-foreground">
                        <thead className="bg-secondary text-foreground border-b border-border">
                          <tr>
                            <th className="px-6 py-4 font-bold">Field Name</th>
                            <th className="px-6 py-4 font-bold">Data Type</th>
                            <th className="px-6 py-4 font-bold">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {tableInfo.columns.map((col) => (
                            <tr key={col.name} className="hover:bg-secondary/50">
                              <td className="px-6 py-4 font-mono font-bold">{col.name}</td>
                              <td className="px-6 py-4 font-mono text-primary">{col.type}</td>
                              <td className="px-6 py-4 text-muted-foreground">{col.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: API Design */}
            <section id="api-design" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                API Design
              </h2>
              
              <div className="space-y-8">
                {spec.apiDesign.map((endpoint, i) => (
                  <div key={i} className="space-y-4 bg-background p-6 rounded-2xl border border-border shadow-sm">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full border uppercase tracking-wider ${
                        endpoint.method === "GET"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-primary/10 text-primary border-primary/20"
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="font-mono text-base text-foreground font-bold">{endpoint.path}</span>
                    </div>
                    
                    <p className="text-sm text-foreground">{endpoint.desc}</p>
                    
                    {endpoint.req && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Request Body</span>
                        <pre className="p-4 bg-secondary/50 rounded-xl border border-border text-sm font-mono text-primary overflow-x-auto">
                          <code>{endpoint.req}</code>
                        </pre>
                      </div>
                    )}

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Response</span>
                      <pre className="p-4 bg-secondary/50 rounded-xl border border-border text-sm font-mono text-blue-700 overflow-x-auto">
                        <code>{endpoint.res}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conditional Section: WebSocket */}
            {spec.webSocketArchitecture && (
              <section id="websocket" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  WebSocket Architecture
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.webSocketArchitecture}
                </p>
              </section>
            )}

            {/* Section 10: Folder Structure */}
            <section id="folder-structure" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Folder Structure
              </h2>
              <pre className="p-6 bg-secondary/50 rounded-2xl border border-border text-sm font-mono text-foreground overflow-x-auto leading-relaxed">
                <code>{spec.folderStructure}</code>
              </pre>
            </section>

            {/* Conditional Section: Deployment */}
            {spec.deployment && (
              <section id="deployment" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  Deployment
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.deployment}
                </p>
              </section>
            )}

            {/* Conditional Section: Security */}
            {spec.security && (
              <section id="security" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                  Security
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  {spec.security}
                </p>
              </section>
            )}

            {/* Section 11: Challenges & Solutions */}
            <section id="challenges" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Challenges & Solutions
              </h2>
              
              <div className="space-y-6">
                {spec.challenges.map((challenge, i) => (
                  <div key={i} className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">C</span>
                      <h3 className="font-heading font-bold text-xl text-foreground">{challenge.title}</h3>
                    </div>
                    <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                      <p><strong className="text-foreground">Challenge:</strong> {challenge.desc}</p>
                      <p><strong className="text-primary">Solution:</strong> {challenge.sol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Lessons Learned */}
            <section id="lessons" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Lessons Learned
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {spec.lessons.map((lesson, i) => (
                  <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-foreground font-sans">{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 13: Future Scope */}
            <section id="improvements" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">
                Future Scope & Improvements
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {spec.improvements.map((imp, i) => (
                  <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-foreground font-sans">{imp}</span>
                  </li>
                ))}
              </ul>
            </section>

            </>
            )}

            {/* Section 14: Related Projects */}
            <section id="related" className="space-y-8 scroll-mt-28 pt-12 border-t border-border">
              <h2 className="font-heading font-bold text-2xl text-foreground tracking-tight">
                Related Projects
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((relProject) => (
                  <Link
                    key={relProject.id}
                    href={`/projects/${relProject.slug}`}
                    className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest inline-block">
                        {relProject.tags[0]}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {relProject.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-sans line-clamp-2 leading-relaxed">
                        {relProject.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-6 self-end group-hover:translate-x-1 transition-transform">
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>

          </div>

        </div>

      </div>
    </main>
  );
}
