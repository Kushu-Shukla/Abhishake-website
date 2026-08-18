'use client';

import { siteConfig } from '@/config';
import { Plane, ShoppingBag, Briefcase, Globe, Cloud } from 'lucide-react';

const companies = [
  { name: 'Air India', icon: Plane },
  { name: 'IndiGo', icon: Cloud },
  { name: 'Flipkart Travel', icon: ShoppingBag },
  { name: 'Clear Trip', icon: Globe },
  { name: 'Freelancer.com', icon: Briefcase },
  // Duplicate for seamless infinite scroll
  { name: 'Air India', icon: Plane },
  { name: 'IndiGo', icon: Cloud },
  { name: 'Flipkart Travel', icon: ShoppingBag },
  { name: 'Clear Trip', icon: Globe },
  { name: 'Freelancer.com', icon: Briefcase },
];

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-slate-200/50 bg-slate-50/50 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          TRUSTED BY INDUSTRY LEADERS
        </p>
      </div>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
        {companies.map((company, index) => {
          const Icon = company.icon;
          return (
            <div 
              key={index}
              className="flex items-center gap-3 px-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <Icon className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-extrabold text-slate-800 tracking-tight whitespace-nowrap">
                {company.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
