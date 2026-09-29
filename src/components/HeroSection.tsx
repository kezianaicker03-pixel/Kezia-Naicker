import React from 'react';
import { Shield, Star, Zap, AlertTriangle, Snowflake, CheckCircle2, TrendingDown } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';
import { LeadFormData } from '../types';

interface HeroSectionProps {
  onSubmitSuccess: (data: LeadFormData) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubmitSuccess }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-10 lg:py-16">
      {/* Background Radial Glow & Atmosphere */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Key Value Props */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Urgent Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
              <span>Beat Extreme Summer Temperatures Before Your A/C Quits</span>
            </div>

            {/* Main Headline targeting pain point */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Tired of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-orange-400">Skyrocketing Power Bills</span> &amp; Terrified of <span className="text-cyan-300 underline decoration-cyan-500/50 decoration-wavy">Sudden Summer A/C Breakdowns</span>?
            </h1>

            {/* Subheadline reinforcing value */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Get our complete <strong className="text-white font-semibold">21-Point Summer Precision A/C Tune-Up for just $49</strong> (Reg. $169). We restore maximum cooling power, flush clogged lines, prevent 85% of sudden breakdowns, and lower monthly electric costs by up to 30%.
            </p>

            {/* Key Value Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Slash Energy Bills</h4>
                  <p className="text-xs text-slate-300">Clean coils & tuned pressure cut compressor electrical strain.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Breakdown Guarantee</h4>
                  <p className="text-xs text-slate-300">If your unit breaks down this summer, repair call is FREE.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Snowflake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Ice-Cold Airflow</h4>
                  <p className="text-xs text-slate-300">Eliminate hot spots & achieve rapid whole-home cooling.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Same-Day Tech Dispatch</h4>
                  <p className="text-xs text-slate-300">Fast local certified technicians ready in your neighborhood.</p>
                </div>
              </div>
            </div>

            {/* Social Proof & Rating Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">4.9/5 Rating</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">520+ Homeowners</span> Serviced This Month
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Licensed, Bonded &amp; Insured
              </div>
            </div>

          </div>

          {/* Right Column: Lead Capture Form Box */}
          <div className="lg:col-span-5 w-full">
            <LeadCaptureForm onSubmitSuccess={onSubmitSuccess} formId="hero-lead-form" />
          </div>

        </div>
      </div>
    </section>
  );
};
