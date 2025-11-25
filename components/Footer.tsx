import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              {getIcon(link.platform)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;