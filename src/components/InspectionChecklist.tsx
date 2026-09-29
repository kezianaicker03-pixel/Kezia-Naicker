import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Wrench, Thermometer, Zap, Wind, Droplets, Sparkles, ChevronDown } from 'lucide-react';

export const InspectionChecklist: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'cooling' | 'electrical' | 'airflow'>('all');

  const categories = [
    { id: 'all', label: 'All 21 Inspection Items' },
    { id: 'cooling', label: 'Refrigerant & Coils' },
    { id: 'electrical', label: 'Electrical & Motors' },
    { id: 'airflow', label: 'Airflow & Safety' },
  ];

  const items = [
    { category: 'cooling', title: 'Refrigerant Charge & Pressure Test', desc: 'Checks operating pressures to ensure exact factory refrigerant specs for max cooling power.' },
    { category: 'cooling', title: 'Condenser Coil Chemical Inspection', desc: 'Inspects and flushes dirt buildup that traps heat and forces compressor overload.' },
    { category: 'cooling', title: 'Evaporator Coil Condition Check', desc: 'Verifies coil cleanliness to prevent ice accumulation and frost-overs.' },
    { category: 'cooling', title: 'Temperature Drop (Delta T) Test', desc: 'Measures exact air temperature differential across supply and return ducts.' },

    { category: 'electrical', title: 'Capacitor Voltage & Rating Test', desc: 'Tests starting and running capacitors to prevent sudden compressor/fan startup failures.' },
    { category: 'electrical', title: 'Contactor Relays & Contacts Check', desc: 'Inspects electrical contact points for pitting or burn marks.' },
    { category: 'electrical', title: 'Compressor Amperage Draw Test', desc: 'Measures compressor electrical load to identify overheating or wear early.' },
    { category: 'electrical', title: 'Blower Motor Wiring & AMP Inspection', desc: 'Ensures blower motor draws correct wattage without overheating.' },
    { category: 'electrical', title: 'Thermostat Wiring & Calibration', desc: 'Verifies thermostat signals correctly and holds precise room temperatures.' },

    { category: 'airflow', title: 'Condensate Drain Line Flush', desc: 'Clears algae and debris to prevent water overflow onto ceilings or floors.' },
    { category: 'airflow', title: 'Air Filter Inspection & Replacement', desc: 'Replaces standard filter or cleans permanent filter for optimal airflow.' },
    { category: 'airflow', title: 'Blower Wheel Balance Check', desc: 'Verifies blower fan wheel is balanced and vibration-free.' },
    { category: 'airflow', title: 'Ductwork Leak & Connection Assessment', desc: 'Checks visible duct joints for cool air leaks in attic or crawlspace.' },
    { category: 'airflow', title: 'Safety Disconnect Switch Inspection', desc: 'Tests outdoor high-voltage disconnect switch for safe power cutoff.' },
    { category: 'airflow', title: 'Fan Blade Alignment & Tightness', desc: 'Inspects outdoor fan blades for cracks, looseness, or imbalance.' },
  ];

  const filteredItems = activeTab === 'all' ? items : items.filter((i) => i.category === activeTab);

  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 text-xs font-bold uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider border border-cyan-200">
            <Wrench className="w-4 h-4 text-cyan-600" /> Complete System Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What's Included in Your $49 Precision A/C Tune-Up
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Our certified master technicians perform a complete 21-point overhaul designed to restore factory performance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Inspection Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-300 transition-colors flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Box */}
        <div className="mt-10 bg-cyan-900/5 border border-cyan-200 rounded-2xl p-6 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider">Regular Retail Price: $169</div>
            <div className="text-2xl font-black text-slate-900">
              Summer Special Promo: <span className="text-cyan-600">$49 Total</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            <ShieldCheck className="w-4 h-4" /> Includes Written Inspection Report
          </div>
        </div>

      </div>
    </section>
  );
};
