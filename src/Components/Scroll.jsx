// ScrollButton.js

import React, { useState, useEffect } from 'react';
import { SlArrowUp } from "react-icons/sl";
// import './ScrollButton.css'; // Import your CSS file for styling

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add event listener to track scrolling
    window.addEventListener('scroll', toggleVisibility);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    // Show scroll button when user scrolls down 100px or more
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-btn" onClick={scrollToTop}>
          < SlArrowUp />
        </button>
      )}
    </div>
  );
};

export default Scroll;
