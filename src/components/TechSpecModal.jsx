import React, { useEffect } from 'react';
import { X, Terminal, CheckCircle2, Cpu, Shield, Zap, Layers, Code } from 'lucide-react';

export default function TechSpecModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/70 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-mono font-bold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
              System Architecture & Specification
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Executive Overview */}
          <div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Architectural Constitution & Principles
            </h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              This application was architected adhering to high-performance enterprise benchmarks, zero-pill typography standards, and mathematics-first canvas simulation design.
            </p>
          </div>

          {/* Core Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Box 1 */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                <Code className="w-4 h-4 text-amber-500" />
                <span>Runtime & Languages</span>
              </div>
              <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-300 font-mono text-xs">
                <li>· JavaScript (ES2024 Standards)</li>
                <li>· React 19 Component Hierarchy</li>
                <li>· Tailwind CSS v4 Engine</li>
                <li>· HTML5 Canvas API (Vector double-buffer)</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Zero-Pill Discipline</span>
              </div>
              <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-300 text-xs">
                <li>· Unboxed inline metadata separated with glyphs (·, /)</li>
                <li>· Strict 60-30-10 neutral color budget</li>
                <li>· Tabular numeric figures (<code className="font-mono">tabular-nums</code>)</li>
                <li>· Balanced display typography (<code className="font-mono">text-wrap: balance</code>)</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                <Zap className="w-4 h-4 text-sky-500" />
                <span>Physics Simulation Engine</span>
              </div>
              <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-300 text-xs">
                <li>· 60 FPS requestAnimationFrame loop</li>
                <li>· Superposition equation: y = y₁ + y₂</li>
                <li>· Standing wave harmonic modes (n = 1..6)</li>
                <li>· Snell’s law optical ray-tracing convergence</li>
              </ul>
            </div>

            {/* Box 4 */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                <Cpu className="w-4 h-4 text-purple-500" />
                <span>Accessibility & State</span>
              </div>
              <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-300 text-xs">
                <li>· WCAG AA Contrast (&gt;4.5:1 text ratio)</li>
                <li>· localStorage theme & like state persistence</li>
                <li>· Full keyboard navigability & focus-visible</li>
                <li>· Asynchronous advisory dispatch pipeline</li>
              </ul>
            </div>

          </div>

          {/* Verified Candidate Profile Coordinates */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900 space-y-2">
            <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-wider">
              Profile Summary & Verification
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Name:</span> Mandeep Garhwal
              </div>
              <div>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Governance:</span> 16+ Years Experience
              </div>
              <div>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Engineering:</span> B.E. ECE (Punjab Univ)
              </div>
              <div>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">Pedagogy:</span> M.Sc. Physics, 12.5k+ Mentored
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
