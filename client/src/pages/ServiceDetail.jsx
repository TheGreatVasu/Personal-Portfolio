import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceById } from '../utils/servicesData';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = getServiceById(serviceId);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      offset: 100,
      delay: 100
    });
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <main className="service-detail-page">
        <div className="service-detail-container">
          <h1>Service Not Found</h1>
          <Link to="/services" className="back-link">← Back to Services</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <div className="service-detail-container">
        <Link to="/services" className="back-link" data-aos="fade-up">
          ← Back to Services
        </Link>

        <div className="service-detail-header" data-aos="fade-up">
          <div className="service-detail-icon">
            {service.icon}
          </div>
          <h1 className="service-detail-title">{service.title}</h1>
          <p className="service-detail-subtitle">{service.description}</p>
        </div>

        <div className="service-detail-content">
          <div className="service-detail-section" data-aos="fade-up">
            <h2 className="section-heading">Overview</h2>
            <p className="service-full-description">{service.fullDescription}</p>
          </div>

          <div className="service-detail-section" data-aos="fade-up">
            <h2 className="section-heading">What's Included</h2>
            <ul className="service-features-list">
              {service.features.map((feature, index) => (
                <li key={index} className="feature-list-item">
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-detail-section" data-aos="fade-up">
            <h2 className="section-heading">Technologies & Tools</h2>
            <div className="technologies-grid">
              {service.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="service-detail-section" data-aos="fade-up">
            <h2 className="section-heading">Benefits</h2>
            <ul className="benefits-list">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <span className="benefit-icon">★</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="service-detail-cta" data-aos="fade-up">
            <h2 className="cta-heading">Ready to Get Started?</h2>
            <p className="cta-text">Let's discuss how I can help bring your project to life.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ServiceDetail;

