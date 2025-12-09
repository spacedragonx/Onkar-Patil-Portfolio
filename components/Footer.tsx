import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://github.com/spacedragonx" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-electric-400 transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/onkar-patil-6862b22a5/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-electric-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:onkarpatil729@gmail.com" 
            className="text-slate-400 hover:text-electric-400 transition-colors transform hover:scale-110"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <p className="font-mono text-sm text-slate-500">
          Designed & Built by <span className="text-electric-400">Onkar Bajirao Patil</span>
        </p>
        <p className="text-xs text-slate-600 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};