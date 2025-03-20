import React from 'react';
import Link from 'next/link';
import { projectsData } from './Projects/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectsShowcase: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3); // Display only the first 3 projects

  // const getProjectIcon = (index: number) => {
  //   switch (index) {
  //     case 0:
  //       return faCode;
  //     case 1:
  //       return faLaptopCode;
  //     case 2:
  //       return faMobileAlt;
  //     default:
  //       return faCode;
  //   }
  // };

  return (
    <section className="mb-12 container bg-gradient-to-br from-slate-900 to-gray-950 p-8 rounded-2xl shadow-lg shadow-blue-800/30">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faCode} className=" text-white-500 text-2xl mr-3" />
        <h2 className="text-3xl">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <div key={index} className="bg-zinc-800 rounded shadow-md overflow-hidden rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-800/30 transition duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-white-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/projects" className="inline-block bg-slate-900 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 transition-colors duration-300 tracking-wide">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

