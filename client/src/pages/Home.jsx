import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import UpcomingProject from '../components/UpcomingProject';
import SubscriptionModel from '../components/SubscriptionModel';

const Home = () => {
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
    <main className="home">
      <div className="page-background">
        <div className="noise-overlay"></div>
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Projects />
      <UpcomingProject />
      <SubscriptionModel />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
