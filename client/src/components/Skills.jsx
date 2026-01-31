import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Skills = () => {
  const { skills } = resumeData.sections;

  // Flatten the skills object for display or keep categorized
  // The resume separates them, so categorized is better.

  const categories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks & Libs", items: skills.frameworks },
    { title: "Tools & Platforms", items: skills.tools },
    { title: "Databases & Core", items: [...skills.databases, ...skills.core, ...skills.ml] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0"
        >
          {categories.map((cat, index) => (
            <motion.div key={index} variants={item} className="glass-card p-6 shadow-md hover:scale-105 duration-500">
              <h3 className="text-2xl font-bold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 text-sm md:text-md bg-gray-700 rounded-full text-gray-200 border border-gray-600 hover:border-accent hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
