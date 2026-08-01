export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  duration: "4 Weeks" | "8 Weeks" | "12 Weeks" | "18 Weeks";
  registrationFee: number;
  certificationFee: number;
  image: string;
  careerOutcomes: string[];
  skillsGained: string[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
  tags?: string[];
  popular?: boolean;
  featured?: boolean;
  content?: { heading: string; body: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface ResearchFocusArea {
  id: string;
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  image: string;
  icon: string;
}

export interface ResearchLab {
  id: string;
  title: string;
  description: string;
  equipment: string[];
  activities: string[];
  opportunities: string[];
  icon: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  status: "Ongoing" | "Completed" | "Recruiting";
  duration: string;
  area: string;
  teamSize: string;
  description: string;
  image: string;
}

export interface PartnerCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Office {
  id: string;
  city: string;
  isHeadOffice: boolean;
  addressLines?: string[];
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "Research Paper" | "Case Study" | "White Paper" | "Technology Guide";
  date: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  client: string;
  industry: string;
  projectType: string;
  technologies: string[];
  outcome: string;
  image: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
  content?: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
}

export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}
