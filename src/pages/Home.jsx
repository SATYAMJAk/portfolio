import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickProfile from '../components/QuickProfile';
import About from '../components/About';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import CareerFocus from '../components/CareerFocus';
import Contact from '../components/Contact';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="flex flex-col">
      <Hero />
      <QuickProfile />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <CareerFocus />
      <Contact />
    </div>
  );
};

export default Home;
