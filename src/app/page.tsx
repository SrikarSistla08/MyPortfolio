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
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bc.JPG')",
          y: backgroundY,
          opacity: 0.7,
        }}
      />
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white"
        style={{ opacity }}
      >
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link href="#header"
            className="bg-white text-black py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300 text-lg font-semibold"
          >
            Explore My Work
          </Link>
        </motion.div>
      </motion.div>
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

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
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
      <div className="mx-auto px-8 py-16">
        <AnimatedSection id="header" className="mb-24">
          <Header />
        </AnimatedSection>
        <div className="mx-auto px-8 py-16 ">
        <main className="space-y-24">
          <AnimatedSection>
            <About />
            <div className="mt-8">
              <a
                href="Resume.pdf"
                download
                className="inline-block bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 tracking-wide"
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
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <AnimatedSection>
            <section id="creations" className="space-y-8">
              <h2 className="text-4xl font-bold mb-8">My Creations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="/photography" className="group">
                  <div className="bg-purple-600 rounded-lg p-6 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Photography</h3>
                    <p className="text-purple-100">Explore my visual journey through Instagram</p>
                  </div>
                </Link>
                <Link href="/music" className="group">
                  <div className="bg-green-600 rounded-lg p-6 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Music</h3>
                    <p className="text-green-100">Listen to my musical creations on Spotify</p>
                  </div>
                </Link>
              </div>
            </section>
          </AnimatedSection>
        </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}


