import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GlowCard from "../components/ui/GlowCard";
import { CalendarDays, MapPin } from "lucide-react";

import capacitiLogo from "../assets/images/capaciti.png";
import barcLogo from "../assets/images/barc.png";
import ulLogo from "../assets/images/ul.png";

const EXPERIENCE = [
  {
    id: 1,
    role: "End-to-End Technology Programme",
    company: "CAPACITI (YES Programme)",
    type: "Internship",
    logo: capacitiLogo,
    period: "Apr 2026 – Present",
    duration: "7 Months",
    location: "Johannesburg, Gauteng, South Africa",

    responsibilities: [
      "Develop full-stack web applications using React, Node.js, Express and PostgreSQL in an intensive, production-focused training programme.",
      "Build AI-powered software solutions using AI APIs and prompt engineering.",
      "Build REST APIs and work with databases, Git, Docker and cloud technologies through hands-on projects.",
      "Collaborate in Agile, multidisciplinary teams using Git and GitHub on real-world technology projects.",
      "Apply software engineering best practices including clean code, testing, debugging and technical documentation."
    ],

    skills: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Git",
      "Agile"
    ]
  },

  {
    id: 2,
    role: "Processing Level 1 Technician",
    company: "Bio Analytical Research Corporation South Africa (BARC SA)",
    type: "Contract",
    logo: barcLogo,
    period: "Nov 2024 – Sep 2025",
    duration: "11 Months",
    location: "Johannesburg, Gauteng, South Africa",

    responsibilities: [
      "Maintained data accuracy by capturing laboratory data into laboratory information management systems.",
      "Conducted quality control checks on equipment, reagents and biological samples, applying strong attention to detail.",
      "Maintained accurate records while ensuring compliance with standard operating procedures and quality standards.",
      "Collaborated across teams to meet processing targets, including preparing, labelling and storing samples for analysis.",
      "Performed routine maintenance, cleaning and calibration of laboratory equipment."
    ],

    skills: [
      "Data Accuracy",
      "Data Capture",
      "Quality Control",
      "Documentation",
      "Laboratory Information Management",
      "Microsoft 365 Applications",
      "Attention to Detail"
    ]
  },

  {
    id: 3,
    role: "Computer Lab Assistant",
    company: "University of Limpopo",
    type: "Part-time",
    logo: ulLogo,
    period: "Feb 2024 – May 2024",
    duration: "4 Months",
    location: "Polokwane, Limpopo, South Africa",

    responsibilities: [
      "Supported students with IT equipment setup and first-line troubleshooting for computer hardware, printers and software issues.",
      "Reported hardware faults and technical issues to the IT department.",
      "Maintained computer laboratories to ensure a clean, organised and productive learning environment.",
      "Supported the daily operation of university computer laboratories, helping keep infrastructure available for students."
    ],

    skills: [
      "IT Support",
      "Troubleshooting",
      "Computer Hardware",
      "Microsoft 365 Applications",
      "Customer Service",
      "Communication",
      "Problem Solving"
    ]
  }
];

function ExperienceCard({ job }) {
  return (
    <GlowCard className="p-7 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-xl bg-white flex items-center justify-center p-2 shadow-md">
            <img
              src={job.logo}
              alt={job.company}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">

          <h3 className="text-2xl font-bold text-text">
            {job.role}
          </h3>

          <p className="text-accent2 font-medium mt-1">
            {job.company} • {job.type}
          </p>

          <div className="flex flex-wrap gap-5 mt-3 text-sm text-muted">

            <span className="flex items-center gap-2">
              <CalendarDays size={15} />
              {job.period} • {job.duration}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={15} />
              {job.location}
            </span>

          </div>

          <ul className="mt-6 space-y-3">
            {job.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-muted leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-accent2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent2/20 bg-accent2/10 px-3 py-1 text-xs font-medium text-accent2"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </GlowCard>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max max-w-5xl">

        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="My experience across software development, data quality control, IT support and technology training."
        />

        <div className="space-y-8">
          {EXPERIENCE.map((job, index) => (
            <Reveal key={job.id} delay={index * 0.08}>
              <ExperienceCard job={job} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}