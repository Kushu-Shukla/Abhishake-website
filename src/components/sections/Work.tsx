'use client';

import { useState, useRef, MouseEvent, FormEvent } from 'react';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';
import { BookOpen, Award, Cpu, Users, ArrowUpRight, LucideIcon, X } from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Award,
  Cpu,
  Users,
};

function WorkCard({ item, index, onClick }: { item: typeof siteConfig.work.items[number]; index: number; onClick: () => void }) {
  const iconName = item.icon as string;
  const Icon = iconMap[iconName] || BookOpen;
  
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <FadeIn delay={index * 0.1} direction="up" className="h-full">
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out, border-color 0.3s ease-in-out',
        }}
        className="cursor-pointer group relative glass rounded-2xl p-8 h-full flex flex-col hover:border-blue-500/30 overflow-hidden transform-gpu"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform duration-500">
            <div className="w-full h-full bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors duration-300" />
        </div>

        <div className="mt-auto">
          <p className="text-blue-600 text-xs uppercase tracking-wider mb-2 font-medium">
            {item.category || 'Project'}
          </p>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
            {item.description}
          </p>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, i: number) => (
                <span 
                  key={i}
                  className="bg-white dark:bg-slate-950/5 text-slate-500 px-3 py-1 text-xs rounded-full border border-slate-200 group-hover:border-slate-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export function Work() {
  const items = siteConfig.work?.items || [];
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Inquiry: ${selectedService.title}`);
    const body = encodeURIComponent(`Hi Abhishek,\n\nI am interested in your service: ${selectedService.title}.\n\nMessage:\n${message}\n\nFrom: ${name} (${email})`);
    
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSelectedService(null);
  };
  
  return (
    <section id="work" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 gap-12">
          <FadeIn direction="right" className="md:w-2/3 text-left">
            <p className="text-blue-600 text-sm tracking-widest uppercase mb-4 font-semibold">SELECTED WORK</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue mb-6">
              Selected Work
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-lg">
              {siteConfig.work?.subtitle || "Showcasing some of my recent projects and collaborations."}
            </p>
          </FadeIn>
          
          <FadeIn direction="left" className="md:w-1/3 flex justify-center perspective">
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl shadow-pink-500/30 border-4 border-white animate-float hover:scale-110 hover:rotate-[8deg] transition-all duration-500 cursor-grab active:cursor-grabbing">
              <Image src="/profile_grey.png" alt="Abhishek Shukla Work" fill className="object-cover" />
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item: any, index: number) => (
            <WorkCard key={index} item={item} index={index} onClick={() => setSelectedService(item)} />
          ))}
        </div>
      </div>

      {/* Service Request Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div 
            className="absolute inset-0"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="bg-white dark:bg-slate-950 rounded-3xl w-full max-w-lg p-8 relative z-10 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Service</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium text-blue-600">{selectedService.title}</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-slate-50 dark:bg-slate-900"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-slate-50 dark:bg-slate-900"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Message</label>
                <textarea 
                  name="message" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-slate-50 dark:bg-slate-900 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="mt-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-blue-500/25"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
