import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-3xl font-bold text-gray-900">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <AnimatedCounter target={15} suffix="+" />
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <AnimatedCounter target={500} suffix="+" />
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <AnimatedCounter target={100} suffix="%" />
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <AnimatedCounter target={24} suffix="/7" />
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;