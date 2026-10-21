import React, { useState, useEffect } from 'react';
import { Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['work', 'about', 'skills', 'contact'];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 120) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Selected Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-paper-border py-3 shadow-xs'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          onClick={scrollToTop}
          className="text-base font-sans font-bold tracking-tight text-ink uppercase hover:text-cobalt transition-colors whitespace-nowrap shrink-0"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative group ${
                  isActive ? 'text-cobalt font-semibold' : 'text-ink-secondary hover:text-ink'
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cobalt transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action / GitHub link */}
        <div className="hidden md:flex items-center gap-4 shrink-0 font-mono text-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink hover:text-cobalt transition-colors whitespace-nowrap shrink-0 py-1"
            aria-label="GitHub Profile"
          >
            <Github size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="text-ink-muted" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-3.5 py-1.5 bg-ink text-paper text-xs font-sans font-medium rounded hover:bg-cobalt transition-colors whitespace-nowrap shrink-0"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1.5 text-ink hover:text-cobalt transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Clean Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-paper border-b border-paper-border px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="py-1 text-ink-secondary hover:text-cobalt transition-colors block border-l-2 border-transparent hover:border-cobalt pl-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-paper-border flex flex-col gap-2 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-2 text-ink hover:text-cobalt"
            >
              <div className="flex items-center gap-2">
                <Github size={14} />
                <span>GitHub Profile</span>
              </div>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full text-center py-2.5 bg-ink text-paper text-xs font-sans font-medium rounded hover:bg-cobalt transition-colors mt-2"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};