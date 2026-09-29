import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, ShieldCheck, CheckCircle2, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadCaptureFormProps {
  onSubmitSuccess: (data: LeadFormData) => void;
  formId?: string;
  compact?: boolean;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  onSubmitSuccess,
  formId = 'lead-capture-form',
  compact = false,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: 'As soon as possible',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    // Phone validation
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate short network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(formData);
    }, 750);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div
      id={formId}
      className={`bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden relative ${
        compact ? 'p-5' : 'p-6 sm:p-8'
      }`}
    >
      {/* Top Banner inside form */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white text-center py-2 px-4 text-xs font-bold uppercase tracking-wider rounded-lg mb-6 flex items-center justify-center gap-1.5 shadow-sm">
        <CheckCircle2 className="w-4 h-4 text-cyan-200" />
        <span>Limited Summer Promotion • Save $120 Today</span>
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          Claim Your <span className="text-cyan-400">$49 Tune-Up Voucher</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Lock in special promotional pricing before summer heat peaks. No hidden fees or contracts.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor={`fullName-${formId}`} className="block text-xs font-semibold text-slate-200 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id={`fullName-${formId}`}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Miller"
              className={`w-full pl-10 pr-4 py-3 bg-slate-800/90 text-white placeholder-slate-400 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/30'
              }`}
            />
          </div>
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor={`phone-${formId}`} className="block text-xs font-semibold text-slate-200 mb-1.5">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id={`phone-${formId}`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className={`w-full pl-10 pr-4 py-3 bg-slate-800/90 text-white placeholder-slate-400 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/30'
              }`}
            />
          </div>
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor={`email-${formId}`} className="block text-xs font-semibold text-slate-200 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id={`email-${formId}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full pl-10 pr-4 py-3 bg-slate-800/90 text-white placeholder-slate-400 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/30'
              }`}
            />
          </div>
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Preferred Time Window */}
        <div>
          <label htmlFor={`preferredTime-${formId}`} className="block text-xs font-semibold text-slate-200 mb-1.5">
            Preferred Time Window (Optional)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Calendar className="w-4 h-4" />
            </div>
            <select
              id={`preferredTime-${formId}`}
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full pl-10 pr-8 py-3 bg-slate-800/90 text-white text-sm rounded-xl border border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/30 focus:outline-none appearance-none cursor-pointer"
            >
              <option value="As soon as possible">As Soon As Possible (Same-Day / Next-Day)</option>
              <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Submit CTA Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold py-4 px-6 rounded-xl text-base sm:text-lg shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer border border-amber-300/40"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Securing Your Spot...</span>
            </>
          ) : (
            <>
              <span>Schedule Your $49 Tune-Up</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Guarantee and Microcopy */}
        <div className="pt-2 text-center text-[11px] text-slate-400 space-y-1">
          <p className="flex items-center justify-center gap-1 text-slate-300 font-medium">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            100% Privacy Protected • Zero Obligation
          </p>
          <p className="flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Back by our 100% Cold-Air Guarantee
          </p>
        </div>
      </form>
    </div>
  );
};
