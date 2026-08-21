'use client';

import { FadeIn } from '@/components/animations';
import SceneLoader from '@/components/three/SceneLoader';
import { siteConfig } from '@/config';
import { ChevronDown, Trophy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <SceneLoader />
      </div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/40 via-transparent to-white/90 dark:from-slate-950/80 dark:to-slate-950 pointer-events-none" />

      {/* Main Content */}
      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <FadeIn delay={0.2} direction="up">
              <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-600/50"></span>
                Hello, I&apos;m
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                <span className="bg-gradient-to-br from-blue-600 to-fuchsia-500 bg-clip-text text-transparent">Abhishek</span>
                <br />
                <span className="text-slate-900 dark:text-white">Shukla</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.6} direction="up">
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 dark:text-slate-300 font-medium mb-8 flex items-center gap-3">
                CX & AI Project Leader 
                <span className="text-slate-300 dark:text-slate-700 dark:text-slate-200">|</span> 
                Author
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-medium text-sm mb-8 border border-blue-100 dark:border-blue-800/50">
                <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                #1 Rank in India on Customer Loyalty & AI Ethics via Thinkers360
              </div>
            </FadeIn>
            
            <FadeIn delay={0.8} direction="up">
              <p className="text-lg text-slate-600 dark:text-slate-300 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
                Driving Operational Excellence, 10X GenAI Productivity, and Strategic Career Growth.
              </p>
            </FadeIn>
            
            <FadeIn delay={1.0} direction="up" className="flex flex-wrap items-center gap-4">
              <Link 
                href="#work" 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20"
              >
                View My Services
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 rounded-full border border-slate-300 text-slate-900 dark:text-white hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all duration-300 glass-subtle"
              >
                Let&apos;s Connect
              </Link>
            </FadeIn>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <FadeIn delay={0.6} direction="left">
               <div className="relative w-80 h-80 xl:w-[400px] xl:h-[400px]">
                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 blur-3xl opacity-20 animate-pulse"></div>
                 {/* @ts-ignore */}
                 <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover rounded-full border border-slate-200 shadow-2xl glass-subtle" priority />
               </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <FadeIn delay={1.2}>
          <Link href="#about" aria-label="Scroll to About section" className="text-slate-500 hover:text-blue-600 transition-colors animate-bounce flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={24} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
