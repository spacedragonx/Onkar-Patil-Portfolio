import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white text-ink border border-paper-darkborder rounded-lg shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-paper-border bg-paper-subtle shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-cobalt font-bold">CURRICULUM VITAE</span>
            <span className="text-ink-muted">·</span>
            <span className="text-xs text-ink-secondary">{PERSONAL_INFO.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink bg-white border border-paper-border rounded hover:border-cobalt hover:text-cobalt transition-colors"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-ink-muted hover:text-ink rounded transition-colors"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 print:p-0 print:space-y-6">
          
          {/* Header */}
          <div className="border-b border-ink/15 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-ink uppercase mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-serif italic text-ink-secondary mb-4">
              Computer Science · Machine Learning & Systems Engineering
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-ink-secondary">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cobalt underline">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cobalt underline">
                github.com/spacedragonx
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cobalt underline">
                LinkedIn Profile
              </a>
              <span>·</span>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider border-b border-paper-border pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start text-sm">
              <div>
                <p className="font-bold text-ink">Bachelor of Technology (B.Tech) in Computer Science</p>
                <p className="text-xs text-ink-secondary">Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Machine Learning.</p>
              </div>
              <span className="font-mono text-xs text-ink-muted shrink-0">Graduation 2026</span>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider border-b border-paper-border pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="font-mono text-ink">Languages:</strong>{' '}
                <span className="text-ink-secondary">Python, C++ (17/20), C, Java, JavaScript, TypeScript, SQL</span>
              </div>
              <div>
                <strong className="font-mono text-ink">Machine Learning:</strong>{' '}
                <span className="text-ink-secondary">PyTorch, FastAI, TensorFlow, Scikit-Learn, CNNs, ResNet, OpenCV</span>
              </div>
              <div>
                <strong className="font-mono text-ink">Full-Stack & Backend:</strong>{' '}
                <span className="text-ink-secondary">React, Node.js, Express, FastAPI/Starlette, MongoDB, MySQL</span>
              </div>
              <div>
                <strong className="font-mono text-ink">Tools & Systems:</strong>{' '}
                <span className="text-ink-secondary">Git, Linux/Bash, Docker, Google Cloud Platform, CMake, GDB</span>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider border-b border-paper-border pb-1">
              Selected Technical Projects
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold text-sm text-ink mb-1">
                  <span>Plant Disease Detection & Remedy Engine</span>
                  <span className="font-mono text-xs font-normal text-ink-muted">PyTorch · FastAI · ResNet-34</span>
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  Trained a deep convolutional model on the PlantVillage dataset using transfer learning with discriminative learning rates, achieving high validation accuracy across crop foliage classes. Integrated prediction outputs with actionable agricultural remedy protocols.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-sm text-ink mb-1">
                  <span>DeepSPO — Sequential Portfolio Allocation</span>
                  <span className="font-mono text-xs font-normal text-ink-muted">Python · PyTorch · LSTM · Optimization</span>
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  Developed an end-to-end recurrent neural framework that maps sequential multi-asset market indicators directly to portfolio allocation weights. Optimized Sharpe ratio while incorporating quadratic transaction penalty constraints.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-sm text-ink mb-1">
                  <span>Bank Statement Parsing & Expense Ledger</span>
                  <span className="font-mono text-xs font-normal text-ink-muted">React · TypeScript · Node.js · MongoDB</span>
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  Full-stack financial tracking suite with bank statement CSV parsing, multi-pass regex normalization, duplicate transaction fingerprinting, and budget tracking analytics.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-sm text-ink mb-1">
                  <span>MTFD — Multithreaded File Downloader</span>
                  <span className="font-mono text-xs font-normal text-ink-muted">C++17 · POSIX Threads · HTTP Range</span>
                </div>
                <p className="text-ink-secondary leading-relaxed">
                  Engineered concurrent file retrieval CLI using C++17, splitting files into concurrent chunks via HTTP byte-range headers with mutex synchronization and safe in-place assembling.
                </p>
              </div>
            </div>
          </section>

          {/* Open Source Contributions */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider border-b border-paper-border pb-1">
              Open Source Contributions
            </h2>
            <div className="text-xs space-y-1">
              <div className="flex justify-between font-bold text-ink">
                <span>Microsoft Presidio (PR #1532)</span>
                <span className="font-mono text-xs font-normal text-cobalt">Merged Pull Request</span>
              </div>
              <p className="text-ink-secondary leading-relaxed">
                Resolved boundary regex edge cases in the URL recognizer engine, reducing false-positive entity classifications in open-source privacy and PII protection pipelines.
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-paper-border bg-paper-subtle flex items-center justify-between text-xs font-mono text-ink-muted shrink-0">
          <span>ONKAR PATIL · CURRICULUM VITAE</span>
          <button
            onClick={onClose}
            className="text-ink hover:text-cobalt font-medium"
          >
            Close Window ✕
          </button>
        </div>
      </div>
    </div>
  );
};
