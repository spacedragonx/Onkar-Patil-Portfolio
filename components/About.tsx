import { INTEREST_AREAS, PERSONAL_INFO } from '../portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-paper-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="pb-8 mb-16 border-b border-paper-border">
          <div className="font-mono text-xs text-cobalt font-semibold tracking-wider mb-2">
            02 / ABOUT & INQUIRY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-ink tracking-tight mb-2 max-w-3xl">
            Curious about how things work. Serious about making them work well.
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary">
            Learning through implementation from first principles.
          </p>
        </div>

        {/* 2-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Description & Background */}
          <div className="lg:col-span-6 space-y-6 text-ink-secondary text-base leading-relaxed font-sans">
            <p>
              I am a Computer Science undergraduate with a deep focus on <strong className="text-ink font-semibold">machine learning, systems programming, and backend architecture</strong>. Rather than treating tools as black boxes, I like taking them apart to understand memory layouts, gradients, and latency bottlenecks.
            </p>

            <p>
              Whether that means building a multithreaded file downloader in C++ to understand socket buffers, fine-tuning ResNet-34 on agricultural datasets to inspect feature representation, or resolving edge-case URL parsing issues in <span className="text-ink font-medium">Microsoft Presidio</span>—I believe software craftsmanship comes from building things that hold up under real edge cases.
            </p>

            <p>
              My goal is to work on substantive engineering problems alongside teams that value rigor, clear communication, and deliberate architectural choices over superficial shortcuts.
            </p>

            {/* Notebook Margin Annotation */}
            <div className="pt-6 border-t border-paper-border font-mono text-xs text-ink-muted space-y-1">
              <div>FIELD NOTE: ENGINEERING PHILOSOPHY</div>
              <div className="text-ink italic font-serif text-sm">
                "Simple systems that you understand completely are more valuable than complex systems that surprise you in production."
              </div>
            </div>
          </div>

          {/* Right Column: Technical Interests & Inquiries */}
          <div className="lg:col-span-6">
            <div className="bg-paper-card border border-paper-border rounded-lg p-6 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-paper-border text-xs">
                <span className="font-mono text-ink-muted">EXPLORATION MATRIX</span>
                <span className="font-mono text-[11px] text-cobalt">Active Areas of Interest</span>
              </div>

              <div className="space-y-4">
                {INTEREST_AREAS.map((area) => (
                  <div
                    key={area.code}
                    className="p-3.5 bg-paper rounded border border-paper-border hover:border-paper-darkborder transition-colors"
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-mono text-xs text-cobalt font-semibold">
                        {area.code}.
                      </span>
                      <h3 className="font-sans font-bold text-sm text-ink">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-xs text-ink-secondary leading-relaxed pl-5 font-sans">
                      {area.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Status footer */}
              <div className="pt-3 border-t border-paper-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
                <span>STATUS: {PERSONAL_INFO.status}</span>
                <span className="text-cobalt">CONTINUOUS INQUIRY</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};