import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
    const skills = [
        { category: "Data Analytics & BI", details: "Power BI, Excel, SQL (MySQL, PostgreSQL)" },
        { category: "Programming & Machine Learning", details: "Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), R" },
        { category: "Frontend Development", details: "React.js, Next.js, JavaScript, HTML, CSS, Tailwind" },
        { category: "Tools", details: "Jupyter Notebook, Git, GitHub, Trello, Jira" },
    ];

    return (
        <section id="skills" className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                <h2 className="text-3xl hover:text-stone-400 transition duration-200">Skills & Abilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.category}</h3>
                        <p className="text-gray-800 mb-2">{skill.category}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;

