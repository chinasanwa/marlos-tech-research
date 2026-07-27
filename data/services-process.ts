import { ProcessStep } from "@/types";

export const servicesProcess: ProcessStep[] = [
  {
    id: "consultation",
    step: "01",
    title: "Consultation",
    description: "We start with a conversation to understand your goals and constraints.",
    icon: "MessageSquare",
  },
  {
    id: "needs-assessment",
    step: "02",
    title: "Needs Assessment",
    description: "We assess your current systems, data, and team capacity in detail.",
    icon: "ClipboardList",
  },
  {
    id: "planning",
    step: "03",
    title: "Planning",
    description: "We design a roadmap with clear milestones and resourcing.",
    icon: "Compass",
  },
  {
    id: "implementation",
    step: "04",
    title: "Implementation",
    description: "Our team builds, configures, or migrates systems according to plan.",
    icon: "Hammer",
  },
  {
    id: "testing",
    step: "05",
    title: "Testing",
    description: "We validate performance, security, and reliability before go-live.",
    icon: "FlaskConical",
  },
  {
    id: "delivery",
    step: "06",
    title: "Delivery",
    description: "We hand over documented, production-ready systems to your team.",
    icon: "PackageCheck",
  },
  {
    id: "support",
    step: "07",
    title: "Support",
    description: "We provide ongoing support to keep systems running smoothly.",
    icon: "LifeBuoy",
  },
];
