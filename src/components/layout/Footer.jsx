import { ArrowUp } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PROFILE } from "../../constants/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 px-6 sm:px-10 lg:px-24 py-10">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="text-muted hover:text-accent transition-colors">
            <FiMail size={18} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted hover:text-text hover:border-accent/50 transition-colors"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
