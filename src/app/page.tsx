import Image from "next/image";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";

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
        <Skills/>

        {/* Education Section */}
        <section id="education" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">University of Maryland at Baltimore County, Maryland</h3>
              <p>2023-2025</p>
              <p>Major: Information Systems</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">SCSVMV University, Kanchipuram, India</h3>
              <p>2019-2023</p>
              <p>Major: Computer Science</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-lg">
            Feel free to reach out to me at <a href="mailto:srikarsistla710@gmail.com" className="text-blue-500 hover:underline">srikarsistla710@gmail.com</a> or call me at 443.636.7777
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/SrikarSistla08" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm">
        © {new Date().getFullYear()} Srikar Sistla. All rights reserved.
      </footer>
    </div>
  );
}