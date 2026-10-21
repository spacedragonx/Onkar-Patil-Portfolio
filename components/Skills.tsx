import React from 'react';
import { SKILL_GROUPS } from '../portfolioData';
import { Terminal, Cpu, Database, Wrench } from 'lucide-react';

const ICONS = [Terminal, Cpu, Database, Wrench];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-paper-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-paper-border">
          <div className="font-mono text-xs text-cobalt font-semibold tracking-wider mb-2">
            03 / TECHNICAL REPERTOIRE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-ink tracking-tight mb-2">
            Skills & technical toolkit.
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary">
            Verified across production code, systems projects, and machine learning pipelines.
          </p>
        </div>

        {/* Typographic Grouping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = ICONS[index % ICONS.length];

            return (
              <div
                key={group.category}
                className="bg-paper-card p-6 rounded-lg border border-paper-border flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-paper-border">
                    <div className="flex items-center gap-2">
                      <Icon size={17} className="text-cobalt" />
                      <h3 className="font-sans font-bold text-[17px] text-ink">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-ink-muted">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Clean unboxed inline labels with typographic separators */}
                  <div className="flex flex-wrap items-center gap-y-2.5 gap-x-3.5 text-[14.5px] font-mono text-ink-secondary leading-relaxed">
                    {group.items.map((item, idx) => (
                      <React.Fragment key={item}>
                        <span className="text-ink hover:text-cobalt transition-colors select-all">
                          {item}
                        </span>
                        {idx < group.items.length - 1 && (
                          <span className="text-paper-darkborder" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-paper-border font-mono text-xs text-ink-muted flex items-center justify-between">
                  <span>VERIFIED PROFICIENCY</span>
                  <span>{group.items.length} TECHNOLOGIES</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering standards note */}
        <div className="mt-12 bg-paper p-5 rounded-lg border border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-ink-secondary">
          <div className="space-y-1">
            <span className="font-mono text-ink font-semibold uppercase text-xs block">
              Pragmatic Engineering Standard:
            </span>
            <p className="text-sm font-sans leading-relaxed">
              Tools are chosen to minimize cognitive overhead, enforce memory safety, and maximize measurable performance—not to pad a resume.
            </p>
          </div>
          <div className="font-mono text-xs text-ink-muted shrink-0">
            FIELD REF: SPEC-2026
          </div>
        </div>

      </div>
    </section>
  );
};