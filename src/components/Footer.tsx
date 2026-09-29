import React from 'react';
import { Snowflake, ShieldCheck, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onScrollToForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToForm }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Snowflake className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Arctic<span className="text-cyan-400">Flow</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted local heating and air conditioning specialists. Dedicated to keeping homes cool, safe, and energy-efficient all summer long.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> License #HVAC-884920
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Promotions &amp; Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onScrollToForm} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  $49 Summer A/C Tune-Up
                </button>
              </li>
              <li className="text-slate-500">21-Point System Inspection</li>
              <li className="text-slate-500">Refrigerant Leak Diagnostics</li>
              <li className="text-slate-500">Air Filter &amp; Duct Cleaning</li>
              <li className="text-slate-500">24/7 Emergency A/C Repair</li>
            </ul>
          </div>

          {/* Col 3: Hours & Service Area */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Service Hours &amp; Area</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Mon – Sun: 7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>24/7 Emergency Dispatch</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Metro Area &amp; Surrounding Suburbs</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Direct Dispatch Line</h4>
            <a
              href="tel:5554328869"
              className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-cyan-400 transition-colors bg-slate-900 border border-slate-700 px-3.5 py-2 rounded-xl"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>(555) 432-8869</span>
            </a>
            <p className="text-[11px] text-slate-500 mt-2">
              Call anytime to speak directly with an on-duty local technician.
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} ArcticFlow Heating &amp; Air Conditioning. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Guarantee Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
