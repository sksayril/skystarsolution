import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            {/* <div className="bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              
            </div> */}
            <span className="flex items-center">
              <img src="/skystarlogo.png" alt="Sky Star Logo" className="h-12 w-12 mr-2 drop-shadow" />
              <span className="text-2xl font-extrabold font-display text-gray-900 tracking-tight group-hover:text-yellow-600 transition-colors duration-300">
                Sky Star
              </span>
            </span>
            <div className="text-xs text-gray-400 font-medium group-hover:text-yellow-100 transition-colors duration-300">AI Solutions</div>
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
                    : 'text-gray-900 hover:text-yellow-400'}
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
            className="md:hidden p-3 rounded-xl text-gray-900 hover:text-yellow-400 hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
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
                      : 'text-gray-900 hover:text-yellow-400'}
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