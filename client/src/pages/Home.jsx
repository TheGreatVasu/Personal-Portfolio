import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
// Removed UpcomingProject import

const Home = () => {
  useEffect(() => {
    // Initialize AOS with settings that prevent conflicts
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      offset: 100,
      delay: 100,
      disable: false,
      // Prevent AOS from affecting hero section
      useClassNames: false,
      disableMutationObserver: false
    });
    
    // Refresh AOS after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 200);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="home">
      <div className="page-background">
        <div className="noise-overlay"></div>
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      {/* Removed UpcomingProject component */}
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
