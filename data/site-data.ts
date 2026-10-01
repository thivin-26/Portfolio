export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "01", label: "Featured Product" },
  { value: "AI & DS", label: "Specialization" },
  { value: "Full-stack", label: "Product Building" },
  { value: "Always", label: "Learning" },
];

export type ProjectData = {
  id: number;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  accent: "cyan" | "purple";
  github: string;
  image: string;
  overview: string;
  problem: string;
  approach: string;
  stack: string[];
  architecture: string;
  features: string[];
  result: string;
  learned: string;
};

export const projects: ProjectData[] = [
  {
    id: 1,
    number: "PROJECT 01",
    title: "Doxora — Intelligent AI Document Studio",
    shortDescription:
      "Full-stack AI document platform for uploading files, generating summaries, answering questions, and creating structured outputs from content-rich documents.",
    description:
      "A production-style AI workspace for transforming PDFs, DOCX files, and text-heavy documents into searchable, conversational, and action-oriented knowledge.",
    tech: ["React", "Vite", "Python", "Flask", "OpenRouter", "Firebase", "AI"],
    accent: "cyan",
    github: "https://github.com/thivin-26/doxora",
    image: "/doxora-frontend.jpg",
    overview:
      "Doxora combines document ingestion, retrieval, summarization, and LLM-powered interaction in a polished full-stack AI product experience.",
    problem:
      "Users struggle to quickly extract and act on meaningful information hidden inside long documents, reports, contracts, and research material without friction.",
    approach:
      "I built an end-to-end document intelligence workflow using a React frontend, Python Flask backend, and OpenRouter-powered AI models to parse, analyze, and answer over uploaded content.",
    stack: ["React", "Vite", "Python", "Flask", "OpenRouter", "Firebase", "Document AI"],
    architecture:
      "Upload + parsing layer > content chunking > LLM reasoning > conversation + summary generation > export-ready outputs",
    features: [
      "Multi-format document upload",
      "Conversational Q&A over document content",
      "AI-powered summaries and key insights",
      "Structured extraction and report generation",
      "Responsive AI workspace experience",
    ],
    result: "A robust AI document application that demonstrates full-stack engineering, product design, and practical use of large language models for real workflows.",
    learned: "This project deepened my understanding of AI product architecture, document processing, prompt design, and building user-centric systems around meaningful workflows.",
  },
];

export const skillGroups = [
  {
    title: "AI & MACHINE LEARNING",
    skills: [
      { name: "Machine Learning", description: "Foundational knowledge of machine learning concepts and methods.", related: ["AI & Data Science"] },
      { name: "Deep Learning", description: "Foundational knowledge of deep learning concepts and neural networks.", related: ["AI & Data Science"] },
    ],
  },
  {
    title: "PROGRAMMING",
    skills: [
      { name: "Python", description: "Programming language used for general development and AI study.", related: ["Programming"] },
      { name: "Java", description: "Programming language for object-oriented development and problem solving.", related: ["Programming"] },
      { name: "C++", description: "Programming language for general-purpose development and problem solving.", related: ["Programming"] },
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    skills: [
      { name: "HTML", description: "Markup language for structuring web pages.", related: ["Web development"] },
    ],
  },
];

export const journey = [
  { period: "Present", title: "B.Tech Artificial Intelligence & Data Science", detail: "Building a strong foundation in AI, data systems, and applied problem solving." },
  { period: "Ongoing", title: "AI / ML Projects", detail: "Exploring model design, computer vision, NLP, and intelligent application development." },
  { period: "Learning", title: "Hackathons & Ideathons", detail: "Turning ideas into prototypes, prototypes into systems, and systems into experience." },
  { period: "Always", title: "Continuous Learning", detail: "Focused on curiosity, experimentation, and meaningful technology with real-world value." },
];

export const learningCards = [
  { title: "AI & Machine Learning", detail: "Building practical understanding of model development and applied AI." },
  { title: "Online Coursework", detail: "Extending academic learning through focused online study." },
  { title: "Technical Workshops", detail: "Learning from hands-on sessions and the wider developer community." },
  { title: "Hackathons", detail: "Practising rapid prototyping, collaboration, and product thinking." },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/thivin-26" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thivin-s-8184163a7" },
  { label: "Email", href: "mailto:thivinpriya26@gmail.com" },
];
