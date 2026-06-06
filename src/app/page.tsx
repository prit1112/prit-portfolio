"use client";

import AboutComponent from '../components/About';

import Contact from '../components/Contact';
import Education from '../components/Education';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';


export default function Page() {
  return (
    <div>
      <Hero />
      <AboutComponent />

      <Skills />
      <Projects />
      <Resume />
      <Education />
      <Contact />
    </div>
  );
}



