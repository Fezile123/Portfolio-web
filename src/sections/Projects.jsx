import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Star } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GlowCard from "../components/ui/GlowCard";
import { PROJECTS, PROJECT_CATEGORIES } from "../constants/data";

function ProjectCard({ project }) {
  return (
    <GlowCard className="flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-card to-accent2/20 flex items-center justify-center">
          <span className="text-4xl font-display font-bold text-white/20 tracking-wide uppercase">
            {project.title.split(" ")[0]}
          </span>
        </div>
        {project.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            <Star size={12} className="fill-current" /> Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-text mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-4">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2 text-xs text-muted">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent2" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium text-accent2 bg-accent2/10 border border-accent2/20 rounded-full px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm font-medium text-text hover:border-accent/40 hover:bg-white/5 transition-colors"
          >
            <FiGithub size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent2 py-2.5 text-sm font-medium text-white shadow-glow hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] transition-shadow"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </GlowCard>
  );
}

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="relative section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="A mix of full-stack products, AI-powered tools, and backend systems — each one built to solve a real, specific problem."
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full rounded-full glass card-border py-2.5 pl-11 pr-4 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat ? "text-white" : "text-muted hover:text-text"
                }`}
              >
                {category === cat && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <Reveal>
            <p className="text-center text-muted mt-16">
              No projects match your search — try a different keyword or category.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
