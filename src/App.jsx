import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

const Experience = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Education = lazy(() => import("./sections/Education"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return <div className="py-24 text-center text-muted text-sm">Loading…</div>;
}

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-bg text-text font-body">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
