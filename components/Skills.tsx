import React, { useState, useEffect, useRef } from 'react';

type SkillCategory = {
  title: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C++ (11/14/17/20)", "C", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Core Concepts",
    skills: ["Multithreading", "STL", "Data Structures", "Algorithms", "OOP", "System Design", "Memory Management"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "CMake", "GDB", "Google Cloud Platform", "Linux/Bash", "CI/CD"]
  },
  {
    title: "Libraries & Frameworks",
    skills: ["PyTorch", "TensorFlow", "Boost", "OpenCV", "Qt"]
  }
];

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once when it comes into view
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "0px 0px -50px 0px"
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
    <section id="skills" ref={sectionRef} className="py-24 bg-slate-900 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className={`text-3xl font-mono font-bold text-white mb-12 flex items-center gap-3 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <span className="text-electric-400">02.</span> Technical Arsenal
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-slate-850 p-8 rounded-lg border border-slate-800 hover:border-slate-700 transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm font-mono text-electric-400 bg-electric-400/5 rounded border border-electric-400/20 hover:bg-electric-400/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};