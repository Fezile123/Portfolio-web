import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowUpRight,
  Star,
  ExternalLink,
  Code2,
  Sparkles,
  BarChart3,
  X,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";

import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import GlowCard from "../components/ui/GlowCard";

import {
  PROJECTS,
  PROJECT_CATEGORIES,
} from "../constants/data";

/* ======================================================
   URL HELPER
   Handles normal URLs and accidental Markdown URLs
====================================================== */

function cleanUrl(value) {
  if (!value || value === "#") return null;

  if (typeof value !== "string") return null;

  const trimmedValue = value.trim();

  // Handles:
  // [https://example.com](https://example.com)
  const markdownMatch = trimmedValue.match(
    /\]\((https?:\/\/[^)]+)\)/
  );

  if (markdownMatch) {
    return markdownMatch[1];
  }

  // Handles:
  // https://example.com
  const urlMatch = trimmedValue.match(
    /(https?:\/\/[^\s\]]+)/
  );

  if (urlMatch) {
    return urlMatch[1];
  }

  return trimmedValue;
}

/* ======================================================
   CATEGORY CONFIGURATION
====================================================== */

const CATEGORY_STYLES = {
  AI: {
    icon: Sparkles,
    label: "Artificial Intelligence",
    badge:
      "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    iconBg:
      "bg-cyan-400/10 text-cyan-300",
  },

  "Full Stack": {
    icon: Code2,
    label: "Full Stack",
    badge:
      "border-blue-400/20 bg-blue-400/10 text-blue-300",
    iconBg:
      "bg-blue-400/10 text-blue-300",
  },

  Data: {
    icon: BarChart3,
    label: "Data & Analytics",
    badge:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    iconBg:
      "bg-emerald-400/10 text-emerald-300",
  },
};

/* ======================================================
   PROJECT FALLBACK VISUAL
   Used only when a project does not have an image
====================================================== */

function ProjectFallbackVisual({ project, index }) {
  const config =
    CATEGORY_STYLES[project.category] ||
    CATEGORY_STYLES.AI;

  const Icon = config.icon;

  return (
    <div className="relative flex min-h-[230px] overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950">
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent2/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[230px] w-full flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-muted">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${config.iconBg}`}
          >
            <Icon size={20} />
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {config.label}
          </p>

          <h4 className="max-w-[80%] text-2xl font-bold text-white">
            {project.title}
          </h4>
        </div>

        <span className="absolute bottom-2 right-5 select-none font-display text-7xl font-bold text-white/[0.035]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ======================================================
   PROJECT IMAGE
====================================================== */

function ProjectImage({ project, index }) {
  /*
    If the project has an image from data.js,
    display the actual screenshot.

    Otherwise display the fallback visual.
  */

  if (!project.image) {
    return (
      <ProjectFallbackVisual
        project={project}
        index={index}
      />
    );
  }

  return (
    <div className="group/image relative min-h-[230px] overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-950">
      {/* Project screenshot */}
      <img
        src={project.image}
        alt={`${project.title} project screenshot`}
        className="h-[230px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover/image:opacity-50" />

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/40 to-transparent" />

      {/* Project number */}
      <span className="absolute left-5 top-5 font-mono text-xs font-medium tracking-[0.2em] text-white/70">
        PROJECT {String(index + 1).padStart(2, "0")}
      </span>

      {/* Category */}
      <div className="absolute bottom-5 left-5">
        <span className="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/image:translate-x-0 group-hover/image:opacity-100">
        <ArrowUpRight size={17} />
      </div>
    </div>
  );
}

/* ======================================================
   PROJECT CARD
====================================================== */

function ProjectCard({ project, index }) {
  const config =
    CATEGORY_STYLES[project.category] ||
    CATEGORY_STYLES.AI;

  const githubUrl = cleanUrl(project.github);
  const demoUrl = cleanUrl(project.demo);

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 20,
      }}
      whileHover={{
        y: -7,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group h-full"
    >
      <GlowCard className="flex h-full flex-col overflow-hidden">
        {/* =================================================
            PROJECT IMAGE
        ================================================= */}
        <div className="p-3 pb-0">
          <ProjectImage
            project={project}
            index={index}
          />
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">

          {/* Category + Featured */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <span
              className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${config.badge}`}
            >
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300">
                <Star
                  size={13}
                  className="fill-current"
                />
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold leading-tight text-text sm:text-2xl">
              {project.title}
            </h3>

            <ArrowUpRight
              size={21}
              className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent2"
            />
          </div>

          {/* Description */}
          <p className="mb-7 text-sm leading-7 text-muted">
            {project.description}
          </p>

          {/* =================================================
              FEATURES
          ================================================= */}
          {project.features?.length > 0 && (
            <div className="mb-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-text/60">
                Key Features
              </p>

              <ul className="space-y-2">
                {project.features
                  .slice(0, 4)
                  .map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs leading-5 text-muted"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />

                      <span>{feature}</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}
          <div className="mt-auto mb-7">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-text/60">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:border-accent2/20 group-hover:text-text"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              ACTIONS
          ================================================= */}
          <div className="flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row">

            {/* GitHub */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-text transition-all duration-300 hover:border-accent2/40 hover:bg-white/[0.04]"
              >
                <FiGithub size={17} />
                Source Code
              </a>
            )}

            {/* Live Project */}
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent2 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent2/20"
              >
                <ExternalLink size={16} />
                Live Project
              </a>
            ) : (
              <span className="inline-flex flex-1 cursor-default items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm font-medium text-muted/60">
                <Code2 size={16} />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.article>
  );
}

/* ======================================================
   PROJECTS SECTION
====================================================== */

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  /* ====================================================
     FILTER PROJECTS
  ==================================================== */

  const filteredProjects = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesCategory =
        category === "All" ||
        project.category === category;

      const matchesSearch =
        searchTerm === "" ||
        project.title
          ?.toLowerCase()
          .includes(searchTerm) ||
        project.description
          ?.toLowerCase()
          .includes(searchTerm) ||
        project.tech?.some((technology) =>
          technology
            .toLowerCase()
            .includes(searchTerm)
        );

      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  return (
    <section
      id="projects"
      className="relative section-padding"
    >
      <div className="container-max">

        {/* =================================================
            SECTION HEADING
        ================================================= */}
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects I've Built."
          description="A selection of software projects I've built across artificial intelligence, full-stack development, and data analytics."
        />

        {/* =================================================
            CONTROLS
        ================================================= */}
        <div className="mb-10 mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search projects or technologies..."
              className="glass card-border w-full rounded-xl py-3.5 pl-11 pr-10 text-sm text-text placeholder:text-muted focus:border-accent2/40 focus:outline-none"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted transition-colors hover:text-text"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map(
              (categoryName) => {
                const active =
                  category === categoryName;

                return (
                  <button
                    key={categoryName}
                    type="button"
                    onClick={() =>
                      setCategory(categoryName)
                    }
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-primary to-accent2 text-white shadow-lg shadow-primary/10"
                        : "border border-white/[0.07] bg-white/[0.025] text-muted hover:border-white/15 hover:text-text"
                    }`}
                  >
                    {categoryName}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* =================================================
            RESULT COUNT
        ================================================= */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? "Project"
              : "Projects"}
          </p>

          {(query || category !== "All") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="text-xs font-medium text-accent2 transition-colors hover:text-text"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}
        <motion.div
          layout
          className="grid gap-7 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
            )}
          </AnimatePresence>
        </motion.div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}
        {filteredProjects.length === 0 && (
          <Reveal>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] py-16 text-center">

              <Search
                size={28}
                className="mx-auto mb-4 text-muted"
              />

              <h3 className="mb-2 text-lg font-semibold text-text">
                No projects found
              </h3>

              <p className="text-sm text-muted">
                Try another project name,
                technology, or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="mt-5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                View All Projects
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}