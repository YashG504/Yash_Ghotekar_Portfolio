import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const Extracurricular = () => {
  // Check if sections.extracurricular exists, if not fall back to empty array
  // In our resume.js structure, we added 'extracurricular' to 'resumeData.sections' or 'resumeData'? 
  // Wait, I added it to 'resumeData.sections' in the previous step? 
  // Let's check the previous tool call.
  // I replaced 'experience: [...]' inside the file. 
  // The 'experience' array is typically inside 'sections' object in 'resumeData' based on previous file reads.
  // So 'extracurricular' should now be a sibling of 'experience' inside 'sections'.

  const { extracurricular } = resumeData.sections;

  if (!extracurricular) return null;

  return (
    <div name="extracurricular" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Extracurricular</p>
            <p className="py-6">Leadership & Involvement</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {extracurricular.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-4 glass-card p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="md:w-1/3 flex flex-col items-start border-l-4 border-accent pl-4">
                <h3 className="font-bold text-xl">{item.role}</h3>
                <span className="text-gray-400 text-sm">{item.period}</span>
                <span className="text-accent font-semibold mt-2">{item.organization}</span>
                <span className="text-gray-500 text-sm italic">{item.location}</span>
              </div>
              <div className="md:w-2/3">
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

export default Extracurricular;
