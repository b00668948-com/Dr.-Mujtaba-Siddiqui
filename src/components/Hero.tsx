import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Star, ShieldCheck, Heart, MapPin, Clock, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { ASSETS } from '../assets';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-teal-50/40 to-white pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background soft ambient orbs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-40 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Trust Kicker - Clean unboxed text with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-teal-800">
              <span className="inline-flex items-center gap-1.5 text-teal-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Licensed General Practitioner
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">Manikonda, Hyderabad</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-teal-700 font-bold">15+ Years Clinical Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-heading">
              Compassionate Healthcare <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
                for Your Family.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Led by <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName}</strong>, Medicare+ Clinic offers trusted primary care, acute fever treatment, asthma relief, and routine wellness checkups in a comfortable, family-first environment.
            </p>

            {/* Rating & Trust Proof Bar */}
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-bold text-slate-900 tabular-nums">4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-500">(104 Verified Reviews)</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Trusted by 100+ Families across Puppalguda & Manikonda</p>
                </div>
              </div>

              <div className="sm:border-l sm:border-slate-200 sm:pl-4 text-xs">
                <div className="flex items-center gap-1.5 text-teal-700 font-semibold">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Opens Today at 7:00 PM</span>
                </div>
                <p className="text-slate-500 mt-0.5">Walk-ins & Pre-bookings</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-teal-600/35 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-sm transition-all flex items-center gap-2.5 active:scale-95"
              >
                <Phone className="w-5 h-5 text-teal-600" />
                <span>Call Now: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Micro-Address Bar */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">Near Kakatiya High School, Friends Colony, Puppalguda, Manikonda</span>
            </div>

          </motion.div>

          {/* Right Column: Visual Showcase & Doctor Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative gradient border glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur-lg opacity-25"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-100">
                <img
                  src={ASSETS.consultation}
                  alt="Dr. Mujtaba Siddiqui consulting patient at Medicare+ Clinic"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid Doctor Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/90 text-[11px] font-semibold tracking-wide text-white uppercase mb-1">
                        Family Physician
                      </div>
                      <h3 className="text-xl font-bold font-heading">{CLINIC_INFO.doctorName}</h3>
                      <p className="text-xs text-teal-100">{CLINIC_INFO.qualification}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-300 block">Experience</span>
                      <span className="text-sm font-bold text-white tabular-nums">15+ Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Next Available Slot */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Evening Clinic</span>
                  <span className="text-xs font-bold text-slate-900">Opens Today at 7:00 PM</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Patient Satisfaction */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500">
                  <Heart className="w-5 h-5 fill-rose-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900 tabular-nums">100+ Families</span>
                    <span className="text-[10px] text-teal-600 font-semibold bg-teal-50 px-1.5 py-0.5 rounded">Happy Care</span>
                  </div>
                  <span className="text-[11px] text-slate-500">High Patient Recommendation</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
