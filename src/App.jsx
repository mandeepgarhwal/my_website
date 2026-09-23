import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import GitHubStatsSection from './components/GitHubStatsSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import SocialFeedSection from './components/SocialFeedSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import TechSpecModal from './components/TechSpecModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Theme state: dark / light
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('mg_portfolio_theme');
      if (stored === 'dark' || stored === 'light') return stored;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      // ignore
    }
    return 'light';
  });

  const [isTechSpecOpen, setIsTechSpecOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('mg_portfolio_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-150">
      {/* Top Bar Contract */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenTechSpec={() => setIsTechSpecOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero & Executive Synopsis */}
        <Hero onOpenSimulator={() => {
          const portfolioElem = document.querySelector('#portfolio');
          if (portfolioElem) portfolioElem.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Subtle Hairline Horizontal Separator */}
        <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50" role="separator" aria-hidden="true" />

        {/* Experience & Academic Timeline */}
        <ExperienceSection />

        {/* Subtle Hairline Horizontal Separator */}
        <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50" role="separator" aria-hidden="true" />

        {/* Real-Time GitHub Activity & Codebase Metrics */}
        <GitHubStatsSection />

        {/* Subtle Hairline Horizontal Separator */}
        <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50" role="separator" aria-hidden="true" />

        {/* Filterable Portfolio Showcase & 60fps Workbench */}
        <PortfolioSection />

        {/* Subtle Hairline Horizontal Separator */}
        <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50" role="separator" aria-hidden="true" />

        {/* Integrated Social & LinkedIn Feeds */}
        <SocialFeedSection />

        {/* Subtle Hairline Horizontal Separator */}
        <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50" role="separator" aria-hidden="true" />

        {/* Skills & Dual Mastery Matrix */}
        <SkillsSection />

        {/* Subtle Hairline Horizontal Separator */}
        <div className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50" role="separator" aria-hidden="true" />

        {/* Direct Contact & Advisory Inquiry Portal */}
        <ContactSection />
      </main>

      {/* Architectural Technical Spec Modal */}
      <TechSpecModal
        isOpen={isTechSpecOpen}
        onClose={() => setIsTechSpecOpen(false)}
      />

      {/* Quiet, Accessible Footer */}
      <Footer onOpenTechSpec={() => setIsTechSpecOpen(true)} />
    </div>
  );
}
