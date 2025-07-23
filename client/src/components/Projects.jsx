import React, { useContext } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/Projects.css';

const Projects = () => {
  const { currentLang } = useContext(LanguageContext);

  const projects = [
    {
      title: "Real Estate Chatbot",
      description: "A real estate chatbot that provides property price estimation using AI and machine learning.",
      image: "/assets/real-estate-chatbot.png",
      technologies: ["JavaScript", "React", "Node.js", "OpenAI API"],
      github: "https://github.com/TheGreatVasu/Real-Estate-Chatbot-",
      live: "https://github.com/TheGreatVasu/Real-Estate-Chatbot-",
      category: "AI/ML"
    },
    {
      title: "Multi-step Profile Form",
      description: "A MERN stack multi-step profile form with user input validation and MongoDB integration.",
      image: "/assets/form-project.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/TheGreatVasu/form-project",
      live: "https://form-project-ochre-gamma.vercel.app/",
      category: "Web App"
    },
    {
      title: "Kurtis Fashion E-commerce Platform",
      description: "A modern full-stack eCommerce platform for women's fashion with responsive UI. and Under Development",
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
    {
      title: "Real Time Process Monitoring Dashboard System",
      description: "A real-time process monitoring dashboard system with real-time updates.",
      image: "/assets/process-monitoring.png",
      technologies: ["React", "Firebase", "Material-UI", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/TheGreatVasu/process-monitoring",
      live: "",
      category: "Website"
    },
    {
      title: "Real Time Car Rental System",
      description: "A real-time car rental system with real-time updates.",
      image: "/assets/car-rental.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/TheGreatVasu/car-rental",
      live: "",
      category: "Website"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics and engagement.",
      image: "/assets/social-dashboard.png",
      technologies: ["React", "D3.js", "Node.js", "Social APIs"],
      github: "https://github.com/TheGreatVasu/social-dashboard",
      live: "",
      category: "Analytics"
    }
  ];

  const content = {
    en: {
      viewProject: "View Project",
      viewCode: "View Code",
      title: "My Work",
      subtitle: "Showcase of Skills & Projects",
      description: "A collection of projects that demonstrate my expertise in web development, AI/ML, and software engineering."
    },
    es: {
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      title: "Mi Trabajo",
      subtitle: "Muestra de Habilidades y Proyectos",
      description: "Una colección de proyectos que demuestran mi experiencia en desarrollo web, IA/ML e ingeniería de software."
    },
    hi: {
      viewProject: "प्रोजेक्ट देखें",
      viewCode: "कोड देखें",
      title: "मेरा काम",
      subtitle: "कौशल और परियोजनाओं का प्रदर्शन",
      description: "वेब विकास, एआई/एमएल और सॉफ्टवेयर इंजीनियरिंग में मेरी विशेषज्ञता को प्रदर्शित करने वाली परियोजनाओं का संग्रह।"
    }
  };

  return (
    <>
      <section className="projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="section-title" data-aos="fade-up">{content[currentLang].title}</h2>
            <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="100">{content[currentLang].subtitle}</h3>
            <p className="section-description" data-aos="fade-up" data-aos-delay="200">{content[currentLang].description}</p>
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
                        title={content[currentLang].viewProject}
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title={content[currentLang].viewCode}
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
      {/* Upcoming Projects Section */}
      <section className="projects upcoming-projects">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="section-title" data-aos="fade-up">Upcoming Projects</h2>
            <p className="section-description" data-aos="fade-up" data-aos-delay="100">
              Stay tuned for exciting new projects coming soon!
            </p>
          </div>
          <div className="projects-grid">
            {/* Upcoming Project 1 */}
            <div className="project-card" data-aos="fade-up" data-aos-delay="200">
              <div className="project-content">
                <h3 className="project-title">Ecommerce Platform for Robotics</h3>
                <p className="project-description">A next-gen ecommerce platform tailored for robotics products, featuring smart search, 3D previews, and seamless checkout. (Coming soon)</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">3D</span>
                  <span className="tech-tag">Ecommerce</span>
                </div>
                <span className="project-category">Robotics</span>
              </div>
            </div>
            {/* Upcoming Project 2 */}
            <div className="project-card" data-aos="fade-up" data-aos-delay="300">
              <div className="project-content">
                <h3 className="project-title">DSA Visualizer</h3>
                <p className="project-description">A platform to visualize and interact with data structures and algorithms for better learning and understanding. (Coming soon)</p>
                <div className="project-tech">
                  <span className="tech-tag">DSA</span>
                  <span className="tech-tag">Visualization</span>
                  <span className="tech-tag">React</span>
                </div>
                <span className="project-category">Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects; 