const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://personal-portfolio-3w8q.onrender.com/api';

// Web3Forms configuration for contact form submissions
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '81d4d30c-af6b-4151-838e-a39c001d17bf';

export const sendContactForm = async (formData) => {
  try {
    console.log('Sending contact form data via Web3Forms:', formData);
    console.log('Web3Forms URL:', WEB3FORMS_URL);
    
    // Create an AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    // Prepare payload for Web3Forms
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      bookingType: formData.bookingType,
      message: formData.message,
      subject: `New Contact: ${formData.name} - ${formData.bookingType || 'General Inquiry'}`
    };

    const response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      credentials: 'omit', // Important for CORS
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log('Web3Forms response status:', response.status);
    console.log('Web3Forms response headers:', response.headers);

    if (!response.ok) {
      // Always read body once; try JSON first, then fall back to text
      let errorMessage = '';
      try {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          errorMessage = data?.error || data?.message || '';
        } catch {
          // Not JSON; use raw text
          errorMessage = text || '';
        }
      } catch (readErr) {
        console.error('Failed to read error response body:', readErr);
      }

      if (!errorMessage) {
        // Provide more specific error messages based on status code
        if (response.status === 400) {
          errorMessage = 'Please correct the highlighted fields and try again.';
        } else if (response.status === 500) {
          errorMessage = 'Service error occurred. Please try again later.';
        } else if (response.status === 0 || response.status >= 500) {
          errorMessage = 'Unable to connect to the service. Please check your internet connection.';
        } else {
          errorMessage = `Network error occurred (${response.status}). Please try again later.`;
        }
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Web3Forms success response data:', data);
    return data;
  } catch (error) {
    console.error('Contact form error:', error);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect. Please check your internet connection and try again.');
    }
    throw new Error(error.message || 'Failed to send message. Please try again later.');
  }
};
