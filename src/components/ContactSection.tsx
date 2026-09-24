import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, Navigation, ExternalLink, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter a brief message or symptom description.');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', message: '' });
    setStatus('idle');
    setErrorMsg('');
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Contact Details & Map */}
          <div className="lg:col-span-7 space-y-6">
            
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
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5" />
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

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 font-heading">Send a Direct Message</h3>
              <p className="text-xs text-slate-500 mt-1">
                Have a question regarding consultation fees, symptoms, or doctor availability? Write to us directly.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-white border border-teal-200 text-center space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-heading">Thank You, {formData.name}!</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your message has been received by Medicare+ Clinic. Dr. Mujtaba Siddiqui or our clinic coordinator will call or message your phone ({formData.phone}) shortly.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors"
                  >
                    Follow up on WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Send another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message / Health Concern <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your health question, symptoms, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all text-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending message...' : 'Send Message to Clinic'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Your phone number will only be used to reply to this medical inquiry.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
