import React from 'react';
import { CheckCircle2, Phone, Calendar, Clock, X, Lock, ShieldCheck } from 'lucide-react';
import { SubmissionResult } from '../types';

interface ConfirmationModalProps {
  submission: SubmissionResult;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ submission, onClose }) => {
  const { data, confirmationCode, submittedAt } = submission;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            Voucher Secured Successfully
          </span>
          <h3 className="text-2xl font-black text-white">You're All Set, {data.fullName}!</h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Your $49 Promotional Tune-Up Rate has been locked in.
          </p>
        </div>

        {/* Voucher Code Box */}
        <div className="bg-slate-800/90 border border-cyan-500/40 p-4 rounded-2xl text-center mb-6">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Your Exclusive Voucher Code
          </div>
          <div className="text-2xl font-mono font-black text-cyan-400 mt-1 tracking-widest">
            {confirmationCode}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Issued: {submittedAt}
          </div>
        </div>

        {/* Summary Details */}
        <div className="space-y-2 text-xs sm:text-sm bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-300 mb-6">
          <div className="flex justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Name:</span>
            <span className="font-semibold text-white">{data.fullName}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Phone:</span>
            <span className="font-semibold text-white">{data.phone}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Email:</span>
            <span className="font-semibold text-white">{data.email}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-400">Preferred Window:</span>
            <span className="font-semibold text-cyan-300">{data.preferredTime}</span>
          </div>
        </div>

        {/* Call Now Shortcut */}
        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-center mb-6">
          <p className="text-xs text-amber-200 font-medium mb-2">
            <strong>Want Priority Dispatch?</strong> Call us right now to lock in your exact time slot immediately:
          </p>
          <a
            href="tel:5554328869"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-4 rounded-xl text-sm shadow-lg shadow-amber-500/20 inline-flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call (555) 432-8869 Now</span>
          </a>
        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-slate-400">
          <p className="flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            A representative will call or SMS you shortly to confirm your booking.
          </p>
        </div>

      </div>
    </div>
  );
};
