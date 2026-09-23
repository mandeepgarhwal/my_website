import React from 'react';
import { PERSONAL_DETAILS } from '../data/portfolioData.js';
import { ArrowUp, Linkedin, Facebook, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenTechSpec }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Col 1: Identity & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {PERSONAL_DETAILS.name}
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              16+ years bridging institutional educational leadership, competitive JEE/NEET physics pedagogy, and full-stack MERN software systems.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{PERSONAL_DETAILS.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Executive Synopsis
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Physics & MERN Portfolio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Leadership Timeline (16+ Yrs)
                </a>
              </li>
              <li>
                <a href="#github-stats" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  GitHub Activity & Codebase
                </a>
              </li>
              <li>
                <a href="#social-feed" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  LinkedIn & Pedagogy Feeds
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Advisory Inquiry Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & System Specs */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
              Direct Contact
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`tel:${PERSONAL_DETAILS.primaryPhone}`}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-mono tabular-nums"
                >
                  {PERSONAL_DETAILS.primaryPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors truncate block"
                >
                  {PERSONAL_DETAILS.email}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTechSpec}
                  className="text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                >
                  View Architectural Spec
                </button>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_DETAILS.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#0A66C2] transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-[#1877F2] transition-colors"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Mandeep Garhwal.</span>
            <span>·</span>
            <span>All Rights Reserved</span>
            <span>·</span>
            <span>Hisar, Haryana, India</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
