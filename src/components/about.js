
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="flex flex-col items-center sm:items-start gap-8 px-6 py-12 bg-gradient-to-b from-slate-950 to-gray-900 rounded-2xl shadow-lg">
            {/* Profile Image with Animation */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
            >
                <Image
                    className="rounded-full"
                    src="/Profile.jpg"
                    alt="Srikar Sistla"
                    width={250}
                    height={250}
                    priority
                />
            </motion.div>

            {/* Title with Icon */}
            <div className="flex items-center gap-4">
                <motion.svg 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-8 text-blue-400"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </motion.svg>
                <h2 className="text-4xl font-semibold text-white hover:text-blue-400 transition duration-300">Who Am I?</h2>
            </div>

            {/* Description with Fade-in Effect */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-lg sm:text-justify text-gray-300 font-light leading-relaxed max-w-2xl"
            >
                Hello! 👋 I&apos;m <span className="text-blue-400 font-medium">Srikar Sistla</span>, a passionate <strong>Data / Business Analyst</strong> based in Halethorpe, MD. With a strong background in Information Systems and Computer Science, I bring a unique blend of analytical skills and technical expertise to the table. My experience spans <span className="text-blue-400">software engineering, data analysis, and project management</span>, allowing me to approach problems from multiple angles.
                <br /><br />
                I&apos;m particularly adept at leveraging <strong>Power BI, Python, and React.js</strong> to drive business growth and optimize processes. Whether it&apos;s developing AI platforms, creating data visualization tools, or managing cross-functional teams, I&apos;m committed to delivering innovative solutions that make a real impact.
                <br /><br />
                Let&apos;s connect! 🚀
            </motion.p>

            {/* Download Resume Button
            <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-lg shadow-md hover:bg-blue-500 transition duration-300"
            >
                Download Resume
            </motion.a> */}
            <div className="mt-8">
                <a
                    href="/Resume.pdf"
                    download
                    className="bg-slate-900 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-blue-700 transition-colors duration-300 tracking-wide"
                >
                Download Resume
                </a>
            </div>
        </section>
    );
}

export default About;
