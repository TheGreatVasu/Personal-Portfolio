import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
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
    <main className="contact-page">
      <div className="page-background">
        <div className="noise-overlay"></div>
        <div className="gradient-overlay"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactPage; 