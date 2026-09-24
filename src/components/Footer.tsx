import React from 'react';
import { Phone, MapPin, Clock, Star, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { WhatsAppLogo } from './WhatsAppLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Doctor Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white shadow-sm relative overflow-hidden">
                <span className="text-lg font-black font-heading leading-none">M</span>
                <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-white text-teal-700 rounded-full flex items-center justify-center text-[8px] font-black leading-none">
                  +
                </span>
              </div>
              <span className="text-xl font-bold text-white font-heading tracking-tight">
                Medicare<span className="text-teal-400">+</span> Clinic
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Compassionate family healthcare led by <strong>Dr. Mujtaba Siddiqui</strong> (General Practitioner). Dedicated to ethical, evidence-based medical care for children, adults, and seniors in Manikonda and Puppalguda.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.9 ★ Rating</span>
              </div>
              <span className="text-xs text-slate-500">104 Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Dr. Siddiqui</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Clinical Services</a></li>
              <li><a href="#why-us" className="hover:text-teal-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Patient Testimonials</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Frequently Asked</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>General Primary Consultations</li>
              <li>Viral Fevers, Typhoid & Dengue Screenings</li>
              <li>Pediatric & Adult Asthma Management</li>
              <li>Annual Preventive Family Health Checkups</li>
              <li>Hypertension & Diabetes Follow-ups</li>
              <li>Tele-Consultation for Remote Patients</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Clinic Hours & Address
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">Evening Clinic</span>
                  <span className="text-slate-400">Mon - Sat: 7:00 PM – 10:30 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">
                  Plot #144/145, Friends Colony, Near Kakatiya High School, Puppalguda, Manikonda, Hyderabad 500089
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.rawPhone}`} className="text-white hover:text-teal-300 font-semibold">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-500 block mb-2">Connect & Follow:</span>
              <div className="flex items-center gap-2 text-xs">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  Google Profile
                </a>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Medicare+ Clinic · Dr. Mujtaba Siddiqui. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-500">
            <span>Made with compassionate care for Manikonda families</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
