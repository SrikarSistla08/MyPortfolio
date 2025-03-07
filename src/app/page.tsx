"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Education from "../components/education";
// import Contact from "../components/contact";
import Footer from "@/components/footer";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 2], ["0%", "50%"]);

  useEffect(() => {
    // Smooth scroll functionality
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const link = document.querySelector('a[href^="#"]');
    link?.addEventListener('click', handleClick as EventListener);

    return () => {
      link?.removeEventListener('click', handleClick as EventListener);
    };
  }, []);

  return (
    <section>
      <div ref={ref} className="relative h-screen overflow-hidden">
        {/* <motion.div id="ths"
          className="max-h-screen flex justify-center items-center"
          style={{
            backgroundImage: "url('/bc.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
            y: backgroundY
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative z-10 flex text-8xl font-[advent_pro] flex-col justify-center h-full text-center"

>
          Welcome to My Portfolio!
          <motion.p
          initial={{ y: -10, opacity: 2}}
          animate={{ y: 20, opacity: 3 }}
          transition={{ duration: 1.50, repeat: Infinity,}}
          className="text-sm font-medium hover:transition duration-500 mt-8">
            <Link href="#ths2">Scroll Down or Click me to Explore</Link>
          </motion.p>
        </motion.div>
      </div>
      <div></div>
      <div ref={ref} className="relative h-screen overflow-hidden"> */}
      <motion.div
          className="max-h-screen absolute inset-0 z-0 bg-cover bg-center mp-overlay"
          style={{
            backgroundImage: "url('/bc.JPG')",
            backgroundAttachment: "auto",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundRepeat: "repeat",
            opacity: 0.7,
            y: backgroundY
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative z-10 text-black flex text-9xl flex-col justify-center h-full text-center md:p-10"
        >
          Srikar Sistla
          <motion.p
          initial={{ y: -10, opacity: 2}}
          animate={{ y: 20, opacity: 3 }}
          transition={{ duration: 1.50,}}
          className="text-2xl font-honk hover:transition duration-500 mt-8">
            Aspiring Web Developer and Data Analyst 
          </motion.p>

          <motion.p
          initial={{ y: -10, opacity: 2}}
          animate={{ y: 20, opacity: 3 }}
          transition={{ duration: 1.50,}}
          className="text-sm font-medium hover:text-black font-advent-pro hover:bg-500 transition-all duration-500 mt-20">
            <Link href="#header">Scroll Down or Click me to Explore</Link>
          </motion.p>
          <div></div>
        </motion.div>
      </div>
    </section>
  );
};

const BackToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 p-3 bg-slate-600 text-white font-['rajdhani'] rounded-full shadow-lg hover:bg-zinc-700 transition duration-300"
      aria-label="Back to top"
    >
      Back to Top
    </button>
  );
};


const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className={`bg-fixed bg-cover transition-all duration-1000 ${
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${className} overflow-y-hidden scrollbar-disabled`}
    >
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <AnimatedSection>
      <div className="min-h-screen flex flex-col font-['rajdhani']">
        <BackToTopButton />
        <AnimatedSection className="flex flex-col overflow-y-auto gap-10">
          <Hero />
          </AnimatedSection>
        <div className="grid min-h-screen gap-16 p-10">
          <div id="header" className="max-h-screen flex flex-col gap-8 mt-10">
          <AnimatedSection>
            <Header />
          </AnimatedSection>
          </div>
          <main className="flex flex-col gap-16">
            <AnimatedSection className="min-h-screen gap-16">
              <About />
              <div className="mt-3">
                <a
                  href="Resume.pdf"
                  download
                  className="inline-block bg-gray-600 text-white font-semibold py-2 px-4 mt-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 tracking-wide"
                >
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <Experience />
            </AnimatedSection>
            <AnimatedSection>
              <Skills />
            </AnimatedSection>
            <AnimatedSection>
              <Education />
            </AnimatedSection>
            <AnimatedSection>
              <section id="creations" className="flex flex-col gap-8 tracking-wide">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                  <h2 className="text-3xl font-bold hover:text-stone-400 transition duration-200 hover:underline">My Creations</h2>
                </div>
                <div className="flex gap-2 p-4 flex">
                  <Link href="/photography" className="container inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white py-3 px-6 rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-1000 hover:online">
                    <h3 className="text-xl font-semibold mb-2">Photography</h3>
                    <p className="mb-4 ">Explore my visual journey through Instagram</p>
                  </Link>
                  <Link href="/music" className="container inline-block bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:undeline">
                    <h3 className="text-xl font-semibold mb-2">Music</h3>
                    <p>Listen to my musical creations on Spotify</p>
                  </Link>
                </div>
              </section>
            </AnimatedSection>
          </main>
        </div>
        <Footer />
      </div>
    </AnimatedSection>
  );
}

