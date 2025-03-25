import React from "react";

function Experience() {
    return (
      <section id="experience" className="flex flex-col gap-8 tracking-wide mb-8 sm:items-start gap-8 px-6 py-12 bg-gradient-to-b from-slate-950 to-gray-900 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        <h2 className="text-3xl font-Italiana hover:text-stone-400 transition duration-200">What have I done?</h2>
        </div>
        <div className="space-y-8 text lg">
        <div className="p-6 bg-zinc-800 rounded shadow-md overflow-hidden rounded-2xl shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold">Software Engineer Intern | TANTVSTUDIOS</h3>
          <p className="text-sm text-gray-600"><strong className="text-blue-400">11/2024-Present</strong></p>
          <ul className="list-disc list-inside mt-2">
          <li>Developed an interactive business intelligence dashboard using <strong className="text-blue-400">React.js, Next.js, and Power BI.</strong></li>
          <li>Integrated REST APIs & GraphQL for real-time data exchange, increasing performance by 40%.</li>
          <li>Implemented PostgreSQL CRUD operations for efficient data retrieval and updates.</li>
          <li>Deployed Power BI reports using AWS Lambda & S3, <strong className="text-blue-400">automating daily business insights.</strong> </li>
          <li>Optimized page load speed, improving frontend performance by 30%.</li>
          </ul>
          <a href="https://syndex.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learn more</a>
        </div>

        <div className="p-6 bg-zinc-800 rounded shadow-md overflow-hidden rounded-2xl shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold">Front End Developer Intern | Valhalla Data Systems</h3>
          <p className="text-sm text-gray-600"><strong className="text-blue-400">10/2024-11/2024</strong></p>
          <ul className="list-disc list-inside mt-2">
          <li>Designed and launched a Full Stack education website, <strong className="text-blue-400">Olademy</strong>, enhancing Maryland High School education access and enabling <strong className="text-blue-400">free education from top-tier universities.</strong></li>
          <li>Revamped design tools and processes, leading to an 80% increase in annual revenue.</li>
          <li>Utilized PHP, HTML, CSS, and Linux OS for seamless integration and development.</li>
          </ul>
          <a href="https://olademy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learn more</a>
        </div>

        <div className="p-6 bg-zinc-800 rounded shadow-md overflow-hidden rounded-2xl shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold">IT Project Manager | Santa&apos;s Knights</h3>
          <p className="text-sm text-gray-600"><strong className="text-blue-400">08/2024-10/2024</strong></p>
          <ul className="list-disc list-inside mt-2">
          <li>Led the project <strong className="text-blue-400">&quot;Equisym&quot;</strong> by applying business operation principles for a successful launch.</li>
          <li>Managed cross-functional teams, reducing project delays by 25% through improved collaboration.</li>
          <li>Used Power BI and Excel to create business intelligence reports for growth analysis.</li>
          <li>Implemented Agile methodologies, enhancing team productivity and project delivery.</li>
          <li>Conducted risk assessments and developed mitigation strategies to ensure project success.</li>
          <li>Facilitated stakeholder meetings to align project goals with business objectives.</li>
          <li>Utilized <strong className="text-blue-400">Agile Scrum, Kanban</strong> and <strong className="text-blue-400"> other project management tools (Jira, Trello)</strong> to track progress and manage tasks.</li>
          <li>Developed and maintained project documentation, ensuring transparency and accountability.</li>
          </ul>
          <a href="https://www.santasknights.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learn more</a>
        </div>

        <div className="p-6 bg-zinc-800 rounded shadow-md overflow-hidden rounded-2xl shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold">Data Analyst Intern | Expand AI</h3>
          <p className="text-sm text-gray-600"><strong className="text-blue-400">09/2021-02/2022</strong></p>
          <ul className="list-disc list-inside mt-2">
          <li>Developed an ETL pipeline for data preprocessing and transformation using SQL and Python.</li>
          <li>Built an interactive Power BI dashboard, integrating with a Flask API for real-time business insights.</li>
          <li>Implemented web scraping scripts (BeautifulSoup, Scrapy) to extract external business intelligence data.</li>
          <li><strong className="text-blue-400">Automated data extraction & storage using AWS Lambda & RDS.</strong>  </li>
          <li>Enhanced CI/CD pipeline for API deployments using GitHub Actions & Jenkins.</li>
          <li>Used Power BI, Excel and other visulization tools to create business intelligence reports for growth analysis.</li>
          </ul>
          <a href="https://www.linkedin.com/company/expand-ai/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learn more</a>
        </div>

        </div>
      </section>
    );
  }

  export default Experience;

// import React from "react";
// import { motion } from "framer-motion";

// function Experience() {
//     const experienceItems = [
//         {
//             title: "Software Engineer Intern",
//             company: "TANTVSTUDIOS",
//             period: "11/2024-Present",
//             details: [
//                 "Developed an interactive business intelligence dashboard using React.js, Next.js, and Power BI.",
//                 "Integrated REST APIs & GraphQL for real-time data exchange, increasing performance by 40%.",
//                 "Implemented PostgreSQL CRUD operations for efficient data retrieval and updates.",
//                 "Deployed Power BI reports using AWS Lambda & S3, automating daily business insights.",
//                 "Optimized page load speed, improving frontend performance by 30%."
//             ]
//         },
//         {
//             title: "Front End Developer Intern",
//             company: "Valhalla Data Systems",
//             period: "10/2024-11/2024",
//             details: [
//                 "Designed and launched a Full Stack education website, Olademy, enhancing Maryland High School education access and enabling free education from top-tier universities.",
//                 "Revamped design tools and processes, leading to an 80% increase in annual revenue.",
//                 "Utilized PHP, HTML, CSS, and Linux OS for seamless integration and development."
//             ]
//         },
//         {
//             title: "IT Project Manager",
//             company: "Santa's Knights",
//             period: "08/2024-10/2024",
//             details: [
//                 "Led the project 'Equisym' by applying business operation principles for a successful launch.",
//                 "Managed cross-functional teams, reducing project delays by 25% through improved collaboration.",
//                 "Used Power BI and Excel to create business intelligence reports for growth analysis."
//             ]
//         },
//         {
//             title: "Data Analyst Intern",
//             company: "Expand AI",
//             period: "09/2021-02/2022",
//             details: [
//                 "Developed an ETL pipeline for data preprocessing and transformation using SQL and Python.",
//                 "Built an interactive Power BI dashboard, integrating with a Flask API for real-time business insights.",
//                 "Implemented web scraping scripts (BeautifulSoup, Scrapy and selenium) to extract external business intelligence data.",
//                 "Automated data extraction & storage using AWS Lambda & RDS.",
//                 "Enhanced CI/CD pipeline for API deployments using GitHub Actions & Jenkins."
//             ]
//         }
//     ];

//     return (
//         <section id="experience" className="flex flex-col gap-8 tracking-wide mb-8 sm:items-start px-6 py-12 bg-gradient-to-b from-slate-950 to-gray-900 rounded-2xl shadow-lg">
//             <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex items-center gap-4"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
//                 </svg>
//                 <h2 className="text-3xl font-Italiana hover:text-stone-400 transition duration-200">What have I done?</h2>
//             </motion.div>
//             <div className="space-y-8 text-lg">
//                 {experienceItems.map((item, index) => (
//                     <motion.div 
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         className="bg-zinc-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <h3 className="text-xl font-semibold text-blue-400">{item.title} | {item.company}</h3>
//                         <p className="text-sm text-gray-400 mb-3">{item.period}</p>
//                         <ul className="list-none space-y-2">
//                             {item.details.map((detail, detailIndex) => (
//                                 <motion.li 
//                                     key={detailIndex}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.05) }}
//                                     className="flex items-start"
//                                 >
//                                     <span className="text-blue-500 mr-2">•</span>
//                                     {detail}
//                                 </motion.li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Experience;