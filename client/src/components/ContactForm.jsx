import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { sendContactForm } from '../utils/api';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '', // Booking date
    bookingType: '', // Booking type
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear status messages when user starts typing again
    if (status.success || status.error) {
      setStatus({
        submitting: false,
        success: null,
        error: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || 
        !formData.date || !formData.bookingType || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: null,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: null,
        error: 'Please enter a valid email address.'
      });
      return;
    }

    // Validate phone format (basic)
    const phoneRegex = /^[+]?[1-9][\d\s\-()]{7,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-()]/g, ''))) {
      setStatus({
        submitting: false,
        success: null,
        error: 'Please enter a valid phone number.'
      });
      return;
    }

    try {
      console.log('Submitting form with data:', formData);
      const result = await sendContactForm(formData);
      
      setStatus({
        submitting: false,
        success: result.message || 'Your message has been sent successfully! I will get back to you soon.',
        error: null
      });

      // Clear form on success
      setFormData({ name: '', email: '', phone: '', date: '', bookingType: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitting: false,
        success: null,
        error: error.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Ready to build something great? Let's discuss your project and bring your vision to life with modern, scalable solutions.
          </p>
        </div>

        <div className="contact-form-container">
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <p className="info-text">vasurastogi213@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <span className="info-label">Phone</span>
                  <p className="info-text">+91-8859985607</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <p className="info-text">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4 className="social-title">Connect with me</h4>
              <div className="social-icons">
                <a href="https://github.com/TheGreatVasu" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vasurastogi/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {status.error && (
              <div className="alert alert-error" role="alert">
                {status.error}
              </div>
            )}
            {status.success && (
              <div className="alert alert-success" role="alert">
                {status.success}
              </div>
            )}

            <div className="form-group">
              <input
                id="contact-name"
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
                aria-required="true"
              />
              <label className="form-label" htmlFor="contact-name">Your Name</label>
            </div>

            <div className="form-group">
              <input
                id="contact-email"
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
                aria-required="true"
              />
              <label className="form-label" htmlFor="contact-email">Email Address</label>
            </div>

            <div className="form-group">
              <input
                id="contact-phone"
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
                aria-required="true"
              />
              <label className="form-label" htmlFor="contact-phone">Phone Number</label>
            </div>

            <div className="form-group">
              <input
                id="contact-date"
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
                aria-required="true"
              />
              <label className="form-label" htmlFor="contact-date">Booking Date</label>
            </div>

            <div className="form-group">
              <select
                id="contact-bookingType"
                className="form-control"
                name="bookingType"
                value={formData.bookingType}
                onChange={handleChange}
                required
                disabled={status.submitting}
                aria-required="true"
              >
                <option value="">Select Booking Type</option>
                <option value="Meeting">Meeting</option>
                <option value="Consultation">Consultation</option>
                <option value="Project Discussion">Project Discussion</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                id="contact-message"
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
                aria-required="true"
              />
              <label className="form-label" htmlFor="contact-message">Your Message</label>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
