import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';
import { FaLaptopCode } from 'react-icons/fa6';

const Skills = () => {
  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <FaCode />,
      items: ["ReactJS", "HTML", "CSS", "Bootstrap", "JavaScript"]
    },
    backend: {
      title: "Backend Development",
      icon: <FaServer />,
      items: ["NodeJS", "ExpressJS", "REST APIs"]
    },
    database: {
      title: "Database Management",
      icon: <FaDatabase />,
      items: ["MySQL", "MongoDB"]
    },
    programming: {
      title: "Programming Languages",
      icon: <FaLaptopCode />,
      items: ["Java", "JavaScript"]
    },
    tools: {
      title: "Development Tools",
      icon: <FaTools />,
      items: ["Git", "GitHub"]
    }
  };
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        <h2 className="skills-section-title">Skills</h2>
  
        {/* Headline / Subtitle */}
        <p className="skills-headline">
          Technologies and tools I use to build scalable, user-focused web applications 
          from frontend interfaces to backend systems.
        </p>
  
        <div className="skills-grid" data-aos="fade-up" data-aos-delay="100">
          {Object.values(skills).map((skill, index) => (
            <div 
              key={index} 
              className="skill-card" 
              data-aos="fade-up" 
              data-aos-delay={200 + index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-title">{skill.title}</h4>
  
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-item">{item}</span>
                ))}
              </div>
  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
