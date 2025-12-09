import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Code2, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-850 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl font-mono font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-electric-400">01.</span> About Me
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a detail-oriented <strong className="text-white">C++ Developer</strong> passionate about performance optimization, multithreading, and robust algorithms. 
              </p>
              <p>
                My journey involves solving complex computational problems, having tackled <strong className="text-white">400+ problems</strong> on LeetCode and Codeforces. I believe in writing code that is not just functional, but efficient and memory-safe.
              </p>
              <p>
                Currently, I actively contribute to major open-source security projects like <strong className="text-electric-400">Microsoft Presidio</strong>, helping to improve PII detection mechanisms.
              </p>
            </div>
          </div>
          
          <div 
            className={`grid grid-cols-1 gap-6 transition-all duration-700 ease-out delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-electric-400/50 transition-colors group">
              <Cpu className="text-electric-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">System Optimization</h3>
              <p className="text-slate-500">Deep understanding of memory management, pointers, and low-level system architecture.</p>
            </div>
            
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-electric-400/50 transition-colors group">
              <Code2 className="text-electric-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Algorithmic Mastery</h3>
              <p className="text-slate-500">Advanced knowledge of data structures and algorithms, honed through competitive programming.</p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-electric-400/50 transition-colors group">
              <Globe className="text-electric-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
              <p className="text-slate-500">Committed to giving back to the community through high-quality code contributions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};