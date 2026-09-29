import React from 'react';
import { ShieldCheck, Phone, Snowflake, Clock, Flame } from 'lucide-react';

interface HeaderProps {
  onScrollToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToForm }) => {
  return (
    <header className="w-full bg-slate-900 text-white sticky top-0 z-40 shadow-md">
      {/* Top Emergency & Alert Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white text-xs sm:text-sm py-1.5 px-4 font-medium text-center flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 animate-pulse text-amber-200" />
        <span>
          <strong>Summer Special:</strong> Save $120 on Complete A/C Tune-Up — Only <strong>$49</strong> (First 50 Homeowners)
        </span>
        <button
          onClick={onScrollToForm}
          className="hidden md:inline-block underline ml-2 hover:text-amber-100 transition-colors font-bold"
        >
          Claim Promo &rarr;
        </button>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
            <Snowflake className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                Arctic<span className="text-cyan-400">Flow</span>
              </span>
              <span className="hidden sm:inline-block bg-cyan-950 text-cyan-300 border border-cyan-800/80 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Heating & Air
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400 inline" /> Lic #HVAC-884920 • 24/7 Service
            </p>
          </div>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="tel:5554328869"
            className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-slate-800 group-hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" /> Dispatch Standby
              </div>
              <div className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                (555) 432-8869
              </div>
            </div>
          </a>

          <button
            onClick={onScrollToForm}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Schedule $49 Tune-Up
          </button>
        </div>
      </div>
    </header>
  );
};
