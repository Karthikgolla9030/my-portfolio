import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "cert-1",
    slug: "python-for-data-science",
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "Nov 2023",
    image: "/images/certs/nptel-python.jpg",
    credentialUrl: "https://nptel.ac.in",
    category: "Data Science"
  },
  {
    id: "cert-2",
    slug: "machine-learning",
    title: "Machine Learning",
    issuer: "Stanford / Coursera",
    date: "Mar 2024",
    image: "/images/certs/coursera-ml.jpg",
    credentialUrl: "https://coursera.org",
    category: "AI/ML"
  },
  {
    id: "cert-3",
    slug: "deep-learning-specialization",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "May 2024",
    image: "/images/certs/coursera-dl.jpg",
    credentialUrl: "https://coursera.org",
    category: "AI/ML"
  },
  {
    id: "cert-4",
    slug: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jul 2024",
    image: "/images/certs/aws-practitioner.jpg",
    credentialUrl: "https://aws.amazon.com",
    category: "Cloud"
  },
  {
    id: "cert-5",
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    issuer: "Vanderbilt / Coursera",
    date: "Sep 2024",
    image: "/images/certs/coursera-prompt.jpg",
    credentialUrl: "https://coursera.org",
    category: "Others"
  }
];
