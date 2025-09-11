import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaPalette, FaChartLine, FaCloud } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      description: "Helping businesses create a strong online presence with a user-friendly and responsive website.",
      features: ["Modern Technologies", "Modern UI/UX", "Performance Optimization", "SEO-friendly"]
    },
    {
      icon: <FaServer />,
      title: "Software Development",
      description: "Building robust and scalable software applications with secure API architectures.",
      features: ["Node.js/Express", "API Development", "Database Design", "Authentication"]
    },
    {
      icon: <FaMobileAlt />,
      title: "AI Integration",
      description: "Integrating AI into existing systems to enhance functionality and efficiency.",
      features: ["AI Integration", "Machine Learning", "Natural Language Processing", "Data Analysis"]
    },
    {
      icon: <FaPalette />,
      title: "Technical Support",
      description: "Providing technical support to clients and users.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <FaChartLine />,
      title: "Hosting and Deployment",
      description: "Hosting and deploying websites and software applications.",
      features: ["Hosting", "Deployment", "Server Management", "Cloud Hosting"]
    },
    {
      icon: <FaCloud />,
      title: "Maintenance and Updates",
      description: "Maintaining and updating websites and software applications to ensure they are up to date and running smoothly.",
      features: ["Maintenance", "Updates", "Bug Fixes", "Performance Optimization"]
    },
    {
      icon: <FaCode />,
      title: "Clear Technical Documentation",
      description: "Well-structured documentation for APIs, systems, and onboarding.",
      features: ["API Docs", "System Diagrams", "How-To Guides", "Changelogs"]
    },
    {
      icon: <FaServer />,
      title: "Student Project Guidance",
      description: "Mentorship and guidance for academic and personal tech projects.",
      features: ["Project Planning", "Code Reviews", "Best Practices", "Presentations"]
    },
    {
      icon: <FaChartLine />,
      title: "Data Visualization & Insights",
      description: "Turn raw data into actionable dashboards and narratives.",
      features: ["Dashboards", "Reports", "KPIs", "Storytelling"]
    },
    {
      icon: <FaCloud />,
      title: "Consulting for Startups & NGOs",
      description: "Strategic technical consulting tailored to budget and impact.",
      features: ["Tech Strategy", "MVP Scoping", " tooling setup", "Scaling"]
    },
    {
      icon: <FaServer />,
      title: "API Integration & DB Management",
      description: "Integrate third-party APIs and manage databases reliably.",
      features: ["API Design", "Integrations", "Schema Design", "Backups"]
    },
    {
      icon: <FaCode />,
      title: "Automation & Workflow Optimization",
      description: "Automate repetitive tasks and streamline processes.",
      features: ["Scripts", "Cron Jobs", "ETL", "CI/CD"]
    },
    {
      icon: <FaChartLine />,
      title: "Testing, Debugging & QA",
      description: "Ensure software quality with thorough testing and fixes.",
      features: ["Unit/Integration Tests", "E2E", "Bug Fixes", "Performance"]
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
