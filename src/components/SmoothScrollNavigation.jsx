import React, { useState, useEffect } from 'react';

const SmoothScrollNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'process', name: 'Process' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'form', name: 'Contact' }
  ];

  // Track current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced smooth scroll function for global use
  const smoothScrollTo = (targetId, duration = 1000) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  };

  // Make scroll function available globally
  useEffect(() => {
    window.smoothScrollTo = smoothScrollTo;
  }, []);

  return null; // This component doesn't render any UI now
};

export default SmoothScrollNavigation;