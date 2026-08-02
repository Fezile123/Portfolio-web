import { Code2, Layout, Server, Wrench, BrainCircuit, Users } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GlowCard from "../components/ui/GlowCard";
import { SKILLS } from "../constants/data";

const CATEGORY_ICONS = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Tools: Wrench,
  AI: BrainCircuit,
  "Soft Skills": Users,
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A collection of programming languages, frameworks, tools, and technologies I use to build modern software applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([category, skills], index) => {
            const Icon = CATEGORY_ICONS[category] ?? Code2;

            return (
              <Reveal key={category} delay={index * 0.08}>
                <GlowCard className="h-full p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent2/20 text-accent2">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-lg font-semibold text-text">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full border border-accent2/20 bg-accent2/10 px-4 py-2 text-sm font-medium text-accent2 transition-all duration-300 hover:bg-accent2 hover:text-white hover:scale-105"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}