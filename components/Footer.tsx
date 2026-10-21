import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-paper text-ink font-sans text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-paper-border">
          
          {/* Brand & Note */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-sans font-bold tracking-tight text-ink uppercase text-sm">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-ink-secondary text-xs">
              Thoughtful engineering, documented through work.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-mono text-xs text-ink-muted">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cobalt transition-colors"
            >
              GitHub
            </a>
            <span className="text-paper-darkborder">/</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cobalt transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-paper-darkborder">/</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cobalt transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-secondary hover:text-cobalt transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

        {/* Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-ink-muted">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            TYPESET IN PLUS JAKARTA SANS & JETBRAINS MONO
          </div>
        </div>
      </div>
    </footer>
  );
};