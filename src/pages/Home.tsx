import React from 'react';
import { ArrowRight, Brain, Zap, Globe, Users, CheckCircle, Star, Award, TrendingUp, ShieldCheck, Code2, Smartphone, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechnologyCarousel from '../components/TechnologyCarousel';
import FloatingElements from '../components/FloatingElements';
import { useInView } from '../components/useInView';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import TentacleBackground from '../components/TentacleBackground';
import TechRotator from '../components/TechRotator';
import ClientCarousel from '../components/ClientCarousel';

const timelineSteps = [
  {
    phase: '01',
    title: 'Discovery & Analysis',
    description: 'We dive deep into your business requirements, analyze existing systems, and identify AI opportunities that can drive maximum value.',
    details: ['Business Process Analysis', 'Data Assessment', 'Technology Audit', 'ROI Evaluation'],
    icon: Brain,
    position: 'left',
    gradient: 'premium-gradient',
  },
  {
    phase: '02',
    title: 'Strategy & Architecture',
    description: 'Develop a comprehensive AI strategy and design scalable solution architecture tailored to your specific needs.',
    details: ['Solution Design', 'Technology Selection', 'Architecture Planning', 'Risk Assessment'],
    icon: Zap,
    position: 'right',
    gradient: 'premium-gradient-alt',
  },
  {
    phase: '03',
    title: 'Development & Training',
    description: 'Build and train AI models, develop applications, and integrate systems using cutting-edge technologies.',
    details: ['Model Development', 'Application Building', 'System Integration', 'Quality Assurance'],
    icon: Globe,
    position: 'left',
    gradient: 'premium-gradient-blue',
  },
  {
    phase: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing, performance optimization, and fine-tuning to ensure optimal AI model performance.',
    details: ['Performance Testing', 'Model Optimization', 'Security Validation', 'User Acceptance Testing'],
    icon: ShieldCheck,
    position: 'right',
    gradient: 'premium-gradient-blue',
  },
  {
    phase: '05',
    title: 'Deployment & Monitoring',
    description: 'Deploy to production with comprehensive monitoring, analytics, and ongoing support for continuous improvement.',
    details: ['Production Deployment', 'Performance Monitoring', 'Analytics Setup', 'Continuous Support'],
    icon: Award,
    position: 'left',
    gradient: 'premium-gradient',
  },
];

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-premium-light overflow-hidden">
        <TentacleBackground />
        <FloatingElements />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            {/* Glowing badge with centered thunder icon */}
            <motion.div 
              className="relative flex flex-col items-center justify-center px-4 py-2 mb-8 mx-auto rounded-2xl shadow-lg max-w-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ background: 'rgba(220, 220, 255, 0.55)', boxShadow: '0 0 32px 0 rgba(120, 100, 255, 0.18)' }}
            >
              {/* Glowing animated background */}
              <span className="absolute inset-0 rounded-full z-0 animate-pulse-glow" style={{ boxShadow: '0 0 32px 8px #a78bfa, 0 0 64px 16px #818cf8' }}></span>
              {/* Centered thunder icon with glow */}
              <motion.span
                className="z-10 flex items-center justify-center mb-2"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1], filter: [
                  'drop-shadow(0 0 8px #a78bfa)',
                  'drop-shadow(0 0 16px #818cf8)',
                  'drop-shadow(0 0 8px #a78bfa)'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="h-8 w-8 text-gradient" />
              </motion.span>
              {/* Text below icon */}
              <span className="z-10 text-gray-700 text-lg font-semibold tracking-wide">Next-Generation AI Solutions</span>
            </motion.div>
            
            {/* Physics-based animated hero text */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight cursor-pointer"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 80, damping: 12, mass: 0.7 }}
              whileHover={{ scale: 1.04, rotate: -2 }}
              whileTap={{ scale: 0.98, rotate: 2 }}
              style={{ display: 'inline-block', perspective: 800 }}
              onMouseMove={e => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.04)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
              }}
            >
              <span className="text-gradient block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Sky Star</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We create intelligent solutions that revolutionize how businesses operate, 
              connect, and grow in the digital age through cutting-edge AI technology.
            </motion.p>
            
            {/* Tech Rotator Component */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center"
              >
                <TechRotator />
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.07, y: -4, boxShadow: '0 8px 32px 0 rgba(80,80,200,0.18)' }}
                whileTap={{ scale: 0.97, y: 2 }}
                transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                className="inline-block"
              >
                <Link
                  to="/projects"
                  className="premium-button inline-flex items-center px-10 py-5 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Our Work
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.07, y: -4, boxShadow: '0 8px 32px 0 rgba(80,80,200,0.10)' }}
                whileTap={{ scale: 0.97, y: 2 }}
                transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="premium-button-secondary inline-flex items-center px-10 py-5 text-gray-700 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          {/* <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
                <motion.div 
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, label: 'AI Models Deployed', value: '50+', color: 'premium-gradient' },
              { icon: Users, label: 'Happy Clients', value: '100+', color: 'premium-gradient-alt' },
              { icon: Globe, label: 'Countries Served', value: '15+', color: 'premium-gradient-blue' },
              { icon: Zap, label: 'Projects Completed', value: '200+', color: 'premium-gradient-purple' },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`${stat.color} p-4 rounded-2xl inline-block mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-3">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-premium-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating intelligent AI solutions that transform businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Generative AI Development',
                description: 'Custom AI models for content creation, code generation, and creative automation using state-of-the-art language models.',
                features: ['Custom Model Training', 'Content Generation', 'Code Automation'],
                gradient: 'premium-gradient',
              },
              {
                icon: Globe,
                title: 'WhatsApp Marketing AI',
                description: 'Intelligent chatbots and automated marketing campaigns that engage customers and drive conversions.',
                features: ['Smart Chatbots', 'Campaign Automation', 'Lead Generation'],
                gradient: 'premium-gradient-alt',
              },
              {
                icon: Zap,
                title: 'Agentic AI Systems',
                description: 'Autonomous AI agents that handle complex business processes end-to-end without human intervention.',
                features: ['Process Automation', 'Decision Making', 'Smart Workflows'],
                gradient: 'premium-gradient-blue',
              },
              {
                icon: Code2,
                title: 'WebApp Development',
                description: 'Robust, scalable, and modern web applications tailored to your business needs.',
                features: ['Responsive Design', 'API Integration', 'Performance Optimization'],
                gradient: 'premium-gradient-purple',
              },
              {
                icon: Smartphone,
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile apps for iOS and Android, built for performance and usability.',
                features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment'],
                gradient: 'premium-gradient',
              },
              {
                icon: ServerCog,
                title: 'DevOps Implementation',
                description: 'Automated CI/CD pipelines, cloud infrastructure, and monitoring for reliable deployments.',
                features: ['CI/CD Automation', 'Cloud Infrastructure', 'Monitoring & Alerts'],
                gradient: 'premium-gradient-alt',
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-8 group"
                >
                  <div className={`${service.gradient} p-4 rounded-2xl inline-block mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-gradient mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our AI Development Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation from concept to deployment.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full premium-gradient rounded-full"></div>
            
            <div className="space-y-20">
              {timelineSteps.map((step, index) => {
                const IconComponent = step.icon;
                const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
                const baseDelay = 350; // ms (increased for more gap)
                const delay = index * baseDelay;
                const slideFrom = step.position === 'right' ? 'translate-x-24' : '-translate-x-24';
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`flex items-center ${step.position === 'right' ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${step.position === 'right' ? 'text-right' : ''}`}
                      style={{
                        transition: 'opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)',
                        transitionDelay: `${delay}ms`,
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'none' : `scale(0.98) ${step.position === 'right' ? 'translateX(60px)' : 'translateX(-60px)'}`,
                        filter: inView ? 'blur(0)' : 'blur(8px)',
                      }}
                    >
                      <div className="premium-card p-10 rounded-3xl group">
                        <div className={`flex items-center mb-6 ${step.position === 'right' ? 'justify-end' : ''}`}
                          style={{
                            transition: 'opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)',
                            transitionDelay: `${delay + 100}ms`,
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'none' : 'scale(0.8)',
                          }}
                        >
                          <div className={`${step.gradient} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                            {step.phase}
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{step.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className={`flex items-center text-gray-600 ${step.position === 'right' ? 'justify-end' : ''}`}
                              style={{
                                transition: 'opacity 1s cubic-bezier(.4,0,.2,1)',
                                transitionDelay: `${delay + 200 + detailIndex * 80}ms`,
                                opacity: inView ? 1 : 0,
                              }}
                            >
                              <CheckCircle className={`h-5 w-5 text-gradient ${step.position === 'right' ? 'ml-3 order-2' : 'mr-3'}`} />
                              <span className="font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="w-2/12 flex justify-center"
                      style={{
                        transition: 'opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)',
                        transitionDelay: `${delay + 100}ms`,
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'none' : 'scale(0.7)',
                        filter: inView ? 'blur(0)' : 'blur(6px)',
                      }}
                    >
                      <div className={`${step.gradient} p-6 rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Carousel */}
      <TechnologyCarousel />

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Why Choose Us Section */}
      <section className="py-24 bg-premium-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose NeuralFlow AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Expert Team',
                description: 'Our team includes top AI researchers, engineers, and business strategists with years of experience.',
                metric: '10+ Years',
                gradient: 'premium-gradient',
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of successful AI implementations across various industries with measurable ROI.',
                metric: '200+ Projects',
                gradient: 'premium-gradient-alt',
              },
              {
                icon: TrendingUp,
                title: 'Cutting-Edge Tech',
                description: 'We use the latest AI technologies and frameworks to build future-ready solutions.',
                metric: '15+ Technologies',
                gradient: 'premium-gradient-blue',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Serving clients worldwide with 24/7 support and multilingual capabilities.',
                metric: '15+ Countries',
                gradient: 'premium-gradient-purple',
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="premium-card p-8 rounded-3xl text-center group">
                  <div className={`${feature.gradient} p-4 rounded-2xl inline-block mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-4">{feature.metric}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-24 bg-premium-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses that transformed with our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'TechCorp Solutions',
                industry: 'E-commerce',
                result: '300% increase in conversion rates',
                description: 'Implemented AI-powered recommendation engine and chatbot system.',
                improvement: '+300%',
                gradient: 'premium-gradient',
              },
              {
                company: 'HealthCare Plus',
                industry: 'Healthcare',
                result: '85% reduction in processing time',
                description: 'Automated patient data analysis and appointment scheduling system.',
                improvement: '-85%',
                gradient: 'premium-gradient-alt',
              },
              {
                company: 'FinanceFlow',
                industry: 'Financial Services',
                result: '95% accuracy in fraud detection',
                description: 'Machine learning model for real-time fraud detection and prevention.',
                improvement: '95%',
                gradient: 'premium-gradient-blue',
              },
            ].map((story, index) => (
              <div key={index} className="premium-card p-8 rounded-3xl group">
                <div className={`${story.gradient} text-white text-5xl font-bold mb-6 p-4 rounded-2xl inline-block shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {story.improvement}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.company}</h3>
                <div className="text-sm text-gradient font-semibold mb-6">{story.industry}</div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{story.description}</p>
                <div className="text-xl font-bold text-gray-900">{story.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join hundreds of companies that have already revolutionized their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="premium-button inline-flex items-center px-12 py-6 text-white rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <Link
              to="/services"
              className="premium-button-secondary inline-flex items-center px-12 py-6 text-gray-700 rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;