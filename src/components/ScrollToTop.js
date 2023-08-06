import React, { useState, useEffect } from 'react';
import {FaArrowAltCircleUp} from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const BacktoTop = () => {
    console.log("Scroll")
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
      <button
          id="back-to-top-btn"
          className={`scroll-top-btn ${isVisible ? 'show' : ''}`}
          onClick={BacktoTop}
          title="Scroll to Top"
      >
        <br/><FaArrowAltCircleUp size={42}/>
      </button>
  );
}

export default ScrollToTop;
