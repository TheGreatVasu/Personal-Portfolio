import React from 'react';
import { FaCode, FaServer, FaChartLine } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      description: "High-performance websites tailored to your brand with modern UX and SEO.",
      features: [
        "Landing pages & marketing sites",
        "E-commerce stores (Stripe/Razorpay)",
        "Portfolios, blogs & CMS (Headless)",
        "Admin dashboards & internal tools",
        "Responsive, accessible, SEO‑friendly",
        "Performance, analytics & A/B testing",
        "Hosting, domain & deployment setup",
        "Ongoing maintenance & updates"
      ]
    },
    {
      icon: <FaServer />,
      title: "Software Development",
      description: "Robust backends, APIs and scalable systems designed for reliability.",
      features: [
        "REST/GraphQL APIs & microservices",
        "Auth, roles & security best practices",
        "Relational/NoSQL database design",
        "Third‑party integrations (payments, email, storage)",
        "Automated testing & CI/CD",
        "Cloud deployments & monitoring",
        "Performance Optimization & Scalability",
        "DevOps & Infrastructure Automation"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Consulting",
      description: "Hands‑on guidance to plan, audit and accelerate your product roadmap.",
      features: [
        "Tech strategy & roadmap",
        "Architecture reviews & code audits",
        "MVP scoping & cost optimization",
        "Team mentoring & best practices",
        "Hiring support & review",
        "Project rescue & performance tuning",
        "Scaling & Infrastructure Optimization",
        "Quality Assurance & Performance Testing"
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">Services</h2>
          <h3 className="section-subtitle">Three core offerings to build and scale your product</h3>
          <p className="section-description">
            From concept to deployment, I deliver end-to-end solutions that drive growth and innovation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
