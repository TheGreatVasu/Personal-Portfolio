import React from 'react';
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
