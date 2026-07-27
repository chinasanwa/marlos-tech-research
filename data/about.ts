import { TimelineMilestone, FeatureItem, Stat } from "@/types";

export const storyTimeline: TimelineMilestone[] = [
  {
    id: "founding",
    year: "2019",
    title: "Founded in Aba",
    description:
      "Marlos Tech Research opens its doors in Aba, Abia State, with a single cohort of engineers training in web fundamentals.",
  },
  {
    id: "research-centre",
    year: "2021",
    title: "Research Centre Established",
    description:
      "A dedicated research arm launches, starting with applied studies in cloud infrastructure for low-connectivity environments.",
  },
  {
    id: "industry-partners",
    year: "2023",
    title: "Industry Partnerships Grow",
    description:
      "Partnerships with financial institutions and logistics companies bring consulting and cybersecurity research into focus.",
  },
  {
    id: "expansion",
    year: "2025",
    title: "Program Portfolio Expands",
    description:
      "Seven short professional programs launch across AI, data, cloud, security, and business consulting tracks.",
  },
  {
    id: "today",
    year: "Today",
    title: "Building Africa's Technical Talent",
    description:
      "Marlos Tech Research trains cohorts year-round while running active research across five technology domains.",
  },
];

export const purposeItems: string[] = [
  "Develop researchers",
  "Train professionals",
  "Support startups",
  "Build practical technology solutions",
  "Promote innovation",
  "Encourage collaboration between academia and industry",
];

export const whyChooseItems: FeatureItem[] = [
  {
    id: "instructors",
    title: "Professional Instructors",
    description:
      "Learn from practitioners who have shipped production systems, not just taught theory.",
    icon: "GraduationCap",
  },
  {
    id: "practical-learning",
    title: "Practical Learning",
    description:
      "Every module is built around hands-on exercises drawn from real client and research work.",
    icon: "Wrench",
  },
  {
    id: "industry-projects",
    title: "Industry Projects",
    description:
      "Work on live briefs sourced from our consulting and partnership engagements.",
    icon: "Briefcase",
  },
  {
    id: "research-driven",
    title: "Research-Driven Curriculum",
    description:
      "Curriculum is updated continuously based on findings from our own research centre.",
    icon: "FlaskConical",
  },
  {
    id: "modern-tech",
    title: "Modern Technology",
    description:
      "Train on the same tools and platforms used by leading technology teams today.",
    icon: "Cpu",
  },
  {
    id: "networking",
    title: "Networking Opportunities",
    description:
      "Connect with cohort peers, alumni, and partner organizations across Nigeria.",
    icon: "Network",
  },
  {
    id: "career-support",
    title: "Career Support",
    description:
      "Get guidance on portfolios, interviews, and placement after certification.",
    icon: "TrendingUp",
  },
  {
    id: "industry-collaboration",
    title: "Industry Collaboration",
    description:
      "Programs are shaped in direct collaboration with our industry and research partners.",
    icon: "Handshake",
  },
];

export const aboutStats: Stat[] = [
  { id: "students", label: "Students Trained", value: 1200, suffix: "+" },
  { id: "projects", label: "Research Projects", value: 38, suffix: "" },
  { id: "partners", label: "Industry Partners", value: 24, suffix: "+" },
  { id: "workshops", label: "Workshops", value: 65, suffix: "+" },
  { id: "graduates", label: "Graduates", value: 940, suffix: "+" },
];
