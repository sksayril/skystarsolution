import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Zap className="h-7 w-7 text-black drop-shadow-[0_0_6px_rgba(255,221,51,0.7)]" />
            </div>
            <div>
              <span className="text-2xl font-extrabold font-display text-white tracking-tight group-hover:text-yellow-200 transition-colors duration-300 drop-shadow-[0_1px_8px_rgba(255,221,51,0.2)]">
                Sky Star
              </span>
              <div className="text-xs text-gray-400 font-medium group-hover:text-yellow-100 transition-colors duration-300">AI Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 overflow-hidden group
                  ${location.pathname === item.path
                    ? 'text-yellow-300'
                    : 'text-white/80 hover:text-yellow-200'}
                `}
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {item.label}
                </span>
                {/* Glowing underline accent */}
                <span
                  className={`absolute left-6 right-6 bottom-2 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg transition-all duration-300
                    ${location.pathname === item.path ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100'}
                  `}
                  style={{ transformOrigin: 'center' }}
                ></span>
                {/* Glassy hover overlay */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl text-white/80 hover:text-yellow-300 hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-br from-black/90 via-gray-900/90 to-black/80 backdrop-blur-xl border-t border-white/10 rounded-b-2xl mb-4 animate-fade-in-down">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 relative overflow-hidden group
                    ${location.pathname === item.path
                      ? 'text-yellow-300'
                      : 'text-white/80 hover:text-yellow-200'}
                  `}
                >
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">{item.label}</span>
                  {/* Glowing underline accent */}
                  <span
                    className={`absolute left-6 right-6 bottom-2 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg transition-all duration-300
                      ${location.pathname === item.path ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100'}
                    `}
                    style={{ transformOrigin: 'center' }}
                  ></span>
                  {/* Glassy hover overlay */}
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;