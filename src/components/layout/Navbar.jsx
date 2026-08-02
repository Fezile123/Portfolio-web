import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { NAV_LINKS, PROFILE } from "../../constants/data";
import useScrollSpy from "../../hooks/useScrollSpy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const activeId = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`container-max mx-4 sm:mx-8 lg:mx-auto flex items-center justify-between rounded-2xl px-5 sm:px-6 transition-all duration-500 ${
          scrolled
            ? "glass-strong py-3 shadow-card"
            : "bg-transparent py-2"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display font-bold text-lg sm:text-xl tracking-tight text-text"
        >
          Fezile <span className="text-gradient">Mnisi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-muted hover:text-text transition-colors"
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent2"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <FiGithub size={18} />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-muted hover:text-accent hover:bg-white/5 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href={PROFILE.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent2 px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:shadow-[0_0_45px_rgba(59,130,246,0.4)] transition-shadow"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-text"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:hidden mx-4 mt-2 overflow-hidden rounded-2xl glass-strong"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted hover:text-text hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={PROFILE.resumeUrl}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent2 px-5 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} />
                Download CV
              </a>

              <div className="flex items-center justify-center gap-4 pt-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-accent"
                >
                  <FiGithub size={20} />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-accent"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}