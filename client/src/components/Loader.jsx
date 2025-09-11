import React, { useState, useEffect } from 'react';
import { FaCode, FaRocket } from 'react-icons/fa';
import '../styles/Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-content">
          <div className="brand-logo">
            <div className="logo-icon">
              <FaCode className="code-icon" />
              <FaRocket className="rocket-icon" />
            </div>
            <h1 className="brand-name">Rastogi's Portfolio</h1>
            <p className="brand-tagline">Code + Creativity = Your Brand's Identity</p>
          </div>
          
          <div className="loader-animation">
            <div className="loader-ring">
              <div className="ring-1"></div>
              <div className="ring-2"></div>
              <div className="ring-3"></div>
            </div>
          </div>

          <div className="loading-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round(progress)}%</span>
          </div>

          <div className="loading-text">
            <span className="loading-dots">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
