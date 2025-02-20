"use client";
import React from "react";
import Link from "next/link";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Education from "../components/education";
import Contact from "../components/contact";
import Footer from "@/components/footer";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as unknown as React.RefObject<HTMLElement>}
      className={`bg-container bg-fixed transition-all duration-1000 ${
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
    <div className="min-h-screen flex flex-col">
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 sm:p-20">
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <main className="flex flex-col gap-16 overflow-y-auto">
        <AnimatedSection>
          <About />
          <div className="mt-3">
            <a
              href="Resume.pdf"
              download
              className="inline-block bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors duration-300"
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
          <section id="creations" className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <h2 className="text-3xl font-bold hover:text-stone-400 transition duration-200 hover:underline">My Creations</h2>
              </div>
              <div className="flex gap-8">
                <Link href="/photography" className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-1000 hover:online">
                  <h3 className="text-xl font-semibold mb-2">Photography</h3>
                  <p className="mb-4 ">Explore my visual journey through Instagram</p>
                </Link>
                <Link href="/music" className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:undeline">
                  <h3 className="text-xl font-semibold mb-2">Music</h3>
                  <p>Listen to my musical creations on Spotify</p>
                </Link>
              </div>
            </section>
          </AnimatedSection>
          <Contact />
      </main>

      <Footer/>
    </div>
  </div>
  </AnimatedSection>
  );
}

