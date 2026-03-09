import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      year: "Since August 2023",
      grade: "CGPA: 6.50",
      description: "Pursuing B.Tech in Computer Science and Engineering with focus on software development and system design."
    },
    {
      degree: "Intermediate",
      institution: "Dewan Public School",
      location: "Hapur, Uttar Pradesh",
      year: "April 2022 - March 2023",
      grade: "Percentage: 73%",
      description: ""
    },
    {
      degree: "Intermediate",
      institution: "Dewan Public School",
      location: "Hapur, Uttar Pradesh",
      year: "April 2020 - March 2021",
      grade: "Percentage: 66%",
      description: ""
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-section-title">Education</h2>
        <div className="education-list">
          {education.map((item, index) => (
            <div
              key={index}
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="education-icon-wrap">
                <FaGraduationCap className="education-icon" />
              </div>
              <div className="education-content">
                <span className="education-year">{item.year}</span>
                <h3 className="education-degree">{item.degree}</h3>
                <h4 className="education-institution">{item.institution}</h4>
                {item.grade && (
                  <p className="education-grade">{item.grade}</p>
                )}
                {item.location && (
                  <p className="education-location">{item.location}</p>
                )}
                {item.description && (
                  <p className="education-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
