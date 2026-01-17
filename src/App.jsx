import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollToTop from "./components/ScrollToTop";
import CursorEffect from "./components/CursorEffect"; // Make sure this line exists

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
      infinite: false,
      autoResize: true,
      lerp: 0.1,
      syncTouch: false,
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen overflow-x-hidden relative flex flex-col">
      {/* Animated Background */}
      <ParticlesBackground />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none z-0 opacity-30" />
      
      {/* Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-blue-500/3 pointer-events-none z-0" />
      
      {/* DOTS TRAIL EFFECT - This adds the dots while keeping default cursor */}
      <CursorEffect />
      
      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;