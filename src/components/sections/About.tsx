import { siteConfig } from "@/config";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-light text-brand-navy mb-12 text-center">
          {siteConfig.about.heading}
        </h1>
        
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {siteConfig.about.roles.map((role, i) => (
            <span key={i} className="text-sm font-semibold tracking-widest text-brand-gold uppercase px-4 py-2 border border-brand-gold/30">
              {role}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-brand-gray-dark mb-16 text-center">
          <p className="text-xl leading-relaxed">
            {siteConfig.about.copy}
          </p>
        </div>

        <div className="bg-brand-offwhite p-10 border border-brand-gray/50 mb-16 text-center">
          <h3 className="text-xl font-medium text-brand-navy mb-8">Core Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.about.focus.map((focus, i) => (
              <span key={i} className="bg-white border border-brand-gray px-4 py-2 text-sm text-brand-navy rounded-full">
                {focus}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href={siteConfig.about.resumeUrl} target="_blank" className="inline-flex items-center px-8 py-4 bg-brand-navy text-white text-center rounded-none font-medium hover:bg-brand-navy/90 transition-colors">
            <Download className="mr-2 w-5 h-5" /> Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
