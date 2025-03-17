"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import tempHeader from "../tempHeader";

export const projectsData = [
  {
    title: "Applications of Big Data in Social Media",
    type: "Research",
    description: "A study on how big data is applied in social media platforms.",
    link: "https://ijsrem.com/download/applications-of-big-data-in-social-media/",
    tags: ["Big Data", "Social Media", "Analytics"]
  },
  {
    title: "Prediction of Diabetes using SVM and Machine Learning",
    type: "Research",
    description: "A project showcased in the International Journal of Soft Computing and Engineering.",
    link: "https://www.ijsce.org/portfolio-item/b35570512222/",
    tags: ["Machine Learning", "SVM", "Healthcare"]
  },
  // Add more projects, certifications, and awards here
];

const ProjectItem = ({ title, type, description, link, tags }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5 }}
    className="project-card bg-neutral-800 border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-800/30 transition duration-300"
  >
    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-sm font-semibold text-blue-400 mb-3">{type}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <Link href={link} target="_blank" rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
      Learn More
    </Link>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    const filtered = projectsData.filter(item => 
      (filter === "All" || item.type === filter) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 sm:p-20 tracking-wide font-['rajdhani'] bg-gradient-to-br from-gray-900 to-black"
    >
      <Link href="/" className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-200">
        {tempHeader()}
      </Link>
      <div className="mt-12 mb-8">
        <h2 className="text-6xl mb-4 text-white">Projects & Achievements</h2>
        <p className="text-xl text-gray-400">Explore my work and accomplishments</p>
      </div>
      <div className="mb-8 flex flex-wrap gap-4 items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          <option value="All">All</option>
          <option value="Project">Projects</option>
          <option value="Certification">Certifications</option>
          <option value="Award">Awards</option>
          <option value="Research">Research</option>
        </select>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        />
      </div>
      <AnimatePresence>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
};

export default Projects;
