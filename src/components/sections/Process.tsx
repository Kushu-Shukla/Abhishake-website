'use client';

import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';

import Image from 'next/image';

export function Process() {
  const steps = siteConfig.process?.steps || [];

  return (
    <section id="process" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20 md:mb-32">
          {/* Text Column */}
          <FadeIn direction="right">
            <div className="text-left">
              <p className="text-blue-600 text-sm tracking-widest uppercase mb-4 font-semibold">MY PROCESS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-blue mb-6">
                How I Work
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                {siteConfig.process?.subtitle || "My structured approach to solving problems and delivering high-quality solutions."}
              </p>
            </div>
          </FadeIn>
          
          {/* Profile Image Column */}
          <div className="relative flex justify-center">
            <FadeIn direction="up">
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white group">
                 <Image src="/process_profile.jpg" alt="Abhishek Shukla Process" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
            </FadeIn>
          </div>

          {/* Badges Column (Right) */}
          <FadeIn direction="left">
            <div className="flex flex-row md:flex-col justify-center items-center gap-6">
              <div className="relative w-28 h-40 bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 hover:scale-105 transition-transform duration-300">
                <Image src="/badge2.png" alt="Thinkers360 Certified Expert" fill className="object-contain p-3" />
              </div>
              <div className="relative w-28 h-40 bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 hover:scale-105 transition-transform duration-300">
                <Image src="/certificates/thinkers360-agile.png" alt="Thinkers360 Agile" fill className="object-contain p-2" />
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-cyan-500/50 to-transparent -translate-x-1/2 md:translate-x-0" />

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
                      <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300 relative overflow-hidden group">
                        {/* Background Number */}
                        <div className={`absolute ${isEven ? '-right-4' : '-left-4'} -bottom-8 text-[120px] font-bold text-slate-100 group-hover:text-slate-200 transition-colors duration-500 pointer-events-none select-none`}>
                          0{index + 1}
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-4">
                          <span className="text-blue-600 font-mono text-sm border border-blue-600/30 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                          {step.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20 top-8 md:top-1/2 md:-translate-y-1/2 animate-pulse" />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
