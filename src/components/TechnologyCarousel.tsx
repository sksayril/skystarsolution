import React from 'react';
import { useInView } from './useInView';

const techImages: Record<string, string> = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'DynamoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'ChatGPT': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
  'Gemini': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg',
  'Ollama': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ollama.svg',
  'DeepSeek': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/deepseek.svg',
  'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  'WhatsApp API': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg',
};

const technologies = [
  { name: 'React', category: 'Frontend', gradient: 'premium-gradient' },
  { name: 'Next.js', category: 'Frontend', gradient: 'premium-gradient-alt' },
  { name: 'Vue.js', category: 'Frontend', gradient: 'premium-gradient-blue' },
  { name: 'MongoDB', category: 'Database', gradient: 'premium-gradient-purple' },
  { name: 'Redis', category: 'Database', gradient: 'premium-gradient' },
  { name: 'Firebase', category: 'Database', gradient: 'premium-gradient-alt' },
  { name: 'DynamoDB', category: 'Database', gradient: 'premium-gradient-blue' },
  { name: 'ChatGPT', category: 'AI', gradient: 'premium-gradient-purple' },
  { name: 'Gemini', category: 'AI', gradient: 'premium-gradient' },
  { name: 'Ollama', category: 'AI', gradient: 'premium-gradient-alt' },
  { name: 'DeepSeek', category: 'AI', gradient: 'premium-gradient-blue' },
  { name: 'Jenkins', category: 'DevOps', gradient: 'premium-gradient-purple' },
  { name: 'Kubernetes', category: 'DevOps', gradient: 'premium-gradient' },
  { name: 'AWS', category: 'Cloud', gradient: 'premium-gradient-alt' },
  { name: 'Google Cloud', category: 'Cloud', gradient: 'premium-gradient-blue' },
  { name: 'React Native', category: 'Mobile', gradient: 'premium-gradient-purple' },
  { name: 'Flutter', category: 'Mobile', gradient: 'premium-gradient' },
  { name: 'WhatsApp API', category: 'Integration', gradient: 'premium-gradient-alt' },
];

// Duplicate the technologies array for seamless loop
const duplicatedTechnologies = [...technologies, ...technologies];

const TechnologyCarousel = () => {
  return (
    <div className="py-20 bg-premium-light overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Our Technology Stack
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cutting-edge technologies powering next-generation AI solutions
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left space-x-8">
          {duplicatedTechnologies.map((tech, index) => {
            const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
            const delay = (index % technologies.length) * 80;
            return (
              <div
                key={`${tech.name}-${index}`}
                ref={ref}
                className="flex-shrink-0 premium-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[250px] group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'scale(0.92) translateY(40px)',
                  filter: inView ? 'blur(0)' : 'blur(8px)',
                  transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1), filter 0.7s cubic-bezier(.4,0,.2,1)',
                  transitionDelay: `${delay}ms`,
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`${tech.gradient} p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 bg-white/80"`}>
                    <img
                      src={techImages[tech.name]}
                      alt={tech.name}
                      className="h-14 w-14 object-contain drop-shadow-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-gradient font-semibold">{tech.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCarousel;