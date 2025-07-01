import React from 'react';

import { ExternalLink, Github, Brain, MessageSquare, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Content Generator',
      description: 'A sophisticated content generation platform using GPT models to create marketing copy, blog posts, and social media content at scale.',
      image: 'https://aichef.nexora-ai.co.in/cutinerylogo1.png',
      category: 'Generative AI',
      icon: Brain,
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      features: ['Multi-format content', 'Brand voice training', 'SEO optimization', 'Bulk generation'],
      gradient: 'premium-gradient',
    },
    {
      title: 'WhatsApp Marketing Automation Suite',
      description: 'Complete marketing automation platform with intelligent chatbots, campaign management, and advanced analytics for WhatsApp Business.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Marketing AI',
      icon: MessageSquare,
      technologies: ['Next.js', 'WhatsApp API', 'Redis', 'PostgreSQL'],
      features: ['Smart chatbots', 'Campaign automation', 'Analytics dashboard', 'Lead scoring'],
      gradient: 'premium-gradient-alt',
    },
    {
      title: 'Intelligent E-commerce Assistant',
      description: 'AI-powered shopping assistant that provides personalized product recommendations and handles customer inquiries across multiple channels.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Agentic AI',
      icon: Globe,
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'Firebase'],
      features: ['Product recommendations', 'Natural language queries', 'Order tracking', 'Multi-channel support'],
      gradient: 'premium-gradient-blue',
    },
    {
      title: 'Smart Healthcare Mobile App',
      description: 'Mobile application with AI-powered symptom checker, appointment scheduling, and telemedicine capabilities for healthcare providers.',
      image: '/public/link23.png',
      category: 'Mobile AI',
      icon: Smartphone,
      technologies: ['React Native', 'AWS', 'Machine Learning', 'WebRTC'],
      features: ['Symptom analysis', 'Video consultations', 'Health tracking', 'Prescription management'],
      gradient: 'premium-gradient-purple',
    },
    {
      title: 'Automated Financial Analytics Platform',
      description: 'Enterprise-grade financial analytics platform with predictive modeling, risk assessment, and automated reporting capabilities.',
      image: '/public/link32.png',
      category: 'Business Intelligence',
      icon: Brain,
      technologies: ['React', 'Python', 'Apache Kafka', 'PostgreSQL'],
      features: ['Predictive analytics', 'Risk modeling', 'Real-time dashboards', 'Automated reports'],
      gradient: 'premium-gradient',
    },
    {
      title: 'AI Voice Assistant Integration',
      description: 'Multi-platform voice assistant with natural language processing, task automation, and smart home integration capabilities.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Voice AI',
      icon: MessageSquare,
      technologies: ['Flutter', 'Google Cloud', 'Speech-to-Text', 'IoT Integration'],
      features: ['Voice commands', 'Smart home control', 'Multi-language support', 'Context awareness'],
      gradient: 'premium-gradient-alt',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-premium-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Our <span className="text-gradient">AI Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge AI solutions that have transformed businesses 
            and delivered exceptional results across various industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 glass-morphism px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gradient">{project.category}</span>
                    </div>
                    <div className={`absolute top-4 right-4 ${project.gradient} p-3 rounded-2xl shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600">
                            <div className="premium-gradient p-1 rounded-full mr-2">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-xs font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 premium-button text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Demo
                      </button>
                      <button className="premium-button-secondary text-gray-700 px-6 py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                        <Github className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-premium-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Project Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions have delivered measurable results across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '200+', label: 'Projects Completed', description: 'Successful AI implementations', gradient: 'premium-gradient' },
              { metric: '99.9%', label: 'Uptime Average', description: 'Reliable system performance', gradient: 'premium-gradient-alt' },
              { metric: '85%', label: 'Efficiency Gain', description: 'Average process improvement', gradient: 'premium-gradient-blue' },
              { metric: '24/7', label: 'Support Available', description: 'Round-the-clock assistance', gradient: 'premium-gradient-purple' },
            ].map((stat, index) => (
              <div key={index} className="premium-card p-8 rounded-3xl text-center group">
                <div className={`${stat.gradient} text-white text-5xl font-bold mb-4 p-4 rounded-2xl inline-block shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {stat.metric}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600 text-lg">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Ready to Start Your AI Project?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let's discuss how we can build a custom AI solution that transforms your business operations.
          </p>
          <a
            href="/contact"
            className="premium-button inline-flex items-center px-12 py-6 text-white rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;