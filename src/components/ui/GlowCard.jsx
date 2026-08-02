import { useRef, useState } from "react";

export default function GlowCard({ children, className = "", as: Component = "div" }) {
  const ref = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl glass card-border transition-transform duration-300 hover:-translate-y-1.5 ${className}`}
      style={{
        background: `radial-gradient(600px circle at ${coords.x}% ${coords.y}%, rgba(59,130,246,0.12), transparent 40%), rgba(30, 41, 59, 0.55)`,
      }}
    >
      {children}
    </Component>
  );
}
