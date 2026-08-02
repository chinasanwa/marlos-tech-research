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
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bank-fraud-detection",
    client: "Mid-Sized Commercial Bank",
    industry: "Financial Services",
    projectType: "AI Fraud Detection System",
    technologies: ["Python", "PyTorch", "PostgreSQL"],
    outcome: "Flagged fraudulent transactions 3x faster with a measurable drop in false positives.",
    image:
      "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "retail-analytics-dashboard",
    client: "Multi-Branch Retail Chain",
    industry: "Retail",
    projectType: "Data Analytics Dashboard",
    technologies: ["React", "D3.js", "BigQuery"],
    outcome: "Gave regional managers real-time visibility into sales, cutting reporting time by half.",
    image:
      "https://images.unsplash.com/photo-1573497619951-6c9477fb83b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "agritech-platform",
    client: "Agricultural Cooperative Network",
    industry: "Agriculture",
    projectType: "Software Development",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    outcome: "Connected over 400 smallholder farmers to buyers through a shared digital marketplace.",
    image:
      "https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=1200&auto=format&fit=crop",
  },
];
