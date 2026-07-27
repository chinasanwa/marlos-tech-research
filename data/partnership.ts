import { PartnerCategory, FeatureItem, ProcessStep } from "@/types";

export const partnershipCategories: PartnerCategory[] = [
  {
    id: "universities",
    title: "Universities",
    description:
      "Joint research programs, faculty exchange, and curriculum collaboration with Nigerian and international universities.",
    icon: "GraduationCap",
  },
  {
    id: "government",
    title: "Government",
    description:
      "Partnerships with state and federal agencies on digital infrastructure, workforce development, and public research.",
    icon: "Landmark",
  },
  {
    id: "schools",
    title: "Schools",
    description:
      "Early technology exposure programs and pipeline partnerships with secondary schools across Abia State.",
    icon: "School",
  },
  {
    id: "ngos",
    title: "NGOs",
    description:
      "Collaboration with non-profits on education, health, and community technology access initiatives.",
    icon: "HeartHandshake",
  },
  {
    id: "corporate",
    title: "Corporate Organizations",
    description:
      "Talent pipelines, sponsored cohorts, and applied research partnerships with growing Nigerian businesses.",
    icon: "Building2",
  },
  {
    id: "investors",
    title: "Investors",
    description:
      "Co-investment and venture-building partnerships supporting research-backed startups from our labs.",
    icon: "TrendingUp",
  },
  {
    id: "technology-companies",
    title: "Technology Companies",
    description:
      "Joint product research, technical mentorship, and hiring partnerships with technology employers.",
    icon: "Cpu",
  },
];

export const partnershipBenefits: FeatureItem[] = [
  {
    id: "talent-access",
    title: "Access to Talent",
    description: "Connect directly with graduates trained on real, industry-relevant skills.",
    icon: "Users",
  },
  {
    id: "applied-research",
    title: "Applied Research Access",
    description: "Collaborate with our research centre on problems specific to your sector.",
    icon: "FlaskConical",
  },
  {
    id: "brand-visibility",
    title: "Brand Visibility",
    description: "Gain visibility with our student, alumni, and research community.",
    icon: "Megaphone",
  },
  {
    id: "custom-programs",
    title: "Custom Programs",
    description: "Commission training tracks tailored to your organization's specific needs.",
    icon: "Settings2",
  },
  {
    id: "innovation-pipeline",
    title: "Innovation Pipeline",
    description: "Get early visibility into promising research and startup ventures.",
    icon: "Rocket",
  },
  {
    id: "shared-impact",
    title: "Shared Community Impact",
    description: "Contribute directly to building African technical capacity at scale.",
    icon: "HeartHandshake",
  },
];

export const partnershipProcess: ProcessStep[] = [
  {
    id: "reach-out",
    step: "01",
    title: "Reach Out",
    description: "Send us a message describing your organization and partnership interest.",
    icon: "MessageSquare",
  },
  {
    id: "discuss-fit",
    step: "02",
    title: "Discuss Fit",
    description: "We meet to explore shared goals and how a partnership could work.",
    icon: "Compass",
  },
  {
    id: "agreement",
    step: "03",
    title: "Sign Agreement",
    description: "We formalize the partnership scope, commitments, and timeline together.",
    icon: "FileSignature",
  },
  {
    id: "launch",
    step: "04",
    title: "Launch Collaboration",
    description: "We begin the partnership, with regular check-ins to track progress.",
    icon: "Rocket",
  },
];
