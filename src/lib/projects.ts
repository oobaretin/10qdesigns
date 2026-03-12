export type ProjectCategory = "client" | "personal";

export interface CaseStudy {
  role: string;
  challenge: string;
  solution: string[];
  result: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  techTags: string[];
  liveLink: string;
  description?: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "smallprint-ai",
    title: "SmallPrint AI",
    category: "client",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Claude", "Vercel"],
    liveLink: "https://smallprint-ai.example.com",
    description: "AI-powered contract analysis—upload a PDF, get an instant summary.",
    caseStudy: {
      role: "Lead Full-Stack Developer & Prompt Engineer",
      challenge:
        "Legal documents and contracts are notoriously dense, making it difficult for non-lawyers to quickly identify risks or key clauses. The goal was to build a tool that could \"digest\" a PDF and provide an instant, high-accuracy summary without losing critical context.",
      solution: [
        "Engineered a specialized AI-wrapper using Anthropic's Claude model for its superior reasoning and long-context window.",
        "Implemented robust server-side logic for multi-page document parsing and PDF extraction.",
        "Developed custom system prompts to ensure the AI focuses on \"Red Flag\" detection and executive summaries.",
        "Built with Next.js and TypeScript for a type-safe frontend, styled with Tailwind CSS, and deployed via Vercel for instant global delivery.",
      ],
      result:
        "A streamlined SaaS application where users can upload a contract and receive a structured analysis in under 10 seconds. The project demonstrates a seamless integration of AI reasoning into a user-friendly web utility.",
    },
  },
  {
    id: "1",
    title: "Enterprise SaaS Platform",
    category: "client",
    techTags: ["Next.js", "PostgreSQL", "Redis", "Stripe"],
    liveLink: "https://example.com",
    description: "Scalable B2B platform with real-time analytics.",
  },
  {
    id: "2",
    title: "AI-Powered Workflow Automation",
    category: "client",
    techTags: ["Python", "OpenAI", "FastAPI", "React"],
    liveLink: "https://example.com",
    description: "LLM-integrated automation tool.",
  },
  {
    id: "3",
    title: "E-commerce Analytics Suite",
    category: "client",
    techTags: ["TypeScript", "Node.js", "BigQuery", "React"],
    liveLink: "https://example.com",
    description: "Custom analytics for mid-market retailers.",
  },
  {
    id: "4",
    title: "Prompt Engineering Playground",
    category: "personal",
    techTags: ["Next.js", "Vercel AI SDK", "Tailwind"],
    liveLink: "https://example.com",
    description: "Experimental interface for LLM prompts.",
  },
  {
    id: "5",
    title: "Agentic RAG Prototype",
    category: "personal",
    techTags: ["Python", "LangChain", "Pinecone", "Streamlit"],
    liveLink: "https://example.com",
    description: "Retrieval-augmented generation with agents.",
  },
  {
    id: "6",
    title: "Micro-Frontend Architecture Demo",
    category: "personal",
    techTags: ["Module Federation", "React", "TypeScript"],
    liveLink: "https://example.com",
    description: "Proof-of-concept for scalable frontend composition.",
  },
];

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: "client", label: "Client Work" },
  { value: "personal", label: "Personal Projects" },
];
