import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <section id="about" className="flex flex-col gap-8 items-center sm:items-start">
          <Image
            className="rounded-full"
            src="/Profile.jpg"
            alt="Srikar Sistla"
            width={300}
            height={300}
            priority
          />
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">
            I'm Srikar Sistla, a passionate Data / Business Analyst based in Halethorpe, MD. With a strong background in Information Systems and Computer Science, I bring a unique blend of analytical skills and technical expertise to the table. My experience spans software engineering, data analysis, and project management, allowing me to approach problems from multiple angles. I'm particularly adept at leveraging technologies like Power BI, Python, and React.js to drive business growth and optimize processes. Whether it's developing AI platforms, creating data visualization tools, or managing cross-functional teams, I'm committed to delivering innovative solutions that make a real impact.          
          </p>
        </section>
    );
  }
  
  export default About;