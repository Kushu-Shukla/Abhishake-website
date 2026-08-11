'use client';

import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';

export function Process() {
  const steps = siteConfig.process?.steps || [];

  return (
    <section id="process" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-32">
          <FadeIn direction="up">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4 font-semibold">MY PROCESS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-6">
              How I Work
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {siteConfig.process?.subtitle || "My structured approach to solving problems and delivering high-quality solutions."}
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-cyan-500/50 to-transparent -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step: any, index: number) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Step Content */}
                  <div className={`md:w-1/2 w-full pl-16 md:pl-0 flex ${isEven ? 'md:justify-start md:order-last' : 'md:justify-end md:order-first'}`}>
                    <FadeIn 
                      direction={isEven ? 'right' : 'left'} 
                      delay={index * 0.1}
                      className={`w-full md:w-[85%] ${isEven ? 'md:pl-12' : 'md:pr-12'} relative`}
                    >
                      <div className="glass rounded-2xl p-8 hover:border-gold-500/30 transition-colors duration-300 relative overflow-hidden group">
                        {/* Background Number */}
                        <div className={`absolute ${isEven ? '-right-4' : '-left-4'} -bottom-8 text-[120px] font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 pointer-events-none select-none`}>
                          0{index + 1}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                          <span className="text-cyan-400 font-mono text-sm border border-cyan-400/30 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          {step.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed relative z-10">
                          {step.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-gold-500 to-cyan-500 shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20 top-8 md:top-1/2 md:-translate-y-1/2 animate-pulse" />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
