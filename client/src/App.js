import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
// Removed UpcomingPage import
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import './styles/theme.css';

function App() {
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
          <Route path="/services" element={<ServicesPage />} />
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
