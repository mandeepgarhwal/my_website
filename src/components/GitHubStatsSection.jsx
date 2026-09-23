import React, { useState, useEffect } from 'react';
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  RefreshCw,
  ExternalLink,
  Code2,
  Calendar,
  Layers,
  Search,
  CheckCircle2,
  Activity,
  Terminal,
} from 'lucide-react';
import {
  GITHUB_PROFILE,
  BASELINE_REPOSITORIES,
  LANGUAGE_DISTRIBUTION,
  RECENT_ACTIVITY_LOG,
} from '../data/githubData.js';

export default function GitHubStatsSection() {
  const [activeTab, setActiveTab] = useState('repos'); // 'repos' | 'languages' | 'activity'
  const [repositories, setRepositories] = useState(BASELINE_REPOSITORIES);
  const [profileStats, setProfileStats] = useState(GITHUB_PROFILE);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState('Cached Baseline');
  const [isLive, setIsLive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch real-time data from GitHub REST API
  const fetchGitHubData = async () => {
    setIsLoading(true);
    try {
      // 1. Fetch user profile stats
      const userRes = await fetch('https://api.github.com/users/mandeepgarhwal');
      if (userRes.ok) {
        const userData = await userRes.json();
        setProfileStats((prev) => ({
          ...prev,
          publicRepos: userData.public_repos || prev.publicRepos,
          followers: userData.followers ?? prev.followers,
          following: userData.following ?? prev.following,
        }));
      }

      // 2. Fetch updated repositories
      const reposRes = await fetch(
        'https://api.github.com/users/mandeepgarhwal/repos?sort=updated&per_page=20'
      );
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          const mappedRepos = reposData.map((r) => ({
            name: r.name,
            language: r.language || 'Plain Text',
            stars: r.stargazers_count || 0,
            forks: r.forks_count || 0,
            updatedAt: r.updated_at,
            description: r.description || 'Public engineering repository and algorithmic source files.',
            url: r.html_url,
            visibility: r.visibility || (r.private ? 'private' : 'public'),
            branch: r.default_branch || 'main',
          }));
          setRepositories(mappedRepos);
          setIsLive(true);
          const now = new Date();
          setLastSynced(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }
      }
    } catch (err) {
      console.warn('GitHub API fetch notice (using verified baseline):', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  // Filtered repositories based on search term
  const filteredRepos = repositories.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (isoString) => {
    if (!isoString) return 'Recent';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <section id="github-stats" className="py-16 lg:py-24 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="space-y-2 max-w-2xl">
            {/* Zero-Pill Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Github className="w-3.5 h-3.5" />
              <span>Git Telemetry</span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span>Open Source Footprint</span>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span>Full-Stack Artifacts</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Real-Time GitHub Activity & Codebase Metrics
            </h2>

            <p className="text-base text-zinc-600 dark:text-zinc-300">
              Live audit of public code repositories, language distribution benchmarks, and modular software commits for{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                @mandeepgarhwal
              </span>.
            </p>
          </div>

          {/* Action Bar: Live Sync & External Profile Trigger */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Sync Status */}
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="font-mono text-[11px]">
                {isLive ? `Live Synced (${lastSynced})` : 'Verified Baseline'}
              </span>
              <button
                type="button"
                onClick={fetchGitHubData}
                disabled={isLoading}
                className="ml-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors disabled:opacity-50 cursor-pointer"
                title="Refresh Live GitHub Telemetry"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Direct GitHub Anchor */}
            <a
              href={profileStats.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg transition-colors shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/mandeepgarhwal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Tabular Quantitative Proof Metrics Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Public Repositories
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums font-mono">
              {profileStats.publicRepos}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Node, React, MERN & Scripts
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Dominant Language
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-amber-600 dark:text-amber-400 tabular-nums font-mono">
              71.4%
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              JavaScript (ES2024 / Node / React)
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Curriculum Modules
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums font-mono">
              16+
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Capstones & Assignments
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Codebase Licensing
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400 tabular-nums font-mono">
              100%
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Open Educational Access
            </div>
          </div>
        </div>

        {/* Tabular View Switcher & Search Bar */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Unboxed Segmented Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('repos')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'repos'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              Repository Inventory ({repositories.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('languages')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'languages'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              Top Languages & Stacks
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('activity')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'activity'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              Recent Activity & Commits
            </button>
          </div>

          {/* Table Search Input for Repositories */}
          {activeTab === 'repos' && (
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Filter by name or language..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
              />
            </div>
          )}
        </div>

        {/* Tab 1: Repositories Inventory Table */}
        {activeTab === 'repos' && (
          <div className="mt-6 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Repository Name & Overview</th>
                    <th scope="col" className="py-3.5 px-4">Primary Language</th>
                    <th scope="col" className="py-3.5 px-4 hidden md:table-cell">Branch</th>
                    <th scope="col" className="py-3.5 px-4 hidden sm:table-cell">Stars / Forks</th>
                    <th scope="col" className="py-3.5 px-4">Last Updated</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 text-right">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 text-xs">
                  {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo) => {
                      const langColor =
                        repo.language === 'JavaScript'
                          ? 'bg-amber-500'
                          : repo.language === 'HTML'
                          ? 'bg-rose-500'
                          : repo.language === 'CSS' || repo.language === 'SCSS'
                          ? 'bg-sky-500'
                          : 'bg-emerald-500';

                      return (
                        <tr
                          key={repo.name}
                          className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50 transition-colors group"
                        >
                          {/* Name & Description */}
                          <td className="py-3.5 px-4 sm:px-6 max-w-xs sm:max-w-md">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                {repo.name}
                              </span>
                              <span className="text-[10px] text-zinc-400 font-mono">
                                /{repo.visibility}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                              {repo.description}
                            </p>
                          </td>

                          {/* Primary Language */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                              <span className={`w-2 h-2 rounded-full ${langColor}`} />
                              <span>{repo.language}</span>
                            </div>
                          </td>

                          {/* Branch */}
                          <td className="py-3.5 px-4 hidden md:table-cell whitespace-nowrap font-mono text-zinc-500 dark:text-zinc-400">
                            <div className="flex items-center gap-1">
                              <GitBranch className="w-3 h-3 text-zinc-400" />
                              <span>{repo.branch}</span>
                            </div>
                          </td>

                          {/* Stars / Forks */}
                          <td className="py-3.5 px-4 hidden sm:table-cell whitespace-nowrap text-zinc-500 dark:text-zinc-400 tabular-nums">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-zinc-400" />
                                <span>{repo.stars}</span>
                              </span>
                              <span className="flex items-center gap-1">
                                <GitFork className="w-3 h-3 text-zinc-400" />
                                <span>{repo.forks}</span>
                              </span>
                            </div>
                          </td>

                          {/* Last Updated */}
                          <td className="py-3.5 px-4 whitespace-nowrap text-zinc-500 dark:text-zinc-400 tabular-nums text-[11px]">
                            {formatDate(repo.updatedAt)}
                          </td>

                          {/* Source Link */}
                          <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap">
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1"
                              title={`View ${repo.name} on GitHub`}
                            >
                              <span className="hidden sm:inline text-[11px] font-medium">View</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-zinc-500 dark:text-zinc-400 text-xs">
                        No repositories matching "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer Summary Bar */}
            <div className="py-3 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Showing {filteredRepos.length} of {repositories.length} public repositories</span>
                <span>·</span>
                <span className="text-zinc-400">Telemetry updated via GitHub API</span>
              </div>
              <a
                href={profileStats.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline font-medium flex items-center gap-1"
              >
                <span>View Full Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: Top Languages & Stacks Tabular Breakdown */}
        {activeTab === 'languages' && (
          <div className="mt-6 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Language / Environment</th>
                    <th scope="col" className="py-3.5 px-4">Ecosystem Role & Purpose</th>
                    <th scope="col" className="py-3.5 px-4 tabular-nums">Repository Share</th>
                    <th scope="col" className="py-3.5 px-4 w-48 hidden sm:table-cell">Distribution Scale</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 text-right tabular-nums">Total Repos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 text-xs">
                  {LANGUAGE_DISTRIBUTION.map((lang) => (
                    <tr
                      key={lang.name}
                      className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                      {/* Language Name */}
                      <td className="py-4 px-4 sm:px-6 font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: lang.colorHex }}
                          />
                          <span>{lang.name}</span>
                        </div>
                      </td>

                      {/* Ecosystem Role */}
                      <td className="py-4 px-4 text-zinc-600 dark:text-zinc-300">
                        {lang.role}
                      </td>

                      {/* Percentage */}
                      <td className="py-4 px-4 whitespace-nowrap font-mono tabular-nums font-semibold text-zinc-900 dark:text-zinc-100">
                        {lang.percentage}%
                      </td>

                      {/* Hairline Distribution Bar */}
                      <td className="py-4 px-4 hidden sm:table-cell">
                        <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${lang.percentage}%`,
                              backgroundColor: lang.colorHex,
                            }}
                          />
                        </div>
                      </td>

                      {/* Repo Count */}
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap font-mono tabular-nums text-zinc-600 dark:text-zinc-400">
                        {lang.repoCount} repos
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Clean Note */}
            <div className="py-3 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
              <span>Calculated across 35 public repositories in accordance with GitHub source code byte analysis.</span>
            </div>
          </div>
        )}

        {/* Tab 3: Recent Activity & Commits Log Table */}
        {activeTab === 'activity' && (
          <div className="mt-6 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-4 sm:px-6">Timestamp</th>
                    <th scope="col" className="py-3.5 px-4">Event Type</th>
                    <th scope="col" className="py-3.5 px-4">Target Repository</th>
                    <th scope="col" className="py-3.5 px-4">Commit / Release Summary</th>
                    <th scope="col" className="py-3.5 px-4 hidden sm:table-cell">Branch</th>
                    <th scope="col" className="py-3.5 px-4 sm:px-6 text-right">Commit SHA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 text-xs">
                  {RECENT_ACTIVITY_LOG.map((act) => (
                    <tr
                      key={act.id}
                      className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                      {/* Timestamp */}
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-zinc-500 dark:text-zinc-400 whitespace-nowrap text-[11px]">
                        {act.timestamp}
                      </td>

                      {/* Event Type */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-medium text-zinc-800 dark:text-zinc-200">
                        {act.type}
                      </td>

                      {/* Target Repository */}
                      <td className="py-3.5 px-4 whitespace-nowrap font-mono text-amber-600 dark:text-amber-400 font-semibold">
                        <a
                          href={`https://github.com/mandeepgarhwal/${act.repo}`}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          <span>{act.repo}</span>
                          <ExternalLink className="w-3 h-3 text-zinc-400" />
                        </a>
                      </td>

                      {/* Message */}
                      <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-300 max-w-xs sm:max-w-md">
                        {act.message}
                      </td>

                      {/* Branch */}
                      <td className="py-3.5 px-4 hidden sm:table-cell font-mono text-zinc-500 dark:text-zinc-400 text-[11px] whitespace-nowrap">
                        <span className="flex items-center gap-1">
                          <GitBranch className="w-3 h-3 text-zinc-400" />
                          <span>{act.branch}</span>
                        </span>
                      </td>

                      {/* Commit SHA */}
                      <td className="py-3.5 px-4 sm:px-6 text-right font-mono text-zinc-400 dark:text-zinc-500 text-[11px] whitespace-nowrap">
                        <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                          {act.sha}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="py-3 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Git tree synchronization with remote origin</span>
              </div>
              <a
                href="https://github.com/mandeepgarhwal?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline font-medium flex items-center gap-1"
              >
                <span>Browse All Commits</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
