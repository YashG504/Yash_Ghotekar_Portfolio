import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const About = () => {
  const { sections } = resumeData;

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          </div>

          <p className="text-xl mt-10 text-gray-300 leading-relaxed">
            I am a final year B.Tech student at {sections.education[0].institution}, specializing in {sections.education[0].degree}.
            with a strong foundation in Computer Science principles and full-stack development.
            I have consistent academic performance with {sections.education[0].score}.
          </p>

          <br />

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {sections.education.map((edu, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-accent hover:scale-105 duration-300">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="font-bold text-lg">{edu.institution}</h4>
                    <span className="text-gray-400">{edu.period}</span>
                  </div>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-accent font-semibold">{edu.score}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
