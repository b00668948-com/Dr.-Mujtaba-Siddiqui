import React from 'react';
import { Phone, MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { WhatsAppLogo } from './WhatsAppLogo';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
            <span>Location & Direct Contact</span>
            <span aria-hidden="true">·</span>
            <span>Reach Dr. Mujtaba Siddiqui</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Visit Medicare+ Clinic in Manikonda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Conveniently located near Kakatiya High School in Friends Colony, Puppalguda. Walk in directly during evening hours or send us your inquiry below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Clinic Contact Details & Map */}
          <div className="space-y-6">
            
            {/* Direct Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-700 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 block">Call Directly</span>
                  <a
                    href={`tel:${CLINIC_INFO.rawPhone}`}
                    className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors block mt-0.5"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/70">
                  <a
                    href={`tel:${CLINIC_INFO.rawPhone}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                  >
                    <span>Click to Call</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-3 shadow-sm">
                    <WhatsAppLogo className="w-5 h-5 fill-white" />
                  </div>
                  <span className="text-xs font-semibold text-teal-800 block">WhatsApp Chat</span>
                  <span className="text-lg font-bold text-slate-900 block mt-0.5">Quick Messaging</span>
                </div>
                <div className="mt-4 pt-3 border-t border-teal-200/60">
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Address & Hours Detail Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Clinic Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-teal-700 font-semibold mt-1">
                    Landmark: {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Operating Timings</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    <strong className="text-slate-900">Monday to Saturday:</strong> 7:00 PM – 10:30 PM (Evening Clinic)
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sunday: By Prior Appointment / Emergency On-call
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps View (Styled & with Direct Link) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative">
              <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between text-xs">
                <span className="font-semibold flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  Near Kakatiya High School, Manikonda, Hyderabad
                </span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 font-bold flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe with fallback placeholder */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-200">
                <iframe
                  title="Medicare+ Clinic Location Manikonda"
                  src="https://maps.google.com/maps?q=Plot%20144%20145%20Kakatiya%20High%20School%20Friends%20Colony%20Puppalguda%20Manikonda%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
