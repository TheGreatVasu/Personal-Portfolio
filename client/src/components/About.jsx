import React from 'react';
import '../styles/About.css';

const About = () => {
  const stats = [
    { number: "12+", label: "Projects Completed" },
    { number: "8+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Technologies Mastered" }
  ];

  const timeline = [
    {
      year: "2023 - Present",
      role: "Bachelor of Technology in Computer Science and Engineering",
      company: "Lovely Professional University",
      description:
        "Pursuing B.Tech in Computer Science and Engineering at Lovely Professional University, Punjab. Building strong foundations in software development, data structures, and system design."
    },
    {
      year: "Apr 2025 - Aug 2025",
      role: "Freelance Full Stack Developer",
      company: "DataBot-Labs",
      description:
        "Developed a responsive eCommerce platform using React.js, Node.js, and MongoDB with secure backend APIs and optimized user workflows."
    },
    {
      year: "Jun 2025 - Present",
      role: "Problem Solving & DSA",
      company: "LeetCode",
      description:
        "Solved 100+ coding problems to strengthen algorithmic thinking, data structures knowledge, and problem-solving skills."
    },
    {
      year: "Sep 2025 - Present",
      role: "Backend Developer",
      company: "Sintora Development",
      description:
        "Developing scalable backend APIs using Node.js and Express while implementing optimized MySQL database structures for reliable system performance."
    },
    {
      year: "2025",
      role: "Project Development",
      company: "Account Receivable Software",
      description:
        "Built a centralized finance management platform to automate invoices, payments, and PO tracking using React.js, Node.js, Express.js, and MySQL."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <h3 className="section-subtitle">Building reliable systems with a user-first mindset</h3>
          <p className="bio">
           A Full Stack Developer with a passion for building scalable and efficient web applications. I have a strong foundation in both frontend and backend development, and I am always looking for new challenges and opportunities to grow.
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
          <h3 className="experience-title">Journey</h3>
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
      </div>
    </section>
  );
};

export default About;
