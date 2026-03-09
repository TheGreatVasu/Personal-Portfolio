import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <FaCode />,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
    },
    backend: {
      title: "Backend Development",
      icon: <FaServer />,
      items: ["Node.js", "Express", "Python", "Django"]
    },
    mobile: {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      items: ["React Native", "Flutter", "Mobile-First Design"]
    },
    database: {
      title: "Database Management",
      icon: <FaDatabase />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    tools: {
      title: "Development Tools",
      icon: <FaTools />,
      items: ["Git", "Docker", "CI/CD", "Agile/Scrum"]
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-section-title">Skills</h2>
        <div className="skills-grid" data-aos="fade-up" data-aos-delay="100">
          {Object.values(skills).map((skill, index) => (
            <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={200 + index * 100}>
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
