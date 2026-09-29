import { siteConfig } from "@/config";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-offwhite">
      {/* Subtle background geometry */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold tracking-widest text-brand-gold uppercase mb-6 block">
            {siteConfig.hero.eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-brand-navy leading-tight mb-8">
            {siteConfig.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray-dark mb-10 max-w-3xl leading-relaxed">
            {siteConfig.hero.description}
          </p>
          <p className="text-sm tracking-widest uppercase text-brand-navy/60 font-medium mb-12">
            {siteConfig.hero.subtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={siteConfig.hero.cta1.href}
              className="px-8 py-4 bg-brand-navy text-white text-center rounded-none font-medium hover:bg-brand-navy/90 transition-colors"
            >
              {siteConfig.hero.cta1.text}
            </Link>
            <Link 
              href={siteConfig.hero.cta2.href}
              className="px-8 py-4 border border-brand-gray-dark/20 text-brand-navy text-center rounded-none font-medium hover:bg-brand-gray/50 transition-colors"
            >
              {siteConfig.hero.cta2.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
