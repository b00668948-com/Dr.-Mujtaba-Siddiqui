import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle, ThumbsUp, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../constants';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<'all' | 'featured'>('all');

  const displayedReviews = filterRating === 'featured'
    ? REVIEWS.slice(0, 3)
    : REVIEWS;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/30 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
            <span>Patient Testimonials</span>
            <span aria-hidden="true">·</span>
            <span>Real Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Trusted by 100+ Families Across Hyderabad
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Read firsthand accounts from parents, working professionals, and long-time neighborhood residents who rely on Dr. Mujtaba Siddiqui for their family's health.
          </p>
        </div>

        {/* Prominent Rating Showcase Banner */}
        <div className="max-w-4xl mx-auto mb-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Big Score Box */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-amber-500 text-white flex flex-col items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-4xl font-extrabold font-heading tabular-nums leading-none">4.9</span>
              <div className="flex text-white mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-900 font-heading">Exceptional Care</h3>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Top Rated in Manikonda
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                Based on <strong className="text-slate-900">{CLINIC_INFO.totalReviews} verified patient reviews</strong> on Google.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                <span>99% Recommendation Rate</span>
                <span>·</span>
                <span>Prompt Evening Appointments</span>
              </div>
            </div>
          </div>

          {/* Breakdown bars */}
          <div className="w-full md:w-64 space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-12 text-right font-medium">5 Star</span>
              <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[96%]" />
              </div>
              <span className="w-8 tabular-nums font-semibold">96%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-right font-medium">4 Star</span>
              <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[4%]" />
              </div>
              <span className="w-8 tabular-nums font-semibold">4%</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-12 text-right">3 Star</span>
              <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[0%]" />
              </div>
              <span className="w-8 tabular-nums">0%</span>
            </div>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-teal-200 group-hover:text-teal-400 transition-colors" />
                </div>

                {/* Highlight callout if present */}
                {review.highlight && (
                  <p className="text-sm font-bold text-teal-900 bg-teal-50/70 p-2.5 rounded-xl border border-teal-100/80 mb-3.5">
                    "{review.highlight}"
                  </p>
                )}

                {/* Review Body */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500">{review.relation}</p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Trust Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Reviews aggregated from verified Google Business Profile ratings for Dr. Mujtaba Siddiqui, Medicare+ Clinic, Manikonda.
          </p>
        </div>

      </div>
    </section>
  );
};
