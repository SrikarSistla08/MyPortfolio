import React from 'react';

function Skills() {
    return (
        <section id="skills" className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Skills & Abilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data Analytics & BI: Power BI, Excel, SQL (MySQL, PostgreSQL)</li>
            <li>Programming & Machine Learning: Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), R</li>
            <li>Frontend Development: React.js, Next.js, JavaScript, HTML, CSS, Tailwind</li>
            <li>Tools: Jupyter Notebook, Git, GitHub, Trello, Jira</li>
          </ul>
        </section>
    );
  }
  
  export default Skills;