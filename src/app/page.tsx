import Image from "next/image";
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
        </main>

        <footer className="text-center text-sm">
          © {new Date().getFullYear()} Srikar Sistla. All rights reserved. Hire me LOL
        </footer>
      </div>
  );
}      
