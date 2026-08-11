'use client';

import { Download, Briefcase, Globe, MapPin, Languages } from 'lucide-react';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';

export function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <FadeIn>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase block mb-4">
            RESUME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
            My Professional Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-12 mx-auto">
            Get a detailed overview of my professional experience, education, and technical background. 
            Download my resume to see how I can add value to your next project.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={siteConfig.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 font-bold px-10 py-5 rounded-full text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 mb-16"
          >
            <Download className="w-6 h-6" />
            Download Resume
          </a>
        </FadeIn>

        <FadeIn delay={0.4} className="w-full max-w-4xl">
          <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 mb-2">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium">Experience</h4>
                <p className="text-white/50 text-sm">6+ Years</p>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gold-400 mb-2">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium">Industries</h4>
                <p className="text-white/50 text-sm">Tech & Media</p>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 mb-2">
                  <Languages className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium">Languages</h4>
                <p className="text-white/50 text-sm">English, Hindi</p>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gold-400 mb-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-white/50 text-sm">India / Remote</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
}
