import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { EXPERIENCE_LEADERSHIP, EDUCATION_CREDENTIALS } from '../data/portfolioData.js';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('leadership'); // 'leadership' | 'education'

  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tab Trigger Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Institutional Governance & Academic Pedigree
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Professional Timeline & Credentials
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 max-w-xl">
              Over 16 years directing academic operations across North India combined with formal engineering and full-stack software credentials.
            </p>
          </div>

          {/* Interactive Segmented Control */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'leadership'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Professional Leadership (16+ Yrs)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Education & Certifications</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Professional Leadership Timeline */}
        {activeTab === 'leadership' && (
          <div className="mt-10 space-y-8">
            {EXPERIENCE_LEADERSHIP.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 sm:pl-8 pb-8 border-l border-zinc-200 dark:border-zinc-800 last:border-l-transparent last:pb-0"
              >
                {/* Timeline Hairline Node */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-white dark:ring-zinc-950" />

                <div className="bg-white dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700">
                  {/* Zero-Pill Unboxed Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        {item.institution}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-zinc-600 dark:text-zinc-300 tabular-nums">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>

                  {/* Role Summary */}
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Achievements List */}
                  <div className="mt-4 space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="leading-normal">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Certifications Timeline */}
        {activeTab === 'education' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div className="space-y-3">
                  {/* Zero-Pill Unboxed Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      {cred.field}
                    </span>
                    <span className="font-mono tabular-nums text-zinc-700 dark:text-zinc-300">
                      {cred.year}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {cred.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    <Building className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cred.institution}</span>
                  </div>

                  {/* Curriculum Focus */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                    {cred.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
