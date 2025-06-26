import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { sendContactForm } from '../utils/api';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

    try {
      const result = await sendContactForm(formData);
      
      setStatus({
        submitting: false,
        success: result.message,
        error: null
      });

      // Clear form on success
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
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
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-description">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together to bring your ideas to life.
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
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
              />
              <label className="form-label">Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
              />
              <label className="form-label">Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                disabled={status.submitting}
              />
              <label className="form-label">Phone Number (Optional)</label>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                disabled={status.submitting}
              />
              <label className="form-label">Your Message</label>
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
