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
            <div className="text-center mb-16">
              <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">INDUSTRY RECOGNITION</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Top Thought Leader by <span className="text-purple-600">Thinkers360</span></h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {/* Agile Card */}
                <div className="bg-[#0a0a0a] rounded-xl w-[200px] p-6 border border-slate-800 shadow-xl flex flex-col items-center">
                  <h4 className="text-white text-3xl font-bold mb-1">Top 100</h4>
                  <p className="text-slate-400 text-xs font-semibold tracking-wider mb-6">THOUGHT LEADER</p>
                  <div className="bg-white w-full py-2 mb-8 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">Agile</span>
                  </div>
                  <div className="mt-auto opacity-50">
                    <div className="border border-white/50 rounded-b-full w-12 h-14 flex items-center justify-center text-[10px] text-white text-center leading-tight">
                      thinkers<br/>360
                    </div>
                  </div>
                </div>

                {/* Agentic AI, Customer Loyalty, and Project Management removed as requested */}

                {/* Leadership Card */}
                <div className="bg-[#0a0a0a] rounded-xl w-[200px] p-6 border border-[#c59a35] shadow-[0_0_15px_rgba(197,154,53,0.3)] flex flex-col items-center">
                  <p className="text-slate-200 text-xs font-semibold tracking-wider mb-2">CERTIFIED EXPERT</p>
                  <svg className="w-8 h-8 text-[#c59a35] mb-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="bg-gradient-to-r from-[#8a6b24] via-[#c59a35] to-[#8a6b24] w-full py-2 mb-8 flex items-center justify-center">
                    <span className="text-white font-bold text-sm tracking-wider">LEADERSHIP</span>
                  </div>
                  <div className="mt-auto">
                    <div className="border border-[#c59a35] rounded-b-full w-12 h-14 flex items-center justify-center text-[10px] text-[#c59a35] text-center leading-tight shadow-[0_0_5px_rgba(197,154,53,0.3)]">
                      thinkers<br/>360
                    </div>
                  </div>
                </div>

              </div>
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
