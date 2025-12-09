import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
};

const projectData: Project[] = [
  {
    title: "Multi-threaded File Downloader",
    description: "Engineered a high-performance downloader using C++17 and advanced synchronization techniques (mutexes, semaphores) to optimize network bandwidth utilization by splitting files into concurrent chunks.",
    tech: ["C++17", "Multithreading", "HTTP", "Mutex"],
    link: "https://github.com/spacedragonx/File-Downloader",
    featured: true
  },
  {
    title: "Microsoft Presidio Contributor",
    description: "Contributed to this major open-source security project by optimizing regex patterns and improving PII detection accuracy. Focused on reducing false positives in text analysis pipelines.",
    tech: ["Python", "Regex", "Security", "Open Source"],
    link: "https://github.com/microsoft/presidio/pull/1532",
    featured: true
  },
  {
    title: "Pune Bus Route Navigator",
    description: "A C++ navigation engine utilizing Dijkstra’s algorithm and custom STL data structures to calculate optimal routes in dense public transit networks with sub-millisecond query responses.",
    tech: ["C++", "STL", "Graph Theory", "Algorithms"],
    link: "https://github.com/spacedragonx/Pune-Bus-Traversal"
  },
  {
    title: "Plant Disease Detection",
    description: "Developed a ResNet-34 based AI model using PyTorch and Transfer Learning to detect plant diseases from leaf images, achieving 96% validation accuracy on a custom dataset.",
    tech: ["PyTorch", "Python", "Deep Learning", "ResNet"],
    link: "https://github.com/spacedragonx/PDD"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-850 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-mono font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-electric-400">03.</span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-900 rounded-lg p-8 border border-slate-800 hover:border-electric-400 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-400/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-electric-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-electric-400 transition-all duration-300 hover:scale-125"
                    aria-label={`View code for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-electric-400 transition-all duration-300 hover:scale-125"
                    aria-label={`External link for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-all duration-300 group-hover:scale-105 origin-left">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="mb-6">
                 <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500">
                  {project.tech.map(t => (
                    <li key={t} className="bg-slate-800 px-2 py-1 rounded text-slate-300">
                      {t}
                    </li>
                  ))}
                 </ul>
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-slate-700 rounded text-sm font-mono text-slate-300 group-hover:bg-electric-400/10 group-hover:border-electric-400 group-hover:text-electric-400 transition-all"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};