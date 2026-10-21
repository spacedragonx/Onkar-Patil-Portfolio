import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, ChevronDown, ChevronUp, Code2 } from 'lucide-react';
import { FEATURED_PROJECTS, ARCHIVE_PROJECTS, Project, ArchiveProject } from '../portfolioData';
import { PlantDiseaseVisual } from './visuals/PlantDiseaseVisual';
import { DeepSpoVisual } from './visuals/DeepSpoVisual';
import { ExpenseTrackerVisual } from './visuals/ExpenseTrackerVisual';

export const Projects: React.FC = () => {
  const [expandedArchiveId, setExpandedArchiveId] = useState<string | null>(null);

  const toggleArchive = (id: string) => {
    setExpandedArchiveId(prev => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-24 border-b border-paper-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-paper-border">
          <div className="font-mono text-xs text-cobalt font-semibold tracking-wider mb-2">
            01 / SELECTED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-ink tracking-tight mb-2">
            Selected work.
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary">
            Different problems. Different approaches. Built to work.
          </p>
        </div>

        {/* Featured Projects: Editorial Asymmetric Layout */}
        <div className="space-y-20 mb-24">
          {FEATURED_PROJECTS.map((project: Project, index: number) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className="pt-6 border-t border-paper-border"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 mb-8 border-b border-paper-border">
                  <div className="font-mono text-xs text-ink-muted">
                    {project.number}
                  </div>
                  <div className="font-mono text-xs text-cobalt font-medium">
                    {project.category}
                  </div>
                </div>

                {/* 2-Column Split: Editorial Documentation & Interactive Custom Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-ink-secondary leading-relaxed font-normal">
                        {project.summary}
                      </p>
                    </div>

                    {/* Technical Approach block */}
                    <div className="bg-paper p-4 rounded border border-paper-border">
                      <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Code2 size={13} className="text-cobalt" />
                        <span>Technical Approach & Implementation:</span>
                      </div>
                      <p className="text-xs text-ink-secondary leading-relaxed">
                        {project.technicalApproach}
                      </p>
                    </div>

                    {/* Technologies: Unboxed text with typographic separators */}
                    <div>
                      <div className="font-mono text-[11px] text-ink-muted uppercase tracking-wider mb-2">
                        Core Technologies:
                      </div>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs font-mono text-ink-secondary">
                        {project.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span className="text-ink font-medium">{tech}</span>
                            {idx < project.technologies.length - 1 && (
                              <span className="text-paper-darkborder" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Links: View source ↗ */}
                    <div className="pt-2 flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper text-xs font-sans font-medium rounded hover:bg-cobalt transition-colors duration-200"
                        aria-label={`View source for ${project.title}`}
                      >
                        <Github size={14} />
                        <span>View source</span>
                        <ArrowUpRight size={13} />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 border border-paper-darkborder text-ink text-xs font-sans font-medium rounded hover:border-cobalt hover:text-cobalt transition-colors duration-200"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Representation Column */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {project.visualType === 'plant-disease' && <PlantDiseaseVisual />}
                    {project.visualType === 'deep-spo' && <DeepSpoVisual />}
                    {project.visualType === 'expense-flow' && <ExpenseTrackerVisual />}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Compact Archive for Additional Work */}
        <div className="pt-16 border-t-2 border-paper-darkborder">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
            <div>
              <div className="font-mono text-xs text-cobalt font-semibold tracking-wider mb-1">
                02 / SYSTEMS ARCHIVE
              </div>
              <h3 className="text-2xl font-sans font-bold text-ink tracking-tight">
                Additional engineering projects & contributions.
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              {ARCHIVE_PROJECTS.length} REPOSITORIES INDEXED
            </span>
          </div>

          <p className="text-sm text-ink-secondary mb-8 max-w-2xl font-sans">
            Lower-level systems projects, algorithmic traversals, and open-source contributions. Click any entry to inspect implementation details.
          </p>

          {/* Archive Rows */}
          <div className="border-t border-paper-border divide-y divide-paper-border bg-paper-card rounded-lg overflow-hidden border">
            {ARCHIVE_PROJECTS.map((archive: ArchiveProject) => {
              const isExpanded = expandedArchiveId === archive.id;

              return (
                <div
                  key={archive.id}
                  className="transition-colors hover:bg-paper"
                >
                  <div
                    onClick={() => toggleArchive(archive.id)}
                    className="p-4 sm:p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-grow space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-sans font-bold text-base text-ink hover:text-cobalt transition-colors">
                          {archive.title}
                        </span>
                        <span className="font-mono text-[11px] text-ink-muted">
                          / {archive.category}
                        </span>
                      </div>
                      <p className="text-xs text-ink-secondary leading-relaxed max-w-3xl">
                        {archive.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <a
                        href={archive.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-mono text-xs text-cobalt hover:text-cobalt-hover font-medium underline underline-offset-4"
                        aria-label={`View code for ${archive.title}`}
                      >
                        <span>Inspect code</span>
                        <ArrowUpRight size={13} />
                      </a>

                      <button
                        type="button"
                        className="text-ink-muted hover:text-ink p-1 rounded"
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Architecture Note */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 bg-paper border-t border-paper-border space-y-3">
                      <div className="bg-paper-card p-3 rounded border border-paper-border text-xs">
                        <div className="font-mono text-[10px] text-cobalt uppercase tracking-wider mb-1">
                          Architecture & Concurrency Note:
                        </div>
                        <p className="text-ink-secondary text-xs leading-relaxed font-sans">
                          {archive.architectureNote}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-ink-secondary">
                        <span className="text-ink-muted">Stack:</span>
                        {archive.technologies.map((t, idx) => (
                          <span key={t} className="text-ink">
                            {t}{idx < archive.technologies.length - 1 ? ' ·' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};