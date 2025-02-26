"use client";
import React, { useState } from "react";
import Link from "next/link";
import tempHeader from "../tempHeader";

const projectsData = [
  {
    title: "Applications of Big Data in Social Media",
    type: "Project",
    description: "A study on how big data is applied in social media platforms.",
    link: "https://ijsrem.com/download/applications-of-big-data-in-social-media/",
  },
  {
    title: "Prediction of Diabetes using SVM and Machine Learning",
    type: "Project",
    description: "A project showcased in the International Journal of Soft Computing and Engineering.",
    link: "https://www.ijsce.org/portfolio-item/b35570512222/",
  },
  // Add more projects, certifications, and awards here
];

const ProjectItem = ({ title, type, description, link }) => (
<div className="project-card bg-neutral-600 border border-gray-700 hover:bg-slate-800 p-4 rounded-lg hover:shadow-lg hover:shadow-blue-800 transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm font-semibold text-gray-400 mb-2">{type}</p>
    <p className="text-white text-700 mb-4 ">{description}</p>
    <Link href={link} target="_blank" rel="noopener noreferrer" className="text-dark-500 hover:underline">
      Learn More
    </Link>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(item => item.type === filter);

    return (
        <main className="max-h-screen p-8 sm:p-20 tracking-wide font-['rajdhani']">
            <Link href="/" className="text-2xl font-bold hover:text-stone-500 transition-colors duration-200">
              {tempHeader()}
            </Link>
            <div className="experience-container justify-between items-center grid justify-center items-center flex-col w-full h-full p-4">
              <h2 className="text-5xl font-bold mb-8 text-white text-left font-bold hover:animate-pulse duration-1000">Projects </h2>
                <div className="container mb-4 bg-transparent p-4 rounded-lg shadow-inner">
                    <label htmlFor="filter" className="bg-transparent mr-4 text-white font-semibold">Filter by:</label>
                    <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border rounded p-2 bg-slate-700 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
                    >
                    <option value="All">All</option>
                    <option value="Project">Projects</option>
                    <option value="Certification">Certifications</option>
                    <option value="Award">Awards</option>
                    </select>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {filteredProjects.map((item, index) => (
                        <ProjectItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
      );
};

export default Projects;