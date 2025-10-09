import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Databot-labs Website",
      description: "A website for Databot-labs, a robotics company, featuring smart search, 3D previews, and seamless checkout.",
      image: "/assets/robotics.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/TheVasuRastogi/databot-labs-share",
      live: "https://databot-labs.com/",
      category: "Website"
    },
    {
      title: "YD Advisory Website",
      description: "A website for YD Advisory, a consulting firm, featuring smart search, Consulting Services, and seamless checkout.",
      image: "/assets/form-project.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/TheGreatVasu/form-project",
      live: "https://ydadvisory.ae/",
      category: "Web App"
    },
    {
      title: "Kurtis Fashion E-commerce Platform",
      description: "A modern full-stack eCommerce platform for women's fashion with responsive UI. and Under Development. This project is a work in ",
      image: "/assets/ecommerce.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB" ],
      github: "https://github.com/TheGreatVasu/Ecommerce-Fashion-Platform",
      live: "https://kurtis-ecommerce-2025.vercel.app/",
      category: "E-commerce"
    },
    {
      title: "Talent Acquisition Form",
      description: "A TypeScript-based talent acquisition platform with advanced form handling.",
      image: "/assets/talent-form.png",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      github: "https://github.com/TheGreatVasu/talent-acquisition-form",
      live: "https://talent-acquisition-form-8m5b.vercel.app/",
      category: "Web App"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with dark theme and multi-language support.",
      image: "/assets/portfolio.png",
      technologies: ["React", "Node.js", "Express", "Nodemailer"],
      github: "https://github.com/TheGreatVasu/portfolio",
      live: "https://personal-portfolio-virid-xi.vercel.app/",
      category: "Website"
    },
    {
      title: "Business Consulting Firm Website",
      description: "A Consulting Firm Website for there Services and Projects",
      image: "/assets/Consulting-Firm.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/TheGreatVasu/Consulting-Firm",
      live: "https://rastogiassociates.com/",
      category: "Website"
    },
   
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title" data-aos="fade-up">Projects</h2>
          <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Real work, shipped to production</h3>
          <p className="section-description" data-aos="fade-up" data-aos-delay="200">
            Selected builds spanning product sites, full‑stack apps and e‑commerce. Each card links to
            production and source.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 