import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Ensure page always loads from top on initial load
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop;
