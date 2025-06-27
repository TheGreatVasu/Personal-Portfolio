const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://personal-portfolio-3w8q.onrender.com/api';

export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData),
      credentials: 'omit' // Important for CORS
    });

    if (!response.ok) {
      // Try to get error message from response
      try {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      } catch (e) {
        throw new Error('Network error occurred. Please try again later.');
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Contact form error:', error);
    throw new Error(error.message || 'Failed to send message. Please try again later.');
  }
};
