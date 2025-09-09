import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
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
    cloud: {
      title: "Cloud Services",
      icon: <FaCloud />,
      items: ["AWS", "Google Cloud", "Azure", "DevOps", "Docker", "CI/CD"]
    },
    tools: {
      title: "Development Tools",
      icon: <FaTools />,
      items: ["Git", "Docker", "CI/CD", "Agile/Scrum"]
    }
  };

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Technologies Mastered" }
  ];

  const timeline = [
    {
      year: "2023 - Present",
      role: "Bachelor of Technology in Computer Science and Engineering",
      company: "Lovely Professional University",
      description: "Pursuing B.Tech in Computer Science and Engineering the Lovely Professional University, Punjab, India."
    },
    {
      year: "2024 - Present",
      role: "Full Stack Developer",
      company: "Rastogi & Associates",
      description: "Worked on Full Stack Web Development Project for a client.",
    },
    {
      year: "2025 - Present",
      role: "Full Stack Engineer",
      company: "Databot-labs",
      description: "Working with a Brand to develop their visibile presence on the web."
    },
    {
      year: "2023 - Present",
      role: "Self-Employed ",
      company: "Rastogi Coders",
      description: "Working as a Self-Employed Full Stack Developer and solving complex problems with seamless, user-first full stack innovation end-to-end."
    },
    {
      year: "2025 - Present",
      role: "Working With Companies as an Backend Engineer",
      company: "Development Startup Teams",
      description: "Working with companies to develop their scalable Software and Backend systems."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <h3 className="section-subtitle">Passionate Full Stack Developer & Problem Solver</h3>
          <p className="bio">
            With over 2 years of experience in web development, I specialize in creating scalable and efficient solutions that drive business growth. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="stats-grid" data-aos="fade-up" data-aos-delay="200">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="experience-section" data-aos="fade-up" data-aos-delay="300">
          <h3 className="experience-title">Professional Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={400 + index * 100}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-role">{item.role}</h4>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid" data-aos="fade-up" data-aos-delay="500">
          {Object.values(skills).map((skill, index) => (
            <div key={index} className="skill-card" data-aos="fade-up" data-aos-delay={600 + index * 100}>
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

export default About;
