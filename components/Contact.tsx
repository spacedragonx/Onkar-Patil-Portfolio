import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';
import { ResumeModal } from './ResumeModal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="py-24 border-b border-paper-border">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="pb-8 mb-12 border-b border-paper-border">
            <div className="font-mono text-xs text-cobalt font-semibold tracking-wider mb-2">
              04 / DISPATCH & CONTACT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-ink tracking-tight mb-3">
              Have something worth building?
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary max-w-2xl">
              I'm open to conversations about software development, machine learning, and interesting engineering problems.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            
            {/* Direct Email */}
            <div className="bg-paper-card p-5 rounded-lg border border-paper-border flex flex-col justify-between hover:border-paper-darkborder transition-colors">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-paper-border">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                    <Mail size={14} className="text-cobalt" />
                    <span>DIRECT INBOX</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-ink-muted hover:text-ink text-[11px] font-mono flex items-center gap-1"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-sans font-bold text-sm text-ink hover:text-cobalt transition-colors block truncate mb-1"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-ink-secondary">
                  Best for technical inquiries, project proposals, or engineering roles.
                </p>
              </div>

              <div className="pt-4 mt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1 font-mono text-xs text-cobalt hover:text-cobalt-hover font-semibold"
                >
                  <span>Send email</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-paper-card p-5 rounded-lg border border-paper-border flex flex-col justify-between hover:border-paper-darkborder transition-colors">
              <div>
                <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-paper-border text-xs font-mono text-ink-muted">
                  <Github size={14} className="text-cobalt" />
                  <span>VERSION CONTROL</span>
                </div>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-sm text-ink hover:text-cobalt transition-colors block mb-1"
                >
                  github.com/spacedragonx
                </a>
                <p className="text-xs text-ink-secondary">
                  Source code for systems, models, algorithmic projects, and pull requests.
                </p>
              </div>

              <div className="pt-4 mt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-cobalt hover:text-cobalt-hover font-semibold"
                >
                  <span>Open GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-paper-card p-5 rounded-lg border border-paper-border flex flex-col justify-between hover:border-paper-darkborder transition-colors">
              <div>
                <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-paper-border text-xs font-mono text-ink-muted">
                  <Linkedin size={14} className="text-cobalt" />
                  <span>PROFESSIONAL</span>
                </div>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-sm text-ink hover:text-cobalt transition-colors block mb-1"
                >
                  Onkar Patil / LinkedIn
                </a>
                <p className="text-xs text-ink-secondary">
                  Academic background, verified credentials, and networking connections.
                </p>
              </div>

              <div className="pt-4 mt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-cobalt hover:text-cobalt-hover font-semibold"
                >
                  <span>Connect</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Resume / Curriculum Vitae */}
            <div className="bg-paper-card p-5 rounded-lg border border-paper-border flex flex-col justify-between hover:border-paper-darkborder transition-colors">
              <div>
                <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-paper-border text-xs font-mono text-ink-muted">
                  <FileText size={14} className="text-cobalt" />
                  <span>CURRICULUM VITAE</span>
                </div>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="text-left font-sans font-bold text-sm text-ink hover:text-cobalt transition-colors block mb-1"
                >
                  View & Print Resume
                </button>
                <p className="text-xs text-ink-secondary">
                  Clean editorial CV overview with education, verified projects, and print export.
                </p>
              </div>

              <div className="pt-4 mt-2">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-1 font-mono text-xs text-cobalt hover:text-cobalt-hover font-semibold"
                >
                  <span>Open resume</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Notice Banner */}
          <div className="bg-paper p-4 rounded border border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-ink-secondary">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block shrink-0" />
              <span>
                Based in <strong className="text-ink">Pune, India</strong> · Open to remote opportunities and relocation worldwide.
              </span>
            </div>
            <span className="font-mono text-[11px] text-ink-muted shrink-0">
              RESPONSE TIME: WITHIN 24 HOURS
            </span>
          </div>

        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};
