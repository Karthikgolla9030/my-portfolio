export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  docUrl?: string;
  tags: string[];
  stats: {
    duration: string;
    role: string;
    techStack: string;
    status: string;
  };
  problemStatement: string;
  problemCards: {
    title: string;
    description: string;
  }[];
  bullets: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools' | 'Cloud' | 'Concepts';
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  percentage: number;
  iconName: string;
  status?: 'CORE' | 'APPLIED' | 'WORKING KNOWLEDGE' | 'LEARNING' | 'EXPLORING';
  evidence?: string;
}

export interface ExperienceItem {
  id: string;
  slug: string;
  role: string;
  company: string;
  duration: string;
  type: 'Internship' | 'Training' | 'Training / Internship' | 'Leadership' | 'Self Learning' | 'Projects';
  description: string;
}

export interface Certification {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
  category: 'Data Science' | 'AI/ML' | 'Cloud' | 'Others';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: 'AI & ML' | 'Backend' | 'Journey' | 'Data Science';
  image: string;
}

export interface LearningItem {
  title: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  dateStarted: string;
}

export interface RoadmapNode {
  title: string;
  subtitle: string;
  status: 'Completed' | 'Active' | 'Upcoming';
}
