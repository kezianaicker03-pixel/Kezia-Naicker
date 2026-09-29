import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface SavingsCalculatorProps {
  onScrollToForm: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onScrollToForm }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(320);

  // Average efficiency boost after 21-point tuneup: ~22% lower electrical consumption
  const monthlySavings = Math.round(monthlyBill * 0.22);
  const summerSavings = monthlySavings * 4; // 4 summer months
  const roiMultiplier = Math.round((summerSavings / 49) * 10) / 10;

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider">
            <Calculator className="w-4 h-4 text-cyan-400" /> Interactive Energy Savings Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            See How Fast Your $49 Tune-Up Pays for Itself
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Dirty coils and improper refrigerant charge force your air conditioner's compressor to pull 30% more amps. Drag the slider to calculate your estimated utility savings:
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          {/* Slider Input */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="bill-slider" className="text-sm font-semibold text-slate-200">
                Your Average Summer Monthly Electric Bill:
              </label>
              <span className="text-2xl sm:text-3xl font-black text-amber-400">
                ${monthlyBill} <span className="text-xs text-slate-400 font-normal">/ month</span>
              </span>
            </div>

            <input
              id="bill-slider"
              type="range"
              min="150"
              max="650"
              step="10"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
              <span>$150/mo</span>
              <span>$400/mo</span>
              <span>$650/mo+</span>
            </div>
          </div>

          {/* Savings Outcome Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                Estimated Monthly Savings
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 flex items-center justify-center gap-0.5">
                <TrendingDown className="w-5 h-5" /> ${monthlySavings}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Saved on electricity every 30 days</p>
            </div>

            <div className="bg-gradient-to-b from-cyan-950 to-slate-900 p-4 rounded-xl border border-cyan-500/40 text-center relative overflow-hidden">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Full Summer Savings
              </div>
              <div className="text-3xl sm:text-4xl font-black text-cyan-300">
                ${summerSavings}
              </div>
              <p className="text-[11px] text-cyan-200/80 mt-1 font-medium">Over 4 summer months</p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-center">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                Return on Investment
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                {roiMultiplier}x Payback
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Tune-up pays for itself in ~12 days</p>
            </div>

          </div>

          {/* Action CTA Button */}
          <div className="text-center pt-2">
            <button
              onClick={onScrollToForm}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock In Your $49 Tune-Up &amp; Start Saving</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
