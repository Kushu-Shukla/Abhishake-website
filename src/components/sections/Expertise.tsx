'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';
import Image from 'next/image';

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-slate-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div>
              <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
                EXPERTISE & CERTIFICATIONS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue">
                {siteConfig.expertise.title || 'Skills & Certifications'}
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl">
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
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.expertise.skills.map((skill: any, index: number) => (
              <FadeIn key={skill.name} delay={index * 0.1}>
                <div className="glass p-5 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-slate-900 font-medium text-lg">{skill.name}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-100/50 text-slate-600 mt-1 inline-block">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-slate-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Recognitions & Badges</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-16">
              {(siteConfig.expertise as any).badges?.map((badge: any, index: number) => (
                <a 
                  href={badge.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={`badge-${index}`}
                  className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-black w-48 h-64 flex-shrink-0 border border-slate-800"
                >
                  <Image 
                    src={badge.image} 
                    alt={badge.name} 
                    fill 
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold text-xs text-center w-full">{badge.name}</span>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Professional Certifications</h3>
            
            {/* Featured Image Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {siteConfig.expertise.certifications
                .filter((cert: any) => cert.image)
                .map((cert: any, index: number) => (
                <div 
                  key={`img-${index}`}
                  className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white aspect-[4/3]"
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
