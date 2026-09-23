import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  BookOpen,
  CheckCircle,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_DETAILS, PROOF_METRICS } from '../data/portfolioData.js';

export default function Hero({ onOpenSimulator }) {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.primaryPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
      {/* Background Subtle Wave Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Zero-Pill Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <span>Alternative Education</span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span>Physics Pedagogy</span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span>MERN Full Stack</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15]" style={{ textWrap: 'balance' }}>
              {PERSONAL_DETAILS.primaryHeadline}
            </h1>

            {/* Executive Synopsis Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_DETAILS.bio}
            </p>

            {/* Direct Connect Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors shadow-xs"
              >
                <span>Explore Technical Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_DETAILS.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={PERSONAL_DETAILS.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Institutional Coordinates and Contact Quick-Bar */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{PERSONAL_DETAILS.location}</span>
              </div>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${PERSONAL_DETAILS.primaryPhone}`}
                  className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="font-mono tabular-nums">{PERSONAL_DETAILS.primaryPhone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors p-1"
                  title="Copy Phone Number"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_DETAILS.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Portrait Card & Physics Teaser */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 shadow-sm overflow-hidden">
              
              {/* Executive Portrait Badge / Header */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <div className="flex items-center gap-4">
                  {/* Stylized Executive Avatar with Physics Ring */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-xl shadow-md ring-4 ring-amber-500/10">
                    <span>MG</span>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center" title="Active for Advisory">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {PERSONAL_DETAILS.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      B.E. (ECE) · M.Sc. (Physics) · M.A.
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Available for Institutional Advisory & EdTech</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Interactive Physics Teaser Card */}
              <div className="py-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Live Wave Dynamics Preview
                  </span>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                    y = A·sin(kx - ωt)
                  </span>
                </div>

                {/* SVG Real-time Wave Animation Teaser */}
                <div className="w-full h-24 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center overflow-hidden relative">
                  <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <path
                      d="M0,40 Q37.5,10 75,40 T150,40 T225,40 T300,40"
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      className="opacity-90"
                    >
                      <animate
                        attributeName="d"
                        dur="3s"
                        repeatCount="indefinite"
                        values="
                          M0,40 Q37.5,15 75,40 T150,40 T225,40 T300,40;
                          M0,40 Q37.5,65 75,40 T150,40 T225,40 T300,40;
                          M0,40 Q37.5,15 75,40 T150,40 T225,40 T300,40
                        "
                      />
                    </path>
                    <line x1="0" y1="40" x2="300" y2="40" stroke="currentColor" strokeDasharray="3 3" className="text-zinc-300 dark:text-zinc-800" />
                  </svg>
                  
                  <div className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                    60fps Canvas Sandbox
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    PhysicsLab Simulation Engine
                  </span>
                  <a
                    href="#portfolio"
                    className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Launch Full Workbench</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Quick Dial / Location Bar */}
              <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <div className="text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">Hisar, Haryana</span>
                  <span className="mx-1.5">·</span>
                  <span>Direct WhatsApp Available</span>
                </div>
                <a
                  href={PERSONAL_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 rounded-md hover:bg-emerald-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Metrics Strip (Tabular Figures & Zero Pills) */}
        <div className="mt-14 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PROOF_METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  {metric.label}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
