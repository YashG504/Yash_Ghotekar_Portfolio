import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'experience', label: 'Experience' },
    { id: 5, link: 'extracurricular', label: 'Activities' },
    { id: 6, link: 'projects', label: 'Projects' },
    { id: 7, link: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 text-white fixed z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="hidden md:block">
        <h1 className="text-4xl font-bold font-signature ml-2 cursor-pointer relative group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 group-hover:from-blue-500 group-hover:to-primary transition-all duration-500">
            &lt; Yash Ghotekar /&gt;
          </span>
          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300"></div>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 nav-link group relative"
          >
            <Link to={link} smooth duration={500} className="group-hover:text-white transition-colors duration-300">{label}</Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
        {/* Contact/Resume Button could go here */}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden ml-auto">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white hover:scale-105 duration-200"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
