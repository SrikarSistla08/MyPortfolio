import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
  <motion.div
    className="glass-card group overflow-hidden"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-8 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-900 mb-4 group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-300 dark:text-slate-700 mb-6 flex-grow">
        {description}
      </p>
      <Link 
        href={link} 
        className="inline-flex items-center text-blue-400 dark:text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300"
      >
        Learn more
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </motion.div>
);

const ProjectsShowcase: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Applications of Big Data in Social Media",
      description: "A study on how big data is applied in social media platforms. This article looks at how big data can be used to analyze social media participation and then, with artificial intelligence, take the analysis further. Social media analysis is one of the most popular areas where big data is being used in today's businesses.",
      link: "/projects/big-data-social-media"
    },
    {
      title: "Prediction of Diabetes using SVM and Machine Learning",
      description: "A project showcased in the International Journal of Soft Computing and Engineering. Developed an SVM model to predict diabetes, achieving almost 86% accuracy. Cleaned and preprocessed healthcare data using Pandas for feature engineering.",
      link: "/projects/diabetes-prediction"
    },
    {
      title: "A Genetic Algorithm to Predict Student Success",
      description: "A genetic algorithm implementation for predicting student academic progress. The GA was run with multiple generations. Achieved 90% accuracy rates for prediction.",
      link: "/projects/student-success-prediction"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 mb-12 text-gradient"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link 
          href="/projects"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectsShowcase;

