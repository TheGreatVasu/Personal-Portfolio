import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import TechStackPage from './pages/TechStack';
import UpcomingPage from './pages/Upcoming';
import SubscriptionPage from './pages/Subscription';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Loader />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
