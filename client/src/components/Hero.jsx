import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const heroContentRef = useRef(null);
  const [muted, setMuted] = useState(true);
  // Hide hero content until component is fully mounted to prevent AOS double-render flash
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after first paint so AOS has nothing to process on initial render
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
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

      <div className={`hero-center${mounted ? ' hero-mounted' : ''}`} ref={heroContentRef}>
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <h1 className="hero-title">Vasu Rastogi</h1>
            <p className="hero-subtitle">Software Developer | Building Scalable Tech Products for Businesses & Startups </p>

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
