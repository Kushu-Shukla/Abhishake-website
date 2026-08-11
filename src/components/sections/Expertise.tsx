'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Award } from 'lucide-react';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-slate-800/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase block mb-4">
              EXPERTISE & CERTIFICATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
              {siteConfig.expertise.title || 'Skills & Certifications'}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              {siteConfig.expertise.subtitle || 'A comprehensive overview of my technical skills, tools, and professional certifications.'}
            </p>
          </div>
        </FadeIn>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.expertise.skills.map((skill: any, index: number) => (
              <FadeIn key={skill.name} delay={index * 0.1}>
                <div className="glass p-5 rounded-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-white font-medium text-lg">{skill.name}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-white/70 mt-1 inline-block">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-white/40 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-gold-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              {siteConfig.expertise.certifications.map((cert: string, index: number) => (
                <div 
                  key={index}
                  className="glass px-6 py-3 rounded-full border border-gold-500/20 flex items-center gap-3 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300 group"
                >
                  <BadgeCheck className="w-5 h-5 text-cyan-400 group-hover:text-gold-400 transition-colors" />
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
