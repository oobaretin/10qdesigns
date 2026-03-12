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
  /** When set, card links to this page instead of opening dialog */
  featuredPage?: string;
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
    featuredPage: "/work/smallprint-ai",
  },
  {
    id: "real-taste-of-africa",
    title: "Real Taste of Africa",
    category: "client",
    techTags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Outscraper", "Apify"],
    liveLink: "https://realtasteofafrica.com",
    description: "Statewide directory for African restaurants in Texas—175+ verified listings.",
    caseStudy: {
      role: "Lead Developer & Data Architect",
      challenge:
        "The goal was to centralize a fragmented market by creating a statewide digital directory for African restaurants in Texas. The project required handling high volumes of business data while maintaining a high-performance search experience for users looking for local spots.",
      solution: [
        "Managed a database of 175+ active listings, utilizing automated scraping and cleaning tools to ensure all business information was verified and up-to-date.",
        "Built with Next.js to leverage Server-Side Rendering (SSR), ensuring that the directory is highly SEO-friendly and loads instantly.",
        "Developed a custom administrative dashboard to manage site content, verify domains, and monitor listing status in real-time.",
        "Tech stack: Next.js, Tailwind CSS, Prisma, and PostgreSQL, with data automation via Outscraper and Apify.",
      ],
      result:
        "A live, scalable platform (realtasteofafrica.com) that serves as the primary resource for the African culinary scene in Texas. The project demonstrates my ability to manage large datasets and transform them into a clean, searchable user experience.",
    },
    featuredPage: "/work/real-taste-of-africa",
  },
  {
    id: "makola-marketplace",
    title: "Makola Marketplace",
    category: "client",
    techTags: ["Next.js", "React", "Local SEO"],
    liveLink: "https://makolamarketplace.com",
    description: "Grocery utility for Houston—shopping lists & kitchen specials.",
    caseStudy: {
      role: "Full-Stack Developer & UX Designer",
      challenge:
        "Grocery shopping for specific ethnic markets often lacks a digital bridge between store inventory and the customer's kitchen. The goal was to build a utility that helps users organize their shopping experience while keeping them updated on specific kitchen specials in the Houston area.",
      solution: [
        "Implemented a persistent list feature so users can build and save their grocery needs over time without losing data.",
        "Optimized the platform for Houston-based searches to ensure the store's kitchen specials reach the intended neighborhood audience.",
        "Built a lightweight, mobile-responsive interface for quick access while walking through store aisles.",
        "Tech stack: Next.js and React for a fast, reactive frontend, with a focus on clean typography and high-contrast accessibility.",
      ],
      result:
        "A functional tool that bridges the gap between traditional brick-and-mortar shopping and digital convenience. The project highlights my ability to build user-centric utilities tailored to specific geographic markets.",
    },
    featuredPage: "/work/makola-marketplace",
  },
  {
    id: "nikis-hair-braiding",
    title: "Niki's African Hair Braiding",
    category: "client",
    techTags: ["Next.js", "Tailwind CSS", "Cursor", "Vercel"],
    liveLink: "https://nikis-african-hair-braiding.vercel.app",
    description: "Professional business website showcasing hair braiding services.",
    caseStudy: {
      role: "Lead Developer & UI/UX Designer",
      challenge:
        "A professional service provider needed a sleek, modern digital presence to showcase their work and facilitate client inquiries. The goal was to move away from generic templates and build a custom, high-performance site that reflects the quality of the braiding services.",
      solution: [
        "Built entirely using Cursor, leveraging AI-assisted coding to ensure clean structure and rapid delivery.",
        "Designed a high-impact gallery and service layout to highlight the intricate detail of the hair braiding work.",
        "Deployed via Vercel for lightning-fast load times and global availability.",
        "Tech stack: Next.js, Tailwind CSS, and Cursor for streamlined development.",
      ],
      result:
        "A live, professional business platform (nikis-african-hair-braiding.vercel.app) that provides a seamless user experience. This project highlights my efficiency in taking a business from concept to a live, high-quality production environment in record time.",
    },
    featuredPage: "/work/nikis-hair-braiding",
  },
  {
    id: "afri-table",
    title: "Afri-Table",
    category: "client",
    techTags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    liveLink: "https://afri-table.com",
    description: "Premium culinary platform—visual-first, high-performance.",
    caseStudy: {
      role: "Lead Full-Stack Developer & UI Architect",
      challenge:
        "The culinary industry requires more than just a menu; it needs a digital environment that conveys the premium nature of the brand while providing functional utility. The challenge was to create a sleek, high-performance platform for Afri-Table that balances aesthetic elegance with rapid accessibility.",
      solution: [
        "Built a custom frontend that adapts seamlessly across devices, ensuring the high-resolution imagery and elegant typography remain consistent.",
        "Developed using Cursor for rapid iteration and Vercel for high-availability hosting, ensuring zero-downtime and global performance.",
        "Leveraged Next.js to handle dynamic content efficiently, preparing the platform for future features like integrated booking or digital menu management.",
        "Tech stack: Next.js, Tailwind CSS, TypeScript, and Vercel.",
      ],
      result:
        "A polished, live digital presence (afri-table.com) that serves as a cornerstone for the brand. This project demonstrates my ability to build sophisticated, industry-specific web solutions that align technical performance with high-end brand standards.",
    },
    featuredPage: "/work/afri-table",
  },
  {
    id: "inventory-portal",
    title: "Inventory & Sales Management Portal",
    category: "client",
    techTags: ["Next.js", "Tailwind CSS", "TypeScript", "Railway"],
    liveLink: "https://vigilant-joy-production-4de6.up.railway.app/sell",
    description: "Real-time inventory tracking and sales management—dashboard-driven.",
    caseStudy: {
      role: "Full-Stack Developer & Backend Architect",
      challenge:
        "Managing inventory and processing sales in real-time requires a system that is both fast and reliable. The goal was to build a functional \"Sell\" interface that allows for quick item entry, inventory tracking, and sales management without the lag of traditional bloated retail software.",
      solution: [
        "Implemented a backend architecture designed for instant updates, ensuring that inventory levels and sales records are accurate across all sessions.",
        "Developed a clean, data-centric interface that allows users to list items and manage sales with minimal clicks, optimized for high-frequency business use.",
        "Hosted via Railway, demonstrating versatility in using different cloud infrastructure platforms (Railway/Vercel) depending on the project's specific backend needs.",
        "Tech stack: Next.js, Tailwind CSS, TypeScript, and Railway for deployment.",
      ],
      result:
        "A robust, live operational tool (vigilant-joy-production-4de6.up.railway.app/sell) that transforms complex inventory tasks into a simple, manageable workflow. This project highlights my ability to build the \"internal engines\" that power a business's daily operations.",
    },
    featuredPage: "/work/inventory-portal",
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
