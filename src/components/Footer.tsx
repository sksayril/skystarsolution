import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: Twitter,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 w-full bg-white/70 backdrop-blur-lg border-t border-white/20 py-10 px-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mt-24">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-extrabold text-gradient">Sky Star</span>
        <span className="text-gray-500 font-medium text-sm">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      <div className="flex gap-6">
        {socials.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full p-2 transition-all duration-300 hover:bg-gradient-to-tr hover:from-indigo-400 hover:to-pink-400 hover:scale-110 shadow-md"
            aria-label={name}
          >
            <Icon className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer; 