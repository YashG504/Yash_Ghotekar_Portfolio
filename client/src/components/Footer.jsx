import React from 'react';
import { resumeData } from '../data/resume';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { socialLinks, name } = resumeData;
  return (
    <div className="w-full bg-black text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-6 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-125 duration-300 text-xl">
              <link.icon />
            </a>
          ))}
        </div>
        <p className="text-sm flex items-center gap-1">
          Made with <FaHeart className="text-red-500 animate-pulse" /> by {name}
        </p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
