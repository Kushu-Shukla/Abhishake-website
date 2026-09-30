import { siteConfig } from "@/config";
import Image from "next/image";
import { SceneLoader } from "../three";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 px-6 bg-[#0f172a] text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <SceneLoader />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            {siteConfig.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl">
            {siteConfig.hero.supporting}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={siteConfig.hero.cta1.href} className="px-8 py-4 bg-[#0284c7] text-white rounded-full font-semibold hover:bg-sky-600 transition text-center">
              {siteConfig.hero.cta1.text}
            </a>
            <a href={siteConfig.hero.cta2.href} className="px-8 py-4 bg-white text-[#0f172a] rounded-full font-semibold hover:bg-slate-100 transition text-center">
              {siteConfig.hero.cta2.text}
            </a>
          </div>
        </div>
        <div className="w-64 h-64 md:w-96 md:h-96 relative flex-shrink-0">
          <div className="absolute inset-0 bg-[#0284c7] rounded-full opacity-20 blur-2xl"></div>
          <Image 
            src={siteConfig.profileImage} 
            alt={siteConfig.name} 
            fill 
            className="object-cover object-top rounded-full border-4 border-[#1e293b]" 
            priority
          />
        </div>
      </div>
    </section>
  );
}