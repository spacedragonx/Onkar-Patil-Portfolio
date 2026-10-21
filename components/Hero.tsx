import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

interface TraversalNode {
  id: string;
  number: string;
  title: string;
  annotation: string;
  coords: { x: number; y: number };
}

const NODES: TraversalNode[] = [
  {
    id: 'n1',
    number: '01',
    title: 'Problem Formulation',
    annotation: 'Isolating root constraints from noisy real-world requirements.',
    coords: { x: 30, y: 70 },
  },
  {
    id: 'n2',
    number: '02',
    title: 'Model & Architecture',
    annotation: 'Designing principled algorithms: neural topologies, graph traversals, and concurrency models.',
    coords: { x: 260, y: 25 },
  },
  {
    id: 'n3',
    number: '03',
    title: 'Empirical Rigor',
    annotation: 'Validating with loss surfaces, unit tests, and performance profiling.',
    coords: { x: 490, y: 80 },
  },
  {
    id: 'n4',
    number: '04',
    title: 'Working System',
    annotation: 'Deploying deterministic, maintainable software that solves the problem.',
    coords: { x: 710, y: 35 },
  },
];

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('n2');
  const [lineDrawn, setLineDrawn] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineDrawn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedNodeData = NODES.find(n => n.id === activeNode) || NODES[1];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-paper-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top editorial kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-paper-border text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="text-cobalt font-semibold">FIG. 00</span>
            <span>·</span>
            <span>ENGINEERING NOTEBOOK</span>
            <span>·</span>
            <span>VOLUME 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span>LOCATION:</span>
            <span className="text-ink font-medium">{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-ink uppercase mb-2">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-ink-secondary leading-snug">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Body */}
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, 'work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper font-sans text-xs font-medium rounded hover:bg-cobalt transition-colors duration-200"
              >
                <span>Explore selected work</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-paper-darkborder text-ink font-sans text-xs font-medium rounded hover:border-cobalt hover:text-cobalt transition-colors duration-200"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Understated metadata line */}
            <div className="pt-6 border-t border-paper-border font-mono text-xs text-ink-muted tracking-wider">
              {PERSONAL_INFO.metadata}
            </div>
          </div>

          {/* Right Column: Signature Interaction — Traversal Diagram */}
          <div className="lg:col-span-5 bg-paper-card border border-paper-border rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-paper-border text-xs">
              <span className="font-mono text-ink-muted">SCHEMATIC 0.1</span>
              <span className="font-mono text-[11px] text-cobalt">Graph Traversal & Method</span>
            </div>

            <p className="text-xs text-ink-secondary mb-4 leading-relaxed font-sans">
              A continuous thread linking initial problem formulation to verified runtime execution. Click or hover any marker to examine the method.
            </p>

            {/* Interactive SVG Diagram */}
            <div className="relative w-full h-36 bg-paper border border-paper-border rounded p-2 overflow-hidden mb-3">
              <svg viewBox="0 0 760 110" className="w-full h-full">
                {/* Background hairline grid */}
                <defs>
                  <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E2D9" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="760" height="110" fill="url(#heroGrid)" />

                {/* Connecting animated path */}
                <path
                  d="M 30,70 C 130,70 170,25 260,25 C 350,25 390,80 490,80 C 580,80 620,35 710,35"
                  fill="none"
                  stroke="#3455DB"
                  strokeWidth="1.5"
                  strokeDasharray="900"
                  strokeDashoffset={lineDrawn ? '0' : '900'}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Secondary guide dashed line */}
                <path
                  d="M 30,70 L 710,35"
                  fill="none"
                  stroke="#D1CDC2"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />

                {/* Render Nodes */}
                {NODES.map((node) => {
                  const isActive = node.id === activeNode;
                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer group"
                      onClick={() => setActiveNode(node.id)}
                      onMouseEnter={() => setActiveNode(node.id)}
                    >
                      {/* Outer pulse circle when active */}
                      {isActive && (
                        <circle
                          cx={node.coords.x}
                          cy={node.coords.y}
                          r="14"
                          fill="rgba(52, 85, 219, 0.12)"
                          stroke="#3455DB"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      )}

                      {/* Main node marker */}
                      <circle
                        cx={node.coords.x}
                        cy={node.coords.y}
                        r="7"
                        fill={isActive ? '#3455DB' : '#FFFFFF'}
                        stroke={isActive ? '#3455DB' : '#57554E'}
                        strokeWidth="1.75"
                        className="transition-colors duration-200"
                      />

                      {/* Node index number */}
                      <text
                        x={node.coords.x}
                        y={node.coords.y + (node.coords.y > 50 ? -14 : 22)}
                        textAnchor="middle"
                        className={`font-mono text-[10px] font-semibold select-none ${
                          isActive ? 'fill-cobalt' : 'fill-ink-muted'
                        }`}
                      >
                        [{node.number}]
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Node Detail Note */}
            <div className="bg-paper-subtle p-3 rounded border border-paper-border text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[11px] font-bold text-cobalt">
                  {selectedNodeData.number} / {selectedNodeData.title.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-ink-muted">INSPECTION</span>
              </div>
              <p className="text-ink-secondary text-[11px] leading-relaxed">
                {selectedNodeData.annotation}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-ink-muted">
              <span>ALGORITHMIC TRACE: INITIATED</span>
              <span className="text-cobalt">04 NODES ACTIVE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};