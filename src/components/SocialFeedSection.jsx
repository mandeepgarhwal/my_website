import React, { useState } from 'react';
import {
  Linkedin,
  Facebook,
  Heart,
  Share2,
  ExternalLink,
  MessageSquare,
  Check,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { SOCIAL_POSTS, PERSONAL_DETAILS } from '../data/portfolioData.js';

export default function SocialFeedSection() {
  const [platformFilter, setPlatformFilter] = useState('All'); // 'All' | 'LinkedIn' | 'Facebook'

  // Like counter state with local storage persistence
  const [likes, setLikes] = useState(() => {
    try {
      const saved = localStorage.getItem('mg_portfolio_likes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return {
      'post-1': 142,
      'post-2': 188,
      'post-3': 215,
      'post-4': 164,
    };
  });

  const [hasLiked, setHasLiked] = useState(() => {
    try {
      const saved = localStorage.getItem('mg_portfolio_has_liked');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return {};
  });

  const [copiedId, setCopiedId] = useState(null);

  const handleLike = (postId) => {
    const isCurrentlyLiked = !!hasLiked[postId];
    const currentLikes = likes[postId] ?? 100;
    const newCount = isCurrentlyLiked ? currentLikes - 1 : currentLikes + 1;

    const newLikes = { ...likes, [postId]: newCount };
    const newHasLiked = { ...hasLiked, [postId]: !isCurrentlyLiked };

    setLikes(newLikes);
    setHasLiked(newHasLiked);

    try {
      localStorage.setItem('mg_portfolio_likes', JSON.stringify(newLikes));
      localStorage.setItem('mg_portfolio_has_liked', JSON.stringify(newHasLiked));
    } catch (e) {
      // ignore
    }
  };

  const handleShare = (postId, postUrl, postTitle) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${postUrl} - Insight by Mandeep Garhwal`);
      setCopiedId(postId);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const filteredPosts =
    platformFilter === 'All'
      ? SOCIAL_POSTS
      : SOCIAL_POSTS.filter((p) => p.platform === platformFilter);

  return (
    <section id="social-feed" className="py-16 lg:py-24 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          
          <div className="lg:col-span-7 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Dispatches & Institutional Essays
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Integrated Pedagogical & Social Feeds
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300">
              Reflections on physics pedagogy, microcontrollers in doubt halls, institutional scaling heuristics, and community doubt circles.
            </p>

            {/* Platform Filter Buttons */}
            <div className="pt-4 flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/70 w-fit">
              {['All', 'LinkedIn', 'Facebook'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlatformFilter(p)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    platformFilter === p
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {p === 'All' ? 'All Dispatches' : p}
                </button>
              ))}
            </div>
          </div>

          {/* Official Social Channels Dual Card (LinkedIn & Facebook) */}
          <div className="lg:col-span-5 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Verified Public Channels
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* LinkedIn Direct Channel */}
              <a
                href={PERSONAL_DETAILS.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#0A66C2]/50 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#0A66C2] transition-colors" />
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    LinkedIn
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    @mandeep-garhwal
                  </div>
                </div>
              </a>

              {/* Facebook Direct Channel */}
              <a
                href={PERSONAL_DETAILS.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#1877F2]/50 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#1877F2] transition-colors" />
                </div>
                <div className="mt-3">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Facebook
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    @mandeepgarhwal
                  </div>
                </div>
              </a>
            </div>

            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
              Direct updates, physics articles, JEE Advanced problem walk-throughs, and academic announcements posted across both official handles.
            </p>
          </div>
        </div>

        {/* Interactive Feed Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => {
            const isLiked = !!hasLiked[post.id];
            const currentLikes = likes[post.id] ?? post.likesCount;
            const isCopied = copiedId === post.id;
            const isFacebook = post.platform === 'Facebook';

            return (
              <article
                key={post.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                {/* Post Author / Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        MG
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                          {post.author}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                          {post.role}
                        </div>
                      </div>
                    </div>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors shrink-0"
                      title={`Open on ${post.platform}`}
                    >
                      {isFacebook ? (
                        <Facebook className="w-4 h-4 text-[#1877F2]" />
                      ) : (
                        <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                      )}
                    </a>
                  </div>

                  {/* Zero-Pill Unboxed Metadata Bar */}
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                      {post.platform}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Post Prose Content */}
                  <div className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line line-clamp-10">
                    {post.content}
                  </div>

                  {/* Tags (Zero pills: typographical list) */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    {post.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className="text-amber-600 dark:text-amber-400">#{tag.replace(/\s+/g, '')}</span>
                        {tIdx < post.tags.length - 1 && <span className="text-zinc-300 dark:text-zinc-700">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Post Footer Interactive Action Controls */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  {/* Functional Like Counter */}
                  <button
                    type="button"
                    onClick={() => handleLike(post.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      isLiked
                        ? 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 font-semibold'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                    title={isLiked ? 'Unlike' : 'Recommend this post'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
                    <span className="tabular-nums">{currentLikes}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Shareable Link Copier */}
                    <button
                      type="button"
                      onClick={() => handleShare(post.id, post.url, post.content)}
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors p-1 cursor-pointer"
                      title="Copy Share Link"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Share</span>
                        </>
                      )}
                    </button>

                    {/* Direct External Redirect */}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
                      title={`Open on ${post.platform}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
