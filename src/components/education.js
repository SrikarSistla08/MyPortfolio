import React from 'react';

function Education(){
    return (
        <section id="education" className="flex flex-col gap-8 tracking-wide container bg-gradient-to-b from-slate-900 to-gray-950 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <h2 className="text-3xl hover:text-stone-400 transition duration-200">Education</h2>
          </div>
          <div className="space-y-8 text-md">
            <div>
              <img src="UMBC.png" alt="University of Maryland at Baltimore County, Maryland" width="8%" />
              <h3 className="text-xl font-semibold mt-2">University of Maryland at Baltimore County, Maryland</h3>
              <p>2023-2025</p>
              <p>Major: Information Systems</p>
            </div>
            <div>
                <img src="SCSVMV.png" alt="SCSVMV University, Kanchipuram, India" width="5%" />
              <h3 className="text-xl font-semibold mt-2">SCSVMV University, Kanchipuram, India</h3>
              <p>2019-2023</p>
              <p>Major: Computer Science</p>
            </div>
          </div>
        </section>
    );
  }
  export default Education;