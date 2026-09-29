import React from 'react';
import { AlertCircle, Flame, DollarSign, Droplets, Wind, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PainPointsSectionProps {
  onScrollToForm: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onScrollToForm }) => {
  const painPoints = [
    {
      icon: DollarSign,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      title: 'Skyrocketing Energy Costs',
      problem: 'When coils accumulate dust and refrigerant drops just 10%, your compressor runs constantly, causing electric bills to jump by $80–$150/month.',
      solution: 'Our $49 precision cleaning and pressure calibration restores factory SEER rating efficiency.',
    },
    {
      icon: Flame,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      title: 'Sudden Heat-Wave Failures',
      problem: 'Air conditioners fail most often on 95°+ days when strain peaks. A blown capacitor or dirty fan motor can leave your family sweltering in an oven.',
      solution: 'We test electrical tolerances and capacitors to eliminate 85% of breakdown causes before they happen.',
    },
    {
      icon: Wind,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: 'Weak, Warm Airflow',
      problem: 'Dirty air filters and blower wheels restrict circulation, creating uncomfortably hot bedrooms and lukewarm air from vents.',
      solution: 'Full airflow calibration and system balancing for crisp 55°F air from every register.',
    },
    {
      icon: Droplets,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      title: 'Drain Backups & Ceiling Leaks',
      problem: 'Algae growth blocks the condensate drain line, leading to overflow, ceiling drywall damage, and toxic indoor mold growth.',
      solution: 'We flush and chemically clear your condensate drain line during the $49 inspection.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
            <AlertCircle className="w-4 h-4" /> The Cost of Neglecting Your A/C
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Don't Wait for Your Air Conditioner to Break Down in 95° Heat
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Over 80% of emergency HVAC repairs in summer could have been completely avoided with a routine 21-point tune-up. Here is how an unmaintained unit hurts your wallet:
          </p>
        </div>

        {/* 2x2 Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border ${item.borderColor} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
                      <span className="font-semibold text-red-600 block mb-0.5">⚠️ The Risk:</span>
                      {item.problem}
                    </div>

                    <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 text-slate-800">
                      <span className="font-semibold text-emerald-700 block mb-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" /> Our $49 Fix:
                      </span>
                      {item.solution}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Call to Action Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Prevent A $1,200 Emergency Repair Call Today
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Schedule your $49 Tune-Up in under 60 seconds. Our techs are fully stocked and nearby.
            </p>
          </div>
          <button
            onClick={onScrollToForm}
            className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Schedule Your $49 Tune-Up</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
