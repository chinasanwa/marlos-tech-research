import { FeatureItem, ProcessStep, FAQItem } from "@/types";

export const programBenefits: FeatureItem[] = [
  {
    id: "hands-on",
    title: "Hands-On Learning",
    description: "Every session pairs concept with practice, not passive lectures.",
    icon: "Wrench",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Build a portfolio of real projects tied to each program's outcomes.",
    icon: "FolderKanban",
  },
  {
    id: "certification",
    title: "Certification",
    description: "Earn a Marlos Tech Research certificate recognized by our industry partners.",
    icon: "BadgeCheck",
  },
  {
    id: "mentorship",
    title: "Mentorship",
    description: "Get guidance from instructors and alumni throughout the program.",
    icon: "Users",
  },
  {
    id: "industry-exposure",
    title: "Industry Exposure",
    description: "Work with briefs and case studies sourced from our consulting practice.",
    icon: "Building2",
  },
  {
    id: "networking",
    title: "Networking",
    description: "Join a cohort and alumni network spanning Nigeria's tech ecosystem.",
    icon: "Network",
  },
  {
    id: "career-support",
    title: "Career Support",
    description: "Access portfolio reviews, interview prep, and placement guidance.",
    icon: "TrendingUp",
  },
  {
    id: "research-opportunities",
    title: "Research Opportunities",
    description: "Top graduates can join active research projects at our research centre.",
    icon: "FlaskConical",
  },
];

export const learningProcess: ProcessStep[] = [
  {
    id: "register",
    step: "01",
    title: "Register",
    description: "Submit your application and pay the registration fee to secure your seat.",
    icon: "ClipboardList",
  },
  {
    id: "orientation",
    step: "02",
    title: "Orientation",
    description: "Meet your instructors and cohort, and review the program roadmap.",
    icon: "Compass",
  },
  {
    id: "training",
    step: "03",
    title: "Training",
    description: "Attend structured weekly classes covering core concepts and tools.",
    icon: "BookOpen",
  },
  {
    id: "projects",
    step: "04",
    title: "Projects",
    description: "Apply what you've learned to hands-on, portfolio-ready projects.",
    icon: "FolderKanban",
  },
  {
    id: "assessment",
    step: "05",
    title: "Assessment",
    description: "Complete a final assessment demonstrating program competencies.",
    icon: "ClipboardCheck",
  },
  {
    id: "certification",
    step: "06",
    title: "Certification",
    description: "Receive your Marlos Tech Research certificate upon successful completion.",
    icon: "BadgeCheck",
  },
  {
    id: "career-support-step",
    step: "07",
    title: "Career Support",
    description: "Get ongoing placement and career guidance after you graduate.",
    icon: "TrendingUp",
  },
];

export const programFAQs: FAQItem[] = [
  {
    id: "admissions",
    category: "Admissions",
    question: "Who can apply to a Marlos Tech Research program?",
    answer:
      "Our programs are open to students, early-career professionals, and career changers. Each program page lists any specific prerequisites for that track.",
  },
  {
    id: "duration",
    category: "Duration",
    question: "How long do programs run?",
    answer:
      "Each program has a defined length tailored to its track; full details are shared during enrollment.",
  },
  {
    id: "certification",
    category: "Certification",
    question: "Will I receive a certificate?",
    answer:
      "Yes. Every program ends with an assessment, and graduates who meet the completion requirements receive a Marlos Tech Research certificate.",
  },
  {
    id: "learning-mode",
    category: "Learning Mode",
    question: "Are classes in-person or online?",
    answer:
      "Programs are taught through a mix of live instruction and guided project work. Specific delivery details are confirmed during orientation.",
  },
  {
    id: "requirements",
    category: "Requirements",
    question: "What do I need before starting a program?",
    answer:
      "You'll need a personal laptop and a stable internet connection. Some technical programs list additional recommended background on their program page.",
  },
  {
    id: "payments",
    category: "Payments",
    question: "What fees are due at registration?",
    answer:
      "A ₦10,000 registration fee secures your seat, and a separate ₦10,000 certification fee applies once you complete your program. Course fees are shared directly during enrollment.",
  },
];
