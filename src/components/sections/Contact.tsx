'use client';

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { LinkedinIcon, TwitterXIcon, InstagramIcon, YoutubeIcon, Thinkers360Icon } from '@/components/icons/SocialIcons';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';
import Image from 'next/image';

export function Contact() {
  const socialLinks = [
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: LinkedinIcon },
    { name: 'X (Twitter)', url: siteConfig.social.twitter, icon: TwitterXIcon },
    { name: 'Instagram', url: siteConfig.social.instagram, icon: InstagramIcon },
    { name: 'YouTube', url: siteConfig.social.youtube, icon: YoutubeIcon },
    { name: 'Thinkers360', url: siteConfig.social.thinkers360, icon: Thinkers360Icon },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <FadeIn>

          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase block mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-blue">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mb-12 mx-auto">
            {siteConfig.contact.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full max-w-4xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass p-8 rounded-2xl flex flex-col items-center group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/10 transition-colors duration-300">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-medium text-lg mb-2">Phone</h3>
              <a href={`tel:${siteConfig.phone}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                {siteConfig.phone}
              </a>
            </div>
            
            <div className="glass p-8 rounded-2xl flex flex-col items-center group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/10 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-medium text-lg mb-2">Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors break-all">
                {siteConfig.email}
              </a>
            </div>

            <div className="glass p-8 rounded-2xl flex flex-col items-center group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/10 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-medium text-lg mb-2">Location</h3>
              <p className="text-slate-600 dark:text-slate-300">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="w-full max-w-2xl">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <Icon className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-slate-500 text-sm">
            <a 
              href={siteConfig.social.freelancer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
            >
              Freelancer Profile <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href={siteConfig.social.jobbers}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
            >
              Jobbers Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
