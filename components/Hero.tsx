import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-electric-400/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-electric-400/30 rounded-full bg-electric-400/10 text-electric-400 font-mono text-xs tracking-wider">
          SYSTEM_READY
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-white mb-6 tracking-tight">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-blue-600">
            High-Performance
          </span>{' '}
          Systems.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          C++ Developer | Open Source Contributor | Competitive Programmer
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="group px-8 py-3 bg-electric-400 text-slate-900 font-bold rounded hover:bg-electric-500 transition-all flex items-center gap-2 cursor-pointer"
          >
            View Work
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="px-8 py-3 border border-slate-700 text-slate-300 rounded hover:border-electric-400 hover:text-electric-400 transition-colors font-mono cursor-pointer"
          >
            Read_More()
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};