import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top micro-bar: hours & quick phone */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-teal-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              {CLINIC_INFO.timingNote}
            </span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon - Sat: 7:00 PM – 10:30 PM
            </span>
            <span className="hidden lg:inline text-slate-500">·</span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Friends Colony, Manikonda
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-teal-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation conforming to Top Bar Contract */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-shadow border-b border-slate-200/80 ${
          isScrolled ? 'shadow-md shadow-slate-900/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl font-black font-heading leading-none">M+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-heading">
                Medicare<span className="text-teal-600">+</span> Clinic
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Dr. Mujtaba Siddiqui (GP)
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors relative py-1 hover:border-b-2 hover:border-teal-500"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.rawPhone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              Call Doctor
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 rounded-lg shadow-sm shadow-teal-600/25 hover:shadow-md transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm"
              >
                Book Evening Appointment
              </button>
              <a
                href={`tel:${CLINIC_INFO.rawPhone}`}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                Call {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
