import React from 'react';
import Link from 'next/link';
import { projectsData } from './Projects/projects';

const ProjectsShowcase: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3); // Display only the first 3 projects

  return (
    <section className="mb-12">
      <h2 className="text-3xl mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <div key={index} className="bg-zinc-800 rounded shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
      <div className="mt-8 text-center">
        <Link href="/projects" className="inline-block bg-slate-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;