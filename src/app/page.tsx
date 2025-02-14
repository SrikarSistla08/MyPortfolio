import React from "react";
import Link from "next/link";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Education from "../components/education";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col gap-16">
        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />

        {/* My Creations Section */}
        <section id="creations" className="flex flex-col gap-8 font-old-standard-tt-bold container">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <h2 className="text-3xl font-bold hover:text-stone-400 transition duration-200 hover:underline">My Creations</h2>
          </div>
          <div className="flex gap-8">
            <Link href="/photography" className="flex-1 bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p>Explore my visual journey through Instagram</p>
            </Link>
            <Link href="/music" className="flex-1 bg-green-100 p-6 rounded-lg hover:bg-green-200 transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Music</h3>
              <p>Listen to my musical creations on Spotify</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm">
        © {new Date().getFullYear()} Srikar Sistla. All rights reserved. Hire me LOL
      </footer>
    </div>
  );
}