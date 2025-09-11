import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const UpcomingProject = () => {
  const upcoming = [
    {
      title: "Education Website For DGCA Exam",
      description: "A modern educational platform tailored for DGCA exam preparation with structured content and practice modules.",
      image: "/assets/DGCAexam.png",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Planned"
    },
    {
      title: "Backend Development Project – Circle One (API Design)",
      description: "Robust API design and implementation focusing on scalability, security, and clear documentation.",
      image: "/assets/backendproject.png",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      category: "In Design"
    },
    {
      title: "Software Development of Manufacturing Tool",
      description: "Production-grade software tooling to streamline manufacturing workflows and reporting.",
      image: "/assets/manufacturingsoftware.png",
      technologies: ["TypeScript", "React", "REST"],
      category: "Research"
    },
    {
      title: "Brand Design",
      description: "Visual identity system and brand components for consistent multi-platform presence.",
      image: "/assets/rastogicoders.png",
      technologies: ["Design", "Branding", "UI"],
      category: "Concept"
    },
    {
      title: "Coming Soon",
      description: "A new project is brewing. Stay tuned for updates.",
      image: "/assets/comingsoon.png",
      technologies: ["TBD"],
      category: "Coming Soon"
    },
    {
      title: "Coming Soon",
      description: "Exploring ideas and validating scope for the next build.",
      image: "/assets/comingsoon.png",
      technologies: ["TBD"],
      category: "Coming Soon"
    }
  ];

  return (
    <section id="upcoming" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title" data-aos="fade-up">Upcoming Projects</h2>
          <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="100">What's coming next</h3>
          <p className="section-description" data-aos="fade-up" data-aos-delay="200">
            A preview of ideas currently being researched, prototyped, and built.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Link
            to="/contact"
            className="cta-button"
            title="Have an idea? Contact me"
            data-aos="fade-up"
            data-aos-delay="250"
            style={{ textDecoration: 'none' }}
          >
            Have an idea? Contact me
          </Link>
        </div>
        <div className="projects-grid">
          {upcoming.map((item, index) => (
            <div 
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ ['--order']: index }}
            >
              <div className="project-image">
                <img src={item.image} alt={item.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <span className="project-link" title={item.category}>
                      <FaClock />
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.description}</p>
                <div className="project-tech">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <span className="project-category">{item.category}</span>
              </div>
              <div className="project-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProject;


