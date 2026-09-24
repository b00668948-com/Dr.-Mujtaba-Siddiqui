import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, X, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 8 seconds to prevent annoyance
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Action (Desktop & Mobile) */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end">
        {showTooltip && (
          <div className="mb-2 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 animate-bounce">
            <span>Chat with Clinic on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Chat with Medicare+ Clinic on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Floating Bottom Action Bar on Mobile (Under 15% mobile viewport height cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${CLINIC_INFO.rawPhone}`}
          className="flex-1 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-teal-600" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Evening Slot</span>
        </button>
      </div>
    </>
  );
};
