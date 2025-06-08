import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const services = [
    'Tax Optimization',
    'Financial Auditing',
    'Business Advisory',
    'Compliance Support',
    'Investment Planning',
    'Financial Reporting'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only - no backend submission
    console.log('Form Data:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3 animate-pulse"></div>
            <span className="tracking-wide">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform
            <span className="block text-gray-600">Your Financial Future?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your financial goals and create a customized strategy 
            that drives real results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our expert team is ready to help you navigate your financial challenges 
                and unlock new opportunities for growth.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-2">Speak with our experts directly</p>
                  <p className="text-gray-900 font-medium">+91 98765 43210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-2">Send us your detailed requirements</p>
                  <p className="text-gray-900 font-medium">contact@caservices.com</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Visit Office</h4>
                  <p className="text-gray-600 mb-2">Meet us for a detailed consultation</p>
                  <p className="text-gray-900 font-medium">Connaught Place, New Delhi</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <span>15+ Years of Industry Experience</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <span>500+ Satisfied Clients Across India</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <span>Personalized Financial Solutions</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <span>24/7 Support & Consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 transition-all duration-300 outline-none ${
                      focusedField === 'name' 
                        ? 'border-gray-900 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 transition-all duration-300 outline-none ${
                        focusedField === 'email' 
                          ? 'border-gray-900 bg-white shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 transition-all duration-300 outline-none ${
                        focusedField === 'phone' 
                          ? 'border-gray-900 bg-white shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Name Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('business')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 transition-all duration-300 outline-none ${
                      focusedField === 'business' 
                        ? 'border-gray-900 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Your business name (optional)"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 transition-all duration-300 outline-none appearance-none ${
                      focusedField === 'service' 
                        ? 'border-gray-900 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows={4}
                    className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 transition-all duration-300 outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-gray-900 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us about your requirements and how we can help you..."
                  />
                  <div className="absolute right-4 top-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg group shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;