const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://personal-portfolio-3w8q.onrender.com/api';

export const sendContactForm = async (formData) => {
  try {
    console.log('Sending contact form data:', formData);
    console.log('API URL:', `${API_BASE_URL}/contact/send`);
    
    // Create an AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`${API_BASE_URL}/contact/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData),
      credentials: 'omit', // Important for CORS
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      // Try to get error message from response
      try {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        throw new Error(errorData.error || `Server error: ${response.status}`);
      } catch (e) {
        console.error('Failed to parse error response:', e);
        // Provide more specific error messages based on status code
        if (response.status === 400) {
          throw new Error('Please check that all required fields are filled correctly.');
        } else if (response.status === 500) {
          throw new Error('Server error occurred. Please try again later.');
        } else if (response.status === 0 || response.status >= 500) {
          throw new Error('Unable to connect to server. Please check your internet connection.');
        } else {
          throw new Error(`Network error occurred (${response.status}). Please try again later.`);
        }
      }
    }

    const data = await response.json();
    console.log('Success response data:', data);
    return data;
  } catch (error) {
    console.error('Contact form error:', error);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please try again.');
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to server. Please check your internet connection and try again.');
    }
    throw new Error(error.message || 'Failed to send message. Please try again later.');
  }
};
