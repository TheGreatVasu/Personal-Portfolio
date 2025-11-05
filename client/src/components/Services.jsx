import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../utils/servicesData';
import '../styles/Services.css';

const Services = () => {
  const servicesGridRef = useRef(null);

  // Prevent AOS from causing content shifting
  useEffect(() => {
    if (servicesGridRef.current && typeof window !== 'undefined' && window.AOS) {
      // Ensure AOS initializes properly without causing layout shifts
      const timer = setTimeout(() => {
        if (window.AOS) {
          window.AOS.refresh();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">Services</h2>
          <h3 className="section-subtitle">Four core offerings to build and scale your product</h3>
          <p className="section-description">
            From concept to deployment, I deliver end-to-end solutions that drive growth and innovation.
          </p>
        </div>

        <div className="services-grid" ref={servicesGridRef}>
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-card-content">
                <div className="service-icon">
                  {service.icon}
                  <div className="icon-background"></div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-link-indicator">
                  <span>Learn More →</span>
                </div>
              </div>
              <div className="service-hover-effect"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
