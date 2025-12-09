import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section logic
      const sections = ['about', 'skills', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in the top third of the screen
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-electric-400 font-mono font-bold text-lg hover:text-white transition-colors group"
        >
          <Terminal size={24} className="group-hover:rotate-12 transition-transform" />
          <span>dev::cpp</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-mono text-sm transition-all duration-300 relative group py-2 ${
                  isActive ? 'text-electric-400' : 'text-slate-400 hover:text-electric-400'
                }`}
              >
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">./</span>
                {link.name.toLowerCase()}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-electric-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          
          <a 
            href="mailto:onkarpatil729@gmail.com" 
            className="ml-4 px-5 py-2 text-sm font-mono font-semibold text-slate-900 bg-electric-400 rounded hover:bg-electric-500 transition-all hover:scale-105 active:scale-95"
          >
            Hire_Me()
          </a>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-electric-400 transition-colors p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-lg text-slate-300 hover:text-electric-400 hover:pl-2 transition-all block border-l-2 border-transparent hover:border-electric-400 pl-0"
            >
              {`./${link.name.toLowerCase()}`}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800">
             <a 
              href="mailto:onkarpatil729@gmail.com"
              className="block w-full text-center py-3 bg-electric-400/10 text-electric-400 font-mono font-bold rounded border border-electric-400 hover:bg-electric-400 hover:text-slate-900 transition-all"
            >
              Hire_Me()
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};