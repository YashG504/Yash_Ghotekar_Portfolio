import React from 'react';
import { resumeData } from '../data/resume';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const { experience } = resumeData.sections;
  const expData = experience;

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
            <p className="py-6">Experience & Internships</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {expData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-4 glass-card p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="md:w-1/4 flex flex-col items-center md:items-start border-l-4 border-primary pl-4">
                {item.logo && (
                  <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center p-1">
                    <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                  </div>
                )}
                <h3 className="font-bold text-xl">{item.role}</h3>
                <span className="text-gray-400 text-sm">{item.period}</span>
                <span className="text-primary font-semibold mt-2">{item.company}</span>
                <span className="text-gray-500 text-sm italic">{item.location}</span>
              </div>
              <div className="md:w-3/4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="text-sm md:text-base leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
