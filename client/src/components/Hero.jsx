import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const heroContentRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Prevent AOS from duplicating Hero elements
  useEffect(() => {
    // Ensure AOS doesn't interfere with Hero section
    if (typeof window !== 'undefined' && window.AOS && heroContentRef.current) {
      // Disable AOS on hero elements
      const heroElements = heroContentRef.current.querySelectorAll('.hero-title, .hero-subtitle');
      heroElements.forEach(el => {
        el.setAttribute('data-aos', 'none');
        el.classList.add('aos-ignore');
      });
    }
  }, []);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    try {
      const nextMuted = !muted;
      el.muted = nextMuted;
      if (!nextMuted) {
        el.volume = 0.4;
        const playPromise = el.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {
            // Autoplay might still be blocked; keep muted state consistent
            el.muted = true;
            setMuted(true);
          });
        }
      }
      setMuted(nextMuted);
    } catch (_) {
      // noop
    }
  }, [muted]);

  return (
    <section className="hero hero--video">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/portfolio.png"
        ref={videoRef}
      >
        <source src="/assets/comingsoon.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-center" ref={heroContentRef}>
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <h1 className="hero-title">Vasu Rastogi</h1>
            <p className="hero-subtitle">Software Engineer • CEO @Rastogi Coders</p>

            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">Explore Work</Link>
              <button type="button" className="mute-toggle" onClick={toggleMute} aria-label={muted ? 'Unmute background video' : 'Mute background video'}>
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <div className="socials">
                <a href="https://github.com/TheGreatVasu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/vasurastogi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="profile-image-container">
              <img 
                src="/assets/profile.jpg" 
                alt="Vasu Rastogi" 
                className="profile-image"
                loading="eager"
              />
              <div className="profile-image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
