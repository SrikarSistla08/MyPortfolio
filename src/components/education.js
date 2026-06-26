import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EducationItem = ({ school, period, major, logo, alt }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card group hover:scale-[1.02] transition-transform duration-300"
  >
    <div className="p-8 flex items-start gap-6">
      <div className="relative w-20 h-20 flex-shrink-0 bg-slate-700/30 dark:bg-slate-300/30 rounded-xl p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
        <Image
          src={`/${logo}`}
          alt={alt}
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-900 mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {school}
        </h3>
        <p className="text-blue-400 dark:text-blue-600 font-medium text-lg mb-2">{period}</p>
        <p className="text-slate-300 dark:text-slate-700 leading-relaxed">
          Major: {major}
        </p>
      </div>
    </div>
  </motion.div>
);

function Education() {
  const educationData = [
    {
      school: "University of Maryland at Baltimore County, Maryland",
      period: "2023-2025",
      major: "Information Systems",
      logo: "UMBC.png",
      alt: "University of Maryland at Baltimore County, Maryland"
    },
    {
      school: "SCSVMV University, Kanchipuram, India",
      period: "2019-2023",
      major: "Computer Science",
      logo: "SCSVMV.png",
      alt: "SCSVMV University, Kanchipuram, India"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 mb-12 text-gradient"
      >
        Education
      </motion.h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <EducationItem {...education} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;