import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaPalette, FaChartLine, FaCloud } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      description: "Helping businesses create a strong online presence with a user-friendly and responsive website.",
      features: ["Modern Technologies", "Modern UI/UX", "Performance Optimization", "SEO-friendly"],
      color: "#6366f1"
    },
    {
      icon: <FaServer />,
      title: "Software Development",
      description: "Building robust and scalable software applications with secure API architectures.",
      features: ["Node.js/Express", "API Development", "Database Design", "Authentication"],
      color: "#8b5cf6"
    },
    {
      icon: <FaMobileAlt />,
      title: "AI Integration",
      description: "Integrating AI into existing systems to enhance functionality and efficiency.",
      features: ["AI Integration", "Machine Learning", "Natural Language Processing", "Data Analysis"],
      color: "#06b6d4"
    },
    {
      icon: <FaPalette />,
      title: "Technical Support",
      description: "Providing technical support to clients and users.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "#10b981"
    },
    {
      icon: <FaChartLine />,
      title: "Hosting and Deployment",
      description: "Hosting and deploying websites and software applications.",
      features: ["Hosting", "Deployment", "Server Management", "Cloud Hosting"],
      color: "#f59e0b"
    },
    {
      icon: <FaCloud />,
      title: "Maintenance and Updates",
      description: "Maintaining and updating websites and software applications to ensure they are up to date and running smoothly.",
      features: ["Maintenance", "Updates", "Bug Fixes", "Performance Optimization"],
      color: "#3b82f6"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">Services</h2>
          <h3 className="section-subtitle">Expert Solutions for Your Digital Needs</h3>
          <p className="section-description">
            Delivering cutting-edge solutions with a focus on quality, scalability, and user experience. Each service is tailored to meet your specific requirements and business goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                '--card-color': service.color
              }}
            >
              <div className="service-icon">
                {service.icon}
                <div className="icon-background"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-bullet"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
