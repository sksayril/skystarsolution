import React from 'react';
import { Brain, MessageSquare, Bot, Smartphone, Cloud, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Generative AI Development',
      description: 'Custom AI models for content creation, code generation, and creative automation using cutting-edge language models.',
      features: ['Custom Model Training', 'Content Generation', 'Code Automation', 'Creative AI Solutions'],
      technologies: ['ChatGPT', 'Gemini', 'Ollama', 'DeepSeek'],
      gradient: 'premium-gradient',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Marketing Automation',
      description: 'Intelligent chatbots and automated marketing campaigns that engage customers and drive conversions.',
      features: ['Smart Chatbots', 'Campaign Automation', 'Lead Generation', 'Customer Support'],
      technologies: ['WhatsApp Business API', 'NLP', 'Webhook Integration', 'Analytics'],
      gradient: 'premium-gradient-alt',
    },
    {
      icon: Bot,
      title: 'Agentic AI Systems',
      description: 'Autonomous AI agents that handle complex business processes from start to finish without human intervention.',
      features: ['Process Automation', 'Decision Making', 'Task Orchestration', 'Smart Workflows'],
      technologies: ['Multi-Agent Systems', 'Reinforcement Learning', 'API Integration', 'Event-Driven Architecture'],
      gradient: 'premium-gradient-blue',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with integrated AI capabilities for iOS and Android platforms.',
      features: ['Cross-Platform Development', 'AI Integration', 'Real-time Features', 'Cloud Sync'],
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux'],
      gradient: 'premium-gradient-purple',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud architecture and automated deployment pipelines for AI applications.',
      features: ['Auto-Scaling', 'CI/CD Pipelines', 'Monitoring', 'Security'],
      technologies: ['AWS', 'Google Cloud', 'Kubernetes', 'Jenkins'],
      gradient: 'premium-gradient',
    },
    {
      icon: Zap,
      title: 'AI Integration & Consulting',
      description: 'Strategic consulting and seamless integration of AI capabilities into existing business systems.',
      features: ['System Analysis', 'Integration Strategy', 'Performance Optimization', 'Training & Support'],
      technologies: ['API Development', 'Microservices', 'Database Integration', 'Custom Solutions'],
      gradient: 'premium-gradient-alt',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-premium-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Our <span className="text-gradient">AI Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business operations, 
            enhance customer experiences, and drive unprecedented growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-10 group"
                >
                  <div className={`${service.gradient} p-6 rounded-2xl inline-block mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="premium-gradient p-1.5 rounded-full mr-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-premium-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your business needs, existing systems, and identify AI opportunities.',
                gradient: 'premium-gradient',
              },
              {
                step: '02',
                title: 'Strategy & Design',
                description: 'Develop a comprehensive AI strategy and design the solution architecture.',
                gradient: 'premium-gradient-alt',
              },
              {
                step: '03',
                title: 'Development & Training',
                description: 'Build and train AI models, develop applications, and integrate systems.',
                gradient: 'premium-gradient-blue',
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Deploy to production, monitor performance, and provide ongoing support.',
                gradient: 'premium-gradient-purple',
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className={`${phase.gradient} text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let's discuss how our AI solutions can solve your specific challenges and 
            drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="premium-button inline-flex items-center px-12 py-6 text-white rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/projects"
              className="premium-button-secondary inline-flex items-center px-12 py-6 text-gray-700 rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;