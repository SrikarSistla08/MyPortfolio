"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Education from "../components/education";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Footer from "@/components/footer";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transformations for smooth fading and blending
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Slight zoom out
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // Moves up slightly

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with blending effect */}
      <motion.div
        className="absolute inset-1 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bc.JPG')",
          scale,
          y,
          opacity,
          maskImage: "linear-gradient(to bottom, rgb(0, 0, 0), rgba(0,0,0,0))",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-4 text-shadow-lg"
        >
          Srikar Sistla
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-shadow"
        >
          Aspiring Web Developer and Data Analyst
        </motion.p>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
            <Link
            href="#header"
            className="bg-white text-black py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300 text-lg font-semibold"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#header");
              if (target) {
              target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >
            Explore My Work
            </Link>
        </motion.div>
      </div>
    </section>
  );
};
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => {
  const [rawIntersectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const intersectionRef = typeof rawIntersectionRef === "object" ? rawIntersectionRef : { current: null };

  return (
    <motion.section
      id={id}
      ref={intersectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${className} overflow-hidden`}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-['rajdhani'] bg-gradient-to-br from-slate-900 to-black">
      <BackToTopButton />
      <Hero />
      <div className="mx-auto px-auto py-16">
        <AnimatedSection id="header" className="mb-16">
          <Header />
        </AnimatedSection>
        <div className="mx-auto px-8 py-16 ">
          <main className="space-y-24 text-white">
            <AnimatedSection>
              <About />
              <div className="mt-8">
                <a
                  href="Resume.pdf"
                  download
                  className="inline-block bg-slate-900 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 transition-colors duration-300 tracking-wide"
                >
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <Experience />
            </AnimatedSection>
            <AnimatedSection>
              <ProjectsShowcase />
            </AnimatedSection>
            {/* <AnimatedSection>
              <Skills />
            </AnimatedSection> */}
            <AnimatedSection>
              <Education />
            </AnimatedSection>
          </main>
        </div>
        <AnimatedSection className="mx-auto px-8 py-16">
          <Skills />
        </AnimatedSection>
        <AnimatedSection className="mx-auto px-8 py-16">
              <section id="creations" className="flex flex-col space-y-8">
                <h2 className="text-white text-4xl mb-8">My Creations</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Link href="/photography" className="group">
                    <div className="bg-purple-900 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl">
                      <h3 className="text-2xl font-semibold mb-4 text-white">Photography</h3>
                      <p className="text-purple-100">Explore my visual journey through Instagram</p>
                    </div>
                  </Link>
                  <Link href="/music" className="group">
                    <div className="bg-green-600 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl">
                      <h3 className="text-2xl font-semibold mb-4 text-white">Music</h3>
                      <p className="text-green-100">Listen to my musical creations on Spotify</p>
                    </div>
                  </Link>
                </div>
              </section>
            </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}


