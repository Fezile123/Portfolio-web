import { motion } from "framer-motion";
import ulLogo from "../assets/images/ul.png";
import {
  Calendar,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative section-padding">
      <div className="container-max max-w-5xl">

        <SectionHeading
          eyebrow="Education"
          title="Academic Foundation"
          description="My academic journey has provided a solid foundation in software development, computer science principles, and statistical analysis."
        />

        <Reveal>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-3xl border border-white/10 p-8 lg:p-10 shadow-card"
          >

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

              <div className="flex gap-6">

                {/* University Logo */}

                <div className="h-20 w-20 rounded-2xl bg-white p-3 shadow-glow flex items-center justify-center">
                  <img
                    src={ulLogo}
                    alt="University of Limpopo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-2xl font-bold text-text">
                      University of Limpopo
                    </h2>

                    <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 border border-green-500/20 px-4 py-1 text-sm font-medium text-green-400">
                      <CheckCircle size={16} />
                      Graduated
                    </span>

                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-accent2">
                    Bachelor of Science in Mathematical Science
                  </h3>

                  <p className="text-muted mt-1">
                    Computer Science & Statistics
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-muted">
                    <Calendar size={16} />
                    <span>2020 – 2024</span>
                  </div>

                </div>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              {/* Relevant Coursework */}

              <div>

                <h4 className="flex items-center gap-2 text-lg font-semibold text-text mb-5">
                  <BookOpen size={18} />
                  Relevant Coursework
                </h4>

                <div className="grid grid-cols-2 gap-3">

                  {[
                    "Software Development",
                    "Database Systems",
                    "Data Structures",
                    "Algorithms",
                    "Operating Systems",
                    "Computer Networks",
                    "Statistics",
                    "Mathematics",
                  ].map((course) => (
                    <div
                      key={course}
                      className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-text hover:border-accent2 hover:bg-white/10 transition-all duration-300"
                    >
                      {course}
                    </div>
                  ))}

                </div>

              </div>

              {/* Skills Gained */}

              <div>

                <h4 className="text-lg font-semibold text-text mb-5">
                  Skills Gained
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Java",
                    "JavaScript",
                    "SQL",
                    "HTML",
                    "CSS",
                    "Problem Solving",
                    "Object-Oriented Programming",
                    "Database Design",
                    "Statistical Analysis",
                    "Critical Thinking",
                    "Microsoft 365",
                    "Team Collaboration",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-accent2/20 bg-accent2/10 px-4 py-2 text-sm font-medium text-accent2 hover:bg-accent2 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}