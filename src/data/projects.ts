import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "skillsphere",
    slug: "skillsphere",
    title: "SkillSphere",
    subtitle: "AI Neighborhood Skill Sharing Platform",
    description: "Skill-sharing platform using Django with authentication, messaging, and role-based access control.",
    longDescription: "An AI-driven neighborhood skill-sharing platform connecting learners and teachers with intelligent skill-gap analysis, automated evaluations, and customizable learning pathways.",
    image: "/images/projects/skillsphere.png",
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    docUrl: "https://docs.example.com",
    tags: ["Python", "Django", "Django ORM"],
    stats: {
      duration: "2 months",
      role: "Lead Developer",
      techStack: "Python, Django, Django ORM",
      status: "Beta Testing"
    },
    problemStatement: "Peer-to-peer tutoring often lacks verified skill tracking and direct alignment with learners' long-term learning goals.",
    problemCards: [
      { title: "Unverified Tutors", description: "Difficult to judge skill levels of potential instructors." },
      { title: "Inefficient Search", description: "Manual matching consumes hours of coordination time." },
      { title: "No Structure", description: "Lack of clear lesson tracking and automated milestone feedback." }
    ],
    bullets: [
      "Created a skill-sharing platform using Django with authentication, messaging, and role-based access control.",
      "Structured relational databases using Django ORM and optimized backend workflows for efficient data handling.",
      "Built an analytics dashboard to monitor user registrations, skill activity, assessments, and platform engagement."
    ]
  },
  {
    id: "linkora",
    slug: "linkora",
    title: "Linkora",
    subtitle: "Realtime Communication & Matchmaking Platform",
    description: "A realtime communication platform with random interest-based matchmaking using Django Channels and React.",
    longDescription: "An advanced real-time communication platform allowing users to discover and connect with others through interest-based random matchmaking. Features robust WebSocket chat, secure JWT authentication, and dynamic friendships.",
    image: "/images/projects/linkora-main.png",
    liveUrl: "https://omniroute-xgnt.onrender.com",
    githubUrl: "https://github.com/Karthikgolla9030/CHAT-APP",
    tags: ["React", "Django", "Django Channels", "Redis", "PostgreSQL", "WebSockets"],
    stats: {
      duration: "2 months",
      role: "Full Stack Developer",
      techStack: "React, Django Channels, Redis, PostgreSQL",
      status: "Production Ready"
    },
    problemStatement: "Users looking to meet like-minded individuals online face friction with generic chat apps that lack interest-based filtering, leading to poor connection quality and delayed real-time communication.",
    problemCards: [
      { title: "Generic Matchmaking", description: "Standard platforms pair users randomly without considering underlying hobbies or interests." },
      { title: "Chat Disconnects", description: "Traditional HTTP polling creates laggy conversations and poor realtime user experience." },
      { title: "No Trust System", description: "Hard to filter out spam or abusive behavior without reporting and moderation modules." }
    ],
    bullets: [
      "Built a random matchmaking engine in Django pairing users based on shared profile interests.",
      "Implemented highly concurrent WebSockets using Django Channels and Redis for instant messaging.",
      "Designed a robust PostgreSQL schema handling workspaces, private channels, and friendships."
    ]
  },
  {
    id: "sales-dashboard",
    slug: "sales-dashboard",
    title: "Sales Performance Analysis",
    subtitle: "Turning sales data into interactive insights for understanding revenue, profitability, customers, products, and business performance.",
    description: "An interactive Power BI analysis designed to help users monitor sales performance, identify trends, compare business segments, and support data-driven decisions.",
    longDescription: "A comprehensive business performance intelligence dashboard built using Power BI and DAX measures to highlight top-performing products and sales channels.",
    image: "/images/projects/sales-performance-analysis.png",
    githubUrl: "https://github.com/Karthikgolla9030/Infosys_Project",
    tags: ["Power BI", "DAX", "Power Query", "Data Cleaning", "Data Transformation", "Data Visualization", "Business Intelligence"],
    stats: {
      duration: "Completed",
      role: "Business Intelligence",
      techStack: "Power BI, DAX, Power Query",
      status: "Completed"
    },
    problemStatement: "Organizations struggle to aggregate sales transactions from multiple CRM pipelines into actionable real-time dashboard interfaces.",
    problemCards: [
      { title: "Stale Records", description: "Reports compiled weekly instead of showing active visual summaries." },
      { title: "Disjointed Sources", description: "CRM transactions separated from raw website product telemetry." },
      { title: "No Forecasting", description: "Lack of predictive curves built on top of historic sales performance." }
    ],
    bullets: [
      "Designed an end-to-end sales analytics dashboard to analyze one year of business performance data.",
      "Developed DAX measures and KPIs to analyze sales performance.",
      "Generated actionable insights on top-performing products and channels to support strategic decisions."
    ]
  },
  {
    id: "zomato-analysis",
    slug: "zomato-analysis",
    title: "Zomato Data Analysis",
    subtitle: "Exploratory Data Analysis & Visualization",
    description: "Exploring restaurant data across Bengaluru to understand ratings, pricing, cuisines, locations, services, and customer engagement.",
    longDescription: "An exploratory data analysis project investigating customer ratings, pricing distribution, location clustering, and restaurant metrics.",
    image: "/images/projects/zomato.jpg",
    githubUrl: "https://github.com/Karthikgolla9030/Zomato_Analysis_Project",
    tags: ["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    stats: {
      duration: "Completed",
      role: "Data Analysis & Visualization",
      techStack: "Python, Pandas, Matplotlib, Seaborn",
      status: "Completed"
    },
    problemStatement: "Restaurant startups need data-backed insights on optimal pricing structures, location selections, and menu categories to survive competitive markets.",
    problemCards: [
      { title: "Unstructured Feedback", description: "Customer reviews are text-heavy and hard to quantify at scale." },
      { title: "Pricing Blindspots", description: "Pricing decisions made without local geographic competitor mapping." },
      { title: "High Failure Rate", description: "New outlets closing due to lack of demographic-to-cuisine pairing." }
    ],
    bullets: [
      "Conducted exploratory data analysis on 10,000+ restaurant entries.",
      "Cleaned dirty features, handling null values and price standardization.",
      "Developed interactive data visualizations outlining top cuisines."
    ]
  }
];

