import type { IconName } from "@/components/icons";

/* ---------- Technologies ---------- */
export const techCategories: { name: string; icon: IconName; items: string[] }[] = [
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Serverless"],
  },
  {
    name: "AI & GenAI",
    icon: "brain",
    items: ["OpenAI", "Anthropic Claude", "Amazon Bedrock", "Google Gemini", "LangGraph", "LangChain", "PyTorch", "Hugging Face"],
  },
  {
    name: "Mobile",
    icon: "smartphone",
    items: ["Flutter", "React Native", "Swift / SwiftUI", "Kotlin / Compose", "Firebase", "Expo"],
  },
  {
    name: "Web & Backend",
    icon: "code",
    items: ["Next.js", "React", "TypeScript", "Node.js", "Python / FastAPI", "NestJS", "GraphQL", "Tailwind CSS"],
  },
  {
    name: "Data",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "pgvector", "Snowflake", "Apache Spark", "Kafka"],
  },
];

export const allTech = techCategories.flatMap((c) => c.items);

/* ---------- Why choose us ---------- */
export const whyUs: { icon: IconName; title: string; text: string }[] = [
  { icon: "sparkles", title: "AI-first mindset", text: "We look for where AI can save time or create value in every project." },
  { icon: "rocket", title: "Latest technology", text: "Modern, proven stacks chosen for performance, security and long life." },
  { icon: "shield", title: "Security by design", text: "Encryption, least-privilege access and secure coding from day one." },
  { icon: "gauge", title: "Agile delivery", text: "Two-week sprints, working demos and full transparency on progress." },
  { icon: "handshake", title: "True partnership", text: "One accountable team from idea to launch and beyond." },
  { icon: "wallet", title: "Transparent pricing", text: "Clear estimates and flexible engagement models, no surprises." },
];

/* ---------- Process ---------- */
export const processSteps = [
  { title: "Discover", text: "Workshops to understand your goals, users and constraints, ending in a clear scope and estimate." },
  { title: "Design", text: "Architecture, UX flows and interactive prototypes you can click through before we build." },
  { title: "Build", text: "Agile sprints with demos every two weeks, automated tests and continuous delivery." },
  { title: "Launch", text: "Security testing, performance tuning and a smooth go-live with zero downtime." },
  { title: "Scale & support", text: "Monitoring, improvements and new features as your business grows." },
];

/* ---------- Industries ---------- */
export const industries: { icon: IconName; name: string; text: string; useCases: string[] }[] = [
  { icon: "landmark", name: "Banking & FinTech", text: "Secure, compliant platforms for payments, lending and wealth.", useCases: ["Fraud detection", "KYC automation", "Mobile banking"] },
  { icon: "health", name: "Healthcare", text: "Patient apps and AI that improve care and reduce admin.", useCases: ["Telemedicine apps", "Medical document AI", "Patient portals"] },
  { icon: "cart", name: "Retail & E-commerce", text: "Personalised shopping across web and mobile.", useCases: ["Recommendation engines", "Headless commerce", "Inventory forecasting"] },
  { icon: "graduation", name: "Education & EdTech", text: "Learning platforms that adapt to every student.", useCases: ["AI tutors", "Learning apps", "Assessment platforms"] },
  { icon: "truck", name: "Logistics", text: "Real-time visibility and smarter routing.", useCases: ["Fleet tracking apps", "Route optimisation", "Warehouse analytics"] },
  { icon: "factory", name: "Manufacturing", text: "Connected operations and predictive maintenance.", useCases: ["IoT dashboards", "Visual inspection AI", "Predictive maintenance"] },
  { icon: "building", name: "Real Estate & Infrastructure", text: "Digital experiences for assets, tenants and investors.", useCases: ["Property portals", "Asset monitoring", "Investor dashboards"] },
  { icon: "film", name: "Media & Entertainment", text: "Streaming, content and engagement at scale.", useCases: ["OTT apps", "Content tagging AI", "Audience analytics"] },
];

/* ---------- Testimonials (TODO: replace with real client quotes, with permission) ---------- */
export const testimonials = [
  {
    quote: "Flixon moved our platform to AWS in six weeks with no downtime, and our monthly cloud bill dropped noticeably.",
    name: "Client name", // TODO
    role: "CTO, Company name", // TODO
  },
  {
    quote: "Their AI assistant now answers most of our customer queries from our own documents. The team was quick, clear and reliable.",
    name: "Client name", // TODO
    role: "Head of Operations, Company name", // TODO
  },
  {
    quote: "They delivered our Flutter app for iOS and Android on time. The design and performance exceeded our expectations.",
    name: "Client name", // TODO
    role: "Founder, Company name", // TODO
  },
];

/* ---------- FAQ ---------- */
export const faqs = [
  { q: "What services does Flixon IT Solutions offer?", a: "We specialise in cloud consulting and migration, DevOps, AI and generative AI, mobile app development, web and SaaS development, data engineering and managed cloud support." },
  { q: "How much does a project cost?", a: "It depends on scope and complexity. After a short discovery call we share a clear estimate, with fixed-price, dedicated-team and time-and-material options." },
  { q: "How long does it take to build an app?", a: "A focused MVP usually takes 8 to 12 weeks. Larger platforms are delivered in phases so you see working software every two weeks." },
  { q: "Do you sign an NDA?", a: "Yes. We are happy to sign an NDA before you share any confidential details, and your code and IP belong to you." },
  { q: "Do you provide support after launch?", a: "Yes. Our managed services cover monitoring, security updates, bug fixes and new features under a monthly plan." },
  { q: "Can you work with our existing team?", a: "Absolutely. We can extend your team with cloud, AI or mobile specialists who follow your processes and tools." },
];

/* ---------- Engagement models ---------- */
export const engagementModels: { icon: IconName; title: string; text: string; bestFor: string }[] = [
  { icon: "target", title: "Fixed price", text: "Agreed scope, timeline and cost. Ideal when requirements are clear.", bestFor: "MVPs and well-defined projects" },
  { icon: "users", title: "Dedicated team", text: "A full-time team of engineers who work as an extension of yours.", bestFor: "Long-term products and scale-ups" },
  { icon: "clock", title: "Time & material", text: "Pay for the effort used, with full flexibility to change priorities.", bestFor: "Evolving scope and R&D" },
];

/* ---------- About: values ---------- */
export const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "lightbulb", title: "Innovation", text: "We stay ahead of technology so our clients do too." },
  { icon: "award", title: "Quality", text: "Clean code, tested thoroughly and built to last." },
  { icon: "eye", title: "Transparency", text: "Honest estimates, open communication, no hidden costs." },
  { icon: "heart", title: "Customer success", text: "We measure ourselves by our clients' outcomes." },
];

/* ---------- About: founder ---------- */
export const founder = {
  name: "Vikas Mittal",
  role: "Founder & CEO",
  photo: { src: "/team/vikas-mittal.jpg", width: 800, height: 1000 }, // file lives in /public/team
  linkedin: "", // TODO (optional): Vikas's LinkedIn profile URL
  summary:
    "A technology leader with 25+ years of experience turning complex business challenges into scalable, intelligent solutions.",
  bio: [
    "Vikas has built AI-native platforms, agentic workflows and enterprise data ecosystems that drive measurable business outcomes across media, retail, finance and infrastructure.",
    "His career spans senior leadership roles at Publicis Groupe, Fujitsu and global enterprise environments, where he led teams of 80+, managed P&L and delivered large-scale digital transformation across 15+ countries.",
    "He specialises in architecting cloud-native systems on Azure, integrating LLMs and generative AI into production workflows, and turning fragmented data into real-time business intelligence with Power BI, Tableau and Azure Synapse.",
  ],
  quote:
    "What sets me apart is the ability to bridge the gap between boardroom strategy and engineering execution, translating CXO-level business goals into technology roadmaps with clear ROI and measurable impact.",
  highlights: [
    { value: 25, suffix: "+", label: "Years in technology leadership" },
    { value: 80, suffix: "+", label: "People in teams he has led" },
    { value: 15, suffix: "+", label: "Countries of delivery" },
  ],
  previously: ["Publicis Groupe", "Fujitsu"],
  sectors: ["Media", "Retail", "Finance", "Infrastructure"],
  expertise: ["Azure cloud-native", "LLMs & generative AI", "Agentic workflows", "AI-native platforms", "Power BI", "Tableau", "Azure Synapse"],
};

/* ---------- About: leadership team (TODO: replace with real people, or set to [] to hide) ---------- */
export const team: { name: string; role: string; initials: string }[] = [
  { name: "Co-founder name", role: "Co-founder & CTO", initials: "CN" }, // TODO
  { name: "Leader name", role: "Head of AI", initials: "LN" }, // TODO
  { name: "Leader name", role: "Head of Mobile", initials: "LN" }, // TODO
];

/* ---------- Careers ---------- */
export const perks: { icon: IconName; title: string; text: string }[] = [
  { icon: "rocket", title: "Cutting-edge work", text: "Build with cloud, AI and mobile technologies used by the best." },
  { icon: "graduation", title: "Learning budget", text: "Certifications, courses and conferences paid for." },
  { icon: "clock", title: "Flexible hours", text: "Hybrid working and flexible schedules." },
  { icon: "heart", title: "Health cover", text: "Medical insurance for you and your family." },
  { icon: "trending", title: "Fast growth", text: "Clear career paths and regular reviews." },
  { icon: "users", title: "Great team", text: "Friendly, curious people who help each other." },
];

// TODO: replace with your current openings (set the array to [] if none)
export const openings = [
  { title: "Senior Cloud Engineer (AWS)", type: "Full-time", location: "Pune / Hybrid", experience: "4 to 7 years" },
  { title: "AI / ML Engineer (GenAI)", type: "Full-time", location: "Pune / Hybrid", experience: "2 to 5 years" },
  { title: "Flutter Developer", type: "Full-time", location: "Pune / Hybrid", experience: "2 to 4 years" },
  { title: "Full Stack Developer (Next.js, Node.js)", type: "Full-time", location: "Remote", experience: "3 to 6 years" },
];
