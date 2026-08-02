import { ExternalLink, Award } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

import courseraLogo from "../assets/images/coursera.png";
import nemisaLogo from "../assets/images/nemisa.png";
import fnbLogo from "../assets/images/itvarsity.png";

const certificates = [
  {
    id: 1,
    title: "Artificial Intelligence (AI) Bootcamp",
    issuer: "Coursera",
    date: "Issued Jun 2026",
    credential: "XN1RBnZdQ5udUQZ2XdOb4g",
    skills:
      "Machine Learning • Artificial Intelligence • Neural Networks • Prompt Engineering",
    logo: courseraLogo,
    link: "#",
  },
  {
    id: 2,
    title: "Google AI Essentials Specialization",
    issuer: "Coursera",
    date: "Issued May 2026",
    credential: "M7DODCTJNZOT",
    skills:
      "Google AI • Prompt Engineering • Google Sheets • Generative AI",
    logo: courseraLogo,
    link: "#",
  },
  {
    id: 3,
    title: "Microsoft AI & Cybersecurity Course",
    issuer: "National Electronic Media Institute of South Africa (NEMISA)",
    date: "Issued Dec 2025",
    credential: "",
    skills:
      "Artificial Intelligence • Cybersecurity • Microsoft Copilot • Azure Fundamentals",
    logo: nemisaLogo,
    link: "#",
  },
  {
    id: 4,
    title: "FNB App Academy 2025",
    issuer: "IT Varsity",
    date: "Issued Jul 2025",
    credential: "",
    skills:
      "HTML • CSS • JavaScript • React • Responsive Design",
    logo: fnbLogo,
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max max-w-5xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Licenses & Certifications"
          description="Professional certifications that demonstrate my continuous learning in Software Development, AI, Cloud Computing and Cybersecurity."
        />

        <div className="space-y-6 mt-12">
          {certificates.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.08}>
              <div className="glass rounded-3xl border border-white/10 p-6 hover:border-primary/40 transition-all duration-300">

                <div className="flex gap-5">

                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-16 h-16 rounded-xl object-contain bg-white p-2"
                  />

                  <div className="flex-1">

                    <h3 className="text-xl font-semibold text-text">
                      {cert.title}
                    </h3>

                    <p className="text-accent2 font-medium mt-1">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted mt-1">
                      {cert.date}
                    </p>

                    {cert.credential && (
                      <p className="text-sm text-muted mt-1">
                        Credential ID: {cert.credential}
                      </p>
                    )}

                    <div className="mt-5">
                      <span className="font-semibold text-white">
                        Skills:
                      </span>

                      <p className="text-muted mt-2 leading-relaxed">
                        {cert.skills}
                      </p>
                    </div>

                    <div className="mt-6 flex gap-3">

                      <a
                        href={cert.link}
                        className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm hover:bg-primary hover:text-white transition"
                      >
                        <ExternalLink size={16} />
                        View Credential
                      </a>

                    </div>

                  </div>

                  <Award
                    className="text-primary hidden sm:block"
                    size={30}
                  />

                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}