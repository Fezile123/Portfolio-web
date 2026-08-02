import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  as: Component = "button",
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent2 text-white shadow-glow hover:shadow-[0_0_55px_rgba(59,130,246,0.4)]",
    outline:
      "border border-white/15 text-text hover:border-accent/60 hover:bg-white/5",
    ghost: "text-text hover:text-accent",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      <Component
        className={`btn-magnetic inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
