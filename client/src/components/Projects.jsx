import React from 'react';
import { resumeData } from '../data/resume';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const { projects } = resumeData.sections;

  return (
    <div name="projects" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check out some of my work</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 glass-card flex flex-col h-full overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover duration-200 hover:scale-110" />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-accent mb-4">{project.tech}</p>

                <ul className="text-gray-400 text-xs list-disc list-inside mb-4 flex-grow space-y-1">
                  {project.points.slice(0, 2).map((pt, i) => (
                    <li key={i}>{pt.substring(0, 80)}...</li>
                  ))}
                </ul>

                <div className="flex items-center justify-center gap-4 mt-auto">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 bg-white text-black font-bold rounded-md flex items-center justify-center gap-2 text-sm">
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.links.code && (
                    <a href={project.links.code} target="_blank" rel="noreferrer" className={`w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-white border border-gray-400 rounded-md flex items-center justify-center gap-2 text-sm ${!project.links.live ? 'w-full' : ''}`}>
                      Code <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
