import React from 'react';

function Skills() {
    return (
        <section id="skills" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <h2 className="text-3xl font-bold hover:text-stone-400 transition duration-200 hover:underline ">Skills & Abilities</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 container text-md">
            <li>Data Analytics & BI: Power BI, Excel, SQL (MySQL, PostgreSQL)</li>
            <li>Programming & Machine Learning: Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), R</li>
            <li>Frontend Development: React.js, Next.js, JavaScript, HTML, CSS, Tailwind</li>
            <li>Tools: Jupyter Notebook, Git, GitHub, Trello, Jira</li>
          </ul>
        </section>
    );
  }
  
  export default Skills;