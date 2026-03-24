import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
// Removed UpcomingPage import
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import './styles/theme.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      offset: 100,
      delay: 100,
      // MutationObserver can re-trigger layouts as the tree mounts.
      // Disabling it avoids first-load flicker in static sections like hero.
      disableMutationObserver: true
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Global background video behind all content */}
      <div className="bg-video-container" aria-hidden="true">
        <video
          className="bg-video"
          src="/assets/comingsoon.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="bg-video-overlay"></div>
      </div>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Removed upcoming route */}
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
