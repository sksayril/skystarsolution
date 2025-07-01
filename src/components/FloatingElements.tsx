import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/30"></div>
      
      {/* Animated tentacle-like connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="tentacle1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="tentacle2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f093fb" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f5576c" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="tentacle3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Flowing tentacle paths */}
        <path
          d="M0,300 Q400,100 800,300 T1600,200 L1920,150 L1920,0 L0,0 Z"
          fill="url(#tentacle1)"
          className="animate-pulse"
        />
        <path
          d="M0,500 Q600,350 1200,500 T1920,400 L1920,0 L0,0 Z"
          fill="url(#tentacle2)"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M0,700 Q800,600 1600,700 T1920,600 L1920,0 L0,0 Z"
          fill="url(#tentacle3)"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Floating circles with glow effect */}
        <circle cx="200" cy="200" r="6" fill="#667eea" opacity="0.4" className="animate-bounce animate-glow" />
        <circle cx="800" cy="150" r="4" fill="#764ba2" opacity="0.3" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
        <circle cx="1400" cy="300" r="8" fill="#f093fb" opacity="0.3" className="animate-bounce animate-glow" style={{ animationDelay: '1.5s' }} />
        <circle cx="600" cy="400" r="3" fill="#f5576c" opacity="0.4" className="animate-bounce" style={{ animationDelay: '2s' }} />
        <circle cx="1200" cy="250" r="5" fill="#4facfe" opacity="0.3" className="animate-bounce animate-glow" style={{ animationDelay: '0.8s' }} />
        <circle cx="400" cy="350" r="4" fill="#00f2fe" opacity="0.3" className="animate-bounce" style={{ animationDelay: '1.2s' }} />
      </svg>
      
      {/* Premium floating orbs with enhanced effects */}
      <div className="absolute top-20 left-10 w-24 h-24 premium-gradient rounded-full opacity-20 animate-float blur-sm"></div>
      <div className="absolute top-20 left-10 w-16 h-16 premium-gradient rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="absolute top-40 right-20 w-20 h-20 premium-gradient-alt rounded-full opacity-15 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 premium-gradient-alt rounded-full opacity-25 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="absolute bottom-40 left-1/4 w-16 h-16 premium-gradient-blue rounded-full opacity-20 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-10 h-10 premium-gradient-blue rounded-full opacity-30 animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      <div className="absolute top-1/2 right-1/3 w-14 h-14 premium-gradient-purple rounded-full opacity-15 animate-float blur-sm" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 premium-gradient-purple rounded-full opacity-25 animate-float" style={{ animationDelay: '0.8s' }}></div>

      {/* Neural network nodes */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
        <line x1="480" y1="360" x2="960" y2="540" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="960" y1="540" x2="1440" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="480" y1="360" x2="1440" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default FloatingElements;