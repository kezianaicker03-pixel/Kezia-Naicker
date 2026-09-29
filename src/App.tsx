import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { InspectionChecklist } from './components/InspectionChecklist';
import { SavingsCalculator } from './components/SavingsCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConfirmationModal } from './components/ConfirmationModal';
import { Footer } from './components/Footer';
import { LeadFormData, SubmissionResult } from './types';
import { Calendar, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [submission, setSubmission] = useState<SubmissionResult | null>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('hero-lead-form') || document.getElementById('lead-capture-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus on first input if possible
      const nameInput = formElement.querySelector('input[name="fullName"]') as HTMLInputElement;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 400);
      }
    }
  };

  const handleFormSubmitSuccess = (data: LeadFormData) => {
    const randomCode = `TUNEUP-49-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionResult: SubmissionResult = {
      confirmationCode: randomCode,
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      data,
    };
    setSubmission(submissionResult);
  };

  return (
    <div className="min-w-full min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 pb-16 lg:pb-0">
      
      {/* Header with sticky announcement */}
      <Header onScrollToForm={scrollToForm} />

      {/* Main Content */}
      <main>
        {/* Hero Section with embedded Lead Capture Form */}
        <HeroSection onSubmitSuccess={handleFormSubmitSuccess} />

        {/* Pain Points & Solution Section */}
        <PainPointsSection onScrollToForm={scrollToForm} />

        {/* 21-Point Inspection Checklist */}
        <InspectionChecklist />

        {/* Interactive Savings Calculator */}
        <SavingsCalculator onScrollToForm={scrollToForm} />

        {/* Social Proof & Customer Reviews */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onScrollToForm={scrollToForm} />

      {/* Floating Mobile Sticky CTA Bar for smartphone optimization */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/80 p-3 lg:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold text-amber-400">Summer Special</div>
            <div className="text-xs font-black text-white">$49 A/C Tune-Up</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:5554328869"
            className="bg-slate-800 hover:bg-slate-700 text-cyan-400 p-2.5 rounded-xl border border-slate-600 transition-colors"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToForm}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs shadow-md shadow-amber-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule $49 Tune-Up</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submission && (
        <ConfirmationModal
          submission={submission}
          onClose={() => setSubmission(null)}
        />
      )}

    </div>
  );
}
