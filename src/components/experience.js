import React from "react";

function Experience() {
    return (
        <section id="experience" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
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
              <h3 className="text-xl font-semibold">IT Project Manager | Santas knights</h3>
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
                <li>Maintained an efficient ML pipeline using data integration, API Integration, improved projects efficiency to 70%</li>
                <li>Developed a data visualization web application, improving customer service analytics.</li>
                <li>Mentored junior engineers on Agile methodologies, ensuring project completion on time.</li>
              </ul>
            </div>

          </div>
        </section>
    );
  }

  export default Experience;