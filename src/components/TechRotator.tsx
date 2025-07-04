import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code2, Smartphone, Cloud, Megaphone } from 'lucide-react';

const technologies = [
  {
    name: 'AI/ML Solutions',
    icon: Brain,
    color: 'text-purple-400',
    bgColor: 'bg-purple-100',
    description: 'Intelligent systems that learn and adapt.'
  },
  {
    name: 'Web Development',
    icon: Code2,
    color: 'text-blue-400',
    bgColor: 'bg-blue-100',
    description: 'Modern web applications and platforms.'
  },
  {
    name: 'Mobile Apps',
    icon: Smartphone,
    color: 'text-green-400',
    bgColor: 'bg-green-100',
    description: 'Native and cross-platform mobile solutions.'
  },
  {
    name: 'Cloud Services',
    icon: Cloud,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-100',
    description: 'Scalable cloud infrastructure and automation.'
  },
  {
    name: 'Digital Marketing',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'bg-pink-100',
    description: 'Grow your business with digital strategies.'
  }
];

const TechRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let timer: number | undefined;
    if (autoRotate) {
      timer = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % technologies.length);
      }, 3000); // Change every 3 seconds
    }
    return () => window.clearInterval(timer);
  }, [autoRotate]);

  // Calculate positions for each technology in a circle
  const getPosition = (index: number, total: number, radius: number = 120) => {
    // Calculate the angle for this item
    const angle = ((index - currentIndex) * (2 * Math.PI)) / total;
    
    // Calculate x and y positions on the circle
    const x = Math.sin(angle) * radius;
    const y = -Math.cos(angle) * radius;
    
    // Calculate scale and opacity based on position (items in front are larger and more opaque)
    const scale = 0.6 + 0.4 * (y / radius + 1) / 2;
    const opacity = 0.4 + 0.6 * (y / radius + 1) / 2;
    
    // Calculate z-index (items in front have higher z-index)
    const zIndex = Math.floor(50 * (y / radius + 1));
    
    return { x, y, scale, opacity, zIndex };
  };

  return (
    <div className="relative h-64 flex items-center justify-center">
      {/* Central highlighted technology */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`central-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute z-50 flex flex-col items-center"
        >
          <div className={`rounded-full p-6 ${technologies[currentIndex].bgColor} shadow-lg mb-3`}>
            {React.createElement(technologies[currentIndex].icon, {
              className: `w-12 h-12 ${technologies[currentIndex].color}`
            })}
          </div>
          <h3 className={`text-2xl font-bold ${technologies[currentIndex].color} text-center`}>
            {technologies[currentIndex].name}
          </h3>
          <p className="text-gray-600 text-center max-w-xs mt-2">
            {technologies[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Circular rotating technologies */}
      <div className="absolute inset-0 flex items-center justify-center">
        {technologies.map((tech, index) => {
          const { x, y, scale, opacity, zIndex } = getPosition(index, technologies.length);
          const IconComponent = tech.icon;
          
          return (
            <motion.div
              key={`circle-${index}`}
              animate={{ 
                x, 
                y, 
                scale,
                opacity,
                zIndex
              }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              className="absolute cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setAutoRotate(false);
                // Resume auto-rotation after 10 seconds of inactivity
                setTimeout(() => setAutoRotate(true), 10000);
              }}
            >
              <div className={`rounded-full p-3 ${tech.bgColor} shadow-md flex items-center justify-center`}>
                <IconComponent className={`w-6 h-6 ${tech.color}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-4 flex space-x-2">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAutoRotate(false);
              // Resume auto-rotation after 10 seconds of inactivity
              setTimeout(() => setAutoRotate(true), 10000);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-yellow-400 w-4' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Show ${technologies[index].name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechRotator;
