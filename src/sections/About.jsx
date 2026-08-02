import {
  GraduationCap,
  Sparkles,
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
  GraduationCap,
  Sparkles,
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
          title="Building software that solves real-world problems."
          description="I recently completed my BSc Mathematical Science degree with majors in Computer Science and Statistics. I enjoy developing modern web applications using React, Node.js, Python and PostgreSQL while continuously expanding my knowledge in AI, Cloud Computing and Software Engineering. I'm currently seeking Graduate Software Developer opportunities where I can contribute to meaningful projects, collaborate with experienced engineers and continue growing as a developer."
        />

        <div className="max-w-5xl mx-auto">

          {/* About Content */}
          <Reveal>
            <GlowCard className="p-8 mb-10">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Who I Am
              </h3>

              <p className="text-muted leading-8">
                I'm passionate about building clean, scalable and user-friendly
                applications that solve real business problems. My experience
                spans frontend development, backend APIs, databases and AI
                integration, allowing me to build complete end-to-end
                applications.
              </p>

              <p className="text-muted leading-8 mt-5">
                I enjoy learning new technologies, working in collaborative
                environments and continuously improving my software engineering
                skills. Whether I'm building an AI-powered application,
                designing REST APIs or creating responsive user interfaces, my
                focus is always on delivering high-quality software.
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