import React, { useEffect } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      offset: 100,
      delay: 100
    });
  }, []);

  return (
    <main className="about-page">
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Footer />
    </main>
  );
};

export default AboutPage; 