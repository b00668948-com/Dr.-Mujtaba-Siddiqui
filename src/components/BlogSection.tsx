import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Tag, X, CheckCircle, Share2, Sparkles } from 'lucide-react';
import { BLOG_POSTS, CLINIC_INFO } from '../constants';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenBooking: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Seasonal Care', 'Asthma & Allergy', 'Preventive Care', 'Clinic News'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
            <span>Doctor's Health Journal</span>
            <span aria-hidden="true">·</span>
            <span>Preventive Wisdom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Health Tips & Family Wellness Blog
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Medical insights, infection warnings, inhaler guidelines, and preventive tips written directly for families in Manikonda and Hyderabad by Dr. Mujtaba Siddiqui.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          
          {/* Categories Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fever, asthma, screenings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Blog Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-700">No articles matched your search</h4>
            <p className="text-xs text-slate-500 mt-1">Try searching for "fever", "asthma", or clear the filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-teal-700 bg-white border border-teal-200 rounded-lg hover:bg-teal-50"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => setActiveArticle(post)}
              >
                <div className="p-6">
                  {/* Category & Read Time (Clean unboxed per constitution) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-teal-700">{post.category}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-teal-700 transition-colors line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with author and read link */}
                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800 block">{post.author}</span>
                    <span className="text-slate-400 text-[11px]">{post.date}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}

      </div>

      {/* Article Detail Reading Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 mb-2">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight mb-4">
                {activeArticle.title}
              </h2>

              {/* Author attribution banner */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                  Dr.M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{activeArticle.author}</h4>
                  <p className="text-xs text-slate-500">General Practitioner · Medicare+ Clinic, Manikonda</p>
                </div>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways Callout */}
              <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200 mb-6">
                <h4 className="text-sm font-bold text-teal-900 font-heading flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  Key Clinical Takeaways:
                </h4>
                <div className="space-y-2">
                  {activeArticle.keyTakeaways.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-950 font-medium">
                      <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medical Disclaimer */}
              <p className="text-[11px] text-slate-400 italic mb-6">
                Disclaimer: The information above is intended for educational purposes only and is not a substitute for clinical medical evaluation. For personal health symptoms, consult Dr. Mujtaba Siddiqui directly.
              </p>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${CLINIC_INFO.rawPhone}`}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold text-center"
                >
                  Call Clinic: {CLINIC_INFO.phone}
                </a>

                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm text-center cursor-pointer"
                >
                  Book Consultation with Dr. Siddiqui
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
