import React, { useState, useEffect } from 'react';
import {
  Linkedin,
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
    const newCount = isCurrentlyLiked ? likes[postId] - 1 : likes[postId] + 1;

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

  const handleShare = (postId, postContent) => {
    const postUrl = `${PERSONAL_DETAILS.linkedinUrl}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${postUrl} - Insight by Mandeep Garhwal`);
      setCopiedId(postId);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="social-feed" className="py-16 lg:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with LinkedIn Verification Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80">
          
          <div className="lg:col-span-8 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Dispatches & Institutional Essays
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Integrated Pedagogical & Technical Feeds
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300">
              Unfiltered reflections on physics teaching methodology, microcontrollers in doubt halls, and institutional scaling heuristics.
            </p>
          </div>

          {/* Official LinkedIn Profile Connect Card */}
          <div className="lg:col-span-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <span>Mandeep Garhwal</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono">
                    LinkedIn
                  </span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  @mandeep-garhwal-766105408
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              Connecting daily with physics educators, EdTech founders, and engineering leaders worldwide.
            </p>

            <a
              href={PERSONAL_DETAILS.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-colors"
            >
              <span>View Verified LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Interactive Feed Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_POSTS.map((post) => {
            const isLiked = !!hasLiked[post.id];
            const currentLikes = likes[post.id] || post.likesCount;
            const isCopied = copiedId === post.id;

            return (
              <article
                key={post.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                {/* Post Author / Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                        MG
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                          {post.author}
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          {post.role}
                        </div>
                      </div>
                    </div>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-[#0A66C2] transition-colors"
                      title="Open on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Zero-Pill Unboxed Metadata Bar */}
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>Article</span>
                  </div>

                  {/* Post Prose Content */}
                  <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal whitespace-pre-line">
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
                      onClick={() => handleShare(post.id, post.content)}
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors p-1 cursor-pointer"
                      title="Copy Share Link"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Share</span>
                        </>
                      )}
                    </button>

                    {/* Direct LinkedIn Redirect */}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-[#0A66C2] transition-colors p-1"
                      title="Open Original Discussion"
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
