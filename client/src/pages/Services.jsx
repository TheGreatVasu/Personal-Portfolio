import React, { useEffect } from 'react';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
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
    <main className="services-page">
      <div className="page-background">
        <div className="noise-overlay"></div>
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <Services />
      <Footer />
    </main>
  );
};

export default ServicesPage; 