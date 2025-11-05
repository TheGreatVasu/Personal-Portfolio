import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Footer card */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-card">
            <div className="footer-card-inner">
              <div className="footer-identity">
                <h3 className="footer-name">Vasu Rastogi</h3>
                <p className="footer-tagline">Building premium, custom digital products — end‑to‑end.</p>
              </div>

              <div className="footer-socials">
                <a href="https://github.com/TheGreatVasu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/vasurastogi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon">
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="footer-divider"></div>

              <div className="footer-copy">© {new Date().getFullYear()} Vasu Rastogi — All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
