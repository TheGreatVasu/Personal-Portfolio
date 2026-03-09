import React from 'react';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      name: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys",
      date: "September 2025",
      link: ""
    },
    {
      name: "Computer Communications",
      issuer: "Coursera",
      date: "November 2024",
      link: ""
    },
    {
      name: "The Complete Introduction to C++",
      issuer: "Coding Ninjas",
      date: "October 2024",
      link: ""
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-section-title">Certificates</h2>
        <div className="certificates-grid" data-aos="fade-up">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="certificate-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="certificate-icon-wrap">
                <FaAward className="certificate-icon" />
              </div>
              <h3 className="certificate-name">{item.name}</h3>
              <p className="certificate-issuer">{item.issuer}</p>
              <span className="certificate-date">{item.date}</span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                  aria-label={`View ${item.name}`}
                >
                  View credential <FaExternalLinkAlt />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
