"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Geeky Terminal Navigation
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-green-400 font-mono text-sm">
              srikar@portfolio:~$
            </span>
          </Link>
          <Link 
            href="/" 
            className="text-sm font-mono text-green-400 hover:text-white transition-colors"
          >
            {'<'} cd ../
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Projects Section with Real Data
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ml", name: "Machine Learning" },
    { id: "research", name: "Research" },
    { id: "data", name: "Data Analysis" }
  ];

  const projects = [
    {
      id: 1,
      title: "Post-Pandemic MTA Ridership Analysis",
      description: "Comprehensive data-driven analysis of NYC MTA ridership recovery post-COVID with forecasting models using SQL, Power BI, and DAX. Analyzes structural shifts in commuting patterns and quantifies recovery gaps.",
      category: "data",
      technologies: ["SQL", "Power BI", "DAX", "Data Analysis", "Forecasting", "SQLite"],
      link: "https://github.com/SrikarSistla08/Post-Pandemic-MTA-Ridership-A-Data-Driven-Gap-Analysis-Forecasting",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "UG Admin Dashboard",
      description: "Full-stack admin dashboard for student management with Firebase integration, real-time data, and comprehensive analytics. Features role-based access, student tracking, and communication management.",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "React", "Vercel"],
      link: "https://github.com/SrikarSistla08/ug-admin-dashboard",
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Drug-Induced Auto-Immunity Prediction",
      description: "Ensemble machine learning model for predicting drug-induced auto-immunity using advanced ML algorithms. Research project focusing on healthcare applications of machine learning.",
      category: "ml",
      technologies: ["Python", "Machine Learning", "Ensemble Methods", "Scikit-learn", "Pandas", "NumPy"],
      link: "https://github.com/SrikarSistla08/Prediction-of-Drug-Induced-Auto-Immunity-Using-Ensemble-Machine-Learning",
      status: "Research",
      year: "2024"
    },
    {
      id: 4,
      title: "Farmer Basket E-Commerce",
      description: "Full-stack e-commerce platform for farmers to sell produce directly to consumers with payment integration. Features user authentication, product management, and secure payments.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "JWT"],
      link: "https://github.com/SrikarSistla08/farmer-basket",
      status: "Completed",
      year: "2023"
    },
    {
      id: 5,
      title: "Diabetes Prediction Using SVM",
      description: "Machine learning model using Support Vector Machine to predict diabetes with 80% accuracy. Published research paper in IJSCE journal with comprehensive analysis.",
      category: "ml",
      technologies: ["Python", "SVM", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      link: "https://github.com/SrikarSistla08/Predicting-Diabetes-Using-SVM",
      status: "Published",
      year: "2024"
    },
    {
      id: 6,
      title: "Revenue Case Study",
      description: "Comprehensive business case study analyzing revenue optimization strategies and market trends. Includes data analysis, visualization, and strategic recommendations.",
      category: "data",
      technologies: ["Data Analysis", "Business Intelligence", "Excel", "Power BI", "Statistics", "SQL"],
      link: "https://github.com/SrikarSistla08/Case-Study-on-Revenue",
      status: "Completed",
      year: "2023"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="pt-20 pb-16 bg-black text-green-400">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 font-mono">
            <span className="text-yellow-400">$</span> ls -la projects/
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">PROJECTS</h1>
          <p className="text-lg text-gray-300 font-mono max-w-2xl mx-auto">
            A collection of my development work, data analysis projects, and research
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg border border-gray-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm font-mono transition-colors duration-300 rounded-md ${
                  activeCategory === category.id
                    ? "bg-green-400 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer border border-gray-800 hover:border-green-400 transition-colors duration-200 block"
            >
              <div className="bg-gray-900 p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    project.status === 'Completed' ? 'bg-green-400/20 text-green-400' :
                    project.status === 'Published' ? 'bg-blue-400/20 text-blue-400' :
                    project.status === 'In Progress' ? 'bg-yellow-400/20 text-yellow-400' :
                    'bg-gray-400/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-400/20 text-green-400 text-xs font-mono rounded border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-gray-500">
                    {project.category.toUpperCase()} • {project.year}
                  </div>
                  <span className="text-green-400 group-hover:text-white transition-colors font-mono">
                    {'>'} view repo
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="text-sm text-gray-400 font-mono">
            <span className="text-yellow-400">$</span> find . -name "*.js" -o -name "*.py" | wc -l
          </div>
          <div className="text-green-400 font-mono mt-2">
            {projects.length} projects completed
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 bg-black text-green-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-sm font-mono">
          <span className="text-gray-400">$</span> echo "© {new Date().getFullYear()} Srikar Sistla. All rights reserved."
        </div>
      </div>
    </footer>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navigation />
        <Projects />
      <Footer />
    </div>
  );
}