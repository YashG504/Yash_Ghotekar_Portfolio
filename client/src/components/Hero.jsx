import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Hero = () => {
  const { name, role, contact, socialLinks } = resumeData;

  const orbitingIcons = [
    { Icon: FaReact, color: '#61DAFB', delay: 0 },
    { Icon: FaNodeJs, color: '#339933', delay: 1.5 },
    { Icon: SiTailwindcss, color: '#38B2AC', delay: 3 },
    { Icon: SiMongodb, color: '#47A248', delay: 4.5 },
  ];

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20 overflow-hidden relative">
      {/* Background Particles/blobs for dynamic feel */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] -z-1"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-1"
      />

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10 md:gap-20 z-10 relative">

        <div className="flex flex-col justify-center h-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-7xl font-bold text-white whitespace-nowrap"
          >
            Hello, I'm <br />
            <span className="text-primary block mt-2 text-5xl sm:text-7xl whitespace-nowrap drop-shadow-lg glow-text">{name}</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-bold text-gray-400 mt-4 flex items-center whitespace-nowrap"
          >
            And I am a&nbsp;
            <span className="text-accent">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Web Developer',
                  2000,
                  'Tech Enthusiast',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 py-4 max-w-md"
          >
            I am a passionate developer from {resumeData.location}.
            I love to build responsive and feature-rich websites that provide intuitive user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='flex gap-4'
          >
            <a
              href="https://wa.me/918459454322?text=Hey%20Yash,%20I%20want%20to%20hire%20you."
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-blue-500 cursor-pointer hover:scale-110 duration-300 shadow-lg shadow-blue-500/50 relative overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="/assets/Yash_Ghotekar.pdf" download={true} className="group text-primary w-fit px-6 py-3 my-2 flex items-center rounded-md border border-primary cursor-pointer hover:bg-primary hover:text-white duration-300 shadow-md hover:shadow-primary/50">
              Download CV
            </a>
          </motion.div>

          <div className="flex mt-8 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                href={link.url}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent duration-300 text-2xl transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>

        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative group">
          {/* Background Blob - Fades in first */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-primary/40 to-purple-500/40 rounded-full blur-3xl animate-pulse"
          ></motion.div>

          {/* Rotating Border Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-gray-600/50 z-0"
          >
          </motion.div>

          {/* Orbiting Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full z-0 pointer-events-none"
          >
            {orbitingIcons.map((item, index) => (
              <div
                key={index}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${index * 90}deg) translateY(-50%)`,
                  transformOrigin: '0 50%' // Keeps them upright if we counter-rotate, but simple orbiting is fine for now. 
                  // Actually, to orbit properly, we rotate the container.
                  // To keep icons upright, we would need to counter-rotate them. 
                  // Easier approach: Just place them at positions.
                }}
              >
                <div
                  className="bg-gray-800 p-3 rounded-full border border-gray-600 shadow-lg text-2xl"
                  style={{
                    transform: `rotate(${index * 90}deg) translateY(-140px) rotate(-${index * 90}deg)`, // Adjust radius manually 
                    // This css transform approach is tricky with dynamic container rotation.
                    // Let's simplify: Just position them absolutely on the ring and let the ring rotate.
                  }}
                >
                  {/* Correcting the orbit logic: 
                                The outer container rotates. 
                                We place items at 0, 90, 180, 270 degrees.
                                The items will rotate with the container. 
                                To keep them upright, we can animate their rotation in reverse.
                             */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ color: item.color }}
                  >
                    <item.Icon />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Hardcoded positions for Orbiting icons - simpler approach */}
          {/* Actually, let's stick to the rotating container above, but I need to position the children correctly.
                The previous loop logic was a bit messy. Let's fix it.
            */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] md:w-[450px] md:h-[450px] rounded-full z-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 p-3 rounded-full shadow-lg shadow-blue-500/20">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="text-[#61DAFB] text-2xl"><FaReact /></motion.div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-900 border border-gray-700 p-3 rounded-full shadow-lg shadow-green-500/20">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="text-[#339933] text-2xl"><FaNodeJs /></motion.div>
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 p-3 rounded-full shadow-lg shadow-cyan-500/20">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="text-[#38B2AC] text-2xl"><SiTailwindcss /></motion.div>
            </div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 p-3 rounded-full shadow-lg shadow-green-600/20">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="text-[#47A248] text-2xl"><SiMongodb /></motion.div>
            </div>
          </motion.div>


          {/* Border Circle - Static or Pulse */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/50 flex items-center justify-center p-2 backdrop-blur-sm bg-white/5"
          >
            {/* Photo - Floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [-10, 10, -10]
              }}
              transition={{
                opacity: { delay: 0.6, duration: 0.5 },
                scale: { delay: 0.6, duration: 0.5 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="w-full h-full rounded-full overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="/assets/profile.png"
                alt="my profile"
                className="w-full h-full object-cover scale-110 hover:scale-125 duration-500 transaction-transform"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
