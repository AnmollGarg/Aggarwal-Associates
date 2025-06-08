import React, { useState, useEffect } from 'react';

const Features = () => {
  // Counter animation hook
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
  const [experienceCount, startExperienceCounter] = useCounter(15);
  const [projectCount, startProjectCounter] = useCounter(1200);
  const [satisfactionCount, startSatisfactionCounter] = useCounter(98);

  useEffect(() => {
    // Start all counters when component mounts
    const timer = setTimeout(() => {
      startClientCounter();
      startExperienceCounter();
      startProjectCounter();
      startSatisfactionCounter();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Tax Optimization",
      description: "Strategic tax planning to minimize liabilities and maximize savings for your business and personal finances.",
      highlight: "Save up to 30%"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Financial Auditing",
      description: "Comprehensive financial audits ensuring compliance and transparency in all your business operations.",
      highlight: "100% Compliance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "Business Advisory",
      description: "Expert business consulting to help you make informed decisions and drive sustainable growth.",
      highlight: "Strategic Growth"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Compliance Support",
      description: "Complete regulatory compliance management to keep your business aligned with all legal requirements.",
      highlight: "Risk-Free"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Investment Planning",
      description: "Professional investment advisory services to help you build wealth and secure your financial future.",
      highlight: "Wealth Building"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Financial Reporting",
      description: "Detailed financial reports and analytics to give you clear insights into your business performance.",
      highlight: "Clear Insights"
    }
  ];

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

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Left-Aligned Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-sm font-semibold text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3 animate-pulse"></div>
              <span className="tracking-wide">OUR SERVICES</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comprehensive Financial
                <span className="block text-gray-600">Solutions</span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                From tax optimization to business advisory, we provide end-to-end financial services 
                that help businesses and individuals achieve their financial goals.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => smoothScrollTo('process')}
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-center inline-flex items-center justify-center group"
              >
                Our Process
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

          </div>
          
          {/* Right Side - Enhanced Stats Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gray-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-300 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-gray-400 rounded-full opacity-40"></div>
              <div className="absolute bottom-1/4 -left-2 w-3 h-3 bg-gray-500 rounded-full opacity-30"></div>
              
              {/* Main Enhanced Stats Card */}
              <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl relative z-10 max-w-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center space-y-8">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">Our Track Record</h3>
                    <p className="text-sm text-gray-600">Trusted by businesses nationwide</p>
                  </div>
                  
                  {/* Main Stats Grid */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900 font-mono">
                        {clientCount}+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900 font-mono">
                        {experienceCount}+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  
                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-gray-900 font-mono">
                        {projectCount}+
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Projects Completed</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-gray-900 font-mono">
                        {satisfactionCount}%
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Client Satisfaction</div>
                    </div>
                  </div>
                  
                  {/* Service Types Grid */}
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                    <h4 className="text-sm font-semibold text-gray-900">Core Services</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-600">Tax Planning</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-600">Auditing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-600">Advisory</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-600">Compliance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Dark grey hover with white text */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 group-hover:bg-white group-hover:text-gray-800 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                {/* Title with Highlight */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-white group-hover:text-gray-800 transition-all duration-300">
                    {feature.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center text-gray-400 group-hover:text-white transition-colors pt-2">
                  <span className="text-sm font-medium mr-2 group-hover:mr-3 transition-all duration-300">
                    Learn More
                  </span>
                  <div className="bg-gray-100 rounded-full p-2 group-hover:bg-gray-700 transition-all duration-300">
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-gray-600 group-hover:text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Remove background overlay since we're using solid dark background */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;