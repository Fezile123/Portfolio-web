import resumeiqImage from "../assets/images/resumeiq.png";
import deskflowImage from "../assets/images/deskflow.png";
import healthChatbotImage from "../assets/images/health-chatbot.png";
import sentimentAnalysisImage from "../assets/images/sentiment-analysis.png";

/* =====================================================
   PROFILE
===================================================== */

export const PROFILE = {
  name: "Fezile Mnisi",

  role: "Software Developer & Data Analyst",

  taglineWords: [
    "Software Developer",
    "Data Analyst",
    "Mathematical Sciences Graduate",
  ],

  summary:
    "Mathematical Sciences graduate and software developer building full-stack web applications and data-driven systems. I combine a Computer Science and Statistics background with hands-on experience in React, Node.js, Python, SQL and PostgreSQL to turn data into insight and ideas into working software. Currently growing through the CAPACITI YES Programme while building AI-powered and analytics projects.",

  email: "fezilemnisi92@gmail.com",

  location: "Johannesburg, South Africa",

  github: "https://github.com/Fezile123",

  linkedin: "https://linkedin.com/in/fezileamnisi",

  resumeUrl: "/Fezile-Mnisi_Resume.pdf",
};


/* =====================================================
   NAVIGATION
===================================================== */

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


/* =====================================================
   ABOUT
===================================================== */

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Software Development",

    description:
      "Build full-stack web applications using React, Node.js, Express, Flask, PostgreSQL and REST APIs.",
  },

  {
    title: "Data Analytics",

    description:
      "Clean, analyse and visualise data using Python, Pandas, SQL, Scikit-learn and Matplotlib, supported by a Statistics major.",
  },

  {
    title: "Artificial Intelligence",

    description:
      "Develop AI-powered applications using AI APIs, prompt engineering and machine learning techniques.",
  },

  {
    title: "Problem Solving",

    description:
      "Apply analytical thinking to real-world challenges, building reliable, maintainable and user-focused solutions.",
  },

  {
    title: "Continuous Learning",

    description:
      "Committed to growing through hands-on projects and certifications in software development, AI and data analytics.",
  },

  {
    title: "Career Goal",

    description:
      "To grow as a software developer and data professional, building data-driven systems that create meaningful impact.",
  },
];


/* =====================================================
   SKILLS
===================================================== */

export const SKILLS = {
  Programming: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Java", level: 88 },
    { name: "SQL", level: 82 },
  ],

  Frontend: [
    { name: "React", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
  ],

  "Backend & Databases": [
    { name: "Node.js", level: 86 },
    { name: "Express.js", level: 84 },
    { name: "Flask", level: 82 },
    { name: "REST APIs", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "Prisma", level: 75 },
  ],

  "Data & Analytics": [
    { name: "Pandas", level: 80 },
    { name: "Scikit-learn", level: 75 },
    { name: "Matplotlib", level: 78 },
    { name: "Data Cleaning", level: 82 },
    { name: "Data Quality Control", level: 85 },
    { name: "Dashboards", level: 78 },
    { name: "Statistics", level: 82 },
  ],

  "AI & Machine Learning": [
    { name: "AI APIs", level: 86 },
    { name: "Prompt Engineering", level: 90 },
    { name: "Generative AI", level: 84 },
    { name: "Machine Learning", level: 78 },
    { name: "LLMs", level: 80 },
  ],

  "Tools & Practices": [
    { name: "Git", level: 92 },
    { name: "GitHub", level: 92 },
    { name: "VS Code", level: 95 },
    { name: "Docker", level: 72 },
    { name: "Agile", level: 85 },
    { name: "Testing & Debugging", level: 82 },
    { name: "Technical Documentation", level: 85 },
  ],

  "IT Support": [
    { name: "Hardware & Equipment Setup", level: 85 },
    { name: "Troubleshooting", level: 88 },
    { name: "Fault Reporting", level: 85 },
  ],

  "Soft Skills": [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Critical Thinking", level: 90 },
    { name: "Teamwork", level: 92 },
    { name: "Adaptability", level: 90 },
  ],
};


/* =====================================================
   EXPERIENCE
===================================================== */

export const EXPERIENCE = [
  {
    id: "capaciti",

    role: "End-to-End Technology Intern",

    org: "CAPACITI YES Programme",

    period: "2026 – Present",

    location: "Johannesburg, South Africa",

    summary:
      "Participating in an intensive software development programme focused on building production-ready applications using modern technologies and Agile methodologies.",

    points: [
      "Develop full-stack web applications using React, Node.js, Express and PostgreSQL.",
      "Build AI-powered software solutions using AI APIs and prompt engineering.",
      "Collaborate within Agile teams using Git and GitHub version control.",
      "Apply software engineering best practices including clean code, testing and documentation.",
    ],

    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Git",
      "AI",
    ],
  },

  {
    id: "university",

    role: "BSc Mathematical Science Graduate",

    org: "University of Limpopo",

    period: "2020 – 2024",

    location: "Limpopo, South Africa",

    summary:
      "Completed a Bachelor of Science in Mathematical Sciences with majors in Computer Science and Statistics, developing strong analytical and software development skills.",

    points: [
      "Built academic software development projects using Java and Python.",
      "Studied algorithms, databases, operating systems and computer networks.",
      "Applied statistical analysis and mathematical modelling techniques.",
      "Collaborated on software engineering and programming projects.",
    ],

    tags: [
      "Java",
      "Statistics",
      "Computer Science",
      "Algorithms",
    ],
  },
];


/* =====================================================
   PROJECT CATEGORIES
===================================================== */

export const PROJECT_CATEGORIES = [
  "All",
  "AI",
  "Full Stack",
  "Data",
];


/* =====================================================
   PROJECTS
===================================================== */

export const PROJECTS = [
  {
    id: "resumeiq",

    title: "ResumeIQ — AI Resume Assistant",

    category: "AI",

    image: resumeiqImage,

    description:
      "An AI-powered resume analysis platform that reviews CVs, evaluates ATS compatibility, provides actionable feedback, and helps job seekers improve their resumes.",

    features: [
      "AI-powered resume analysis",
      "ATS compatibility assessment",
      "Resume improvement recommendations",
      "Modern responsive interface",
    ],

    tech: [
      "React",
      "AI",
      "Lovable",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/Fezile123/ai-resume-assistanttool",

    demo:
      "https://resumeiq-ai-tool.lovable.app/",

    featured: true,
  },


  {
    id: "deskflow",

    title: "DeskFlow",

    category: "Full Stack",

    image: deskflowImage,

    description:
      "A modern Internal IT Service Request Portal that enables employees to submit support tickets while administrators manage requests through a centralized dashboard with analytics and intelligent ticket classification.",

    features: [
      "IT service request management",
      "AI-powered ticket classification",
      "Analytics dashboard",
      "Role-based authentication",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/Fezile123/Internal-IT-Service-Request-Portal-DeskFlow-",

    demo:
      "https://deskflow-frontend-app.onrender.com/",

    featured: true,
  },


  {
    id: "health-chatbot",

    title: "Health Chatbot",

    category: "AI",

    image: healthChatbotImage,

    description:
      "An AI-powered healthcare chatbot that provides responses to common health-related questions through a simple conversational interface.",

    features: [
      "Conversational AI",
      "Health information assistant",
      "Natural language interaction",
      "Responsive user interface",
    ],

    tech: [
      "React",
      "Python",
      "Flask",
      "AI",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/orgs/Health-ChatBot-Project/dashboard",

    demo:
      "https://healthchatbotai.netlify.app/",

    featured: true,
  },


  {
    id: "sentiment-analysis",

    title: "Sentiment Analysis Dashboard",

    category: "Data",

    image: sentimentAnalysisImage,

    description:
      "A machine learning web application that analyzes text sentiment, classifies feedback as positive, negative, or neutral, and visualizes results through an interactive dashboard.",

    features: [
      "Sentiment prediction",
      "Positive, negative, and neutral classification",
      "Interactive data visualization",
      "Machine learning model",
    ],

    tech: [
      "Python",
      "Flask",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "HTML/CSS",
    ],

    github:
      "https://github.com/Fezile123/sentiment-analysis-dashboard",

    demo:
      "https://sentiment-analysis-dashboard-app.onrender.com/",

    featured: true,
  },
];


/* =====================================================
   CERTIFICATIONS
===================================================== */

export const CERTIFICATIONS = [
  {
    id: "cert-1",

    title: "Introduction to Generative AI",

    issuer: "Google Cloud Skills Boost",

    date: "2025",

    credentialId: "",
  },

  {
    id: "cert-2",

    title: "Prompt Design in Vertex AI",

    issuer: "Google Cloud Skills Boost",

    date: "2025",

    credentialId: "",
  },

  {
    id: "cert-3",

    title: "Introduction to Large Language Models",

    issuer: "Google Cloud Skills Boost",

    date: "2025",

    credentialId: "",
  },

  {
    id: "cert-4",

    title: "Introduction to Responsible AI",

    issuer: "Google Cloud Skills Boost",

    date: "2025",

    credentialId: "",
  },

  {
    id: "cert-5",

    title: "Introduction to Image Generation",

    issuer: "Google Cloud Skills Boost",

    date: "2025",

    credentialId: "",
  },
];


/* =====================================================
   EDUCATION
===================================================== */

export const EDUCATION = [
  {
    id: "edu-1",

    school: "University of Limpopo",

    degree: "Bachelor of Science in Mathematical Sciences",

    period: "2020 – 2024",

    description:
      "Majored in Computer Science and Statistics with coursework in software development, algorithms, database systems, operating systems, computer networks, mathematics and statistical analysis.",
  },
];