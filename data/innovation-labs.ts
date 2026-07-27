import { ResearchLab } from "@/types";

export const innovationLabs: ResearchLab[] = [
  {
    id: "ai-lab",
    title: "AI Lab",
    description:
      "A dedicated space for training, evaluating, and deploying machine learning and AI models on real datasets.",
    equipment: ["GPU workstations", "Model training servers", "Annotation tooling"],
    activities: ["Model fine-tuning", "Evaluation benchmarking", "Applied AI case studies"],
    opportunities: ["Join an active model evaluation project", "Co-author applied research notes"],
    icon: "BrainCircuit",
  },
  {
    id: "cybersecurity-lab",
    title: "Cybersecurity Lab",
    description:
      "A controlled environment for threat simulation, network defense practice, and incident response training.",
    equipment: ["Isolated network range", "Threat simulation tooling", "Security monitoring stack"],
    activities: ["Penetration testing exercises", "Incident response drills", "Threat intelligence review"],
    opportunities: ["Contribute to threat intelligence reports", "Support partner security assessments"],
    icon: "ShieldCheck",
  },
  {
    id: "cloud-innovation-lab",
    title: "Cloud Innovation Lab",
    description:
      "A sandbox for testing cloud architecture patterns designed for African connectivity and cost constraints.",
    equipment: ["Multi-cloud sandbox accounts", "Infrastructure-as-code tooling", "Load testing tools"],
    activities: ["Architecture prototyping", "Cost and latency benchmarking", "Migration planning exercises"],
    opportunities: ["Support live SME cloud migrations", "Publish infrastructure benchmarks"],
    icon: "Cloud",
  },
  {
    id: "data-science-lab",
    title: "Data Science Lab",
    description:
      "A workspace for statistical analysis, visualization, and building decision-support tools from real data.",
    equipment: ["Data analysis workstations", "Visualization tooling", "Shared compute cluster"],
    activities: ["Exploratory data analysis", "Dashboard prototyping", "Forecasting model development"],
    opportunities: ["Work with partner organizations' datasets", "Contribute to open data projects"],
    icon: "ChartSpline",
  },
  {
    id: "smart-systems-lab",
    title: "Smart Systems Lab",
    description:
      "A hardware-software lab for building and testing IoT and sensor-based systems for real-world deployment.",
    equipment: ["Microcontroller kits", "Sensor arrays", "Prototyping workbenches"],
    activities: ["Sensor network prototyping", "Field reliability testing", "Embedded systems programming"],
    opportunities: ["Join agriculture or smart-city pilot projects", "Present at innovation showcases"],
    icon: "Cpu",
  },
];
