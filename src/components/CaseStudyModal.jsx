import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Sliders, Layers, Cpu, ArrowRight } from 'lucide-react';
import WaveSimulator from './WaveSimulator.jsx';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/70 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/40">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {project.category}
            </span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.status}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Simulation Engine (Embedded for PhysicsLab, or Live Simulator) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Interactive Waveform Parameter Workbench</span>
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">
                HTML5 Canvas Double-Buffered Engine
              </span>
            </div>

            {/* Embedded Live 60fps Simulator with Full Parameter Controls */}
            <WaveSimulator
              initialMode={project.id === 'physics-simulator' ? 'traveling' : 'standing'}
              showControls={true}
              className="w-full"
            />
          </div>

          {/* Deep Case Study Breakdown: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Pedagogical & Institutional Challenge
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Architectural & Algorithmic Solution
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Quantitative Outcomes & Impact Metrics */}
          <div className="space-y-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Verified Quantitative Results & Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800/70 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-snug">
                      {outcome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Architectural Stack (No pills, quiet typographical list) */}
          <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="font-semibold text-zinc-500 dark:text-zinc-400 mr-1">
              Stack & Methodologies:
            </span>
            {project.techStack.map((tech, idx) => (
              <React.Fragment key={idx}>
                <span className="text-zinc-700 dark:text-zinc-300 font-mono">
                  {tech}
                </span>
                {idx < project.techStack.length - 1 && (
                  <span className="text-zinc-400 dark:text-zinc-600">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Project Architecture by Mandeep Garhwal
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-md transition-colors"
            >
              <span>Inquire About Implementation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
