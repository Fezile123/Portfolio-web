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
    role: "End-to-End Technology Candidate",
    company: "CAPACITI",
    type: "Internship",
    logo: capacitiLogo,
    period: "Apr 2026 – Present",
    duration: "5 Months",
    location: "Johannesburg, Gauteng, South Africa",

    responsibilities: [
      "Complete an industry-aligned technology training programme focused on software development, systems support, cloud computing, cybersecurity, and digital transformation.",
      "Develop full-stack applications using modern software engineering principles and Agile methodologies.",
      "Build REST APIs, work with databases, Git, Docker, and cloud technologies through hands-on projects.",
      "Collaborate with multidisciplinary teams to solve real-world business challenges.",
      "Strengthen analytical, problem-solving, communication, and professional workplace skills."
    ],

    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "Docker",
      "Git",
      "REST APIs",
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
      "Accurately captured laboratory data into laboratory information management systems.",
      "Performed routine maintenance, cleaning, and calibration of laboratory equipment.",
      "Conducted quality control checks on equipment, reagents, and biological samples.",
      "Prepared, labelled, aliquoted, and stored laboratory samples for analysis.",
      "Maintained accurate records while ensuring compliance with laboratory procedures and quality standards."
    ],

    skills: [
      "Microsoft 365 Applications",
      "Data Capture",
      "Quality Control",
      "Documentation",
      "Laboratory Information Management",
      "Problem Solving",
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
      "Assisted students and staff with the use of computers and IT equipment.",
      "Provided first-line technical support for computer hardware, printers, and software issues.",
      "Maintained computer laboratories to ensure a clean, organised, and productive learning environment.",
      "Reported faulty hardware and technical issues to the IT department.",
      "Supported the daily operation of university computer laboratories."
    ],

    skills: [
      "Microsoft 365 Applications",
      "Technical Support",
      "Customer Service",
      "Computer Hardware",
      "Troubleshooting",
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
          description="My professional journey across software development, technical support, laboratory operations, and technology training."
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