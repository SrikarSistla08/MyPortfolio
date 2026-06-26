import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, period, description, technologies }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card group"
  >
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 dark:text-slate-900 group-hover:text-blue-400 transition-colors duration-300">
            {role}
          </h3>
          <p className="text-blue-400 dark:text-blue-600 font-medium text-lg mt-2">{company}</p>
        </div>
        <p className="text-slate-400 dark:text-slate-600 mt-2 md:mt-0 font-medium">{period}</p>
      </div>
      <ul className="space-y-3 mb-6 text-slate-300 dark:text-slate-700">
        {description.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start group"
          >
            <span className="mr-3 mt-1.5 text-blue-400 dark:text-blue-600">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="group-hover:text-slate-100 dark:group-hover:text-slate-900 transition-colors duration-300">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
      {technologies && (
        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 bg-slate-700/30 dark:bg-slate-300/30 text-slate-300 dark:text-slate-700 rounded-full text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "TANTVSTUDIOS",
      period: "11/2024-Present",
      description: [
        "Developed an interactive business intelligence dashboard using ReactJs, NextJs, and Power BI.",
        "Integrated REST APIs & GraphQL for real-time data exchange, increasing performance by 40%.",
        "Implemented PostgreSQL CRUD operations for efficient data retrieval and updates.",
        "Deployed Power BI reports using AWS Lambda & S3, automating daily business insights.",
        "Optimized page load speed, improving frontend performance by 30%."
      ],
      technologies: ["React", "Next.js", "GraphQL", "PostgreSQL", "AWS", "Power BI"]
    },
    {
      role: "Front End Developer Intern",
      company: "Valhalla Data Systems",
      period: "10/2024-11/2024",
      description: [
        "Designed and launched a Full Stack education website Olademy, enhancing Maryland High School education access and enabling free education from top-tier universities.",
        "Revamped design tools and processes, leading to an 80% increase in annual revenue.",
        "Utilized PHP, HTML, CSS, and Linux OS for seamless integration and development."
      ],
      technologies: ["PHP", "HTML", "CSS", "Linux", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 mb-12 text-gradient"
      >
        Professional Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <ExperienceItem {...experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;