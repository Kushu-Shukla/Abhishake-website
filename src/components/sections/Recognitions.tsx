'use client';

import { FadeIn } from '@/components/animations';
import { Star } from 'lucide-react';

const badges = [
  { rank: 'Top 50', category: 'Lean Startup' },
  { rank: 'Top 100', category: 'Agentic AI' },
  { rank: 'Top 100', category: 'Customer Loyalty' },
  { rank: 'Top 100', category: 'Project Management' },
];

export function Recognitions() {
  return (
    <section id="recognitions" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
              Industry Recognition
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Top Thought Leader by <span className="text-gradient-blue">Thinkers360</span>
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          
          {/* The 4 Standard Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} direction="up">
                <div className="bg-[#0a0a0a] rounded-2xl p-6 border-2 border-slate-800 flex flex-col items-center justify-between h-full min-w-[160px] shadow-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 hover:-translate-y-2 group cursor-default">
                  
                  <div className="text-center w-full">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{badge.rank}</h3>
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mt-1 font-semibold">Thought Leader</p>
                  </div>
                  
                  <div className="w-full h-[2px] bg-slate-800 my-5"></div>
                  
                  <div className="bg-white text-black font-extrabold text-xs md:text-sm px-3 py-1.5 rounded w-full text-center mb-6 truncate">
                    {badge.category}
                  </div>
                  
                  {/* Shield Approximation */}
                  <div className="w-14 h-16 border-2 border-slate-600 rounded-b-full rounded-t-sm flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <span className="text-[9px] font-bold leading-tight text-center text-slate-300">thinkers<br/>360</span>
                  </div>
                  
                </div>
              </FadeIn>
            ))}
          </div>

          {/* The Gold Certified Expert Badge */}
          <FadeIn delay={0.5} direction="left">
            <div className="bg-[#0a0a0a] rounded-2xl p-6 border-2 border-[#b8860b] flex flex-col items-center justify-between h-full min-w-[200px] shadow-[0_0_40px_rgba(184,134,11,0.15)] hover:shadow-[0_0_50px_rgba(184,134,11,0.3)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-default group">
              {/* Gold Glow inside */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#b8860b]/20 blur-[50px] pointer-events-none"></div>
              
              <div className="text-center z-10 w-full">
                <p className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold mb-3">Certified Expert</p>
                <Star className="w-6 h-6 text-[#b8860b] mx-auto mb-4 group-hover:scale-125 transition-transform duration-500" fill="currentColor" />
              </div>
              
              <div className="bg-gradient-to-r from-[#8b6508] via-[#daa520] to-[#8b6508] text-white font-extrabold text-sm md:text-base px-4 py-2 w-[110%] -mx-4 text-center mt-2 mb-6 shadow-lg relative z-10 uppercase tracking-wide border-y border-[#ffd700]/50">
                Leadership
              </div>
              
              <div className="w-14 h-16 border-2 border-[#b8860b] rounded-b-full rounded-t-sm flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm group-hover:bg-[#b8860b]/10 transition-colors">
                <span className="text-[9px] font-bold leading-tight text-center text-slate-200">thinkers<br/>360</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
