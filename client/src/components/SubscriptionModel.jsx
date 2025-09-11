import React from 'react';
import { FaCode, FaServer, FaShieldAlt, FaDatabase, FaCogs, FaBug, FaCloud, FaFileAlt, FaGraduationCap, FaChartBar, FaHandsHelping, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const SubscriptionModel = () => {
  const serviceCategories = [
    {
      icon: <FaCode />,
      title: "Website & App Development",
      description: "Complete web and mobile application development solutions",
      services: [
        "Static Website",
        "Dynamic Website", 
        "Dynamic (Advanced features)",
        "E-Commerce Website (Basic)",
        "E-Commerce Website (Advanced)"
      ],
      color: "#6366f1"
    },
    {
      icon: <FaServer />,
      title: "Software Development",
      description: "Custom software solutions and enterprise applications",
      services: [
        "Normal Complexity Software",
        "Custom / High-level / ERP",
        "Normal ERP-based Systems"
      ],
      color: "#8b5cf6"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity & Testing",
      description: "Security solutions and comprehensive testing services",
      services: [
        "Normal Security (website/software)",
        "Custom Built Security",
        "Full Code Testing",
        "Custom Debugging",
        "Penetration Testing"
      ],
      color: "#ef4444"
    },
    {
      icon: <FaDatabase />,
      title: "API Development & Database",
      description: "Backend services and database management solutions",
      services: [
        "Third-party Integration",
        "Backend API Development",
        "Custom Database Design",
        "Platform-based Database",
        "Third-party Cloud Database"
      ],
      color: "#10b981"
    },
    {
      icon: <FaCogs />,
      title: "Automation & Hosting",
      description: "Process automation and deployment solutions",
      services: [
        "Normal Script Generation",
        "Advanced Automation Scripts",
        "Platform-based Hosting",
        "Maintenance Hosting"
      ],
      color: "#f59e0b"
    },
    {
      icon: <FaFileAlt />,
      title: "Documentation & Consulting",
      description: "Technical documentation and expert consulting services",
      services: [
        "AI-Generated Documentation",
        "Student Project Assistance",
        "Data Visualization",
        "Startup & NGO Consulting"
      ],
      color: "#3b82f6"
    }
  ];

  return (
    <section id="subscription" className="services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">Code-Based System Development</h2>
          <h3 className="section-subtitle">Comprehensive IT Solutions & Services</h3>
          <p className="section-description">
            Professional development services covering all aspects of modern software development, 
            from simple websites to complex enterprise systems. All solutions are built with clean, 
            maintainable code and industry best practices.
          </p>
        </div>

        <div className="services-grid">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                '--card-color': category.color
              }}
            >
              <div className="service-icon">
                {category.icon}
                <div className="icon-background"></div>
              </div>
              <h3 className="service-title">{category.title}</h3>
              <p className="service-description">{category.description}</p>
              <ul className="service-features">
                {category.services.map((service, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-bullet"></span>
                    {service}
                  </li>
                ))}
              </ul>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link
            to="/contact"
            className="cta-button"
            title="Get Custom Pricing"
            data-aos="fade-up"
            data-aos-delay="600"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FaExternalLinkAlt />
            Contact for Custom Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionModel;


