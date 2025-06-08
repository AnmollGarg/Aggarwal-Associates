import React from 'react';

const OurCustomers = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Garg",
      business: "Garg Textiles Pvt. Ltd.",
      service: "Tax Optimization",
      photo: "👨‍💼",
      review: "Exceptional service! They helped us save 25% on our annual tax liability. The team's expertise in tax planning is outstanding.",
      rating: 5,
      location: "Delhi"
    },
    {
      id: 2,
      name: "Priya Aggarwal",
      business: "Aggarwal Enterprises",
      service: "Financial Auditing",
      photo: "👩‍💼",
      review: "Professional and thorough audit process. They identified several areas for improvement that we hadn't considered.",
      rating: 5,
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Sunil Jain",
      business: "Jain Brothers Trading",
      service: "Business Advisory",
      photo: "👨‍💼",
      review: "Their business advisory services transformed our operations. Revenue increased by 40% following their recommendations.",
      rating: 5,
      location: "Jaipur"
    },
    {
      id: 4,
      name: "Meera Khandelwal",
      business: "Khandelwal Industries",
      service: "Compliance Support",
      photo: "👩‍💼",
      review: "Complete peace of mind with their compliance management. Never missed a deadline since we started working with them.",
      rating: 5,
      location: "Pune"
    },
    {
      id: 5,
      name: "Amit Mittal",
      business: "Mittal Steel Corporation",
      service: "Investment Planning",
      photo: "👨‍💼",
      review: "Excellent investment strategies that aligned perfectly with our growth plans. Our portfolio performance exceeded expectations.",
      rating: 5,
      location: "Hyderabad"
    },
    {
      id: 6,
      name: "Sonia Kansal",
      business: "Kansal Fashion House",
      service: "Financial Reporting",
      photo: "👩‍💼",
      review: "Crystal clear financial reports that help us make informed decisions. The monthly analytics are incredibly detailed.",
      rating: 5,
      location: "Bangalore"
    },
    {
      id: 7,
      name: "Vikram Bansal",
      business: "Bansal Construction Ltd.",
      service: "Tax Optimization",
      photo: "👨‍💼",
      review: "Saved us lakhs in taxes through strategic planning. Their knowledge of construction industry tax laws is impressive.",
      rating: 5,
      location: "Chennai"
    },
    {
      id: 8,
      name: "Kavita Sharma",
      business: "Sharma Pharmaceuticals",
      service: "Business Advisory",
      photo: "👩‍💼",
      review: "Strategic guidance that helped us expand into new markets successfully. ROI on their services is remarkable.",
      rating: 5,
      location: "Kolkata"
    },
    {
      id: 9,
      name: "Arjun Gupta",
      business: "Gupta Electronics",
      service: "Financial Auditing",
      photo: "👨‍💼",
      review: "Thorough and professional audit services. They helped streamline our financial processes significantly.",
      rating: 5,
      location: "Ahmedabad"
    },
    {
      id: 10,
      name: "Neha Agarwal",
      business: "Agarwal Jewelers",
      service: "Compliance Support",
      photo: "👩‍💼",
      review: "Excellent compliance management for our jewelry business. They understand industry-specific requirements perfectly.",
      rating: 5,
      location: "Surat"
    },
    {
      id: 11,
      name: "Rohit Jindal",
      business: "Jindal Auto Parts",
      service: "Investment Planning",
      photo: "👨‍💼",
      review: "Smart investment strategies that diversified our portfolio beautifully. Great returns and risk management.",
      rating: 5,
      location: "Ludhiana"
    },
    {
      id: 12,
      name: "Deepika Singla",
      business: "Singla Food Industries",
      service: "Financial Reporting",
      photo: "👩‍💼",
      review: "Detailed financial insights that transformed our business strategy. Monthly reports are comprehensive and actionable.",
      rating: 5,
      location: "Chandigarh"
    }
  ];

  // Triple the testimonials for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Add smooth scroll function to OurCustomers component
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
      {/* Header - Constrained Width */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-sm font-semibold text-gray-700 border border-gray-200 shadow-sm mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3 animate-pulse"></div>
            <span className="tracking-wide">CLIENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers
            <span className="block text-gray-600">Say About Us</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by hundreds of businesses across India. Here's what our valued clients 
            have to say about their experience with our financial services.
          </p>
        </div>
      </div>

      {/* Testimonials Container - Full Width */}
      <div className="relative testimonials-container">
        {/* Scrolling Testimonials */}
        <div className="flex animate-scroll space-x-8 w-max py-12 px-12">
          {infiniteTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-96"
            >
              <div className="testimonial-card group">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  {/* Photo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                    {testimonial.photo}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mt-1 leading-relaxed">
                      {testimonial.business}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 flex items-center">
                      <span className="mr-1">📍</span>
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-200 mb-6 shadow-sm">
                  {testimonial.service}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-600 ml-3 font-medium">
                    ({testimonial.rating}.0)
                  </span>
                </div>

                {/* Review */}
                <blockquote className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors text-sm font-medium">
                  "{testimonial.review}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-500 font-semibold">
                      Verified Client
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats and CTA - Constrained Width */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">1200+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the same level of professional service and exceptional results 
            that our clients rave about.
          </p>
          <button 
            onClick={() => smoothScrollTo('form')}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium inline-flex items-center group"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fixed CSS to prevent horizontal scrollbar */}
      <style jsx>{`
        .testimonials-container {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 2rem 0;
          overflow: hidden;
          /* Hide horizontal scrollbar completely */
          overflow-x: hidden;
          /* Ensure no horizontal scroll on body */
          max-width: 100vw;
        }
        
        .testimonial-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid rgba(229, 231, 235, 0.8);
          box-shadow: 
            0 10px 25px rgba(0,0,0,0.08),
            0 4px 10px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: auto;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.12),
            0 8px 20px rgba(0,0,0,0.08);
          border-color: rgba(156, 163, 175, 0.4);
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
          /* Adjusted padding to prevent overflow */
          padding-left: 2rem;
          padding-right: 2rem;
          /* Ensure smooth scrolling without visible overflow */
          will-change: transform;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Global fix for horizontal scroll */
        body {
          overflow-x: hidden !important;
        }
        
        /* Ensure the section itself doesn't cause overflow */
        section {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default OurCustomers;