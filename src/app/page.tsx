import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Srikar Sistla</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col gap-16">
        {/* About Section */}
        <section id="about" className="flex flex-col gap-8 items-center sm:items-start">
          <Image
            className="rounded-full"
            src="/Profile.jpg"
            alt="Srikar Sistla"
            width={200}
            height={200}
            priority
          />
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">
I'm Srikar Sistla, a passionate Data / Business Analyst based in Halethorpe, MD. With a strong background in Information Systems and Computer Science, I bring a unique blend of analytical skills and technical expertise to the table. My experience spans software engineering, data analysis, and project management, allowing me to approach problems from multiple angles. I'm particularly adept at leveraging technologies like Power BI, Python, and React.js to drive business growth and optimize processes. Whether it's developing AI platforms, creating data visualization tools, or managing cross-functional teams, I'm committed to delivering innovative solutions that make a real impact.          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer Intern | TANTVSTUDIOS</h3>
              <p className="text-sm text-gray-600">11/2024-Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed and optimized the SYNDEX AI platform using Next.js and React.js</li>
                <li>Integrated REST APIs for dynamic content</li>
                <li>Optimized SEO and page load time, improving performance by 30%</li>
              </ul>
            </div>
            {/* Add more experience entries here */}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Skills & Abilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data Analytics & BI: Power BI, Excel, SQL (MySQL, PostgreSQL)</li>
            <li>Programming & Machine Learning: Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), R</li>
            <li>Frontend Development: React.js, Next.js, JavaScript, HTML, CSS, Tailwind</li>
            <li>Tools: Jupyter Notebook, Git, GitHub, Trello, Jira</li>
          </ul>
        </section>

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