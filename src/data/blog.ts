import { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "blog-1",
    slug: "building-rag-chatbot-langchain-openai",
    title: "Building a RAG-based Chatbot using LangChain and OpenAI",
    description: "A step-by-step guide to building your first retrieval-augmented generation chatbot with custom files.",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    category: "AI & ML",
    image: "/images/blog/rag.jpg"
  },
  {
    id: "blog-2",
    slug: "django-best-practices-scalable-applications",
    title: "Django Best Practices for Scalable Applications",
    description: "Important patterns and practices for production-ready Django applications, databases and caching.",
    date: "Dec 20, 2025",
    readTime: "8 min read",
    category: "Backend",
    image: "/images/blog/django.jpg"
  },
  {
    id: "blog-3",
    slug: "journey-into-data-science-ai",
    title: "My Journey into Data Science and AI",
    description: "Lessons learned and resources that helped me grow in AI, backend dev, and data analysis.",
    date: "Nov 12, 2025",
    readTime: "6 min read",
    category: "Journey",
    image: "/images/blog/journey.jpg"
  },
  {
    id: "blog-4",
    slug: "exploratory-data-analysis-pandas-seaborn",
    title: "Exploratory Data Analysis with Pandas and Seaborn",
    description: "A complete hands-on guide with practical code examples for conducting exploratory data analysis.",
    date: "Oct 05, 2025",
    readTime: "12 min read",
    category: "Data Science",
    image: "/images/blog/eda.jpg"
  }
];
