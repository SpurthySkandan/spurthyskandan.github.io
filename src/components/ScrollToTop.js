import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-container">
      {isVisible && (
        <div className="scroll-top">
          <button
            onClick={scrollToTop}
            aria-label="Scroll up"
            className="btn btn--icon"
          >
            <i aria-hidden="true" className="fas fa-arrow-up"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
