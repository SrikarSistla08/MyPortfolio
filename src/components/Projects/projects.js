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
  <div className="bg-slate-500 shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-all duration-200">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{type}</p>
    <p className="text-gray-700 mb-4">{description}</p>
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
        <main className="min-h-screen p-8 sm:p-20">
            <Link href="/" className="text-2xl font-bold hover:text-stone-500 transition-colors duration-200">
                {tempHeader()}
            </Link>
            <div className="experience-container justify-between items-center grid justify-center items-center flex-col w-full h-full p-4">
            <h2 className="text-5xl font-bold mb-8 text-white text-left font-bold old-standard-tt-regular-italic hover:animate-pulse duration-200">Projects</h2>
            <div className="mb-4 bg-slate-800 p-4 rounded-lg shadow-inner">
                <label htmlFor="filter" className="mr-4 text-white font-semibold">Filter by:</label>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {filteredProjects.map((item, index) => (
                <ProjectItem key={index} {...item} />
                ))}
            </div>
            </div>
        </main>
      );
};

export default Projects;