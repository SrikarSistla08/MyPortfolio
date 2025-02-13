import React from "react";

function Experience() {
    return (
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

            <div>
              <h3 className="text-xl font-semibold">Software Engineer Intern | Valhalla Data Systems</h3>
              <p className="text-sm text-gray-600">08/2024-11/2024</p>
              <ul className="list-disc list-inside mt-2">
                <li>Designed and launched a Full Stack education website ”Olademy,” enhancing Maryland High School education access. And enabling free education from top tier universities.</li>
                <li>Revamped design tools and processes, leading to an 80% increase in annual revenue.</li>
                <li>Utilized PHP, HTML, CSS, and Linux OS for seamless integration and development.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">IT Project Manager | Santa's knights</h3>
              <p className="text-sm text-gray-600">06/2024-08/2024</p>
              <ul className="list-disc list-inside mt-2">
                <li>Optimized product recommendations using machine learning, increasing average order value by 20%.</li>
                <li>Managed cross-functional teams, reducing project delays by 25% through improved collaboration.</li>
                <li>Used Power BI and Excel to create business intelligence reports for growth analysis.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Data Analyst Intern | Expand AI</h3>
              <p className="text-sm text-gray-600">06/2023-08/2023</p>
              <ul className="list-disc list-inside mt-2">
                <li>Optimized product recommendations using machine learning, increasing average order value by 20%.</li>
                <li>Maintained an efficient ML pipeline using data integration, API Integration, improved project’s efficiency to 70%</li>
                <li>Developed a data visualization web application, improving customer service analytics.</li>
                <li>Mentored junior engineers on Agile methodologies, ensuring project completion on time.</li>
              </ul>
            </div>

          </div>
        </section>
    );
  }

  export default Experience;