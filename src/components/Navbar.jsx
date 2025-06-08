import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for dynamic glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced smooth scroll function
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
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5' 
          : 'bg-white/50 backdrop-blur-sm'
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Gradient overlay for extra glass effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => smoothScrollTo('hero')}
              className="text-2xl font-bold text-gray-900/90 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Aggarwal & Associates
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => smoothScrollTo('hero')}
              className="px-4 py-2 rounded-full text-gray-700/80 hover:text-gray-900 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              Home
            </button>
            <button 
              onClick={() => smoothScrollTo('services')}
              className="px-4 py-2 rounded-full text-gray-700/80 hover:text-gray-900 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              Services
            </button>
            <button 
              onClick={() => smoothScrollTo('process')}
              className="px-4 py-2 rounded-full text-gray-700/80 hover:text-gray-900 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              Process
            </button>
            <button 
              onClick={() => smoothScrollTo('testimonials')}
              className="px-4 py-2 rounded-full text-gray-700/80 hover:text-gray-900 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              Testimonials
            </button>
            <button 
              onClick={() => smoothScrollTo('form')}
              className="ml-4 px-6 py-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-900/25 transition-all duration-300 backdrop-blur-sm border border-gray-700/30 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700/80 hover:text-gray-900 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        {isOpen && (
          <div 
            className="md:hidden pb-6 mt-2 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl shadow-black/5"
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Mobile menu gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl pointer-events-none"></div>
            
            <div className="space-y-2 p-4 relative">
              <button 
                onClick={() => smoothScrollTo('hero')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700/80 hover:text-gray-900 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Home
              </button>
              <button 
                onClick={() => smoothScrollTo('services')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700/80 hover:text-gray-900 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Services
              </button>
              <button 
                onClick={() => smoothScrollTo('process')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700/80 hover:text-gray-900 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Process
              </button>
              <button 
                onClick={() => smoothScrollTo('testimonials')}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700/80 hover:text-gray-900 hover:bg-white/40 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/30"
              >
                Testimonials
              </button>
              <button 
                onClick={() => smoothScrollTo('form')}
                className="block w-full text-center px-6 py-3 rounded-xl bg-gray-900/80 text-white hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-900/25 transition-all duration-300 backdrop-blur-sm border border-gray-700/30 mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;