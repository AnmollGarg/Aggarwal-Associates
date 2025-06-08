import React, { useState, useEffect, useRef } from 'react';

const Timeline = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      id: 1,
      phase: "Initial Consultation",
      title: "Understanding Your Needs",
      description: "We start with a comprehensive discussion to understand your financial goals, current situation, and specific requirements.",
      duration: "30-60 minutes",
      deliverables: ["Needs Assessment", "Goal Setting", "Initial Roadmap"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      highlight: "Discovery"
    },
    {
      id: 2,
      phase: "Analysis & Planning",
      title: "Deep Dive Assessment",
      description: "Our experts analyze your financial data, identify opportunities, and develop a customized strategy tailored to your objectives.",
      duration: "1-2 weeks",
      deliverables: ["Financial Analysis", "Risk Assessment", "Strategic Plan"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      highlight: "Strategic"
    },
    {
      id: 3,
      phase: "Proposal & Agreement",
      title: "Tailored Solution Design",
      description: "We present a detailed proposal with clear timelines, costs, and expected outcomes. Everything is transparent and agreed upon.",
      duration: "3-5 days",
      deliverables: ["Detailed Proposal", "Service Agreement", "Timeline"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      highlight: "Transparent"
    },
    {
      id: 4,
      phase: "Implementation",
      title: "Execution & Setup",
      description: "Our team implements the agreed strategy with regular updates and milestone tracking to ensure everything stays on course.",
      duration: "2-4 weeks",
      deliverables: ["System Setup", "Process Implementation", "Regular Updates"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      highlight: "Execution"
    },
    {
      id: 5,
      phase: "Monitoring & Support",
      title: "Ongoing Management",
      description: "Continuous monitoring, regular reviews, and proactive adjustments to ensure optimal performance and compliance.",
      duration: "Ongoing",
      deliverables: ["Monthly Reports", "Performance Reviews", "Compliance Updates"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      highlight: "Monitoring"
    },
    {
      id: 6,
      phase: "Advanced Optimization",
      title: "Strategic Enhancement",
      description: "As your business grows, we provide advanced strategies, new opportunities, and scaled solutions for continued success.",
      duration: "Quarterly",
      deliverables: ["Growth Strategies", "New Opportunities", "Scaled Solutions"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      highlight: "Growth"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.dataset.stepId);
            setVisibleSteps((prev) => [...new Set([...prev, stepId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('[data-step-id]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  // Add smooth scroll function to Timeline component
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
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3 animate-pulse"></div>
            <span className="tracking-wide">OUR PROCESS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work
            <span className="block text-2xl lg:text-3xl text-gray-600 font-normal mt-2">
              From Scratch to Advanced Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 6-step methodology ensures your financial success through systematic planning, 
            implementation, and continuous optimization.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 z-0">
            <div 
              className="bg-gradient-to-b from-gray-400 to-gray-600 w-full transition-all duration-1000 ease-out"
              style={{ 
                height: `${(visibleSteps.length / steps.length) * 100}%`
              }}
            ></div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                data-step-id={step.id}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 transition-all duration-700 ${
                  visibleSteps.includes(step.id) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    activeStep === index ? 'ring-2 ring-gray-900 shadow-xl scale-105' : ''
                  }`}>
                    {/* Phase Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-gray-700 bg-gray-100 mb-4">
                      <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full mr-2">
                        {step.highlight}
                      </span>
                      Phase {step.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {step.title}
                    </h3>

                    {/* Phase Name */}
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                      {step.phase}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Duration */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Duration
                        </h4>
                        <p className="text-gray-900 font-semibold">
                          {step.duration}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Step {step.id} of {steps.length}</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: steps.length }, (_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                i <= index ? 'bg-gray-400' : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center text-gray-400 group-hover:text-gray-900 transition-colors pt-4">
                      <span className="text-sm font-medium mr-2 group-hover:mr-3 transition-all duration-300">
                        Learn More
                      </span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 bg-gray-100 transform transition-all duration-300 ${
                    visibleSteps.includes(step.id) ? 'scale-100' : 'scale-75'
                  } ${activeStep === index ? 'scale-125 bg-gray-900 text-white' : ''}`}>
                    {step.icon}
                  </div>
                  
                  {/* Animated Ring */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-gray-400 animate-ping ${
                    activeStep === index ? 'block' : 'hidden'
                  }`}></div>
                </div>

                {/* Mobile Spacer */}
                <div className="md:flex-1 md:hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's begin with a consultation to understand your needs and map out your path to financial success.
            </p>
            <button 
              onClick={() => smoothScrollTo('form')}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium inline-flex items-center group"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;