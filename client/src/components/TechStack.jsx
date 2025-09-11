import React from 'react';
import { FaReact, FaNode, FaDatabase, FaPython, FaAws, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import '../styles/About.css';

const TechStack = () => {
  const stacks = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      icon: <FaNode />,
      items: ['Node.js', 'Express', 'REST', 'GraphQL']
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      title: 'Python & Data',
      icon: <FaPython />,
      items: ['Python', 'Pandas', 'NumPy']
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaAws />,
      items: ['AWS', 'Vercel', 'Docker', 'CI/CD']
    },
    {
      title: 'Core Web',
      icon: <><FaHtml5 /> <FaCss3Alt /> <FaJs /></>,
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
    },
    {
      title: 'Tools',
      icon: <><FaGitAlt /> <FaDocker /></>,
      items: ['Git', 'GitHub', 'Docker', 'Postman']
    }
  ];

  return (
    <section id="tech-stack" className="about">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h2 className="section-title">Tech Stack</h2>
          <h3 className="section-subtitle">Skills & Expertise</h3>
          <p className="bio">Technologies I use to design, build, and scale modern applications.</p>
        </div>

        <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
          {stacks.map((stack, index) => (
            <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={300 + index * 100}>
              <div className="skill-icon">{stack.icon}</div>
              <h4 className="skill-title">{stack.title}</h4>
              <div className="skill-items">
                {stack.items.map((item, i) => (
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

export default TechStack;


