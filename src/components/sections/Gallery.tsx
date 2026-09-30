'use client';

import { FadeIn } from '@/components/animations';
import Image from 'next/image';

export function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-16 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="text-center mb-10 md:mb-24">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
              MOMENTS & IMPACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue">
              In Action
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn direction="up" delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border-4 border-white group">
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <Image 
                src="/collage_1.jpg" 
                alt="Abhishek Shukla Gallery 1" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border-4 border-white group">
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <Image 
                src="/collage_2.png" 
                alt="Abhishek Shukla Gallery 2" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
