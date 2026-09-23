import React, { useState } from 'react';
import { Sun, Moon, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({
  theme,
  toggleTheme,
  onOpenTechSpec,
  activeSection = 'about',
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'GitHub', href: '#github-stats' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Social Feed', href: '#social-feed' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-50/90 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Mandeep Garhwal
          </a>
          <span className="hidden sm:inline-block text-xs font-normal text-zinc-400 dark:text-zinc-500">
            /
          </span>
          <span className="hidden sm:inline-block text-xs text-zinc-500 dark:text-zinc-400">
            Physics Pedagogy & MERN
          </span>
        </div>

        {/* Zone 2: 4–6 text navigation links (No pills, quiet typographic anchors) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-1 relative group font-medium"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Functional actions (Theme switch, Tech Spec trigger, Primary CTA) */}
        <div className="flex items-center gap-2.5">
          {/* Technical Spec Trigger */}
          <button
            type="button"
            onClick={onOpenTechSpec}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 transition-colors cursor-pointer"
            title="View Architecture Specification"
          >
            <Terminal className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden lg:inline">Tech Spec</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Toggle color mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          {/* Primary CTA (Direct Advisory) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-md transition-colors shadow-xs"
          >
            <span>Consult Advisory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTechSpec();
              }}
              className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 py-2"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-500" />
              <span>System Architectural Spec</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
