/**
 * TODO: These are SAMPLE case studies to show the layout.
 * Replace them with your real projects (client names only with permission),
 * or describe them anonymously, e.g. "Leading NBFC in India".
 */
export type Project = {
  title: string;
  client: string;
  category: "Cloud" | "AI" | "Mobile" | "Web";
  summary: string;
  results: string[];
  tech: string[];
  gradient: string;
};

export const projectCategories = ["All", "Cloud", "AI", "Mobile", "Web"] as const;

export const projects: Project[] = [
  {
    title: "AI document assistant for a lending company",
    client: "FinTech client",
    category: "AI",
    summary: "A RAG assistant that answers staff questions from thousands of policy documents, with citations.",
    results: ["Answers in seconds", "Source-linked responses", "Role-based access"],
    tech: ["Amazon Bedrock", "LangGraph", "pgvector", "Next.js"],
    gradient: "from-iris/40 via-brand/20 to-transparent",
  },
  {
    title: "AWS migration for an e-commerce platform",
    client: "Retail client",
    category: "Cloud",
    summary: "Moved a monolith from on-premise servers to containers on AWS with automated CI/CD.",
    results: ["Zero-downtime cut-over", "Auto-scaling for sale days", "Lower hosting cost"],
    tech: ["AWS EKS", "Terraform", "GitHub Actions", "Aurora"],
    gradient: "from-aqua/40 via-brand/20 to-transparent",
  },
  {
    title: "Telemedicine app for iOS and Android",
    client: "Healthcare client",
    category: "Mobile",
    summary: "Video consultations, e-prescriptions and appointment booking in one Flutter app.",
    results: ["Single codebase", "Secure video calls", "Published on both stores"],
    tech: ["Flutter", "Firebase", "WebRTC", "Node.js"],
    gradient: "from-volt/30 via-aqua/20 to-transparent",
  },
  {
    title: "Multi-tenant SaaS for field operations",
    client: "Logistics client",
    category: "Web",
    summary: "A SaaS platform with live tracking, dashboards and role-based portals for each customer.",
    results: ["Multi-tenant by design", "Real-time maps", "SSO for enterprises"],
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    gradient: "from-brand/40 via-iris/20 to-transparent",
  },
  {
    title: "Visual inspection AI for a factory line",
    client: "Manufacturing client",
    category: "AI",
    summary: "A computer-vision model that flags defective parts from camera images in real time.",
    results: ["Real-time detection", "Edge deployment", "Operator dashboard"],
    tech: ["PyTorch", "AWS IoT Greengrass", "SageMaker"],
    gradient: "from-aqua/40 via-iris/20 to-transparent",
  },
  {
    title: "Learning app with an AI tutor",
    client: "EdTech client",
    category: "Mobile",
    summary: "A React Native learning app with personalised quizzes and a chat-based AI tutor.",
    results: ["Personalised learning paths", "Offline lessons", "In-app AI tutor"],
    tech: ["React Native", "OpenAI", "FastAPI", "DynamoDB"],
    gradient: "from-iris/40 via-volt/15 to-transparent",
  },
];
