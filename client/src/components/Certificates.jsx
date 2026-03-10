import React, { useEffect, useState } from 'react';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certificates.css';

const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  const certificates = [
    {
      name: "Placement Ace: Java Bootcamp (LeetCode–Codeforces Edition)",
      issuer: "Lovely Professional University",
      date: "June 2025 – July 2025",
      pdf: "/assets/certifacte.pdf"
    },
    {
      name: "Computer Communications",
      issuer: "Coursera",
      date: "November 2024",
      pdf: "/assets/CourseraQ2VHG05UC61M.pdf"
    },
    {
      name: "The Complete Introduction to C++",
      issuer: "Coding Ninjas",
      date: "October 2024",
      link: "/assets/certificate_coding.pdf"
    }
  ];

  const closeModal = () => {
    setActiveCertificate(null);
  };

  useEffect(() => {
    if (!activeCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertificate]);

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-section-title">Certificates</h2>
        <p className="certificates-headline">
          Professional certifications and completed courses that validate my skills and commitment to continuous learning.
        </p>
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
              {(item.link || item.pdf) && (
                <button
                  type="button"
                  className="certificate-link"
                  onClick={() => setActiveCertificate(item)}
                  aria-label={`View ${item.name}`}
                >
                  View credential <FaExternalLinkAlt />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeCertificate && (
        <div
          className="certificate-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.name}
          onClick={closeModal}
        >
          <div
            className="certificate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <h3 className="certificate-modal-title">
                {activeCertificate.name}
              </h3>
              <button
                type="button"
                className="certificate-modal-close"
                onClick={closeModal}
                aria-label="Close certificate viewer"
              >
                &times;
              </button>
            </div>
            <div className="certificate-modal-body">
              <iframe
                src={activeCertificate.link || activeCertificate.pdf}
                title={activeCertificate.name}
                className="certificate-modal-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
