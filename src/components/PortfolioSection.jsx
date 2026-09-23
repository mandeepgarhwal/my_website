import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData.js';
import { ArrowUpRight, Sliders, ExternalLink, Activity, Layers, Cpu, Compass } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal.jsx';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    'All Projects',
    'Full-Stack & EdTech',
    'Physics & STEM Simulations',
    'Institutional Strategy',
    'Robotics & Hardware',
  ];

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Physics & STEM Simulations':
        return <Activity className="w-4 h-4 text-amber-500" />;
      case 'Full-Stack & EdTech':
        return <Layers className="w-4 h-4 text-sky-500" />;
      case 'Robotics & Hardware':
        return <Cpu className="w-4 h-4 text-emerald-500" />;
      case 'Institutional Strategy':
        return <Compass className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Technical Case Studies & Systems
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Filterable Engineering & Pedagogy Portfolio
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300">
              Interactive physics simulation algorithms, full-stack enterprise campus suites, hardware sensor telemetry, and multi-branch institutional blueprints.
            </p>
          </div>

          {/* Category Filter Controls (Segmented Control Buttons, No Static Pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70 self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Zero-Pill Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {project.category}
                    </span>
                    <span>·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    {project.status}
                  </span>
                </div>

                {/* Case Study Title */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle / Punchline */}
                <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  {project.subtitle}
                </p>

                {/* High-level Narrative Overview */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {project.overview}
                </p>

                {/* Proof Outcomes Preview */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Key Metric / Outcome
                  </div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{project.outcomes[0]}</span>
                  </div>
                </div>

                {/* Clean Unboxed Stack Listing */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <React.Fragment key={idx}>
                      <span className="font-mono">{tech}</span>
                      {idx < Math.min(project.techStack.length, 4) - 1 && (
                        <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <Sliders className="w-3.5 h-3.5 text-amber-500" />
                  <span>Open Full Synopsis & Parameters</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.hasLiveSimulator && (
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Interactive 60fps</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Global Modal Instance */}
        <CaseStudyModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
