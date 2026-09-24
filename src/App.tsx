import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('general-consultation');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-teal-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Medicare+ Clinic & Dr. Mujtaba Siddiqui */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* Clinical Services with Booking Hook */}
        <ServicesSection onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Patient Reviews & 4.9★ Rating Display */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* Contact, Interactive Map & Message Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
      />

      {/* Floating WhatsApp and Mobile Call Actions */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
