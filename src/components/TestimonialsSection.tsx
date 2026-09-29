import React from 'react';
import { Star, ShieldCheck, ThumbsUp, MapPin, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Robert Vance',
      location: 'Westside Suburbs',
      stars: 5,
      date: '3 days ago',
      text: 'Last year our A/C froze up in mid-July and cost us $950 in emergency weekend repair fees. This year I got ArcticFlow’s $49 tune-up in June. Our electric bill dropped $78 last month and the house feels like an icebox!',
      tag: 'Verified Homeowner • Saved $78/mo',
    },
    {
      name: 'Sarah Jenkins',
      location: 'Oakridge Heights',
      stars: 5,
      date: '1 week ago',
      text: 'The technician (Mike) arrived right on time, wore shoe covers, and showed me before & after readings of our refrigerant pressure and electrical draw. Thorough, professional, and no upselling!',
      tag: 'Verified Homeowner • On-Time Service',
    },
    {
      name: 'David & Elena M.',
      location: 'Pinecrest Valley',
      stars: 5,
      date: '2 weeks ago',
      text: 'Our master bedroom was always 5 degrees hotter than the rest of the house. After the 21-point tune-up and duct balancing, cooling is completely even everywhere. Best $49 we’ve spent all summer.',
      tag: 'Verified Homeowner • 21-Point Inspection',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider">
            <Star className="w-4 h-4 text-amber-600 fill-amber-500" /> Over 520+ 5-Star Local Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Your Neighbors Across Town
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read real feedback from local homeowners who prevented summer A/C breakdowns and lowered their electric bills with our $49 promotion.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-cyan-100 absolute top-4 right-4" />

              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{rev.name}</div>
                <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" /> {rev.location}
                </div>
                <div className="mt-2 inline-block bg-cyan-50 text-cyan-800 text-[10px] font-semibold px-2.5 py-0.5 rounded-md border border-cyan-200">
                  {rev.tag}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-emerald-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              The "Cold-Air or It’s FREE" Ironclad Satisfaction Guarantee
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
              If your air conditioner experiences a breakdown this summer after receiving our $49 tune-up, we will credit 100% of the $49 toward any necessary repair and dispatch a technician same-day free of charge.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
