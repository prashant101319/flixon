import type { IconName } from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  accent: string; // tailwind gradient classes
  overview: string;
  features: { title: string; text: string }[];
  benefits: string[];
  tech: string[];
};

export const services: Service[] = [
  {
    slug: "cloud-consulting-migration",
    title: "Cloud Consulting & Migration",
    short: "Plan, migrate and modernise workloads on AWS, Azure and Google Cloud.",
    icon: "cloud",
    accent: "from-aqua to-brand",
    overview:
      "We assess your current infrastructure, design a secure landing zone and move applications to the cloud with minimal downtime, then modernise them to cut cost and improve resilience.",
    features: [
      { title: "Cloud readiness assessment", text: "Inventory, dependency mapping and a costed migration roadmap." },
      { title: "Landing zone setup", text: "Multi-account structure, identity, networking and guardrails from day one." },
      { title: "Lift, re-platform or re-architect", text: "The right migration path for each workload, not one size for all." },
      { title: "Database migration", text: "Move SQL and NoSQL data with replication and near-zero downtime." },
      { title: "Hybrid and multi-cloud", text: "Connect on-premise systems and multiple clouds securely." },
      { title: "Cost optimisation", text: "Right-sizing, savings plans and FinOps dashboards." },
    ],
    benefits: ["Lower infrastructure cost", "Higher availability", "Faster releases", "Security by design"],
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "AWS DMS", "CloudFormation"],
  },
  {
    slug: "devops-cloud-native",
    title: "DevOps & Cloud-Native Engineering",
    short: "Containers, Kubernetes, serverless and CI/CD pipelines that ship daily.",
    icon: "workflow",
    accent: "from-brand to-iris",
    overview:
      "We build cloud-native platforms and automated delivery pipelines so your team can release safely, often and with full visibility.",
    features: [
      { title: "CI/CD pipelines", text: "Automated build, test, security scan and deploy on every commit." },
      { title: "Kubernetes and containers", text: "EKS, AKS and GKE clusters with autoscaling and GitOps." },
      { title: "Serverless architecture", text: "Event-driven apps on Lambda, Functions and Cloud Run." },
      { title: "Infrastructure as code", text: "Repeatable environments with Terraform and CDK." },
      { title: "Observability", text: "Logs, metrics, traces and alerts that point to the root cause." },
      { title: "DevSecOps", text: "Secrets management, policy as code and vulnerability scanning." },
    ],
    benefits: ["Release in minutes, not weeks", "Fewer production incidents", "Consistent environments", "Lower ops effort"],
    tech: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana"],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    short: "Predictive models, computer vision and NLP built into your products.",
    icon: "brain",
    accent: "from-iris to-aqua",
    overview:
      "From proof of concept to production, we design, train and deploy machine-learning models that solve measurable business problems, with MLOps to keep them accurate over time.",
    features: [
      { title: "Use-case discovery", text: "Find where AI creates value and estimate the return before building." },
      { title: "Predictive analytics", text: "Forecasting, churn, risk scoring and recommendation engines." },
      { title: "Computer vision", text: "Detection, OCR and visual inspection for images and video." },
      { title: "Natural language processing", text: "Classification, extraction, sentiment and search." },
      { title: "MLOps", text: "Versioned data, automated training and model monitoring." },
      { title: "Responsible AI", text: "Bias checks, explainability and data privacy controls." },
    ],
    benefits: ["Data-driven decisions", "Automated manual work", "New product capabilities", "Measurable ROI"],
    tech: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Amazon SageMaker", "Vertex AI", "MLflow"],
  },
  {
    slug: "generative-ai-agents",
    title: "Generative AI & AI Agents",
    short: "LLM apps, RAG chatbots and autonomous agents grounded in your data.",
    icon: "bot",
    accent: "from-volt to-aqua",
    overview:
      "We build secure generative-AI applications: assistants that answer from your documents, agents that complete multi-step tasks, and copilots inside your existing tools.",
    features: [
      { title: "RAG knowledge assistants", text: "Chatbots that answer from your documents with source citations." },
      { title: "Multi-agent systems", text: "Agents that plan, use tools and complete workflows end to end." },
      { title: "LLM integration", text: "OpenAI, Claude, Gemini, Llama or Bedrock, chosen for your needs." },
      { title: "Fine-tuning and evaluation", text: "Custom models with automated quality and safety evaluation." },
      { title: "AI guardrails", text: "PII redaction, prompt-injection defence and access control." },
      { title: "Voice and multimodal", text: "Speech, image and document understanding in one experience." },
    ],
    benefits: ["24x7 intelligent support", "Faster knowledge work", "Lower operating cost", "Enterprise-grade security"],
    tech: ["LangGraph", "LangChain", "Amazon Bedrock", "OpenAI", "Anthropic Claude", "pgvector", "Pinecone"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native and cross-platform iOS and Android apps users love.",
    icon: "smartphone",
    accent: "from-aqua to-iris",
    overview:
      "We design and build fast, beautiful mobile apps, from MVP to enterprise scale, with secure backends, offline support and smooth releases to the App Store and Google Play.",
    features: [
      { title: "Cross-platform apps", text: "One codebase for iOS and Android with Flutter or React Native." },
      { title: "Native apps", text: "Swift and Kotlin when performance or device features demand it." },
      { title: "AI-powered features", text: "On-device ML, smart search, chat and personalisation." },
      { title: "Backend and APIs", text: "Scalable cloud backends, authentication and push notifications." },
      { title: "UI/UX design", text: "Research-led design systems and interactive prototypes." },
      { title: "Launch and growth", text: "Store publishing, analytics, crash monitoring and A/B tests." },
    ],
    benefits: ["Faster time to market", "Lower build cost", "Higher app ratings", "Built to scale"],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
  },
  {
    slug: "web-saas-development",
    title: "Web & SaaS Development",
    short: "Modern web apps, portals and SaaS products on Next.js and Node.js.",
    icon: "code",
    accent: "from-brand to-aqua",
    overview:
      "We build high-performance websites, customer portals and multi-tenant SaaS platforms with clean architecture, strong SEO and room to grow.",
    features: [
      { title: "SaaS platforms", text: "Multi-tenant architecture, billing, roles and admin dashboards." },
      { title: "Enterprise portals", text: "Customer, partner and employee portals with SSO." },
      { title: "Headless CMS websites", text: "Fast, SEO-friendly corporate sites your team can update." },
      { title: "API development", text: "REST and GraphQL APIs, integrations and microservices." },
      { title: "Progressive web apps", text: "App-like experiences that work offline." },
      { title: "Performance and SEO", text: "Core Web Vitals, accessibility and technical SEO." },
    ],
    benefits: ["Fast page loads", "Scalable architecture", "Easy content updates", "Better search ranking"],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    short: "Data lakes, pipelines and dashboards that turn data into decisions.",
    icon: "database",
    accent: "from-iris to-brand",
    overview:
      "We unify your data into a modern cloud data platform, build reliable pipelines and give leaders real-time dashboards, which also lays the foundation for AI.",
    features: [
      { title: "Data lake and warehouse", text: "Modern lakehouse on S3, Snowflake, BigQuery or Databricks." },
      { title: "ETL and streaming pipelines", text: "Batch and real-time pipelines with quality checks." },
      { title: "BI dashboards", text: "Self-service analytics in Power BI, QuickSight or Looker." },
      { title: "Data governance", text: "Catalogue, lineage, access control and compliance." },
      { title: "AI-ready data", text: "Feature stores and vector stores for ML and GenAI." },
      { title: "Legacy data migration", text: "Move from on-premise databases with zero data loss." },
    ],
    benefits: ["One source of truth", "Real-time insight", "Trusted data quality", "Foundation for AI"],
    tech: ["Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery", "Kafka", "Power BI"],
  },
  {
    slug: "managed-cloud-support",
    title: "Managed Cloud & Support",
    short: "24x7 monitoring, security, cost control and application support.",
    icon: "shield",
    accent: "from-aqua to-volt",
    overview:
      "We run and protect your cloud and applications after launch, with proactive monitoring, patching, backups, cost reviews and clear SLAs.",
    features: [
      { title: "24x7 monitoring", text: "Proactive alerts and incident response against agreed SLAs." },
      { title: "Security operations", text: "Patching, vulnerability management and compliance checks." },
      { title: "Backup and disaster recovery", text: "Tested recovery plans that protect your business." },
      { title: "FinOps and cost reviews", text: "Monthly reports and savings recommendations." },
      { title: "Application maintenance", text: "Bug fixes, upgrades and small enhancements." },
      { title: "Performance tuning", text: "Keep apps fast as users and data grow." },
    ],
    benefits: ["Predictable monthly cost", "Peace of mind", "Lower cloud bills", "Focus on your business"],
    tech: ["AWS CloudWatch", "Datadog", "PagerDuty", "AWS Security Hub", "Azure Monitor"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
