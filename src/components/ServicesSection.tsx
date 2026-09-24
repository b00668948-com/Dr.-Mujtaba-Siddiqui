import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Thermometer, Wind, Users, Video, ClipboardCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope className="w-6 h-6" />;
      case 'thermometer':
        return <Thermometer className="w-6 h-6" />;
      case 'wind':
        return <Wind className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'clipboard':
        return <ClipboardCheck className="w-6 h-6" />;
      default:
        return <Stethoscope className="w-6 h-6" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'Primary Care', label: 'Primary Care' },
    { id: 'Acute Illness', label: 'Acute Fevers' },
    { id: 'Pulmonary Care', label: 'Asthma & Chest' },
    { id: 'Telemedicine', label: 'Online Consult' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
            <span>Clinical Offerings</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Healthcare Services Tailored for Every Need
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From seasonal fever treatment and chronic asthma relief to comprehensive family checkups, Dr. Mujtaba Siddiqui delivers evidence-based clinical solutions.
          </p>

          {/* Interactive Category Filter - Allowed interactive segmented control per constitution */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mt-8 bg-slate-200/70 rounded-xl max-w-fit mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-teal-800 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top card bar with icon and clean tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {service.category} · {service.duration}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-teal-700 transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key focus points / symptoms */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Common Key Treatments:
                  </span>
                  {service.symptomsOrCare.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-700">
                  Walk-in or Book Ahead
                </span>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>Book for This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
