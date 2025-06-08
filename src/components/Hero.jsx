import React, { useState, useEffect } from 'react';

const Hero = () => {
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
  };

  // Add counter animation hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (!hasStarted) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, hasStarted]);

    const startCounter = () => setHasStarted(true);
    
    return [count, startCounter];
  };

  const [clientCount, startClientCounter] = useCounter(500);
  const [satisfactionCount, startSatisfactionCounter] = useCounter(98);

  // Card rotation state
  const [currentCard, setCurrentCard] = useState(0);

  // Cards data
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Tax",
      subtitle: "Optimization",
      badge: "Save up to 30%",
      badgeColor: "bg-blue-400"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Business",
      subtitle: "Advisory",
      badge: "Growth focused",
      badgeColor: "bg-purple-400"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Financial",
      subtitle: "Auditing",
      badge: "Compliance ready",
      badgeColor: "bg-green-400"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      startClientCounter();
      startSatisfactionCounter();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Card rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => smoothScrollTo('services')}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors group"
        >
          <span className="text-sm mb-2 opacity-75 group-hover:opacity-100">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full text-sm font-semibold text-gray-600 border border-gray-200">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
              <span className="tracking-wide">TRUSTED PROFESSIONALS</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Finance Smarter.
                <span className="block text-gray-600">Grow Further.</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Professional chartered accountancy services that help you navigate 
                complex financial landscapes with confidence and clarity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Tax Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Financial Auditing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Business Advisory</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-600">Compliance Support</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-6 pt-4">
              <button 
                onClick={() => smoothScrollTo('form')}
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium inline-flex items-center group"
              >
                Get Started
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={() => smoothScrollTo('services')}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium inline-flex items-center group"
              >
                View Services
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Side - Elegant Professional Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-50 rounded-full opacity-40"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gray-100 rounded-full opacity-30"></div>
              
              {/* Card Container */}
              <div className="relative w-80 lg:w-96">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out ${
                      index === currentCard 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 absolute inset-0 transform translate-y-4'
                    }`}
                  >
                    {/* Modern Card Design */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative z-10">
                      {/* Card Image with Professional Styling */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={card.image}
                          alt={card.title}
                          className="w-full h-64 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                        
                        {/* Status Badge on Image */}
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm">
                            <div className={`w-2 h-2 ${card.badgeColor} rounded-full mr-2 animate-pulse`}></div>
                            {card.badge}
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Content - Clean & Minimal */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                            <p className="text-sm text-gray-500">{card.subtitle}</p>
                          </div>
                          
                          {/* Service Icon */}
                          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {card.title === 'Tax' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              )}
                              {card.title === 'Business' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                              )}
                              {card.title === 'Financial' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              )}
                            </svg>
                          </div>
                        </div>
                        
                        {/* Learn More Link */}
                        <div className="flex items-center text-gray-400 hover:text-gray-600 transition-colors pt-3 group cursor-pointer">
                          <span className="text-sm font-medium mr-2 group-hover:mr-3 transition-all duration-300">
                            Learn More
                          </span>
                          <div className="bg-gray-100 rounded-full p-1.5 group-hover:bg-gray-200 transition-all duration-300">
                            <svg 
                              className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300 text-gray-600" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Card Indicators */}
              <div className="flex justify-center space-x-1.5 mt-8">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentCard 
                        ? 'bg-gray-800 w-8' 
                        : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                    }`}
                    aria-label={`View ${cards[index].title} service`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;