import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: 'general',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-premium-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Get in touch and let's discuss how 
            we can create intelligent solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="premium-input w-full px-6 py-4 rounded-2xl text-lg focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="premium-input w-full px-6 py-4 rounded-2xl text-lg focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-lg font-semibold text-gray-700 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="premium-input w-full px-6 py-4 rounded-2xl text-lg focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-lg font-semibold text-gray-700 mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="premium-input w-full px-6 py-4 rounded-2xl text-lg focus:outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="generative-ai">Generative AI</option>
                    <option value="whatsapp-marketing">WhatsApp Marketing</option>
                    <option value="agentic-ai">Agentic AI Systems</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="consulting">AI Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    className="premium-input w-full px-6 py-4 rounded-2xl text-lg focus:outline-none resize-none"
                    placeholder="Tell us about your project, challenges, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="premium-button w-full px-8 py-6 text-white rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="h-6 w-6 mr-3" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Get in touch</h2>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="premium-gradient p-4 rounded-2xl shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
                    <p className="text-lg text-gray-600 mb-2">info.pcisservice@gmail.comi</p>
               
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="premium-gradient-alt p-4 rounded-2xl shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
                    <p className="text-lg text-gray-600 mb-2">+91 9593311014</p>
                    
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="premium-gradient-blue p-4 rounded-2xl shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
                    <p className="text-lg text-gray-600 mb-2">74/2, Ground Floor, Gora Bazar, Dumdum Cant, Kolkata, West Bengal - 700028</p>
                   
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="premium-gradient p-4 rounded-2xl shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Presence</h3>
                    <p className="text-lg text-gray-600 mb-2">Serving clients in 15+ countries</p>
                    <p className="text-lg text-gray-600">24/7 support available</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-16 premium-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <div className="premium-gradient p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium">Response within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="premium-gradient p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium">Free consultation call within 24 hours</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="premium-gradient p-2 rounded-full mr-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-medium">Detailed project proposal within 3-5 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-premium-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our AI services.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How long does a typical AI project take?',
                answer: 'Project timelines vary based on complexity, but most projects take 8-16 weeks from concept to deployment. We provide detailed timelines during the consultation phase.',
              },
              {
                question: 'Do you provide ongoing support after deployment?',
                answer: 'Yes, we offer comprehensive support packages including monitoring, updates, and optimization. Our team ensures your AI solutions continue to perform optimally.',
              },
              {
                question: 'Can you integrate AI into our existing systems?',
                answer: 'Absolutely! We specialize in seamless integration with existing business systems. Our team conducts thorough analysis to ensure smooth integration without disrupting operations.',
              },
              {
                question: 'What industries do you work with?',
                answer: 'We work across various industries including healthcare, finance, e-commerce, manufacturing, and more. Our AI solutions are adaptable to diverse business needs.',
              },
            ].map((faq, index) => (
              <div key={index} className="premium-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;