import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.js';
import { Atom, Code2, Cpu, LineChart, Check } from 'lucide-react';

export default function SkillsSection() {
  const getCategoryIcon = (category) => {
    if (category.includes('Physics')) return <Atom className="w-5 h-5 text-amber-500" />;
    if (category.includes('MERN')) return <Code2 className="w-5 h-5 text-sky-500" />;
    if (category.includes('Electronics')) return <Cpu className="w-5 h-5 text-emerald-500" />;
    return <LineChart className="w-5 h-5 text-purple-500" />;
  };

  return (
    <section id="skills" className="py-16 lg:py-24 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Multidisciplinary Matrix
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Core Competencies & Dual Mastery
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            The rare convergence of deep theoretical physics pedagogy, hardware circuit engineering, and production-grade full-stack web software architecture.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {cat.description}
                </p>

                {/* Zero-Pill Skill Item List */}
                <div className="mt-5 space-y-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between text-xs py-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          {skill}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                        Mastery
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
