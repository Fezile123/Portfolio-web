export const PROFILE = {
  name: "Fezile Mnisi",
  role: "Software Developer",
  taglineWords: ["Software Developer", "Data Analyst", "Backend Developer"],
  summary:
    "I build reliable, well-tested software and enjoy pairing traditional engineering discipline with modern AI-assisted workflows. Computer Science & Statistics graduate, currently sharpening my craft through the CAPACITI YES Programme — focused on writing clean backend systems and shipping products people actually enjoy using.",
  email: "fezilemnisi92@gmail.com",
  location: "Johannesburg, South Africa",
  github: "https://github.com/Fezile123",
  linkedin: "https://www.linkedin.com/in/fezileamnisi/",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Computer Science & Statistics",
    description:
      "Graduated with a strong foundation in algorithms, data structures, and statistical reasoning — the backbone of every system I design.",
  },
  {
    title: "CAPACITI YES Programme",
    description:
      "Currently sharpening production-grade software development skills through an intensive, industry-aligned training programme.",
  },
  {
    title: "AI-Assisted Development",
    description:
      "I use LLMs and prompt engineering as force multipliers — to prototype faster, review code critically, and ship with confidence.",
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy breaking down ambiguous problems into small, testable pieces and building up from there.",
  },
  {
    title: "Continuous Learning",
    description:
      "New frameworks, new papers, new tools — I stay curious and treat every project as a chance to learn something that sticks.",
  },
  {
    title: "Career Goals",
    description:
      "Working toward a career where solid backend engineering meets applied AI — building systems that are both intelligent and dependable.",
  },
];

export const SKILLS = {
  Programming: [
    { name: "Python", level: 88 },
    { name: "Java", level: 78 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 82 },
  ],
  Frontend: [
    { name: "React", level: 84 },
    { name: "HTML", level: 92 },
    { name: "CSS", level: 88 },
    { name: "Tailwind CSS", level: 86 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 78 },
    { name: "Flask", level: 75 },
    { name: "PostgreSQL", level: 77 },
  ],
  Tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "VS Code", level: 95 },
  ],
  AI: [
    { name: "Prompt Engineering", level: 88 },
    { name: "Generative AI", level: 82 },
    { name: "LLMs", level: 80 },
    { name: "Power BI", level: 74 },
  ],
  "Soft Skills": [
    { name: "Communication", level: 90 },
    { name: "Leadership", level: 80 },
    { name: "Teamwork", level: 92 },
    { name: "Critical Thinking", level: 88 },
    { name: "Problem Solving", level: 90 },
  ],
};

export const EXPERIENCE = [
  {
    id: "capaciti",
    role: "Software Development Trainee",
    org: "CAPACITI YES Programme",
    period: "2024 — Present",
    location: "Johannesburg, South Africa",
    summary:
      "Intensive, industry-aligned software development training focused on full-stack engineering, cloud fundamentals, and professional workplace readiness.",
    points: [
      "Built and shipped full-stack projects using React, Node.js, and PostgreSQL under real deadlines.",
      "Collaborated in agile squads using sprint planning, stand-ups, and peer code review.",
      "Practiced AI-assisted development workflows to speed up prototyping without sacrificing code quality.",
      "Completed technical assessments covering data structures, algorithms, and system design fundamentals.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Agile", "AI Tools"],
  },
  {
    id: "barc",
    role: "IT Support & Junior Developer Intern",
    org: "BARC SA",
    period: "2023 — 2024",
    location: "South Africa",
    summary:
      "Supported internal systems and contributed to small automation scripts and internal tooling while learning enterprise development practices.",
    points: [
      "Diagnosed and resolved technical support tickets across hardware, software, and network issues.",
      "Wrote Python scripts to automate repetitive data-entry and reporting tasks, saving hours of manual work weekly.",
      "Assisted in maintaining internal documentation and knowledge-base articles for the IT team.",
      "Gained first-hand exposure to enterprise-grade version control and change-management processes.",
    ],
    tags: ["Python", "SQL", "Automation", "Git", "IT Support"],
  },
  {
    id: "ul",
    role: "Computer Science & Statistics Student",
    org: "University of Limpopo",
    period: "2020 — 2023",
    location: "Limpopo, South Africa",
    summary:
      "Bachelor's degree combining Computer Science and Statistics — algorithms, databases, statistical modelling, and software engineering fundamentals.",
    points: [
      "Built academic projects spanning data structures, relational databases, and statistical analysis.",
      "Developed a strong grounding in probability and statistical inference alongside core CS coursework.",
      "Participated in group software projects, learning to plan, divide, and integrate work across a team.",
    ],
    tags: ["Algorithms", "Statistics", "Databases", "Java", "Python"],
  },
];

export const PROJECT_CATEGORIES = ["All", "Full Stack", "AI", "Backend", "Data"];

export const PROJECTS = [
  {
    id: "proj-1",
    title: "InsightBoard — AI Analytics Dashboard",
    category: "AI",
    description:
      "A real-time analytics dashboard that uses an LLM to translate plain-English questions into SQL queries and auto-generated charts.",
    features: [
      "Natural-language to SQL query engine",
      "Live-updating charts with WebSocket data",
      "Role-based access control",
      "Exportable PDF reports",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI API", "Tailwind CSS"],
    image: "insightboard",
    github: "https://github.com/fezilemnisi/insightboard",
    demo: "https://insightboard.example.com",
    featured: true,
  },
  {
    id: "proj-2",
    title: "TaskFlow — Team Productivity Suite",
    category: "Full Stack",
    description:
      "A Kanban-based project management tool with real-time collaboration, built to help small teams plan sprints without the bloat.",
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time multi-user sync",
      "Sprint velocity analytics",
      "Slack notification integration",
    ],
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    image: "taskflow",
    github: "https://github.com/fezilemnisi/taskflow",
    demo: "https://taskflow.example.com",
    featured: true,
  },
  {
    id: "proj-3",
    title: "ShopAPI — Headless Commerce Backend",
    category: "Backend",
    description:
      "A headless e-commerce API handling catalog, cart, and order flows, designed for high-throughput read paths and safe checkout writes.",
    features: [
      "JWT authentication & refresh tokens",
      "Idempotent checkout endpoint",
      "Redis-backed cart sessions",
      "Automated integration test suite",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    image: "shopapi",
    github: "https://github.com/fezilemnisi/shopapi",
    demo: "https://shopapi.example.com",
    featured: false,
  },
  {
    id: "proj-4",
    title: "ChurnLens — Customer Churn Predictor",
    category: "Data",
    description:
      "A statistical model and interactive report that flags customers likely to churn, built on top of a synthetic subscription dataset.",
    features: [
      "Logistic regression churn model",
      "Feature importance visualisation",
      "Power BI executive summary report",
      "CSV batch scoring endpoint",
    ],
    tech: ["Python", "Flask", "Power BI", "SQL"],
    image: "churnlens",
    github: "https://github.com/fezilemnisi/churnlens",
    demo: "https://churnlens.example.com",
    featured: false,
  },
  {
    id: "proj-5",
    title: "PromptForge — Prompt Engineering Playground",
    category: "AI",
    description:
      "A lightweight playground for testing, versioning, and comparing prompt variations against multiple LLM configurations side by side.",
    features: [
      "Side-by-side prompt comparison",
      "Prompt version history",
      "Token & cost estimator",
      "Shareable prompt links",
    ],
    tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    image: "promptforge",
    github: "https://github.com/fezilemnisi/promptforge",
    demo: "https://promptforge.example.com",
    featured: true,
  },
  {
    id: "proj-6",
    title: "GradeTrack — Student Performance Tracker",
    category: "Full Stack",
    description:
      "A grade-tracking application for tutors to log assessments and visualise a student's progress across a term at a glance.",
    features: [
      "Per-student progress timeline",
      "CSV import for bulk grades",
      "Automatic performance alerts",
      "Printable term reports",
    ],
    tech: ["React", "Flask", "SQLite"],
    image: "gradetrack",
    github: "https://github.com/fezilemnisi/gradetrack",
    demo: "https://gradetrack.example.com",
    featured: false,
  },
];

export const CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    credentialId: "COURSERA-FE-2024-0192",
  },
  {
    id: "cert-2",
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "MS-AZ900-2024-7731",
  },
  {
    id: "cert-3",
    title: "Software Development Foundations",
    issuer: "FNB App Academy",
    date: "2023",
    credentialId: "FNB-SDF-2023-0456",
  },
  {
    id: "cert-4",
    title: "Digital Skills for the 4th Industrial Revolution",
    issuer: "NEMISA",
    date: "2023",
    credentialId: "NEMISA-4IR-2023-3391",
  },
];

export const EDUCATION = [
  {
    id: "edu-1",
    school: "University of Limpopo",
    degree: "Bachelor's Degree — Computer Science & Statistics",
    period: "2020 — 2023",
    description:
      "Coursework spanning algorithms, data structures, database systems, and statistical modelling, with a final-year project in applied data analysis.",
  },
  {
    id: "edu-2",
    school: "National Senior Certificate (Matric)",
    degree: "Mathematics, Physical Sciences, Information Technology",
    period: "2019",
    description:
      "Completed the National Senior Certificate with distinctions in Mathematics and Information Technology.",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Thandiwe Nkosi",
    role: "Programme Lead, CAPACITI YES",
    quote:
      "Fezile consistently delivers clean, well-documented code and asks the right questions before writing a single line. A dependable engineer to have on any team.",
  },
  {
    id: "t2",
    name: "Sipho Radebe",
    role: "Senior Developer, BARC SA",
    quote:
      "What stood out was the initiative — automating manual reports without being asked, then explaining the trade-offs clearly to non-technical stakeholders.",
  },
  {
    id: "t3",
    name: "Amahle Dube",
    role: "Peer Reviewer, CAPACITI YES",
    quote:
      "Reviews code like a senior engineer already — thorough, kind, and always focused on maintainability over cleverness.",
  },
];

export const GITHUB_STATS = {
  username: "fezilemnisi",
  repos: 34,
  followers: 128,
  following: 76,
  contributions: 842,
  topLanguages: [
    { name: "Python", percent: 34, color: "#3B82F6" },
    { name: "JavaScript", percent: 28, color: "#06B6D4" },
    { name: "TypeScript", percent: 16, color: "#22C55E" },
    { name: "SQL", percent: 12, color: "#94A3B8" },
    { name: "HTML/CSS", percent: 10, color: "#2563EB" },
  ],
};
