import { motion } from "framer-motion";
import { ArrowDown, FolderGit2, Download, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PROFILE } from "../constants/data";
import useTypewriter from "../hooks/useTypewriter";
import MagneticButton from "../components/ui/MagneticButton";
import AmbientBackground from "../components/ui/AmbientBackground";
import profileImage from "../assets/images/profile.jpg";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 2 + ((i * 7) % 5),
  left: (i * 53) % 100,
  top: (i * 31) % 100,
  duration: 8 + (i % 6),
  delay: (i % 5) * 0.6,
}));

export default function Hero() {
  const typed = useTypewriter(PROFILE.taglineWords);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 px-6 sm:px-10 lg:px-24"
    >
      <AmbientBackground />

      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent2/50 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container-max relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">

        {/* Left Content */}

        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-accent2 font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>

            Open to Graduate Opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-text"
          >
            Hi, I'm{" "}
            <span className="text-gradient">
              {PROFILE.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-9 flex items-center"
          >
            <span className="text-xl sm:text-2xl font-mono font-medium text-muted">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-accent2 ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
          >
            {PROFILE.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              <FolderGit2 size={17} />
              View Projects
            </MagneticButton>

            <MagneticButton
              as="a"
              href={PROFILE.resumeUrl}
              download
              variant="outline"
            >
              <Download size={17} />
              Download CV
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              variant="ghost"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              <Mail size={17} />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent2 transition-colors"
            >
              <FiGithub size={22} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent2 transition-colors"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="text-muted hover:text-accent2 transition-colors"
            >
              <Mail size={22} />
            </a>
          </motion.div>

        </div> 
                {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex justify-center"
        >
          {/* Animated Background Glow */}
          <div className="absolute h-80 w-80 sm:h-[26rem] sm:w-[26rem] rounded-full bg-gradient-to-r from-primary via-accent2 to-primary blur-3xl opacity-30 animate-pulse" />

          {/* Rotating Gradient Ring */}
          <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-r from-primary via-accent2 to-primary opacity-70 animate-spin [animation-duration:18s]" />

          {/* Profile Image */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative h-72 w-72 sm:h-96 sm:w-96 rounded-full p-1 bg-gradient-to-r from-primary via-accent2 to-primary shadow-[0_0_60px_rgba(59,130,246,0.35)]"
          >
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-slate-900 bg-slate-900">
              <img
                src={profileImage}
                alt="Fezile Mnisi"
                loading="eager"
                className="h-full w-full rounded-full object-cover object-center transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#about")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent2 transition-colors"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll to About"
      >
        <span className="text-xs tracking-wider uppercase">
          Scroll
        </span>

        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}