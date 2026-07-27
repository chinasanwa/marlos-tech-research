import { PortfolioProject } from "@/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "logistics-cloud-migration",
    client: "Regional Logistics Provider",
    industry: "Logistics",
    projectType: "Cloud Migration",
    technologies: ["AWS", "Kubernetes", "Terraform"],
    outcome: "Reduced infrastructure costs by 32% while improving uptime during peak season.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bank-fraud-detection",
    client: "Mid-Sized Commercial Bank",
    industry: "Financial Services",
    projectType: "AI Fraud Detection System",
    technologies: ["Python", "PyTorch", "PostgreSQL"],
    outcome: "Flagged fraudulent transactions 3x faster with a measurable drop in false positives.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "retail-analytics-dashboard",
    client: "Multi-Branch Retail Chain",
    industry: "Retail",
    projectType: "Data Analytics Dashboard",
    technologies: ["React", "D3.js", "BigQuery"],
    outcome: "Gave regional managers real-time visibility into sales, cutting reporting time by half.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "agritech-platform",
    client: "Agricultural Cooperative Network",
    industry: "Agriculture",
    projectType: "Software Development",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    outcome: "Connected over 400 smallholder farmers to buyers through a shared digital marketplace.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
  },
];
