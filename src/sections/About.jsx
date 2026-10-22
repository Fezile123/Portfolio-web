import {
  Code2,
  BarChart3,
  Target,
  Brain,
  Puzzle,
  Rocket,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GlowCard from "../components/ui/GlowCard";
import { ABOUT_HIGHLIGHTS } from "../constants/data";

const ICONS = [
  Code2,
  BarChart3,
  Brain,
  Puzzle,
  Rocket,
  Target,
];

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="Building software and turning data into insight."
          description="I'm a BSc Mathematical Sciences graduate with majors in Computer Science and Statistics. I build full-stack web applications with React, Node.js, Flask and PostgreSQL, and use Python, Pandas, SQL and Scikit-learn to clean, analyse and visualise data. I'm currently developing my skills through the CAPACITI YES Programme and am seeking internship, graduate and junior opportunities in software development, data analytics, AI and IT."
        />

        <div className="max-w-5xl mx-auto">

          {/* About Content */}
          <Reveal>
            <GlowCard className="p-8 mb-10">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Who I Am
              </h3>

              <p className="text-muted leading-8">
                I work at the intersection of software development and data
                analytics. My Computer Science and Statistics background lets
                me build complete end-to-end applications, from React
                interfaces to backend APIs and databases, and also work with
                data: cleaning it, analysing it and presenting it through
                dashboards that support better decisions.
              </p>

              <p className="text-muted leading-8 mt-5">
                Alongside my studies and training, I have worked in data
                quality control at BARC SA and in IT support at the University
                of Limpopo, which taught me accuracy, attention to detail and
                clear communication. I enjoy learning quickly, collaborating
                in Agile teams and delivering work that is reliable and easy
                to use.
              </p>
            </GlowCard>
          </Reveal>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_HIGHLIGHTS.map((item, index) => {
              const Icon = ICONS[index % ICONS.length];

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <GlowCard className="p-6 h-full">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent2/20 text-accent2">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-text mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}