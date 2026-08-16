import { LearningItem, RoadmapNode } from "@/types";

export const currentlyLearning: LearningItem[] = [
  { title: "Advanced AI & LLMs", category: "AI/ML", status: "In Progress", dateStarted: "Started: Jan 2026" },
  { title: "Vector Databases", category: "AI/ML", status: "In Progress", dateStarted: "Started: Jan 2026" },
  { title: "Model Context Protocol (MCP)", category: "AI/ML", status: "In Progress", dateStarted: "Started: Feb 2026" },
  { title: "Tailwind Design", category: "Design", status: "In Progress", dateStarted: "Started: Feb 2026" },
  { title: "Cloud (AWS)", category: "Cloud", status: "In Progress", dateStarted: "Started: Mar 2026" },
  { title: "Docker & Kubernetes", category: "DevOps", status: "Planned", dateStarted: "Scheduled: Apr 2026" }
];

export const learningRoadmap: RoadmapNode[] = [
  { title: "Master System Design", subtitle: "Scalability, load balancers, caching and microservices architecture.", status: "Completed" },
  { title: "Build AI Agents", subtitle: "Autonomous agent execution pathways and tool interaction tools.", status: "Active" },
  { title: "Contribute to Open Source", subtitle: "Submitting enhancements and optimizations to packages like LangChain.", status: "Upcoming" },
  { title: "Build SaaS Products", subtitle: "Bootstrapping web services from database configurations to payment portals.", status: "Upcoming" },
  { title: "Write & Share Knowledge", subtitle: "Expanding content reach by documenting software engineering breakthroughs.", status: "Upcoming" }
];
