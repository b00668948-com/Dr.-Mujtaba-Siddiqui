import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { SERVICES, TIME_SLOTS, CLINIC_INFO } from '../constants';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    serviceId: preselectedServiceId || 'general-consultation',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '07:00 PM',
    symptoms: '',
    appointmentType: 'in-clinic',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter patient name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid phone number for SMS/WhatsApp confirmation.');
      return;
    }

    setErrorMsg('');
    const randomRef = 'MED-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const selectedServiceObj = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  const getWhatsAppMessage = () => {
    const text = `*New Appointment Booking - Medicare+ Clinic*\n\n` +
      `*Ref:* ${bookingRef}\n` +
      `*Patient:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${selectedServiceObj.title}\n` +
      `*Type:* ${formData.appointmentType === 'online' ? 'Online Video Consultation' : 'In-Clinic Visit'}\n` +
      `*Date:* ${formData.date}\n` +
      `*Slot:* ${formData.timeSlot}\n` +
      (formData.symptoms ? `*Symptoms:* ${formData.symptoms}\n` : '') +
      `\nPlease confirm availability for Dr. Mujtaba Siddiqui.`;
    return `https://wa.me/919121592010?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
              Medicare+ Clinic · Manikonda
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              {isSuccess ? 'Appointment Confirmed' : 'Book Evening Appointment'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation Success State */
          <div className="py-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                Booking Reference
              </span>
              <span className="text-2xl font-extrabold text-teal-800 tabular-nums">
                {bookingRef}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-semibold text-slate-900">{CLINIC_INFO.doctorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold text-slate-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-900">{selectedServiceObj.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-semibold text-teal-800">{formData.date} at {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Type:</span>
                <span className="font-semibold text-slate-900 capitalize">{formData.appointmentType}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              We have noted your appointment. To ensure immediate priority slot hold, you can also send this confirmation directly to our clinic's WhatsApp:
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp with Clinic</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="pt-4 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Visit Type Segmented Control */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, appointmentType: 'in-clinic' })}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  formData.appointmentType === 'in-clinic'
                    ? 'bg-white text-teal-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                In-Clinic Visit (Manikonda)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, appointmentType: 'online' })}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  formData.appointmentType === 'online'
                    ? 'bg-white text-teal-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Online Video Consult
              </button>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Select Service
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} ({s.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 91234 56789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                  />
                </div>
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Evening Slot (Opens 7:00 PM)
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Health Symptoms Optional */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Brief Symptoms / Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Fever since 2 days, dry cough, asthma inhaler review"
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
              />
            </div>

            {/* Notice regarding evening clinic */}
            <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/70 text-[11px] text-teal-900 flex items-start gap-2">
              <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Medicare+ Clinic opens promptly at <strong>7:00 PM</strong>. Token numbers are issued in the order of appointment booking.
              </span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Appointment Request</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
