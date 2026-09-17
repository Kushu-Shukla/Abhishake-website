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
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold mb-6 tracking-tight leading-tight">
                <span className="text-slate-900 dark:text-white">Abhishek</span>
                <br />
                <span className="text-blue-600 dark:text-blue-500">Shukla</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.6} direction="up">
              <p className="text-xl md:text-2xl font-medium mb-8 text-slate-600 dark:text-slate-300 flex items-center gap-4">
                <span>CX & AI Project Leader</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span> 
                <span>Author</span>
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up">
              <div className="inline-flex items-center gap-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-md font-medium text-sm mb-8 border border-slate-200 dark:border-slate-700/50">
                <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>#1 Rank in India on Customer Loyalty & AI Ethics via Thinkers360</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.8} direction="up">
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
                Driving Operational Excellence, 10X GenAI Productivity, and Strategic Career Growth.
              </p>
            </FadeIn>
            
            <FadeIn delay={1.0} direction="up" className="flex flex-wrap items-center gap-4 mb-8">
              <Link 
                href="#work" 
                className="px-8 py-3.5 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-sm"
              >
                View My Services
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-3.5 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 font-semibold"
              >
                Let&apos;s Connect
              </Link>
            </FadeIn>

            <FadeIn delay={1.2} direction="up" className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">5.0 Rating by 50+ Global Clients</p>
            </FadeIn>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <FadeIn delay={0.6} direction="left">
               <div className="relative w-80 h-80 xl:w-[450px] xl:h-[450px]">
                 <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
                 {/* @ts-ignore */}
                 <Image src={siteConfig.profileImage} alt={siteConfig.name} fill className="object-cover rounded-full border border-slate-200 dark:border-slate-800 shadow-xl" priority />
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
