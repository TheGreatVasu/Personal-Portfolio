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
      <Projects />
      <Footer />
    </main>
  );
};

export default ProjectsPage; 