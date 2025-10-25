// import React from 'react';
// import { motion } from 'framer-motion';

// function Skills() {
//     const skills = [
//         { category: "Data Analytics & BI", details: "Power BI, Excel, SQL (MySQL, PostgreSQL)" },
//         { category: "Programming & Machine Learning", details: "Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), R" },
//         { category: "Frontend Development", details: "React.js, Next.js, JavaScript, HTML, CSS, Tailwind" },
//         { category: "Tools", details: "Jupyter Notebook, Git, GitHub, Trello, Jira" },
//     ];

//     return (
//         <section id="skills" className="flex flex-col gap-8">
//             <div className="flex items-center gap-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
//                 </svg>
//                 <h2 className="text-3xl hover:text-stone-400 transition duration-200">Skills & Abilities</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {skills.map((skill, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 100 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, ease: "easeInOut" }}
//                         className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                     >
//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.category}</h3>
//                         <p className="text-gray-800 mb-2">{skill.category}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaCode, FaLaptopCode, FaTools } from 'react-icons/fa';

function Skills() {
    const skills = [
        { category: "Data Analytics & BI", details: "Power BI, Excel, SQL (MySQL, PostgreSQL)", icon: <FaChartBar /> },
        { category: "Programming & Machine Learning", details: "Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), R", icon: <FaCode /> },
        { category: "Frontend Development", details: "React.js, Next.js, JavaScript, HTML, CSS, Tailwind", icon: <FaLaptopCode /> },
        { category: "Tools", details: "Jupyter Notebook, Git, GitHub, Trello, Jira", icon: <FaTools /> },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <motion.div
                        initial={{ rotate: -20, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-400 dark:text-blue-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 text-gradient">
                        Skills & Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card group hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="p-8 flex items-start gap-6">
                                <div className="text-3xl text-blue-400 dark:text-blue-600 transform group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-900 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                        {skill.category}
                                    </h3>
                                    <p className="text-slate-300 dark:text-slate-700 leading-relaxed">
                                        {skill.details}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
