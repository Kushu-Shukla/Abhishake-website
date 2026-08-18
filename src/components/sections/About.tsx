'use client';

import { FadeIn, TextReveal } from '@/components/animations';
import { siteConfig } from '@/config';

import Image from 'next/image';

export default function About() {
  const paragraphs = siteConfig.about?.paragraphs || [
    "I'm a passionate leader at the intersection of customer experience and artificial intelligence.",
    "With over a decade of experience in transforming operations, I help organizations build scalable, empathetic, and highly efficient customer journeys."
  ];

  const philosophy = siteConfig.about?.philosophy || "Empathy driven by data, scaled through AI.";

  const stats = siteConfig.about?.stats || [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "5M+", label: "Users Impacted" },
    { value: "3x", label: "Efficiency Growth" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px] translate-x-1/2 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <FadeIn direction="right">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-[1px] bg-blue-600/50"></span>
                <span className="text-blue-600 text-sm tracking-widest uppercase font-medium">About Me</span>
              </div>
              <TextReveal text="Building the Future" className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue" />
            </FadeIn>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              {paragraphs.map((paragraph: string, idx: number) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)} direction="right">
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.5} direction="right">
              <div className="glass p-8 rounded-2xl border-l-4 border-l-blue-500 mt-8 relative overflow-hidden group hover:border-l-blue-400 transition-colors duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="italic text-blue-600 text-xl font-medium relative z-10">
                  &quot;{philosophy}&quot;
                </p>
              </div>
            </FadeIn>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <FadeIn delay={0.4} direction="left">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-200">
                <Image src="/profile_suit.jpg" alt="Abhishek Shukla - Building the Future" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: { value: string; label: string }, idx: number) => (
            <FadeIn key={idx} delay={0.2 + (idx * 0.1)} direction="up" className="h-full">
              <div className="glass h-full p-8 rounded-2xl flex flex-col justify-center items-center text-center border border-transparent hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group bg-slate-50">
                <div className="text-4xl lg:text-5xl font-bold mb-3">
                  <span className="text-gradient-blue group-hover:text-blue-500 transition-all duration-500">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm text-slate-600 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
