'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations';
import { siteConfig } from '@/config';
import Image from 'next/image';
import { ExternalLink, Star, Download, Quote } from 'lucide-react';

export default function Books() {
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    { text: "A masterclass in human-centered leadership. Abhishek completely changes how you view customer experience.", author: "Global CX Director" },
    { text: "Practical, deeply insightful, and directly applicable. I bought copies for my entire management team.", author: "Operations Head" },
  ];

  return (
    <section id="books" className="py-16 md:py-32 bg-slate-50 relative z-10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
              Featured Publication
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              {siteConfig.books.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 3D Book Container */}
          <FadeIn delay={0.2} direction="right" className="flex justify-center perspective-[1500px]">
            <div 
              className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] transition-all duration-700 ease-out transform-gpu cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'rotateY(-15deg) rotateX(5deg) scale(1.05)' : 'rotateY(0deg) rotateX(0deg)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Front Cover */}
              <div 
                className="absolute inset-0 shadow-2xl rounded-r-2xl overflow-hidden border border-slate-200"
                style={{ transform: 'translateZ(20px)' }}
              >
                <Image 
                  src={siteConfig.books.items[0].image} 
                  alt={siteConfig.books.items[0].title} 
                  fill 
                  className="object-cover"
                  priority
                />
                {/* Glossy sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Book Spine Simulation */}
              <div 
                className="absolute left-0 top-0 w-[40px] h-full bg-slate-800 rounded-l-md border-y border-l border-slate-700 shadow-inner flex items-center justify-center"
                style={{ transform: 'rotateY(-90deg) translateZ(20px)', transformOrigin: 'left' }}
              >
                <span className="text-white text-xs whitespace-nowrap -rotate-90 tracking-widest opacity-50">
                  ABHISHEK SHUKLA
                </span>
              </div>
              
              {/* Book Pages (Right Side Depth) */}
              <div 
                className="absolute right-0 top-[1%] w-[38px] h-[98%] bg-white border-y border-r border-slate-300 rounded-r-md flex flex-col justify-evenly"
                style={{ transform: 'rotateY(90deg) translateZ(1px)', transformOrigin: 'right' }}
              >
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-full h-[1px] bg-slate-200"></div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Book Content */}
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  {siteConfig.books.items[0].title}
                </h3>
                
                {/* Amazon Rating Summary */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-700">4.9/5 on Amazon</span>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {siteConfig.books.items[0].description}
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl mb-8">
                  <p className="font-semibold text-blue-900 mb-2">Inside this book, you'll discover:</p>
                  <ul className="list-disc list-inside text-blue-800/80 space-y-1 text-sm">
                    <li>How to build authentic trust with modern teams</li>
                    <li>Translating human empathy into measurable business ROI</li>
                    <li>Navigating complex escalations with operational grace</li>
                  </ul>
                </div>
              </div>
              
              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href={siteConfig.books.items[0].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF9900] text-slate-900 font-black hover:bg-[#e68a00] hover:scale-105 transition-all shadow-lg shadow-orange-500/20"
                >
                  Buy on Amazon
                  <ExternalLink className="w-5 h-5" />
                </a>
                
                <button 
                  onClick={() => alert("Free Chapter 1 download will be available soon!")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all shadow-sm"
                >
                  <Download className="w-5 h-5" />
                  Read Sample Chapter
                </button>
              </div>

              {/* Reviews Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200">
                {reviews.map((review, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <Quote className="w-6 h-6 text-blue-200 mb-3" />
                    <p className="text-sm text-slate-600 italic mb-4">"{review.text}"</p>
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">- {review.author}</p>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
    </section>
  );
}
