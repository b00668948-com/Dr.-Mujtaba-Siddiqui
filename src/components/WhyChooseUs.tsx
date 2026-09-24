import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Target, HeartHandshake, IndianRupee, ShieldAlert, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US, CLINIC_INFO } from '../constants';

export const WhyChooseUs: React.FC = () => {
  const iconList = [
    <UserCheck className="w-7 h-7 text-teal-600" key="user" />,
    <Target className="w-7 h-7 text-blue-600" key="target" />,
    <HeartHandshake className="w-7 h-7 text-teal-600" key="heart" />,
    <IndianRupee className="w-7 h-7 text-blue-600" key="rupee" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
            <span>The Medicare+ Difference</span>
            <span aria-hidden="true">·</span>
            <span>Trust & Ethics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Why Manikonda Families Choose Medicare+ Clinic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We put patients before protocols. You and your family receive sincere attention, honest clinical advice, and personalized care at every visit.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-teal-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/70 flex items-center justify-center mb-6 shadow-sm">
                  {iconList[index]}
                </div>

                <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                  {item.metric}
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Verified in 104+ Reviews</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Working Hours & Location Trust Indicator */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Convenient Evening Availability
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
              Opens Daily at 7:00 PM for After-Office & School Care
            </h4>
            <p className="text-sm text-slate-600 max-w-xl">
              No need to take time off work or pull kids out of classes. Get diagnosed comfortably during our regular evening clinic hours.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-500 block">Location</span>
              <span className="text-sm font-bold text-slate-900">Puppalguda, Manikonda</span>
            </div>
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              Call {CLINIC_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
