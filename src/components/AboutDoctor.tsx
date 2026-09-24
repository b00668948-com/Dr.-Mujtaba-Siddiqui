import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, HeartHandshake, UserCheck, Languages, MapPin, Calendar, Clock, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { ASSETS } from '../assets';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking }) => {
  const highlights = [
    '15+ Years of Dedicated General Medical & Clinical Experience',
    'Specialist focus on Adult & Pediatric Asthma and Respiratory Health',
    'Rational prescription approach: No unnecessary medical tests or antibiotic overuse',
    'Holistic family care across all generations — pediatric, adults, and seniors',
    'Warm, empathetic listening in English, Hindi, Telugu, and Urdu',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
            <span>About Medicare+ Clinic</span>
            <span aria-hidden="true">·</span>
            <span>Dr. Mujtaba Siddiqui</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Dedicated Family Healthcare with a Personal Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded with the belief that healthcare should feel personal, reassuring, and honest. Dr. Mujtaba Siddiqui has been serving families across Manikonda and Puppalguda with unwavering clinical dedication.
          </p>
        </div>

        {/* Doctor Card & Clinic Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Doctor Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Doctor Avatar / Badge Top */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold block">
                    Chief Physician
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">{CLINIC_INFO.doctorName}</h3>
                  <p className="text-sm text-slate-300">{CLINIC_INFO.qualification}</p>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Dr. Mujtaba Siddiqui is a highly regarded General Practitioner recognized for his calm demeanor, accurate diagnostic acumen, and compassionate bedside manner. He treats patients as extended family members, prioritizing clear explanations and patient comfort above all else.
              </p>

              {/* Key Credentials Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-teal-300 block">Experience</span>
                  <span className="text-sm font-bold text-white tabular-nums">15+ Years</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-teal-300 block">Patient Rating</span>
                  <span className="text-sm font-bold text-white tabular-nums">4.9 ★ (104 Reviews)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-teal-300 block">Consultation Style</span>
                  <span className="text-sm font-bold text-white">Patient-First</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[11px] text-teal-300 block">Languages</span>
                  <span className="text-sm font-bold text-white">EN, HI, TE, UR</span>
                </div>
              </div>

              {/* Clinic Timings on Doctor Card */}
              <div className="p-4 rounded-xl bg-teal-950/50 border border-teal-500/30 mb-6 flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-teal-200 block">Evening Clinic Timing:</span>
                  <p className="text-slate-300 mt-0.5">Monday – Saturday: 7:00 PM – 10:30 PM</p>
                  <p className="text-teal-400/80 text-[11px] mt-0.5">Sunday: Prior Appointment / Emergency On-call</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clinic Philosophy & Modern Facility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Philosophy text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                A Family Doctor Who Genuinely Cares About Your Wellbeing
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Navigating medical issues should never feel stressful or rushed. At Medicare+ Clinic, consultations are detailed and relaxed. Dr. Mujtaba Siddiqui takes time to understand your lifestyle, medical history, and specific anxieties, ensuring an individualized recovery roadmap for every member of your family.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Clinic Facility Preview Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-4 group">
              <img
                src={ASSETS.clinicInterior}
                alt="Medicare+ Clinic interior waiting room and consultation facility"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Puppalguda / Manikonda Facility</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">
                    Hygienic, comfortable consultation and examination suites with child-friendly ambiance.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
