'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Zap, Globe, Sparkles } from 'lucide-react';
import { LinkedinIcon } from '@/components/icons/SocialIcons';
import { siteConfig } from '@/config';

export default function Collaborate() {
  return (
    <section id="collaborate" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Open for Opportunities
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborate</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Have an idea, project, campaign, or opportunity in mind? 
              Whether you are a startup, an established brand, or a recruiter, 
              let’s build something impactful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all"
              >
                Start a Collaboration
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-[#0A66C2] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(10,102,194,0.5)] transition-all"
              >
                <LinkedinIcon className="w-5 h-5 fill-current" />
                LinkedIn Collab
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-blue-400" />,
                title: 'Companies & Brands',
                desc: 'Consulting, fractional leadership, and strategic integrations.'
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: 'Startups',
                desc: 'Building MVP roadmaps, growth strategies, and operational scaling.'
              },
              {
                icon: <Globe className="w-8 h-8 text-green-400" />,
                title: 'Professionals & Teams',
                desc: 'Providing help, mentorship, and guidance to all levels—from agents to executives.'
              },
              {
                icon: <Sparkles className="w-8 h-8 text-purple-400" />,
                title: 'Campaigns',
                desc: 'Speaking engagements, podcast appearances, and writing.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
