# Fezile Mnisi — Developer Portfolio

A premium, animated software developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19 + Vite** — fast dev/build tooling
- **Tailwind CSS 3** — utility-first styling, custom design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, hover/tap micro-interactions, page transitions
- **React Router** — routing shell (single-page app with anchor navigation)
- **Lucide React + React Icons** — iconography

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/
    layout/       Navbar, Footer
    ui/            Reveal, SectionHeading, MagneticButton, GlowCard,
                    AmbientBackground, Toast — shared primitives
  sections/        One file per page section (Hero, About, Skills,
                    Experience, Projects, Certifications, Education,
                    GithubStats, Testimonials, Contact)
  hooks/           useScrollSpy, useTypewriter
  constants/       data.js — ALL editable content lives here
  index.css        Tailwind layers + global styles
  App.jsx          Assembles sections, code-splits below-the-fold ones
  main.jsx         React root
```

## Customizing Content

Everything text-based — name, bio, skills, experience, projects, certifications,
education, testimonials, GitHub stats, and contact details — lives in a single file:

```
src/constants/data.js
```

Edit that file and every section updates automatically. No need to touch component code
for routine content changes.

## Placeholders to Replace

The brief asked for placeholders that are easy to swap out. Before shipping to production, replace:

1. **Resume file** — drop a real `resume.pdf` into `/public` (the Navbar and Hero buttons
   already link to `/resume.pdf` via `PROFILE.resumeUrl` in `data.js`).
2. **Profile "photo"** — the Hero and About sections currently render a gradient initials
   block (`FM`). Swap in a real photo by replacing the placeholder `<div>` in
   `src/sections/Hero.jsx` and `src/sections/About.jsx` with an `<img>` tag.
3. **Project images** — each project card currently renders a gradient placeholder with
   the project's first word. Add real screenshots/mockups per project in `PROJECTS` in
   `data.js` and update `ProjectCard` in `src/sections/Projects.jsx` to render an `<img>`.
4. **GitHub stats** — `GITHUB_STATS` in `data.js` is illustrative. Wire it up to the real
   GitHub REST/GraphQL API (or a service like github-readme-stats) for live numbers.
5. **Contact form** — `Contact.jsx` currently simulates a submission with a timeout. Wire
   `handleSubmit` to a real email service (e.g. Formspree, EmailJS, or your own API route).
6. **Social/contact links** — update `github`, `linkedin`, and `email` in `PROFILE`
   (`src/constants/data.js`).

## Design Tokens

Colors, fonts, and animation keyframes are centralized in `tailwind.config.js`, matching
the brief exactly: primary `#2563EB`, accent `#3B82F6`, secondary accent `#06B6D4`,
background `#0F172A`, card `#1E293B`, text `#F8FAFC`, muted `#94A3B8`, success `#22C55E`.
Typography uses Poppins (display) and Inter (body), loaded via Google Fonts in `index.css`.

## Performance Notes

- Sections below the fold (`Experience` through `Contact`) are lazy-loaded via `React.lazy`
  and code-split into separate chunks (visible in the `npm run build` output).
- `prefers-reduced-motion` is respected globally in `index.css`.
- All interactive elements have visible keyboard focus states.
