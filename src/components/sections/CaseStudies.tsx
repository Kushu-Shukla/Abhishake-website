'use client';

import { FadeIn } from '@/components/animations';
import { Plane, ShoppingBag, Bot, ArrowRight, BarChart3, TrendingUp, Users } from 'lucide-react';

const caseStudies = [
  {
    company: 'Jobbers',
    role: 'CX & AI Leader',
    icon: Users,
    problem: 'Siloed user support and fragmented onboarding workflows were increasing drop-off rates and slowing down user acquisition.',
    solution: 'Designed and deployed unified AI-driven matching workflows and omnichannel support strategies, centralizing the user context.',
    results: [
      { label: 'Onboarding Speed', value: '+35%', icon: TrendingUp },
      { label: 'User Retention', value: '+24%', icon: Users },
      { label: 'Cost Savings', value: '3x', icon: BarChart3 }
    ]
  },
  {
    company: 'Freelancer.com',
    role: 'CX & AI Leader',
    icon: Bot,
    problem: 'High dispute resolution times and fragmented project mapping flows were impacting client-freelancer trust and conversion.',
    solution: 'Implemented predictive AI models to map user drop-offs and redesigned the dispute resolution UX to reduce friction points.',
    results: [
      { label: 'Conversion Lift', value: '28%', icon: TrendingUp },
      { label: 'Resolution Speed', value: '+40%', icon: Users },
      { label: 'Process Efficiency', value: '2x', icon: BarChart3 }
    ]
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-12 md:py-16 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-10 md:mb-24">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
              PROVEN RESULTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue">
              Real Impact & Case Studies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              How I leverage Artificial Intelligence and Customer Experience strategies to deliver measurable, multi-million dollar growth for enterprise organizations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <FadeIn key={idx} delay={0.1 * idx} direction={idx % 2 === 0 ? 'right' : 'left'}>
                <div className="glass rounded-3xl p-8 md:p-10 h-full flex flex-col border border-slate-200/60 shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 group">
                  
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-blue-600">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">{study.company}</h3>
                      <p className="text-blue-600 font-medium">{study.role}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-6 flex-grow mb-10">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The AI/CX Solution</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/50">
                    {study.results.map((result, rIdx) => {
                      const MetricIcon = result.icon;
                      return (
                        <div key={rIdx} className="text-center">
                          <MetricIcon className="w-5 h-5 text-blue-500 mx-auto mb-2 opacity-70" />
                          <div className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
