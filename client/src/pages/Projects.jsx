import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsPage = () => {
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
    <main className="projects-page">
      <div className="page-background">
        <div className="noise-overlay"></div>
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <Projects />
      <Footer />
    </main>
  );
};

export default ProjectsPage; 