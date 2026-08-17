'use client';

import { useState, useRef, MouseEvent } from 'react';
import { siteConfig } from '@/config';
import { FadeIn } from '@/components/animations';
import { BookOpen, Award, Cpu, Users, ArrowUpRight, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Award,
  Cpu,
  Users,
};

function WorkCard({ item, index }: { item: typeof siteConfig.work.items[number]; index: number }) {
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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out, border-color 0.3s ease-in-out',
        }}
        className="group relative glass rounded-2xl p-8 h-full flex flex-col hover:border-blue-500/30 overflow-hidden transform-gpu"
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
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            {item.description}
          </p>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string, i: number) => (
                <span 
                  key={i}
                  className="bg-white/5 text-slate-500 px-3 py-1 text-xs rounded-full border border-slate-200 group-hover:border-slate-200 transition-colors"
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
  
  return (
    <section id="work" className="py-24 md:py-32 bg-slate-50/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <FadeIn direction="up">
            <p className="text-blue-600 text-sm tracking-widest uppercase mb-4 font-semibold">SELECTED WORK</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue mb-6">
              Selected Work
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {siteConfig.work?.subtitle || "Showcasing some of my recent projects and collaborations."}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item: any, index: number) => (
            <WorkCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
