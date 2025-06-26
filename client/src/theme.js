const theme = {
  colors: {
    primary: '#6366f1',     // Modern Indigo
    secondary: '#4f46e5',   // Deeper Indigo
    accent: '#8b5cf6',      // Purple
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    background: '#ffffff',
    darkBg: '#111827',
    text: '#111827',
    lightText: '#6b7280',
    white: '#ffffff',
    card: 'rgba(255, 255, 255, 0.8)',
    glass: 'rgba(255, 255, 255, 0.1)',
  },
  fonts: {
    primary: "'Plus Jakarta Sans', sans-serif",
    heading: "'Clash Display', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    section: '6rem 0',
    container: '0 1.5rem',
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borderRadius: {
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    full: '9999px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.08)',
    large: '0 8px 24px rgba(0, 0, 0, 0.08)',
    glow: '0 0 20px rgba(99, 102, 241, 0.2)',
  },
  blur: {
    small: 'blur(4px)',
    medium: 'blur(8px)',
    large: 'blur(16px)',
  },
};

export default theme;
