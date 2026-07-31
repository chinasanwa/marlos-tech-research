import { BlogPost } from "@/types";

export const blogArticles: BlogPost[] = [
  {
    id: "b1",
    slug: "artificial-intelligence-in-african-business",
    title: "How African Businesses Are Adopting Artificial Intelligence",
    excerpt:
      "A look at where AI adoption is accelerating across Nigerian industries, and where it's still held back by data and infrastructure gaps.",
    category: "Artificial Intelligence",
    date: "July 14, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop",
    author: "Ngozi Eze",
    authorRole: "Lead AI Researcher",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    tags: ["Artificial Intelligence", "Business", "Nigeria"],
    popular: true,
    featured: true,
    content: [
      {
        heading: "Where AI Is Already Working",
        body: "Across banking, logistics, and retail, we're seeing AI move from pilot projects to production systems. Fraud detection and customer support automation are the two clearest examples, both because the data already exists and because the return on investment is easy to measure.",
      },
      {
        heading: "The Infrastructure Gap",
        body: "Model training and inference still depend heavily on cloud providers with limited local presence. This adds latency and cost that many teams underestimate until they're deep into a deployment.",
      },
      {
        heading: "What We Recommend",
        body: "Start with a narrow, well-defined use case with clean data, and plan for degraded connectivity from day one rather than treating it as an edge case. Our Applied AI research area studies exactly this pattern.",
      },
      {
        heading: "Looking Ahead",
        body: "As more Nigerian organizations build in-house data capacity, we expect AI adoption to shift from vendor-led pilots toward internally owned systems built and maintained by local teams.",
      },
    ],
  },
  {
    id: "b2",
    slug: "cybersecurity-best-practices-smes",
    title: "Cybersecurity Best Practices for Growing SMEs",
    excerpt:
      "Practical, low-cost security steps small and mid-sized Nigerian businesses can take before they need an enterprise security budget.",
    category: "Cybersecurity",
    date: "July 2, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    author: "Ifeoma Chukwu",
    authorRole: "Cybersecurity Research Lead",
    authorImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    tags: ["Cybersecurity", "SMEs", "Risk Management"],
    popular: true,
    content: [
      {
        heading: "Start With Access Control",
        body: "Most breaches we've studied at partner organizations started with weak or shared credentials rather than sophisticated exploits. Multi-factor authentication is the single highest-leverage step available.",
      },
      {
        heading: "Patch on a Schedule",
        body: "Set a recurring monthly window to apply software updates rather than waiting for an incident to force the issue. Unpatched software remains one of the most common entry points.",
      },
      {
        heading: "Train Your Team",
        body: "Technical controls only go so far if staff aren't equipped to spot phishing attempts. A short quarterly awareness session measurably reduces incident rates.",
      },
    ],
  },
  {
    id: "b3",
    slug: "cloud-computing-cost-optimization",
    title: "Cloud Cost Optimization for Nigerian Startups",
    excerpt:
      "How early-stage teams can avoid the most common cloud spending mistakes while still building for scale.",
    category: "Cloud Computing",
    date: "June 20, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
    author: "Emeka Obi",
    authorRole: "Cloud Research Associate",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    tags: ["Cloud Computing", "Startups", "Cost Optimization"],
    featured: false,
    content: [
      {
        heading: "Right-Size Before You Scale",
        body: "Many teams over-provision compute resources early because it's simpler than tuning. This becomes expensive fast; start with conservative sizing and scale based on real usage data.",
      },
      {
        heading: "Watch Data Transfer Costs",
        body: "Cross-region and egress charges are often the least visible line item until the invoice arrives. Architecture decisions made early can prevent this from becoming a recurring cost.",
      },
      {
        heading: "Use Reserved Capacity Strategically",
        body: "Once usage patterns stabilize, reserved or committed-use pricing can meaningfully cut costs — but only once you're confident in your baseline load.",
      },
    ],
  },
  {
    id: "b4",
    slug: "machine-learning-production-pipelines",
    title: "Getting Machine Learning Models Into Production",
    excerpt:
      "The gap between a working notebook and a reliable production model — and how to close it.",
    category: "Machine Learning",
    date: "June 8, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    author: "Chiamaka Nwosu",
    authorRole: "Machine Learning Engineer",
    authorImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    tags: ["Machine Learning", "MLOps", "Engineering"],
    popular: true,
    content: [
      {
        heading: "Notebooks Aren't Systems",
        body: "A model that performs well in a notebook still needs a reproducible pipeline, versioned data, and monitoring before it can be trusted in production.",
      },
      {
        heading: "Monitor for Drift",
        body: "Real-world data shifts over time. Without active monitoring, a model's accuracy can quietly degrade long before anyone notices in the numbers that matter.",
      },
      {
        heading: "Plan for Retraining",
        body: "Build a retraining schedule and a rollback plan from the start, rather than treating the first deployed version as final.",
      },
    ],
  },
  {
    id: "b5",
    slug: "data-science-decision-making",
    title: "Using Data Science to Improve Business Decisions",
    excerpt:
      "Why the biggest wins in data science often come from better questions, not better models.",
    category: "Data Science",
    date: "May 26, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    author: "Grace Nnamdi",
    authorRole: "Data Science Instructor",
    authorImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
    tags: ["Data Science", "Analytics", "Strategy"],
    content: [
      {
        heading: "Start With the Decision",
        body: "Before building any model or dashboard, define exactly what decision the analysis needs to support. This single step avoids most wasted analytics work.",
      },
      {
        heading: "Simple Models, Clear Communication",
        body: "A straightforward model that stakeholders trust and act on outperforms a sophisticated one that sits unused.",
      },
      {
        heading: "Build Feedback Loops",
        body: "Track whether decisions informed by data actually produced the expected outcome, and adjust your approach accordingly.",
      },
    ],
  },
  {
    id: "b6",
    slug: "building-a-technology-career-in-nigeria",
    title: "Building a Technology Career in Nigeria: A Practical Guide",
    excerpt:
      "What actually helps early-career engineers and analysts stand out in a competitive Nigerian tech job market.",
    category: "Technology Careers",
    date: "May 12, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    author: "Tunde Bakare",
    authorRole: "Career Development Lead",
    authorImage:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    tags: ["Careers", "Talent Development"],
    popular: true,
    content: [
      {
        heading: "Portfolios Beat Certificates",
        body: "Employers we work with consistently rank a small portfolio of real, documented projects above a list of certifications.",
      },
      {
        heading: "Specialize, Then Broaden",
        body: "Early depth in one area — cloud, data, or security — makes it easier to stand out than spreading effort thin across everything at once.",
      },
      {
        heading: "Build a Network Early",
        body: "Most roles we place come through referrals and community connections rather than cold applications alone.",
      },
    ],
  },
  {
    id: "b7",
    slug: "digital-transformation-roadmap",
    title: "A Practical Digital Transformation Roadmap for African Organizations",
    excerpt:
      "A step-by-step approach to modernizing operations without disrupting the business that depends on them.",
    category: "Digital Transformation",
    date: "April 30, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    author: "Adaeze Umeh",
    authorRole: "Digital Transformation Consultant",
    authorImage:
      "https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=200&auto=format&fit=crop",
    tags: ["Digital Transformation", "Strategy", "Operations"],
    content: [
      {
        heading: "Map Before You Modernize",
        body: "Document existing processes in detail before changing them. Many transformation efforts fail because they digitize a broken process rather than fixing it first.",
      },
      {
        heading: "Sequence for Early Wins",
        body: "Start with changes that produce visible, measurable improvements quickly. This builds the internal support needed for harder changes later.",
      },
      {
        heading: "Bring Staff Along",
        body: "Technology change is also organizational change. Involve the people who will use new systems from the planning stage, not just at rollout.",
      },
    ],
  },
];
