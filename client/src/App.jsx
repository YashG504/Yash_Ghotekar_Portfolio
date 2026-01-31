import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Extracurricular from './components/Extracurricular';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Extracurricular />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
