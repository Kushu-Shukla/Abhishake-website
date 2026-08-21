'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';
import Image from 'next/image';

export function Expertise() {
  return (
    <section id="expertise" className="py-12 md:py-16 md:py-32 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <FadeIn>
            <div>
              <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
                EXPERTISE & CERTIFICATIONS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue">
                {siteConfig.expertise.title || 'Skills & Certifications'}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl">
                {siteConfig.expertise.subtitle || 'A comprehensive overview of my technical skills, tools, and professional certifications.'}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="flex justify-center lg:justify-end perspective">
            <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl shadow-purple-500/30 border-4 border-white animate-float hover:scale-110 hover:-rotate-[5deg] transition-all duration-500 cursor-grab active:cursor-grabbing">
              <Image src="/expertise_profile.jpg" alt="Abhishek Shukla Expertise" fill className="object-cover" />
            </div>
          </FadeIn>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Core Competencies</h3>
          <div className="flex flex-wrap gap-4">
            {siteConfig.expertise.skills.map((skill: any, index: number) => (
              <FadeIn key={skill.name} delay={index * 0.05}>
                <div className="bg-white dark:bg-slate-950 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-4 rounded-xl flex flex-col">
                  <h4 className="text-slate-900 dark:text-white font-semibold text-lg">{skill.name}</h4>
                  <span className="text-sm text-blue-600 font-medium mt-1">
                    {skill.category}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Professional Certifications</h3>
            
            {/* Featured Image Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {siteConfig.expertise.certifications
                .filter((cert: any) => cert.image)
                .map((cert: any, index: number) => (
                <div 
                  key={`img-${index}`}
                  className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-950 aspect-[4/3]"
                >
                  <Image 
                    src={cert.image} 
                    alt={cert.name} 
                    fill 
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold text-sm">{cert.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
