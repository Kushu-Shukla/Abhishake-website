'use client';

import { FadeIn } from '@/components/animations';
import { siteConfig } from '@/config';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Books() {
  return (
    <section id="books" className="py-12 md:py-16 md:py-32 bg-slate-50 dark:bg-slate-900 relative z-10">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {siteConfig.books.title}
            </h2>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.2} direction="up">
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 group">
              <Image 
                src={siteConfig.books.items[0].image} 
                alt={siteConfig.books.items[0].title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {siteConfig.books.items[0].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                {siteConfig.books.items[0].description}
              </p>
              
              <div className="pt-6">
                <a 
                  href={siteConfig.books.items[0].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
                >
                  Buy on Amazon
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
